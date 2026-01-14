'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const statistics = [
    {
      icon: 'history',
      number: '10+',
      label: 'Năm Kinh Nghiệm',
    },
    {
      icon: 'speed',
      number: '5,000+',
      label: 'Xe Đã Nâng Cấp',
    },
    {
      icon: 'engineering',
      number: '25+',
      label: 'Kỹ Thuật Viên',
    },
    {
      icon: 'workspace_premium',
      number: '12',
      label: 'Giải Thưởng Độ Xe',
    },
  ];

  const timeline = [
    {
      year: '2014',
      icon: 'flag',
      title: 'Thành Lập Shop',
      description: 'Bắt đầu từ một xưởng nhỏ với 3 kỹ thuật viên đầy đam mê tại TP. Hồ Chí Minh.',
      active: true,
    },
    {
      year: '2018',
      icon: 'grade',
      title: 'Mở Rộng Quy Mô',
      description: 'Đạt mốc 1000 xe được độ công suất và nâng cấp nội thất hoàn thiện.',
      active: false,
    },
    {
      year: '2023',
      icon: 'stars',
      title: 'Trung Tâm Toàn Diện',
      description: 'Trở thành đại lý ủy quyền của các thương hiệu tuning hàng đầu thế giới như Akrapovič và Brembo.',
      active: false,
    },
  ];

  const teamMembers = [
    {
      name: 'Trần Mạnh Hùng',
      role: 'CEO & Founder',
      description: 'Hơn 15 năm kinh nghiệm trong ngành cơ khí ô tô và đam mê xe thể thao.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoXpvgm04znpwlGLv6_VPjBvb8y7p42A0CuEZyKHJCbCPetWAPTDHEKp3uRJiCH7lXpVcrHFk4AdWWngwAldxN_IHGErrAFBA9WHKtB8JMk-39JlVMlVIN3iHd65Pi1RpcKLoOaViOlu4jvVzx5zTSnpRQu3LxSHkRgE2YqjuZG3o3oga-9M3zHoj7fM_w4O88MlXu6dBGUVpsSOss7SiBsoNgiDQNNzHzZffXobG9fXbaZhD6bV837hSXEYbuiEK9OzzSJ5NXWlEP',
      socialLinks: ['link', 'alternate_email'],
    },
    {
      name: 'Lê Hoàng Nam',
      role: 'Trưởng Bộ Phận Tuning',
      description: 'Chuyên gia ECU mapping và tối ưu hóa hiệu suất động cơ.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfrSLOIr3f_hImNwnACbYRDkkjgpV3cnrbOi6FtTQ8eY2py6p0brXEQtd9syavYQWygjZ_c2gN07gUEoO-h80UFvkaYAqKV03qy7_4OoMQPHFW4elw25-nSqHb-e7G1iT_UKK-tO4JQw2FDH2obj8IMNIL4cxADP41AaVhc70UJ8N28gCAHJm0HxkNJ5HLgqZzrTUSy1dfnisMMLIBlykgyExkKOxHh8Bn524YAtuoh2xjlub9s6s7NE5KBwU5cwclv87mV8dKPAER',
      socialLinks: ['link'],
    },
    {
      name: 'Nguyễn Thùy Linh',
      role: 'Chuyên Gia Detailing',
      description: 'Bậc thầy về phủ Ceramic và chăm sóc bề mặt sơn chuyên sâu.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcwszM_Rhf-ev6pxInn7CNiLJUncFnuShCFTcyQ-mj2OEu4Bwiq0pfzHeAVI-1dmwx9Wu41MNFBtUoGHNtynA99_bunG5SLKAgwssEHoG4EpdC3ar-nDBg41G9QgGBKLWxI_gntGmB40JRr3haVMZBP_ly0N8BmYo7ZQvnX338zIjjqeh3h-6-aH-_fKIZrASNuH0fBA08fiGtlopXhoOZq6oaF_XGmesIBaPWWxGK1l91v2_17O6Xk_bheM_RDw-P2vxUCx0TixN9',
      socialLinks: ['link'],
    },
    {
      name: 'Phạm Minh Đức',
      role: 'Cố Vấn Kỹ Thuật',
      description: 'Luôn sẵn sàng đưa ra giải pháp tối ưu nhất cho "xế cưng" của bạn.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9yzNWpgDcUpKhlTAAd4WpJ98_-TzsOHisEq2ExhUxAphZGF92IQRCGQlCathmIJz7CDvuLAPZKO1fy0Cgbg0iSv63TGAuKPvtXO32IXE2TNDmjMDGITzrtBFp7xj_IHOADRjzgwlpk2BoiVdEn6sUGhzP3B8y4MFXz4CmORxNlbl0yZGGvM-oRA65e3m3RzV2tFsJPwX6tVXgDPGfTyTjh7j1dql7FY3M0sYrZl1JURprBRNqI6kNk_nhDWr9bPwZ9090bw1g4NOi',
      socialLinks: ['link'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-20">
          <div
            className="relative rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center p-8 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEEcOd8O3dazeCSBDzXPb4TxMMYzlx6GAajmwNjYrjyNIK5XNFks-zICLE-MbYpDz-ITtyU6jzJ4s4XfGLzo_4hauqRc6g3HYZIIB3CQ8hp2MVFUzI-v1COP2zgj64NpTYHBCdWc4WhHJhHNJSsBwuw4_3P1GKH1-abOUT_h0OPvaHMamlpWFITKMPVLhEq2Uj22m3A_ZkzjqfvW5xsGnkWzk8vSJaqq0BZfJNBv8Fd17Mi9NVzOQx62dX8XYTDqV5ZE-PfOvX2jbO')`
            }}
          >
            <div className="max-w-3xl text-center space-y-6">
              <span className="inline-block bg-[#ea2a33]/20 text-[#ea2a33] border border-[#ea2a33]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Since 2014
              </span>
              <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase italic">
                Về Chúng Tôi
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                Đam mê tốc độ, tận tâm chăm sóc. Khám phá hành trình xây dựng trung tâm chăm sóc và nâng cấp xe hiệu năng cao hàng đầu Việt Nam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/services"
                  className="bg-[#ea2a33] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">explore</span>
                  Khám phá dịch vụ
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  Xem Video Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-[#211111] p-6 rounded-xl border border-slate-200 dark:border-white/5 flex flex-col items-center text-center group hover:border-[#ea2a33]/50 transition-colors"
            >
              <span className="material-symbols-outlined text-[#ea2a33] text-4xl mb-2">
                {stat.icon}
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold uppercase">
                {stat.label}
              </p>
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                {stat.number}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[#ea2a33] font-bold tracking-widest uppercase text-sm mb-2">
              Giá Trị Cốt Lõi
            </h2>
            <h3 className="text-slate-900 dark:text-white text-4xl font-black leading-tight uppercase italic mb-4">
              Sứ Mệnh & Tầm Nhìn
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Chúng tôi không chỉ sửa xe, chúng tôi tối ưu hóa cảm giác lái và bảo vệ giá trị tài sản vô giá của bạn bằng công nghệ tiên tiến nhất.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group flex flex-col gap-4">
              <div className="w-full aspect-video bg-cover bg-center rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi7SR9e-ej0gd64Z2-Qnev0lpKvgW8DlZahUctRdOdylaplJarNv2dIRuF5l9Pl1QvoKgkPr0OxtkDa_o8RbYiWiu9rHaVlKlJNaCMQKKXjMj2evPbQdkzL4Pgr8hhQK6J1nblXK_fW4uwLN6W2tMR13_8FKdtwMMQFMIj2zae5KzBCbxGsCqa7h_T1NzkbqCLMguoIRACE5EGru3Q4eOsfhj5dem8QbJfgOdOONB1awbALhkJq17JG4oNytJoXErZjy-VES4zxrOc"
                  alt="Mechanic tuning engine"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="w-full h-full bg-[#ea2a33]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ea2a33]">target</span>
                  Sứ Mệnh
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Mang lại tiêu chuẩn chăm sóc xe chuyên nghiệp quốc tế cho người Việt. Chúng tôi cam kết sử dụng phụ tùng chính hãng và quy trình kỹ thuật nghiêm ngặt nhất.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group flex flex-col gap-4">
              <div className="w-full aspect-video bg-cover bg-center rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClbU16ynKmZm1oqjtWwnCLJXgU7VVgEwUb6Xfy5PAKm9dw8ekMzyABrK7nySAzEj_bPhGKefyLO15pChlZ6tYXX0uCh8ETs261DuM7svFemmD15TSFejdqP7qkNy5_AKAkkfpE9YBj1SYXGZGFK61HEPQI4iNkV9YMA_8PE9kpKGZ3ZxtpqUzNMruXzQtwiG2LXMl1XA_WW8EM7zHJfon1iweZcZ_teCKuFPxIy9mXopa40mDjY7n24rWqmX3JLYHRrt94buMC_CRb"
                  alt="Futuristic car showroom"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="w-full h-full bg-[#ea2a33]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ea2a33]">visibility</span>
                  Tầm Nhìn
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Trở thành biểu tượng độ xe và bảo dưỡng xe hiệu năng cao hàng đầu khu vực Đông Nam Á, nơi mọi chủ xe đều có thể gửi gắm niềm tin tuyệt đối.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="bg-slate-100 dark:bg-[#211111] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-slate-900 dark:text-white text-3xl font-black mb-12 text-center uppercase tracking-tighter">
            Lịch Sử Phát Triển
          </h2>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#ea2a33] before:to-transparent">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${
                    item.active
                      ? 'bg-[#ea2a33] text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{item.icon}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-slate-200 dark:border-white/5 bg-background-light dark:bg-background-dark shadow-xl">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-[#ea2a33]">{item.year}</div>
                  </div>
                  <div className="text-slate-900 dark:text-white font-bold mb-2">{item.title}</div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-[#ea2a33] font-bold uppercase tracking-widest text-sm mb-2">
            Con Người
          </h2>
          <h3 className="text-slate-900 dark:text-white text-4xl font-black uppercase italic">
            Đội Ngũ Chuyên Gia
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-100 dark:bg-[#211111] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-[#ea2a33]/50 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120a0a]/80 to-transparent flex items-end p-6">
                  <div className="flex gap-3">
                    {member.socialLinks.map((socialIcon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-white hover:text-[#ea2a33] transition-colors"
                      >
                        <span className="material-symbols-outlined">{socialIcon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-[#ea2a33] text-xs font-bold uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        <div className="bg-[#ea2a33] rounded-3xl p-10 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-150 transition-transform duration-700">
            <span className="material-symbols-outlined text-9xl text-white">tire_repair</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-5xl font-black uppercase italic mb-6">
              Bạn Đã Sẵn Sàng Nâng Cấp?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Hãy để đội ngũ chuyên gia của chúng tôi biến chiếc xe của bạn thành một tác phẩm nghệ thuật hiệu năng.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#ea2a33] hover:bg-slate-100 px-10 py-4 rounded-xl font-black uppercase transition-colors shadow-2xl"
              >
                Liên Hệ Ngay
              </Link>
              <Link
                href="/gallery"
                className="bg-[#120a0a] text-white border border-white/20 hover:bg-black px-10 py-4 rounded-xl font-black uppercase transition-colors"
              >
                Tham Quan Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
