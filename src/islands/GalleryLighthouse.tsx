// Gallery page grid: topic filter + the Lighthouse gallery (a slow beam lights the photos,
// the pointer acts as a torch). Clicking a photo opens the page's lightbox through a
// "gallery:open" window event, so the beam never stays parked on one tile.
// Unlit tiles use the site ink (not a color pulled from each photo) to keep the palette to ink + orange.
import * as React from "react";
import { LighthouseGallery } from "@/components/ui/lighthouse-gallery";
import type { GalleryPhoto } from "@/data/gallery";

interface Props {
  photos: GalleryPhoto[];
  topics: { key: string; label: string }[];
}

function useColumns() {
  const [cols, setCols] = React.useState(4);
  React.useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const sm = window.matchMedia("(min-width: 640px)");
    const update = () => setCols(lg.matches ? 4 : sm.matches ? 3 : 2);
    update();
    lg.addEventListener("change", update);
    sm.addEventListener("change", update);
    return () => { lg.removeEventListener("change", update); sm.removeEventListener("change", update); };
  }, []);
  return cols;
}

export default function GalleryLighthouse({ photos, topics }: Props) {
  const [filter, setFilter] = React.useState("all");
  const columns = useColumns();
  const list = React.useMemo(
    () => photos.map((p, i) => ({ p, i })).filter(({ p }) => filter === "all" || p.topic === filter),
    [photos, filter],
  );
  const items = React.useMemo(() => list.map(({ p }) => ({ src: p.src, alt: p.alt, title: p.title, color: "#183842" })), [list]);
  const count = (key: string) => photos.filter((p) => p.topic === key).length;

  const open = (index: number) => {
    window.dispatchEvent(new CustomEvent("gallery:open", { detail: { list: list.map((x) => x.i), pos: index } }));
  };

  const filters = [{ key: "all", label: "All", n: photos.length }, ...topics.map((t) => ({ ...t, n: count(t.key) }))];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={`inline-flex items-center gap-2 rounded-[3px] border px-4 py-2.5 text-[0.78rem] tracking-[0.08em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              filter === f.key ? "border-gold bg-gold text-ink" : "border-white/20 text-white/85 hover:border-gold hover:text-white"
            }`}
          >
            {f.label} <span className={`text-[0.68rem] ${filter === f.key ? "text-ink/70" : "text-white/45"}`}>{f.n}</span>
          </button>
        ))}
      </div>

      <LighthouseGallery
        key={filter}
        items={items}
        columns={columns}
        gap={columns === 2 ? 8 : 14}
        origin="top-left"
        sweepDuration={9000}
        beamWidth={26}
        afterglow={2200}
        peek={0.3}
        torch
        torchRadius={220}
        selected={null}
        onSelect={(index) => open(index)}
        className="mt-10 rounded-[var(--radius-photo)] border-white/10 bg-white/[0.03] p-3 sm:p-5"
      />
    </div>
  );
}
