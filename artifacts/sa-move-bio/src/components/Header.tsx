import React from 'react';

export default function Header() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md mb-6 relative overflow-hidden z-10">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-emerald-300 flex items-center justify-center text-3xl shadow-sm border border-black/5">
          🦴
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#355070] mb-1">SA.Move.Bio</h1>
          <h2 className="text-lg font-medium text-[#6D597A] mb-3">Smart Movement Biology</h2>
          <p className="text-sm text-gray-600 max-w-lg mx-auto mb-4">
            Media Pembelajaran Sistem Gerak Manusia berbasis Problem Based Learning (PBL) dan Think Pair Share (TPS)
          </p>
          <div className="flex justify-center mb-4">
            <img
              src="/skeleton-illustration.png"
              alt="Human Skeletal System Anatomy"
              className="h-48 object-contain drop-shadow-md"
            />
          </div>
          <p className="text-xs font-medium text-teal-700 italic bg-teal-50 px-3 py-1.5 rounded-full inline-block mb-4">
            "Learning Biology Through Problem Based Learning, Think Pair Share, and Decision Making Skills"
          </p>
          <p className="text-xs text-gray-500">
            Dikembangkan oleh <span className="font-bold text-gray-700">Salsa Rahma Alya</span> | Universitas Islam Negeri Siber Syekh Nurjati Cirebon
          </p>
        </div>
      </div>
    </div>
  );
}
