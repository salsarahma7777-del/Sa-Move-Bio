import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProgressBar from './components/ProgressBar';
import NavigationButton from './components/NavigationButton';
import Quiz from './components/Quiz';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 22;
  const [siswa, setSiswa] = useState({ nama: '', noAbsen: '', kelas: '' });

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
            <PageContent page={currentPage} goToPage={goToPage} siswa={siswa} setSiswa={setSiswa} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContent({ page, goToPage, siswa, setSiswa }: {
  page: number;
  goToPage: (p: number) => void;
  siswa: { nama: string; noAbsen: string; kelas: string };
  setSiswa: React.Dispatch<React.SetStateAction<{ nama: string; noAbsen: string; kelas: string }>>;
}) {
  switch (page) {
    case 1: {
      const isValid = siswa.nama.trim() !== '' && siswa.noAbsen.trim() !== '' && siswa.kelas.trim() !== '';
      return (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#355070]">🚀 Identitas Siswa</h2>
            <p className="text-gray-500 mt-2 text-sm">Isi data diri sebelum memulai pembelajaran</p>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 space-y-4">
            {/* Nama */}
            <div>
              <label className="block text-sm font-bold text-teal-800 mb-1.5">👤 Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap..."
                value={siswa.nama}
                onChange={(e) => setSiswa(s => ({ ...s, nama: e.target.value }))}
                className="w-full rounded-xl border border-teal-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>

            {/* No Absen + Kelas side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-teal-800 mb-1.5">🔢 No. Absen</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Contoh: 12"
                  value={siswa.noAbsen}
                  onChange={(e) => setSiswa(s => ({ ...s, noAbsen: e.target.value }))}
                  className="w-full rounded-xl border border-teal-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-teal-800 mb-1.5">🏫 Kelas</label>
                <input
                  type="text"
                  placeholder="Contoh: VIII-A"
                  value={siswa.kelas}
                  onChange={(e) => setSiswa(s => ({ ...s, kelas: e.target.value }))}
                  className="w-full rounded-xl border border-teal-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
              </div>
            </div>

            {/* Preview card */}
            {isValid && (
              <div className="bg-white border border-teal-200 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center text-lg font-black shrink-0">
                  {siswa.nama.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-sm">{siswa.nama}</p>
                  <p className="text-xs text-gray-500">No. Absen {siswa.noAbsen} &nbsp;·&nbsp; Kelas {siswa.kelas}</p>
                </div>
                <span className="ml-auto text-emerald-500 text-lg">✓</span>
              </div>
            )}
          </div>

          <button
            onClick={() => { if (isValid) goToPage(2); }}
            disabled={!isValid}
            className={`w-full py-3 rounded-full font-bold text-base transition-all shadow-sm
              ${isValid
                ? 'bg-teal-500 text-white hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-md cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
          >
            {isValid ? 'Mulai Pembelajaran →' : 'Lengkapi data diri terlebih dahulu'}
          </button>
        </div>
      );
    }
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
          {/* Histology Plate: Three Muscle Types */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
            {/* Scientific plate header */}
            <div className="bg-rose-50 px-4 py-2 flex items-center justify-between border-b border-rose-200">
              <span className="text-rose-800 font-mono text-[11px] font-bold tracking-widest">PERBANDINGAN HISTOLOGI JARINGAN OTOT — PEWARNAAN H&amp;E</span>
              <span className="text-rose-400 font-mono text-[9px]">400× · Biologi Medis</span>
            </div>

            {/* === PANEL 1: OTOT LURIK === */}
            {/* Three-panel histology grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

              {/* ===== PANEL 1: OTOT LURIK ===== */}
              <div className="flex flex-col">
                <div className="bg-red-50 px-3 py-1.5 flex items-center gap-2 border-b border-red-200">
                  <span className="text-[10px] font-mono text-red-700 font-bold tracking-widest uppercase">Otot Lurik</span>
                  <span className="text-[8px] font-mono text-red-400 ml-auto italic">Musculus skeletalis</span>
                </div>
                <svg viewBox="0 0 200 180" width="100%" xmlns="http://www.w3.org/2000/svg">
                  {/* slide glass — very pale eosinophilic wash */}
                  <rect width="200" height="180" fill="#fce8e8"/>
                  {/* connective tissue between fibers */}
                  <rect x="0" y="0"   width="200" height="4"  fill="#f9d0d0"/>
                  <rect x="0" y="36"  width="200" height="4"  fill="#f9d0d0"/>
                  <rect x="0" y="72"  width="200" height="4"  fill="#f9d0d0"/>
                  <rect x="0" y="108" width="200" height="4"  fill="#f9d0d0"/>
                  <rect x="0" y="144" width="200" height="4"  fill="#f9d0d0"/>
                  {/* FIBER 1 — eosinophilic cytoplasm */}
                  <rect x="0" y="4"  width="200" height="32" fill="#ef9090"/>
                  {/* A-bands dark, I-bands light — dense striations */}
                  {[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198].map((x,i)=>(
                    <rect key={i} x={x} y="4" width="3" height="32" fill="#c85050" opacity="0.45"/>
                  ))}
                  {/* light I-band lines */}
                  {[3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195].map((x,i)=>(
                    <rect key={i} x={x} y="4" width="3" height="32" fill="#fce8e8" opacity="0.35"/>
                  ))}
                  {/* peripheral nuclei fiber 1 */}
                  <ellipse cx="22"  cy="6"  rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="100" cy="35" rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="178" cy="6"  rx="11" ry="3" fill="#3730a3"/>

                  {/* FIBER 2 */}
                  <rect x="0" y="40" width="200" height="32" fill="#f08080"/>
                  {[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198].map((x,i)=>(
                    <rect key={i} x={x} y="40" width="3" height="32" fill="#b84040" opacity="0.45"/>
                  ))}
                  {[3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195].map((x,i)=>(
                    <rect key={i} x={x} y="40" width="3" height="32" fill="#fce8e8" opacity="0.35"/>
                  ))}
                  <ellipse cx="50"  cy="42" rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="155" cy="71" rx="11" ry="3" fill="#3730a3"/>

                  {/* FIBER 3 */}
                  <rect x="0" y="76" width="200" height="32" fill="#ef9090"/>
                  {[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198].map((x,i)=>(
                    <rect key={i} x={x} y="76" width="3" height="32" fill="#c85050" opacity="0.45"/>
                  ))}
                  {[3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99,105,111,117,123,129,135,141,147,153,159,165,171,177,183,189,195].map((x,i)=>(
                    <rect key={i} x={x} y="76" width="3" height="32" fill="#fce8e8" opacity="0.35"/>
                  ))}
                  <ellipse cx="30"  cy="78" rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="130" cy="107" rx="11" ry="3" fill="#3730a3"/>

                  {/* FIBER 4 */}
                  <rect x="0" y="112" width="200" height="32" fill="#f08080"/>
                  {[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198].map((x,i)=>(
                    <rect key={i} x={x} y="112" width="3" height="32" fill="#b84040" opacity="0.45"/>
                  ))}
                  <ellipse cx="80"  cy="114" rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="170" cy="143" rx="11" ry="3" fill="#3730a3"/>

                  {/* FIBER 5 */}
                  <rect x="0" y="148" width="200" height="32" fill="#ef9090"/>
                  {[0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168,174,180,186,192,198].map((x,i)=>(
                    <rect key={i} x={x} y="148" width="3" height="32" fill="#c85050" opacity="0.45"/>
                  ))}
                  <ellipse cx="45"  cy="150" rx="11" ry="3" fill="#3730a3"/>
                  <ellipse cx="150" cy="179" rx="11" ry="3" fill="#3730a3"/>

                  {/* callout line: striation */}
                  <line x1="54" y1="4" x2="54" y2="175" stroke="#7f1d1d" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.6"/>
                  <text x="56" y="175" fontSize="5.5" fill="#7f1d1d" fontFamily="monospace">striasi</text>
                  {/* callout: nucleus */}
                  <line x1="22" y1="6" x2="4" y2="18" stroke="#1e1b4b" strokeWidth="0.7"/>
                  <text x="2" y="27" fontSize="5" fill="#1e1b4b" fontFamily="monospace">inti</text>
                  <text x="2" y="33" fontSize="5" fill="#1e1b4b" fontFamily="monospace">perifer</text>
                </svg>
                <div className="bg-red-50 px-3 py-2 text-[9px] font-mono text-red-900 leading-relaxed border-t border-red-200">
                  <strong className="text-red-700">Otot Lurik</strong> — sel silindris panjang, inti di tepi (perifer), bergaris melintang jelas. <strong>Volunter</strong>; kontraksi cepat, mudah lelah. Lokasi: bisep, trisep, quadriceps.
                </div>
              </div>

              {/* ===== PANEL 2: OTOT POLOS ===== */}
              <div className="flex flex-col">
                <div className="bg-violet-50 px-3 py-1.5 flex items-center gap-2 border-b border-violet-200">
                  <span className="text-[10px] font-mono text-violet-700 font-bold tracking-widest uppercase">Otot Polos</span>
                  <span className="text-[8px] font-mono text-violet-400 ml-auto italic">Musculus levis</span>
                </div>
                <svg viewBox="0 0 200 180" width="100%" xmlns="http://www.w3.org/2000/svg">
                  {/* slide background — palest pink wash */}
                  <rect width="200" height="180" fill="#f8f0fc"/>
                  {/* stromal background wash */}
                  <rect width="200" height="180" fill="#e9d5f5" opacity="0.25"/>

                  {/* Longitudinal view — spindle cells packed together */}
                  {/* Row 1: three elongated fusiform cells */}
                  <ellipse cx="32"  cy="22" rx="30" ry="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="32"  cy="22" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="100" cy="16" rx="30" ry="12" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="100" cy="16" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="168" cy="24" rx="30" ry="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="168" cy="24" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* Row 2 offset */}
                  <ellipse cx="60"  cy="50" rx="30" ry="12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <ellipse cx="60"  cy="50" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="140" cy="44" rx="30" ry="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="140" cy="44" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* Row 3 */}
                  <ellipse cx="28"  cy="76" rx="30" ry="12" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="28"  cy="76" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="100" cy="70" rx="30" ry="12" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <ellipse cx="100" cy="70" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="172" cy="78" rx="30" ry="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="172" cy="78" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* Row 4 */}
                  <ellipse cx="55"  cy="104" rx="30" ry="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="55"  cy="104" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="148" cy="98"  rx="30" ry="12" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <ellipse cx="148" cy="98"  rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* Row 5 */}
                  <ellipse cx="32"  cy="130" rx="30" ry="12" fill="#ede9fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="32"  cy="130" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="110" cy="124" rx="30" ry="12" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <ellipse cx="110" cy="124" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="175" cy="132" rx="20" ry="12" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="175" cy="132" rx="7"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* Row 6 */}
                  <ellipse cx="68"  cy="158" rx="30" ry="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="0.5"/>
                  <ellipse cx="68"  cy="158" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>
                  <ellipse cx="155" cy="162" rx="30" ry="12" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="0.5"/>
                  <ellipse cx="155" cy="162" rx="8"  ry="4.5" fill="#4c1d95" opacity="0.8"/>

                  {/* callout: nucleus central */}
                  <line x1="32" y1="18" x2="6" y2="8" stroke="#2e1065" strokeWidth="0.7"/>
                  <text x="2" y="7"  fontSize="5" fill="#2e1065" fontFamily="monospace">inti</text>
                  <text x="2" y="13" fontSize="5" fill="#2e1065" fontFamily="monospace">sentral</text>
                  {/* callout: cell shape */}
                  <line x1="100" y1="28" x2="150" y2="170" stroke="#5b21b6" strokeWidth="0.6" strokeDasharray="2,2"/>
                  <text x="108" y="170" fontSize="5" fill="#5b21b6" fontFamily="monospace">gelendong</text>
                  <text x="108" y="176" fontSize="5" fill="#5b21b6" fontFamily="monospace">(fusiform)</text>
                </svg>
                <div className="bg-violet-50 px-3 py-2 text-[9px] font-mono text-violet-900 leading-relaxed border-t border-violet-200">
                  <strong className="text-violet-700">Otot Polos</strong> — sel gelendong (fusiform), inti di tengah, <strong>tidak bergaris melintang</strong>. <strong>Involunter</strong>; kontraksi lambat, tahan lama. Lokasi: lambung, usus, pembuluh darah.
                </div>
              </div>

              {/* ===== PANEL 3: OTOT JANTUNG ===== */}
              <div className="flex flex-col">
                <div className="bg-amber-50 px-3 py-1.5 flex items-center gap-2 border-b border-amber-200">
                  <span className="text-[10px] font-mono text-amber-700 font-bold tracking-widest uppercase">Otot Jantung</span>
                  <span className="text-[8px] font-mono text-amber-400 ml-auto italic">Myocardium</span>
                </div>
                <svg viewBox="0 0 200 180" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="180" fill="#fef3e2"/>
                  {/* stroma wash */}
                  <rect width="200" height="180" fill="#fde68a" opacity="0.12"/>

                  {/* === MAIN BRANCHING NETWORK === */}
                  {/* Primary horizontal fiber A — thick band */}
                  <path d="M0,52 Q30,48 55,52 L145,52 Q170,48 200,52" stroke="#e29050" strokeWidth="22" fill="none" strokeLinecap="butt" opacity="0.85"/>
                  <path d="M0,52 Q30,48 55,52 L145,52 Q170,48 200,52" stroke="#f4b870" strokeWidth="18" fill="none" strokeLinecap="butt" opacity="0.7"/>
                  {/* striations on fiber A */}
                  {[8,20,32,44,56,68,80,92,104,116,128,140,152,164,176,188].map((x,i)=>(
                    <line key={i} x1={x} y1="41" x2={x} y2="63" stroke="#a05020" strokeWidth="1" opacity="0.55"/>
                  ))}
                  {/* intercalated discs on A — thicker darker lines */}
                  <line x1="72"  y1="41" x2="72"  y2="63" stroke="#7a3010" strokeWidth="2.5" opacity="0.85"/>
                  <line x1="130" y1="41" x2="130" y2="63" stroke="#7a3010" strokeWidth="2.5" opacity="0.85"/>

                  {/* Branch upward from fiber A at x=85 */}
                  <path d="M85,41 Q88,22 100,14 Q112,8 130,12" stroke="#e29050" strokeWidth="18" fill="none" strokeLinecap="butt" opacity="0.8"/>
                  <path d="M85,41 Q88,22 100,14 Q112,8 130,12" stroke="#f4b870" strokeWidth="14" fill="none" strokeLinecap="butt" opacity="0.65"/>
                  {[0.2,0.45,0.7,0.88].map((t,i)=>{
                    const bx = 85+t*(130-85); const by = 41+t*(12-41) - Math.sin(t*Math.PI)*6;
                    return <line key={i} x1={bx-5} y1={by-5} x2={bx+5} y2={by+5} stroke="#a05020" strokeWidth="1" opacity="0.55"/>;
                  })}
                  {/* intercalated disc branch up */}
                  <line x1="107" y1="18" x2="116" y2="8" stroke="#7a3010" strokeWidth="2.5" opacity="0.85" transform="rotate(35,107,18)"/>

                  {/* Branch downward from fiber A at x=148 */}
                  <path d="M148,63 Q150,85 145,105 Q140,118 150,128" stroke="#e29050" strokeWidth="18" fill="none" strokeLinecap="butt" opacity="0.8"/>
                  <path d="M148,63 Q150,85 145,105 Q140,118 150,128" stroke="#f4b870" strokeWidth="14" fill="none" strokeLinecap="butt" opacity="0.65"/>
                  {[0.25,0.55,0.8].map((t,i)=>{
                    const bx = 148+t*(150-148); const by = 63+t*(128-63);
                    return <line key={i} x1={bx-6} y1={by} x2={bx+6} y2={by} stroke="#a05020" strokeWidth="1" opacity="0.55"/>;
                  })}
                  <line x1="144" y1="110" x2="152" y2="110" stroke="#7a3010" strokeWidth="2.5" opacity="0.85"/>

                  {/* Primary horizontal fiber B */}
                  <path d="M0,140 Q35,136 70,140 L140,143 Q170,147 200,140" stroke="#e29050" strokeWidth="20" fill="none" strokeLinecap="butt" opacity="0.8"/>
                  <path d="M0,140 Q35,136 70,140 L140,143 Q170,147 200,140" stroke="#f4b870" strokeWidth="16" fill="none" strokeLinecap="butt" opacity="0.65"/>
                  {[8,20,32,44,56,68,80,92,104,116,128,140,152,164,176,188].map((x,i)=>(
                    <line key={i} x1={x} y1="130" x2={x} y2="152" stroke="#a05020" strokeWidth="1" opacity="0.5"/>
                  ))}
                  <line x1="55"  y1="130" x2="55"  y2="152" stroke="#7a3010" strokeWidth="2.5" opacity="0.85"/>
                  <line x1="118" y1="130" x2="118" y2="152" stroke="#7a3010" strokeWidth="2.5" opacity="0.85"/>

                  {/* Nuclei — central oval, hematoxylin purple */}
                  <ellipse cx="42"  cy="52"  rx="12" ry="5"   fill="#44209a" opacity="0.85"/>
                  <ellipse cx="162" cy="52"  rx="12" ry="5"   fill="#44209a" opacity="0.85"/>
                  <ellipse cx="112" cy="14"  rx="10" ry="4.5" fill="#44209a" opacity="0.85"/>
                  <ellipse cx="148" cy="95"  rx="10" ry="4.5" fill="#44209a" opacity="0.85"/>
                  <ellipse cx="40"  cy="140" rx="12" ry="5"   fill="#44209a" opacity="0.85"/>
                  <ellipse cx="160" cy="143" rx="12" ry="5"   fill="#44209a" opacity="0.85"/>

                  {/* Callouts */}
                  <line x1="72" y1="52" x2="20" y2="172" stroke="#7a3010" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7"/>
                  <text x="2"  y="173" fontSize="5"   fill="#7a3010" fontFamily="monospace">diskus</text>
                  <text x="2"  y="179" fontSize="5"   fill="#7a3010" fontFamily="monospace">interkalasi</text>
                  <line x1="85" y1="35" x2="4" y2="14" stroke="#92400e" strokeWidth="0.7"/>
                  <text x="2"  y="12"  fontSize="5"   fill="#92400e" fontFamily="monospace">percabangan</text>
                  <line x1="42" y1="47" x2="180" y2="12" stroke="#1e1b4b" strokeWidth="0.6"/>
                  <text x="144" y="10" fontSize="5" fill="#1e1b4b" fontFamily="monospace">inti sentral</text>
                </svg>
                <div className="bg-amber-50 px-3 py-2 text-[9px] font-mono text-amber-900 leading-relaxed border-t border-amber-200">
                  <strong className="text-amber-700">Otot Jantung</strong> — sel bercabang, inti di tengah, bergaris melintang, terdapat <strong>diskus interkalasi</strong>. <strong>Involunter-ritmis</strong>; tidak pernah lelah. Lokasi: miokardium (dinding jantung).
                </div>
              </div>
            </div>

            {/* Legend bar */}
            <div className="bg-rose-50 px-4 py-1.5 flex items-center gap-6 border-t border-rose-200">
              <span className="text-[8px] font-mono flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm" style={{background:'#ef9090'}}/><span className="text-rose-700">Eosinofil — sitoplasma (warna Eosin)</span></span>
              <span className="text-[8px] font-mono flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm" style={{background:'#3730a3'}}/><span className="text-violet-700">Hematoksilin — inti sel</span></span>
              <span className="text-[8px] font-mono flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm" style={{background:'#7a3010'}}/><span className="text-amber-700">Diskus interkalasi</span></span>
              <span className="text-[8px] font-mono text-rose-400 ml-auto">Pewarnaan H&amp;E · SA.Move.Bio</span>
            </div>
          </div>
          {/* Antagonist & Synergist illustration */}
          <div className="bg-white border border-teal-100 rounded-3xl overflow-hidden shadow-sm">
            <img src="/antagonis-sinergis.png" alt="Otot Antagonis dan Sinergis" className="w-full block"/>
          </div>
          <NavigationButton text="Lanjut →" onClick={() => goToPage(10)} />
        </div>
      );
    case 10:
      return (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#355070] text-center mb-2">⚙️ Mekanisme Gerak Manusia</h2>
          <p className="text-gray-600 text-center mb-4">Gerakan terjadi karena kerja sama antara <strong>otot</strong>, <strong>sendi</strong>, dan <strong>tulang</strong> secara berurutan.</p>

          {/* Sequential mechanism — 4 steps */}
          <div className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3">
              <p className="text-white font-black text-sm tracking-wide text-center">ILUSTRASI SEKUENSIAL: MEKANISME GERAK MANUSIA</p>
              <p className="text-emerald-100 text-xs text-center mt-0.5">Kontraksi Otot → Tarikan Tulang → Gerak Sendi → Perubahan Posisi</p>
            </div>

            {/* 4 steps */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-emerald-100">
              {/* Step 1 */}
              <div className="bg-red-50 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">1</span>
                  <p className="font-black text-red-700 text-sm leading-tight">OTOT BERKONTRAKSI</p>
                </div>
                <ul className="text-xs text-gray-700 space-y-1.5 leading-snug list-none pl-0">
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">•</span>Sinyal saraf motorik mencapai serabut otot</li>
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">•</span>Filamen aktin &amp; miosin saling bergeser</li>
                  <li className="flex gap-1.5"><span className="text-red-400 font-bold">•</span>Otot memendek <span className="font-semibold text-red-600">(kontraksi)</span></li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-orange-50 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">2</span>
                  <p className="font-black text-orange-700 text-sm leading-tight">MENARIK TULANG</p>
                </div>
                <ul className="text-xs text-gray-700 space-y-1.5 leading-snug list-none pl-0">
                  <li className="flex gap-1.5"><span className="text-orange-400 font-bold">•</span>Otot yang memendek menarik tulang melalui tendon</li>
                  <li className="flex gap-1.5"><span className="text-orange-400 font-bold">•</span>Gaya tarikan disalurkan ke tulang yang melekat</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-teal-50 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-teal-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">3</span>
                  <p className="font-black text-teal-700 text-sm leading-tight">SENDI MEMUNGKINKAN</p>
                </div>
                <ul className="text-xs text-gray-700 space-y-1.5 leading-snug list-none pl-0">
                  <li className="flex gap-1.5"><span className="text-teal-400 font-bold">•</span>Sendi sebagai titik tumpu tulang bergerak</li>
                  <li className="flex gap-1.5"><span className="text-teal-400 font-bold">•</span>Sesuai jenis sendinya: fleksi, rotasi, dll.</li>
                  <li className="flex gap-1.5"><span className="text-teal-400 font-bold">•</span>Sendi engsel → fleksi &amp; ekstensi</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-blue-50 p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-500 text-white text-sm font-black flex items-center justify-center flex-shrink-0">4</span>
                  <p className="font-black text-blue-700 text-sm leading-tight">PERUBAHAN POSISI TUBUH</p>
                </div>
                <ul className="text-xs text-gray-700 space-y-1.5 leading-snug list-none pl-0">
                  <li className="flex gap-1.5"><span className="text-blue-400 font-bold">•</span>Tulang berpindah posisi → gerakan nyata</li>
                  <li className="flex gap-1.5"><span className="text-blue-400 font-bold">•</span>Contoh: lengan bengkok <span className="font-semibold text-blue-600">(fleksi siku)</span></li>
                  <li className="flex gap-1.5"><span className="text-blue-400 font-bold">•</span>Kaki melangkah, kepala menoleh, jari menulis</li>
                </ul>
              </div>
            </div>

            {/* Arrow flow bar */}
            <div className="bg-gray-50 border-t border-emerald-100 px-4 py-2.5 flex items-center justify-center gap-1 flex-wrap">
              {["Otot Berkontraksi","Menarik Tulang","Sendi Bergerak","Posisi Berubah"].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-1">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${["bg-red-100 text-red-700","bg-orange-100 text-orange-700","bg-teal-100 text-teal-700","bg-blue-100 text-blue-700"][i]}`}>{i+1} {s}</span>
                  {i < arr.length - 1 && <span className="text-gray-400 font-bold text-xs">→</span>}
                </span>
              ))}
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
