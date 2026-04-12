import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Contact } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function ContactSection() {
  const { basics } = resumeData;

  return (
    <section id="contact" className="relative py-12 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 flex items-center gap-4 justify-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl"></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href={`mailto:${basics.email}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/10"
          >
            <Mail className="h-6 w-6 text-indigo-400" />
            <span className="text-slate-300">{basics.email}</span>
          </a>

          <a
            href={`tel:${basics.phone}`}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/10"
          >
            <Phone className="h-6 w-6 text-indigo-400" />
            <span className="text-slate-300">{basics.phone}</span>
          </a>

          <a
            href={basics.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/10"
          >
            <Linkedin className="h-6 w-6 text-indigo-400" />
            <span className="text-slate-300">LinkedIn</span>
          </a>

          <a
            href={basics.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-white/10"
          >
            <Github className="h-6 w-6 text-indigo-400" />
            <span className="text-slate-300">GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
