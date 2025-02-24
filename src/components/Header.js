import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Futbet Analytics
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Home
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Pricing
          </Link>
          <Link href="/statistics" className="text-gray-300 hover:text-blue-400 transition duration-300">
            Statistics
          </Link>
        </nav>

        {/* Ícones de busca e login */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-blue-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-blue-400 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}