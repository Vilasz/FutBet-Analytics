'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-0 grid gap-10 md:grid-cols-3">
        {/* Brand / Slogan */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            Futbet Analytics
          </h2>
          <p className="text-gray-400 text-sm">
            Transformando estatísticas em vitórias.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
          <ul className="space-y-2">
            <li><Link href="/"          className="footer-link">Home</Link></li>
            <li><Link href="/pricing"    className="footer-link">Pricing</Link></li>
            <li><Link href="/statistics" className="footer-link">Statistics</Link></li>
            <li><Link href="/about"      className="footer-link">Sobre nós</Link></li>
          </ul>
        </div>

        {/* Social icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
          <div className="flex space-x-6">
            {/* Swap the SVGs for any icon library you like */}
            <a href="#" aria-label="Twitter"  className="social-btn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 19c11 0 16-9.2 16-16 0-.2 0-.4 0-.6A11.4 11.4 0 0026 0a11 11 0 01-3.2.9A5.7 5.7 0 0025.4.4a11.5 11.5 0 01-3.6 1.4A5.6 5.6 0 0012.9 6a16 16 0 01-11.6-6A5.6 5.6 0 003.9 8.3a5.5 5.5 0 01-2.5-.7v.1a5.6 5.6 0 004.5 5.5 5.4 5.4 0 01-2.5.1A5.6 5.6 0 007.6 17a11.3 11.3 0 01-7 2.4c-.4 0-.8 0-1.1-.1A16 16 0 008 19z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-btn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5a4.6 4.6 0 011.6 1.1 4.6 4.6 0 011.1 1.6c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3a4.6 4.6 0 01-1.1 1.6 4.6 4.6 0 01-1.6 1.1c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5a4.6 4.6 0 01-1.6-1.1 4.6 4.6 0 01-1.1-1.6c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3A4.6 4.6 0 014 3.2a4.6 4.6 0 011.6-1.1c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.2 0 7 0 5.8 0 5 0 4.2.1 3.3.2 2.6.4 2 .6a6.8 6.8 0 00-2 1.2A6.8 6.8 0 00.6 4a7 7 0 00-.5 2 .3.3 0 00-.1 1C0 8.2 0 8.7 0 12c0 3.3 0 3.8.1 5 .1 1 .3 1.7.5 2.3.2.6.5 1.2.8 1.7a7 7 0 001.2 2 6.8 6.8 0 002 1.2c.6.2 1.3.4 2.3.5 1.2.1 1.7.1 5 .1s3.8 0 5-.1c1-.1 1.7-.3 2.3-.5a7 7 0 002-1.2 6.8 6.8 0 002-1.2 7.1 7.1 0 001.2-2 6.8 6.8 0 00.8-1.7c.2-.6.4-1.3.5-2.3.1-1.2.1-1.7.1-5s0-3.8-.1-5c-.1-1-.3-1.7-.5-2.3a6.8 6.8 0 00-.8-1.7 7 7 0 00-1.2-2 6.8 6.8 0 00-2-1.2c-.6-.2-1.3-.4-2.3-.5C15.8 0 15.3 0 12 0z" />
                <circle cx="12" cy="12" r="3.2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Futbet Analytics. Todos os direitos reservados.
      </div>

      {/* Shared TW classes */}
      <style jsx>{`
        .footer-link {
          @apply text-gray-400 hover:text-blue-400 transition;
        }
        .social-btn {
          @apply text-gray-400 hover:text-blue-400 transition;
        }
      `}</style>
    </footer>
  );
}
