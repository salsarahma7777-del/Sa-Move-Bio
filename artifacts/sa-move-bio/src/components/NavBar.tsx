import React, { useRef } from 'react';

const TABS = [
  { label: 'Beranda',   startPage: 1  },
  { label: 'Pre-Test',  startPage: 2  },
  { label: 'Tujuan',    startPage: 3  },
  { label: 'Petunjuk',  startPage: 4  },
  { label: 'Materi',    startPage: 5  },
  { label: 'LKPD DIGITAL', startPage: 12 },
  { label: 'Kuis',      startPage: 13 },
  { label: 'Post-Test', startPage: 14 },
  { label: 'Kesimpulan',startPage: 15 },
];

function getActiveTab(page: number) {
  for (let i = TABS.length - 1; i >= 0; i--) {
    if (page >= TABS[i].startPage) return i;
  }
  return 0;
}

interface NavBarProps {
  currentPage: number;
  goToPage: (p: number) => void;
}

export default function NavBar({ currentPage, goToPage }: NavBarProps) {
  const activeIdx = getActiveTab(currentPage);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1.5px solid rgba(160,231,229,0.35)',
        boxShadow: '0 2px 16px rgba(53,80,112,0.07)',
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center gap-3 px-4 py-2">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0 mr-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-base shadow-sm"
            style={{ background: 'linear-gradient(135deg,#A0E7E5,#B4F8C8)' }}
          >
            🦴
          </div>
          <span className="font-bold text-sm hidden sm:block" style={{ color: '#355070' }}>
            SA.Move.Bio
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200 shrink-0" />

        {/* Scrollable tabs */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TABS.map((tab, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={tab.label}
                data-testid={`nav-tab-${tab.label.toLowerCase()}`}
                onClick={() => goToPage(tab.startPage)}
                className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(135deg,#A0E7E5,#B4F8C8)',
                        color: '#355070',
                        boxShadow: '0 2px 8px rgba(160,231,229,0.45)',
                        transform: 'translateY(-1px)',
                      }
                    : {
                        background: 'transparent',
                        color: '#6D597A',
                      }
                }
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(160,231,229,0.18)';
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
