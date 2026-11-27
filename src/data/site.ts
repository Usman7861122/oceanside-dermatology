// Site wide info. Edit text here, not in the components.

export const site = {
  name: "Oceanside Dermatology & Aesthetics",
  shortName: "Oceanside",
  doctor: "Sophia Sandhu, MD, FAAD",
  doctorShort: "Dr. Sophia Sandhu",
  title: "Board-Certified Dermatologist in Torrance, CA | Oceanside Dermatology & Aesthetics",
  description:
    "Board-certified dermatologist Dr. Sophia Sandhu offers medical, surgical, cosmetic and pediatric dermatology in Torrance and the South Bay. Care for all ages and all skin types.",
  phone: "310-606-2106",
  phoneHref: "tel:+13106062106",
  fax: "310-564-4720",
  email: "info@oceansidederm.com",
  address: {
    street: "22330 Hawthorne Blvd, Ste F",
    city: "Torrance",
    region: "CA",
    zip: "90505",
  },
  mapsUrl: "https://maps.google.com/?q=22330+Hawthorne+Blvd+Ste+F+Torrance+CA+90505",
  // dayNums: 0 = Sunday ... 6 = Saturday. Used to tag "Today" (Torrance time).
  hours: [
    { days: "Monday – Friday", time: "8:30 am – 5:00 pm", dayNums: [1, 2, 3, 4, 5] },
    { days: "Saturday – Sunday", time: "Closed", dayNums: [6, 0] },
  ],
  languages: ["English", "Spanish", "Punjabi"],
  // Every appointment button points here. Change it once when the booking form is connected.
  appointmentHref: "/contact#request",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Dr. Sandhu", href: "/dr-sophia-sandhu" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

// Hero line: "Care for ___". These words rotate.
export const heroWords = ["Healthy Skin", "Every Age", "Your Confidence"];

// Why us, told as Dr. Sandhu's path. The order is real: it follows her training.
export const journey = [
  {
    reason: "Rooted in Southern California",
    place: "UCLA",
    detail:
      "Born and raised here, Dr. Sandhu earned her B.S. in Psychobiology at UCLA in the College Honors Program, with Phi Beta Kappa and Alpha Lambda Delta honors.",
  },
  {
    reason: "Trained in the whole patient",
    place: "Eastern Virginia Medical School · Rush University, Chicago",
    detail:
      "Medical degree from Eastern Virginia Medical School, then an internal medicine internship at Rush University Medical Center.",
  },
  {
    reason: "Chosen to lead",
    place: "Harbor-UCLA Medical Center",
    detail:
      "Dermatology residency at Harbor-UCLA, where she served as Chief Resident in her final year.",
  },
  {
    reason: "Advanced, award-backed training",
    place: "UCSF · American Society for Dermatologic Surgery",
    detail:
      "The Women’s Dermatologic Society Mentorship Award took her to UCSF for complex adult and pediatric dermatology. The ASDS Preceptorship Award added advanced cosmetic and surgical skills.",
  },
  {
    reason: "Every skin type, every age",
    place: "All skin types · Newborns to adults",
    detail:
      "Expert care for patients of all ages and all skin types, from newborns to adults.",
  },
  {
    reason: "Everything under one roof",
    place: "Oceanside, Torrance",
    detail:
      "Medical, surgical, cosmetic, pediatric and teledermatology in one calm, welcoming practice in the South Bay.",
  },
];

// Real Google reviews, copied word for word from the practice's Google Business Profile
// (5.0 stars from 27 reviews, checked Nov 26, 2026). Names shortened to first name and last initial.
// Do not edit review text. Add or swap reviews only with genuine ones.
export const reviewsSummary = {
  rating: "5.0",
  count: 28,
  source: "Google",
  url: "https://www.google.com/maps/place/Oceanside+Dermatology+%26+Aesthetics:+Sophia+Sandhu,+MD/@33.8247275,-118.3502904,17z/data=!4m8!3m7!1s0x80dd4b171bc7e821:0xfbbfc58738e5b2fb!8m2!3d33.8247275!4d-118.3502904!9m1!1b1",
};

export const testimonials = [
  {
    quote:
      "I am so glad I have found Dr Sandhu through a friend’s recommendation.  The diligent care shown resulted in discovery of a basal cell carcinoma growth in its early stages and its removal.  Dr Sandhu is patient, thorough and truly cares about skin health.  Very grateful to have found her and I will never go back to my old dermatologist",
    name: "David C.",
    detail: "Google review",
  },
  {
    quote:
      "I went to Oceanside Dermatology & Aesthetics and couldn’t be more impressed. The front office staff were super friendly and knowledgeable. Dr. Sandhu is amazing, so lovely and responsive to any questions or concerns.  I had Ultra Clear laser treatment and the results are phenomenal. I had a pretty advanced setting to deal with sunspots and wrinkles, lines around my lips and dreaded marionette lines. This treatment builds collagen and elastin and Dr Sandhu actually found more areas she thought needed help. Will post a photo in a few months! Thank you Dr Sandhu, will definitely be going back.",
    name: "Jane R.",
    detail: "Google review",
  },
  {
    quote:
      "I recently visited Dr. Sandhu’s office. It was a great experience - everyone there is so professional and personable. Dr. Sandhu has exceptional bedside manner. She listens patiently and takes the time to respond to your questions in detail. Came back well assured. Strongly recommend this office and Dr. Sandhu!",
    name: "Anubha S.",
    detail: "Google review",
  },
  {
    quote:
      "Very good small practice.  Sophia and her team are easy to schedule and the office is very convenient.  Most importantly Sophia listens to you and takes the time to explain thoroughly her diagnosis with proper treatments.  One of the best IMHO, highly recommend!",
    name: "Scott S.",
    detail: "Google review",
  },
  {
    quote:
      "Highly recommend this place! I called first thing Monday morning and was able to get a same day appointment. The service was fast and efficient, and they were able to resolve my issues. Very happy with my experience!",
    name: "Vivian M.",
    detail: "Google review",
  },
];

export const gallery = [
  { src: "/images/gallery/treatment-room.webp", alt: "A calm, bright treatment room with a skincare bed", title: "Private Treatment Rooms", caption: "Calm, unhurried spaces designed for comfort." },
  { src: "/images/gallery/radiance.webp", alt: "Woman with glowing skin tilting her head toward warm light", title: "Natural Radiance", caption: "Results that look like you, only refreshed." },
  { src: "/images/gallery/skincare-ritual.webp", alt: "Minimal skincare jar, tube and serum on a stone tray", title: "Medical-Grade Skincare", caption: "Products chosen for your skin, not for a trend." },
  { src: "/images/gallery/dewy-skin.webp", alt: "Woman with dewy, glowing skin resting her chin on her hand", title: "Subtle Refinement", caption: "Conservative, natural-looking results, never overdone." },
  { src: "/images/gallery/facial.webp", alt: "Patient relaxing while a mask is applied with a soft brush", title: "Thoughtful Care", caption: "Every visit planned around your skin and your goals." },
  { src: "/images/gallery/glow.webp", alt: "Close portrait of a woman with smooth, even skin", title: "Healthy, Even Skin", caption: "Long-term skin health for every age and skin type." },
];
