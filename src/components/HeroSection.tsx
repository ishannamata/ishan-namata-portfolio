import { motion } from 'motion/react';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import { jsPDF } from 'jspdf';
import resumeData from '../data/resume.json';

export default function HeroSection() {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const doc = new jsPDF();
    let y = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const maxLineWidth = pageWidth - margin * 2;

    const addText = (text: string, fontSize: number, isBold: boolean = false, spacing: number = 7) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      const lines = doc.splitTextToSize(text, maxLineWidth);
      lines.forEach((line: string) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, margin, y);
        y += spacing;
      });
    };

    // Header
    addText(basics.name, 22, true, 10);
    addText(basics.title2 || basics.title, 12, false, 6);
    addText(`${basics.email} | ${basics.phone} | ${basics.location}`, 10, false, 6);
    addText(`LinkedIn: ${basics.links.linkedin}`, 10, false, 6);
    addText(`GitHub: ${basics.links.github}`, 10, false, 10);

    // Summary
    addText("SUMMARY", 14, true, 8);
    addText(basics.summary, 10, false, 6);
    y += 4;

    // Education
    if (resumeData.education && resumeData.education.length > 0) {
      addText("EDUCATION", 14, true, 8);
      resumeData.education.forEach(edu => {
        addText(edu.degree, 12, true, 6);
        addText(`${edu.institution} | ${edu.dates}`, 10, false, 6);
        if (edu.details) addText(edu.details, 10, false, 6);
        y += 4;
      });
    }

    // Skills
    if (resumeData.skills && resumeData.skills.length > 0) {
      addText("SKILLS", 14, true, 8);
      resumeData.skills.forEach(skill => {
        addText(`${skill.category}: ${skill.items.join(', ')}`, 10, false, 6);
      });
      y += 4;
    }

    // Experience
    if (resumeData.experience && resumeData.experience.length > 0) {
      addText("EXPERIENCE", 14, true, 8);
      resumeData.experience.forEach(exp => {
        addText(`${exp.role} at ${exp.company}`, 12, true, 6);
        addText(`${exp.dates} | ${exp.location}`, 10, false, 6);
        exp.bullets.forEach(b => addText(`• ${b}`, 10, false, 6));
        y += 4;
      });
    }

    // Projects
    if (resumeData.projects && resumeData.projects.length > 0) {
      addText("PROJECTS", 14, true, 8);
      resumeData.projects.forEach(proj => {
        addText(`${proj.title} (${proj.dates})`, 12, true, 6);
        addText(`Tech: ${proj.stack.join(', ')}`, 10, false, 6);
        proj.bullets.forEach(b => addText(`• ${b}`, 10, false, 6));
        y += 4;
      });
    }

    // Certifications
    if (resumeData.certifications && resumeData.certifications.length > 0) {
      addText("CERTIFICATIONS", 14, true, 8);
      resumeData.certifications.forEach(cert => {
        addText(`• ${cert}`, 10, false, 6);
      });
    }

    doc.save(`${basics.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-md">
          <Terminal className="h-4 w-4" />
          <span>Available for new opportunities</span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
          <span className="block">{basics.name}</span>
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {basics.title}
          </span>
        </h1>
        <h2 className="mb-6 text-lg sm:text-xl font-medium bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
  {basics.title2}
</h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          {basics.summary}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToExperience}
            className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105 sm:w-auto"
          >
            View Experience
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
