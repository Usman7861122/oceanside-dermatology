// Signature Treatments: a scroll-driven rotating slider, adapted from a shared GSAP component.
// One large round top-down photo sits half below the bottom edge, and a ring of curved treatment
// names arcs over it. The stage sticks while the page scrolls; scrolling turns the photo into the
// next one, blends the page color, slides the gold marker round the ring, and swaps the copy and the
// botanical garnish in the top corners. Letting go eases to the nearest slide.
import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type TreatmentSlide = {
  name: string; // short name on the ring
  title: string;
  description: string;
  image: string; // round, top-down photo, cropped square
  alt: string;
  color: string; // page color for this slide
  decor?: string; // transparent garnish; mirrored for the right corner
};

type Props = {
  slides: TreatmentSlide[];
  appointmentHref: string;
  turn?: number;
  scrollPerSlide?: number;
  height?: string;
};

// ── wheel helpers ──
const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v);
function ringAngles(n: number, gap = 30, maxSpan = 130): number[] {
  if (n < 2) return n === 1 ? [0] : [];
  const step = Math.min(gap, maxSpan / (n - 1));
  return Array.from({ length: n }, (_, i) => (i - (n - 1) / 2) * step);
}
const pathOffset = (angle: number) => ((((angle + 90) % 360) + 360) % 360) / 3.6;
const positionAt = (progress: number, n: number) => clamp(progress, 0, 1) * Math.max(0, n - 1);
function lerpAt(values: number[], p: number): number {
  if (!values.length) return 0;
  const i = clamp(Math.floor(p), 0, values.length - 1);
  const j = Math.min(i + 1, values.length - 1);
  return values[i] + (values[j] - values[i]) * (p - i);
}
function photoOpacity(i: number, p: number): number {
  const base = Math.floor(p);
  return i === base ? 1 : i === base + 1 ? p - base : 0;
}
const scrollFor = (i: number, n: number, start: number, end: number) => (n > 1 ? start + ((end - start) * i) / (n - 1) : start);

const R_TEXT = 92.8;
const R_LINE = 87;
const RING_PATH = `M ${-R_TEXT} 0 A ${R_TEXT} ${R_TEXT} 0 1 1 ${R_TEXT} 0 A ${R_TEXT} ${R_TEXT} 0 1 1 ${-R_TEXT} 0`;

