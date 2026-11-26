// Real Google reviews in a glass card on dark marble. Each review writes itself in word by word,
// with the reviewer's initials, gold stars, a counter and a progress line that fills while it waits.
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type T = { quote: string; name: string; detail: string };

const Star = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z" />
  </svg>
);

const initials = (name: string) =>
  name
    .replace(/\./g, "")
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// Longer reviews get a slightly smaller size so every card reads comfortably at the same height.
const quoteSize = (q: string) =>
  q.length > 450 ? "text-[1.08rem] sm:text-[1.22rem]" : q.length > 300 ? "text-[1.18rem] sm:text-[1.36rem]" : "text-[1.3rem] sm:text-[1.5rem]";

function Quote({ item, animateWords = false }: { item: T; animateWords?: boolean }) {
  const words = item.quote.replace(/\s+/g, " ").trim().split(" ");
  const step = Math.min(0.03, 1.1 / words.length);
  return (
    <>
      <blockquote className={`font-display leading-[1.55] text-white ${quoteSize(item.quote)}`}>
        {animateWords ? (
          <>
            <span className="sr-only">{item.quote}</span>
            <span aria-hidden="true">
              {words.map((w, k) => (
                <motion.span
                  key={k}
                  className="inline-block"
                  initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: k * step, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}&nbsp;
                </motion.span>
              ))}
            </span>
          </>
        ) : (
          words.map((w, k) => (
            <span key={k} className="inline-block">
              {w}&nbsp;
            </span>
          ))
        )}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-gradient-to-br from-gold/30 to-transparent font-display text-lg text-gold-soft">
          {initials(item.name)}
        </span>
        <span>
          <span className="block text-[0.8rem] font-medium tracking-[0.2em] uppercase text-white">{item.name}</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[0.82rem] text-white/55">
            <Star size={11} /> {item.detail}
          </span>
        </span>
      </figcaption>
    </>
  );
}

export default function Testimonials({ items, interval = 10000 }: { items: T[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const go = (d: number) => setI((n) => (n + d + items.length) % items.length);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(() => go(1), interval);
    return () => clearTimeout(t);
  }, [i, paused, reduce]);

  const t = items[i];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Glass card */}
      <div className="relative overflow-hidden rounded-[var(--radius-photo)] border border-white/12 bg-white/[0.06] px-7 pb-8 pt-12 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] backdrop-blur-xl sm:px-12 sm:pb-10 sm:pt-14">
        {/* Soft gold light in the corner */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        <span aria-hidden="true" className="pointer-events-none absolute left-6 top-2 font-display text-[7.5rem] leading-none text-gold/45 sm:left-10">
          “
        </span>

        <div className="relative flex items-center justify-between">
          <div className="flex gap-1 text-gold" role="img" aria-label="Rated 5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} />
            ))}
          </div>
          <span className="font-display text-lg tabular-nums text-white/60">
            <span className="text-gold-soft">{String(i + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        {/* All reviews share one grid cell: invisible copies reserve the tallest one's height,
            so the card never changes size between reviews. */}
        <div className="relative mt-7 grid">
          {items.map((it, k) => (
            <div key={`ghost-${k}`} aria-hidden="true" className="invisible col-start-1 row-start-1">
              <Quote item={it} />
            </div>
          ))}
          <div className="col-start-1 row-start-1 self-center" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={i}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Quote item={t} animateWords={!reduce} />
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="relative mt-9 flex items-center justify-between gap-6 border-t border-white/10 pt-7">
          <div className="flex flex-1 gap-2">
            {items.map((_, d) => (
              <button key={d} type="button" aria-label={`Show review ${d + 1}`} aria-current={d === i} onClick={() => setI(d)} className="relative h-5 flex-1">
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
                {d === i && (
                  <motion.span
                    key={`fill-${i}-${paused}`}
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 origin-left bg-gold"
                    initial={{ scaleX: reduce || paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: reduce || paused ? 0 : interval / 1000, ease: "linear" }}
                  />
                )}
                {d < i && <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gold/50" />}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink">
              ←
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next review" className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
