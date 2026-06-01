import Link from 'next/link';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--card-border)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold">
            {profile.name}
            <span className="text-gradient">.</span>
          </p>
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
            {profile.title} · {profile.location}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-sm">
          <Link href="/projects" className="opacity-70 hover:text-cyan-500 hover:opacity-100">
            Projects
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:text-cyan-500 hover:opacity-100">
            LinkedIn
          </a>
          <a href={profile.resumePath} download className="font-semibold text-cyan-500">
            Resume
          </a>
        </div>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © {year}
        </p>
      </div>
    </footer>
  );
}
