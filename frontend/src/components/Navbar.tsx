'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full py-4 px-6 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-xl text-primary dark:text-white">Kyaw Zin Thant</h1>
      <div className="space-x-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="ml-4 border px-2 py-1 rounded text-xs"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        )}
      </div>
    </nav>
  );
}