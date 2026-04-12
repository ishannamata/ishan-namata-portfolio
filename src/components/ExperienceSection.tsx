import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function ExperienceSection() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 sm:pl-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-slate-950 bg-indigo-500 sm:-left-[57px]" />
              
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/10">
                <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-lg font-medium text-indigo-400">{exp.company}</div>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-300">
                      {exp.dates}
                    </span>
                    <span className="text-sm text-slate-500">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-slate-400">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/50" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
