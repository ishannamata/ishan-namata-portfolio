import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import resumeData from '../data/resume.json';

export default function Footer() {
  const { basics } = resumeData;

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/50 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-12 lg:px-24">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">{basics.name}</h2>
          <p className="text-slate-400">{basics.title}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={`mailto:${basics.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`tel:${basics.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href={`https://linkedin.com/in/${basics.links.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`https://github.com/${basics.links.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
