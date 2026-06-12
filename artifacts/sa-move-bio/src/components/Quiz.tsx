import React, { useState } from 'react';
import NavigationButton from './NavigationButton';

const questions = [
  {
    text: "Seorang siswa sering membawa tas yang sangat berat setiap hari sehingga mengalami nyeri punggung. Keputusan terbaik adalah...",
    options: [
      "Tetap membawa tas dengan beban yang sama",
      "Mengurangi beban tas dan memperbaiki posisi membawa tas",
      "Mengabaikan rasa nyeri",
      "Tidak masuk sekolah"
    ],
    correct: 1,
    reason: "Mengurangi beban tas dapat mengurangi tekanan pada tulang belakang sehingga risiko gangguan sistem gerak dapat dicegah."
  },
  {
    text: "Seseorang mengalami patah tulang akibat kecelakaan. Langkah terbaik adalah...",
    options: [
      "Memijat bagian yang patah",
      "Menggerakkan bagian yang cedera",
      "Membawa ke tenaga kesehatan",
      "Membiarkannya sembuh sendiri"
    ],
    correct: 2,
    reason: "Patah tulang memerlukan penanganan medis agar proses penyembuhan berjalan dengan baik."
  },
  {
    text: "Saat berolahraga seseorang mengalami kram otot. Keputusan yang tepat adalah...",
    options: [
      "Melanjutkan olahraga",
      "Peregangan dan istirahat",
      "Memaksa otot bekerja",
      "Mengabaikan rasa sakit"
    ],
    correct: 1,
    reason: "Peregangan dan istirahat membantu mengurangi ketegangan otot dan mencegah cedera lebih lanjut."
  },
  {
    text: "Seorang remaja memiliki kebiasaan duduk membungkuk. Risiko yang mungkin terjadi adalah...",
    options: [
      "Postur tetap normal",
      "Gangguan tulang belakang",
      "Tinggi badan bertambah",
      "Tulang menjadi lebih kuat"
    ],
    correct: 1,
    reason: "Kebiasaan duduk membungkuk dalam jangka panjang dapat menyebabkan gangguan postur tubuh."
  },
  {
    text: "Jika seorang siswa kekurangan kalsium dalam jangka panjang maka keputusan terbaik adalah...",
    options: [
      "Meningkatkan konsumsi makanan berkalsium",
      "Menghindari susu",
      "Tidak mengubah pola makan",
      "Mengurangi aktivitas fisik"
    ],
    correct: 0,
    reason: "Kalsium berperan penting dalam menjaga kesehatan dan kekuatan tulang."
  },
  {
    text: "Ketika mengalami nyeri sendi berkepanjangan, tindakan terbaik adalah...",
    options: [
      "Konsultasi kepada tenaga kesehatan",
      "Mengabaikan nyeri",
      "Memaksa beraktivitas",
      "Berhenti bergerak selamanya"
    ],
    correct: 0,
    reason: "Pemeriksaan dini dapat membantu menemukan penyebab gangguan sendi dan mencegah komplikasi."
  },
  {
    text: "Seorang atlet mengalami cedera otot ringan saat latihan. Keputusan yang tepat adalah...",
    options: [
      "Istirahat dan pemulihan",
      "Latihan lebih keras",
      "Mengabaikan cedera",
      "Tidak perlu penanganan"
    ],
    correct: 0,
    reason: "Istirahat membantu proses perbaikan jaringan otot yang mengalami cedera."
  },
  {
    text: "Salah satu cara menjaga kesehatan sistem gerak adalah...",
    options: [
      "Jarang bergerak",
      "Kurang tidur",
      "Olahraga teratur",
      "Duduk sepanjang hari"
    ],
    correct: 2,
    reason: "Olahraga teratur membantu menjaga kekuatan tulang, sendi, dan otot."
  },
  {
    text: "Seorang siswa mengalami gejala skoliosis. Langkah terbaik adalah...",
    options: [
      "Memeriksakan diri ke tenaga kesehatan",
      "Mengabaikan gejala",
      "Menambah beban tas",
      "Tetap dengan postur yang salah"
    ],
    correct: 0,
    reason: "Penanganan dini dapat mencegah kondisi menjadi lebih parah."
  },
  {
    text: "Dalam pengambilan keputusan, memilih solusi terbaik harus berdasarkan...",
    options: [
      "Perasaan sesaat",
      "Informasi dan bukti yang relevan",
      "Tebakan",
      "Pendapat tanpa alasan"
    ],
    correct: 1,
    reason: "Keputusan yang baik didasarkan pada analisis informasi yang valid dan dapat dipertanggungjawabkan."
  }
];

