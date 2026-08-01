import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const BG = '#26241f';
const BONE = '#ece6d6';
const STEEL = '#a8a193';
const RUST = '#c8a368';
const FAINT = '#56514a';
const GHOST = '#3a3730';

const views = [
  {
    id: 'i',
    label: 'THE MATERIAL',
    lot: 'CAST 01 / LOT 27',
  },
  {
    id: 'ii',
    label: 'THE TRANSMUTATION',
    lot: 'CAST 02 / LOT 27',
  },
  {
    id: 'iii',
    label: 'THE THRESHOLD',
    lot: 'CAST 03 / LOT 27',
  },
];

const ease = [0.83, 0, 0.17, 1];

const fadeUp = {
  initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -22, filter: 'blur(4px)' },
};

function Hairline({ className = '', tone = GHOST }) {
  return <div className={className} style={{ background: tone, height: 1 }} />;
}

function CornerMarks({ tone = FAINT }) {
  const m = (pos) => (
    <div className={`absolute ${pos} w-3 h-3 pointer-events-none`}>
      <Plus size={12} strokeWidth={1} style={{ color: tone }} />
    </div>
  );
  return (
    <>
      {m('top-3 left-3')}
      {m('top-3 right-3')}
      {m('bottom-3 left-3')}
      {m('bottom-3 right-3')}
    </>
  );
}

function ViewOne() {
  return (
    <motion.div
      key="v1"
      className="absolute inset-0 flex flex-col px-9 pt-12 pb-8"
      {...fadeUp}
      transition={{ duration: 0.7, ease }}
    >
      {/* spec strip */}
      <div className="flex items-baseline justify-between text-[9px] tracking-[0.28em]" style={{ color: STEEL }}>
        <span>POURED IN PLACE</span>
        <span style={{ color: FAINT }}>40°44′N 73°56′W</span>
      </div>
      <Hairline className="mt-3" />

      {/* giant wordmark */}
      <div className="mt-10">
        <motion.h1
          className="leading-[0.86] font-black"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 88,
            letterSpacing: '-0.03em',
            color: BONE,
          }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          FORGE
        </motion.h1>
        <motion.h1
          className="leading-[0.86] font-black"
          style={{
            fontFamily: "'Archivo', sans-serif",
            fontSize: 88,
            letterSpacing: '-0.03em',
            color: 'transparent',
            WebkitTextStroke: `1px ${STEEL}`,
          }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
        >
          /ROOM
        </motion.h1>
      </div>

      {/* dimension annotation */}
      <div className="mt-6 flex items-center gap-3">
        <div className="flex-1 relative" style={{ height: 9 }}>
          <Hairline className="absolute top-1/2 left-0 right-0" tone={FAINT} />
          <div className="absolute left-0 top-0 bottom-0" style={{ width: 1, background: FAINT }} />
          <div className="absolute right-0 top-0 bottom-0" style={{ width: 1, background: FAINT }} />
        </div>
        <span className="text-[8px] tracking-[0.3em]" style={{ color: FAINT }}>
          SPAN — INFINITE
        </span>
      </div>

      {/* serif pull quote */}
      <motion.p
        className="mt-9 italic"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 27,
          lineHeight: 1.25,
          color: BONE,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        “Concrete remembers every hand that shaped it.{' '}
        <span style={{ color: RUST }}>So will your work.</span>”
      </motion.p>

      <div className="flex-1" />

      {/* footer */}
      <Hairline className="mb-4" />
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[9px] tracking-[0.3em] mb-1" style={{ color: STEEL }}>
            A WORKSPACE TRANSMUTATION ENGINE
          </p>
          <p className="text-[9px] tracking-[0.3em]" style={{ color: FAINT }}>
            FOR THE DISTRIBUTED & THE DEVOUT
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] tracking-[0.25em]" style={{ color: RUST }}>
            UNVEILING
          </p>
          <p
            className="font-bold text-[20px] tracking-tight"
            style={{ fontFamily: "'Archivo', sans-serif", color: BONE }}
          >
            03.04.25
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ViewTwo() {
  return (
    <motion.div
      key="v2"
      className="absolute inset-0 flex flex-col px-9 pt-12 pb-8"
      {...fadeUp}
      transition={{ duration: 0.7, ease }}
    >
      <div className="flex items-baseline justify-between text-[9px] tracking-[0.28em]" style={{ color: STEEL }}>
        <span>RAW → WROUGHT</span>
        <span style={{ color: FAINT }}>FIG. 02</span>
      </div>
      <Hairline className="mt-3" />

      {/* oversized serif quote */}
      <div className="mt-12">
        <motion.span
          className="block text-[10px] tracking-[0.4em] mb-6"
          style={{ color: RUST }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          THE CLAIM
        </motion.span>
        <motion.p
          className="italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 42,
            lineHeight: 1.12,
            color: BONE,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease }}
        >
          We do not rent desks.
          <br />
          <span style={{ color: STEEL }}>We conjure rooms</span>
          <br />
          that work back.
        </motion.p>
      </div>

      <div className="flex-1" />

      {/* transformation ledger */}
      <div className="space-y-0">
        {[
          ['SPARE BEDROOM', 'DRAFTING HALL'],
          ['KITCHEN TABLE', 'WAR ROOM'],
          ['HOTEL LOBBY', 'FOUNDRY FLOOR'],
        ].map(([from, to], idx) => (
          <motion.div
            key={from}
            className="flex items-center justify-between py-3"
            style={{ borderTop: `1px solid ${GHOST}` }}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 + idx * 0.12, duration: 0.6, ease }}
          >
            <span className="text-[10px] tracking-[0.22em]" style={{ color: FAINT }}>
              {from}
            </span>
            <ArrowUpRight size={12} style={{ color: RUST }} strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.22em]" style={{ color: BONE }}>
              {to}
            </span>
          </motion.div>
        ))}
      </div>

      <Hairline className="my-4" />
      <p className="text-[9px] tracking-[0.3em]" style={{ color: STEEL }}>
        FORGE/ROOM — PRESENCE, FOCUS & RITUAL FOR REMOTE TEAMS
      </p>
    </motion.div>
  );
}

