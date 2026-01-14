'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FilterType = 'all' | 'before-after' | 'featured' | 'customer';

interface GalleryItem {
  id: number;
  title: string;
  category: FilterType;
  image: string;
  size: 'standard' | 'large' | 'wide';
  tag: string;
  description?: string;
  hasButton?: boolean;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [visibleCount, setVisibleCount] = useState(8);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Stage 2 Remap - BMW M4',
      category: 'featured',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyecsu3-ARsknUjIeKNnSjBSD-wtcvs-95ANHnZyzfRbNn6t2FPbhBIWwwH8Dl5NmKtwhk3zGC56o5HwI-8ORTLlkTd2x06T_Hyk9QAUu29VpqzESfW3N_UDyLQJ4Cv9hD7ZFlK1GYifr48P0yakpEEWYXIq_YJdMoT51MlW4Pu_awE0bpH__vIAfFg0NchHrzQURhHSOQ8JoIpr_miBbfseLpxxeEpQOsPlUA_i5g6bu-OkyeseiA2F8y5likvHauaLO5fPnzsc2s',
      size: 'large',
      tag: 'Tuning',
      description: 'Performance optimization and custom exhaust system installation.',
      hasButton: true,
    },
    {
      id: 2,
      title: 'Ceramic Coating - Porsche 911',
      category: 'featured',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdcJuQWwMwBW8nysBiS3e9TB2cVxjXsluBU3V4TdgsD3gSaHo5kGvvJRW0FiR6i6ExyHi3W6ig_Fv8mC6cVf-_YwtyDi8syvqhslrz2R1RaZzHa5kAX9S9XF42XgcrdNxc4e5I6q_-EehgGzES4Wm-jD4WomAURifwugTfkBSJVefFUztfZR9SwrRP76UN-CsARLlpzVEnTiMtLTJnkvgwiSGmwBv7E-WtSVT9ymjLHt_8XhlMSiBCuOJpOYCnGumbLguUnhCXPpyT',
      size: 'wide',
      tag: 'Protection',
      description: 'Ultra-high-gloss finish with 5-year hydrophobic protection.',
    },
    {
      id: 3,
      title: 'Custom Widebody - Audi RS6',
      category: 'all',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgDiQxG51gGthY4CSP7sCqOY8tV3wana8PJW2P347MqNGzZj148vIU131grDL6v1sD1k8iRzQ4A6YfV2CABsuJuTXoGLEdt9ElmIUPDcQgMOqvxV_T2jiQ00KBHQxv-yzD4Gi1aLF0AfSsf0m54J4BvD279xnTPDdttLu_XX8YCg2wEymOF87pahP0CKnZB8NfRHXMDDGITM9yF1_6ZR8ys1A6snNcXh36FpR_90mTu5GqLJsmyHc-HUpb_D3GW2DTIQ7KNZhkfFdw',
      size: 'standard',
      tag: 'Bodykit',
    },
    {
      id: 4,
      title: 'Detailing - Ferrari 488',
      category: 'customer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdsfSuq41mL1-sSKaC5-_vt9FafEA2Ncysq3zrZna0JOPpGEE2xoPGxg2DqG52q8fTFTl91m9Cs2gd-51hEsZO52qTUGOU34K6XvBZrVOVsHnrWlnRB5oosfzgVjF-29gHvVoSLKcY3EHTbTVxxSUIt6QhcoTsnNClrz33rBjFDAkb7_0TKLND3rmQwJaHKlPRqZhJG5_PRndgIdZfHMxPsfLlHI27NIcIn87ObRTd7FGoeVvy8yhGZ8U5q-WSPfeFj9KniGwA2d5',
      size: 'standard',
      tag: 'Interior',
    },
    {
      id: 5,
      title: 'Full Satin Wrap - Tesla Model S',
      category: 'before-after',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwZenJ_ieQ0x4d-TcEmP-Zlysw5m4CacERY3ol7mUQ0I9OrVu9gLLl_W8xwd6e72dtyS6jsshl9UwIojl26jfRsk0W1AmX5_FDne9QikVQvQukhnKoI5vwbMmiiIrAmh0uW1vzbaq9tKfij4MyXaCAhT0f9cPbgLUJ82aYaJ0cMWokEDV0SIZt-Ji4ks1c6UqFNx6YiA4J07JkF25gs_eg4wRfEYHA5BFlZKIuZVegXJIzwt4sw6D8BAR9EUK0Vo5V8KMijMON-vKj',
      size: 'large',
      tag: 'PPF',
      description: 'Stealth protection film with custom chrome delete.',
    },
    {
      id: 6,
      title: 'Lowering - Toyota Supra',
      category: 'before-after',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDffld2yfZ9_ZhRQtkZQNq5hQlcIo5BrwOUJlNH4wgCVRqw9lcPoFSSccgzOEKIqupPtLROMu5tguy2rMqgp1Q9XtRpfHr2WPZthzy_st66MVJjR9YUkAtG5Yfs0yQAtKFD5VEj4Dswc_jwwy5O6j1wQLaGsEvhvR7Wn5W6Hnl7UJU8iWtdCvjnlOHU21SkkDQ_sn7Mtj0HsiLs1ERq8nCxo9elroi_HmGZ-LJXtmTNPbux20YdSpfHqBV1t9U_F4ase-0wMuBhY7m2',
      size: 'standard',
      tag: 'Suspension',
    },
    {
      id: 7,
      title: 'Engine Restoration - Mustang',
      category: 'customer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCId1HiWZoac4ontYW9bW6nDW1OdvukZDDsntF4Iy7vKS39NEJOl_UKZGn9RNiLQcdWnuFTktpvXkcFFn5K_1mtJxfHseJvaWZ0rjhE7l4wWsg0qJ06tOVjyylosRZ2kW5y_gIMIJAqX6QYXTgl4jIN41sKYhq3itzaxW9dbQ04A3kjySSHMU29fAU_LWaLKGxs9vHf_6SUG9_vh_p1CrwP7nIeNsOFtDIl3kI2dY3Aom9wtJY9xMsz5LglemqkEza-OoBbrb3KywkG',
      size: 'standard',
      tag: 'Classic',
    },
    // Thêm thêm items để có đủ 64 projects
    ...Array.from({ length: 57 }, (_, i) => ({
      id: i + 8,
      title: `Project ${i + 8}`,
      category: ['all', 'before-after', 'featured', 'customer'][i % 4] as FilterType,
      image: `https://picsum.photos/seed/${i + 8}/400/300`,
      size: ['standard', 'large', 'wide'][i % 3] as 'standard' | 'large' | 'wide',
      tag: ['Tuning', 'Protection', 'Bodykit', 'Interior', 'PPF', 'Suspension'][i % 6],
      description: i % 3 === 0 ? 'Professional automotive service with attention to detail.' : undefined,
      hasButton: i % 5 === 0,
    })),
  ];

  const filters = [
    { id: 'all' as FilterType, label: 'All Work' },
    { id: 'before-after' as FilterType, label: 'Before & After' },
    { id: 'featured' as FilterType, label: 'Featured Projects' },
    { id: 'customer' as FilterType, label: 'Customer Gallery' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredItems.length));
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              Precision in Every Detail
            </h1>
            <p className="text-slate-500 dark:text-[#c89295] text-lg font-normal">
              Explore our portfolio of high-performance tuning, expert detailing, and professional car care projects.
            </p>
          </div>
          <button className="flex min-w-[140px] items-center justify-center gap-2 rounded-lg h-12 px-6 bg-slate-200 dark:bg-[#472426] text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-300 dark:hover:bg-[#5a2e30]">
            <span className="material-symbols-outlined text-lg">star</span>
            <span>Latest Project</span>
          </button>
        </div>

        {/* Tabs / Filters */}
        <div className="mb-12">
          <div className="flex border-b border-slate-200 dark:border-[#663336] gap-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setVisibleCount(8);
                }}
                className={`flex items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                  activeFilter === filter.id
                    ? 'border-[#ea2a33] text-slate-900 dark:text-white'
                    : 'border-transparent text-slate-500 dark:text-[#c89295] hover:text-[#ea2a33]'
                }`}
              >
                <p className="text-sm font-bold tracking-[0.015em]">{filter.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-[-0.015em]">
            Project Highlights
          </h2>
          <div className="flex gap-2">
            <span className="text-xs font-semibold px-2 py-1 bg-[#ea2a33]/10 text-[#ea2a33] rounded">
              {filteredItems.length} PROJECTS
            </span>
          </div>
        </div>

        {/* Masonry-style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '200px' }}>
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-slate-800 ${
                item.size === 'large' ? 'row-span-2' : ''
              } ${
                item.size === 'wide' ? 'col-span-2' : ''
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="hover-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <span className="text-[#ea2a33] text-xs font-bold tracking-widest uppercase mb-2">
                  {item.tag}
                </span>
                <h3 className={`text-white font-bold ${item.size === 'large' || item.size === 'wide' ? 'text-xl' : 'text-lg'}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-slate-300 text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>
                )}
                {item.hasButton && (
                  <button className="mt-4 flex items-center gap-2 text-white font-bold text-sm bg-[#ea2a33] px-4 py-2 rounded self-start hover:bg-red-600 transition-colors">
                    View Specs
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        {hasMore && (
          <div className="flex flex-col items-center justify-center mt-20 pb-10">
            <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">
              Showing {visibleCount} of {filteredItems.length} projects
            </p>
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-900 dark:text-white"
            >
              Load More Projects
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
