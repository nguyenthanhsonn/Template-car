'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
      setSubmitSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'ECU Remapping & Tuning',
    'Performance Exhaust Systems',
    'Scheduled Maintenance',
    'Suspension & Brake Upgrades',
    'Diagnostic & Repair',
  ];

  return (
    <div className="min-h-screen">
      <main className="flex-grow">
        <div className="px-4 md:px-20 lg:px-40 flex justify-center py-8">
          <div className="w-full max-w-[1200px] flex flex-col gap-8">
            {/* Hero Section Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div
                className="bg-cover bg-center flex flex-col justify-end min-h-[320px] relative"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(18, 9, 9, 1) 0%, rgba(18, 9, 9, 0.4) 50%, rgba(18, 9, 9, 0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcfcOSunGT5NGCZbufs81nC-YPAZwtpYTNl3CGWRrgkOQ7uj3s6C9cjqoKCKpntYzEn2xj7VQJPHRz0Ucy_sZq0u-v5YcFDQOEY8gIKXq090RtX_Jzohknu2pRrt92cZENyWSSyFxCNJs_3Fn33b0zzhIYmZTGrsj7wywR92B2sH2fj0dXYt86NRkU49fj4kHWRgIVAoEGi3dcvk0UjkDOn2_rp9JIOx2nleMbMxUpBDFfnEaAnZIVXQBwRr_rXVe5_GM2nGx27pee')`
                }}
              >
                <div className="p-8 md:p-12">
                  <h2 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] uppercase italic">
                    Get in <span className="text-[#ea2a33]">Touch</span>
                  </h2>
                  <p className="text-gray-300 text-lg md:text-xl font-normal max-w-xl mt-2">
                    Precision engineering meets professional care. Let's discuss your next upgrade or maintenance plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Contact Form (Left) */}
              <div className="lg:col-span-7 bg-[#221112] p-8 rounded-xl border border-[#472426] shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ea2a33]">send</span>
                  Send a Message
                </h3>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                    <p className="text-green-400 font-semibold">
                      ✓ Thank you! Your message has been sent. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Full Name
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-[#120909] border border-[#472426] focus:border-[#ea2a33] focus:ring-1 focus:ring-[#ea2a33] rounded-lg h-14 px-4 text-white placeholder:text-gray-600 transition-all"
                        placeholder="John Doe"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Email Address
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#120909] border border-[#472426] focus:border-[#ea2a33] focus:ring-1 focus:ring-[#ea2a33] rounded-lg h-14 px-4 text-white placeholder:text-gray-600 transition-all"
                        placeholder="john@example.com"
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Phone Number
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#120909] border border-[#472426] focus:border-[#ea2a33] focus:ring-1 focus:ring-[#ea2a33] rounded-lg h-14 px-4 text-white placeholder:text-gray-600 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        Service Required
                      </span>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#120909] border border-[#472426] focus:border-[#ea2a33] focus:ring-1 focus:ring-[#ea2a33] rounded-lg h-14 px-4 text-white appearance-none transition-all"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-[#120909]">
                            {service}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      How can we help?
                    </span>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#120909] border border-[#472426] focus:border-[#ea2a33] focus:ring-1 focus:ring-[#ea2a33] rounded-lg p-4 text-white placeholder:text-gray-600 transition-all resize-none"
                      placeholder="Tell us about your vehicle and goals..."
                      rows={4}
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full bg-[#ea2a33] hover:bg-red-700 text-white font-black py-4 rounded-lg uppercase tracking-widest transition-all shadow-lg shadow-[#ea2a33]/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Inquiry
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info (Right) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* Info Cards */}
                <div className="bg-[#221112] border border-[#472426] rounded-xl p-8 shadow-xl flex-1">
                  <h3 className="text-2xl font-bold mb-8 uppercase italic border-b border-[#472426] pb-4">
                    Contact Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-[#ea2a33]/10 p-3 rounded-lg h-fit">
                        <span className="material-symbols-outlined text-[#ea2a33]">location_on</span>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                          Our Location
                        </p>
                        <p className="text-lg font-medium text-white">
                          128 Tuning Avenue, Gearbox District<br />
                          Los Angeles, CA 90210
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#ea2a33]/10 p-3 rounded-lg h-fit">
                        <span className="material-symbols-outlined text-[#ea2a33]">call</span>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                          Phone Support
                        </p>
                        <p className="text-lg font-medium text-white">+1 (888) 555-0199</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-[#ea2a33]/10 p-3 rounded-lg h-fit">
                        <span className="material-symbols-outlined text-[#ea2a33]">mail</span>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                          Email Address
                        </p>
                        <p className="text-lg font-medium text-white">info@autocaretuning.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 pt-8 border-t border-[#472426]">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Working Hours
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white">Monday - Friday</span>
                        <span className="text-[#ea2a33] font-bold">08:00 AM - 07:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white">Saturday</span>
                        <span className="text-[#ea2a33] font-bold">09:00 AM - 04:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="bg-[#221112] border border-[#472426] rounded-xl p-6 shadow-xl flex items-center justify-between">
                  <span className="font-bold uppercase italic tracking-tighter text-white">
                    Follow the Build
                  </span>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-[#ea2a33] w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-all shadow-lg shadow-[#ea2a33]/20"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#ea2a33] w-12 h-12 rounded-lg flex items-center justify-center hover:bg-red-700 transition-all shadow-lg shadow-[#ea2a33]/20"
                      aria-label="Instagram"
                    >
                      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full rounded-xl overflow-hidden border border-[#472426] shadow-2xl relative">
              <div className="absolute top-4 left-4 z-10 bg-[#120909]/90 p-4 rounded-lg border border-[#472426] backdrop-blur-sm">
                <p className="text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ea2a33]">directions_car</span>
                  Find Us in Gearbox District
                </p>
              </div>
              <div
                className="h-[400px] w-full bg-gray-900 flex items-center justify-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700 relative"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6j8V_bj1odCKg4_OqV55-po7ZhjOv6zqE8ZjLNzia_TaZrIPhuqWHSHFhnGmqWPnqgr-_spmYh1KmjEUrRH-6Kz-dmWxkCS2P_fwGOY6Cv9rVqHSQDAwYnAzg5SenoZ5-VMc-TwC0_1i2eozA9xcjcqdajQBqbVWlcpexQB9AyGQ9jNEo-nu6Ensn6MS8yv9a87Bep1PvReztBYBbTl6lkDU3qiQiRwUK6_RzyWYFrg-cNf5opYzCb60iT8yxHj_4qD7_wLaS-7AQ')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Simulated Custom Map Marker */}
                <div className="relative">
                  <div className="absolute -top-12 -left-6 bg-[#ea2a33] text-white p-2 rounded-lg text-xs font-black uppercase whitespace-nowrap shadow-xl">
                    Our Shop
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ea2a33] rotate-45"></div>
                  </div>
                  <div className="w-6 h-6 bg-[#ea2a33] rounded-full border-2 border-white animate-pulse shadow-lg shadow-[#ea2a33]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
