import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ClientThemeProvider from '@/components/ClientThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kyaw Zin Thant | Portfolio',
  description: 'Senior Full Stack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={`${inter.className} transition-colors`}>
        <ClientThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
            {children}
          </main>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
