'use client';
import Link from 'next/link';

export default function Navbar() {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => setMounted(true), []);
  // useEffect(() => {
  //   console.log('Current theme:', theme);
  // }, [theme]);
  return (
    <nav className="w-full py-4 px-4 sm:px-6 md:px-8 bg-white text-black dark:bg-gray-800 dark:text-white shadow-md flex flex-col sm:flex-row justify-between items-center gap-4 sticky top-0 z-50">
      <h1 className="font-bold text-xl">Kyaw Zin Thant</h1>
      <div className="space-x-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        {/* {mounted && (
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="ml-2 border px-2 py-1 rounded text-xs"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        )} */}
      </div>
    </nav>
  );
}