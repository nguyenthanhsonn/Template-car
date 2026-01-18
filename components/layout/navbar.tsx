'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/services', label: 'Services', key: 'services' },
    { href: '/tuning', label: 'Tuning', key: 'tuning' },
    { href: '/gallery', label: 'Gallery', key: 'gallery' },
    { href: '/about', label: 'About', key: 'about' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#472426] px-4 md:px-10 py-4 max-w-[1280px] mx-auto w-full bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-4">
        <div className="size-6 text-[#ea2a33]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
          </svg>
        </div>
        <Link href="/">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            Auto Care & Tuning
          </h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-slate-700 dark:text-white text-sm font-medium leading-normal hover:text-[#ea2a33] transition-colors ${
                pathname === link.href ? 'text-[#ea2a33]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[#ea2a33] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
        >
          <span className="truncate">Book Appointment</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#ea2a33] rounded-lg p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-[#472426] p-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-slate-700 dark:text-white hover:text-[#ea2a33] transition-colors px-3 py-2 rounded-lg ${
                  pathname === link.href ? 'text-[#ea2a33] bg-slate-100 dark:bg-[#331a1b]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#ea2a33] text-white px-4 py-2.5 rounded-md font-semibold hover:bg-red-700 transition-colors text-center mt-2"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
