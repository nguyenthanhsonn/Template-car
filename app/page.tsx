'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const professionalServices = [
        {
            icon: 'auto_fix_high',
            title: 'Exterior Care',
            description:
                'Premium detailing, multi-stage polishing, ceramic coating, and wax finishes for a flawless mirror shine that lasts.',
        },
        {
            icon: 'settings_input_component',
            title: 'Interior Tuning',
            description:
                'Custom Italian leather upholstery, ambient lighting, and high-end audio-visual tech upgrades for peak cabin comfort.',
        },
        {
            icon: 'shield',
            title: 'Protective Coating',
            description:
                'Self-healing Paint Protection Film (PPF), window tinting, and underbody rust protection for total vehicle defense.',
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
            <main>
                {/* HERO SECTION */}
                <section
                    className="relative min-h-[90vh] flex items-center justify-center md:items-end md:justify-start"
                    style={{
                        backgroundImage: `
              linear-gradient(to bottom, rgba(0,0,0,.3), rgba(33,17,17,.95)),
              url('https://lh3.googleusercontent.com/aida-public/AB6AXuDf07Bhw563waY4UFXzwdiqQUggC_e3Va-pzx_QKzButiXN8rC4KQy8ZqN4xA2d_wVcHVkphEzVABKPzgu1sZvAk9qUGc5PZXtCc3GTWdbNKUrKHx23_jLEy5mNYDXpyUqQ0oXb3N2eNfiXpe3KwSG4WTTrJ3ewV-T9BwytOoU6e93fBa1i3s-P6CASbgw6FB2h7DihRp2T67Ll5XLP_SYXf5sCS9QbXCnnFN6aXNiSNJ0R7WMSiPJ4kCKxOc_mYlgF3v1hMF37XAwZ')
            `,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="container pb-20 pt-32">
                        <div className="max-w-[800px] animate-fade-in-up">
                            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] mb-6 drop-shadow-lg">
                                Chăm sóc và Độ Xe <br/>
                                <span className="text-[#ea2a33]">Chuyên Nghiệp</span>
                            </h1>

                            <p className="text-slate-200 text-lg md:text-2xl font-light max-w-2xl leading-relaxed drop-shadow-md">
                                Expert detailing and performance tuning for those who demand the best.
                            </p>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-[#ea2a33] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-red-700 transition hover:shadow-[0_0_20px_rgba(234,42,51,0.5)] text-center"
                                >
                                    Book Now
                                </Link>
                                <Link
                                    href="/gallery"
                                    className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-full font-medium text-lg hover:bg-white/20 transition text-center"
                                >
                                    View Gallery
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES SECTION */}
                <section className="py-24 bg-white dark:bg-[#211111]">
                    <div className="container">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <div className="inline-flex items-center justify-center p-2 mb-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                                <span className="material-symbols-outlined text-[#ea2a33] text-sm">handyman</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                                Dịch Vụ Của Chúng Tôi
                            </h2>
                            <p className="text-slate-600 dark:text-[#c89295] text-lg">
                                Giải pháp toàn diện từ chăm sóc ngoại thất đến nâng cấp nội thất
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {professionalServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-[#2a1617] border border-slate-100 dark:border-[#472426]
                    hover:border-[#ea2a33] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ea2a33]/5 rounded-bl-[100px] transition-all group-hover:bg-[#ea2a33]/10" />
                                    
                                    <div className="inline-flex p-4 rounded-2xl bg-white dark:bg-[#331a1b] text-[#ea2a33] shadow-md mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-slate-100 dark:ring-[#472426]">
                                        <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-[#c89295] leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    
                                    <Link
                                        href="/services"
                                        className="mt-auto items-center text-[#ea2a33] font-bold inline-flex gap-2 group-hover:gap-3 transition-all"
                                    >
                                        Xem chi tiết
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="bg-slate-100 dark:bg-[#1a0d0e] py-28 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(234, 42, 51, 0.05) 0%, transparent 40%)' }} />

                    <div className="container relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                                Tại Sao Chọn Chúng Tôi?
                            </h2>
                            <p className="text-slate-600 dark:text-[#c89295] text-xl leading-relaxed">
                                Kết hợp đam mê tốc độ và kỹ thuật chính xác để mang lại sự hoàn hảo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {whyChooseUs.map((item, index) => (
                                <div key={index} className="group flex flex-col bg-white dark:bg-[#221112] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#ea2a33]/20">
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                                        <div className="absolute bottom-3 left-3 bg-[#ea2a33] text-white p-2 rounded-xl">
                                             <span className="material-symbols-outlined text-xl block">{item.icon}</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#ea2a33] transition-colors">{item.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-[#c89295] leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="relative py-28 isolate overflow-hidden">
                     <div className="absolute inset-0 bg-[#000000]">
                         <div className="absolute inset-0 bg-linear-to-br from-[#2a1415] to-[#000000] opacity-90" />
                         {/* Optional artistic blur */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ea2a33] opacity-20 blur-[120px] rounded-full" />
                     </div>

                    <div className="container relative text-center">
                        <div className="max-w-4xl mx-auto px-4">
                            <span className="inline-block text-[#ea2a33] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                                Sẵn sàng nâng tầm xế yêu?
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Đặt Lịch Hẹn Ngay Hôm Nay
                            </h2>
                            <p className="text-[#c89295] text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                Tham gia cùng hơn 2,000 khách hàng hài lòng đã tin tưởng giao phó chiếc xe ước mơ của họ cho chúng tôi.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center bg-[#ea2a33] text-white font-bold uppercase tracking-wider py-5 px-12 rounded-full overflow-hidden shadow-[0_10px_30px_-5px_rgba(234,42,51,0.5)] transition-all hover:shadow-[0_20px_40px_-5px_rgba(234,42,51,0.6)] hover:scale-105"
                                >
                                    <span className="relative z-10">Đặt Lịch Ngay</span>
                                    <div className="absolute inset-0 bg-linear-to-r from-red-600 to-[#ea2a33] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <div className="text-slate-400 text-sm">
                                    hoặc gọi <span className="text-white font-bold text-lg ml-1">1900-123-456</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
