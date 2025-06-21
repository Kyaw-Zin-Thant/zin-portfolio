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
      <body className={inter.className}>
        <ClientThemeProvider>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
            {children}
          </main>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
