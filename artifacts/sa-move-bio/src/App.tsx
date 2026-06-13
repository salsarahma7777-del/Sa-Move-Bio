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
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Human_skeleton_front_en.svg"
                alt="Kerangka Manusia"
                loading="lazy"
                className="max-h-[260px] object-contain"
              />
              <p className="text-xs text-blue-700 mt-2 font-medium text-center">Rangka Tubuh Manusia</p>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Illu_compact_spongy_bone.jpg/320px-Illu_compact_spongy_bone.jpg"
                alt="Struktur Tulang Kompak dan Spons"
                loading="lazy"
                className="max-h-[180px] object-contain rounded-xl bg-white shadow-sm"
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
            <div className="grid grid-cols-2 gap-3">
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Gray333.png/300px-Gray333.png"
                alt="Sendi Sinovial"
                loading="lazy"
                className="max-h-[200px] object-contain rounded-xl bg-white shadow-sm"
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Muscles_anterior_labeled.jpg/200px-Muscles_anterior_labeled.jpg"
                alt="Otot Anterior"
                loading="lazy"
                className="max-h-[220px] object-contain"
              />
              <p className="text-xs text-red-700 mt-2 font-semibold text-center">Tampak Depan (Anterior)</p>
            </div>
            <div className="flex flex-col items-center bg-rose-50 rounded-2xl p-3 border border-rose-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Muscles_posterior_labeled.jpg/200px-Muscles_posterior_labeled.jpg"
                alt="Otot Posterior"
                loading="lazy"
                className="max-h-[220px] object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Muscles_anterior_labeled.jpg/200px-Muscles_anterior_labeled.jpg';
                }}
              />
              <p className="text-xs text-rose-700 mt-2 font-semibold text-center">Tampak Belakang (Posterior)</p>
            </div>
          </div>

          {/* Three muscle types with microscopy images */}
          <div>
            <h3 className="font-bold text-[#355070] text-base mb-3">🔬 Tiga Jenis Otot</h3>
            <div className="space-y-3">
              {[
                {
                  name: "Otot Lurik (Skelet)",
                  desc: "Bekerja secara sadar (volunter). Melekat pada tulang rangka. Memiliki garis-garis melintang yang terlihat di mikroskop. Contoh: bisep, trisep, otot paha.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Skeletal_muscle_-_longitudinal_section.jpg/220px-Skeletal_muscle_-_longitudinal_section.jpg",
                  color: "bg-red-50 border-red-200",
                  badge: "bg-red-500",
                  label: "SADAR / VOLUNTER",
                },
                {
                  name: "Otot Polos",
                  desc: "Bekerja secara tidak sadar (involunter). Terdapat pada organ dalam: lambung, usus, pembuluh darah. Bentuk sel gelendong tanpa garis melintang.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Smooth_muscle_2.jpg/220px-Smooth_muscle_2.jpg",
                  color: "bg-purple-50 border-purple-200",
                  badge: "bg-purple-500",
                  label: "TIDAK SADAR / INVOLUNTER",
                },
                {
                  name: "Otot Jantung",
                  desc: "Bekerja secara tidak sadar, khusus pada jantung. Kontraksi ritmis & terus-menerus sepanjang hayat. Memiliki percabangan sel (sinsitium) yang unik.",
                  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Illu_cardiac_muscle.jpg/220px-Illu_cardiac_muscle.jpg",
                  color: "bg-orange-50 border-orange-200",
                  badge: "bg-orange-500",
                  label: "TIDAK SADAR / JANTUNG",
                },
              ].map((m, i) => (
                <div key={i} className={`${m.color} border rounded-2xl p-3 flex gap-3 items-start`}>
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-24 h-20 object-cover rounded-xl shrink-0 shadow-sm bg-white"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-gray-800 text-sm">{m.name}</span>
                      <span className={`text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badge}`}>{m.label}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Antagonist pairs */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4">
            <h3 className="font-bold text-teal-900 mb-3 text-base">⚡ Cara Kerja Otot: Antagonis & Sinergis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-teal-100">
                <p className="font-bold text-teal-800 text-sm mb-1">🔄 Antagonis</p>
                <p className="text-xs text-gray-600">Dua otot bekerja berlawanan. Saat bisep kontraksi → trisep relaksasi (lengan membengkok), dan sebaliknya.</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Bisep</span>
                  <span className="text-xs text-gray-400">vs</span>
                  <span className="bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Trisep</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100">
                <p className="font-bold text-teal-800 text-sm mb-1">🤝 Sinergis</p>
                <p className="text-xs text-gray-600">Beberapa otot bekerja bersama-sama untuk menghasilkan satu gerakan yang sama.</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Fleksi</span>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Ekstensi</span>
                </div>
              </div>
            </div>
          </div>

          <NavigationButton text="Lanjut →" onClick={() => goToPage(10)} />
        </div>
      );
    case 10:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-6">⚙️ Mekanisme Gerak Manusia</h2>
          <div className="flex justify-center mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Human_arm_bones_diagram.svg/400px-Human_arm_bones_diagram.svg.png" 
              alt="Mekanisme Gerak" 
              loading="lazy" 
              className="max-h-[300px] object-contain rounded-2xl shadow-sm bg-white"
            />
          </div>
          <p className="text-gray-700 text-center text-lg mb-6 bg-[#FFF4C1]/50 p-4 rounded-xl">
            Gerakan terjadi karena kerja sama antara tulang, sendi, dan otot.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              "Otot berkontraksi",
              "Menarik tulang",
              "Sendi memungkinkan pergerakan",
              "Terjadi perubahan posisi tubuh"
            ].map((step, i) => (
              <div key={i} className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl flex flex-col items-center text-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">{i + 1}</div>
                <p className="font-medium text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-semibold text-emerald-800 bg-emerald-50 py-3 px-6 rounded-full inline-block mx-auto w-full">
            Contoh gerakan: membengkokkan lengan, berjalan, berlari, melompat.
          </p>
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
