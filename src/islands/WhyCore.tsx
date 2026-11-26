// "Why Oceanside": an isometric stack of ceramic plates that opens into five floating layers,
// each joined to a glass card with one reason patients choose the practice.
// Adapted from a shared "exploded core" component: recolored to our gold, ink and marble,
// set in our fonts, with the Oceanside "&" as the mark and our own five reasons.
// Hover (mouse) or tap (touch, keyboard) the stack to open it.
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { MouseEvent, PointerEvent as ReactPointerEvent, ReactNode, SVGProps, CSSProperties } from "react";
import {
  LazyMotion,
  animate,
  domAnimation,
  m,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Award, Baby, Languages, MousePointer2, Scissors, Sparkles, Stethoscope, Users, Zap } from "lucide-react";

const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

// ───── Palette ─────
const GOLD = "#EC8F2E";
const GOLD_LIGHT = "#EC8F2E";
const GOLD_DEEP = "#B8641A";
const INK = "#0F2229";
const MUTED = "#6B7D82";
const LINE = "#D9E1DE";

const BLOCK_CSS = `
.wc-root { --wc-gold: ${GOLD}; }
.wc-halo { border-radius: 9999px; background: radial-gradient(closest-side, rgb(255 255 255 / 0.9), rgb(255 255 255 / 0)); }

.wc-floor, .wc-floor-lit {
  --wc-floor-area: radial-gradient(ellipse 75% 80% at 72% 70%, #000 20%, transparent 100%);
  --wc-floor-edges: linear-gradient(to left, transparent 0%, #000 22%), linear-gradient(to top, transparent 0%, #000 28%);
  -webkit-mask-image: var(--wc-floor-area), var(--wc-floor-edges);
  mask-image: var(--wc-floor-area), var(--wc-floor-edges);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
}
.wc-floor { opacity: 0.4; }
.wc-floor-spot {
  position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 400ms ease; will-change: transform, opacity;
  -webkit-mask-image: radial-gradient(closest-side, #000 0%, transparent 100%);
  mask-image: radial-gradient(closest-side, #000 0%, transparent 100%);
}
.wc-floor-lit { position: absolute; top: 0; left: 0; will-change: transform; }
[data-spot='on'] > .wc-floor-spot { opacity: 0.75; }
@media (max-width: 1023px) {
  .wc-floor, .wc-floor-lit { --wc-floor-area: radial-gradient(ellipse 90% 60% at 50% 75%, #000 20%, transparent 100%); }
}

.wc-fade-edge { -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 14%); mask-image: linear-gradient(to right, transparent 0%, #000 14%); }
@media (max-width: 1023px) { .wc-fade-edge { -webkit-mask-image: none; mask-image: none; } }

@keyframes wc-float { from { transform: translateY(0); } to { transform: translateY(calc(var(--wc-float, 10) * -1px)); } }
.wc-float { animation: wc-float var(--wc-float-seconds, 6.5s) ease-in-out infinite alternate; }
@keyframes wc-seam { from { opacity: 0.78; } to { opacity: 1; } }
.wc-seam-pulse { animation: wc-seam 4.8s ease-in-out infinite alternate; }

.wc-stage-card {
  border: 1px solid rgb(15 34 41 / 0.07);
  border-radius: 0.9em;
  background: rgb(255 255 255 / 0.84);
  box-shadow: 0 1px 2px rgb(15 34 41 / 0.04), 0 14px 34px -18px rgb(15 34 41 / 0.28), inset 0 1px 0 rgb(255 255 255 / 0.9);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  transition: border-color 300ms ease, box-shadow 300ms ease;
}
.wc-stage-card-lit {
  border-color: rgb(236 143 46 / 0.5);
  box-shadow: 0 1px 2px rgb(15 34 41 / 0.04), 0 18px 38px -18px rgb(236 143 46 / 0.55), inset 0 1px 0 rgb(255 255 255 / 0.9);
}
@container (max-width: 640px) { .wc-stage-tiles { display: none; } }

@keyframes wc-enter { from { opacity: 0; scale: 0.97; } }
.wc-enter { animation: wc-enter 1100ms cubic-bezier(0.22, 1, 0.36, 1) 250ms backwards; }

@media (prefers-reduced-motion: reduce) {
  .wc-float, .wc-seam-pulse, .wc-enter { animation: none; }
}
`;

// ───── Isometric geometry ─────
const ISO_X = 0.866;
const ISO_Y = 0.5;
const CX = 500;
const CY = 500;
const RING_FLATTEN = 0.57;
const RING_RX = [400, 530] as const;

type SlabType = { half: number; radius: number; top: number; depth: number };

const BASE: SlabType = { half: 168, radius: 40, top: 475, depth: 34 };
const SEAM_GAP = 9;
const MID: SlabType = { half: 151, radius: 36, top: BASE.top - SEAM_GAP - 28, depth: 28 };
const CAP: SlabType = { half: 101, radius: 28, top: MID.top - 14, depth: 14 };

type Point = [number, number];
const round = (n: number) => Math.round(n * 100) / 100;
const project = (x: number, y: number, cx = CX, cy = CY): Point => [cx + (x - y) * ISO_X, cy + (x + y) * ISO_Y];

const footprint = (half: number, radius: number, steps = 14): Point[] => {
  const r = Math.min(radius, half);
  const c = half - r;
  const corners: [number, number, number][] = [
    [c, c, 0],
    [-c, c, 90],
    [-c, -c, 180],
    [c, -c, 270],
  ];
  const pts: Point[] = [];
  for (const [ox, oy, start] of corners) {
    for (let i = 0; i <= steps; i++) {
      const a = ((start + (90 * i) / steps) * Math.PI) / 180;
      pts.push([ox + r * Math.cos(a), oy + r * Math.sin(a)]);
    }
  }
  return pts;
};

const toPath = (pts: Point[]) => `M${pts.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join("L")}Z`;

const topPath = (slab: SlabType, inset = 0, cx = CX, dy = 0) => {
  const half = slab.half - inset;
  const radius = Math.max(slab.radius - inset, 1);
  return toPath(footprint(half, radius).map(([x, y]) => project(x, y, cx, slab.top + dy)));
};

const hull = (points: Point[]): Point[] => {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o: Point, a: Point, b: Point) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const build = (list: Point[]) => {
    const out: Point[] = [];
    for (const p of list) {
      while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], p) <= 0) out.pop();
      out.push(p);
    }
    out.pop();
    return out;
  };
  return [...build(pts), ...build([...pts].reverse())];
};