interface QuizProps {
  onComplete: () => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex: number, optIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Harap jawab semua pertanyaan sebelum mengumpulkan kuis.");
      return;
    }
    setSubmitted(true);
  };

  const score = Object.entries(answers).reduce((acc, [qIndex, optIndex]) => {
    return acc + (questions[Number(qIndex)].correct === optIndex ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-6">
      {questions.map((q, qIndex) => {
        const isCorrect = answers[qIndex] === q.correct;
        const hasAnswered = answers[qIndex] !== undefined;

        return (
          <div key={qIndex} className="bg-white rounded-2xl border-l-4 border-teal-500 shadow-sm p-5 flex flex-col gap-4">
            <h3 className="font-semibold text-[#355070]">
              {qIndex + 1}. {q.text}
            </h3>
            
            <div className="flex flex-col gap-2">
              {q.options.map((opt, optIndex) => {
                const isSelected = answers[qIndex] === optIndex;
                let optionClass = "flex items-center gap-3 p-3 rounded-xl border transition-colors cursor-pointer ";
                
                if (submitted) {
                  optionClass += "cursor-default ";
                  if (q.correct === optIndex) {
                    optionClass += "bg-green-50 border-green-500 text-green-800 font-medium";
                  } else if (isSelected) {
                    optionClass += "bg-red-50 border-red-500 text-red-800";
                  } else {
                    optionClass += "bg-gray-50 border-gray-200 text-gray-500 opacity-50";
                  }
                } else {
                  optionClass += isSelected 
                    ? "bg-teal-50 border-teal-500 text-teal-800" 
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100";
                }

                return (
                  <div 
                    key={optIndex} 
                    className={optionClass}
                    onClick={() => handleSelect(qIndex, optIndex)}
                    data-testid={`quiz-option-${qIndex}-${optIndex}`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-teal-500' : 'border-gray-400'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full" />}
                    </div>
                    <span className="text-sm">{String.fromCharCode(65 + optIndex)}. {opt}</span>
                  </div>
                );
              })}
            </div>

            {submitted && (
              <div className={`mt-2 p-4 rounded-xl text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <div className="flex gap-2 items-start">
                  <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
                  <div>
                    {!isCorrect && (
                      <p className="font-semibold mb-1">
                        Jawaban Benar: {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}
                      </p>
                    )}
                    <p>{q.reason}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <div className="pt-6">
          <button
            data-testid="btn-submit-quiz"
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition-colors shadow-md"
          >
            Selesai Kuis
          </button>
        </div>
      ) : (
        <div className="mt-8 bg-gradient-to-br from-teal-500 to-emerald-400 p-8 rounded-2xl shadow-lg text-white text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Hasil Kuis</h2>
          <div 
            data-testid="quiz-score"
            className="text-6xl font-black bg-white/20 px-8 py-4 rounded-3xl backdrop-blur-sm border border-white/30"
          >
            {score}/10
          </div>
          <p className="text-lg font-medium mt-2">
            {score >= 8 ? 'Luar biasa! Pemahamanmu sangat baik.' : 'Terus semangat belajar ya!'}
          </p>
          <div className="w-full mt-4">
            <button
              onClick={onComplete}
              className="w-full py-3 rounded-xl bg-white text-teal-700 font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Lanjut ke Post-Test →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
