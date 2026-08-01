import React from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  testId?: string;
  onBack?: () => void;
}

export default function NavigationButton({ onClick, text, testId = 'btn-next-page', onBack }: NavigationButtonProps) {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {onBack && (
        <button
          data-testid="btn-back-page"
          onClick={onBack}
          className="px-5 py-3 rounded-full bg-white/80 border border-gray-200 text-[#355070] font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-sm flex items-center gap-2"
        >
          ← Kembali
        </button>
      )}
      <button
        data-testid={testId}
        onClick={onClick}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300 text-[#355070] font-bold text-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        {text}
      </button>
    </div>
  );
}