const bodyPath = (slab: SlabType, inset = 0) => {
  const half = slab.half - inset;
  const radius = Math.max(slab.radius - inset, 1);
  const outline = footprint(half, radius);
  const upper = outline.map(([x, y]) => project(x, y, CX, slab.top));
  const lower = outline.map(([x, y]) => project(x, y, CX, slab.top + slab.depth));
  return toPath(hull([...upper, ...lower]));
};

const facePoint = (slab: SlabType, side: "left" | "right", u: number, v: number): Point => {
  const { half, top, depth } = slab;
  if (side === "left") {
    const [x, y] = project(-half + 2 * half * u, half, CX, top);
    return [x, y + depth * v];
  }
  const [x, y] = project(half, half - 2 * half * u, CX, top);
  return [x, y + depth * v];
};

const FACE_MATRIX = {
  left: `${ISO_X} ${ISO_Y} 0 1`,
  right: `${ISO_X} ${-ISO_Y} 0 1`,
  top: `${ISO_X} ${ISO_Y} ${-ISO_X} ${ISO_Y}`,
};

const ringPoint = (rx: number, angleDeg: number): Point => {
  const a = (angleDeg * Math.PI) / 180;
  return [round(CX + rx * Math.cos(a)), round(CY + rx * RING_FLATTEN * Math.sin(a))];
};

const ringPath = (rx: number) => {
  const ry = rx * RING_FLATTEN;
  return `M${CX + rx} ${CY}A${rx} ${ry} 0 1 1 ${CX - rx} ${CY}A${rx} ${ry} 0 1 1 ${CX + rx} ${CY}Z`;
};

// ───── The Oceanside "&" as the mark, laid into the top plane ─────
const Amp = ({ fill, stroke }: { fill: string; stroke?: string }) => (
  <text
    x="0"
    y="0"
    textAnchor="middle"
    dominantBaseline="central"
    fontFamily='"Libre Caslon Display", "Times New Roman", serif'
    fontSize="46"
    fill={fill}
    stroke={stroke}
    strokeWidth={stroke ? 0.5 : undefined}
  >
    &amp;
  </text>
);

// ───── Slab parts ─────
type FaceProps = { slab: SlabType; side: "left" | "right"; u: number; v: number };

const FaceMark = ({ slab, side, u, v, w, h, fill, glow }: FaceProps & { w: number; h: number; fill: string; glow?: boolean }) => {
  const [x, y] = facePoint(slab, side, u, v);
  return (
    <g transform={`translate(${x.toFixed(2)} ${y.toFixed(2)}) matrix(${FACE_MATRIX[side]} 0 0)`}>
      {glow && <rect x={-w / 2 - 2} y={-h / 2 - 3} width={w + 4} height={h + 6} rx={h} fill={fill} filter="url(#wc-blur-sm)" opacity="0.75" />}
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={h / 2} fill={fill} />
    </g>
  );
};

const PanelLine = ({ slab, side, v, from = 0.14, to = 0.86 }: { slab: SlabType; side: "left" | "right"; v: number; from?: number; to?: number }) => {
  const [x1, y1] = facePoint(slab, side, from, v);
  const [x2, y2] = facePoint(slab, side, to, v);
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A9B3B1" strokeWidth="0.9" opacity="0.55" />;
};

const Fastener = ({ slab, x, y }: { slab: SlabType; x: number; y: number }) => {
  const [px, py] = project(x, y, CX, slab.top);
  return (
    <g transform={`translate(${px.toFixed(2)} ${py.toFixed(2)}) matrix(${FACE_MATRIX.top} 0 0)`}>
      <circle r="6.5" fill="url(#wc-hole)" stroke="#C6CFCC" strokeWidth="1" />
    </g>
  );
};

const SlabBody = ({ slab }: { slab: SlabType }) => (
  <g>
    <path d={bodyPath(slab)} fill="url(#wc-side)" />
    <path d={bodyPath(slab)} fill="url(#wc-side-shade)" />
    <path d={bodyPath(slab)} fill="none" stroke="#CDD5D2" strokeWidth="1" opacity="0.85" />
  </g>
);

const SlabTop = ({ slab, groove }: { slab: SlabType; groove?: number }) => (
  <g>
    <path d={topPath(slab)} fill="url(#wc-bevel)" stroke="#D9E1DE" strokeWidth="1" />
    <path d={topPath(slab, 4.5)} fill="url(#wc-top)" stroke="#fff" strokeWidth="1" />
    {groove !== undefined && <path d={topPath(slab, groove)} fill="none" stroke="#D6DDDA" strokeWidth="1.2" />}
  </g>
);

// Stepped gold extrusion of the "&", darker where it meets the plate.
const LOGO_SIDE = ["#9A4F14", "#A85917", "#B6631C", "#C46D21", "#D07726", "#DC812A"];
const LOGO_SCALE = 1.35;

const CoreLogo = ({ x, y }: { x: number; y: number }) => {
  const plane = (lift: number) => `translate(${x} ${y - lift}) matrix(${FACE_MATRIX.top} 0 0) rotate(-45) scale(${LOGO_SCALE})`;
  const top = LOGO_SIDE.length;
  return (
    <g>
      <g transform={`${plane(0)} translate(2.4 2.4)`} opacity="0.22" filter="url(#wc-blur-sm)">
        <Amp fill="#3E4E52" />
      </g>
      {LOGO_SIDE.map((fill, k) => (
        <g key={fill} transform={plane(k)}>
          <Amp fill={fill} />
        </g>
      ))}
      <g transform={plane(top)}>
        <Amp fill="url(#wc-logo-top)" stroke="#FFD9A8" />
      </g>
    </g>
  );
};

