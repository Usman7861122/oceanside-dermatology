// Content for the structural pages: Services index, category pages and group pages.
// Category intros are taken from the old site's category pages (oceansidederm.com).

export const servicesIndex = {
  title: "Dermatology Services",
  accent: "in Torrance, CA",
  lede: "Medical, surgical, cosmetic, pediatric and virtual dermatology, all in one calm, welcoming practice.",
  description:
    "Explore dermatology services at Oceanside Dermatology & Aesthetics in Torrance, CA: medical, surgical, cosmetic and pediatric dermatology, plus teledermatology.",
  image: "/images/practice/exam-conversation-wide.webp",
  imageAlt: "Dr. Sophia Sandhu talking through a treatment plan with a patient",
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
    imageAlt: "Dr. Sophia Sandhu examining a patient's skin with a dermatoscope",
    introTitle: "Comprehensive care for",
    introAccent: "all skin types",
    intro: [
      "Our medical dermatology services are grounded in expert training and a deep understanding of the full spectrum of skin health. Dr. Sandhu's experience at Harbor-UCLA and UCSF exposed her to a wide range of conditions across all skin types, in both adults and children.",
      "We diagnose and treat a wide variety of skin, hair and nail disorders, such as acne, eczema, psoriasis, hair loss, rashes and nail changes. Whether your concern is common or complex, we provide thoughtful, personalized care with a focus on long-term skin health.",
    ],
  },
  "surgical-dermatology": {
    title: "Surgical Dermatology",
    accent: "in Torrance, CA",
    lede: "Precise removal of skin cancers and growths, with natural-looking results.",
    description:
      "Board-certified surgical dermatology in Torrance, CA: skin cancer treatment, excisions, electrodesiccation and curettage, cryosurgery, cyst and lipoma removal and earlobe repair.",
    image: "/images/services/index/surgical-hero.webp",
    imageAlt: "Dr. Sophia Sandhu examining a patient's skin near his ear",
    introTitle: "Expert surgical dermatology",
    introAccent: "you can trust",
    intro: [
      "We offer comprehensive surgical dermatology services, including the removal of benign growths, moles, cysts, precancerous lesions and skin cancers.",
      "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results.",
    ],
  },
  "cosmetic-dermatology": {
    title: "Cosmetic Dermatology",
    accent: "in Torrance, CA",
    lede: "Less is more. Natural beauty, thoughtfully enhanced.",
    description:
      "Cosmetic dermatology in Torrance, CA: Botox and Dysport, fillers, Sculptra, lasers, IPL, microneedling, peels, scar treatment and growth removal by a board-certified dermatologist.",
    image: "/images/services/index/cosmetic-hero.webp",
    imageAlt: "Dr. Sophia Sandhu caring for a smiling patient's skin",
    introTitle: "Natural beauty,",
    introAccent: "thoughtfully enhanced",
    intro: [
      "Our cosmetic dermatology philosophy centers around the belief that less is more. We are dedicated to helping you age gracefully by enhancing your natural beauty, not altering it.",
      "Dr. Sandhu creates individualized cosmetic treatment plans designed to bring out the best version of you.",
    ],
  },
  "pediatric-dermatology": {
    title: "Pediatric Dermatology",
    accent: "in Torrance, CA",
    lede: "Gentle, board-certified care from newborns to teens.",
    description:
      "Pediatric dermatology in Torrance, CA for babies, children and teens: eczema, acne, psoriasis, rashes, warts, molluscum, impetigo, fungal infections and alopecia areata.",
    image: "/images/services/index/pediatric-hero.webp",
    imageAlt: "Dr. Sophia Sandhu talking with a patient in a bright exam room",
    introTitle: "Expert skin care",
    introAccent: "at every age",
    intro: [
      "At Oceanside Dermatology, we proudly care for the entire family and invite you to bring your loved ones.",
      "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults, offering board-certified expertise tailored to every stage of life.",
    ],
  },
  "teledermatology": {
    title: "Teledermatology",
    accent: "Video Visits from Home",
    lede: "Secure video visits with a board-certified dermatologist, from home.",
    description:
      "Teledermatology video visits with a board-certified dermatologist serving Torrance, CA and the South Bay, for new rashes, acne, eczema and follow-up care.",
    image: "/images/services/index/tele-hero.webp",
    imageAlt: "Team member answering the phone at the Oceanside front desk",
    introTitle: "Skip the",
    introAccent: "waiting room",
    intro: [
      "Get expert skin care from the comfort of your home. Our teledermatology services let you consult with a board-certified dermatologist through secure, virtual appointments.",
      "Whether you need help with a new rash, acne, eczema or follow-up care, we provide fast, effective solutions tailored to your needs.",
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
  "medical-dermatology/skin-infections": {
    title: "Skin Infections",
    accent: "Care in Torrance, CA",
    headTitle: "Clear, healthy",
    headAccent: "skin again",
    lede: "Prompt, effective care for warts, cold sores, shingles, fungal and bacterial infections.",
    description:
      "Treatment for warts, herpes, shingles, fungal infections and bacterial skin infections in Torrance, CA, for adults and children.",
    image: "/images/services/index/infections-hero.webp",
    imageAlt: "Woman with clear, healthy skin resting her hand on her cheek",
    intro: [
      "Skin infections are caused by microbes: viruses, fungi and bacteria. They can cause rashes, blisters, bumps and sores.",
      "Dr. Sandhu confirms the cause so treatment works the first time, and helps you keep the infection from spreading or coming back.",
    ],
    approach: "Thoughtful, personalized care with a focus on long-term skin health.",
    stats: [
      { value: "5", label: "Conditions treated" },
      { value: "All ages", label: "From newborns to adults" },
    ],
  },
  "surgical-dermatology/skin-cancer-treatment": {
    title: "Skin Cancer Treatment",
    accent: "in Torrance, CA",
    headTitle: "Expert care,",
    headAccent: "natural results",
    lede: "Treatment of basal cell carcinoma, squamous cell carcinoma, melanoma and precancerous lesions.",
    description:
      "Board-certified skin cancer treatment in Torrance, CA for basal cell carcinoma, squamous cell carcinoma, melanoma and precancerous lesions.",
    image: "/images/services/index/surgical-skin-cancer-hero.webp",
    imageAlt: "Dr. Sophia Sandhu checking a patient's scalp",
    intro: [
      "Skin cancer is the abnormal growth of skin cells, often caused by sun exposure. Found early, most skin cancers are highly treatable.",
      "Dr. Sandhu treats skin cancers and precancers with precision, prioritizing both a complete cure and a natural-looking result.",
    ],
    approach: "Prevention, education and early detection are at the heart of our practice.",
    stats: [
      { value: "4", label: "Conditions treated" },
      { value: "In office", label: "Under local numbing" },
    ],
  },
  "surgical-dermatology/procedures": {
    title: "Dermatologic Procedures",
    accent: "in Torrance, CA",
    headTitle: "Precise procedures,",
    headAccent: "gentle care",
    lede: "Excisions, electrodesiccation and curettage, cryosurgery, and incision and drainage.",
    description:
      "Board-certified dermatologic procedures in Torrance, CA: excisions, electrodesiccation and curettage, cryosurgery, and incision and drainage.",
    image: "/images/services/index/surgical-procedures-hero.webp",
    imageAlt: "Dr. Sophia Sandhu checking a patient's skin",
    intro: [
      "Most skin procedures are quick, done right in our office under local numbing, with little downtime.",
      "Dr. Sandhu chooses the procedure that best fits your diagnosis and the area, always with an eye on a natural-looking result.",
    ],
    approach: "Precision and care, prioritizing both medical outcomes and natural cosmetic results.",
    stats: [
      { value: "4", label: "Procedures offered" },
      { value: "Same day", label: "Often possible" },
    ],
  },
  "surgical-dermatology/removals-and-repair": {
    title: "Removals & Repair",
    accent: "in Torrance, CA",
    headTitle: "Smooth skin,",
    headAccent: "natural results",
    lede: "Removal of benign growths, cysts and lipomas, and earlobe repair.",
    description:
      "Board-certified removal of benign growths, cysts and lipomas, and earlobe repair in Torrance, CA.",
    image: "/images/services/index/surgical-removals-hero.webp",
    imageAlt: "Dr. Sophia Sandhu examining a patient's skin with a dermatoscope",
    intro: [
      "Harmless growths, cysts and lumps can still be uncomfortable or affect how you feel about your skin.",
      "Dr. Sandhu removes them safely in the office and repairs torn earlobes, with careful technique for a neat result.",
    ],
    approach: "Precision and care, prioritizing both medical outcomes and natural cosmetic results.",
    stats: [
      { value: "3", label: "Services offered" },
      { value: "In office", label: "Under local numbing" },
    ],
  },
  "medical-dermatology/growths-and-skin-cancer": {
    title: "Growths & Skin Cancer",
    accent: "Care in Torrance, CA",
    headTitle: "Peace of mind,",
    headAccent: "early detection",
    lede: "Skin cancer screenings and expert care for moles, growths, cysts and scars.",
    description:
      "Skin cancer screenings and treatment of actinic keratoses, moles, skin tags, cysts, lipomas, angiomas, seborrheic keratoses, keloids and scars in Torrance, CA.",
    image: "/images/services/index/growths-hero.webp",
    imageAlt: "Dr. Sophia Sandhu talking with a patient during a visit",
    intro: [
      "Most skin growths are harmless, but some need a closer look. Found early, most skin cancers are highly treatable.",
      "Dr. Sandhu checks every spot carefully and removes growths with precision, prioritizing both health and a natural-looking result.",
    ],
    approach: "Prevention, education and early detection are at the heart of our practice.",
    stats: [
      { value: "10", label: "Conditions treated" },
      { value: "Head to toe", label: "Skin cancer screenings" },
    ],
  },
  "cosmetic-dermatology/injectables": {
    title: "Injectables",
    accent: "in Torrance, CA",
    headTitle: "Refreshed,",
    headAccent: "never changed",
    lede: "Botox and Dysport, hyaluronic acid fillers and Sculptra, with a natural touch.",
    description:
      "Botox, Dysport, Restylane and RHA fillers and Sculptra in Torrance, CA by a board-certified dermatologist.",
    image: "/images/services/index/cosmetic-injectables-hero.webp",
    imageAlt: "Dr. Sophia Sandhu talking with a patient during treatment",
    intro: [
      "Injectables are non-surgical treatments placed into the skin or muscles to improve appearance.",
      "Dr. Sandhu uses a less-is-more approach for results that look like you, only refreshed.",
    ],
    approach: "Our cosmetic philosophy: less is more.",
    stats: [
      { value: "3", label: "Treatments offered" },
      { value: "Natural", label: "Less-is-more results" },
    ],
  },
  "cosmetic-dermatology/lasers-and-light": {
    title: "Lasers & Light",
    accent: "in Torrance, CA",
    headTitle: "Clearer skin,",
    headAccent: "in a new light",
    lede: "M22 Stellar IPL, UltraClear, ResurFX and Nd:YAG lasers for tone, texture, redness and pigment.",
    description:
      "Laser and light treatments in Torrance, CA: M22 Stellar IPL, UltraClear, ResurFX, Q-Switched Nd:YAG and Multi-Spot Nd:YAG.",
    image: "/images/services/index/cosmetic-lasers-hero.webp",
    imageAlt: "Dr. Sophia Sandhu examining a patient's face up close",
    intro: [
      "Lasers and light devices are advanced tools that use targeted light energy to treat various skin concerns.",
      "From redness and sun damage to scars and wrinkles, we choose the right device for your skin, including options safe for skin of color.",
    ],
    approach: "Our cosmetic philosophy: less is more.",
    stats: [
      { value: "5", label: "Devices" },
      { value: "All skin types", label: "Including skin of color" },
    ],
  },
  "cosmetic-dermatology/skin-rejuvenation": {
    title: "Skin Rejuvenation",
    accent: "in Torrance, CA",
    headTitle: "Smoother,",
    headAccent: "brighter skin",
    lede: "Fractional laser, microneedling, chemical peels and scar treatment.",
    description:
      "Skin rejuvenation in Torrance, CA: fractional laser resurfacing, medical-grade microneedling, chemical peels, acne scar and scar treatment.",
    image: "/images/services/index/cosmetic-rejuvenation-hero.webp",
    imageAlt: "Dr. Sophia Sandhu, wearing gloves, checking a patient's skin",
    intro: [
      "Rejuvenation treatments improve texture, tone, fine lines and scars by renewing the skin.",
      "Dr. Sandhu combines treatments into a plan that fits your skin and your schedule.",
    ],
    approach: "Our cosmetic philosophy: less is more.",
    stats: [
      { value: "5", label: "Treatments offered" },
      { value: "Custom", label: "Plans for your skin" },
    ],
  },
  "cosmetic-dermatology/spots-veins-and-redness": {
    title: "Spots, Veins & Redness",
    accent: "in Torrance, CA",
    headTitle: "Even,",
    headAccent: "calm skin tone",
    lede: "Treatment for sun spots, redness, rosacea, visible veins and tattoos.",
    description:
      "Laser and light treatment of sun spots, rosacea, redness, facial and leg veins, and tattoo removal in Torrance, CA.",
    image: "/images/services/index/cosmetic-spots-hero.webp",
    imageAlt: "Patient smiling during a skin check with Dr. Sophia Sandhu",
    intro: [
      "Brown spots, redness and visible vessels can make skin look tired or uneven.",
      "Laser and light treatments target pigment and blood vessels for a clearer, more even complexion.",
    ],
    approach: "Our cosmetic philosophy: less is more.",
    stats: [
      { value: "4", label: "Treatments offered" },
      { value: "Little", label: "Downtime" },
    ],
  },
  "cosmetic-dermatology/growth-removal": {
    title: "Growth Removal",
    accent: "in Torrance, CA",
    headTitle: "Smooth skin,",
    headAccent: "simply",
    lede: "Cosmetic removal of skin tags, moles, seborrheic keratoses, angiomas and more.",
    description:
      "Cosmetic removal of sebaceous hyperplasia, skin tags, moles, seborrheic keratoses, dermatosis papulosa nigra and angiomas in Torrance, CA.",
    image: "/images/services/index/cosmetic-growths-hero.webp",
    imageAlt: "Dr. Sophia Sandhu treating a patient reclined in the treatment chair",
    intro: [
      "Safe removal of non-cancerous skin lesions for cosmetic or comfort reasons.",
      "Dr. Sandhu checks every growth first, then removes it with the gentlest effective method.",
    ],
    approach: "Our cosmetic philosophy: less is more.",
    stats: [
      { value: "6", label: "Growth types" },
      { value: "Quick", label: "In-office removal" },
    ],
  },
  "pediatric-dermatology/common-conditions": {
    title: "Common Conditions",
    accent: "in Children",
    headTitle: "Happy,",
    headAccent: "comfortable skin",
    lede: "Eczema, acne, psoriasis, rashes and insect bites in babies, children and teens.",
    description:
      "Pediatric care for eczema, acne, psoriasis, rashes and insect bites in Torrance, CA.",
    image: "/images/services/index/pediatric-common-hero.webp",
    imageAlt: "Dr. Sophia Sandhu smiling while talking with a patient",
    intro: [
      "Many skin conditions start in childhood, from baby eczema to teen acne.",
      "Dr. Sandhu offers gentle, family-friendly care, with simple plans that fit your routine.",
    ],
    approach: "Board-certified expertise tailored to every stage of life.",
    stats: [
      { value: "5", label: "Conditions treated" },
      { value: "Newborns", label: "To teens" },
    ],
  },
  "pediatric-dermatology/infections-and-growths": {
    title: "Infections & Growths",
    accent: "in Children",
    headTitle: "Gentle care,",
    headAccent: "fast relief",
    lede: "Warts, molluscum, impetigo and fungal infections in children.",
    description:
      "Pediatric care for warts, molluscum, impetigo and fungal infections in Torrance, CA.",
    image: "/images/services/index/pediatric-infections-hero.webp",
    imageAlt: "Bright waiting room at Oceanside Dermatology & Aesthetics",
    intro: [
      "Skin infections and growths are very common in children and often spread easily.",
      "Dr. Sandhu chooses child-friendly treatments and helps stop the spread at home and school.",
    ],
    approach: "Board-certified expertise tailored to every stage of life.",
    stats: [
      { value: "4", label: "Conditions treated" },
      { value: "Child-friendly", label: "Treatments" },
    ],
  },
};
