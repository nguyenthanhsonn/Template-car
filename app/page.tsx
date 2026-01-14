'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const professionalServices = [
    {
      icon: 'auto_fix_high',
      title: 'Exterior Care',
      description: 'Premium detailing, multi-stage polishing, ceramic coating, and wax finishes for a flawless mirror shine that lasts.',
    },
    {
      icon: 'settings_input_component',
      title: 'Interior Tuning',
      description: 'Custom Italian leather upholstery, ambient lighting, and high-end audio-visual tech upgrades for peak cabin comfort.',
    },
    {
      icon: 'shield',
      title: 'Protective Coating',
      description: 'Self-healing Paint Protection Film (PPF), window tinting, and underbody rust protection for total vehicle defense.',
    },
  ];

  const whyChooseUs = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARX3BknauMUTZ1KY8o3B5Nd5sZpO7Sh0EShDZEGQky7esoe7r9KM0vzvLBdFG18hNN1hR5t7Jj1loV-vF49bEUGtVeH_Nk3qOT-IRw1clFkU93-WWqkJI0H_2AqVVEiweWZ0aUIjg8JW5A42GOZcZnr2NihuO5u7g-c7Wps1LgxiQymoGlxqFn0Q7OmvP3BCdM1tF5YTG77hjzmiuaWp-blbhp11EuPqBfdNzQMte7WDtwPwMTPtj65iFPbuZ6g4euBUD1dldRRf3z',
      icon: 'verified',
      title: '10+ Years Experience',
      description: 'A decade of excellence in performance car care.',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuoLQBcSc5CKmaGG4ysP6KDkSX0ZWtXzyxFlq5rBdaphROKKWv3H3ex9RVvrT3ZEAr9il47QDJkYTXI_U3FHcEkIVS-id13uC7Wj4DktTl1IDJIB9ggS4EIjgwgllPYh5Y9agMACDLxFk_J_87ap6_hWOTjMaAtob1IXqQUMQdqwvSEkOvd433cKeStvhNkaGhB20-ClUcDlpBubenVqsTgJfFAOE-Py672T-RUoMkEhzd9P-zuzG_a7CG9wdvTE9lJfO6TpnP4wth',
      icon: 'precision_manufacturing',
      title: 'Latest Tech',
      description: 'Utilizing AI-driven diagnostics and laser detailing tools.',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNPcwW-x7uM4HbzOtHNHcBmUKSuDrDDlsUnZknURTml21bjG5jd4rve9nGN7XJNT8PHE5-MHUGIU0EUQYSC7nsPXePaqREhMqNYxJAPEauORCyuzrUo6hFWwEXCCgl0DvdralUnIMF4NMeVSUGQhdml3B72p-Y27n3LkV4cKLCdEV1mmX9lG7InT7CQXLd3q56akB3sSBRb8UDCFpdKkftBnDRqGCoZteNJpxCV17HjWXFeVVErbNN9iuyBigmc3CkQXJFo6_APPA9',
      icon: 'engineering',
      title: 'Certified Techs',
      description: 'Expert hands trained specifically for performance vehicles.',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC550Sq9EXAwVGFletG2a3jDwG018cRVNfqPhYblVIBqbd36_ni2hfvlQrWx4yLvdFipS8gwcldPtEvTT071Ey1pyg0sljTf_GaVFmh0EULqLDj6a3zkI6ubEUbgGor-Vz8I-Qq7VDTpGtEuND46o_80MPfJ5RJxj9XzzNd5EIQGeD9sAOEWVcEYeDrNNCJKQ2CpIP1I0DwnWOqH5EIJznxnTzmwu4lEloKCw1Cqftm4lxsqiPgRzAFOLy268qVovfvRXTNHymRJ7ZD',
      icon: 'history_edu',
      title: 'Genuine Parts Only',
      description: 'We never compromise on the quality of original components.',
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="flex-1">
        <div className="max-w-[1280px] mx-auto w-full">
          {/* Hero Section */}
          <div className="px-4 md:px-10 py-6">
            <div className="flex min-h-[600px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-16 md:px-16"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(33, 17, 17, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDf07Bhw563waY4UFXzwdiqQUggC_e3Va-pzx_QKzButiXN8rC4KQy8ZqN4xA2d_wVcHVkphEzVABKPzgu1sZvAk9qUGc5PZXtCc3GTWdbNKUrKHx23_jLEy5mNYDXpyUqQ0oXb3N2eNfiXpe3KwSG4WTTrJ3ewV-T9BwytOoU6e93fBa1i3s-P6CASbgw6FB2h7DihRp2T67Ll5XLP_SYXf5sCS9QbXCnnFN6aXNiSNJ0R7WMSiPJ4kCKxOc_mYlgF3v1hMF37XAwZ')`
              }}
            >
              <div className="flex flex-col gap-4 text-left max-w-[800px]">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Chăm sóc và Độ Xe Chuyên Nghiệp - Nâng Tầm Phương Tiện Của Bạn
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed opacity-90">
                  Expert detailing and performance tuning for those who demand the best. Your vision, our precision.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#ea2a33] text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform"
                >
                  <span className="truncate">Book Now</span>
                </Link>
                <Link
                  href="/gallery"
                  className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 backdrop-blur-md text-white border border-white/20 text-base font-bold leading-normal tracking-[0.015em] hover:bg-white/20 transition-all"
                >
                  <span className="truncate">View Gallery</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section Header: Services */}
          <div className="px-4 md:px-10 pt-12 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-[#ea2a33]"></div>
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                Our Professional Services
              </h2>
            </div>
          </div>

          {/* Services TextGrid */}
          <div className="px-4 md:px-10 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {professionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-1 gap-5 rounded-xl border border-slate-200 dark:border-[#663336] bg-white dark:bg-[#331a1b] p-6 flex-col hover:border-[#ea2a33] dark:hover:border-[#ea2a33] transition-all duration-300"
                >
                  <div className="text-[#ea2a33] group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined !text-4xl">{service.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-[#c89295] text-base font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/services"
                    className="text-[#ea2a33] font-bold text-sm mt-auto inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Section: Why Choose Us */}
          <div className="px-4 md:px-10 py-20 bg-slate-100 dark:bg-[#2a1617] rounded-3xl mx-4 my-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-slate-900 dark:text-white tracking-light text-[32px] md:text-5xl font-bold md:font-black leading-tight max-w-[720px]">
                  Why Choose Us
                </h2>
                <p className="text-slate-600 dark:text-[#c89295] text-lg font-normal leading-normal max-w-[720px]">
                  We combine high-octane passion with engineering precision to deliver unmatched automotive excellence.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 group">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-lg relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="w-full h-full bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-[#ea2a33]">{item.icon}</span>
                        <p className="text-slate-900 dark:text-white text-lg font-bold">{item.title}</p>
                      </div>
                      <p className="text-slate-600 dark:text-[#c89295] text-sm font-normal leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="px-4 md:px-10 py-16 text-center">
            <div className="max-w-[800px] mx-auto flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Ready to take your vehicle to the next level?
              </h2>
              <p className="text-slate-600 dark:text-[#c89295] text-lg">
                Join 2,000+ happy clients who trust us with their dream machines.
              </p>
              <Link
                href="/contact"
                className="bg-[#ea2a33] text-white font-bold py-4 px-10 rounded-xl hover:bg-red-700 transition-all shadow-[0_10px_30px_-10px_rgba(234,42,51,0.5)]"
              >
                Sẵn sàng nâng tầm xế yêu? Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
