'use client';

import Image from 'next/image';
import { useState } from 'react';

type CompanyLogoProps = {
  src: string;
  company: string;
};

export default function CompanyLogo({ src, company }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);
  const initial = company.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-sky-100 text-sm font-bold text-sky-700 dark:border-slate-700 dark:bg-sky-950 dark:text-sky-300"
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-1 dark:border-slate-700">
      <Image
        src={src}
        alt={`${company} logo`}
        fill
        className="object-contain p-1"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
