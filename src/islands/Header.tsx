// Header, laid out like the reference: a slim bar with a frosted, see-through background and a
// hairline bottom border over the video. It turns solid deep ink once you scroll.
// "Services" opens a mega menu: categories on the left, grouped treatments in the middle,
// and a featured photo with a booking button on the right. On phones it becomes accordions.
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { serviceMenu } from "../data/serviceMenu";

type NavItem = { label: string; href: string };
const EASE = [0.22, 1, 0.36, 1] as const;

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={`transition-transform duration-500 ${open ? "rotate-180" : ""} ${className}`}>
      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MegaMenu({ appointmentHref, onClose }: { appointmentHref: string; onClose: () => void }) {
  const [active, setActive] = useState(0);
  const cat = serviceMenu[active];
  const reduce = useReducedMotion();

  return (
    <div className="mx-auto grid max-w-[1400px] grid-cols-[250px_minmax(0,1fr)_290px] gap-10 px-10 py-10">
      {/* Categories */}
      <ul className="m-0 list-none border-r border-ink/10 p-0 pr-8" role="tablist" aria-orientation="vertical" aria-label="Service categories">
        {serviceMenu.map((c, i) => (
          <li key={c.slug}>
            <a
              href={c.href}
              role="tab"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={onClose}
              className={`group flex items-center justify-between gap-3 border-b border-ink/10 py-4 font-display text-[1.3rem] leading-tight transition-colors duration-300 ${
                i === active ? "text-gold" : "text-ink hover:text-gold"
              }`}
            >
              {c.title}
              <span className={`text-sm transition-transform duration-500 ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
        <li className="pt-6">
          <a href="/services" onClick={onClose} className="text-[0.72rem] font-medium tracking-[0.2em] uppercase text-gold hover:text-gold">
            View all services →
          </a>
        </li>
      </ul>

      {/* Groups for the active category */}
      <div className="min-h-[430px]" role="tabpanel" aria-label={cat.title}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={cat.slug}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="m-0 text-[0.95rem] text-body">{cat.blurb}</p>
            <div className={cat.steps ? "mt-6 grid grid-cols-3 gap-8" : "mt-6 columns-3 gap-8"}>
              {cat.groups.map((g) => (
                <div key={g.title} className="mb-6 break-inside-avoid">
                  <p className="m-0 mb-2.5 text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold">{g.title}</p>
                  <ul className="m-0 list-none space-y-1.5 p-0">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <a href={it.href} onClick={onClose} className="group/link inline-flex items-center gap-2 text-[0.93rem] text-ink/80 transition-colors hover:text-ink">
                          <span className="h-px w-0 bg-gold transition-all duration-300 group-hover/link:w-3" aria-hidden="true" />
                          {it.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {cat.steps && (
                <div className="col-span-2">
                  <p className="m-0 mb-2.5 text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold">How it works</p>
                  <ol className="m-0 list-none overflow-hidden rounded-[var(--radius-photo)] border border-ink/10 bg-white/60 p-0">
                    {cat.steps.map((st, si) => (
                      <li key={st.title} className="flex items-start gap-6 border-b border-ink/10 px-7 py-6 last:border-b-0">
                        <span className="w-10 shrink-0 font-display text-[1.9rem] leading-none text-gold">{String(si + 1).padStart(2, "0")}</span>
                        <span>
                          <span className="block font-display text-[1.15rem] leading-snug text-ink">{st.title}</span>
                          <span className="mt-1 block text-[0.9rem] leading-relaxed text-body">{st.text}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Featured */}
      <div className="flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={cat.image}
            src={cat.image}
            alt={cat.imageAlt}
            width={600}
            height={600}
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="aspect-square w-full rounded-[var(--radius-photo)] object-cover shadow-[0_24px_50px_-30px_rgb(15_34_41/0.5)]"
          />
        </AnimatePresence>
        <p className="m-0 mt-5 font-display text-xl leading-snug text-ink">{cat.title}</p>
        <div className="mt-4 flex flex-col gap-3">
          <a href={cat.href} onClick={onClose} className="btn-line justify-center text-ink">
            Learn More <span className="arrow" aria-hidden="true">→</span>
          </a>
          <a href={appointmentHref} onClick={onClose} className="btn-appt">
            <span>Book a Consultation</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Header({
  nav,
  phone,
  phoneHref,
  appointmentHref,
}: {
  nav: NavItem[];
  phone: string;
  phoneHref: string;
  appointmentHref: string;
}) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [mega, setMega] = useState(false); // desktop services menu
  const [mServices, setMServices] = useState(false);
  const [mCat, setMCat] = useState<number | null>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const servicesBtn = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mega) {
        setMega(false);
        servicesBtn.current?.focus();
      }
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mega]);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMegaSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(false), 160);
  };

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white backdrop-blur-[10px] transition-[background-color,border-color] duration-500 ${
        solid || mega ? "border-white/10 bg-ink/95" : "border-white/70 bg-transparent"
      }`}
      style={{ borderBottomWidth: "0.5px" }}
      onMouseLeave={closeMegaSoon}
    >
      <div className="mx-auto flex h-[86px] max-w-[1400px] items-center justify-between gap-6 px-5 pt-1 sm:px-10 lg:h-[104px] lg:pt-1.5">
        <a href="/" className="block shrink-0" aria-label="Oceanside Dermatology & Aesthetics, home">
          {/* Hi-res wordmark (from the practice's 1652px logo) plus the doctor's line as live text, so both stay crisp and legible */}
          <span className="flex flex-col items-center">
            <img src="/images/logo-wordmark-white.webp" alt="" width="1197" height="434" className="h-[42px] w-auto sm:h-[46px] lg:h-[56px]" />
            <span className="mt-[5px] whitespace-nowrap text-[8.5px] font-medium tracking-[0.12em] text-white/90 uppercase sm:text-[9px] lg:text-[10.5px]">Sophia Sandhu, M.D. FAAD</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-9 xl:flex min-[1400px]:gap-11">
          {nav.map((item) =>
            item.label === "Services" ? (
              <button
                key={item.href}
                ref={servicesBtn}
                type="button"
                aria-expanded={mega}
                aria-controls="services-mega"
                onMouseEnter={openMega}
                onClick={() => setMega((v) => !v)}
                className={`group relative inline-flex items-center gap-1.5 text-[17px] font-light tracking-[0.02em] hover:text-white ${mega ? "text-white" : "text-white/95"}`}
              >
                {item.label}
                <Chevron open={mega} />
                <span className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-gold-soft transition-transform duration-500 ${mega ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={closeMegaSoon}
                className="group relative text-[17px] font-light tracking-[0.02em] text-white/95 hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold-soft transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-6">
          <a href={phoneHref} className="hidden items-center gap-2.5 text-[16px] font-light tracking-[0.04em] text-white/90 hover:text-white lg:flex xl:max-[1399px]:hidden">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
            </svg>
            {phone}
          </a>
          <a href={appointmentHref} className="btn-appt btn-appt--glass btn-appt--header hidden sm:inline-flex">
            <span>Book Appointment</span>
          </a>
          <button
            type="button"
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            id="services-mega"
            onMouseEnter={openMega}
            onMouseLeave={closeMegaSoon}
            initial={reduce ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mega-surface absolute inset-x-0 top-full hidden border-t border-gold/30 text-ink shadow-[0_40px_80px_-40px_rgb(15_34_41/0.55)] xl:block"
          >
            <MegaMenu appointmentHref={appointmentHref} onClose={() => setMega(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mega-surface{
          background-color:#f4f2ee;
          background-image:linear-gradient(180deg,rgb(245 243 239/.86),rgb(245 243 239/.94)),url("/images/textures/marble-light.webp");
          background-size:cover;background-position:center;
        }
      `}</style>
    </header>
    {/* Mobile menu lives outside the header: the header's blur would otherwise trap this
        fixed overlay inside the header bar. */}
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-8 pb-10 pt-28 text-white"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item, i) =>
                item.label === "Services" ? (
                  <motion.div
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.6, ease: EASE }}
                    className="border-b border-white/10"
                  >
                    <button
                      type="button"
                      aria-expanded={mServices}
                      onClick={() => setMServices((v) => !v)}
                      className="flex w-full items-center justify-between py-4 font-display text-3xl"
                    >
                      Services <Chevron open={mServices} className="h-3 w-3 text-gold" />
                    </button>
                    <AnimatePresence initial={false}>
                      {mServices && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <ul className="m-0 list-none pb-4 pl-1">
                            {serviceMenu.map((c, ci) => (
                              <li key={c.slug} className="border-t border-white/5">
                                <button
                                  type="button"
                                  aria-expanded={mCat === ci}
                                  onClick={() => setMCat((v) => (v === ci ? null : ci))}
                                  className={`flex w-full items-center justify-between py-3 text-left text-[1.05rem] ${mCat === ci ? "text-gold" : "text-white/90"}`}
                                >
                                  {c.title} <Chevron open={mCat === ci} />
                                </button>
                                <AnimatePresence initial={false}>
                                  {mCat === ci && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.4, ease: EASE }}
                                      className="overflow-hidden"
                                    >
                                      <div className="pb-4 pl-3">
                                        {c.groups.map((g) => (
                                          <div key={g.title} className="mb-3">
                                            <p className="m-0 mb-1.5 text-[0.65rem] tracking-[0.2em] uppercase text-gold">{g.title}</p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                              {g.items.map((it) => (
                                                <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="text-[0.9rem] text-white/70 hover:text-white">
                                                  {it.label}
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        ))}
                                        <a href={c.href} onClick={() => setOpen(false)} className="text-[0.8rem] tracking-[0.1em] text-gold">
                                          View {c.title} →
                                        </a>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.6, ease: EASE }}
                    className="border-b border-white/10 py-4 font-display text-3xl"
                  >
                    {item.label}
                  </motion.a>
                )
              )}
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <a href={appointmentHref} onClick={() => setOpen(false)} className="btn-appt btn-appt--glass">
                <span>Book Appointment</span>
              </a>
              <a href={phoneHref} className="btn-line justify-center text-white">Call {phone}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
