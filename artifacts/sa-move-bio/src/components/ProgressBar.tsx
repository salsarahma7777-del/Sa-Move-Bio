import React from 'react';

interface ProgressBarProps {
  currentPage: number;
  totalPages: number;
}

export default function ProgressBar({ currentPage, totalPages }: ProgressBarProps) {
  const percent = ((currentPage - 1) / (totalPages - 1)) * 100;

  return (
    <div className="bg-white rounded-full p-2 shadow-sm mb-6 flex flex-col gap-2 z-10 relative">
      <div className="flex justify-between items-center px-2 text-xs font-semibold text-[#6D597A]">
        <span>Mulai</span>
        <span>Halaman {currentPage} dari {totalPages}</span>
        <span>Selesai</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 via-emerald-300 to-yellow-300 rounded-full"
          style={{ width: `${Math.max(0, percent)}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
}
