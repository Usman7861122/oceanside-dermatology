// Gallery page photos: professional photos of the practice (Nov 2026 shoot), plus two South Bay views.
export const galleryTopics = [
  { key: "practice", label: "Our Office" },
  { key: "care", label: "Care with Dr. Sandhu" },
  { key: "team", label: "Our Team" },
  { key: "southbay", label: "The South Bay" },
] as const;
export type GalleryTopic = (typeof galleryTopics)[number]["key"];

export interface GalleryPhoto { src: string; alt: string; title: string; topic: GalleryTopic; big?: boolean }

const p = (name: string) => `/images/practice/${name}.webp`;

export const galleryPhotos: GalleryPhoto[] = [
  { src: p("reception-sign"), alt: "Oceanside Dermatology & Aesthetics sign on the white reception wall", title: "Welcome to Oceanside", topic: "practice" },
  { src: p("exam-welcome"), alt: "Dr. Sophia Sandhu smiling while talking with a patient in an exam room", title: "A warm welcome", topic: "care" },
  { src: p("waiting-room"), alt: "Bright waiting room with curved wooden chairs, a round table and a pendant light", title: "Our waiting room", topic: "practice" },
  { src: p("front-desk-team"), alt: "Front desk team member smiling at the reception desk", title: "Friendly front desk", topic: "team" },
  { src: p("skin-exam"), alt: "Dr. Sandhu examining a patient's skin near his ear", title: "Careful skin exams", topic: "care" },
  { src: p("reception"), alt: "Reception desk with an olive tree and the Sophia Sandhu M.D. name", title: "Reception", topic: "practice" },
  { src: p("team-hallway"), alt: "Dr. Sandhu laughing with a team member in the hallway", title: "A close-knit team", topic: "team" },
  { src: p("exam-conversation"), alt: "Dr. Sandhu explaining a treatment plan to a patient", title: "Time to talk it through", topic: "care" },
  { src: p("waiting-room-2"), alt: "Waiting room with natural light and gold-accented chairs", title: "Calm and bright", topic: "practice" },
  { src: p("scalp-check"), alt: "Dr. Sandhu checking a smiling patient's scalp", title: "Hair and scalp care", topic: "care" },
  { src: p("front-desk-call"), alt: "Team member answering the phone at the front desk", title: "Here to help you book", topic: "team" },
  { src: p("skin-exam-face"), alt: "Dr. Sandhu examining a patient's face with a dermatoscope", title: "A closer look", topic: "care" },
  { src: p("front-desk"), alt: "Front desk with the Oceanside sign and a team member at work", title: "Our front desk", topic: "practice" },
  { src: p("treatment-explained"), alt: "Dr. Sandhu holding a treatment device and smiling in the exam room", title: "Clear explanations", topic: "care" },
  { src: p("team-chat"), alt: "Dr. Sandhu and a team member reviewing a tablet together", title: "Planning your visit", topic: "team" },
  { src: p("skin-check"), alt: "Dr. Sandhu, wearing gloves, checking a relaxed patient's skin", title: "Gentle, thorough care", topic: "care" },
  { src: p("waiting-room-tall"), alt: "Waiting room seating under a crystal pendant light", title: "Comfort from the start", topic: "practice" },
  { src: p("exam-plan"), alt: "Dr. Sandhu talking with a patient in a bright exam room", title: "Care that listens", topic: "care" },
  { src: p("front-desk-sign"), alt: "Reception desk under the Oceanside Dermatology & Aesthetics sign", title: "Easy check-in", topic: "team" },
  { src: p("skin-check-close"), alt: "Patient smiling during a skin check with Dr. Sandhu", title: "Relaxed visits", topic: "care" },
  { src: p("reception-wide"), alt: "Reception area with tall windows and an olive tree", title: "Light-filled reception", topic: "practice" },
  { src: p("team-hallway-tall"), alt: "Dr. Sandhu and a team member talking in the hallway", title: "Working together", topic: "team" },
  { src: "/images/south-bay-pier.webp", alt: "South Bay pier stretching into the ocean at sunset", title: "Close to home", topic: "southbay" },
  { src: "/images/palos-verdes-coast.webp", alt: "Palos Verdes coastline at sunset", title: "Serving the South Bay", topic: "southbay" },
];
