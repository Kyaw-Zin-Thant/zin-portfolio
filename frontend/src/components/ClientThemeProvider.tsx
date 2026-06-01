'use client';

import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

export default function ClientThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem {...props}>
      {children}
    </ThemeProvider>
  );
}
