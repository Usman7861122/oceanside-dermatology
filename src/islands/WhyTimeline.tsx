// "Why us" as a timeline that follows Dr. Sandhu's real path.
// A gold line fills as you scroll; each stop rises in when it reaches the middle of the screen.
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

type Stop = { reason: string; place: string; detail: string };

export default function WhyTimeline({ stops }: { stops: Stop[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <ol ref={ref} className="relative mx-auto max-w-5xl">
      {/* Track and gold fill. Left on phones, centered from md up */}
      <span aria-hidden="true" className="absolute bottom-2 left-[11px] top-2 w-px bg-line md:left-1/2" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : fill }}
        className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gold md:left-1/2"
      />

      {stops.map((s, i) => {
        const right = i % 2 === 1;
        return (
          <li key={s.reason} className="relative grid pb-14 pl-12 last:pb-0 md:grid-cols-2 md:gap-20 md:pl-0">
            {/* Node */}
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-1.5 grid h-[23px] w-[23px] place-items-center rounded-full border border-gold bg-marble md:left-1/2 md:-translate-x-1/2"
              initial={reduce ? false : { scale: 0.4, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="h-[7px] w-[7px] rounded-full bg-gold" />
            </motion.span>

            <motion.div
              className={`${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-seaglass-deep">{s.place}</p>
              <h3 className="mt-2 text-3xl sm:text-[2.1rem]">{s.reason}</h3>
              <p className={`mt-3 max-w-md text-[0.98rem] text-body ${right ? "" : "md:ml-auto"}`}>{s.detail}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