const CSS = `
.sig-track{position:relative;width:100%}
.sig-root{position:sticky;top:0;width:100%;overflow:hidden;container-type:size;color:var(--color-ink);outline:none}
.sig-root:focus-visible{box-shadow:inset 0 0 0 2px var(--color-gold)}
.sig-stage{position:absolute;inset:0;--u:min(1cqw,1.5cqh)}
@container (max-width:640px){.sig-stage{--u:min(1.25cqw,1.2cqh)}.sig-stage .sig-wheel{top:78%}.sig-stage .sig-copy{top:calc(var(--u) * 10 + 84px)}}
.sig-grain{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 70% 55% at 50% 100%,rgb(255 255 255/.55),transparent 70%)}
.sig-copy{position:absolute;left:50%;top:calc(var(--u) * 3 + 96px);transform:translateX(-50%);width:min(90%,calc(var(--u) * 48));display:grid;text-align:center;z-index:3}
.sig-txt{grid-area:1/1;will-change:opacity,transform}
.sig-eyebrow{font-size:max(11px,calc(var(--u) * .78));letter-spacing:3px;text-transform:uppercase;font-weight:300;color:var(--color-seaglass-deep);display:inline-flex;align-items:center;gap:.9rem;justify-content:center}
.sig-title{margin:calc(var(--u) * .9) 0 0;font-family:var(--font-display);font-size:max(30px,calc(var(--u) * 3.6));font-weight:400;line-height:1.08;color:var(--color-ink)}
.sig-desc{margin:calc(var(--u) * 1) auto 0;max-width:34em;font-size:max(14px,calc(var(--u) * 1.02));line-height:1.65;color:var(--color-body)}
.sig-cta{margin-top:calc(var(--u) * 1.8);display:flex;justify-content:center}
.sig-wheel{position:absolute;left:50%;top:calc(100% + var(--u) * 5);width:0;height:0}
.sig-ring{position:absolute;left:calc(var(--u) * -42);top:calc(var(--u) * -42);width:calc(var(--u) * 84);height:calc(var(--u) * 84);overflow:visible}
.sig-ring{user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}
.sig-ring text{fill:var(--color-ink);font-family:var(--font-sans);font-size:3.3px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;cursor:pointer;outline:none;transition:fill .3s}
.sig-ring text:focus,.sig-ring text:active{outline:none}
.sig-ring text:hover{fill:var(--color-gold) !important}
.sig-ring text:focus-visible{fill:var(--color-gold) !important;paint-order:stroke;stroke:rgb(236 143 46/.25);stroke-width:1.6px}
.sig-root *::selection{background:transparent}
.sig-dot{transform-box:view-box;transform-origin:0 0}
.sig-photo{position:absolute;left:calc(var(--u) * -30);top:calc(var(--u) * -30);width:calc(var(--u) * 60);height:calc(var(--u) * 60);border-radius:50%;
  box-shadow:0 calc(var(--u) * -.8) calc(var(--u) * 4) rgb(15 34 41/.22),0 0 0 calc(var(--u) * .5) rgb(255 255 255/.7);will-change:transform}
.sig-photo>img{position:absolute;inset:0;width:100%;height:100%;max-width:none;border-radius:50%;object-fit:cover}
.sig-decor{position:absolute;top:calc(var(--u) * -2 + 70px);width:calc(var(--u) * 22);height:calc(var(--u) * 22);max-width:none;object-fit:contain;pointer-events:none;will-change:opacity,transform;filter:drop-shadow(0 6px 10px rgb(15 34 41/.06))}
.sig-decor[data-side=l]{left:calc(var(--u) * -3)}
.sig-decor[data-side=r]{right:calc(var(--u) * -3)}
.sig-decor[data-flip=true]{scale:-1 1}
.sig-nav{position:absolute;bottom:calc(var(--u) * 2.4);width:max(42px,calc(var(--u) * 3));height:max(42px,calc(var(--u) * 3));border-radius:50%;
  display:grid;place-items:center;padding:0;color:var(--color-ink);background:rgb(255 255 255/.55);border:1px solid rgb(15 34 41/.12);cursor:pointer;transition:background-color .3s,border-color .3s,color .3s;z-index:3}
.sig-nav:hover{background:var(--color-gold);border-color:var(--color-gold);color:#fff}
.sig-nav:focus-visible{outline:2px solid var(--color-gold);outline-offset:2px}
.sig-nav[data-dir=prev]{left:calc(var(--u) * 2.4)}
.sig-nav[data-dir=next]{right:calc(var(--u) * 2.4)}
.sig-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (max-width:640px){.sig-decor{top:72px;width:calc(var(--u) * 17);height:calc(var(--u) * 17)}.sig-eyebrow .rule-gold{display:none}}
`;

