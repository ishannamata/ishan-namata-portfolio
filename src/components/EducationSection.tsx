import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function EducationSection() {
  const { education, certifications } = resumeData;

  return (
    <section id="education" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2">
        
        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <div className="text-purple-400">{edu.institution}</div>
                  </div>
                  <div className="shrink-0 text-sm font-medium text-slate-500">
                    {edu.dates}
                  </div>
                </div>
                {edu.details && (
                  <div className="mt-4 inline-block rounded-lg bg-white/5 px-3 py-1 text-sm font-mono text-slate-300">
                    {edu.details}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Certifications</h2>
          </motion.div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-pink-500/30 hover:bg-white/10"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                <p className="text-slate-300 leading-relaxed">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