function ViewThree() {
  return (
    <motion.div
      key="v3"
      className="absolute inset-0 flex flex-col px-9 pt-12 pb-8"
      {...fadeUp}
      transition={{ duration: 0.7, ease }}
    >
      <div className="flex items-baseline justify-between text-[9px] tracking-[0.28em]" style={{ color: STEEL }}>
        <span>LOAD-BEARING FEATURES</span>
        <span style={{ color: FAINT }}>FIG. 03</span>
      </div>
      <Hairline className="mt-3" />

      {/* feature manifest */}
      <div className="mt-9 space-y-6">
        {[
          ['01', 'THE SUMMONING', 'One keystroke pulls your scattered team into a single, live room — presence without the commute.'],
          ['02', 'THE CRUCIBLE', 'Deep-work hours cast in steel. Notifications melt away; only the work remains.'],
          ['03', 'THE LEDGER', 'Every session leaves a mark — rituals, artifacts, and decisions etched into shared memory.'],
        ].map(([num, title, body], idx) => (
          <motion.div
            key={num}
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + idx * 0.14, duration: 0.65, ease }}
          >
            <span
              className="text-[11px] pt-[2px] tracking-widest"
              style={{ color: RUST, fontFamily: "'Archivo', sans-serif" }}
            >
              {num}
            </span>
            <div>
              <p
                className="text-[12px] tracking-[0.22em] font-bold mb-1.5"
                style={{ color: BONE, fontFamily: "'Archivo', sans-serif" }}
              >
                {title}
              </p>
              <p className="text-[11px] leading-[1.6]" style={{ color: STEEL }}>
                {body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex-1" />

      {/* serif closer */}
      <motion.p
        className="italic mb-7"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 24,
          lineHeight: 1.3,
          color: BONE,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.8 }}
      >
        “The room was always there.{' '}
        <span style={{ color: RUST }}>You only had to call it.</span>”
      </motion.p>

      {/* CTA bar */}
      <motion.div
        className="flex items-center justify-between px-5 py-4 cta-bar"
        style={{ border: `1px solid ${STEEL}` }}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease }}
      >
        <span
          className="text-[11px] tracking-[0.3em] font-bold"
          style={{ color: BONE, fontFamily: "'Archivo', sans-serif" }}
        >
          CROSS THE THRESHOLD
        </span>
        <span className="text-[11px] tracking-[0.2em]" style={{ color: RUST }}>
          03.04 →
        </span>
      </motion.div>
      <p className="mt-3 text-[8px] tracking-[0.3em] text-center" style={{ color: FAINT }}>
        FORGEROOM.WORK — FIRST 500 KEYS FREE
      </p>
    </motion.div>
  );
}

