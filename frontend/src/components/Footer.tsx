import Link from 'next/link';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row dark:text-slate-400">
        <p>
          © {year} {profile.name}. {profile.title}.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="hover:text-sky-600 dark:hover:text-sky-400">
            About
          </Link>
          <Link href="/projects" className="hover:text-sky-600 dark:hover:text-sky-400">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-sky-600 dark:hover:text-sky-400">
            Contact
          </Link>
          <a
            href={profile.resumePath}
            download
            className="font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
