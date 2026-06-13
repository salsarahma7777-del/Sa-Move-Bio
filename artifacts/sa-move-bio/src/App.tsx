import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProgressBar from './components/ProgressBar';
import NavigationButton from './components/NavigationButton';
import Quiz from './components/Quiz';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 22;

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-[100dvh] w-full relative overflow-x-hidden font-sans text-gray-800 border-t-[color:var(--color-orange-50)] border-r-[color:var(--color-orange-50)] border-b-[color:var(--color-orange-50)] border-l-[color:var(--color-orange-50)]"
      style={{ background: 'linear-gradient(135deg, #FFFDF5, #FFF8E8, #FFFBF0, #FFF5E0)' }}
    >
      {/* Decorative blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none z-0" style={{ backgroundColor: '#F5E6C8' }}></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none z-0" style={{ backgroundColor: '#EDD9A3' }}></div>
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full mix-blend-multiply filter blur-[80px] opacity-15 pointer-events-none z-0" style={{ backgroundColor: '#F9EDD2' }}></div>
      <NavBar currentPage={currentPage} goToPage={goToPage} />
      <div className="max-w-[700px] mx-auto p-4 md:p-8 relative z-10">
        <Header />
        <ProgressBar currentPage={currentPage} totalPages={totalPages} />

        {currentPage > 1 && (
          <button
            data-testid="btn-back-page"
            onClick={() => goToPage(currentPage - 1)}
            className="mb-4 flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-gray-200 text-[#355070] font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-sm"
          >
            ← Kembali
          </button>
        )}
        
        <div key={currentPage} className="animate-fade-slide-up">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 relative">
            <PageContent page={currentPage} goToPage={goToPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContent({ page, goToPage }: { page: number, goToPage: (p: number) => void }) {
  switch (page) {
    case 1:
      return (
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#355070]">🚀 Start</h2>
          <p className="text-lg text-gray-600">Selamat datang pada media pembelajaran SA.Move.Bio (Smart Movement Biology).</p>
          <NavigationButton text="Mulai" onClick={() => goToPage(2)} />
        </div>
      );
    case 2:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📝 Pre-Test</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-800">
            <p className="font-medium text-lg">Silakan mengerjakan pre-test yang akan dibagikan oleh guru.</p>
            <p className="mt-2 opacity-80">Soal tidak ditampilkan pada media ini.</p>
          </div>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(3)} />
        </div>
      );
    case 3:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🎯 Tujuan Pembelajaran</h2>
          <ul className="space-y-4">
            {[
              "Menjelaskan struktur dan fungsi sistem gerak manusia.",
              "Menganalisis hubungan tulang, sendi, dan otot.",
              "Mengidentifikasi mekanisme gerak manusia.",
              "Menganalisis gangguan sistem gerak.",
              "Memecahkan masalah sistem gerak manusia.",
              "Mengembangkan keterampilan pengambilan keputusan."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-center bg-teal-50 p-4 rounded-xl text-[#355070] font-medium">
                <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0">{i + 1}</div>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(4)} />
        </div>
      );
    case 4:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📖 Petunjuk Penggunaan</h2>
          <ol className="space-y-3">
            {[
              "Baca tujuan pembelajaran.",
              "Pelajari materi sistem gerak manusia.",
              "Amati masalah yang diberikan.",
              "Lakukan observasi.",
              "Think (berpikir mandiri).",
              "Pair (diskusi dengan pasangan).",
              "Share (presentasi hasil diskusi).",
              "Kerjakan kuis pengambilan keputusan.",
              "Kerjakan post-test dari guru."
            ].map((text, i) => (
              <li key={i} className="flex gap-4 items-center p-3 border-b border-gray-100 last:border-0 text-gray-700">
                <span className="font-bold text-lg text-emerald-500">{i + 1}.</span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(5)} />
        </div>
      );
    case 5:
      return (
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-[#355070] mb-6">📚 Materi Sistem Gerak</h2>
          <p className="text-lg text-gray-600 mb-6">Materi akan membahas:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Konsep Sistem Gerak",
              "Tulang dan Fungsinya",
              "Sendi dan Jenis-Jenis Sendi",
              "Otot dan Mekanisme Kerja Otot",
              "Mekanisme Gerak Manusia",
              "Gangguan Sistem Gerak"
            ].map((text, i) => (
              <div key={i} className="bg-lavender-50 bg-[#E8DFFB]/30 p-4 rounded-xl font-medium text-[#6D597A] border border-[#E8DFFB]">
                {text}
              </div>
            ))}
          </div>
          <NavigationButton text="Masuk Materi →" onClick={() => goToPage(6)} />
        </div>
      );
    case 6:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🦴 Konsep Sistem Gerak Manusia</h2>
          {/* AI-generated anatomy illustration */}
          <div className="flex justify-center mb-2">
            <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden w-full max-w-sm">
              <img
                src="/anatomy-musculoskeletal.png"
                alt="Ilustrasi Sistem Gerak Manusia — Tulang, Sendi, Otot"
                className="w-full object-contain"
              />
              <div className="grid grid-cols-3 divide-x divide-gray-100 text-center text-xs py-2 bg-gray-50">
                <div className="py-1 font-bold text-blue-700">🦴 Tulang</div>
                <div className="py-1 font-bold text-orange-700">🔗 Sendi</div>
                <div className="py-1 font-bold text-red-700">💪 Otot</div>
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Sistem gerak manusia merupakan sistem organ yang memungkinkan manusia melakukan berbagai aktivitas dan perpindahan posisi tubuh.
          </p>
          <div className="bg-teal-50 p-6 rounded-2xl">
            <p className="font-semibold mb-3 text-teal-900">Sistem gerak tersusun atas:</p>
            <ul className="list-disc pl-6 space-y-2 text-teal-800">
              <li>Tulang (alat gerak pasif)</li>
              <li>Sendi (penghubung tulang)</li>
              <li>Otot (alat gerak aktif)</li>
            </ul>
          </div>
          <p className="text-gray-600 text-center italic">
            "Ketiga komponen tersebut bekerja sama sehingga manusia dapat berdiri, berjalan, berlari, menulis, dan melakukan aktivitas lainnya."
          </p>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(7)} />
        </div>
      );
    case 7:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-2">🦴 Tulang dan Fungsinya</h2>
          <p className="text-center text-gray-600 mb-4">Tulang merupakan alat gerak <strong>pasif</strong> yang menyusun rangka tubuh manusia. Manusia dewasa memiliki ±206 tulang.</p>

          {/* Skeleton + fungsi side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            <div className="flex flex-col items-center bg-blue-50 rounded-2xl p-4 border border-blue-100">
              <img
                src="/skeleton-anatomy.png"
                alt="Kerangka Manusia"
                className="max-h-[280px] object-contain"
              />
              <p className="text-xs text-blue-700 mt-2 font-medium text-center">Rangka Tubuh Manusia (Tampak Depan)</p>
            </div>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-3 text-base border-b border-blue-200 pb-2">⚙️ Fungsi Tulang</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                {[
                  ["🏗️","Menegakkan dan membentuk tubuh"],
                  ["🛡️","Melindungi organ vital (jantung, paru-paru, otak)"],
                  ["💪","Tempat melekatnya otot"],
                  ["🔴","Pembentukan sel darah merah & putih"],
                  ["🧂","Penyimpanan mineral (Ca & P)"],
                ].map(([icon, text], i) => (
                  <li key={i} className="flex items-start gap-2"><span>{icon}</span><span>{text as string}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bone structure */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
            <h3 className="font-bold text-amber-900 mb-3 text-base">🔬 Struktur Tulang (Penampang)</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <img
                src="/bone-cross-section.png"
                alt="Penampang Tulang — Periosteum, Tulang Kompak, Tulang Spons, Sumsum Tulang"
                className="max-h-[220px] object-contain rounded-xl bg-white shadow-sm"
              />
              <ul className="text-sm space-y-2 text-amber-900">
                <li><strong>Periosteum</strong> — lapisan terluar pelindung tulang</li>
                <li><strong>Tulang Kompak</strong> — lapisan keras & padat di bagian luar</li>
                <li><strong>Tulang Spons</strong> — bagian dalam, ringan & berongga</li>
                <li><strong>Sumsum Tulang</strong> — penghasil sel darah</li>
              </ul>
            </div>
          </div>

          {/* Bone types gallery */}
          <div>
            <h3 className="font-bold text-[#355070] text-base mb-3">📐 Jenis-Jenis Tulang</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                {
                  name: "Tulang Pipa",
                  desc: "Panjang, berongga. Contoh: femur, humerus",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Femur_anterior.png/80px-Femur_anterior.png",
                  color: "bg-purple-50 border-purple-100",
                  textColor: "text-purple-900",
                },
                {
                  name: "Tulang Pipih",
                  desc: "Tipis & lebar. Contoh: tulang tengkorak, belikat",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Parietal_bone.png/100px-Parietal_bone.png",
                  color: "bg-teal-50 border-teal-100",
                  textColor: "text-teal-900",
                },
                {
                  name: "Tulang Pendek",
                  desc: "Kecil & kubus. Contoh: tulang pergelangan tangan & kaki",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carpus_and_tarsus.jpg/100px-Carpus_and_tarsus.jpg",
                  color: "bg-orange-50 border-orange-100",
                  textColor: "text-orange-900",
                },
                {
                  name: "Tulang Tidak Beraturan",
                  desc: "Bentuk kompleks. Contoh: ruas tulang belakang",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Fourth_cervical_vertebra.png/100px-Fourth_cervical_vertebra.png",
                  color: "bg-rose-50 border-rose-100",
                  textColor: "text-rose-900",
                },
              ].map((bone, i) => (
                <div key={i} className={`${bone.color} border rounded-2xl p-3 flex flex-col items-center text-center gap-2`}>
                  <img
                    src={bone.img}
                    alt={bone.name}
                    loading="lazy"
                    className="h-16 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <p className={`font-bold text-sm ${bone.textColor}`}>{bone.name}</p>
                  <p className="text-xs text-gray-600">{bone.desc}</p>
                </div>
              ))}
            </div>
            {/* AI bone types overview illustration */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/bone-types.png"
                alt="Ilustrasi Jenis-Jenis Tulang: Tulang Pipa, Tulang Pipih, Tulang Pendek, Tulang Tidak Beraturan"
                className="w-full object-contain"
              />
              <p className="text-xs text-center text-gray-500 py-2 bg-gray-50 border-t border-gray-100">
                Ilustrasi perbandingan keempat jenis tulang manusia
              </p>
            </div>
          </div>

          <NavigationButton text="Lanjut →" onClick={() => goToPage(8)} />
        </div>
      );
    case 8:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-2">🔗 Sendi dan Macam-Macam Sendi</h2>
          <p className="text-center text-gray-600 mb-4">Sendi adalah hubungan antara dua tulang atau lebih. Sendi memungkinkan terjadinya gerakan yang beragam.</p>

          {/* Synovial joint anatomy */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
            <h3 className="font-bold text-orange-900 mb-3 text-base">🔬 Anatomi Sendi Sinovial</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <img
                src="/synovial-joint.png"
                alt="Anatomi Sendi Sinovial — Tulang, Kartilago, Cairan Sinovial, Ligamen, Kapsul Sendi"
                className="max-h-[240px] object-contain rounded-xl bg-white shadow-sm"
              />
              <ul className="text-sm space-y-2 text-orange-900">
                <li>🦴 <strong>Tulang</strong> — dua tulang yang bersendi</li>
                <li>🟡 <strong>Kartilago</strong> — bantalan tulang rawan</li>
                <li>💧 <strong>Cairan Sinovial</strong> — pelumas sendi</li>
                <li>🎀 <strong>Ligamen</strong> — penghubung tulang dengan tulang</li>
                <li>🔲 <strong>Kapsul Sendi</strong> — pembungkus sendi</li>
              </ul>
            </div>
          </div>

          {/* Joint types grid with images */}
          <div>
            <h3 className="font-bold text-[#355070] text-base mb-3">📌 Jenis-Jenis Sendi Berdasarkan Geraknya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  name: "Sendi Engsel",
                  desc: "Gerak 1 arah (fleksi-ekstensi)",
                  example: "Contoh: siku & lutut",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gray329.png/200px-Gray329.png",
                  color: "bg-blue-50 border-blue-100",
                  badge: "bg-blue-200 text-blue-800",
                },
                {
                  name: "Sendi Peluru",
                  desc: "Gerak bebas ke segala arah",
                  example: "Contoh: bahu & panggul",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Gray341.png/200px-Gray341.png",
                  color: "bg-purple-50 border-purple-100",
                  badge: "bg-purple-200 text-purple-800",
                },
                {
                  name: "Sendi Putar",
                  desc: "Gerak memutar pada sumbu",
                  example: "Contoh: leher (atlas-axis)",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gray304.png/200px-Gray304.png",
                  color: "bg-teal-50 border-teal-100",
                  badge: "bg-teal-200 text-teal-800",
                },
                {
                  name: "Sendi Pelana",
                  desc: "Gerak dua arah (maju-mundur & kiri-kanan)",
                  example: "Contoh: ibu jari tangan",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Gray326.png/200px-Gray326.png",
                  color: "bg-rose-50 border-rose-100",
                  badge: "bg-rose-200 text-rose-800",
                },
              ].map((s, i) => (
                <div key={i} className={`${s.color} border rounded-2xl p-3 flex gap-3 items-start`}>
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-20 h-20 object-contain rounded-lg bg-white shrink-0 shadow-sm"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.name}</span>
                    <p className="text-sm font-medium text-gray-800 mt-1">{s.desc}</p>
                    <p className="text-xs text-gray-500 mt-0.5 italic">{s.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sendi Geser as extra */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex gap-3 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg shrink-0">🔗</div>
            <div>
              <span className="font-bold text-gray-800 text-sm">Sendi Geser</span>
              <p className="text-xs text-gray-600">Gerak menggeser satu tulang di atas tulang lain. Contoh: tulang pergelangan tangan (karpal).</p>
            </div>
          </div>

          {/* AI joint types overview illustration */}
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/joint-types.png"
              alt="Ilustrasi 5 Jenis Sendi: Sendi Engsel, Peluru, Putar, Pelana, Geser dengan panah arah gerak"
              className="w-full object-contain"
            />
            <p className="text-xs text-center text-gray-500 py-2 bg-gray-50 border-t border-gray-100">
              Ilustrasi perbandingan kelima jenis sendi beserta arah geraknya
            </p>
          </div>

          <NavigationButton text="Lanjut →" onClick={() => goToPage(9)} />
        </div>
      );
    case 9:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-2">💪 Otot dan Mekanisme Kerja Otot</h2>
          <p className="text-center text-gray-600 mb-4">Otot adalah alat gerak <strong>aktif</strong> yang bekerja dengan cara berkontraksi (memendek) dan berelaksasi (memanjang).</p>

          {/* Anterior + Posterior muscle views */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center bg-red-50 rounded-2xl p-3 border border-red-100">
              <img
                src="/muscles-anterior.png"
                alt="Otot Anterior"
                className="max-h-[220px] object-contain"
              />
              <p className="text-xs text-red-700 mt-2 font-semibold text-center">Tampak Depan (Anterior)</p>
            </div>
            <div className="flex flex-col items-center bg-rose-50 rounded-2xl p-3 border border-rose-100">
              <img
                src="/muscles-posterior.png"
                alt="Otot Posterior"
                className="max-h-[220px] object-contain"
              />
              <p className="text-xs text-rose-700 mt-2 font-semibold text-center">Tampak Belakang (Posterior)</p>
            </div>
          </div>

          {/* Infographic: Three Muscle Types */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
            {/* Infographic Header */}
            <div className="bg-gradient-to-r from-[#355070] to-[#4a6fa5] px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">🔬</span>
              <div>
                <h3 className="font-black text-white text-base tracking-wide">ILUSTRASI ANATOMI: TIGA JENIS OTOT MANUSIA</h3>
                <p className="text-blue-200 text-[10px] font-medium">Struktur Sel &amp; Jaringan Otot — Gaya Atlas Biologi Medis</p>
              </div>
            </div>

            {/* === PANEL 1: OTOT LURIK === */}
            <div className="border-b border-gray-100">
              <div className="flex items-center gap-3 bg-rose-50 px-4 py-2 border-b border-rose-100">
                <span className="text-lg">🦵</span>
                <div className="flex-1">
                  <span className="font-black text-rose-800 text-sm">Otot Lurik</span>
                  <span className="text-rose-500 text-xs font-semibold ml-1">(Otot Skelet)</span>
                </div>
                <span className="bg-rose-500 text-white text-[9px] font-black px-3 py-1 rounded-full tracking-wide">SADAR / VOLUNTER</span>
              </div>
              <div className="flex gap-0">
                {/* SVG illustration */}
                <div className="bg-[#fff8f8] border-r border-rose-100 p-3 flex items-center justify-center" style={{minWidth: 200}}>
                  <svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
                    {/* Background */}
                    <rect width="200" height="160" fill="#fff8f8" rx="8"/>
                    {/* Label: tampak penampang membujur */}
                    <text x="100" y="12" textAnchor="middle" fontSize="7" fill="#9f1239" fontStyle="italic" fontFamily="serif">Penampang Membujur — Mikroskop Cahaya</text>
                    {/* Fiber 1 */}
                    <rect x="10" y="22" width="180" height="32" rx="5" fill="#fecdd3" stroke="#fb7185" strokeWidth="1.2"/>
                    {/* striations fiber 1 */}
                    {[24,34,44,54,64,74,84,94,104,114,124,134,144,154,164,174].map((x,i) => (
                      <line key={i} x1={x} y1="22" x2={x} y2="54" stroke="#f43f5e" strokeWidth="0.7" opacity="0.5"/>
                    ))}
                    {/* Nuclei fiber 1 - peripheral */}
                    <ellipse cx="30" cy="25" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    <ellipse cx="90" cy="52" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    <ellipse cx="155" cy="25" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    {/* Fiber 2 */}
                    <rect x="10" y="60" width="180" height="32" rx="5" fill="#fda4af" stroke="#fb7185" strokeWidth="1.2"/>
                    {[24,34,44,54,64,74,84,94,104,114,124,134,144,154,164,174].map((x,i) => (
                      <line key={i} x1={x} y1="60" x2={x} y2="92" stroke="#f43f5e" strokeWidth="0.7" opacity="0.5"/>
                    ))}
                    <ellipse cx="60" cy="63" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    <ellipse cx="130" cy="89" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    {/* Fiber 3 */}
                    <rect x="10" y="98" width="180" height="32" rx="5" fill="#fecdd3" stroke="#fb7185" strokeWidth="1.2"/>
                    {[24,34,44,54,64,74,84,94,104,114,124,134,144,154,164,174].map((x,i) => (
                      <line key={i} x1={x} y1="98" x2={x} y2="130" stroke="#f43f5e" strokeWidth="0.7" opacity="0.5"/>
                    ))}
                    <ellipse cx="45" cy="101" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    <ellipse cx="170" cy="127" rx="7" ry="3.5" fill="#be123c" opacity="0.75"/>
                    {/* Callout: garis melintang */}
                    <line x1="74" y1="38" x2="74" y2="148" stroke="#f43f5e" strokeWidth="0.8" strokeDasharray="2,2"/>
                    <text x="76" y="152" fontSize="6.5" fill="#be123c" fontWeight="bold" fontFamily="sans-serif">Garis melintang (lurik)</text>
                    {/* Callout: inti sel */}
                    <line x1="30" y1="25" x2="8" y2="15" stroke="#9f1239" strokeWidth="0.8"/>
                    <text x="2" y="12" fontSize="6" fill="#9f1239" fontFamily="sans-serif" fontWeight="bold">Inti (perifer)</text>
                  </svg>
                </div>
                {/* Description panel */}
                <div className="flex-1 p-4 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Bekerja secara <strong className="text-rose-700">sadar (volunter)</strong> — dikontrol oleh sistem saraf somatik. Melekat pada tulang rangka melalui tendon, menggerakkan tubuh sesuai kehendak.
                    </p>
                    <div className="space-y-1.5">
                      {[
                        ["Bentuk sel", "Silindris panjang (100–300 µm), berinti banyak di tepi sel"],
                        ["Pola", "Ada garis melintang gelap-terang (pita A dan pita I)"],
                        ["Kecepatan", "Kontraksi cepat, namun mudah lelah"],
                        ["Stimulasi", "Sinyal dari otak melalui saraf motorik"],
                      ].map(([k, v], i) => (
                        <div key={i} className="flex gap-2 items-baseline">
                          <span className="text-[9px] font-black text-rose-600 shrink-0 w-16">{k}</span>
                          <span className="text-[10px] text-gray-600 leading-snug">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-rose-50">
                    <p className="text-[9px] font-bold text-rose-700 mb-1.5">Contoh lokasi:</p>
                    <div className="flex flex-wrap gap-1">
                      {["Bisep", "Trisep", "Otot paha (quadriceps)", "Deltoid", "Gastroknemius"].map(ex => (
                        <span key={ex} className="bg-rose-100 text-rose-800 text-[9px] font-semibold px-2 py-0.5 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === PANEL 2: OTOT POLOS === */}
            <div className="border-b border-gray-100">
              <div className="flex items-center gap-3 bg-violet-50 px-4 py-2 border-b border-violet-100">
                <span className="text-lg">🫁</span>
                <div className="flex-1">
                  <span className="font-black text-violet-800 text-sm">Otot Polos</span>
                  <span className="text-violet-500 text-xs font-semibold ml-1">(Otot Visceral)</span>
                </div>
                <span className="bg-violet-500 text-white text-[9px] font-black px-3 py-1 rounded-full tracking-wide">TIDAK SADAR / INVOLUNTER</span>
              </div>
              <div className="flex gap-0">
                {/* SVG illustration */}
                <div className="bg-[#faf8ff] border-r border-violet-100 p-3 flex items-center justify-center" style={{minWidth: 200}}>
                  <svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="160" fill="#faf8ff" rx="8"/>
                    <text x="100" y="12" textAnchor="middle" fontSize="7" fill="#5b21b6" fontStyle="italic" fontFamily="serif">Penampang Membujur — Sel Gelendong</text>
                    {/* Smooth muscle cells - spindle shaped, arranged in staggered rows */}
                    {/* Row 1 */}
                    <ellipse cx="35" cy="38" rx="28" ry="11" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="35" cy="38" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="100" cy="32" rx="28" ry="11" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="100" cy="32" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="165" cy="40" rx="28" ry="11" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="165" cy="40" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    {/* Row 2 - offset */}
                    <ellipse cx="60" cy="65" rx="28" ry="11" fill="#ede9fe" stroke="#a78bfa" strokeWidth="1"/>
                    <ellipse cx="60" cy="65" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="130" cy="60" rx="28" ry="11" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="130" cy="60" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    {/* Row 3 */}
                    <ellipse cx="35" cy="90" rx="28" ry="11" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="35" cy="90" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="100" cy="95" rx="28" ry="11" fill="#ddd6fe" stroke="#a78bfa" strokeWidth="1"/>
                    <ellipse cx="100" cy="95" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="165" cy="88" rx="28" ry="11" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="165" cy="88" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    {/* Row 4 */}
                    <ellipse cx="60" cy="118" rx="28" ry="11" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="1"/>
                    <ellipse cx="60" cy="118" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    <ellipse cx="140" cy="122" rx="28" ry="11" fill="#c4b5fd" stroke="#a78bfa" strokeWidth="1"/>
                    <ellipse cx="140" cy="122" rx="7" ry="4" fill="#7c3aed" opacity="0.6"/>
                    {/* Callouts */}
                    <line x1="35" y1="34" x2="8" y2="14" stroke="#7c3aed" strokeWidth="0.8"/>
                    <text x="2" y="12" fontSize="6" fill="#5b21b6" fontWeight="bold" fontFamily="sans-serif">Inti (tengah)</text>
                    <line x1="130" y1="56" x2="160" y2="145" stroke="#7c3aed" strokeWidth="0.8" strokeDasharray="2,2"/>
                    <text x="105" y="153" fontSize="6.5" fill="#5b21b6" fontWeight="bold" fontFamily="sans-serif">Bentuk gelendong (fusiform)</text>
                    <text x="105" y="161" fontSize="6" fill="#6d28d9" fontFamily="sans-serif">Tidak ada garis melintang</text>
                  </svg>
                </div>
                {/* Description panel */}
                <div className="flex-1 p-4 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Bekerja secara <strong className="text-violet-700">tidak sadar (involunter)</strong> — dikontrol oleh sistem saraf otonom. Ditemukan di dinding organ dalam, mengatur pergerakan internal tubuh tanpa disadari.
                    </p>
                    <div className="space-y-1.5">
                      {[
                        ["Bentuk sel", "Gelendong (fusiform), runcing di kedua ujung, berinti satu di tengah"],
                        ["Pola", "Tidak ada garis melintang — permukaan polos dan halus"],
                        ["Kecepatan", "Kontraksi lambat, tahan lama, tidak mudah lelah"],
                        ["Stimulasi", "Sistem saraf otonom, hormon, rangsang lokal"],
                      ].map(([k, v], i) => (
                        <div key={i} className="flex gap-2 items-baseline">
                          <span className="text-[9px] font-black text-violet-600 shrink-0 w-16">{k}</span>
                          <span className="text-[10px] text-gray-600 leading-snug">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-violet-50">
                    <p className="text-[9px] font-bold text-violet-700 mb-1.5">Contoh lokasi:</p>
                    <div className="flex flex-wrap gap-1">
                      {["Lambung", "Usus halus", "Usus besar", "Pembuluh darah", "Kandung kemih", "Rahim"].map(ex => (
                        <span key={ex} className="bg-violet-100 text-violet-800 text-[9px] font-semibold px-2 py-0.5 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* === PANEL 3: OTOT JANTUNG === */}
            <div>
              <div className="flex items-center gap-3 bg-amber-50 px-4 py-2 border-b border-amber-100">
                <span className="text-lg">❤️</span>
                <div className="flex-1">
                  <span className="font-black text-amber-800 text-sm">Otot Jantung</span>
                  <span className="text-amber-500 text-xs font-semibold ml-1">(Otot Kardiak)</span>
                </div>
                <span className="bg-amber-500 text-white text-[9px] font-black px-3 py-1 rounded-full tracking-wide">TIDAK SADAR / JANTUNG</span>
              </div>
              <div className="flex gap-0">
                {/* SVG illustration */}
                <div className="bg-[#fffbeb] border-r border-amber-100 p-3 flex items-center justify-center" style={{minWidth: 200}}>
                  <svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="160" fill="#fffbeb" rx="8"/>
                    <text x="100" y="12" textAnchor="middle" fontSize="7" fill="#92400e" fontStyle="italic" fontFamily="serif">Jaringan Otot Jantung — Sinsitium Fungsional</text>
                    {/* Cardiac muscle - branched network */}
                    {/* Main horizontal fiber */}
                    <path d="M10,55 Q40,50 60,55 L120,55 Q150,50 190,55" stroke="#f59e0b" strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.35"/>
                    <path d="M10,55 Q40,50 60,55 L120,55 Q150,50 190,55" stroke="#fcd34d" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.5"/>
                    <path d="M10,55 Q40,50 60,55 L120,55 Q150,50 190,55" stroke="#fde68a" strokeWidth="10" fill="none" strokeLinecap="round"/>
                    {/* striations on fiber 1 */}
                    {[25,40,55,70,85,100,115,130,145,160,175].map((x,i) => (
                      <line key={i} x1={x} y1="49" x2={x} y2="61" stroke="#d97706" strokeWidth="0.8" opacity="0.6"/>
                    ))}
                    {/* Branch from top */}
                    <path d="M80,55 Q85,35 95,25 Q105,18 120,22" stroke="#fcd34d" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.5"/>
                    <path d="M80,55 Q85,35 95,25 Q105,18 120,22" stroke="#fde68a" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    {[0.2,0.45,0.7,0.9].map((t,i) => {
                      const x = 80 + t*(120-80);
                      const y = 55 + t*(22-55) - Math.sin(t*Math.PI)*8;
                      return <line key={i} x1={x-4} y1={y-4} x2={x+4} y2={y+4} stroke="#d97706" strokeWidth="0.8" opacity="0.6"/>;
                    })}
                    {/* Branch downward */}
                    <path d="M130,55 Q135,75 130,95 Q125,110 135,120" stroke="#fcd34d" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.5"/>
                    <path d="M130,55 Q135,75 130,95 Q125,110 135,120" stroke="#fde68a" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    {/* Second horizontal fiber */}
                    <path d="M10,105 Q50,100 80,105 L140,108 Q165,112 190,105" stroke="#fcd34d" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.5"/>
                    <path d="M10,105 Q50,100 80,105 L140,108 Q165,112 190,105" stroke="#fde68a" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    {[25,40,55,70,85,100,115,130,145,160,175].map((x,i) => (
                      <line key={i} x1={x} y1="100" x2={x} y2="112" stroke="#d97706" strokeWidth="0.8" opacity="0.6"/>
                    ))}
                    {/* Nuclei - central */}
                    <ellipse cx="50" cy="55" rx="8" ry="4" fill="#b45309" opacity="0.7"/>
                    <ellipse cx="155" cy="55" rx="8" ry="4" fill="#b45309" opacity="0.7"/>
                    <ellipse cx="105" cy="30" rx="7" ry="3.5" fill="#b45309" opacity="0.7"/>
                    <ellipse cx="130" cy="90" rx="7" ry="3.5" fill="#b45309" opacity="0.7"/>
                    <ellipse cx="60" cy="105" rx="8" ry="4" fill="#b45309" opacity="0.7"/>
                    <ellipse cx="160" cy="105" rx="8" ry="4" fill="#b45309" opacity="0.7"/>
                    {/* Intercalated discs */}
                    <line x1="90" y1="49" x2="90" y2="61" stroke="#92400e" strokeWidth="2.5" opacity="0.9"/>
                    <line x1="160" y1="49" x2="160" y2="61" stroke="#92400e" strokeWidth="2.5" opacity="0.9"/>
                    <line x1="95" y1="100" x2="95" y2="112" stroke="#92400e" strokeWidth="2.5" opacity="0.9"/>
                    {/* Callout: diskus interkalasi */}
                    <line x1="90" y1="55" x2="65" y2="140" stroke="#92400e" strokeWidth="0.8" strokeDasharray="2,2"/>
                    <text x="4" y="143" fontSize="6.5" fill="#92400e" fontWeight="bold" fontFamily="sans-serif">Diskus interkalasi</text>
                    <text x="4" y="150" fontSize="6" fill="#92400e" fontFamily="sans-serif">(persambungan sel)</text>
                    {/* Callout: percabangan */}
                    <line x1="80" y1="40" x2="20" y2="15" stroke="#b45309" strokeWidth="0.8"/>
                    <text x="2" y="12" fontSize="6" fill="#92400e" fontWeight="bold" fontFamily="sans-serif">Percabangan</text>
                  </svg>
                </div>
                {/* Description panel */}
                <div className="flex-1 p-4 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      Bekerja secara <strong className="text-amber-700">tidak sadar, ritmis, dan terus-menerus</strong> sepanjang hayat — dikendalikan oleh nodus SA (pacu jantung alami). Memiliki struktur unik berupa percabangan sel yang membentuk jaringan sinsitium.
                    </p>
                    <div className="space-y-1.5">
                      {[
                        ["Bentuk sel", "Silindris bercabang, berinti 1–2 di tengah (sinsitium)"],
                        ["Pola", "Ada garis lurik + diskus interkalasi di antara sel"],
                        ["Kecepatan", "Kontraksi ritmis, tidak pernah lelah selama hidup"],
                        ["Stimulasi", "Nodus SA/AV, sistem konduksi jantung, saraf otonom"],
                      ].map(([k, v], i) => (
                        <div key={i} className="flex gap-2 items-baseline">
                          <span className="text-[9px] font-black text-amber-600 shrink-0 w-16">{k}</span>
                          <span className="text-[10px] text-gray-600 leading-snug">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-amber-50">
                    <p className="text-[9px] font-bold text-amber-700 mb-1.5">Contoh lokasi:</p>
                    <div className="flex flex-wrap gap-1">
                      {["Miokardium", "Dinding Atrium", "Dinding Ventrikel", "Septum jantung"].map(ex => (
                        <span key={ex} className="bg-amber-100 text-amber-800 text-[9px] font-semibold px-2 py-0.5 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 border-t border-gray-100 px-4 py-2 flex items-center gap-2">
              <span className="text-[9px] text-gray-400 italic flex-1">Ilustrasi anatomi sel otot — Biologi SMP/SMA · Sumber: Atlas Histologi &amp; Sobotta</span>
              <span className="text-[9px] text-gray-400">© SA.Move.Bio</span>
            </div>
          </div>

          {/* Antagonist & Synergist illustration */}
          <div className="bg-white border border-teal-100 rounded-3xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-emerald-500 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-black text-white text-base tracking-wide">CARA KERJA OTOT: ANTAGONIS &amp; SINERGIS</h3>
                <p className="text-teal-100 text-[10px] font-medium">Anatomi Otot Manusia — Mekanisme Gerak Otot</p>
              </div>
            </div>

            {/* Anatomy image + two explanation cards */}
            <div className="flex flex-col sm:flex-row gap-0">
              {/* Central anatomy image */}
              <div className="flex flex-col items-center justify-center bg-white px-4 py-4 sm:w-[45%] border-b sm:border-b-0 sm:border-r border-teal-100">
                <img
                  src="/muscle-anatomy.png"
                  alt="Anatomi Otot Manusia"
                  className="max-h-[320px] object-contain drop-shadow-sm"
                />
                <p className="text-[9px] text-gray-400 italic text-center mt-2">Anatomi otot manusia — tampak depan &amp; belakang</p>
              </div>

              {/* Right side: two explanation panels */}
              <div className="flex flex-col sm:w-[55%] divide-y divide-teal-100">

                {/* === ANTAGONIS === */}
                <div className="flex-1 bg-teal-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🔄</span>
                    <span className="font-black text-teal-800 text-sm">Antagonis</span>
                    <span className="ml-auto text-[9px] text-teal-600 font-bold bg-teal-100 px-2 py-0.5 rounded-full">Berlawanan Arah</span>
                  </div>
                  <p className="text-xs text-teal-900 leading-relaxed mb-3">
                    Dua otot bekerja <strong>berlawanan arah</strong>. Saat satu berkontraksi, yang lain berelaksasi.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white rounded-xl p-3 border border-teal-100">
                      <p className="text-[10px] font-black text-teal-700 mb-1.5">💪 FLEKSI — Lengan Membengkok</p>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-red-50 rounded-lg p-2 text-center border border-red-100">
                          <p className="text-[9px] font-black text-red-700">BISEP</p>
                          <p className="text-[8px] text-red-500 font-semibold">Kontraksi ↑</p>
                          <p className="text-[8px] text-gray-500">(memendek)</p>
                        </div>
                        <div className="flex items-center text-gray-300 font-bold text-sm">↔</div>
                        <div className="flex-1 bg-indigo-50 rounded-lg p-2 text-center border border-indigo-100">
                          <p className="text-[9px] font-black text-indigo-700">TRISEP</p>
                          <p className="text-[8px] text-indigo-400 font-semibold">Relaksasi ↓</p>
                          <p className="text-[8px] text-gray-500">(memanjang)</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-teal-100">
                      <p className="text-[10px] font-black text-teal-700 mb-1.5">〰️ EKSTENSI — Lengan Meluruskan</p>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-indigo-50 rounded-lg p-2 text-center border border-indigo-100">
                          <p className="text-[9px] font-black text-indigo-700">TRISEP</p>
                          <p className="text-[8px] text-indigo-500 font-semibold">Kontraksi ↑</p>
                          <p className="text-[8px] text-gray-500">(memendek)</p>
                        </div>
                        <div className="flex items-center text-gray-300 font-bold text-sm">↔</div>
                        <div className="flex-1 bg-red-50 rounded-lg p-2 text-center border border-red-100">
                          <p className="text-[9px] font-black text-red-700">BISEP</p>
                          <p className="text-[8px] text-red-400 font-semibold">Relaksasi ↓</p>
                          <p className="text-[8px] text-gray-500">(memanjang)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* === SINERGIS === */}
                <div className="flex-1 bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🤝</span>
                    <span className="font-black text-emerald-800 text-sm">Sinergis</span>
                    <span className="ml-auto text-[9px] text-emerald-600 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">Bekerja Bersama</span>
                  </div>
                  <p className="text-xs text-emerald-900 leading-relaxed mb-3">
                    Beberapa otot bekerja <strong>bersama-sama</strong> untuk menghasilkan satu gerakan yang sama secara serentak.
                  </p>
                  <div className="bg-white rounded-xl p-3 border border-emerald-100 mb-2">
                    <p className="text-[10px] font-black text-emerald-700 mb-2">💪 Contoh: Fleksi Siku</p>
                    <div className="space-y-1.5">
                      {[
                        { name: "Bisep Brachii", role: "Fleksor utama", color: "bg-emerald-100 text-emerald-800" },
                        { name: "Brachialis", role: "Fleksor kuat di bawah bisep", color: "bg-teal-100 text-teal-800" },
                        { name: "Brachioradialis", role: "Stabilisator lengan bawah", color: "bg-cyan-100 text-cyan-800" },
                        { name: "Coracobrachialis", role: "Pembantu fleksi bahu", color: "bg-sky-100 text-sky-800" },
                      ].map((m) => (
                        <div key={m.name} className="flex items-center gap-2">
                          <span className={`text-[8px] font-black px-2 py-0.5 rounded-full shrink-0 ${m.color}`}>{m.name}</span>
                          <span className="text-[8px] text-gray-500">{m.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-emerald-100 rounded-xl px-3 py-2 text-center">
                    <p className="text-[9px] font-black text-emerald-800">Semua berkontraksi bersama → 1 Gerakan Fleksi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 border-t border-teal-100 px-4 py-2">
              <p className="text-[9px] text-gray-400 italic text-center">Anatomi otot manusia — Cara kerja otot antagonis &amp; sinergis · Biologi SMP/SMA</p>
            </div>
          </div>

          <NavigationButton text="Lanjut →" onClick={() => goToPage(10)} />
        </div>
      );
    case 10:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-2">⚙️ Mekanisme Gerak Manusia</h2>
          <p className="text-gray-600 text-center mb-4">Gerakan terjadi karena kerja sama antara <strong>otot</strong>, <strong>sendi</strong>, dan <strong>tulang</strong> secara berurutan.</p>

          {/* Sequential mechanism illustration */}
          <div className="bg-white border border-emerald-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-3 flex items-center gap-2">
              <span className="text-2xl">⚙️</span>
              <div>
                <h3 className="font-black text-white text-sm tracking-wide">ILUSTRASI SEKUENSIAL: MEKANISME GERAK MANUSIA</h3>
                <p className="text-emerald-100 text-[10px] font-medium">Kontraksi Otot → Tarikan Tulang → Gerak Sendi → Perubahan Posisi</p>
              </div>
            </div>

            {/* Main SVG illustration */}
            <div className="bg-white p-4 flex justify-center">
              <svg viewBox="0 0 640 320" width="100%" style={{maxWidth: 640}} xmlns="http://www.w3.org/2000/svg">
                <rect width="640" height="320" fill="white"/>

                {/* ===== STEP 1: OTOT BERKONTRAKSI ===== */}
                {/* Step bubble */}
                <circle cx="80" cy="30" r="14" fill="#10b981"/>
                <text x="80" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">1</text>

                {/* Arm in relaxed state - bone */}
                <rect x="55" y="50" width="14" height="75" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Forearm hanging straight */}
                <rect x="55" y="135" width="14" height="65" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Elbow joint */}
                <circle cx="62" cy="135" r="9" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Relaxed muscle - long/thin */}
                <path d="M54,56 Q34,92 46,128" stroke="#86efac" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.7"/>
                <path d="M54,56 Q34,92 46,128" stroke="#d1fae5" strokeWidth="4" fill="none" strokeLinecap="round"/>
                {/* Label muscle relaxed */}
                <text x="62" y="100" textAnchor="middle" fontSize="6" fill="#065f46" fontFamily="sans-serif" fontWeight="bold">Otot</text>
                <text x="62" y="108" textAnchor="middle" fontSize="6" fill="#065f46" fontFamily="sans-serif">Relaksasi</text>
                {/* Step label */}
                <text x="80" y="225" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#065f46" fontFamily="sans-serif">OTOT</text>
                <text x="80" y="236" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#065f46" fontFamily="sans-serif">BERKONTRAKSI</text>
                {/* Description box */}
                <rect x="14" y="248" width="132" height="50" rx="8" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="0.8"/>
                <text x="80" y="261" textAnchor="middle" fontSize="7" fill="#047857" fontFamily="sans-serif">Sinyal saraf motorik</text>
                <text x="80" y="271" textAnchor="middle" fontSize="7" fill="#047857" fontFamily="sans-serif">mencapai serabut otot.</text>
                <text x="80" y="281" textAnchor="middle" fontSize="7" fill="#047857" fontFamily="sans-serif">Filamen aktin &amp; miosin</text>
                <text x="80" y="291" textAnchor="middle" fontSize="7" fill="#047857" fontFamily="sans-serif">saling bergeser → otot</text>
                <text x="80" y="301" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#065f46" fontFamily="sans-serif">memendek (kontraksi)</text>

                {/* Arrow step 1→2 */}
                <path d="M128,120 L152,120" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrGreen)" fill="none"/>

                {/* ===== STEP 2: MENARIK TULANG ===== */}
                <circle cx="240" cy="30" r="14" fill="#3b82f6"/>
                <text x="240" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">2</text>

                {/* Upper arm bone */}
                <rect x="215" y="50" width="14" height="75" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Forearm - still straight, being pulled */}
                <rect x="215" y="135" width="14" height="65" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Elbow joint */}
                <circle cx="222" cy="135" r="9" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Contracted muscle - short/thick */}
                <path d="M214,56 Q188,88 200,128" stroke="#3b82f6" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.7"/>
                <path d="M214,56 Q188,88 200,128" stroke="#bfdbfe" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* Tension arrows on tendon */}
                <path d="M204,130 L215,135" stroke="#1d4ed8" strokeWidth="1.5" markerEnd="url(#arrBlue)" fill="none"/>
                <path d="M214,58 L215,60" stroke="#1d4ed8" strokeWidth="1.5" fill="none"/>
                {/* Pull force arrow */}
                <path d="M240,160 L240,178" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrBlue)" fill="none"/>
                <text x="248" y="172" fontSize="7" fill="#1d4ed8" fontWeight="bold" fontFamily="sans-serif">Tarikan</text>
                {/* Label muscle contracted */}
                <text x="197" y="94" textAnchor="middle" fontSize="6" fill="#1e40af" fontFamily="sans-serif" fontWeight="bold">Otot</text>
                <text x="197" y="102" textAnchor="middle" fontSize="6" fill="#1e40af" fontFamily="sans-serif">Kontraksi</text>
                <text x="197" y="110" textAnchor="middle" fontSize="6" fill="#1e40af" fontFamily="sans-serif">(memendek)</text>
                {/* Step label */}
                <text x="240" y="225" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#1d4ed8" fontFamily="sans-serif">MENARIK</text>
                <text x="240" y="236" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#1d4ed8" fontFamily="sans-serif">TULANG</text>
                {/* Description box */}
                <rect x="174" y="248" width="132" height="50" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.8"/>
                <text x="240" y="261" textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="sans-serif">Otot yang memendek</text>
                <text x="240" y="271" textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="sans-serif">menarik tulang melalui</text>
                <text x="240" y="281" textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="sans-serif">tendon. Gaya tarikan</text>
                <text x="240" y="291" textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="sans-serif">disalurkan ke tulang</text>
                <text x="240" y="301" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#1e40af" fontFamily="sans-serif">yang melekat</text>

                {/* Arrow step 2→3 */}
                <path d="M288,120 L312,120" stroke="#8b5cf6" strokeWidth="2.5" markerEnd="url(#arrPurple)" fill="none"/>

                {/* ===== STEP 3: SENDI BERGERAK ===== */}
                <circle cx="400" cy="30" r="14" fill="#8b5cf6"/>
                <text x="400" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">3</text>

                {/* Upper arm */}
                <rect x="375" y="50" width="14" height="75" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Forearm - now rotated at elbow (flexed ~45deg) */}
                <g transform="rotate(-35, 382, 132)">
                  <rect x="375" y="132" width="14" height="62" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                </g>
                {/* Elbow joint - highlighted */}
                <circle cx="382" cy="132" r="11" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="2"/>
                <circle cx="382" cy="132" r="6" fill="#c4b5fd"/>
                {/* Joint movement arc */}
                <path d="M382,145 Q400,140 405,130" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
                <path d="M382,145 Q395,160 400,158" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
                {/* Arc arrow showing range of motion */}
                <path d="M395,155 Q410,148 408,135" stroke="#7c3aed" strokeWidth="1.5" fill="none" markerEnd="url(#arrPurple)"/>
                {/* Contracted muscle on flexed arm */}
                <path d="M374,56 Q352,90 364,126" stroke="#8b5cf6" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.7"/>
                <path d="M374,56 Q352,90 364,126" stroke="#e9d5ff" strokeWidth="6" fill="none" strokeLinecap="round"/>
                {/* Label */}
                <text x="358" y="170" textAnchor="middle" fontSize="6.5" fill="#6d28d9" fontFamily="sans-serif" fontWeight="bold">Sendi Engsel</text>
                <text x="358" y="179" textAnchor="middle" fontSize="6" fill="#6d28d9" fontFamily="sans-serif">memungkinkan</text>
                <text x="358" y="187" textAnchor="middle" fontSize="6" fill="#6d28d9" fontFamily="sans-serif">fleksi &amp; ekstensi</text>
                {/* Step label */}
                <text x="400" y="225" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#6d28d9" fontFamily="sans-serif">SENDI</text>
                <text x="400" y="236" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#6d28d9" fontFamily="sans-serif">MEMUNGKINKAN</text>
                {/* Description box */}
                <rect x="334" y="248" width="132" height="50" rx="8" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="0.8"/>
                <text x="400" y="261" textAnchor="middle" fontSize="7" fill="#5b21b6" fontFamily="sans-serif">Sendi sebagai titik</text>
                <text x="400" y="271" textAnchor="middle" fontSize="7" fill="#5b21b6" fontFamily="sans-serif">tumpu memungkinkan</text>
                <text x="400" y="281" textAnchor="middle" fontSize="7" fill="#5b21b6" fontFamily="sans-serif">tulang bergerak sesuai</text>
                <text x="400" y="291" textAnchor="middle" fontSize="7" fill="#5b21b6" fontFamily="sans-serif">jenis sendinya</text>
                <text x="400" y="301" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#5b21b6" fontFamily="sans-serif">(fleksi, rotasi, dll.)</text>

                {/* Arrow step 3→4 */}
                <path d="M448,120 L472,120" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrAmber)" fill="none"/>

                {/* ===== STEP 4: PERUBAHAN POSISI ===== */}
                <circle cx="560" cy="30" r="14" fill="#f59e0b"/>
                <text x="560" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="sans-serif">4</text>

                {/* Upper arm */}
                <rect x="540" y="50" width="14" height="75" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                {/* Forearm fully flexed */}
                <g transform="rotate(-75, 547, 132)">
                  <rect x="540" y="132" width="14" height="62" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2"/>
                </g>
                {/* Elbow joint */}
                <circle cx="547" cy="132" r="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                <circle cx="547" cy="132" r="5" fill="#fcd34d"/>
                {/* Contracted muscle */}
                <path d="M539,56 Q517,82 530,126" stroke="#f59e0b" strokeWidth="11" fill="none" strokeLinecap="round" opacity="0.85"/>
                <path d="M539,56 Q517,82 530,126" stroke="#fde68a" strokeWidth="7" fill="none" strokeLinecap="round"/>
                {/* "Before" ghost position arrows */}
                <path d="M560,160 Q580,155 575,130" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeDasharray="3,2" opacity="0.6"/>
                <text x="582" y="148" fontSize="6" fill="#92400e" fontFamily="sans-serif" fontStyle="italic">sebelum</text>
                {/* Position change label */}
                <text x="530" y="175" textAnchor="middle" fontSize="6.5" fill="#92400e" fontFamily="sans-serif" fontWeight="bold">Lengan</text>
                <text x="530" y="184" textAnchor="middle" fontSize="6.5" fill="#92400e" fontFamily="sans-serif" fontWeight="bold">bergerak!</text>
                <text x="530" y="193" textAnchor="middle" fontSize="6" fill="#b45309" fontFamily="sans-serif">(Fleksi siku)</text>
                {/* Step label */}
                <text x="560" y="225" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#b45309" fontFamily="sans-serif">PERUBAHAN</text>
                <text x="560" y="236" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#b45309" fontFamily="sans-serif">POSISI TUBUH</text>
                {/* Description box */}
                <rect x="494" y="248" width="132" height="50" rx="8" fill="#fef3c7" stroke="#fcd34d" strokeWidth="0.8"/>
                <text x="560" y="261" textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="sans-serif">Tulang berpindah posisi</text>
                <text x="560" y="271" textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="sans-serif">→ terjadi gerakan nyata.</text>
                <text x="560" y="281" textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="sans-serif">Contoh: lengan bengkok,</text>
                <text x="560" y="291" textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="sans-serif">kaki melangkah, kepala</text>
                <text x="560" y="301" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#92400e" fontFamily="sans-serif">menoleh, jari menulis</text>

                {/* Arrow markers */}
                <defs>
                  <marker id="arrGreen" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#10b981"/>
                  </marker>
                  <marker id="arrBlue" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#3b82f6"/>
                  </marker>
                  <marker id="arrPurple" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#8b5cf6"/>
                  </marker>
                  <marker id="arrAmber" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="#f59e0b"/>
                  </marker>
                </defs>
              </svg>
            </div>

            {/* Legend bar */}
            <div className="grid grid-cols-4 divide-x divide-gray-100 border-t border-gray-100 text-center">
              {[
                { n: "1. Otot Berkontraksi", c: "text-emerald-700", bg: "bg-emerald-50" },
                { n: "2. Menarik Tulang", c: "text-blue-700", bg: "bg-blue-50" },
                { n: "3. Sendi Bergerak", c: "text-violet-700", bg: "bg-violet-50" },
                { n: "4. Posisi Berubah", c: "text-amber-700", bg: "bg-amber-50" },
              ].map((l) => (
                <div key={l.n} className={`${l.bg} py-2 px-1`}>
                  <p className={`text-[9px] font-black ${l.c}`}>{l.n}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border-t border-gray-100 px-4 py-2">
              <p className="text-[9px] text-gray-400 italic text-center">Mekanisme gerak manusia: otot → tulang → sendi → gerakan · Atlas Biologi SMP/SMA</p>
            </div>
          </div>

          {/* Example movements */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
            <h3 className="font-bold text-emerald-800 text-sm mb-3">🏃 Contoh Gerakan dalam Kehidupan</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { icon: "💪", label: "Membengkokkan lengan", sub: "Fleksi siku" },
                { icon: "🚶", label: "Berjalan", sub: "Fleksi & ekstensi lutut" },
                { icon: "🏃", label: "Berlari", sub: "Siklus gaya berjalan" },
                { icon: "✍️", label: "Menulis", sub: "Gerak jari & pergelangan" },
              ].map((ex) => (
                <div key={ex.label} className="bg-white rounded-xl p-3 text-center border border-emerald-100">
                  <div className="text-2xl mb-1">{ex.icon}</div>
                  <p className="text-[10px] font-bold text-emerald-800">{ex.label}</p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{ex.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <NavigationButton text="Lanjut →" onClick={() => goToPage(11)} />
        </div>
      );
    case 11:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🏥 Gangguan dan Penyakit Sistem Gerak</h2>
          <div className="flex justify-center mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Scoliosis.png/320px-Scoliosis.png" 
              alt="Skoliosis" 
              loading="lazy" 
              className="max-h-[250px] object-contain rounded-2xl shadow-sm bg-white"
            />
          </div>
          <div className="space-y-4">
            {[
              { n: "Skoliosis", d: "Kelainan tulang belakang yang melengkung ke samping.", color: "border-blue-500" },
              { n: "Kifosis", d: "Kelainan tulang belakang membungkuk ke belakang.", color: "border-purple-500" },
              { n: "Lordosis", d: "Kelainan tulang belakang melengkung ke depan.", color: "border-teal-500" },
              { n: "Osteoporosis", d: "Pengeroposan tulang akibat berkurangnya massa tulang.", color: "border-orange-500" },
              { n: "Fraktura", d: "Patah tulang akibat benturan atau kecelakaan.", color: "border-red-500" },
            ].map((g, i) => (
              <div key={i} className={`bg-white shadow-sm border-l-4 ${g.color} p-4 rounded-r-xl rounded-l-sm`}>
                <h3 className="font-bold text-gray-800 text-lg">{g.n}</h3>
                <p className="text-gray-600">{g.d}</p>
              </div>
            ))}
          </div>
          <NavigationButton text="Lanjut ke Video →" onClick={() => goToPage(12)} />
        </div>
      );
    case 12:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🎥 Video Pembelajaran Sistem Gerak</h2>
          <div className="bg-black rounded-[1rem] overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="400" 
              src="https://www.youtube.com/embed/5xZYFPJ0fps" 
              allowFullScreen 
              style={{ border: 'none' }}
              title="Video Pembelajaran Sistem Gerak"
            ></iframe>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-2xl text-yellow-800 font-medium">
            <p>Perhatikan struktur tulang, sendi, dan otot yang ditampilkan dalam video. Catat informasi penting yang akan membantu dalam menyelesaikan masalah.</p>
          </div>
          <NavigationButton text="Lanjut ke Orientasi Masalah →" onClick={() => goToPage(13)} />
        </div>
      );
    case 13:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">❓ Orientasi Masalah</h2>
          <div className="bg-amber-100 border border-amber-300 p-6 rounded-2xl shadow-sm text-amber-900 text-lg leading-relaxed">
            <p className="mb-4">
              Seorang siswa sering membawa tas yang sangat berat setiap hari ke sekolah. Dalam beberapa bulan, ia mengalami nyeri punggung yang cukup parah.
            </p>
            <p className="font-bold text-xl text-amber-800">
              Mengapa hal tersebut dapat terjadi? Bagaimana cara mencegah dan mengatasinya?
            </p>
          </div>
          <p className="text-center font-medium text-gray-600 italic bg-gray-50 py-3 rounded-xl border border-gray-200">
            Hubungkan kasus ini dengan materi sistem gerak yang telah kamu pelajari!
          </p>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(14)} />
        </div>
      );
    case 14:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🔍 Observasi</h2>
          <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-2xl">
            <p className="text-gray-700 font-medium mb-4 pb-2 border-b">Checklist Observasi:</p>
            <div className="space-y-4">
              {[
                "Amati gambar dan video sistem gerak manusia",
                "Identifikasi bagian tulang, sendi, dan otot yang berperan",
                "Catat struktur tulang belakang yang relevan",
                "Hubungkan dengan kasus nyeri punggung"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-teal-500 rounded flex items-center justify-center bg-teal-50">
                    <span className="text-teal-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-teal-800 bg-teal-50 p-4 rounded-xl">
            Gunakan materi yang telah dipelajari untuk mengidentifikasi komponen sistem gerak yang berhubungan dengan kasus.
          </p>
          <NavigationButton text="Lanjut ke Think →" onClick={() => goToPage(15)} />
        </div>
      );
    case 15:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">🧠 Think — Berpikir Mandiri</h2>
          <div className="bg-[#E8DFFB] p-8 rounded-3xl shadow-sm text-[#355070]">
            <h3 className="font-bold text-xl mb-4">Pikirkan secara mandiri:</h3>
            <ul className="list-disc pl-6 space-y-3 font-medium text-lg">
              <li>Mengapa membawa beban berat dapat menyebabkan nyeri punggung?</li>
              <li>Bagian sistem gerak mana yang paling terpengaruh?</li>
              <li>Apa solusi yang dapat dilakukan untuk mencegah hal ini?</li>
            </ul>
          </div>
          <p className="text-center text-gray-600 italic font-medium">
            Tulis jawabanmu di buku catatan sebelum melanjutkan ke tahap diskusi.
          </p>
          <NavigationButton text="Lanjut ke Pair →" onClick={() => goToPage(16)} />
        </div>
      );
    case 16:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">👥 Pair — Diskusi Berpasangan</h2>
          <div className="bg-emerald-100 p-8 rounded-3xl shadow-sm text-emerald-900">
            <h3 className="font-bold text-xl mb-4">Diskusikan dengan teman sebangkumu:</h3>
            <ul className="list-disc pl-6 space-y-3 font-medium text-lg">
              <li>Bandingkan hasil pemikiranmu dengan teman</li>
              <li>Temukan persamaan dan perbedaan pendapat</li>
              <li>Bangun solusi bersama yang lebih lengkap</li>
            </ul>
          </div>
          <div className="bg-emerald-50 text-emerald-800 text-center p-4 rounded-xl font-medium border border-emerald-200">
            ⏳ Waktu diskusi: ±10 menit. Pastikan kedua pihak berkontribusi dalam diskusi!
          </div>
          <NavigationButton text="Lanjut ke Share →" onClick={() => goToPage(17)} />
        </div>
      );
    case 17:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📢 Share — Presentasi Kelas</h2>
          <div className="bg-[#FFE5D4] p-8 rounded-3xl shadow-sm text-orange-900">
            <h3 className="font-bold text-xl mb-4">Presentasikan hasil diskusi kelompok:</h3>
            <ul className="list-disc pl-6 space-y-3 font-medium text-lg">
              <li>Sampaikan jawaban kelompok dengan percaya diri</li>
              <li>Dengarkan presentasi kelompok lain</li>
              <li>Catat poin-poin penting dari diskusi kelas</li>
            </ul>
          </div>
          <div className="bg-orange-50 text-orange-800 text-center p-4 rounded-xl font-medium border border-orange-200">
            🎤 Presentasi singkat: ±3-5 menit per kelompok.
          </div>
          <NavigationButton text="Lanjut ke Analisis →" onClick={() => goToPage(18)} />
        </div>
      );
    case 18:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📊 Analisis dan Evaluasi</h2>
          <p className="text-gray-700 text-center text-lg mb-6">
            Berdasarkan orientasi masalah, observasi, dan diskusi, analisis berbagai alternatif solusi:
          </p>
          
          <div className="space-y-4">
            <div className="bg-white border border-blue-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-3 font-bold text-blue-900 border-b border-blue-200">1. Mengurangi beban tas</div>
              <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-green-600 font-bold block mb-1">Kelebihan:</span> Langsung mengurangi tekanan</div>
                <div><span className="text-red-500 font-bold block mb-1">Kekurangan:</span> Mungkin tidak praktis</div>
              </div>
            </div>
            
            <div className="bg-white border border-purple-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-purple-50 p-3 font-bold text-purple-900 border-b border-purple-200">2. Memperbaiki postur</div>
              <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-green-600 font-bold block mb-1">Kelebihan:</span> Jangka panjang efektif</div>
                <div><span className="text-red-500 font-bold block mb-1">Kekurangan:</span> Butuh kebiasaan</div>
              </div>
            </div>
            
            <div className="bg-white border border-teal-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-teal-50 p-3 font-bold text-teal-900 border-b border-teal-200">3. Olahraga penguatan otot punggung</div>
              <div className="p-4 grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-green-600 font-bold block mb-1">Kelebihan:</span> Memperkuat sistem gerak</div>
                <div><span className="text-red-500 font-bold block mb-1">Kekurangan:</span> Butuh waktu rutin</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-400 to-emerald-400 text-white p-6 rounded-2xl text-center shadow-md font-bold text-lg mt-6">
            Setelah menganalisis, pilih solusi terbaik dan berikan alasannya!
          </div>
          <NavigationButton text="Lanjut ke Kuis →" onClick={() => goToPage(19)} />
        </div>
      );
    case 19:
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#355070] mb-3">📝 Kuis Pengambilan Keputusan</h2>
            <p className="text-gray-600 font-medium">Pilih jawaban yang paling tepat berdasarkan pemahaman sistem gerak manusia!</p>
          </div>
          <Quiz onComplete={() => goToPage(20)} />
        </div>
      );
    case 20:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📝 Post-Test</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-800">
            <p className="font-medium text-lg">Silakan mengerjakan post-test yang akan dibagikan oleh guru.</p>
            <p className="mt-2 opacity-80">Soal tidak ditampilkan pada media ini.</p>
          </div>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(21)} />
        </div>
      );
    case 21:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">📌 Kesimpulan</h2>
          <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-2xl">
            <p className="text-gray-800 text-lg font-medium text-center mb-6">
              Sistem gerak manusia terdiri atas tiga komponen utama yang bekerja secara sinergis:
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-teal-50 p-4 rounded-xl text-teal-900 border border-teal-100">
                <span className="font-bold text-lg block mb-1">🦴 Tulang</span> Alat gerak pasif, membentuk kerangka tubuh
              </div>
              <div className="bg-[#E8DFFB] p-4 rounded-xl text-purple-900 border border-purple-100">
                <span className="font-bold text-lg block mb-1">🔗 Sendi</span> Penghubung antar tulang, memungkinkan gerakan
              </div>
              <div className="bg-[#FFE5D4] p-4 rounded-xl text-orange-900 border border-orange-100">
                <span className="font-bold text-lg block mb-1">💪 Otot</span> Alat gerak aktif, menggerakkan tulang melalui kontraksi
              </div>
            </div>
            <p className="text-center text-gray-700 font-medium italic bg-gray-50 p-4 rounded-xl border border-gray-200">
              Menjaga kesehatan sistem gerak dengan olahraga teratur, postur yang baik, dan asupan kalsium yang cukup sangat penting untuk kualitas hidup yang optimal.
            </p>
          </div>
          <NavigationButton text="Selesai" onClick={() => goToPage(22)} />
        </div>
      );
    case 22:
      return (
        <div className="space-y-8 text-center py-8">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400 mb-2">🎉 Terima Kasih! 🎉</h2>
          
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-teal-600">SA.Move.Bio</h3>
            <p className="text-xl font-medium text-gray-500">Smart Movement Biology</p>
          </div>
          
          <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-emerald-300 mx-auto rounded-full my-8"></div>
          
          <div className="space-y-3 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Dikembangkan oleh:</p>
            <p className="text-2xl font-bold text-[#355070]">Salsa Rahma Alya</p>
            <p className="text-gray-600">Universitas Islam Negeri Siber Syekh Nurjati Cirebon</p>
          </div>
          
          <p className="text-xl font-medium text-emerald-600 mt-8 mb-8">
            Semoga materi ini bermanfaat untuk pembelajaran sistem gerak manusia!
          </p>

          <button
            data-testid="btn-restart"
            onClick={() => goToPage(1)}
            className="px-8 py-3 rounded-full bg-white border-2 border-teal-500 text-teal-600 font-bold text-lg hover:bg-teal-50 transition-all shadow-sm"
          >
            ↺ Mulai Ulang
          </button>
        </div>
      );
    default:
      return <div>Page not found</div>;
  }
}