const CoreDefs = () => (
  <defs>
    <linearGradient id="wc-side" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#F4F6F5" />
      <stop offset="0.46" stopColor="#E8EDEB" />
      <stop offset="0.5" stopColor="#D8DFDC" />
      <stop offset="1" stopColor="#E2E8E6" />
    </linearGradient>
    <linearGradient id="wc-side-shade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0.45" stopColor="#3E5258" stopOpacity="0" />
      <stop offset="1" stopColor="#3E5258" stopOpacity="0.16" />
    </linearGradient>
    <linearGradient id="wc-bevel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#FFFFFF" />
      <stop offset="1" stopColor="#E3E9E7" />
    </linearGradient>
    <linearGradient id="wc-top" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0" stopColor="#FFFFFF" />
      <stop offset="1" stopColor="#F1F4F3" />
    </linearGradient>
    <linearGradient id="wc-inlay" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#ECF0EF" />
      <stop offset="1" stopColor="#FFFFFF" />
    </linearGradient>
    <linearGradient id="wc-seam" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#F6C58A" />
      <stop offset="0.5" stopColor={GOLD} />
      <stop offset="1" stopColor="#F2AC5C" />
    </linearGradient>
    <linearGradient id="wc-slot" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#3B4E53" />
      <stop offset="1" stopColor="#7C8C8F" />
    </linearGradient>
    <linearGradient id="wc-logo-top" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#F6C58A" />
      <stop offset="0.55" stopColor="#F2A84E" />
      <stop offset="1" stopColor={GOLD} />
    </linearGradient>
    <radialGradient id="wc-hole" cx="0.5" cy="0.4" r="0.7">
      <stop offset="0" stopColor="#D5DCD9" />
      <stop offset="1" stopColor="#F3F6F5" />
    </radialGradient>
    <filter id="wc-blur-sm" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="3.5" />
    </filter>
    <filter id="wc-blur-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="9" />
    </filter>
    <filter id="wc-blur-spill" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="18" />
    </filter>
  </defs>
);

// ───── The stack at rest ─────
const CoreObject = (props: SVGProps<SVGSVGElement>) => {
  const seam: SlabType = { half: MID.half - 2, radius: MID.radius - 2, top: MID.top + MID.depth - 1, depth: SEAM_GAP + 1 };
  const spillDy = BASE.top - MID.top;
  return (
    <svg viewBox="0 0 1000 1000" aria-hidden {...props}>
      <CoreDefs />
      <SlabBody slab={BASE} />
      <SlabTop slab={BASE} groove={10} />
      <PanelLine slab={BASE} side="left" v={0.3} />
      <PanelLine slab={BASE} side="right" v={0.3} />
      <FaceMark slab={BASE} side="right" u={0.5} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      <FaceMark slab={BASE} side="right" u={0.58} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      <FaceMark slab={BASE} side="right" u={0.66} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      <FaceMark slab={BASE} side="left" u={0.32} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      <FaceMark slab={BASE} side="left" u={0.4} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      <g className="wc-seam-pulse">
        <path d={topPath(MID, 4, CX, spillDy)} fill={GOLD} opacity="0.24" filter="url(#wc-blur-spill)" />
        <path d={bodyPath(seam)} fill={GOLD} opacity="0.6" filter="url(#wc-blur-glow)" />
      </g>
      <path d={bodyPath(seam)} fill="url(#wc-seam)" />
      <SlabBody slab={MID} />
      <SlabTop slab={MID} groove={11} />
      <PanelLine slab={MID} side="left" v={0.78} />
      <PanelLine slab={MID} side="right" v={0.78} />
      <FaceMark slab={MID} side="left" u={0.62} v={0.42} w={34} h={7.5} fill="url(#wc-slot)" />
      <FaceMark slab={MID} side="left" u={0.34} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
      <FaceMark slab={MID} side="left" u={0.42} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
      <FaceMark slab={MID} side="right" u={0.44} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
      <FaceMark slab={MID} side="right" u={0.52} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
      <FaceMark slab={MID} side="right" u={0.68} v={0.42} w={22} h={4.5} fill="url(#wc-slot)" />
      <g className="wc-seam-pulse">
        <FaceMark slab={MID} side="left" u={0.2} v={0.42} w={7} h={2.6} fill={GOLD} glow />
      </g>
      <Fastener slab={MID} x={0} y={-MID.half + 28} />
      <Fastener slab={MID} x={-MID.half + 28} y={0} />
      <Fastener slab={MID} x={MID.half - 28} y={0} />
      <Fastener slab={MID} x={0} y={MID.half - 28} />
      <SlabBody slab={CAP} />
      <SlabTop slab={CAP} />
      <path d={topPath(CAP, 19)} fill="url(#wc-inlay)" stroke="#DAE1DE" strokeWidth="1.2" />
      <path d={topPath(CAP, 20.5)} fill="none" stroke="#fff" strokeWidth="1" opacity="0.9" />
      <CoreLogo x={CX} y={CAP.top} />
    </svg>
  );
};

const CoreShadow = (props: SVGProps<SVGSVGElement>) => {
  const floor = { ...BASE, top: BASE.top + BASE.depth + 30 };
  return (
    <svg viewBox="0 0 1000 1000" aria-hidden {...props}>
      <defs>
        <filter id="wc-blur-lg" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <filter id="wc-blur-md" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <path d={topPath(floor, -14)} fill="#3E5258" opacity="0.18" filter="url(#wc-blur-lg)" />
      <path d={topPath(floor, 6)} fill="#22363C" opacity="0.2" filter="url(#wc-blur-md)" />
    </svg>
  );
};

const NODES: [number, number][] = [
  [118, 132], [318, 82], [690, 96], [884, 188], [936, 470], [70, 512], [150, 858], [850, 846],
];

const DepthBackdrop = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1000 1000" aria-hidden {...props}>
    <defs>
      <linearGradient id="wc-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
        <stop offset="1" stopColor="#fff" stopOpacity="0.12" />
      </linearGradient>
    </defs>
    <g fill="url(#wc-glass)" stroke="#DCE3E0" strokeWidth="1" opacity="0.35">
      <rect width="290" height="250" rx="22" transform="matrix(0.866 -0.5 0 1 232 300)" />
      <rect width="290" height="250" rx="22" transform="matrix(0.866 0.5 0 1 520 150)" />
    </g>
    <g fill="#fff" stroke="#CDD5D2" strokeWidth="1">
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4 : 3} opacity="0.85" />
      ))}
    </g>
  </svg>
);

// ───── Settings ─────
const EASE = [0.22, 1, 0.36, 1] as const;
const MOTION = { floatDistance: 10, floatSeconds: 6.5, tiltDegrees: 3.5, ringParallax: 12, backdropParallax: 5, orbitSeconds: [70, 95], orbitOpenOpacity: 0.15 };
const ARTBOARD = 1000;

type IconName = "award" | "users" | "zap" | "languages";

// Bottom to top: the foundation first, everyday experience last. The middle plate is the core of the practice.
const STAGES = [
  { title: "Board-Certified Expertise", items: ["FAAD", "Harbor-UCLA Chief Resident", "UCSF"], icon: "award" as IconName, side: "right" as const },
  { title: "Every Skin Type, Every Age", items: ["All skin types", "Newborns to adults"], icon: "users" as IconName, side: "left" as const },
  { title: "Complete Care, One Roof", items: ["Medical", "Surgical", "Cosmetic", "Pediatric"], side: "right" as const, main: true },
  { title: "Advanced Lasers & Light", items: ["M22 IPL", "UltraClear", "ResurFX"], icon: "zap" as IconName, side: "left" as const },
  { title: "Care in Your Language", items: ["English", "Español", "ਪੰਜਾਬੀ"], icon: "languages" as IconName, side: "right" as const },
];
type Stage = (typeof STAGES)[number];
const isMain = (s: Stage) => "main" in s && !!s.main;

