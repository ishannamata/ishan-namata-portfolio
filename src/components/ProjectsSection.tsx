import { motion } from 'motion/react';
import { Code2, ExternalLink } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="relative py-24 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
            <Code2 className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                <div className="mb-6 flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.links && project.links.length > 0 && (
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                
                <ul className="mb-8 space-y-3 text-sm text-slate-400">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-white/5 px-3 py-1 text-xs font-mono text-cyan-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