export default function App() {
  const [view, setView] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => setView((v) => (v + 1) % views.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, 5200);
    return () => clearInterval(t);
  }, [paused, advance]);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center py-12 px-4 relative"
      style={{ background: BG, fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700;900&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&family=Space+Grotesk:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .grain::after {
              content: '';
              position: absolute;
              inset: 0;
              pointer-events: none;
              opacity: 0.55;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.16'/%3E%3C/svg%3E");
              mix-blend-mode: overlay;
            }
            .pin-shell { box-shadow: 0 40px 90px -30px rgba(0,0,0,0.65), 0 0 0 1px ${GHOST}; }
            .cta-bar { transition: background 0.4s ease, border-color 0.4s ease; cursor: pointer; }
            .cta-bar:hover { border-color: ${BONE} !important; }
            .nav-seg { transition: all 0.5s cubic-bezier(0.83,0,0.17,1); cursor: pointer; }
            ::selection { background: ${RUST}; color: ${BG}; }
          `,
        }}
      />

      {/* faint structural lines on the page itself */}
      <div className="absolute left-10 top-0 bottom-0 hidden md:block" style={{ width: 1, background: GHOST }} />
      <div className="absolute right-10 top-0 bottom-0 hidden md:block" style={{ width: 1, background: GHOST }} />
      <p
        className="absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] tracking-[0.5em] hidden md:block"
        style={{ color: FAINT }}
      >
        PRODUCT LAUNCH — PIN 027
      </p>
      <p
        className="absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[9px] tracking-[0.5em] hidden md:block"
        style={{ color: FAINT }}
      >
        FORGE/ROOM — THE MAGICIAN'S WORKSHOP
      </p>

      <div className="flex flex-col items-center gap-5">
        {/* THE PIN — 2:3 vertical */}
        <div
          className="pin-shell grain relative overflow-hidden select-none"
          style={{ width: 440, height: 660, background: BG }}
          onClick={advance}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <CornerMarks />

          {/* persistent top brand sliver */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] tracking-[0.55em] z-10" style={{ color: FAINT }}>
            F / R
          </div>

          {/* persistent lot stamp */}
          <AnimatePresence mode="wait">
            <motion.span
              key={views[view].lot}
              className="absolute bottom-[6.5rem] right-[-34px] rotate-90 text-[8px] tracking-[0.4em] z-10"
              style={{ color: FAINT }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {views[view].lot}
            </motion.span>
          </AnimatePresence>

          {/* views */}
          <AnimatePresence mode="wait">
            {view === 0 && <ViewOne />}
            {view === 1 && <ViewTwo />}
            {view === 2 && <ViewThree />}
          </AnimatePresence>
        </div>

        {/* segmented navigation */}
        <div className="flex items-center gap-3" style={{ width: 440 }}>
          {views.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setView(i)}
              className="nav-seg flex-1 flex flex-col gap-2 pt-2 text-left bg-transparent"
              style={{ borderTop: `1px solid ${i === view ? BONE : GHOST}` }}
            >
              <span
                className="text-[8px] tracking-[0.3em]"
                style={{ color: i === view ? BONE : FAINT, transition: 'color 0.5s' }}
              >
                {String(i + 1).padStart(2, '0')} — {v.label}
              </span>
            </button>
          ))}
        </div>

        <p className="text-[9px] tracking-[0.35em]" style={{ color: FAINT }}>
          TAP THE PIN TO TURN THE PAGE
        </p>
      </div>
    </div>
  );
}