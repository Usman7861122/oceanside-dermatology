// Full service structure, taken from the old site's five category pages
// (oceansidederm.com: medical, surgical, cosmetic, pediatric, teledermatology).
// Used by the Services mega menu now, and by the service and condition pages later.
// Links point to the planned page routes.

export type MenuItem = { label: string; href: string };
export type MenuGroup = { title: string; items: MenuItem[] };
export type MenuCategory = {
  title: string;
  slug: string;
  href: string;
  blurb: string;
  image: string;
  imageAlt: string;
  groups: MenuGroup[];
  // Optional short "how it works" steps, shown in the mega menu for categories with few items.
  steps?: { title: string; text: string }[];
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const items = (base: string, labels: string[]): MenuItem[] => labels.map((label) => ({ label, href: `${base}/${slug(label)}` }));

export const groupSlug = (title: string) => slug(title);
export const groupHref = (category: MenuCategory, group: MenuGroup) => `${category.href}/${slug(group.title)}`;

export const serviceMenu: MenuCategory[] = [
  {
    title: "Medical Dermatology",
    slug: "medical-dermatology",
    href: "/medical-dermatology",
    blurb: "Expert care for skin, hair and nail conditions, for every skin type.",
    image: "/images/services/medical.webp",
    imageAlt: "Dr. Sophia Sandhu examining a patient's skin near his ear",
    groups: [
      { title: "Acne & Inflammation", items: items("/medical-dermatology", ["Acne", "Rosacea", "Eczema", "Psoriasis", "Contact Dermatitis", "Perioral Dermatitis", "Hidradenitis Suppurativa", "Seborrheic Dermatitis"]) },
      { title: "Pigment", items: items("/medical-dermatology", ["Melasma", "Hyperpigmentation", "Vitiligo", "Pigmentary Disorders"]) },
      { title: "Hair & Nails", items: items("/medical-dermatology", ["Hair Loss (Alopecia)", "Nail Disorders", "Nail Fungus"]) },
      { title: "Rashes & Irritation", items: items("/medical-dermatology", ["Rashes", "Hives", "Allergic Reactions", "Itching (Pruritus)", "Dry Skin (Xerosis)", "Excessive Sweating", "Folliculitis", "Insect Bites"]) },
      { title: "Skin Infections", items: items("/medical-dermatology", ["Warts", "Herpes", "Shingles", "Fungal Infections", "Bacterial Infections"]) },
      { title: "Growths & Skin Cancer", items: items("/medical-dermatology", ["Skin Cancer Screenings", "Actinic Keratoses", "Moles", "Skin Tags", "Cysts", "Lipoma", "Angiomas", "Seborrheic Keratoses", "Keloids", "Scars"]) },
    ],
  },
  {
    title: "Surgical Dermatology",
    slug: "surgical-dermatology",
    href: "/surgical-dermatology",
    blurb: "Precise removal of skin cancers and growths, with natural-looking results.",
    image: "/images/practice/skin-check.webp",
    imageAlt: "Dr. Sophia Sandhu, wearing gloves, checking a patient's skin",
    groups: [
      { title: "Skin Cancer Treatment", items: items("/surgical-dermatology", ["Basal Cell Carcinoma", "Squamous Cell Carcinoma", "Melanoma", "Precancerous Lesions"]) },
      { title: "Procedures", items: items("/surgical-dermatology", ["Excisions", "Electrodesiccation and Curettage", "Cryosurgery", "Incision and Drainage"]) },
      { title: "Removals & Repair", items: items("/surgical-dermatology", ["Benign Growth Removal", "Cyst and Lipoma Removal", "Earlobe Repair"]) },
    ],
  },
  {
    title: "Cosmetic Dermatology",
    slug: "cosmetic-dermatology",
    href: "/cosmetic-dermatology",
    blurb: "Less is more. Natural beauty, thoughtfully enhanced.",
    image: "/images/services/injectables.webp",
    imageAlt: "Smiling woman with smooth, radiant skin framing her face with her hands",
    groups: [
      { title: "Injectables", items: items("/cosmetic-dermatology", ["Botox & Dysport", "Hyaluronic Acid Fillers", "Sculptra"]) },
      { title: "Lasers & Light", items: items("/cosmetic-dermatology", ["M22 Stellar IPL", "UltraClear Laser", "ResurFX", "Q-Switched Nd:YAG", "Multi-Spot Nd:YAG"]) },
      { title: "Skin Rejuvenation", items: items("/cosmetic-dermatology", ["Fractional Laser Resurfacing", "Medical-Grade Microneedling", "Chemical Peels", "Acne Scar Treatment", "Scar Treatment"]) },
      { title: "Spots, Veins & Redness", items: items("/cosmetic-dermatology", ["Sun Spots & Sun Damage", "Rosacea & Redness", "Facial & Leg Veins", "Tattoo Removal"]) },
      { title: "Growth Removal", items: items("/cosmetic-dermatology", ["Sebaceous Hyperplasia", "Skin Tags", "Moles", "Seborrheic Keratoses", "Dermatosis Papulosa Nigra", "Angiomas"]) },
      { title: "Hair", items: items("/cosmetic-dermatology", ["PRP for Hair Loss"]) },
    ],
  },
  {
    title: "Pediatric Dermatology",
    slug: "pediatric-dermatology",
    href: "/pediatric-dermatology",
    blurb: "Gentle, board-certified care from newborns to teens.",
    image: "/images/services/pediatric.webp",
    imageAlt: "Smiling doctor talking with a mother and her young daughter",
    groups: [
      { title: "Common Conditions", items: items("/pediatric-dermatology", ["Atopic Dermatitis & Eczema", "Acne", "Psoriasis", "Rashes", "Insect Bites"]) },
      { title: "Infections & Growths", items: items("/pediatric-dermatology", ["Warts", "Molluscum", "Impetigo & Bacterial Infections", "Fungal Infections"]) },
      { title: "Hair", items: items("/pediatric-dermatology", ["Alopecia Areata"]) },
    ],
  },
  {
    title: "Teledermatology",
    slug: "teledermatology",
    href: "/teledermatology",
    blurb: "Secure video visits with a board-certified dermatologist, from home.",
    image: "/images/services/teledermatology.webp",
    imageAlt: "Patient speaking with her doctor on a video call at home",
    groups: [
      { title: "Virtual Visits For", items: items("/teledermatology", ["New Rashes", "Acne", "Eczema", "Follow-Up Care"]) },
    ],
    steps: [
      { title: "Request a visit", text: "Book an online appointment that fits your day." },
      { title: "Meet by secure video", text: "See a board-certified dermatologist from home." },
      { title: "Get your care plan", text: "Leave with clear next steps and follow-up care." },
    ],
  },
];
