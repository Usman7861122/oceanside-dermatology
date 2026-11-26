// Content for the structural pages: Services index, category pages and group pages.
// Category intros are taken from the old site's category pages (oceansidederm.com).

export const servicesIndex = {
  title: "Dermatology Services",
  accent: "in Torrance, CA",
  lede: "Medical, surgical, cosmetic, pediatric and virtual dermatology, all in one calm, welcoming practice.",
  description:
    "Explore dermatology services at Oceanside Dermatology & Aesthetics in Torrance, CA: medical, surgical, cosmetic and pediatric dermatology, plus teledermatology.",
  image: "/images/services/index/services-hero.webp",
  imageAlt: "Bright, elegant clinic lounge with soft daylight",
  intro: [
    "We offer expert, evidence-based care for the full spectrum of skin, hair and nail conditions in patients of all ages and all skin types.",
    "Whether you are seeking medical, surgical or cosmetic dermatology, we provide comprehensive services in one convenient, welcoming setting.",
  ],
};

export const categoryContent: Record<string, {
  title: string; accent: string; lede: string; description: string; image: string; imageAlt: string;
  introTitle: string; introAccent: string; intro: string[];
}> = {
  "medical-dermatology": {
    title: "Medical Dermatology",
    accent: "in Torrance, CA",
    lede: "Expert diagnosis and treatment for skin, hair and nail conditions, for every age and every skin type.",
    description:
      "Board-certified medical dermatology in Torrance, CA: acne, eczema, psoriasis, rosacea, hair loss, rashes, skin infections, growths and skin cancer screenings.",
    image: "/images/services/index/medical-hero.webp",
    imageAlt: "Dermatologist gently examining a young woman's facial skin",
    introTitle: "Comprehensive care for",
    introAccent: "all skin types",
    intro: [
      "Our medical dermatology services are grounded in expert training and a deep understanding of the full spectrum of skin health. Dr. Sandhu's experience at Harbor-UCLA and UCSF exposed her to a wide range of conditions across all skin types, in both adults and children.",
      "We diagnose and treat a wide variety of skin, hair and nail disorders, such as acne, eczema, psoriasis, hair loss, rashes and nail changes. Whether your concern is common or complex, we provide thoughtful, personalized care with a focus on long-term skin health.",
    ],
  },
};

export const groupContent: Record<string, {
  title: string; accent: string; lede: string; description: string; image: string; imageAlt: string;
  intro: string[]; approach: string; stats: { value: string; label: string }[];
  headTitle?: string; headAccent?: string;
}> = {
  "medical-dermatology/acne-and-inflammation": {
    title: "Acne & Inflammation",
    accent: "Care in Torrance, CA",
    lede: "Calm, clear skin for breakouts, redness, rashes and flares, at every age.",
    description:
      "Treatment for acne, rosacea, eczema, psoriasis, contact, perioral and seborrheic dermatitis, and hidradenitis suppurativa in Torrance, CA.",
    image: "/images/services/index/acne-inflammation-hero.webp",
    imageAlt: "Close-up of calm, smooth facial skin",
    intro: [
      "Many common skin problems share one root: inflammation. It can show up as breakouts, redness, itchy rashes or scaly patches, and it often comes and goes in flares.",
      "Dr. Sandhu diagnoses the exact cause, then builds a plan that calms your skin now and helps keep it calm over time.",
    ],
    approach: "Thoughtful, personalized care with a focus on long-term skin health.",
    stats: [
      { value: "8", label: "Conditions treated" },
      { value: "All ages", label: "From newborns to adults" },
    ],
  },
  "medical-dermatology/pigment": {
    title: "Pigment",
    accent: "Care in Torrance, CA",
    headTitle: "Even, radiant",
    headAccent: "skin tone",
    lede: "Expert care for dark spots, melasma and white patches, for every skin type.",
    description:
      "Treatment for melasma, hyperpigmentation, vitiligo and other pigmentary disorders in Torrance, CA, with care for all skin types, including skin of color.",
    image: "/images/services/index/pigment-hero.webp",
    imageAlt: "Woman with radiant, even skin gently touching her face",
    intro: [
      "Pigment gives skin its color. When there is too much, too little, or it is uneven, you may see dark spots, patches or white areas.",
      "Dr. Sandhu's experience at Harbor-UCLA and UCSF covered all skin types, including skin of color. She finds the cause first, then chooses care that is safe for your skin.",
    ],
    approach: "Thoughtful, personalized care with a focus on long-term skin health.",
    stats: [
      { value: "4", label: "Conditions treated" },
      { value: "All skin types", label: "Including skin of color" },
    ],
  },
  "medical-dermatology/hair-and-nails": {
    title: "Hair & Nails",
    accent: "Care in Torrance, CA",
    headTitle: "Healthy hair,",
    headAccent: "strong nails",
    lede: "Expert care for thinning hair, hair loss and nail problems, for women, men and children.",
    description:
      "Treatment for hair loss (alopecia), nail disorders and nail fungus in Torrance, CA, including PRP for hair loss.",
    image: "/images/services/index/hair-nails-hero.webp",
    imageAlt: "Woman gracefully showing her hands with smooth skin and natural nails",
    intro: [
      "Hair and nails grow from the skin, so many hair and nail problems are best treated by a dermatologist.",
      "Dr. Sandhu finds the cause of thinning hair, bald patches or changing nails, then builds a plan to help them grow back healthy.",
    ],
    approach: "Thoughtful, personalized care with a focus on long-term skin health.",
    stats: [
      { value: "3", label: "Conditions treated" },
      { value: "PRP", label: "Offered for hair loss" },
    ],
  },
  "medical-dermatology/rashes-and-irritation": {
    title: "Rashes & Irritation",
    accent: "Care in Torrance, CA",
    headTitle: "Calm, comfortable",
    headAccent: "skin again",
    lede: "Relief for rashes, hives, itching, dry skin and more, for adults and children.",
    description:
      "Treatment for rashes, hives, allergic reactions, itching, dry skin, excessive sweating, folliculitis and insect bites in Torrance, CA.",
    image: "/images/services/index/rashes-hero.webp",
    imageAlt: "Calm woman with clear, even skin against a white background",
    intro: [
      "Red, itchy or irritated skin can have many causes, from allergies and dry air to infections and sweat.",
      "Dr. Sandhu finds what is behind your symptoms, brings quick relief and helps keep them from coming back. New rashes can also be checked by video visit.",
    ],
    approach: "Thoughtful, personalized care with a focus on long-term skin health.",
    stats: [
      { value: "8", label: "Conditions treated" },
      { value: "Video visits", label: "For new rashes" },
    ],
  },
};