const EXPLODE = { spring: { stiffness: 105, damping: 25, mass: 1 }, gap: 94, aiLift: 12, topPlateY: 230, stagger: 0.05, scales: [0.63, 0.62, 0.7, 1.07, 1.06] };
const STAGE_CARDS = { left: { edge: -2, width: 31 }, right: { edge: 0, width: 29 }, restInset: 10, outward: 2, beadSeconds: 1.6 };

const PLATE_SLABS: SlabType[] = [
  { ...BASE, top: BASE.top + 17, depth: 17 },
  { ...BASE, top: BASE.top, depth: 17 },
  MID,
  { ...CAP, top: CAP.top + 7, depth: 7 },
  { ...CAP, top: CAP.top, depth: 7 },
];
const MAIN_PLATE = 2;
const TARGET_TOPS = PLATE_SLABS.map((_, i) => EXPLODE.topPlateY + (PLATE_SLABS.length - 1 - i) * EXPLODE.gap - (i === MAIN_PLATE ? EXPLODE.aiLift : 0));
const TRAVEL = PLATE_SLABS.map((slab, i) => TARGET_TOPS[i] - slab.top);
const clamp = (v: number) => Math.min(1, Math.max(0, v));
const plateProgress = (i: number, p: number) => {
  const delay = Math.abs(i - MAIN_PLATE) * EXPLODE.stagger;
  return clamp((p - delay) / (1 - delay));
};
const plateY = (i: number, p: number) => TRAVEL[i] * plateProgress(i, p);
const plateScale = (i: number, p: number) => 1 + (EXPLODE.scales[i] - 1) * plateProgress(i, p);
const tipOffset = (i: number) => {
  const { half, radius } = PLATE_SLABS[i];
  return 0.866 * (2 * half - 0.586 * radius) * EXPLODE.scales[i];
};
const tipX = (i: number, side: "left" | "right") => CX + (side === "right" ? 1 : -1) * tipOffset(i);
const cornerY = (i: number) => TARGET_TOPS[i] + PLATE_SLABS[i].depth / 2;

// ───── The stack taken apart ─────
const SKIRT = [0, 4, 0, 10, 10];

const Plate = ({ index, progress, children }: { index: number; progress: MotionValue<number>; children: ReactNode }) => {
  const y = useTransform(progress, (v) => plateY(index, v));
  const scale = useTransform(progress, (v) => plateScale(index, v));
  const apart = useTransform(progress, (v) => plateProgress(index, v));
  const shadow = useTransform(apart, (v) => v * 0.16);
  const slab = PLATE_SLABS[index];
  const skirt = SKIRT[index];
  return (
    <m.g style={{ y, scale }}>
      {index > 0 && <m.path d={topPath(slab, -6, CX, slab.depth + 34)} fill="#22363C" filter="url(#wc-blur-spill)" style={{ opacity: shadow }} />}
      {skirt > 0 && (
        <m.g style={{ opacity: apart }}>
          <SlabBody slab={{ ...slab, top: slab.top + slab.depth - 1, depth: skirt + 1 }} />
        </m.g>
      )}
      {children}
    </m.g>
  );
};

const PlateNumber = ({ slab, n, main = false }: { slab: SlabType; n: number; main?: boolean }) => {
  const k = slab.half * 0.56;
  const [x, y] = project(k, k, CX, slab.top);
  const plane = `matrix(${FACE_MATRIX.top} 0 0) rotate(-45)`;
  const label = String(n).padStart(2, "0");
  const text = { textAnchor: "middle" as const, dominantBaseline: "central" as const, fontSize: 25, fontWeight: 500, letterSpacing: 2.5, fontFamily: "Jost, sans-serif" };
  return (
    <g transform={`translate(${x.toFixed(2)} ${y.toFixed(2)})`} aria-hidden>
      <text {...text} transform={`translate(0 0.9) ${plane}`} fill="#FFFFFF" opacity="0.95">{label}</text>
      <text {...text} transform={plane} fill={main ? GOLD : "#BCC6C3"}>{label}</text>
    </g>
  );
};

const MainEmphasis = ({ progress }: { progress: MotionValue<number> }) => {
  const on = useTransform(progress, (v) => clamp((v - 0.5) / 0.4));
  const rim = useTransform(on, (v) => v * 0.9);
  const halo = useTransform(on, (v) => v * 0.55);
  const spill = useTransform(halo, (v) => v * 0.35);
  return (
    <g transform={`translate(${CX} ${MID.top}) matrix(${FACE_MATRIX.top} 0 0)`}>
      <m.circle r="86" fill={GOLD} filter="url(#wc-blur-spill)" style={{ opacity: spill }} />
      <m.circle r="56" fill="none" stroke={GOLD} strokeWidth="1.4" style={{ opacity: rim }} />
      <m.circle r="38" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="3 6" style={{ opacity: halo }} />
      <m.circle r="9" fill={GOLD} style={{ opacity: rim }} />
    </g>
  );
};