function Chevron({ flip }: { flip?: boolean }) {
  return (
    <svg width="40%" height="40%" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SignatureSlider({ slides, appointmentHref, turn = 40, scrollPerSlide = 0.8, height = "100svh" }: Props) {
  const n = slides.length;
  const [active, setActive] = React.useState(0);
  const id = React.useId().replace(/:/g, "");
  const angles = React.useMemo(() => ringAngles(n), [n]);

  const track = React.useRef<HTMLDivElement | null>(null);
  const root = React.useRef<HTMLElement | null>(null);
  const photo = React.useRef<HTMLDivElement | null>(null);
  const dot = React.useRef<SVGGElement | null>(null);
  const photos = React.useRef<(HTMLImageElement | null)[]>([]);
  const texts = React.useRef<(HTMLDivElement | null)[]>([]);
  const names = React.useRef<(SVGTextElement | null)[]>([]);
  const decors = React.useRef<(HTMLImageElement | null)[][]>([]);
  const trigger = React.useRef<ScrollTrigger | null>(null);
  const reduced = React.useRef(false);
  const last = React.useRef(0);

  React.useEffect(() => {
    if (!n || !track.current || !root.current) return;
    const mixers = slides.map((s, i) => gsap.utils.interpolate(s.color, slides[Math.min(i + 1, n - 1)].color));
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    let skipSnapUntil = 0;
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='#'], a[href^='/#']");
      if (a && !root.current?.contains(a)) skipSnapUntil = performance.now() + 2500;
    };
    document.addEventListener("click", onAnchor, true);

    const apply = (p: number) => {
      const still = reduced.current;
      const base = clamp(Math.floor(p), 0, n - 1);
      root.current!.style.backgroundColor = mixers[base](p - base) as string;
      if (photo.current) photo.current.style.transform = `rotate(${still ? 0 : p * turn}deg)`;
      if (dot.current) dot.current.style.transform = `rotate(${lerpAt(angles, p)}deg)`;
      for (let i = 0; i < n; i++) {
        const d = p - i;
        const near = Math.max(0, 1 - Math.abs(d));
        const ph = photos.current[i];
        if (ph) ph.style.opacity = String(photoOpacity(i, p));
        const tx = texts.current[i];
        if (tx) {
          tx.style.opacity = String(Math.max(0, 1 - Math.abs(d) * 1.6));
          tx.style.transform = still ? "none" : `translateY(calc(var(--u) * ${(-d * 1.6).toFixed(3)}))`;
          tx.style.visibility = Math.abs(d) < 0.7 ? "visible" : "hidden";
        }
        const nm = names.current[i];
        if (nm) {
          nm.style.opacity = String(0.45 + 0.55 * near);
          nm.style.fill = near > 0.5 ? "var(--color-gold)" : "var(--color-ink)";
        }
        const [l, r] = decors.current[i] ?? [];
        const t = clamp(d, -1, 1);
        const a = Math.abs(t);
        if (l) {
          l.style.opacity = String(1 - a);
          l.style.transform = still ? "none" : `translate(calc(var(--u) * ${-5 * a}),calc(var(--u) * ${-5 * a})) rotate(${-28 * t}deg) scale(${1 - 0.2 * a})`;
        }
        if (r) {
          r.style.opacity = String(1 - a);
          r.style.transform = still ? "none" : `translate(calc(var(--u) * ${5 * a}),calc(var(--u) * ${-5 * a})) rotate(${28 * t}deg) scale(${1 - 0.2 * a})`;
        }
      }
      const now = Math.round(p);
      if (now !== last.current) {
        last.current = now;
        setActive(now);
      }
    };

    const state = { p: 0 };
    const ease = gsap.quickTo(state, "p", { duration: 0.65, ease: "power3.out", onUpdate: () => apply(state.p) });
    const follow = (p: number) => {
      if (reduced.current) {
        state.p = p;
        apply(p);
      } else ease(p);
    };

    const st = ScrollTrigger.create({
      trigger: track.current,
      start: "top top",
      end: "bottom bottom",
      // The visuals ease toward the scroll position instead of jumping with every wheel tick,
      // which keeps the turn smooth on mice with coarse scroll steps.
      onUpdate: (self) => follow(positionAt(self.progress, n)),
      onRefresh: (self) => follow(positionAt(self.progress, n)),
    });
    trigger.current = st;
    state.p = positionAt(st.progress, n);
    apply(state.p);

    // Ease to the nearest slide once the user stops scrolling inside the slider.
    // Skipped while the page is jumping to an anchor elsewhere (menu links, "Book" buttons),
    // so those scrolls glide straight past.
    const onScrollEnd = () => {
      if (reduced.current || n < 2 || performance.now() < skipSnapUntil) return;
      if (st.progress <= 0 || st.progress >= 1) return;
      const target = scrollFor(Math.round(st.progress * (n - 1)), n, st.start, st.end);
      if (Math.abs(window.scrollY - target) > 2) window.scrollTo({ top: target, behavior: "smooth" });
    };
    ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);
    // Images and fonts can shift the page after load; recalculate once they settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    const onMq = () => {
      reduced.current = mq.matches;
      apply(positionAt(st.progress, n));
    };
    mq.addEventListener("change", onMq);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("click", onAnchor, true);
      ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
      window.removeEventListener("load", refresh);
      st.kill();
      trigger.current = null;
    };
  }, [n, slides, angles, turn]);

  const go = (i: number) => {
    const st = trigger.current;
    if (!st) return;
    const to = clamp(i, 0, n - 1);
    window.scrollTo({ top: scrollFor(to, n, st.start, st.end), behavior: reduced.current ? "auto" : "smooth" });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1);
    else if (e.key === "ArrowLeft") go(active - 1);
    else return;
    e.preventDefault();
  };

  if (!n) return null;
  const slide = slides[active];

  return (
    <div ref={track} className="sig-track" style={{ height: `calc(${height} * ${1 + (n - 1) * scrollPerSlide})` }}>
      <style>{CSS}</style>
      <section
        ref={root}
        className="sig-root"
        style={{ height, backgroundColor: slides[0].color }}
        aria-roledescription="carousel"
        aria-label="Signature treatments"
        tabIndex={0}
        onKeyDown={onKey}
      >
        <div className="sig-grain" />
        <div className="sig-stage">
          {slides.map((s, i) => {
            if (!s.decor) return null;
            const set = (k: 0 | 1) => (el: HTMLImageElement | null) => {
              (decors.current[i] ??= [])[k] = el;
            };
            return (
              <React.Fragment key={`d${i}`}>
                <img ref={set(0)} className="sig-decor" data-side="l" src={s.decor} alt="" width={260} height={260} draggable={false} style={{ opacity: i ? 0 : 1 }} />
                <img ref={set(1)} className="sig-decor" data-side="r" data-flip="true" src={s.decor} alt="" width={260} height={260} draggable={false} style={{ opacity: i ? 0 : 1 }} />
              </React.Fragment>
            );
          })}

          <div className="sig-copy">
            {slides.map((s, i) => (
              <div key={`t${i}`} ref={(el) => { texts.current[i] = el; }} className="sig-txt" aria-hidden={i !== active} style={{ opacity: i ? 0 : 1, visibility: i ? "hidden" : "visible" }}>
                <p className="sig-eyebrow">
                  <span className="rule-gold" />Signature Treatments<span className="rule-gold" />
                </p>
                <h3 className="sig-title">{s.title}</h3>
                <p className="sig-desc">{s.description}</p>
                <div className="sig-cta">
                  <a href={appointmentHref} className="btn-appt" tabIndex={i === active ? 0 : -1}>
                    <span>Book this treatment</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="sig-wheel">
            <div ref={photo} className="sig-photo">
              {slides.map((s, i) => (
                <img
                  key={`c${i}`}
                  ref={(el) => { photos.current[i] = el; }}
                  src={s.image}
                  alt={i === active ? s.alt : ""}
                  width={900}
                  height={900}
                  loading={i ? "lazy" : "eager"}
                  draggable={false}
                  style={{ opacity: i ? 0 : 1 }}
                />
              ))}
            </div>
            <svg className="sig-ring" viewBox="-100 -100 200 200" role="group" aria-label="Choose a treatment">
              <defs>
                <path id={`${id}p`} d={RING_PATH} />
              </defs>
              <circle r={R_LINE} fill="none" stroke="rgb(15 34 41 / .18)" strokeWidth=".3" />
              <g ref={dot} className="sig-dot" style={{ transform: `rotate(${angles[0] ?? 0}deg)` }}>
                <circle cy={-R_LINE} r="2.4" fill="var(--color-gold)" opacity=".25" />
                <circle cy={-R_LINE} r="1.2" fill="var(--color-gold)" />
              </g>
              {slides.map((s, i) => (
                <text
                  key={`n${i}`}
                  ref={(el) => { names.current[i] = el; }}
                  textAnchor="middle"
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${s.name}`}
                  aria-pressed={i === active}
                  onClick={() => go(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      go(i);
                    }
                  }}
                >
                  <textPath href={`#${id}p`} startOffset={`${pathOffset(angles[i])}%`}>
                    {s.name}
                  </textPath>
                </text>
              ))}
            </svg>
          </div>

          <button type="button" className="sig-nav" data-dir="prev" aria-label="Previous treatment" onClick={() => go(active - 1)}>
            <Chevron />
          </button>
          <button type="button" className="sig-nav" data-dir="next" aria-label="Next treatment" onClick={() => go(active + 1)}>
            <Chevron flip />
          </button>
          <span className="sig-sr" aria-live="polite">{`${active + 1} of ${n}: ${slide.title}`}</span>
        </div>
      </section>
    </div>
  );
}
