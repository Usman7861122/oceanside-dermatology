// Gallery page photos. Uses photos already on the site (no placeholders, none on the swap list).
// Photos of people are licensed stock models, not patients.
export const galleryTopics = [
  { key: "practice", label: "Our Practice" },
  { key: "care", label: "Care & Consultations" },
  { key: "skin", label: "Healthy Skin" },
  { key: "southbay", label: "The South Bay" },
] as const;
export type GalleryTopic = (typeof galleryTopics)[number]["key"];

export interface GalleryPhoto { src: string; alt: string; title: string; topic: GalleryTopic; big?: boolean }

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/images/about/hero-lounge.webp", alt: "Bright, calm patient lounge with soft seating and plants", title: "A calm place to wait", topic: "practice", big: true },
  { src: "/images/about/dr-sandhu-portrait.webp", alt: "Dr. Sophia Sandhu in her white coat, smiling", title: "Dr. Sophia Sandhu, MD, FAAD", topic: "care" },
  { src: "/images/gallery/dewy-skin.webp", alt: "Woman with dewy, glowing skin resting her chin on her hand", title: "Subtle, natural results", topic: "skin" },
  { src: "/images/about/treatment-room.webp", alt: "Clean, modern treatment room with a white exam chair", title: "Private treatment rooms", topic: "practice" },
  { src: "/images/about/consultation.webp", alt: "Patient talking with a dermatologist during a relaxed consultation", title: "Time to talk it through", topic: "care" },
  { src: "/images/gallery/glow.webp", alt: "Close portrait of a woman with smooth, even skin", title: "Healthy, even skin", topic: "skin" },
  { src: "/images/south-bay-pier.webp", alt: "South Bay pier stretching into the ocean at sunset", title: "Close to home", topic: "southbay", big: true },
  { src: "/images/gallery/skincare-ritual.webp", alt: "Skincare jar, tube and serum on a marble tray", title: "Medical-grade skincare", topic: "practice" },
  { src: "/images/services/acne/exam.webp", alt: "Dermatologist examining a patient's skin with a dermatoscope", title: "Careful skin exams", topic: "care" },
  { src: "/images/services/rosacea/hero.webp", alt: "Woman with clear, calm skin touching her jaw", title: "Calm, clear skin", topic: "skin" },
  { src: "/images/services/index/services-hero.webp", alt: "Bright clinic hallway with soft curtains", title: "A bright, modern clinic", topic: "practice" },
  { src: "/images/services/teledermatology.webp", alt: "Patient on a video visit with a dermatologist", title: "Video visits from home", topic: "care" },
  { src: "/images/testimonials-portrait.webp", alt: "Woman with smooth, radiant skin resting her cheek on her hand", title: "Confidence in your skin", topic: "skin", big: true },
  { src: "/images/services/hair-loss/two.webp", alt: "Dermatologist reviewing a scalp image with a patient", title: "Hair and scalp care", topic: "care" },
  { src: "/images/gallery/treatment-room.webp", alt: "Calm treatment room with a skincare bed", title: "Comfort first", topic: "practice" },
  { src: "/images/services/cysts/hero.webp", alt: "Smiling woman with fresh, healthy skin", title: "Feeling like yourself", topic: "skin" },
  { src: "/images/services/hidradenitis-suppurativa/two.webp", alt: "Doctor and patient talking in a bright office", title: "Care that listens", topic: "care" },
  { src: "/images/services/index/rashes-hero.webp", alt: "Woman with soft, healthy skin in natural light", title: "Comfortable skin", topic: "skin" },
  { src: "/images/palos-verdes-coast.webp", alt: "Palos Verdes coastline at sunset", title: "Serving the South Bay", topic: "southbay" },
  { src: "/images/services/shingles/hero.webp", alt: "Dermatologist gently checking a smiling patient's face", title: "Gentle, thorough checks", topic: "care" },
  { src: "/images/services/actinic-keratoses/two.webp", alt: "Smiling woman in a sun hat applying sunscreen", title: "Sun care, every day", topic: "skin" },
  { src: "/images/services/vitiligo/two.webp", alt: "Dermatologist showing a patient results on a tablet", title: "Clear explanations", topic: "care" },
  { src: "/images/services/melasma/two.webp", alt: "Woman with an even, glowing complexion in warm light", title: "An even complexion", topic: "skin" },
  { src: "/images/services/pigmentary-disorders/hero.webp", alt: "Woman with smooth, healthy skin touching her cheek", title: "Long-term skin health", topic: "skin" },
];
