// About page content, taken from the old site's "Meet Our Doctor" page and home page.
import { site } from "./site";

export const aboutHero = {
  eyebrow: "About Oceanside",
  title: "About Oceanside Dermatology",
  accent: "& Aesthetics in Torrance",
  lede: "Where high-quality, evidence-based medicine meets compassionate, individualized care.",
  description:
    "Meet Dr. Sophia Sandhu, MD, FAAD, a board-certified dermatologist in Torrance, CA. Harbor-UCLA Chief Resident with advanced training at UCSF, caring for the South Bay.",
  image: "/images/practice/waiting-room-wide.webp",
  imageAlt: "Waiting room at Oceanside Dermatology & Aesthetics with curved wooden chairs and a pendant light",
};

export const doctor = {
  name: site.doctor,
  role: "Board-Certified Dermatologist",
  languages: site.languages,
  image: "/images/practice/exam-welcome.webp",
  imageAlt: "Dr. Sophia Sandhu smiling while talking with a patient in her Torrance exam room",
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
  image: "/images/practice/exam-conversation.webp",
  imageAlt: "Dr. Sophia Sandhu talking through a treatment plan with a patient",
  intro:
    "Our mission is to deliver exceptional, personalized dermatologic care with warmth, integrity and clinical excellence.",
  points: [
    { title: "Evidence-based", text: "High-quality, evidence-based medicine for the full spectrum of skin, hair and nail conditions." },
    { title: "Individualized", text: "Customized, patient-centered care that helps you look and feel your best." },
    { title: "Prevention & education", text: "A dedication to prevention, education and long-term skin health." },
    { title: "Every age, every skin type", text: "Patients of all ages and all skin types, from newborns to adults." },
  ],
};

// Dr. Sandhu page
export const drHero = {
  title: "Dr. Sophia Sandhu, MD, FAAD",
  accent: "Board-Certified Dermatologist",
  lede: "Born and raised in Southern California, now caring for her own community in Torrance.",
  description:
    "Meet Dr. Sophia Sandhu, MD, FAAD, a board-certified dermatologist in Torrance, CA. UCLA graduate, Harbor-UCLA Chief Resident, with advanced training at UCSF. Speaks English, Spanish and Punjabi.",
  image: "/images/about/dr-sandhu-hero.webp",
  imageAlt: "Dr. Sophia Sandhu smiling in her white coat",
};

export const focusAreas = [
  { title: "Medical Dermatology", text: "Skin, hair and nail conditions, from acne and eczema to skin cancer screenings.", href: "/medical-dermatology" },
  { title: "Surgical Dermatology", text: "Precise removal of skin cancers and growths, with natural-looking results.", href: "/surgical-dermatology" },
  { title: "Cosmetic Dermatology", text: "Less is more. Natural beauty, thoughtfully enhanced.", href: "/cosmetic-dermatology" },
  { title: "Pediatric Dermatology", text: "Gentle, board-certified care from newborns to teens.", href: "/pediatric-dermatology" },
];

export const languages = [
  { name: "English", native: "English" },
  { name: "Spanish", native: "Español" },
  { name: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

export const practiceWelcome = [
  "Welcome to Oceanside Dermatology & Aesthetics, where high-quality, evidence-based medicine meets compassionate, individualized care.",
  "We offer expert care for the full spectrum of skin, hair and nail conditions in patients of all ages and all skin types. Whether you are seeking medical, surgical or cosmetic dermatology, we provide comprehensive services in one convenient, welcoming setting.",
  "At the heart of our practice is a dedication to prevention, education and long-term skin health. We believe in creating lasting relationships with our patients through individualized, patient-centered care.",
];
