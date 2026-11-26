// About page content, taken from the old site's "Meet Our Doctor" page and home page.
import { site } from "./site";

export const aboutHero = {
  eyebrow: "About Oceanside",
  title: "About Dr. Sophia Sandhu,",
  accent: "Board-Certified Dermatologist in Torrance",
  lede: "Evidence-based medicine and warm, individual care for every age and every skin type.",
  description:
    "Meet Dr. Sophia Sandhu, MD, FAAD, a board-certified dermatologist in Torrance, CA. Harbor-UCLA Chief Resident with advanced training at UCSF, caring for the South Bay.",
  image: "/images/about/hero-lounge.webp",
  imageAlt: "Bright, calm waiting lounge with white chairs and soft daylight",
};

export const doctor = {
  name: site.doctor,
  role: "Board-Certified Dermatologist",
  languages: site.languages,
  image: "/images/about/dr-sandhu-portrait.webp",
  imageAlt: "Dr. Sophia Sandhu, board-certified dermatologist, smiling in her white coat",
  bio: [
    "Dr. Sandhu is a board-certified dermatologist with comprehensive expertise in medical, cosmetic and surgical dermatology. Born and raised in Southern California, she brings a deep understanding of the unique dermatologic needs of her community, along with a commitment to individualized, patient-centered care.",
    "She earned her Bachelor of Science in Psychobiology from UCLA, where she was a member of the College Honors Program and was inducted into both Alpha Lambda Delta and Phi Beta Kappa honor societies. She went on to receive her medical degree from Eastern Virginia Medical School and completed her internal medicine internship at Rush University Medical Center in Chicago.",
    "Drawn back to her roots, she returned to Southern California to complete her dermatology residency at Harbor-UCLA Medical Center, where she served as Chief Resident during her final year.",
    "Known for her warm and thoughtful approach, Dr. Sandhu is passionate about empowering patients to take charge of their skin health. She is dedicated to delivering evidence-based, customized care to help patients look and feel their best.",
  ],
  quote: "We treat every patient as we would a member of our own family, with compassion, respect and attention to detail.",
};

export const stats = [
  { value: "FAAD", label: "Board-certified Fellow of the American Academy of Dermatology" },
  { value: "Chief Resident", label: "Dermatology residency, Harbor-UCLA Medical Center" },
  { value: "3 languages", label: "English · Spanish · Punjabi" },
];

export const credentials = {
  // Her training path, in order.
  education: [
    { step: "Undergraduate", place: "UCLA", detail: "B.S. in Psychobiology, College Honors Program", note: "Phi Beta Kappa · Alpha Lambda Delta" },
    { step: "Medical School", place: "Eastern Virginia Medical School", detail: "Doctor of Medicine (MD)" },
    { step: "Internship", place: "Rush University Medical Center", detail: "Internal medicine, Chicago" },
    { step: "Residency", place: "Harbor-UCLA Medical Center", detail: "Dermatology", note: "Chief Resident, final year" },
  ],
  awards: [
    { org: "Women’s Dermatologic Society", title: "Mentorship Award", detail: "Allowed her to further her training in adult and pediatric complex medical dermatology at UCSF." },
    { org: "American Society for Dermatologic Surgery", title: "Preceptorship Award", detail: "Through which she gained advanced skills in cosmetic and surgical procedures." },
  ],
  memberships: [
    { mark: "AAD", name: "American Academy of Dermatology", note: "Fellow (FAAD)" },
    { mark: "ASDS", name: "American Society for Dermatologic Surgery", note: "Member" },
    { mark: "WDS", name: "Women’s Dermatologic Society", note: "Member" },
    { mark: "AMA", name: "American Medical Association", note: "Member" },
  ],
  research:
    "Dr. Sandhu has co-authored multiple peer-reviewed articles and has presented her research at regional and national dermatology conferences.",
};

export const approach = {
  title: "Our approach to your skin",
  image: "/images/about/consultation.webp",
  imageAlt: "Dermatologist and patient talking through a skin concern at a bright consultation desk",
  intro:
    "Our mission is to deliver exceptional, personalized dermatologic care with warmth, integrity and clinical excellence.",
  points: [
    { title: "Evidence-based", text: "High-quality, evidence-based medicine for the full spectrum of skin, hair and nail conditions." },
    { title: "Individualized", text: "Customized, patient-centered care that helps you look and feel your best." },
    { title: "Prevention & education", text: "A dedication to prevention, education and long-term skin health." },
    { title: "Every age, every skin type", text: "Patients of all ages and all skin types, from newborns to adults." },
  ],
};
