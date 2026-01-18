'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const SectionBg = ({ children }: { children: React.ReactNode }) => (
    <section className="w-full">
        {children}
    </section>
);

const SectionContent = ({ children }: { children: React.ReactNode }) => (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
        {children}
    </div>
);

function ServicesContent() {
  const [activeTab, setActiveTab] = useState<'care' | 'tuning'>('care');
  const [phoneNumber, setPhoneNumber] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'tuning') {
      setActiveTab('tuning');
    } else {
        setActiveTab('care');
    }
  }, [searchParams]);

  const careServices = [
    {
      title: 'Phủ Ceramic 9H+ Diamond',
      description: 'Bảo vệ lớp sơn tối ưu, tạo độ bóng sâu như gương và khả năng chống bám nước vượt trội. Bảo hành chính hãng 5 năm.',
      price: '8.500.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkZjkqlNv02DhfoHMpvUU-l19lX0EKOX83oEraJaQrtHEuqZhh7kZcMrN_GOO14o4MTyKGZMH-RNMXGZCJhlgPCCJKdh2ulDWtSGLlDcGC18N1PGjHwWTuewDJlFmOtvFb5bXJkXMyxEPzm07Rcur_Qe-_gD8TpmBiSHmb-ZbO1nYRvJAXweaXmAvYbhnXjM2_1446xE6H9IVyh5esHak9dpgVp8EKHNBgaQ88c2P3F1_mbPc2vy58c9BNm23cAqzgFI0dk46CyPA6',
      badge: 'Bán chạy',
    },
    {
      title: 'Dán Film PPF (USA)',
      description: 'Lớp bảo vệ sơn trong suốt, tự phục hồi vết xước. Chống đá văng và các tác nhân gây hại từ môi trường một cách tuyệt đối.',
      price: '25.000.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRXTxnIMqS6To5m9HJBSR0JIREhE0oareqJ7ICivXQzat2I2EUIq9aVblHHPsS9Q0TNLLfjr0jg1twbRzQedmYYQzL9pZxwtchmT_4-mQ4CDU_uLjHrunDY7Cc7qW6uWsz4ucC28MgnP144f8kR7SLi79RDpk9TJ1jO6nrsqUkI5kdThfzF9NbMRYVh3kTNU7fyikIvC6vUgfmjvYoxIJmUv9NwXoqv3SlvdwfblLRHgsIxmH8lUWAtqkuIDToQYmpysI4UNCbmkJH',
    },
    {
      title: 'Vệ sinh Nội thất Chuyên sâu',
      description: 'Khử trùng hơi nước nóng, bảo dưỡng da và nhựa cao cấp bằng dung dịch chuyên dụng. Đảm bảo không gian xe sạch khuẩn.',
      price: '2.000.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU2BaO4uGaoY0QwOPeL4AaKkDv9IXG8BREIfEfZEDu0y-fMRqA0rE5b0TuPjx1gBY2ixRRXCZdSRpdmliJyMxvdar4HA8xQiZgQBcCAjPl6CppDWUJUjvMeXZekRvCh3Rk1V2MGwfW96UMCXfPRkCYAEbUmcx9MaJwcNv4ITsh4dL-85ct_KwGMTgOSYm7VHyuCPuVUQdN2t3dVPBx_x4Df5nh29VZqKZZtvrU3I24PBpvKJAhh6g9N9GCdNbSBG9h4J3ST2CwHzid',
    },
  ];

  const tuningServices = [
    {
      title: 'ECU Remap Stage 1/2',
      description: 'Tối ưu hóa phần mềm động cơ để giải phóng sức mạnh tiềm ẩn, cải thiện phản hồi chân ga và khả năng tăng tốc mạnh mẽ.',
      price: '12.000.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu9XKKYbUB-cYgqj1rSuMdwFtNb1LwZGclrvMzccfEmFYFHDoFXK_QFv6AOzQ0hAFG6DQuqPyO2xMt_fRMpp5LWoGo83Yy5S3ifuIqeECpm8ARxj4ki431KCGNhEGfHdh2SarihnHuHDVYV9Ykv-j8mZOGzvG2hoCzVfprYQ6FNhDlGIJal6crBi-sXhAVzjVHnZtRrb2I0dlHnpBPK2vQfzT2igEGjQ9jnX6Gg2716F0ZNSi_zZ4IGF9l949n5uE3QbFXb0Mmrd4w',
      badge: '+ Tăng 20-30% Mã lực',
    },
    {
      title: 'Hệ Thống Pô On/Off Full System',
      description: 'Âm thanh uy lực, phấn khích với khả năng điều khiển đóng mở van linh hoạt. Tăng hiệu quả thoát khí cho động cơ.',
      price: '18.500.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApTO_e0Hb55H0Ra2PiC-O7uCT8aOqBNSnWCQKKDEb8wNCGnjajCwj8_nPIMa3PiZ_nxAuRhfjEDBZf7uCfNborl1dXXtyjncQL5jOJ6Y5uaW5Fw27-YmL4HmK8gPl5ErDB4xVYwwHB-uXdkwGmyHQXigm11whAeTOM0zIPqDBi7x_F4m5LuYHtAyySDRK8xsHbq1A08x2uDUQJoJX2SfKGKkfok3K_IcCXjUHiLLUdeWB_UpHuTm9lqB-_ozoIzPW4UYZF93THXVM2',
    },
    {
      title: 'Cá nhân hóa Carbon Fiber',
      description: 'Ốp Carbon Fiber thật 100% cho vô lăng, taplo và các chi tiết ngoại thất. Mang lại vẻ thể thao, đẳng cấp vượt trội.',
      price: '5.000.000 VNĐ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByO4zkEpFS47JPewkCsufZNyG_bjkHQopWZtF2OY0_7ZzpxY8r_WH0Ui5ecMK16JNeZYO6yLAM5luAZwd26Zx_LzyoHMTNl9xBOmpM0LI8ILFW_P7mOIRnHyGqgzAMdgzT51cVmWl2R3xDYIMnq9p1n8RKOc2vIARhs4CdrYNiB6YBayO84K1P4WT0TSdedOg3j3yGMVEVw687DWdqI5VtX9Ru9qWlGBRNoVDq2hiThP3wMayOzmtjBpOxZesEqB1ANOGcNXJueszr',
    },
  ];

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone number:', phoneNumber);
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ trong vòng 30 phút.');
    setPhoneNumber('');
  };


    return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
          <SectionBg>
              <section className="relative min-h-[90vh] flex items-center">
                  {/* Background */}
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                          backgroundImage: `
                            linear-gradient(to right, rgba(0,0,0,.85), rgba(0,0,0,.45), rgba(0,0,0,.2)),
                            url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXKwKVqwkldhhbOppU11qD8St7Kmvn-Dst1Zzahe3dSGpAU2QHj6WInFRUoYPh9Ey_lTk974DZl5QZhjMyPmdXmbtTbkeafMexGN3a_4wrM5oapmg3_XUWsM6rYH-drwiMqpYTXcyEL4lDbGGeg3eQqrzJ1FPfGptz_1LW1VzER4pZiSaCFx2BKv4_bDLB6aFt0R1RCew-E6zOyCoH4WCPx0UuPF8mKYgCnxgAXBpwRgV6pEf3u4twgt6tTojVDZ7sw_sVYuxmRoYk')
        `
                      }}
                  />

                  {/* Content */}
                  <SectionContent>
                      <div className="relative z-10 max-w-2xl">
        <span className="inline-block mb-5 px-4 py-1 text-xs font-black tracking-widest uppercase bg-[#ea2a33] rounded">
          Premium Services
        </span>

                          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.05]">
                              Nâng tầm đẳng cấp <br />
                              <span className="text-[#ea2a33] italic">Xế cưng</span> của bạn
                          </h1>

                          <p className="mt-6 text-lg text-slate-300 max-w-xl">
                              Chăm sóc – bảo vệ – tối ưu hiệu năng với tiêu chuẩn garage cao cấp.
                          </p>

                          <div className="mt-10 flex gap-4">
                              <button className="bg-[#ea2a33] hover:bg-red-700 px-8 py-4 rounded-xl font-black uppercase tracking-wider">
                                  Xem dịch vụ
                              </button>
                              <button className="border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10">
                                  Tư vấn Zalo
                              </button>
                          </div>
                      </div>
                  </SectionContent>
              </section>
          </SectionBg>



          {/* Search and Filter Tabs */}
        <section className="mb-10 sticky top-0 z-40 backdrop-blur-xl bg-[rgba(248,246,246,0.8)] dark:bg-[rgba(33,17,17,0.8)] py-6 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/20" id="services">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('care')}
                className={`flex flex-col items-center pb-4 border-b-4 transition-all ${
                  activeTab === 'care'
                    ? 'border-[#ea2a33]'
                    : 'border-transparent hover:border-white/20'
                }`}
              >
                <span className={`text-sm font-black uppercase tracking-wider ${
                  activeTab === 'care' ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`}>
                  Chăm sóc xe
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">Exterior & Detailing</span>
              </button>
              <button
                onClick={() => setActiveTab('tuning')}
                className={`flex flex-col items-center pb-4 border-b-4 transition-all group ${
                  activeTab === 'tuning'
                    ? 'border-[#ea2a33]'
                    : 'border-transparent hover:border-white/20'
                }`}
              >
                <span className={`text-sm font-black uppercase tracking-wider ${
                  activeTab === 'tuning' ? 'text-white' : 'text-slate-400 group-hover:text-white'
                }`}>
                  Độ xe
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">Performance Tuning</span>
              </button>
            </div>
            <div className="flex-1 max-w-md pb-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></span>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-[#ea2a33] focus:border-[#ea2a33] transition-all text-white placeholder:text-slate-500"
                  placeholder="Tìm kiếm dịch vụ (Ceramic, ECU, PPF...)"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category 1: Chăm sóc xe */}
        {activeTab === 'care' && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#ea2a33] block"></span>
                  Chăm sóc xe (Maintenance)
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  Giữ cho diện mạo xe luôn như mới với công nghệ chăm sóc hàng đầu.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-[#ea2a33]/50 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-[#ea2a33] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {service.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-[#ea2a33] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Giá từ</p>
                        <p className="text-lg font-black text-[#ea2a33]">{service.price}</p>
                      </div>
                      <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-white/5 hover:bg-[#ea2a33] hover:text-white text-slate-300 p-2.5 rounded-lg border border-white/10 transition-all"
                      >
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Category 2: Độ xe */}
        {activeTab === 'tuning' && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#ea2a33] block"></span>
                  Độ xe (Performance & Style)
                </h3>
                <p className="text-slate-500 mt-1 font-medium">
                  Bản lĩnh trên mọi cung đường với nâng cấp hiệu năng và cá nhân hóa.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tuningServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden hover:border-[#ea2a33]/50 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    {service.badge && (
                      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-[10px] text-white font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">bolt</span>
                        {service.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-[#ea2a33] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">Giá từ</p>
                        <p className="text-lg font-black text-[#ea2a33]">{service.price}</p>
                      </div>
                      <button
                        onClick={() => window.location.href = '/contact'}
                        className="bg-[#ea2a33] text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider hover:bg-red-700 transition-colors"
                      >
                        Liên hệ tư vấn
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter / Contact Section */}
          <section className="py-16 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl">
              <div className="container text-center">
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white mb-4">
                      Cần tư vấn gói dịch vụ phù hợp?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 text-base md:text-lg text-center max-w-2xl mx-auto">
                      Để lại thông tin, đội ngũ kỹ thuật viên của chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất cho xế yêu của bạn trong vòng 30 phút.
                  </p>

                  <form
                      onSubmit={handleConsultationSubmit}
                      className="flex justify-center"
                  >
                      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
                          <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="Số điện thoại của bạn"
                              required
                              className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-black border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#ea2a33]"
                          />
                          <button
                              type="submit"
                              className="bg-[#ea2a33] text-white font-black px-6 py-4 rounded-xl uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-[#ea2a33]/30"
                          >
                              Gửi yêu cầu
                          </button>
                      </div>
                  </form>
              </div>
          </section>





      </main>

      {/* Floating Contact Widget */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:0900XXXXXX"
          className="size-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <span className="material-symbols-outlined">call</span>
        </a>
        <a
          href="#"
          className="size-14 bg-[#ea2a33] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          aria-label="Chat with us"
        >
          <span className="material-symbols-outlined">forum</span>
        </a>
      </div>
    </div>
  );

}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
