import React from 'react';

interface NavigationButtonProps {
  onClick: () => void;
  text: string;
  testId?: string;
}

export default function NavigationButton({ onClick, text, testId = 'btn-next-page' }: NavigationButtonProps) {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className="w-full md:w-auto mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-300 text-[#355070] font-bold text-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
    >
      {text}
    </button>
  );
}
