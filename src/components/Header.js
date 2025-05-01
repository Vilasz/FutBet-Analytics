'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home',        href: '/' },
    { label: 'Pricing',     href: '/pricing' },
    { label: 'Statistics',  href: '/statistics' },
  ];

  return (
    <header className="fixed w-full bg-gray-800/90 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Futbet Analytics
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                transition
                ${pathname === item.href
                  ? 'text-blue-400 font-semibold'
                  : 'text-gray-300 hover:text-blue-400'}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* search icon – no logic yet */}
          <button className="header-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* login icon – hook up auth later */}
          <button className="header-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Shared classes */}
      <style jsx>{`
        .header-icon {
          @apply text-gray-300 hover:text-blue-400 transition;
        }
      `}</style>
    </header>
  );
}
