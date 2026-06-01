'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { profile } from '@/data/portfolio';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {profile.name.split(' ')[0]}
          <span className="text-sky-600 dark:text-sky-400">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === href
                  ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300'
                  : 'nav-link'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={profile.resumePath} download className="btn-primary ml-2 text-xs">
            Resume
          </a>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg p-2 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-700 dark:text-slate-200"
            aria-label="Menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === href
                    ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300'
                    : 'nav-link'
                }`}
              >
                {label}
              </Link>
            ))}
            <a href={profile.resumePath} download className="btn-primary mt-2">
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