const ExplodedCore = ({ progress, ...props }: SVGProps<SVGSVGElement> & { progress: MotionValue<number> }) => {
  const strongGlow = useTransform(progress, (v) => clamp((v - 0.4) / 0.5) * 0.6);
  const seam = { half: MID.half - 2, radius: MID.radius - 2, top: MID.top + MID.depth - 1, depth: SEAM_GAP + 1 };
  const inlay = (slab: SlabType) => (
    <>
      <path d={topPath(slab, 19)} fill="url(#wc-inlay)" stroke="#DAE1DE" strokeWidth="1.2" />
      <path d={topPath(slab, 20.5)} fill="none" stroke="#fff" strokeWidth="1" opacity="0.9" />
    </>
  );
  return (
    <svg viewBox="0 0 1000 1000" aria-hidden {...(props as SVGProps<SVGSVGElement>)}>
      <CoreDefs />
      <Plate index={0} progress={progress}>
        <SlabBody slab={PLATE_SLABS[0]} />
        <SlabTop slab={PLATE_SLABS[0]} groove={10} />
        <PlateNumber slab={PLATE_SLABS[0]} n={1} />
        <FaceMark slab={BASE} side="right" u={0.5} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
        <FaceMark slab={BASE} side="right" u={0.58} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
        <FaceMark slab={BASE} side="right" u={0.66} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
        <FaceMark slab={BASE} side="left" u={0.32} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
        <FaceMark slab={BASE} side="left" u={0.4} v={0.62} w={4.5} h={4.5} fill="url(#wc-slot)" />
      </Plate>
      <Plate index={1} progress={progress}>
        <SlabBody slab={PLATE_SLABS[1]} />
        <SlabTop slab={PLATE_SLABS[1]} groove={10} />
        <PlateNumber slab={PLATE_SLABS[1]} n={2} />
        <PanelLine slab={BASE} side="left" v={0.3} />
        <PanelLine slab={BASE} side="right" v={0.3} />
      </Plate>
      <Plate index={MAIN_PLATE} progress={progress}>
        <g className="wc-seam-pulse">
          <path d={topPath(MID, 4, CX, BASE.top - MID.top)} fill={GOLD} opacity="0.24" filter="url(#wc-blur-spill)" />
          <path d={bodyPath(seam)} fill={GOLD} opacity="0.6" filter="url(#wc-blur-glow)" />
        </g>
        <m.path d={bodyPath(seam)} fill={GOLD} filter="url(#wc-blur-glow)" style={{ opacity: strongGlow }} />
        <path d={bodyPath(seam)} fill="url(#wc-seam)" />
        <SlabBody slab={MID} />
        <SlabTop slab={MID} groove={11} />
        <PlateNumber slab={MID} n={3} main />
        <PanelLine slab={MID} side="left" v={0.78} />
        <PanelLine slab={MID} side="right" v={0.78} />
        <FaceMark slab={MID} side="left" u={0.62} v={0.42} w={34} h={7.5} fill="url(#wc-slot)" />
        <FaceMark slab={MID} side="left" u={0.34} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
        <FaceMark slab={MID} side="left" u={0.42} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
        <FaceMark slab={MID} side="right" u={0.44} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
        <FaceMark slab={MID} side="right" u={0.52} v={0.42} w={5} h={5} fill="url(#wc-slot)" />
        <FaceMark slab={MID} side="right" u={0.68} v={0.42} w={22} h={4.5} fill="url(#wc-slot)" />
        <g className="wc-seam-pulse">
          <FaceMark slab={MID} side="left" u={0.2} v={0.42} w={7} h={2.6} fill={GOLD} glow />
        </g>
        <Fastener slab={MID} x={0} y={-MID.half + 28} />
        <Fastener slab={MID} x={-MID.half + 28} y={0} />
        <Fastener slab={MID} x={MID.half - 28} y={0} />
        <Fastener slab={MID} x={0} y={MID.half - 28} />
        <MainEmphasis progress={progress} />
      </Plate>
      <Plate index={3} progress={progress}>
        <SlabBody slab={PLATE_SLABS[3]} />
        <SlabTop slab={PLATE_SLABS[3]} />
        {inlay(PLATE_SLABS[3])}
        <PlateNumber slab={PLATE_SLABS[3]} n={4} />
      </Plate>
      <Plate index={4} progress={progress}>
        <SlabBody slab={PLATE_SLABS[4]} />
        <SlabTop slab={PLATE_SLABS[4]} />
        {inlay(CAP)}
        <CoreLogo x={CX} y={CAP.top} />
      </Plate>
    </svg>
  );
};

// ───── Orbits, beads and backdrop ─────
const OrbitalSystem = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1000 1000" aria-hidden {...props}>
    <g fill="none" stroke={LINE} strokeWidth="1">
      <ellipse cx={CX} cy={CY} rx={RING_RX[0]} ry={RING_RX[0] * RING_FLATTEN} opacity="0.9" />
      <ellipse cx={CX} cy={CY} rx={RING_RX[1]} ry={RING_RX[1] * RING_FLATTEN} opacity="0.75" />
    </g>
  </svg>
);

type NodeType = { ring: 0 | 1; angle: number; size: number };
const BEADS: NodeType[] = [
  { ring: 0, angle: 20, size: 7 }, { ring: 0, angle: 110, size: 5.5 }, { ring: 0, angle: 200, size: 8 }, { ring: 0, angle: 290, size: 6 },
  { ring: 1, angle: 60, size: 6 }, { ring: 1, angle: 132, size: 8 }, { ring: 1, angle: 204, size: 5.5 }, { ring: 1, angle: 276, size: 7 }, { ring: 1, angle: 348, size: 6.5 },
];

// A small bead of champagne glass.
const Crystal = ({ size }: { size: number }) => (
  <g filter="url(#wc-crystal-shadow)">
    <circle r={size * 1.55} fill="url(#wc-crystal-halo)" />
    <circle r={size} fill="url(#wc-crystal-body)" />
    <circle r={size} fill="url(#wc-crystal-refract)" />
    <circle r={size - 0.5} fill="none" stroke="url(#wc-crystal-rim)" strokeWidth="1" />
    <ellipse cx={-size * 0.32} cy={-size * 0.4} rx={size * 0.36} ry={size * 0.2} transform={`rotate(-30 ${-size * 0.32} ${-size * 0.4})`} fill="#FFFFFF" opacity="0.95" />
    <circle cx={size * 0.34} cy={-size * 0.5} r={Math.max(0.7, size * 0.07)} fill="#FFFFFF" opacity="0.85" />
  </g>
);

