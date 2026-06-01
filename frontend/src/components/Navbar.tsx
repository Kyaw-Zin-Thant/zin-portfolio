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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b backdrop-blur-xl' : 'bg-transparent'
      }`}
      style={{
        borderColor: scrolled ? 'var(--card-border)' : 'transparent',
        background: scrolled ? 'var(--card)' : 'transparent',
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {profile.nameShort}
          <span className="text-gradient">.</span>
          <span className="ml-1 text-xs font-normal opacity-60">dev</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                pathname === href
                  ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-300'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={profile.resumePath} download className="btn-primary ml-2 !py-2 !text-xs">
            Resume
          </a>
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 rounded-lg p-2 opacity-70 hover:opacity-100"
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
              className="rounded-lg p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
          <button type="button" onClick={() => setOpen(!open)} className="rounded-lg p-2" aria-label="Menu">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: 'var(--card-border)' }}>
          <div className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === href ? 'text-cyan-500' : 'opacity-80'
                }`}
              >
                {label}
              </Link>
            ))}
            <a href={profile.resumePath} download className="btn-primary mt-2">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
