'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Cảm ơn bạn đã đăng ký newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-slate-200 dark:bg-[#120808] border-t border-slate-300 dark:border-[#472426] py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-5 text-[#ea2a33]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold">Auto Care & Tuning</h2>
          </div>
          <p className="text-slate-600 dark:text-[#c89295] text-sm">
            Elevating automotive standards since 2014. Premium care for premium owners.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-[#c89295]">
            <li>
              <Link href="/services" className="hover:text-[#ea2a33] transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ea2a33] transition-colors">
                Tuning Packages
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#ea2a33] transition-colors">
                Performance Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ea2a33] transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold mb-4">Hours</h3>
          <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-[#c89295]">
            <li>Mon - Fri: 8:00 AM - 7:00 PM</li>
            <li>Sat: 9:00 AM - 5:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold mb-4">Newsletter</h3>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="bg-white dark:bg-[#221112] border border-slate-300 dark:border-[#663336] rounded-lg px-3 py-2 text-sm flex-1 focus:ring-1 focus:ring-[#ea2a33] outline-none text-slate-900 dark:text-white"
              required
            />
            <button
              type="submit"
              className="bg-[#ea2a33] px-3 py-2 rounded-lg text-white hover:bg-red-700 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-12 pt-6 border-t border-slate-300 dark:border-[#472426] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-[#663336]">
        <p>© {currentYear} Auto Care & Tuning Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-[#ea2a33] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#ea2a33] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
