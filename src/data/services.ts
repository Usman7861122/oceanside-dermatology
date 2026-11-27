// The six services shown on the home page. Text is taken from the old site and tightened.
// `href` points at the future service pages.

export type Service = {
  title: string;
  kind: "Medical" | "Surgical" | "Cosmetic" | "Family" | "Virtual";
  image: string;
  alt: string;
  summary: string;
  treatments: string[];
  href: string;
};

export const services: Service[] = [
  {
    title: "Medical Dermatology",
    kind: "Medical",
    image: "/images/services/medical.webp",
    alt: "Dr. Sophia Sandhu talking with a patient in her exam room",
    summary:
      "Expert diagnosis and treatment for skin, hair and nail conditions, for every skin type.",
    treatments: ["Acne and rosacea", "Eczema and psoriasis", "Hair loss", "Melasma and pigment"],
    href: "/medical-dermatology",
  },
  {
    title: "Surgical & Skin Cancer",
    kind: "Surgical",
    image: "/images/practice/dr-gloves.webp",
    alt: "Dr. Sophia Sandhu, wearing gloves, in her exam room",
    summary:
      "Thorough skin cancer screenings and precise removal of growths, with natural-looking results.",
    treatments: ["Skin cancer screenings", "Basal cell, squamous cell, melanoma", "Mole, cyst and lipoma removal", "Earlobe repair"],
    href: "/surgical-dermatology",
  },
  {
    title: "Cosmetic Injectables",
    kind: "Cosmetic",
    image: "/images/services/injectables.webp",
    alt: "Smiling woman with smooth, radiant skin framing her face with her hands",
    summary:
      "Less is more. Subtle results that enhance your natural beauty, never change it.",
    treatments: ["Botox and Dysport", "Restylane and RHA fillers", "Sculptra", "PRP for hair loss"],
    href: "/cosmetic-dermatology",
  },
  {
    title: "Laser & Light",
    kind: "Cosmetic",
    image: "/images/services/laser.webp",
    alt: "Light-based facial treatment with protective eyewear",
    summary:
      "Advanced devices for tone, texture, redness and sun damage, including options safe for skin of color.",
    treatments: ["M22 Stellar IPL", "UltraClear and ResurFX", "Nd:YAG lasers", "Microneedling and peels"],
    href: "/cosmetic-dermatology",
  },
  {
    title: "Pediatric Dermatology",
    kind: "Family",
    image: "/images/services/pediatric.webp",
    alt: "Smiling doctor talking with a mother and her young daughter",
    summary:
      "Gentle, board-certified care for babies, children and teens. Bring the whole family.",
    treatments: ["Eczema", "Acne", "Warts and molluscum", "Alopecia areata"],
    href: "/pediatric-dermatology",
  },
  {
    title: "Teledermatology",
    kind: "Virtual",
    image: "/images/services/teledermatology.webp",
    alt: "Patient speaking with her doctor on a video call at home",
    summary:
      "Skip the waiting room. Secure video visits for new concerns and follow-up care.",
    treatments: ["New rashes", "Acne and eczema check-ins", "Follow-up visits", "Treatment plan updates"],
    href: "/teledermatology",
  },
];
