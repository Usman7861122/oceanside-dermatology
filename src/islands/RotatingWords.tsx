// Rotates the last words of the hero title: "Expert Dermatology for Healthy Skin / Every Age / Your Confidence".
// All words are in the HTML for search engines and screen readers; only the visible one animates.
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingWords({ words, interval = 2800 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [reduce, words.length, interval]);

  return (
    <span className="relative inline-grid justify-items-center align-baseline">
      {/* Reserve the width of the longest phrase so nothing jumps */}
      {words.map((w) => (
        <span key={w} aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {w}
        </span>
      ))}
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          aria-hidden="true"
          className="relative col-start-1 row-start-1 whitespace-nowrap text-gold-soft"
          initial={{ opacity: 0, y: "0.3em", filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.3em", filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
          {/* Thin gold line drawn under each phrase */}
          <motion.span
            className="absolute -bottom-0.5 left-0 h-px w-full origin-center bg-gold-soft/80"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