const Particles = ({ half, animate: run, paused = false, ...props }: SVGProps<SVGSVGElement> & { half: "back" | "front"; animate: boolean; paused?: boolean }) => {
  const ref = useRef<SVGSVGElement>(null);
  const clipId = `wc-clip-${half}`;
  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (paused) svg.pauseAnimations();
    else svg.unpauseAnimations();
  }, [paused]);
  return (
    <svg ref={ref} viewBox="0 0 1000 1000" aria-hidden {...props}>
      <defs>
        <clipPath id={clipId}>
          {half === "back" ? <rect x="-200" y="-200" width="1400" height={CY + 200} /> : <rect x="-200" y={CY} width="1400" height="700" />}
        </clipPath>
        <linearGradient id={`wc-crystal-body`} x1="0.15" y1="0.1" x2="0.85" y2="0.95">
          <stop offset="0" stopColor="#FBF3E2" stopOpacity="0.92" />
          <stop offset="0.5" stopColor="#F5B567" stopOpacity="0.9" />
          <stop offset="1" stopColor={GOLD_DEEP} stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="wc-crystal-refract" cx="0.6" cy="0.78" r="0.45">
          <stop offset="0" stopColor="#FFF9EE" stopOpacity="0.85" />
          <stop offset="1" stopColor="#FFF9EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wc-crystal-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#A8581A" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="wc-crystal-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.5" stopColor={GOLD} stopOpacity="0.14" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <filter id="wc-crystal-shadow" x="-80%" y="-80%" width="260%" height="260%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#8A4A16" floodOpacity="0.25" />
        </filter>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {BEADS.map((node, i) => {
          const rx = RING_RX[node.ring];
          const [x, y] = ringPoint(rx, node.angle);
          const dur = MOTION.orbitSeconds[node.ring];
          const reverse = node.ring === 1;
          const start = node.angle / 360;
          const begin = -dur * (reverse ? 1 - start : start);
          return (
            <g key={i} transform={run ? undefined : `translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
              <Crystal size={node.size} />
              {run && (
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${begin}s`}
                  repeatCount="indefinite"
                  path={ringPath(rx)}
                  {...(reverse && { keyPoints: "1;0", keyTimes: "0;1", calcMode: "linear" })}
                />
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
};

const DOTS = Array.from({ length: 26 }, (_, i) => {
  const a = (i * 137.5 * Math.PI) / 180;
  const r = 160 + ((i * 53) % 340);
  return [round(CX + r * Math.cos(a) * 1.02), round(CY + r * Math.sin(a) * RING_FLATTEN * 1.6), 0.8 + (i % 3) * 0.5] as const;
});

const TechnicalBackdrop = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1000 1000" aria-hidden {...props}>
    <defs>
      <linearGradient id="wc-axis-v" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#BFCAC6" stopOpacity="0" />
        <stop offset="0.5" stopColor="#BFCAC6" stopOpacity="0.45" />
        <stop offset="1" stopColor="#BFCAC6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="wc-axis-h" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#BFCAC6" stopOpacity="0" />
        <stop offset="0.5" stopColor="#BFCAC6" stopOpacity="0.7" />
        <stop offset="1" stopColor="#BFCAC6" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect x={CX - 0.5} y="110" width="1" height="780" fill="url(#wc-axis-v)" />
    <rect x="70" y={CY - 0.5} width="860" height="1" fill="url(#wc-axis-h)" />
    <g fill="#BFCAC6">
      {DOTS.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} opacity={0.35 + (i % 4) * 0.12} />
      ))}
    </g>
    <g stroke="#BFCAC6" strokeWidth="1" opacity="0.5">
      {([[212, 292], [790, 690], [860, 430], [150, 560]] as const).map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M${x - 5} ${y}h10M${x} ${y - 5}v10`} />
      ))}
    </g>
  </svg>
);

// ───── Cards ─────
const STAGE_ICONS = { award: Award, users: Users, zap: Zap, languages: Languages };
const MAIN_TILES = [
  { Icon: Stethoscope, label: "Medical" },
  { Icon: Scissors, label: "Surgical" },
  { Icon: Sparkles, label: "Cosmetic" },
  { Icon: Baby, label: "Pediatric" },
];

const StageCardBody = ({ index }: { index: number }) => {
  const stage = STAGES[index];
  const main = isMain(stage);
  const Icon = "icon" in stage && stage.icon ? STAGE_ICONS[stage.icon] : null;
  return (
    <div className="grid grid-cols-[1.35em_minmax(0,1fr)] items-start gap-x-[0.5em]">
      <span className="col-start-1 row-start-1 flex h-[1.64em] items-center text-[0.8em] font-medium tabular-nums text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="col-start-2 row-start-1 flex flex-wrap items-baseline justify-between gap-x-[0.6em]">
        <p className="m-0 font-display text-[1.12em] leading-[1.25] text-ink md:whitespace-nowrap">{stage.title}</p>
        {main && <span className="shrink-0 text-[0.68em] font-medium tracking-[0.14em] uppercase text-gold">At our core</span>}
      </div>
      {Icon && (
        <span className="col-start-1 row-start-2 mt-[0.4em] flex h-[1.276em] items-center">
          <Icon className="size-[1.15em] text-gold" strokeWidth={1.6} aria-hidden />
        </span>
      )}
      <div className={cn("col-start-2 row-start-2 mt-[0.4em]", main && "col-span-2 col-start-1 md:col-start-2 md:col-span-1")}>
        <p className="m-0 text-[0.88em] leading-[1.45] text-muted">{stage.items.join(" · ")}</p>
        {main && (
          <div className="wc-stage-tiles mt-[0.75em] flex gap-[0.45em]">
            {MAIN_TILES.map(({ Icon: T, label }) => (
              <span key={label} title={label} className="grid size-[2.15em] place-items-center rounded-[0.55em] border border-line bg-white shadow-[0_1px_2px_rgb(15_34_41/0.06)]">
                <T className="size-[1.1em] text-ink" strokeWidth={1.5} aria-hidden />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const pct = (n: number) => `${(n / ARTBOARD) * 100}%`;
const cardDirection = (index: number) => (STAGES[index].side === "left" ? -1 : 1);

const StageCard = ({ index, progress, open, lit, onHover }: { index: number; progress: MotionValue<number>; open: boolean; lit: boolean; onHover: (i: number | null) => void }) => {
  const opacity = useTransform(progress, [0.35, 0.9], [0, 1]);
  const x = useTransform(progress, [0, 1], [-cardDirection(index) * STAGE_CARDS.restInset, cardDirection(index) * STAGE_CARDS.outward]);
  const stage = STAGES[index];
  const { edge, width } = STAGE_CARDS[stage.side];
  const left = stage.side === "left" ? edge : 100 - edge - width;
  return (
    <li style={{ top: pct(cornerY(index)), left: `${left}%`, width: `${width}%` }} className="absolute -translate-y-1/2">
      <m.div
        style={{ opacity, x }}
        onPointerEnter={(e: ReactPointerEvent) => e.pointerType === "mouse" && onHover(index)}
        onPointerLeave={() => onHover(null)}
        className={cn("wc-stage-card px-[0.9em] py-[0.85em]", open && "pointer-events-auto", lit && "wc-stage-card-lit")}
      >
        <StageCardBody index={index} />
      </m.div>
    </li>
  );
};

const StageCards = ({ progress, open, hovered, onHover }: { progress: MotionValue<number>; open: boolean; hovered: number | null; onHover: (i: number | null) => void }) => (
  <ul aria-label="Why patients choose Oceanside" aria-hidden={!open} className="pointer-events-none absolute inset-0 m-0 hidden list-none p-0 text-[clamp(10px,1.7cqw,15px)] md:block">
    {STAGES.map((stage, i) => (
      <StageCard key={stage.title} index={i} progress={progress} open={open} lit={hovered === i} onHover={onHover} />
    ))}
  </ul>
);

const lineEnds = (plate: number, card: number, side: "left" | "right") => {
  const dir = side === "right" ? 1 : -1;
  return { plateX: plate + dir * 7, nodeX: card - dir * 10 };
};

const StageConnector = ({ plate, card, y, side, index, main, lit, active, progress, className }: {
  plate: number; card: number; y: number; side: "left" | "right"; index: number; main: boolean; lit: boolean; active: boolean; progress: MotionValue<number>; className?: string;
}) => {
  const show = useTransform(progress, [0.55, 0.9], [0, 1]);
  const t = useMotionValue(0);
  const { plateX, nodeX } = lineEnds(plate, card, side);
  const beadX = useTransform(t, (k) => nodeX + (plateX - nodeX) * k);
  const beadOpacity = useTransform([t, show], ([k, s]: number[]) => s * Math.sin(Math.PI * k));
  useEffect(() => {
    if (!active) return;
    const controls = animate(t, [0, 1], { duration: STAGE_CARDS.beadSeconds, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.4, delay: 0.5 + index * 0.25 });
    return () => {
      controls.stop();
      t.set(0);
    };
  }, [active, index, t]);
  return (
    <m.svg aria-hidden viewBox={`0 0 ${ARTBOARD} ${ARTBOARD}`} style={{ opacity: show }} className={className}>
      <line x1={plateX} x2={nodeX} y1={y} y2={y} stroke="#C9D2CF" strokeWidth="1" />
      <m.line x1={plateX} x2={nodeX} y1={y} y2={y} stroke={GOLD} strokeWidth="1.2" initial={false} animate={{ opacity: lit ? 0.9 : 0 }} transition={{ duration: 0.25 }} />
      <circle cx={plateX} cy={y} r="2.6" fill="#9AA6A3" />
      <m.circle cx={nodeX} cy={y} r={main ? 10 : 8} fill={GOLD} initial={false} animate={{ opacity: lit || main ? 0.25 : 0.14 }} transition={{ duration: 0.25 }} />
      <circle cx={nodeX} cy={y} r="3.6" fill={GOLD} />
      <m.circle cx={beadX} cy={y} r="2.6" fill={GOLD} style={{ opacity: beadOpacity }} />
    </m.svg>
  );
};

const StageConnectors = ({ progress, active, hovered }: { progress: MotionValue<number>; active: boolean; hovered: number | null }) => (
  <div className="pointer-events-none absolute inset-0 hidden md:block">
    {STAGES.map((stage, i) => {
      const { edge, width } = STAGE_CARDS[stage.side];
      const cardEdge = stage.side === "left" ? (edge + width) * 10 : (100 - edge - width) * 10;
      return (
        <StageConnector
          key={stage.title}
          plate={tipX(i, stage.side)}
          card={cardEdge}
          y={cornerY(i)}
          side={stage.side}
          index={i}
          main={isMain(stage)}
          lit={hovered === i}
          active={active}
          progress={progress}
          className="pointer-events-none absolute inset-0 size-full overflow-visible"
        />
      );
    })}
  </div>
);

// On phones the cards sit below the visual as a list.
const StageList = ({ reduce }: { reduce: boolean }) => (
  <m.ul
    initial={reduce ? false : { opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
    aria-label="Why patients choose Oceanside"
    className="m-0 mt-2 grid list-none grid-cols-1 gap-2.5 p-0 text-[14px] sm:grid-cols-2 md:hidden"
  >
    {STAGES.map((stage, i) => (
      <li key={stage.title} className="wc-stage-card px-[1.05em] py-[0.95em]">
        <StageCardBody index={i} />
      </li>
    ))}
  </m.ul>
);

// ───── The visual ─────
const subscribeToVisibility = (onChange: () => void) => {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
};

const ParallaxLayer = ({ x, y, reach, children }: { x: MotionValue<number>; y: MotionValue<number>; reach: number; children: ReactNode }) => {
  const tx = useTransform(x, (v) => v * reach);
  const ty = useTransform(y, (v) => v * reach);
  return (
    <m.div style={{ x: tx, y: ty }} className="pointer-events-none absolute inset-0">
      {children}
    </m.div>
  );
};

const Tilted = ({ rotateX, rotateY, children }: { rotateX: MotionValue<number>; rotateY: MotionValue<number>; children: ReactNode }) => (
  <div className="pointer-events-none absolute inset-0 [perspective:1400px]">
    <m.div style={{ rotateX, rotateY }} className="absolute inset-0">
      <div className="wc-float absolute inset-0">{children}</div>
    </m.div>
  </div>
);

const CoreVisual = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const pointerType = useRef("mouse");
  const visualRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const onScreen = useInView(visualRef, { margin: "40px" });
  const pageVisible = useSyncExternalStore(subscribeToVisibility, () => !document.hidden, () => true);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 55, damping: 18, mass: 0.9 });
  const y = useSpring(py, { stiffness: 55, damping: 18, mass: 0.9 });
  const rotateY = useTransform(x, (v) => v * MOTION.tiltDegrees);

  const target = useMotionValue(0);
  const progress = useSpring(target, reduce ? { duration: 0.01 } : EXPLODE.spring);
  const rotateX = useTransform([y, progress], ([v, p]: number[]) => v * -MOTION.tiltDegrees + p * 4);
  const restOpacity = useTransform(progress, [0, 0.04], [1, 0]);
  const explodedOpacity = useTransform(progress, [0, 0.03], [0, 1]);
  const shadowOpacity = useTransform(progress, [0, 1], [1, 0.55]);
  const orbitOpacity = useTransform(progress, [0, 0.6], [1, MOTION.orbitOpenOpacity]);
  const hintOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  const beadsPaused = open || !onScreen || !pageVisible;

  useEffect(() => {
    target.set(open ? 1 : 0);
  }, [open, target]);

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - box.left) / box.width - 0.5) * 2);
    py.set(((e.clientY - box.top) / box.height - 0.5) * 2);
  };
  const handlePointerLeave = () => {
    px.set(0);
    py.set(0);
    setOpen(false);
  };
  const handleCardHover = (index: number | null) => {
    setHovered(index);
    if (index !== null && !reduce) setOpen(true);
  };

  return (
    <>
      <div
        ref={visualRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="wc-enter @container relative -my-[6%] -ml-[12.5%] aspect-square w-[125%] max-w-none md:mx-auto md:my-0 md:w-full md:max-w-[840px] lg:mx-0 lg:w-[104%] lg:max-w-none"
      >
        <div className="absolute inset-0">
          <div aria-hidden className="wc-halo pointer-events-none absolute inset-[6%]" />
          <div className="wc-fade-edge absolute inset-0">
            <ParallaxLayer x={x} y={y} reach={-MOTION.backdropParallax}>
              <DepthBackdrop className="absolute inset-0 size-full overflow-visible" />
              <TechnicalBackdrop className="absolute inset-0 size-full overflow-visible" />
            </ParallaxLayer>
          </div>
          <ParallaxLayer x={x} y={y} reach={MOTION.ringParallax}>
            <m.div style={{ opacity: orbitOpacity }} className="absolute inset-0">
              <OrbitalSystem className="absolute inset-0 size-full overflow-visible" />
              <Particles half="back" animate={!reduce} paused={beadsPaused} className="absolute inset-0 size-full overflow-visible" />
            </m.div>
          </ParallaxLayer>
          <m.div style={{ opacity: shadowOpacity }} className="absolute inset-0">
            <CoreShadow className="pointer-events-none absolute inset-0 size-full overflow-visible" />
          </m.div>
          <Tilted rotateX={rotateX} rotateY={rotateY}>
            <m.div style={{ opacity: restOpacity }} className="absolute inset-0">
              <CoreObject className="absolute inset-0 size-full overflow-visible" />
            </m.div>
            <m.div style={{ opacity: explodedOpacity }} className="absolute inset-0">
              <ExplodedCore progress={progress} className="absolute inset-0 size-full overflow-visible" />
            </m.div>
            <StageConnectors progress={progress} active={open && !reduce} hovered={hovered} />
          </Tilted>
          <ParallaxLayer x={x} y={y} reach={MOTION.ringParallax}>
            <m.div style={{ opacity: orbitOpacity }} className="absolute inset-0">
              <Particles half="front" animate={!reduce} paused={beadsPaused} className="absolute inset-0 size-full overflow-visible" />
            </m.div>
          </ParallaxLayer>
          <Tilted rotateX={rotateX} rotateY={rotateY}>
            <StageCards progress={progress} open={open} hovered={hovered} onHover={handleCardHover} />
          </Tilted>
        </div>

        <m.p
          aria-hidden
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute left-1/2 top-[84%] m-0 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap text-[13px] text-muted"
        >
          <MousePointer2 className="size-3.5 text-gold" strokeWidth={1.8} />
          <span className="[@media(hover:none)]:hidden">Hover to see what sets us apart</span>
          <span className="hidden [@media(hover:none)]:inline">Tap to see what sets us apart</span>
        </m.p>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Show what sets Oceanside apart"
          onPointerDown={(e) => (pointerType.current = e.pointerType)}
          onPointerEnter={(e) => e.pointerType === "mouse" && !reduce && setOpen(true)}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            if (e.detail === 0 || pointerType.current !== "mouse") setOpen((v) => !v);
          }}
          onBlur={() => setOpen(false)}
          className="absolute left-[22%] top-[30%] h-[44%] w-[56%] cursor-pointer rounded-[3rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        />
      </div>
      <StageList reduce={reduce} />
    </>
  );
};

// ───── Floor grid with a gold spotlight that follows the cursor ─────
const CELL = { w: 84, h: 48 };
const FloorGrid = ({ id, stroke = "#D3DBD8", strokeWidth = 0.8, ...props }: SVGProps<SVGSVGElement> & { id: string; stroke?: string; strokeWidth?: number }) => (
  <svg aria-hidden width="100%" height="100%" {...props}>
    <defs>
      <pattern id={id} width={CELL.w} height={CELL.h} patternUnits="userSpaceOnUse">
        <path
          d={`M0 ${CELL.h / 2}L${CELL.w / 2} 0L${CELL.w} ${CELL.h / 2}M0 ${CELL.h / 2}L${CELL.w / 2} ${CELL.h}L${CELL.w} ${CELL.h / 2}`}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

const SPOT = 340;
const Floor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const litRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const spot = spotRef.current;
    const lit = litRef.current;
    const section = el?.parentElement;
    if (!el || !spot || !lit || !section) return;
    const resize = new ResizeObserver(([entry]) => {
      lit.style.width = `${entry.contentRect.width}px`;
      lit.style.height = `${entry.contentRect.height}px`;
    });
    resize.observe(section);
    let frame = 0;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = section.getBoundingClientRect();
        const x = e.clientX - box.left - SPOT / 2;
        const y = e.clientY - box.top - SPOT / 2;
        spot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        lit.style.transform = `translate3d(${-x}px, ${-y}px, 0)`;
        el.dataset.spot = "on";
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      el.dataset.spot = "off";
    };
    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
    };
  }, []);
  return (
    <div ref={ref} aria-hidden data-spot="off" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <FloorGrid id="wc-floor-cell" className="wc-floor absolute inset-0" />
      <div ref={spotRef} style={{ width: SPOT, height: SPOT }} className="wc-floor-spot">
        <div ref={litRef} className="wc-floor-lit">
          <FloorGrid id="wc-floor-cell-lit" stroke={GOLD} strokeWidth={1} className="block size-full" />
        </div>
      </div>
    </div>
  );
};

// ───── Section ─────
export default function WhyCore({ appointmentHref }: { appointmentHref: string }) {
  const vars = { "--wc-float": MOTION.floatDistance, "--wc-float-seconds": `${MOTION.floatSeconds}s` } as CSSProperties;
  return (
    <LazyMotion features={domAnimation}>
      <style>{BLOCK_CSS}</style>
      <div style={vars} className="wc-root relative isolate overflow-x-clip">
        <Floor />
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">
              <span className="rule-gold" />Why Oceanside
            </p>
            <h2 className="mt-7 text-[2.4rem] leading-[1.15] sm:text-5xl lg:text-[3.3rem]">
              Five layers of care,
              <br />
              <span className="text-gold">one trusted dermatologist</span>
            </h2>
            <p className="mt-7 max-w-[30rem] text-[1.05rem] leading-[1.7] text-body">
              Every visit rests on the same foundation: board-certified training, experience with every skin
              type and age, and complete medical, surgical and cosmetic care in one place.
            </p>
            <div className="mt-9">
              <a href={appointmentHref} className="btn-appt">
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
          <CoreVisual />
        </div>
      </div>
    </LazyMotion>
  );
}
