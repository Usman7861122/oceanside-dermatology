// Local SEO: the practice city and the nearby communities it serves.
// Ask the client to confirm this list.
export const localCity = "Torrance, CA";
export const localAreas = [
  "Torrance",
  "Redondo Beach",
  "Hermosa Beach",
  "Manhattan Beach",
  "Palos Verdes Estates",
  "Rancho Palos Verdes",
  "Rolling Hills Estates",
  "Lomita",
  "Gardena",
  "Carson",
  "El Segundo",
  "San Pedro",
];

type Kind = "service" | "condition" | "group" | "about";

export function localFor(topic: string, kind: Kind = "service") {
  const city = localCity;
  const lead =
    kind === "about"
      ? `Oceanside Dermatology & Aesthetics is a board-certified dermatology practice in ${city}, on Hawthorne Boulevard, caring for families across the South Bay.`
      : `Patients come to Oceanside Dermatology & Aesthetics in ${city} for ${topic.toLowerCase()} from across the South Bay.`;
  return {
    city,
    // One line for the hero of pages under Services, e.g. "Patients are welcome from across ..."
    nearby: `Patients are welcome from across Torrance, Redondo Beach, Hermosa Beach, Manhattan Beach, Palos Verdes and the greater South Bay.`,
    eyebrow: `Serving ${city.replace(", CA", "")} & the South Bay`,
    banner: `Board-certified dermatology in ${city}`,
    areas: localAreas,
    sectionTitle: kind === "about" ? `Your dermatologist in ${city}` : `${topic} in ${city}`,
    text: [
      lead,
      "Dr. Sandhu was born and raised in Southern California, and she is proud to care for her own community: patients of every age and every skin type, close to home.",
    ],
  };
}
