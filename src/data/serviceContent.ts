// Content for individual service pages (e.g. /medical-dermatology/acne).
// Facts about the practice come from oceansidederm.com (medical, pediatric, cosmetic and
// teledermatology pages). General medical wording is kept simple and conservative:
// Dr. Sandhu should review every page before launch.
import { serviceMenu, groupHref, groupSlug } from "./serviceMenu";
import { groupContent } from "./serviceIndex";

export type ServiceContent = {
  slug: string; // last part of the URL, matches the mega menu item
  category: string; // serviceMenu category slug
  group: string; // serviceMenu group title
  name: string; // short name, used in breadcrumbs and "related"
  title: string; // hero H1, first part
  accent: string; // hero H1, gold second part
  metaTitle: string;
  description: string;
  lede: string;
  photos: { hero: string; heroAlt: string; one: string; oneAlt: string; two: string; twoAlt: string };
  overview: { eyebrow: string; title: string; accent: string; text: string[]; facts: { label: string; value: string }[] };
  candidates: { title: string; accent: string; text: string; conditionsTitle?: string; conditions: string[]; signsTitle?: string; signs: string[] };
  localTopic?: string; // used in the "<topic> in Torrance, CA" section
  heroPosition?: string; // CSS object-position for the hero photo
  options: { title: string; accent: string; text: string; items: { title: string; text: string; href?: string }[] };
  steps: { title: string; accent: string; text: string; items: { label: string; title: string; text: string }[] };
  safety: { title: string; text: string[] };
  faqs: { q: string; a: string }[];
};

export const serviceContent: ServiceContent[] = [
  {
    slug: "acne",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Acne",
    localTopic: "Acne treatment",
    title: "Acne Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Acne Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified acne treatment in Torrance, CA for teens and adults. Personalized plans for breakouts, cysts, dark marks and acne scars, in office or by video visit.",
    lede: "Clearer, calmer skin with a plan made for you, from the first breakout to the marks it leaves behind.",
    photos: {
      hero: "/images/services/acne/hero.webp",
      heroAlt: "Close-up of a young woman with clear, smooth skin",
      one: "/images/services/acne/mirror.webp",
      oneAlt: "Young woman checking a breakout on her cheek in a mirror",
      two: "/images/services/acne/exam.webp",
      twoAlt: "Dermatologist examining a patient's facial skin with a dermatoscope",
    },
    overview: {
      eyebrow: "Understanding Acne",
      title: "What is",
      accent: "acne?",
      text: [
        "Acne is a common skin condition that causes pimples, blackheads, whiteheads and cysts. It starts when hair follicles become clogged with oil and dead skin cells.",
        "It most often shows up on the face, chest, back and shoulders, and it affects adults as well as teens. Left untreated, it can leave dark marks or scars.",
        "Dr. Sandhu treats acne in patients of all ages and all skin types, with a plan that fits your skin, your goals and your routine.",
      ],
      facts: [
        { label: "Who we treat", value: "Teens & adults" },
        { label: "Visit options", value: "In office or video" },
        { label: "Also treated", value: "Dark marks & scars" },
      ],
    },
    candidates: {
      title: "Is acne treatment",
      accent: "right for you?",
      text: "It is time to see a dermatologist when breakouts keep coming back, hurt, or leave marks, or when store-bought products have not helped.",
      conditionsTitle: "Types of acne we treat",
      conditions: [
        "Blackheads and whiteheads",
        "Red, inflamed pimples",
        "Deep, painful cysts and nodules",
        "Adult and hormonal acne",
        "Acne on the chest, back or shoulders",
        "Teen acne",
      ],
      signs: [
        "Breakouts that last for months",
        "Painful lumps under the skin",
        "Dark spots left after pimples heal",
        "Pitted or raised scars",
        "Over-the-counter products have not worked",
        "Acne is affecting your confidence",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Acne care is never one size fits all. Dr. Sandhu matches treatment to your type of acne, your skin and your life, and adjusts it as your skin improves.",
      items: [
        { title: "Prescription skin care", text: "Prescription creams, gels and washes that help unclog pores and calm inflammation." },
        { title: "Oral medicines", text: "For moderate, severe or widespread acne, medicines taken by mouth may be added to your plan." },
        { title: "Customized chemical peels", text: "Peels that gently exfoliate the top layers of skin to improve tone, texture, acne and pigmentation.", href: "/cosmetic-dermatology/chemical-peels" },
        { title: "Acne scar treatment", text: "Targeted therapies like microneedling, lasers and peels to smooth and soften the look of acne scars.", href: "/cosmetic-dermatology/acne-scar-treatment" },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Clear skin is a process. Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin and asks about your history, your current products and what bothers you most." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a clear plan and simple instructions, so you know exactly what to use and when." },
        { label: "First weeks", title: "Give it time", text: "Most acne treatments take several weeks to work. Some skin feels a little dry at first. Keep going and call us with questions." },
        { label: "Follow-up", title: "Fine-tune", text: "At follow-up we check your progress and adjust your plan, in the office or by secure video visit." },
      ],
    },
    safety: {
      title: "Safe, monitored care",
      text: [
        "Every acne medicine has its own considerations. Some are not used during pregnancy, and some need regular check-ins.",
        "Dr. Sandhu reviews your health history, explains possible side effects in plain words, and follows your progress, so your treatment stays safe and comfortable.",
      ],
    },
    faqs: [
      { q: "Do you treat acne in teenagers?", a: "Yes. Dr. Sandhu cares for patients of all ages, from newborns to adults, and we welcome the whole family." },
      { q: "Can I have an acne visit by video?", a: "Yes. Our teledermatology visits cover acne, new rashes, eczema and follow-up care, from the comfort of your home." },
      { q: "How long until I see results?", a: "Most acne treatments take several weeks to show results. Try not to stop early. We review your progress at follow-up and adjust your plan if needed." },
      { q: "Can you help with acne scars and dark marks?", a: "Yes. We offer acne scar treatment with microneedling, lasers and customized peels, including the UltraClear laser, which is safe for all skin types, including skin of color." },
      { q: "Should I pop my pimples?", a: "It is best not to. Picking and squeezing can push inflammation deeper and lead to dark marks or scars. Let us treat it instead." },
    ],
  },
  {
    slug: "rosacea",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Rosacea",
    localTopic: "Rosacea treatment",
    title: "Rosacea Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Rosacea Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified rosacea care in Torrance, CA. Calm facial redness, flushing, bumps and visible blood vessels with prescription care and laser and light treatments.",
    lede: "Calmer, more even skin, with care for the redness, flushing and bumps that rosacea brings.",
    heroPosition: "70% 30%",
    photos: {
      hero: "/images/services/rosacea/hero.webp",
      heroAlt: "Woman with calm, even skin gently touching her cheek",
      one: "/images/services/rosacea/one.webp",
      oneAlt: "Woman checking redness on her cheek in a mirror",
      two: "/images/services/rosacea/two.webp",
      twoAlt: "Woman with eyes closed and hands softly framing her clear face",
    },
    overview: {
      eyebrow: "Understanding Rosacea",
      title: "What is",
      accent: "rosacea?",
      text: [
        "Rosacea is a chronic facial skin condition that causes redness and visible blood vessels. Some people also get flushing, small red bumps, or skin that stings and feels sensitive.",
        "It often comes and goes in flares. Sun, heat, stress and certain foods or drinks can make it worse.",
        "Rosacea cannot be cured, but it can be controlled. Dr. Sandhu builds a plan to calm flares, reduce redness and keep your skin comfortable.",
      ],
      facts: [
        { label: "Main signs", value: "Redness & flushing" },
        { label: "Care", value: "Medical & laser" },
        { label: "Goal", value: "Calm, even skin" },
      ],
    },
    candidates: {
      title: "Is rosacea care",
      accent: "right for you?",
      text: "See a dermatologist when facial redness lingers, flushes easily, or comes with bumps or stinging that does not settle on its own.",
      conditionsTitle: "What we help with",
      conditions: [
        "Persistent redness across the cheeks and nose",
        "Flushing that comes and goes",
        "Small red bumps and pimples",
        "Visible blood vessels and broken capillaries",
        "Sensitive skin that stings or burns",
        "Rosacea flares",
      ],
      signs: [
        "Redness that does not fade",
        "Flushing with heat, sun or stress",
        "Bumps that look like acne but are not",
        "Products that sting or burn",
        "Tiny visible vessels on the face",
        "Redness affecting your confidence",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Rosacea care works best as a long-term plan. Dr. Sandhu combines medical treatment with gentle skin care and, when helpful, laser and light treatments.",
      items: [
        { title: "Prescription skin care", text: "Creams and gels that calm redness and the bumps and pimples of rosacea." },
        { title: "Oral medicines", text: "For more active rosacea, medicines taken by mouth may be added to calm inflammation." },
        { title: "Laser & light treatments", text: "Light-based treatments, such as the M22 Stellar IPL, help shrink visible blood vessels and reduce redness.", href: "/cosmetic-dermatology/rosacea-and-redness" },
        { title: "Gentle routine & triggers", text: "A simple routine, daily sun protection and knowing your triggers help keep flares away." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your rosacea care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin and talks with you about your flares, your triggers and the products you use." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a clear plan for daily care and treatment, written in simple steps." },
        { label: "First weeks", title: "Calming the skin", text: "Redness and bumps usually settle gradually over several weeks. Laser and light sessions, if used, are spaced out over time." },
        { label: "Follow-up", title: "Keep it calm", text: "We review your progress and adjust your plan to keep flares under control, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe, gentle care",
      text: [
        "Rosacea skin is sensitive, so every product and treatment is chosen with care. Some treatments are not right during pregnancy, and some need a check-in.",
        "Dr. Sandhu explains each option, possible side effects and what to avoid, so your skin stays comfortable throughout.",
      ],
    },
    faqs: [
      { q: "Is rosacea the same as acne?", a: "No. Rosacea can cause bumps that look like pimples, but it is a different condition and needs different care. That is why a proper diagnosis matters." },
      { q: "Can rosacea be cured?", a: "Rosacea is a chronic condition, so it cannot be cured, but it can be well controlled with the right plan." },
      { q: "Do you treat redness and visible vessels with lasers?", a: "Yes. We offer laser and light-based treatments, including the M22 Stellar IPL, that help shrink visible blood vessels and reduce redness." },
      { q: "What can I do at home?", a: "Use gentle, fragrance-free products, wear sunscreen every day, and notice what triggers your flares, such as heat, sun or certain foods." },
    ],
  },
  {
    slug: "eczema",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Eczema",
    localTopic: "Eczema treatment",
    title: "Eczema Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Eczema Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified eczema care in Torrance, CA for babies, children and adults. Relief for itchy, dry, inflamed skin, in office or by video visit.",
    lede: "Relief for itchy, dry, inflamed skin, for babies, children and adults.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/eczema/hero.webp",
      heroAlt: "Woman gently smoothing moisturizer onto her arm",
      one: "/images/services/eczema/one.webp",
      oneAlt: "Parent applying soothing cream to a baby's skin",
      two: "/images/services/eczema/two.webp",
      twoAlt: "Close-up of hands applying a rich cream to dry skin",
    },
    overview: {
      eyebrow: "Understanding Eczema",
      title: "What is",
      accent: "eczema?",
      text: [
        "Eczema is a chronic condition that causes itchy, inflamed and dry skin. The most common type, atopic dermatitis, is often linked to allergies or asthma.",
        "It tends to come and go in flares and can affect anyone, from newborns to adults. Scratching can make the skin thicker and more irritated over time.",
        "Dr. Sandhu helps you calm flares, protect your skin barrier and keep the itch under control, with a plan that fits your family.",
      ],
      facts: [
        { label: "Who we treat", value: "Babies to adults" },
        { label: "Visit options", value: "In office or video" },
        { label: "Focus", value: "Itch & flare relief" },
      ],
    },
    candidates: {
      title: "Is eczema care",
      accent: "right for you?",
      text: "See a dermatologist when dry, itchy skin keeps coming back, disturbs sleep, or does not improve with moisturizers alone.",
      conditionsTitle: "What we help with",
      conditions: [
        "Atopic dermatitis",
        "Eczema in babies and children",
        "Hand eczema",
        "Dry, cracked or thickened skin",
        "Frequent flares",
        "Itch that disturbs sleep",
      ],
      signs: [
        "Itching that will not stop",
        "Red, rough or scaly patches",
        "Flares that keep coming back",
        "Skin that cracks or weeps",
        "Moisturizers alone are not enough",
        "Your child is uncomfortable or cannot sleep",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Eczema care has two goals: calm the flare you have now, and protect your skin so the next one is milder or does not come at all.",
      items: [
        { title: "Skin barrier care", text: "The right moisturizers, gentle cleansers and bathing habits to keep skin soft and protected." },
        { title: "Prescription treatments", text: "Prescription creams and ointments to calm inflammation and itch during a flare." },
        { title: "Advanced therapies", text: "For moderate to severe eczema, newer prescription treatments may be part of your plan." },
        { title: "Care for children", text: "Gentle, board-certified care for babies, children and teens, with clear guidance for parents.", href: "/pediatric-dermatology/atopic-dermatitis-and-eczema" },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your eczema care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin and asks about flares, triggers, allergies and your current routine." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a written plan for daily skin care and what to do when a flare starts." },
        { label: "First weeks", title: "Calming the flare", text: "Itch and redness usually ease within weeks. Daily moisturizing keeps the skin barrier strong." },
        { label: "Follow-up", title: "Stay ahead", text: "We adjust your plan to prevent flares, in the office or by secure video visit." },
      ],
    },
    safety: {
      title: "Safe care for every age",
      text: [
        "Eczema treatments are chosen for your age, the area of skin and how severe the eczema is. Some medicines need regular check-ins.",
        "Dr. Sandhu explains how and where to use each product, and for how long, so treatment is safe for you and your children.",
      ],
    },
    faqs: [
      { q: "Do you treat eczema in babies and children?", a: "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults, and we welcome the whole family." },
      { q: "Can I have an eczema visit by video?", a: "Yes. Our teledermatology visits cover eczema, acne, new rashes and follow-up care, from the comfort of your home." },
      { q: "Is eczema contagious?", a: "No. Eczema cannot be passed from person to person." },
      { q: "Will my child grow out of eczema?", a: "Many children improve as they get older, but some keep sensitive skin into adulthood. A good routine helps at every age." },
    ],
  },
  {
    slug: "psoriasis",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Psoriasis",
    localTopic: "Psoriasis treatment",
    title: "Psoriasis Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Psoriasis Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified psoriasis care in Torrance, CA for adults and children. Long-term plans for red, scaly patches on the skin, scalp and nails.",
    lede: "Long-term control of red, scaly patches, with a plan that grows with you.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/psoriasis/hero.webp",
      heroAlt: "Close-up of hands smoothing cream onto an elbow",
      one: "/images/services/psoriasis/one.webp",
      oneAlt: "Woman applying a soothing cream to her elbow",
      two: "/images/services/psoriasis/two.webp",
      twoAlt: "Dermatologist examining the skin on a patient's arm with a dermatoscope",
    },
    overview: {
      eyebrow: "Understanding Psoriasis",
      title: "What is",
      accent: "psoriasis?",
      text: [
        "Psoriasis is an autoimmune disease that leads to red, scaly patches on the skin. It happens when the immune system makes skin cells grow too quickly.",
        "Patches often appear on the elbows, knees, scalp and lower back, and can affect the nails. Psoriasis can run in families and is not contagious.",
        "There is no cure, but today's treatments can clear or greatly improve the skin. Dr. Sandhu creates a plan that fits how much skin is involved and how it affects your life.",
      ],
      facts: [
        { label: "Who we treat", value: "Children & adults" },
        { label: "Common areas", value: "Elbows, knees, scalp" },
        { label: "Approach", value: "Long-term plan" },
      ],
    },
    candidates: {
      title: "Is psoriasis care",
      accent: "right for you?",
      text: "See a dermatologist when scaly patches spread, itch, crack or affect your scalp or nails, or when over-the-counter products have not helped.",
      conditionsTitle: "What we help with",
      conditions: [
        "Plaque psoriasis",
        "Scalp psoriasis",
        "Nail changes from psoriasis",
        "Psoriasis in children",
        "Itchy or cracked patches",
        "Flares that keep returning",
      ],
      signs: [
        "Red, thick, scaly patches",
        "Silvery flakes on the scalp",
        "Pitted or thickened nails",
        "Patches that itch, crack or bleed",
        "Joint stiffness with skin changes",
        "Psoriasis affecting your daily life",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Psoriasis care is personal. Dr. Sandhu matches treatment to where your psoriasis is, how much skin it covers and your overall health.",
      items: [
        { title: "Topical treatments", text: "Prescription creams, ointments and scalp solutions that slow skin growth and calm redness and scale." },
        { title: "Oral medicines", text: "For more widespread psoriasis, medicines taken by mouth may be added to your plan." },
        { title: "Advanced therapies", text: "For moderate to severe psoriasis, newer prescription treatments that target the immune system may be considered." },
        { title: "Skin & scalp routine", text: "Gentle cleansing, rich moisturizers and smart habits that help keep flares away." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your psoriasis care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin, scalp and nails and asks about your health, joints and past treatments." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a clear treatment plan and simple instructions for daily care." },
        { label: "First weeks", title: "Seeing change", text: "Most treatments take several weeks to show results. Some advanced options need lab checks along the way." },
        { label: "Follow-up", title: "Long-term control", text: "We track your progress and adjust treatment to keep your skin clear, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe, monitored care",
      text: [
        "Some psoriasis treatments need blood tests or regular check-ins, and some are not used during pregnancy.",
        "Dr. Sandhu reviews your full health history, explains benefits and possible side effects in plain words, and monitors you closely.",
      ],
    },
    faqs: [
      { q: "Is psoriasis contagious?", a: "No. Psoriasis cannot be passed from person to person." },
      { q: "Do you treat psoriasis in children?", a: "Yes. Dr. Sandhu treats patients of all ages, and psoriasis is one of the conditions we care for in children." },
      { q: "Can psoriasis affect my nails and joints?", a: "Yes. Psoriasis can change the nails, and some people also have joint pain or stiffness. Tell us about any joint symptoms at your visit." },
      { q: "How long until I see results?", a: "Most treatments take several weeks to work. We review your progress at follow-up and adjust your plan if needed." },
    ],
  },
  {
    slug: "contact-dermatitis",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Contact Dermatitis",
    localTopic: "Contact dermatitis treatment",
    title: "Contact Dermatitis",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Contact Dermatitis Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified care for contact dermatitis in Torrance, CA. Find the cause of itchy, red rashes from irritants or allergens and calm the skin.",
    lede: "Find what is irritating your skin, calm the rash and help keep it from coming back.",
    heroPosition: "70% 30%",
    photos: {
      hero: "/images/services/contact-dermatitis/hero.webp",
      heroAlt: "Smiling woman with sensitive skin holding a gentle cream",
      one: "/images/services/contact-dermatitis/one.webp",
      oneAlt: "Woman with an itchy red rash on her neck",
      two: "/images/services/contact-dermatitis/two.webp",
      twoAlt: "Allergy patch test applied to a patient's upper back",
    },
    overview: {
      eyebrow: "Understanding Contact Dermatitis",
      title: "What is",
      accent: "contact dermatitis?",
      text: [
        "Contact dermatitis is skin inflammation caused by contact with an irritant or an allergen. It often shows up as an itchy, red rash where the skin touched the trigger.",
        "Common causes include soaps, fragrances, cosmetics, metals such as nickel, plants, and products used at work.",
        "Dr. Sandhu helps find the likely cause, calms the rash and shows you how to protect your skin going forward.",
      ],
      facts: [
        { label: "Cause", value: "Irritant or allergen" },
        { label: "Main sign", value: "Itchy, red rash" },
        { label: "Focus", value: "Find the trigger" },
      ],
    },
    candidates: {
      title: "Is contact dermatitis care",
      accent: "right for you?",
      text: "See a dermatologist when a rash keeps returning in the same area, spreads, blisters, or does not settle after you stop using a product.",
      conditionsTitle: "What we help with",
      conditions: [
        "Irritant contact dermatitis",
        "Allergic contact dermatitis",
        "Reactions to cosmetics and fragrance",
        "Reactions to metals such as nickel",
        "Hand rashes from work or washing",
        "Plant rashes",
      ],
      signs: [
        "An itchy rash that keeps coming back",
        "Redness where jewelry or products touch",
        "Blisters or weeping skin",
        "Dry, cracked hands",
        "A rash that spreads",
        "You do not know what is causing it",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "The best treatment is finding and avoiding the trigger. While we do that, we calm the skin and help it heal.",
      items: [
        { title: "Finding the trigger", text: "A careful look at your products, work and habits. Allergy patch testing may be recommended to pinpoint an allergen." },
        { title: "Calming the rash", text: "Prescription creams and ointments that reduce redness, itch and inflammation." },
        { title: "Skin repair", text: "Gentle cleansers and protective moisturizers that help the skin barrier heal." },
        { title: "Prevention plan", text: "Clear guidance on what to avoid and safer swaps for the products you use every day." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines the rash and asks about your products, work, hobbies and anything new that touched your skin." },
        { label: "Same day", title: "Relief plan", text: "You leave with treatment to calm the rash and a list of things to avoid for now." },
        { label: "Next weeks", title: "Healing", text: "Most rashes improve within days to weeks once the trigger is removed and the skin is treated." },
        { label: "Follow-up", title: "Prevent it", text: "We review what helped and plan how to keep the rash from coming back, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe, careful care",
      text: [
        "Treatment strength depends on where the rash is. The face and skin folds need gentler care than the hands or feet.",
        "Dr. Sandhu explains how and how long to use each product, so your skin heals safely.",
      ],
    },
    faqs: [
      { q: "Is contact dermatitis contagious?", a: "No. It is a reaction to something that touched your skin, and it cannot spread to other people." },
      { q: "How do I know what caused my rash?", a: "Your history often points to the cause. If needed, allergy patch testing may be recommended to look for specific allergens." },
      { q: "Can I have a rash checked by video?", a: "Yes. Our teledermatology visits cover new rashes and follow-up care, from the comfort of your home." },
      { q: "How long does it take to heal?", a: "Once the trigger is avoided and the skin is treated, most rashes improve within days to a few weeks." },
    ],
  },
  {
    slug: "perioral-dermatitis",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Perioral Dermatitis",
    localTopic: "Perioral dermatitis treatment",
    title: "Perioral Dermatitis",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Perioral Dermatitis Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified care for perioral dermatitis in Torrance, CA. Calm the bumpy rash around the mouth and nose with a gentle, personalized plan.",
    lede: "A gentle, simple plan to calm the bumpy rash around the mouth and nose.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/perioral-dermatitis/hero.webp",
      heroAlt: "Smiling woman gently washing her face with a soft cleanser",
      one: "/images/services/perioral-dermatitis/one.webp",
      oneAlt: "Woman touching the skin near her chin",
      two: "/images/services/perioral-dermatitis/two.webp",
      twoAlt: "Woman checking a rash near her mouth in a mirror",
    },
    overview: {
      eyebrow: "Understanding Perioral Dermatitis",
      title: "What is",
      accent: "perioral dermatitis?",
      text: [
        "Perioral dermatitis is a facial rash around the mouth and nose, and sometimes the eyes. It usually looks like small red bumps on dry or flaky skin.",
        "It can be triggered by steroid creams on the face, heavy creams and some cosmetics or toothpastes.",
        "It often looks like acne or eczema, so a correct diagnosis matters. Dr. Sandhu creates a simple, gentle plan to clear it.",
      ],
      facts: [
        { label: "Where", value: "Mouth, nose, eyes" },
        { label: "Looks like", value: "Small red bumps" },
        { label: "Approach", value: "Gentle & simple" },
      ],
    },
    candidates: {
      title: "Is perioral dermatitis care",
      accent: "right for you?",
      text: "See a dermatologist when a bumpy rash around your mouth or nose will not clear, or gets worse with the creams you are using.",
      conditionsTitle: "What we help with",
      conditions: [
        "Rash around the mouth",
        "Rash around the nose",
        "Rash near the eyes",
        "Flares after steroid creams",
        "Sensitive, flaky facial skin",
        "Rash in children",
      ],
      signs: [
        "Small red bumps around the mouth",
        "Burning or stinging skin",
        "Dry, flaky patches",
        "A rash that comes back",
        "Creams seem to make it worse",
        "Acne products have not helped",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Less is often more. Dr. Sandhu simplifies your routine and adds the right treatment to calm the rash.",
      items: [
        { title: "Simplified routine", text: "Stopping likely triggers and switching to a few gentle, fragrance-free products." },
        { title: "Prescription creams", text: "Topical treatments that calm the bumps and redness around the mouth and nose." },
        { title: "Oral medicines", text: "For more stubborn or widespread rashes, a course of medicine by mouth may be added." },
        { title: "Steroid cream guidance", text: "If you use steroid creams on your face, we help you stop them safely to avoid a flare." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines the rash and reviews every product you put on your face." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a simple routine and treatment, with clear steps for each day." },
        { label: "First weeks", title: "Be patient", text: "The rash may flare a little before it gets better. Most people see clear improvement within several weeks." },
        { label: "Follow-up", title: "Keep it clear", text: "We check your progress and help you slowly reintroduce products, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe, gentle care",
      text: [
        "Facial skin is delicate, and some treatments are not right during pregnancy or for young children.",
        "Dr. Sandhu chooses treatments that are safe for you and explains what to expect along the way.",
      ],
    },
    faqs: [
      { q: "Is perioral dermatitis the same as acne?", a: "No. It can look similar, but it needs different care. Some acne products can even make it worse." },
      { q: "Should I keep using my steroid cream?", a: "Please do not stop or start steroid creams on your face without advice. We will guide you through it safely." },
      { q: "How long does it take to clear?", a: "Most people see improvement within several weeks of gentle care and treatment." },
      { q: "Can it come back?", a: "It can. Keeping a simple routine and avoiding your triggers helps prevent it." },
    ],
  },
  {
    slug: "hidradenitis-suppurativa",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Hidradenitis Suppurativa",
    localTopic: "Hidradenitis suppurativa treatment",
    title: "Hidradenitis Suppurativa",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Hidradenitis Suppurativa Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Compassionate, board-certified care for hidradenitis suppurativa (HS) in Torrance, CA. Treatment for painful lumps and abscesses where skin rubs together.",
    lede: "Compassionate, private care for painful lumps and long-term relief.",
    heroPosition: "70% 30%",
    photos: {
      hero: "/images/services/hidradenitis-suppurativa/hero.webp",
      heroAlt: "Smiling woman with smooth skin touching her neck",
      one: "/images/services/hidradenitis-suppurativa/one.webp",
      oneAlt: "Woman in a soft robe and towel caring for her skin",
      two: "/images/services/hidradenitis-suppurativa/two.webp",
      twoAlt: "Doctor talking kindly with a patient in a calm consultation room",
    },
    overview: {
      eyebrow: "Understanding HS",
      title: "What is",
      accent: "hidradenitis suppurativa?",
      text: [
        "Hidradenitis suppurativa, or HS, is a chronic skin condition causing painful lumps and abscesses, usually in areas where skin rubs together, such as the underarms, groin and under the breasts.",
        "Lumps can open, drain and heal with scars, and new ones may form over time. HS is not caused by poor hygiene and is not contagious.",
        "Early care makes a real difference. Dr. Sandhu offers private, respectful care and a plan to reduce flares and pain.",
      ],
      facts: [
        { label: "Where", value: "Skin folds" },
        { label: "Care", value: "Medical & procedural" },
        { label: "Approach", value: "Private & caring" },
      ],
    },
    candidates: {
      title: "Is HS care",
      accent: "right for you?",
      text: "See a dermatologist when painful lumps keep returning in the same areas, drain, or leave scars.",
      conditionsTitle: "What we help with",
      conditions: [
        "Painful lumps in the underarms or groin",
        "Recurring boils or abscesses",
        "Draining tunnels under the skin",
        "Scarring from past flares",
        "Mild to severe HS",
        "Frequent flares",
      ],
      signs: [
        "Lumps that keep coming back",
        "Painful, swollen bumps in skin folds",
        "Bumps that open and drain",
        "Scars in the same areas",
        "Pain that affects daily life",
        "Antibiotics alone have not helped",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "HS care is a long-term partnership. Dr. Sandhu combines treatments to calm flares, ease pain and limit scarring.",
      items: [
        { title: "Medical treatment", text: "Prescription washes, creams and medicines by mouth to reduce inflammation and flares." },
        { title: "Advanced therapies", text: "For moderate to severe HS, newer prescription treatments may be part of your plan." },
        { title: "In-office procedures", text: "Incision and drainage can relieve a painful, swollen lump when needed.", href: "/surgical-dermatology/incision-and-drainage" },
        { title: "Daily comfort", text: "Gentle skin care, loose clothing and wound care tips that make flares easier to manage." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your HS care usually unfolds.",
      items: [
        { label: "Visit", title: "Private consultation", text: "Dr. Sandhu listens to your story, examines the affected areas with care and answers your questions." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a plan for treatment and for what to do when a flare starts." },
        { label: "First months", title: "Fewer flares", text: "Most treatments take weeks to months to reduce flares. Some need lab checks along the way." },
        { label: "Follow-up", title: "Ongoing support", text: "We adjust your plan over time and see you quickly when a painful flare needs attention." },
      ],
    },
    safety: {
      title: "Safe, respectful care",
      text: [
        "Some HS treatments need blood tests or regular check-ins, and some are not used during pregnancy.",
        "Dr. Sandhu explains every option clearly and treats you with privacy and respect at every visit.",
      ],
    },
    faqs: [
      { q: "Is HS caused by poor hygiene?", a: "No. HS is a chronic inflammatory condition. It is not caused by being unclean and it is not contagious." },
      { q: "Can HS be cured?", a: "There is no cure yet, but treatment can reduce flares, pain and scarring, especially when started early." },
      { q: "Can you drain a painful lump?", a: "Yes. Incision and drainage is one of the procedures we offer to relieve a painful, swollen lump when needed." },
      { q: "What can I do at home?", a: "Wear loose, breathable clothing, use gentle cleansers and avoid shaving irritated areas. We will share more tips at your visit." },
    ],
  },
  {
    slug: "seborrheic-dermatitis",
    category: "medical-dermatology",
    group: "Acne & Inflammation",
    name: "Seborrheic Dermatitis",
    localTopic: "Seborrheic dermatitis treatment",
    title: "Seborrheic Dermatitis",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Seborrheic Dermatitis & Dandruff Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified care for seborrheic dermatitis and dandruff in Torrance, CA. Calm flaky, itchy scalp and red, scaly patches on the face.",
    lede: "Relief for flaky, itchy scalp and red, scaly patches on the face.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/seborrheic-dermatitis/hero.webp",
      heroAlt: "Smiling woman with clear skin touching her brow",
      one: "/images/services/seborrheic-dermatitis/one.webp",
      oneAlt: "Close-up of a scalp parting with fine flakes",
      two: "/images/services/seborrheic-dermatitis/two.webp",
      twoAlt: "Smiling woman washing her hair with a gentle shampoo",
    },
    overview: {
      eyebrow: "Understanding Seborrheic Dermatitis",
      title: "What is",
      accent: "seborrheic dermatitis?",
      text: [
        "Seborrheic dermatitis is a common condition that causes a flaky scalp, often with redness. Dandruff is its mildest form.",
        "It can also cause red, scaly patches on the face, especially the eyebrows, the sides of the nose and behind the ears. It often comes and goes, and stress or cold weather can make it worse.",
        "It is very treatable. Dr. Sandhu creates a simple routine that keeps flakes and redness under control.",
      ],
      facts: [
        { label: "Mild form", value: "Dandruff" },
        { label: "Common areas", value: "Scalp, brows, nose" },
        { label: "Approach", value: "Simple routine" },
      ],
    },
    candidates: {
      title: "Is seborrheic dermatitis care",
      accent: "right for you?",
      text: "See a dermatologist when flaking or redness does not improve with over-the-counter dandruff shampoos, or spreads to the face.",
      conditionsTitle: "What we help with",
      conditions: [
        "Dandruff and flaky scalp",
        "Red, scaly patches on the face",
        "Flaking in the eyebrows",
        "Redness beside the nose",
        "Scaling behind the ears",
        "Cradle cap in babies",
      ],
      signs: [
        "Flakes that will not go away",
        "An itchy scalp",
        "Red, greasy or scaly patches",
        "Dandruff shampoos have not worked",
        "Flares in cold or stressful times",
        "Flaking that affects your confidence",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Seborrheic dermatitis cannot be cured, but it can be well controlled with the right routine.",
      items: [
        { title: "Medicated shampoos", text: "The right shampoo, and how to use it, to calm flaking and itch on the scalp." },
        { title: "Prescription treatments", text: "Prescription creams, foams or solutions to calm redness and scale on the face and scalp." },
        { title: "Maintenance plan", text: "A simple routine that keeps flares away once your skin is clear." },
        { title: "Care for babies", text: "Gentle guidance for cradle cap and seborrheic dermatitis in infants." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your scalp and skin and reviews the products you have tried." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a clear routine for washing, treating and maintaining your skin." },
        { label: "First weeks", title: "Seeing results", text: "Flaking and redness usually improve within a few weeks of consistent use." },
        { label: "Follow-up", title: "Keep it calm", text: "We adjust your plan for flares and seasons, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe, gentle care",
      text: [
        "Treatments for the face are gentler than those for the scalp, and some products are not right for babies.",
        "Dr. Sandhu explains how and how often to use each product, so your skin stays comfortable.",
      ],
    },
    faqs: [
      { q: "Is dandruff the same as seborrheic dermatitis?", a: "Dandruff is the mildest form of seborrheic dermatitis. More active forms cause redness and scaling, sometimes on the face." },
      { q: "Is it contagious?", a: "No. Seborrheic dermatitis cannot be passed to other people." },
      { q: "Can it be cured?", a: "It tends to come and go, but the right routine keeps it well controlled." },
      { q: "Do you treat cradle cap in babies?", a: "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults." },
    ],
  },
  {
    slug: "melasma",
    category: "medical-dermatology",
    group: "Pigment",
    name: "Melasma",
    localTopic: "Melasma treatment",
    title: "Melasma Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Melasma Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified melasma care in Torrance, CA. Fade dark, discolored patches on the face with prescription care, customized peels and careful light treatments.",
    lede: "A more even, luminous complexion, with patient, expert care for dark patches on the face.",
    heroPosition: "center 30%",
    photos: {
      hero: "/images/services/melasma/hero.webp",
      heroAlt: "Woman with smooth, even-toned skin resting her fingers on her cheek",
      one: "/images/services/melasma/one.webp",
      oneAlt: "Woman's face showing even skin on one side and melasma patches on the other",
      two: "/images/services/melasma/two.webp",
      twoAlt: "Smiling woman applying a light cream to her jaw at home",
    },
    overview: {
      eyebrow: "Understanding Melasma",
      title: "What is",
      accent: "melasma?",
      text: [
        "Melasma causes dark, discolored patches, usually on the face. It often appears on the cheeks, forehead, nose and upper lip.",
        "It is more common in women and is linked to sun exposure and hormones, such as during pregnancy or with birth control. It tends to return, so it is managed over time.",
        "Dr. Sandhu combines strict sun protection with treatments chosen for your skin type, to fade patches safely and keep them from coming back.",
      ],
      facts: [
        { label: "Where", value: "Cheeks, forehead, lip" },
        { label: "Triggers", value: "Sun & hormones" },
        { label: "Approach", value: "Gentle & steady" },
      ],
    },
    candidates: {
      title: "Is melasma care",
      accent: "right for you?",
      text: "See a dermatologist when brown or gray-brown patches on your face do not fade, spread, or return every summer.",
      conditionsTitle: "What we help with",
      conditions: [
        "Patches on the cheeks and forehead",
        "Darkening on the upper lip",
        "Melasma during or after pregnancy",
        "Melasma that returns each summer",
        "Melasma in all skin types",
        "Uneven tone that makeup cannot hide",
      ],
      signs: [
        "Brown or gray-brown facial patches",
        "Patches that match on both sides",
        "Spots that darken in the sun",
        "Store-bought brighteners have not worked",
        "Patches after a pregnancy",
        "Uneven tone affecting your confidence",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Melasma responds best to a steady, layered plan. Dr. Sandhu chooses each step carefully, because harsh treatments can make melasma darker.",
      items: [
        { title: "Daily sun protection", text: "A broad-spectrum sunscreen every day, reapplied outdoors, is the foundation of every melasma plan." },
        { title: "Prescription creams", text: "Topical treatments that gradually lighten dark patches and even out skin tone." },
        { title: "Customized chemical peels", text: "Peels that exfoliate the top layers of skin to improve tone, texture and pigmentation.", href: "/cosmetic-dermatology/chemical-peels" },
        { title: "Light & laser care", text: "For some patients, carefully selected light or laser treatments may be added to the plan." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your melasma care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin and talks about sun exposure, hormones and the products you use." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a simple daily routine and a treatment plan suited to your skin type." },
        { label: "First months", title: "Gradual fading", text: "Melasma fades slowly. Most people see a difference over several weeks to months with steady care." },
        { label: "Follow-up", title: "Keep it even", text: "We adjust treatment and plan for sunny seasons to help keep patches from returning." },
      ],
    },
    safety: {
      title: "Safe, careful care",
      text: [
        "Some melasma treatments are not used during pregnancy or while breastfeeding, and some can irritate or darken the skin if used the wrong way.",
        "Dr. Sandhu chooses treatments that are safe for your skin type and explains exactly how to use them.",
      ],
    },
    faqs: [
      { q: "Can melasma be cured?", a: "Melasma can be greatly improved, but it tends to come back, especially with sun or hormone changes. Ongoing care keeps it under control." },
      { q: "Can I treat melasma during pregnancy?", a: "Some treatments are not safe during pregnancy. Gentle care and strict sun protection come first. We will guide you on what is safe." },
      { q: "Do lasers help melasma?", a: "Sometimes, but not for everyone, and the wrong treatment can make melasma darker. Dr. Sandhu decides carefully whether light or laser care fits your skin." },
      { q: "How long does treatment take?", a: "Melasma fades gradually. Most people need several weeks to months of steady care to see clear change." },
    ],
  },
  {
    slug: "hyperpigmentation",
    category: "medical-dermatology",
    group: "Pigment",
    name: "Hyperpigmentation",
    localTopic: "Hyperpigmentation treatment",
    title: "Hyperpigmentation",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Hyperpigmentation & Dark Spot Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified treatment for dark spots, sun spots and post-acne marks in Torrance, CA, with prescription care, peels and advanced laser and light devices.",
    lede: "Fade dark spots, sun spots and post-acne marks for a brighter, more even tone.",
    heroPosition: "center 30%",
    photos: {
      hero: "/images/services/hyperpigmentation/hero.webp",
      heroAlt: "Woman with bright, even skin looking softly over her shoulder",
      one: "/images/services/hyperpigmentation/one.webp",
      oneAlt: "Close-up of small dark spots on the skin beside the nose",
      two: "/images/services/hyperpigmentation/two.webp",
      twoAlt: "Smiling woman relaxing during a light-based facial treatment",
    },
    overview: {
      eyebrow: "Understanding Hyperpigmentation",
      title: "What is",
      accent: "hyperpigmentation?",
      text: [
        "Hyperpigmentation is darkening of the skin due to excess melanin, the pigment that gives skin its color.",
        "It includes sun spots from UV exposure and aging, dark marks left after acne or irritation, and melasma. It can affect every skin type.",
        "Dr. Sandhu finds the cause of your spots and matches treatment to your skin, from prescription care to advanced laser and light devices.",
      ],
      facts: [
        { label: "Common causes", value: "Sun, acne, aging" },
        { label: "Care", value: "Topical, peel, laser" },
        { label: "Skin types", value: "All skin types" },
      ],
    },
    candidates: {
      title: "Is pigment care",
      accent: "right for you?",
      text: "See a dermatologist when dark spots do not fade, keep multiplying, or you want a more even tone safely.",
      conditionsTitle: "What we help with",
      conditions: [
        "Sun spots and age spots",
        "Dark marks after acne",
        "Uneven skin tone",
        "Freckling from sun damage",
        "Melasma",
        "Dark patches after irritation or injury",
      ],
      signs: [
        "Spots that do not fade",
        "New spots appearing over time",
        "Marks left after breakouts",
        "Uneven tone across the face",
        "Brightening products have not helped",
        "Any spot that changes or looks unusual",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "We match treatment to the cause and depth of your pigment, and to your skin type.",
      items: [
        { title: "Prescription creams", text: "Topical treatments that gradually lighten dark spots and even out skin tone." },
        { title: "Laser & light devices", text: "The M22 Stellar IPL and Q-Switched Nd:YAG target pigmentation, and UltraClear treats pigment and sun damage.", href: "/cosmetic-dermatology/sun-spots-and-sun-damage" },
        { title: "Customized chemical peels", text: "Peels that exfoliate the top layers of skin to improve tone, texture and pigmentation.", href: "/cosmetic-dermatology/chemical-peels" },
        { title: "Sun protection", text: "Daily broad-spectrum sunscreen keeps results lasting and prevents new spots." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your spots, checks that each one is harmless, and talks about your goals." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a routine and a treatment plan, including any device sessions that fit your skin." },
        { label: "Weeks to months", title: "Gradual fading", text: "Spots fade over several weeks. Device treatments are usually spaced a few weeks apart." },
        { label: "Follow-up", title: "Maintain your glow", text: "We review results and help you keep new spots away with smart sun care." },
      ],
    },
    safety: {
      title: "Safe care for every skin type",
      text: [
        "Not every laser or peel is right for every skin type. Dr. Sandhu selects settings and treatments with care, including options safe for skin of color.",
        "Before treating any spot, we make sure it is harmless. A spot that changes, bleeds or looks unusual is checked first.",
      ],
    },
    faqs: [
      { q: "What causes dark spots?", a: "Sun exposure, aging, acne, irritation and hormones are common causes. Finding the cause helps us choose the right treatment." },
      { q: "Which lasers do you use for pigment?", a: "We offer the M22 Stellar IPL and Q-Switched Nd:YAG, which target pigmentation, and the UltraClear laser, which can treat pigmentation and sun damage." },
      { q: "Is laser treatment safe for darker skin?", a: "Some lasers are. The UltraClear laser is safe for all skin types, including skin of color. Dr. Sandhu chooses the safest option for you." },
      { q: "How can I prevent new spots?", a: "Wear a broad-spectrum sunscreen every day, reapply outdoors, and treat acne early to avoid dark marks." },
    ],
  },
  {
    slug: "vitiligo",
    category: "medical-dermatology",
    group: "Pigment",
    name: "Vitiligo",
    localTopic: "Vitiligo treatment",
    title: "Vitiligo Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Vitiligo Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Compassionate, board-certified vitiligo care in Torrance, CA. Treatment and support for white patches caused by pigment loss, for every age.",
    lede: "Compassionate, expert care for white patches, with treatment and support that fit your goals.",
    heroPosition: "70% 40%",
    photos: {
      hero: "/images/services/vitiligo/hero.webp",
      heroAlt: "Relaxed woman with vitiligo resting her arm on a soft pillow",
      one: "/images/services/vitiligo/one.webp",
      oneAlt: "Close-up of a woman's shoulder and hand with lighter vitiligo patches",
      two: "/images/services/vitiligo/two.webp",
      twoAlt: "Dermatologist reviewing skin images with a patient on a tablet",
    },
    overview: {
      eyebrow: "Understanding Vitiligo",
      title: "What is",
      accent: "vitiligo?",
      text: [
        "Vitiligo is a condition causing white patches on the skin due to pigment loss. It happens when the immune system affects the cells that make skin color.",
        "Patches can appear anywhere, often on the face, hands and around the eyes and mouth, and may spread over time. Vitiligo is not contagious and is not harmful to your health.",
        "Treatment is your choice. Dr. Sandhu explains your options, from helping color return to protecting and caring for your skin.",
      ],
      facts: [
        { label: "Main sign", value: "White patches" },
        { label: "Contagious", value: "Never" },
        { label: "Approach", value: "Your goals first" },
      ],
    },
    candidates: {
      title: "Is vitiligo care",
      accent: "right for you?",
      text: "See a dermatologist when new light or white patches appear, spread, or you want to explore treatment.",
      conditionsTitle: "What we help with",
      conditions: [
        "New white or light patches",
        "Vitiligo on the face and hands",
        "Spreading vitiligo",
        "Vitiligo in children",
        "Patches around the eyes and mouth",
        "Sun care for depigmented skin",
      ],
      signs: [
        "Light or white patches on the skin",
        "Patches that are spreading",
        "Early graying of hair in a patch",
        "Sunburn on light patches",
        "Questions about treatment options",
        "Patches affecting how you feel",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Vitiligo care is personal. Some people want to restore color, others want to protect their skin. We support either choice.",
      items: [
        { title: "Prescription creams", text: "Topical treatments that calm the immune reaction and can help color return, especially on the face." },
        { title: "Newer treatments", text: "Newer prescription options for vitiligo may be part of your plan." },
        { title: "Light therapy", text: "For some patients, light-based therapy can help restore color. We discuss whether it fits you." },
        { title: "Sun & skin care", text: "Sun protection for light patches, and guidance on cosmetic cover if you would like it." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your vitiligo care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin, confirms the diagnosis and listens to what matters most to you." },
        { label: "Same day", title: "Your personal plan", text: "You leave with clear options and a plan you feel good about." },
        { label: "Months", title: "Patience", text: "Color returns slowly, often over months. Areas like the face tend to respond best." },
        { label: "Follow-up", title: "Ongoing support", text: "We track your progress with photos and adjust your plan along the way." },
      ],
    },
    safety: {
      title: "Safe, supportive care",
      text: [
        "Some vitiligo treatments need regular check-ins, and some are not right for every age. Light patches also burn easily in the sun.",
        "Dr. Sandhu explains each option clearly and monitors your skin to keep treatment safe.",
      ],
    },
    faqs: [
      { q: "Is vitiligo contagious?", a: "No. Vitiligo cannot be passed from person to person." },
      { q: "Can color come back?", a: "Often, yes. Many people regain some color with treatment, especially on the face. Results vary from person to person." },
      { q: "Do I have to treat vitiligo?", a: "No. Vitiligo is not harmful to your health, so treatment is your choice. We support you either way, including sun care for light patches." },
      { q: "Do you treat children?", a: "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults." },
    ],
  },
  {
    slug: "pigmentary-disorders",
    category: "medical-dermatology",
    group: "Pigment",
    name: "Pigmentary Disorders",
    localTopic: "Pigmentary disorder treatment",
    title: "Pigmentary Disorders",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Pigmentary Disorder Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified care for conditions that change skin color in Torrance, CA: dark spots, light patches, melasma, vitiligo and more, for every skin type.",
    lede: "Expert diagnosis and care for any condition that changes the color of your skin.",
    heroPosition: "center 30%",
    photos: {
      hero: "/images/services/pigmentary-disorders/hero.webp",
      heroAlt: "Woman with clear, even skin touching her cheek against a white background",
      one: "/images/services/pigmentary-disorders/one.webp",
      oneAlt: "Dermatologist examining a woman's facial skin under a magnifying lamp",
      two: "/images/services/pigmentary-disorders/two.webp",
      twoAlt: "Woman in a straw sun hat applying sunscreen to her face",
    },
    overview: {
      eyebrow: "Understanding Pigmentary Disorders",
      title: "What are",
      accent: "pigmentary disorders?",
      text: [
        "Pigmentary disorders are conditions affecting skin color, like hyperpigmentation or vitiligo. Skin can become darker, lighter, or uneven in tone.",
        "Some changes come from sun, hormones, acne or irritation. Others come from the immune system or from growths in the skin. Many look alike, so a correct diagnosis matters.",
        "Dr. Sandhu's training across all skin types, including skin of color, helps her find the cause and choose care that is safe for your skin.",
      ],
      facts: [
        { label: "Darker skin", value: "Hyperpigmentation" },
        { label: "Lighter skin", value: "Hypopigmentation" },
        { label: "First step", value: "Right diagnosis" },
      ],
    },
    candidates: {
      title: "Is pigment care",
      accent: "right for you?",
      text: "See a dermatologist whenever your skin color changes in a way you do not understand, or a spot or patch changes over time.",
      conditionsTitle: "What we help with",
      conditions: [
        "Melasma",
        "Sun spots and dark marks",
        "Vitiligo and white patches",
        "Light patches after inflammation",
        "Dermatosis papulosa nigra",
        "Uneven skin tone",
      ],
      signs: [
        "New dark or light patches",
        "Spots that change in size or color",
        "Uneven tone that will not fade",
        "Patches after a rash or injury",
        "Products that have not helped",
        "Any spot that looks unusual",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Every pigment condition is treated differently. Once we know the cause, we build a plan around it.",
      items: [
        { title: "Accurate diagnosis", text: "A careful exam, often with a dermatoscope, to tell similar-looking conditions apart." },
        { title: "Medical treatment", text: "Prescription creams and other treatments matched to your specific condition." },
        { title: "Peels, laser & light", text: "Customized peels and laser and light devices for pigmentation, chosen for your skin type.", href: "/medical-dermatology/hyperpigmentation" },
        { title: "Prevention", text: "Daily sun protection and gentle care to keep your results and protect your skin." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your skin and asks when the change started and what may have triggered it." },
        { label: "Same day", title: "Diagnosis & plan", text: "You leave knowing what is causing the change and what we will do about it." },
        { label: "Weeks to months", title: "Treatment", text: "Pigment changes improve gradually. We keep your plan simple and steady." },
        { label: "Follow-up", title: "Fine-tune", text: "We review progress and adjust treatment, in the office or by video visit." },
      ],
    },
    safety: {
      title: "Safe care for every skin type",
      text: [
        "Skin of color can react differently to peels, lasers and some creams. The right choice protects you from new dark or light spots.",
        "Dr. Sandhu chooses treatments with care and checks that every spot is harmless before treating it.",
      ],
    },
    faqs: [
      { q: "Why is my skin changing color?", a: "Sun, hormones, acne, rashes, the immune system and some growths can all change skin color. An exam is the best way to find out." },
      { q: "Can a dark spot be serious?", a: "Most are harmless, but a spot that changes, bleeds or looks different should always be checked." },
      { q: "Do you treat skin of color?", a: "Yes. Dr. Sandhu's training at Harbor-UCLA and UCSF included all skin types, including skin of color." },
      { q: "Will my skin go back to its normal color?", a: "Many pigment changes improve with time and treatment. We will tell you what to expect for your condition." },
    ],
  },
  {
    slug: "hair-loss",
    category: "medical-dermatology",
    group: "Hair & Nails",
    name: "Hair Loss",
    localTopic: "Hair loss treatment",
    title: "Hair Loss Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Hair Loss (Alopecia) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified hair loss care in Torrance, CA for women, men and children. Diagnosis and treatment of thinning hair and alopecia, including PRP.",
    lede: "Find out why your hair is thinning, and start a plan to protect and regrow it.",
    heroPosition: "center 35%",
    photos: {
      hero: "/images/services/hair-loss/hero.webp",
      heroAlt: "Woman with full, glossy shoulder-length hair",
      one: "/images/services/hair-loss/one.webp",
      oneAlt: "Woman checking her hair parting in a mirror",
      two: "/images/services/hair-loss/two.webp",
      twoAlt: "Dermatologist showing a patient a magnified scalp image on a screen",
    },
    overview: {
      eyebrow: "Understanding Hair Loss",
      title: "What is",
      accent: "hair loss?",
      text: [
        "Hair loss, or alopecia, is partial or complete loss of hair from the scalp or body. It can be gradual thinning, a widening part, or sudden round patches.",
        "There are many causes, including genetics, hormones, stress, illness, nutrition, tight hairstyles and conditions such as alopecia areata. The right treatment depends on the cause.",
        "Dr. Sandhu examines your scalp closely, looks for the cause and builds a plan to slow shedding and help hair grow back where possible.",
      ],
      facts: [
        { label: "Who we treat", value: "Women, men & kids" },
        { label: "First step", value: "Find the cause" },
        { label: "Options include", value: "PRP for hair loss" },
      ],
    },
    candidates: {
      title: "Is hair loss care",
      accent: "right for you?",
      text: "See a dermatologist when you notice more shedding than usual, thinning, a widening part or bald patches. Early care gives the best results.",
      conditionsTitle: "What we help with",
      conditions: [
        "Female and male pattern hair loss",
        "Thinning hair and a widening part",
        "Alopecia areata (round bald patches)",
        "Sudden heavy shedding",
        "Hair loss from tight hairstyles",
        "Hair loss in children",
      ],
      signs: [
        "More hair in the brush or shower",
        "A wider part or thinner ponytail",
        "Round smooth bald patches",
        "A receding hairline",
        "Itchy, flaky or sore scalp with shedding",
        "Hair loss affecting your confidence",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Hair loss treatment works best when it starts early and matches the cause. Dr. Sandhu often combines approaches.",
      items: [
        { title: "Diagnosis first", text: "A close scalp exam, and lab tests when needed, to find what is causing your hair loss." },
        { title: "Prescription treatments", text: "Topical and oral medicines that can slow shedding and support regrowth." },
        { title: "PRP for hair loss", text: "Uses your own plasma, rich in growth factors, placed into the scalp to stimulate growth and improve thickness.", href: "/cosmetic-dermatology/prp-for-hair-loss" },
        { title: "Scalp & hair care", text: "Gentle hair care habits and treatment of any scalp condition that adds to shedding." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your hair loss care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your scalp and hair and asks about your health, family history and recent changes." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a clear plan. Lab tests may be ordered to check for hidden causes." },
        { label: "Three to six months", title: "Patience", text: "Hair grows slowly. Most treatments take a few months before you see a difference." },
        { label: "Follow-up", title: "Track progress", text: "We compare photos over time and adjust your plan to keep improving." },
      ],
    },
    safety: {
      title: "Safe, monitored care",
      text: [
        "Some hair loss medicines are not used during pregnancy, and some need check-ins or lab tests.",
        "Dr. Sandhu reviews your health history, explains benefits and possible side effects, and follows your progress closely.",
      ],
    },
    faqs: [
      { q: "What causes hair loss?", a: "Genetics, hormones, stress, illness, nutrition, hairstyles and conditions like alopecia areata are common causes. Finding the cause guides treatment." },
      { q: "Do you offer PRP for hair loss?", a: "Yes. PRP uses your own plasma, rich in growth factors, to stimulate hair growth and improve thickness." },
      { q: "Do you treat hair loss in children?", a: "Yes. Dr. Sandhu treats patients of all ages, including alopecia areata in children." },
      { q: "How long until I see results?", a: "Hair grows slowly, so most treatments take a few months to show results. Starting early helps." },
    ],
  },
  {
    slug: "nail-disorders",
    category: "medical-dermatology",
    group: "Hair & Nails",
    name: "Nail Disorders",
    localTopic: "Nail disorder treatment",
    title: "Nail Disorders",
    accent: "Treatment in Torrance, CA",
    metaTitle: "Nail Disorder Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified care for nail problems in Torrance, CA: changes in nail shape, color or growth, brittle or splitting nails, and nail psoriasis.",
    lede: "Healthy, strong nails, with expert care for changes in shape, color or growth.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/nail-disorders/hero.webp",
      heroAlt: "Woman's hands with natural, healthy nails resting on a soft white towel",
      one: "/images/services/nail-disorders/one.webp",
      oneAlt: "Dermatologist examining a patient's hand and nails",
      two: "/images/services/nail-disorders/two.webp",
      twoAlt: "Graceful hands with smooth skin and neat natural nails",
    },
    overview: {
      eyebrow: "Understanding Nail Disorders",
      title: "What are",
      accent: "nail disorders?",
      text: [
        "Nail disorders are abnormalities in nail shape, color or growth. Nails may become brittle, split, thicken, lift, ridge or change color.",
        "Nail changes can come from injury, infection, skin conditions such as psoriasis or eczema, or health conditions elsewhere in the body.",
        "Because nails grow slowly and many problems look alike, a dermatologist's exam is the fastest way to the right treatment.",
      ],
      facts: [
        { label: "Common signs", value: "Color, shape, growth" },
        { label: "Causes", value: "Skin, infection, injury" },
        { label: "Approach", value: "Diagnosis first" },
      ],
    },
    candidates: {
      title: "Is nail care",
      accent: "right for you?",
      text: "See a dermatologist when a nail changes color, shape or thickness, lifts from the nail bed, or has a dark streak.",
      conditionsTitle: "What we help with",
      conditions: [
        "Brittle, peeling or splitting nails",
        "Nail psoriasis",
        "Thick or lifting nails",
        "Ridges, pits and grooves",
        "Discolored nails",
        "Ingrown or painful nails",
      ],
      signs: [
        "A nail that changes color",
        "Thickening or crumbling",
        "A nail lifting from the skin",
        "A new dark line in a nail",
        "Pain, redness or swelling",
        "Nails that will not grow normally",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Treatment depends on the cause. Once we know what is affecting your nails, we build a plan to help them grow back healthy.",
      items: [
        { title: "Accurate diagnosis", text: "A close exam of the nails and skin, and a nail sample when needed, to find the cause." },
        { title: "Treating the cause", text: "Care for underlying conditions such as psoriasis, eczema or infection that affect the nails." },
        { title: "Prescription treatments", text: "Topical or oral medicines matched to your specific nail condition." },
        { title: "Nail care habits", text: "Simple daily habits that protect nails and help them grow stronger." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your nail care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your nails and skin and asks about injuries, products and your health." },
        { label: "Same day", title: "Your personal plan", text: "You leave with a plan. A small nail sample may be taken to confirm the diagnosis." },
        { label: "Months", title: "New growth", text: "Nails grow slowly. Fingernails take months and toenails longer to grow out healthy." },
        { label: "Follow-up", title: "Track progress", text: "We check new growth and adjust treatment along the way." },
      ],
    },
    safety: {
      title: "Safe, careful care",
      text: [
        "A dark streak or a changing spot under a nail should always be checked, because some can be serious.",
        "Dr. Sandhu examines every nail change carefully and explains your options and any side effects in plain words.",
      ],
    },
    faqs: [
      { q: "Why are my nails changing?", a: "Injury, infection, skin conditions like psoriasis, and some health conditions can all change your nails. An exam helps find the cause." },
      { q: "Should a dark line in my nail be checked?", a: "Yes. A new or changing dark streak in a nail should always be examined by a dermatologist." },
      { q: "How long does it take for nails to improve?", a: "Nails grow slowly. Fingernails can take several months and toenails a year or more to grow out fully." },
      { q: "Can psoriasis affect nails?", a: "Yes. Psoriasis can cause pits, thickening, discoloration and lifting of the nails, and it can be treated." },
    ],
  },
  {
    slug: "nail-fungus",
    category: "medical-dermatology",
    group: "Hair & Nails",
    name: "Nail Fungus",
    localTopic: "Nail fungus treatment",
    title: "Nail Fungus Treatment",
    accent: "in Torrance, CA",
    metaTitle: "Nail Fungus Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    description:
      "Board-certified nail fungus treatment in Torrance, CA. Clear thick, discolored toenails and fingernails with a confirmed diagnosis and the right plan.",
    lede: "Clear, healthy-looking nails, with a confirmed diagnosis and a plan that works.",
    heroPosition: "center",
    photos: {
      hero: "/images/services/nail-fungus/hero.webp",
      heroAlt: "Smooth bare feet with clean, healthy toenails resting on a white towel",
      one: "/images/services/nail-fungus/one.webp",
      oneAlt: "Woman applying a soothing cream to her feet",
      two: "/images/services/nail-fungus/two.webp",
      twoAlt: "Woman gently caring for her feet and toenails",
    },
    overview: {
      eyebrow: "Understanding Nail Fungus",
      title: "What is",
      accent: "nail fungus?",
      text: [
        "Nail fungus is a fungal infection that thickens and discolors the nails. Toenails are affected most often.",
        "Nails may turn yellow, white or brown, become thick or crumbly, and lift from the nail bed. It often starts after athlete's foot or warm, damp conditions.",
        "Many nail problems look like fungus but are not. Dr. Sandhu confirms the diagnosis first, so you get treatment that actually works.",
      ],
      facts: [
        { label: "Most affected", value: "Toenails" },
        { label: "Main signs", value: "Thick, discolored" },
        { label: "First step", value: "Confirm diagnosis" },
      ],
    },
    candidates: {
      title: "Is nail fungus care",
      accent: "right for you?",
      text: "See a dermatologist when a nail becomes thick, discolored or crumbly, or store-bought treatments have not worked.",
      conditionsTitle: "What we help with",
      conditions: [
        "Toenail fungus",
        "Fingernail fungus",
        "Thick, yellow or white nails",
        "Crumbly or brittle nails",
        "Fungus with athlete's foot",
        "Infections that keep coming back",
      ],
      signs: [
        "Yellow, white or brown nails",
        "Thickened nails",
        "Crumbling or ragged edges",
        "A nail lifting from the skin",
        "Discomfort in shoes",
        "Store-bought products have not helped",
      ],
    },
    options: {
      title: "Your treatment",
      accent: "options",
      text: "Nail fungus is stubborn, so the right plan and patience matter. Dr. Sandhu matches treatment to how many nails are involved and how deep the infection goes.",
      items: [
        { title: "Confirming the diagnosis", text: "A small nail sample may be checked to confirm fungus before treatment starts." },
        { title: "Topical treatments", text: "Prescription nail solutions for milder infections." },
        { title: "Oral medicines", text: "For more widespread or stubborn infections, medicine by mouth may be recommended." },
        { title: "Prevention", text: "Treating athlete's foot and simple foot care habits to keep fungus from coming back." },
      ],
    },
    steps: {
      title: "What to",
      accent: "expect",
      text: "Here is how your care usually unfolds.",
      items: [
        { label: "Visit", title: "Consultation", text: "Dr. Sandhu examines your nails and skin and may take a small sample to confirm fungus." },
        { label: "Same day", title: "Your personal plan", text: "You leave with clear instructions for treatment and foot care." },
        { label: "Months", title: "Clear nails grow in", text: "Treatment clears the infection, but a healthy nail takes many months to grow out fully." },
        { label: "Follow-up", title: "Stay clear", text: "We check progress and help prevent the infection from returning." },
      ],
    },
    safety: {
      title: "Safe, monitored care",
      text: [
        "Some oral antifungal medicines need a review of your other medicines and sometimes lab tests.",
        "Dr. Sandhu chooses the safest effective treatment for you and explains what to expect.",
      ],
    },
    faqs: [
      { q: "Is it definitely fungus?", a: "Not always. Psoriasis, injury and other conditions can look like nail fungus. That is why we confirm the diagnosis first." },
      { q: "How long does treatment take?", a: "The infection can clear within months, but a toenail can take a year or more to grow out completely clear." },
      { q: "Can nail fungus come back?", a: "It can. Treating athlete's foot, keeping feet dry and wearing breathable shoes help prevent it." },
      { q: "Do store-bought treatments work?", a: "They may help very mild cases, but most nail fungus needs prescription treatment." },
    ],
  },
  {
    "slug": "rashes",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Rashes",
    "localTopic": "Rash treatment",
    "title": "Rash Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Rash Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified rash diagnosis and treatment in Torrance, CA for adults and children. Find the cause of red, itchy or irritated skin, in office or by video visit.",
    "lede": "Find out what is causing your rash and get calm, comfortable skin again.",
    "heroPosition": "70% 35%",
    "photos": {
      "hero": "/images/services/rashes/hero.webp",
      "heroAlt": "Woman looking down at an itchy patch on her upper arm",
      "one": "/images/services/rashes/one.webp",
      "oneAlt": "Close-up of hands scratching a red rash on the arm",
      "two": "/images/services/rashes/two.webp",
      "twoAlt": "Dermatologist examining a rash on a patient's forearm"
    },
    "overview": {
      "eyebrow": "Understanding Rashes",
      "title": "What is a",
      "accent": "rash?",
      "text": [
        "A rash is a general term for inflamed or irritated skin. It can be red, bumpy, scaly, blistered or itchy, and it can appear anywhere on the body.",
        "Rashes have many possible causes, including allergies, irritants, infections, heat, medicines and skin conditions such as eczema or psoriasis.",
        "Because many rashes look alike, the right diagnosis is the key to the right treatment. Dr. Sandhu finds the cause and calms your skin."
      ],
      "facts": [
        {
          "label": "Who we treat",
          "value": "Adults & children"
        },
        {
          "label": "Visit options",
          "value": "In office or video"
        },
        {
          "label": "First step",
          "value": "Find the cause"
        }
      ]
    },
    "candidates": {
      "title": "Is rash care",
      "accent": "right for you?",
      "text": "See a dermatologist when a rash spreads, lasts more than a few days, keeps coming back, or does not improve with simple care.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "New or unexplained rashes",
        "Itchy, red or scaly patches",
        "Rashes that keep coming back",
        "Rashes in children",
        "Heat rash",
        "Rashes after a new product or medicine"
      ],
      "signs": [
        "A rash that spreads",
        "Itching that disturbs sleep",
        "Blisters or open skin",
        "A rash lasting more than a week",
        "Over-the-counter creams have not helped",
        "A rash with fever or feeling unwell (seek urgent care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the cause. Once we know what is behind your rash, we calm it and help prevent it from coming back.",
      "items": [
        {
          "title": "Accurate diagnosis",
          "text": "A careful exam and history, and tests when needed, to find what is causing the rash."
        },
        {
          "title": "Calming the skin",
          "text": "Prescription creams and ointments that reduce redness, itch and inflammation."
        },
        {
          "title": "Treating the cause",
          "text": "Care for an infection, allergy or skin condition behind the rash."
        },
        {
          "title": "Prevention plan",
          "text": "Gentle skin care and advice on triggers to avoid."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the rash and asks when it started, what touched your skin and any new products or medicines."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear diagnosis or next step and treatment to calm the skin."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Most rashes improve within days to weeks once the cause is treated."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We check your skin and adjust care, in the office or by secure video visit."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Rash treatments are chosen for the area of skin and your age. Stronger creams are used carefully on the face and skin folds.",
        "A rash with fever, blistering over large areas or trouble breathing needs urgent medical care right away."
      ]
    },
    "faqs": [
      {
        "q": "Can I have a rash checked by video?",
        "a": "Yes. Our teledermatology visits cover new rashes and follow-up care, from the comfort of your home."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      },
      {
        "q": "What causes most rashes?",
        "a": "Allergies, irritants, infections, heat and skin conditions like eczema are common causes. An exam helps tell them apart."
      },
      {
        "q": "When is a rash an emergency?",
        "a": "Seek urgent care for a rash with fever, rapid spreading, blistering, swelling of the face or trouble breathing."
      }
    ]
  },
  {
    "slug": "hives",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Hives",
    "localTopic": "Hives treatment",
    "title": "Hives Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Hives (Urticaria) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for hives in Torrance, CA. Relief for raised, itchy welts and help finding triggers, for short-term and long-lasting hives.",
    "lede": "Relief from raised, itchy welts, and help finding what sets them off.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/hives/hero.webp",
      "heroAlt": "Woman in a soft robe holding a jar of cooling soothing gel",
      "one": "/images/services/hives/one.webp",
      "oneAlt": "Woman with redness on her neck applying a soothing serum",
      "two": "/images/services/hives/two.webp",
      "twoAlt": "Close-up of a hand touching an irritated red patch on the neck"
    },
    "overview": {
      "eyebrow": "Understanding Hives",
      "title": "What are",
      "accent": "hives?",
      "text": [
        "Hives are raised, itchy welts on the skin, often caused by allergic reactions. They can appear suddenly, change shape and move around the body within hours.",
        "Common triggers include foods, medicines, infections, insect stings, heat, pressure and stress. Sometimes no trigger is found.",
        "Hives that come and go for more than six weeks are called chronic hives. Dr. Sandhu helps you find relief and control flares."
      ],
      "facts": [
        {
          "label": "Main sign",
          "value": "Itchy, raised welts"
        },
        {
          "label": "Common cause",
          "value": "Allergic reactions"
        },
        {
          "label": "Focus",
          "value": "Relief & triggers"
        }
      ]
    },
    "candidates": {
      "title": "Is hives care",
      "accent": "right for you?",
      "text": "See a dermatologist when hives keep returning, last for weeks, or disturb your sleep and daily life.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Sudden (acute) hives",
        "Chronic hives lasting over six weeks",
        "Hives from food or medicine",
        "Hives triggered by heat, cold or pressure",
        "Swelling of the lips or eyelids",
        "Hives in children"
      ],
      "signs": [
        "Itchy welts that come and go",
        "Welts that move around the body",
        "Hives that return for weeks",
        "Itch that disturbs sleep",
        "Antihistamines are not enough",
        "Lip or face swelling (seek urgent care if breathing is affected)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Hives care focuses on calming the itch, preventing new welts and finding triggers when possible.",
      "items": [
        {
          "title": "Finding triggers",
          "text": "A careful history to look for foods, medicines, infections or physical triggers."
        },
        {
          "title": "Antihistamines",
          "text": "Daily antihistamines, used the right way, are the first step for most people."
        },
        {
          "title": "Advanced treatments",
          "text": "For chronic hives that do not respond, other prescription treatments may be considered."
        },
        {
          "title": "Comfort care",
          "text": "Cool compresses, loose clothing and gentle skin care to ease the itch."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu reviews when the hives appear, how long they last and anything that seems to trigger them."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a treatment plan and a simple diary to track flares and triggers."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Most people feel relief quickly once the right daily treatment starts."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We review your diary and adjust treatment until hives are under control."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Swelling of the lips, tongue or throat, or trouble breathing, is an emergency. Call 911 right away.",
        "Dr. Sandhu explains each medicine, how to take it and possible side effects, and adjusts treatment safely."
      ]
    },
    "faqs": [
      {
        "q": "Are hives contagious?",
        "a": "No. Hives cannot be passed from person to person."
      },
      {
        "q": "Will hives go away?",
        "a": "Most short-term hives settle within days to weeks. Chronic hives can last longer but are usually well controlled with treatment."
      },
      {
        "q": "What should I do if my lips or throat swell?",
        "a": "Seek emergency care right away, especially if you have trouble breathing or swallowing."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      }
    ]
  },
  {
    "slug": "allergic-reactions",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Allergic Reactions",
    "localTopic": "Allergic skin reaction care",
    "title": "Allergic Skin Reactions",
    "accent": "Care in Torrance, CA",
    "metaTitle": "Allergic Skin Reaction Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for allergic skin reactions in Torrance, CA. Calm redness, swelling and itching and find the allergen behind it.",
    "lede": "Calm redness, swelling and itching, and find out what your skin is reacting to.",
    "heroPosition": "70% 35%",
    "photos": {
      "hero": "/images/services/allergic-reactions/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/allergic-reactions/one.webp",
      "oneAlt": "Close-up of red, irritated skin on a woman's cheek",
      "two": "/images/services/allergic-reactions/two.webp",
      "twoAlt": "Woman with a red allergic flush across her neck and chest"
    },
    "overview": {
      "eyebrow": "Understanding Allergic Reactions",
      "title": "What are allergic",
      "accent": "skin reactions?",
      "text": [
        "Allergic skin reactions are skin responses such as redness, swelling or itching due to allergens. They can appear within minutes or develop over a day or two.",
        "Common allergens include fragrances, preservatives, metals, plants, foods, medicines and insect stings.",
        "Dr. Sandhu calms the reaction, helps identify the allergen and shows you how to avoid it in the future."
      ],
      "facts": [
        {
          "label": "Main signs",
          "value": "Redness, swelling, itch"
        },
        {
          "label": "Common causes",
          "value": "Products, foods, medicines"
        },
        {
          "label": "Focus",
          "value": "Find the allergen"
        }
      ]
    },
    "candidates": {
      "title": "Is allergy care",
      "accent": "right for you?",
      "text": "See a dermatologist when your skin reacts again and again, or you are not sure what is causing it.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Reactions to skin care and cosmetics",
        "Fragrance and preservative allergies",
        "Metal allergies such as nickel",
        "Reactions to medicines",
        "Allergic rashes from plants",
        "Swelling and redness after a new product"
      ],
      "signs": [
        "Redness or swelling after a product",
        "Itchy rash that keeps returning",
        "Reactions where jewelry or a watch touches",
        "Rash after starting a new medicine",
        "Products that suddenly sting",
        "You do not know what you are allergic to"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "The most important step is finding and avoiding the allergen. While we do that, we calm the skin.",
      "items": [
        {
          "title": "Calming the reaction",
          "text": "Prescription creams and other treatments that reduce redness, swelling and itch."
        },
        {
          "title": "Finding the allergen",
          "text": "A careful review of products and exposures. Allergy patch testing may be recommended."
        },
        {
          "title": "Safer product swaps",
          "text": "Guidance on gentle, fragrance-free products that suit sensitive skin."
        },
        {
          "title": "Prevention plan",
          "text": "A clear list of what to avoid to keep reactions from returning."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines your skin and reviews every product, food and medicine that may be involved."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment to calm the reaction and a plan to find the cause."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Skin usually settles within days to weeks once the allergen is avoided."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We confirm the trigger and help you build a routine your skin tolerates."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Swelling of the face, lips or throat, or trouble breathing, is a medical emergency. Call 911 right away.",
        "Dr. Sandhu chooses treatments suited to your skin and explains how to use them safely."
      ]
    },
    "faqs": [
      {
        "q": "How do I find out what I am allergic to?",
        "a": "Your history often points to the cause. Allergy patch testing may be recommended to look for specific allergens."
      },
      {
        "q": "Can I become allergic to a product I have used for years?",
        "a": "Yes. Allergies can develop at any time, even to products you have used before."
      },
      {
        "q": "When is a reaction an emergency?",
        "a": "Seek emergency care for swelling of the lips, tongue or throat, or any trouble breathing."
      },
      {
        "q": "Can I have a rash checked by video?",
        "a": "Yes. Our teledermatology visits cover new rashes and follow-up care, from the comfort of your home."
      }
    ]
  },
  {
    "slug": "itching",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Itching",
    "localTopic": "Itching (pruritus) treatment",
    "title": "Itching Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Itching (Pruritus) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for itchy skin (pruritus) in Torrance, CA. Find the cause of persistent itching and get lasting relief.",
    "lede": "Lasting relief from itchy skin, by finding and treating the cause.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/itching/hero.webp",
      "heroAlt": "Relaxed woman resting her arms on the edge of a soothing bath",
      "one": "/images/services/itching/one.webp",
      "oneAlt": "Woman reaching back to scratch an itchy spot between her shoulders",
      "two": "/images/services/itching/two.webp",
      "twoAlt": "Close-up of a red, irritated patch on the skin"
    },
    "overview": {
      "eyebrow": "Understanding Itching",
      "title": "What is",
      "accent": "itching?",
      "text": [
        "Itching, or pruritus, is an uncomfortable skin sensation causing the urge to scratch. It can affect a small area or the whole body.",
        "It can come from dry skin, eczema, hives, allergies, insect bites, infections and some medicines, and sometimes from conditions inside the body.",
        "Scratching can damage the skin and make itching worse. Dr. Sandhu finds the cause and breaks the itch-scratch cycle."
      ],
      "facts": [
        {
          "label": "Medical name",
          "value": "Pruritus"
        },
        {
          "label": "Common cause",
          "value": "Dry skin"
        },
        {
          "label": "Goal",
          "value": "Lasting relief"
        }
      ]
    },
    "candidates": {
      "title": "Is itch care",
      "accent": "right for you?",
      "text": "See a dermatologist when itching lasts more than two weeks, disturbs your sleep, or has no clear cause.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Dry, itchy skin",
        "Itching with a rash",
        "Itching without a rash",
        "Itchy scalp",
        "Itching that worsens at night",
        "Itching in older adults"
      ],
      "signs": [
        "Itch lasting more than two weeks",
        "Itch that wakes you at night",
        "Scratch marks or broken skin",
        "Itching all over the body",
        "Moisturizers have not helped",
        "Itching with weight loss or fatigue"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "We treat both the itch and its cause, so relief lasts.",
      "items": [
        {
          "title": "Finding the cause",
          "text": "A careful exam, and lab tests when needed, to look for skin or internal causes."
        },
        {
          "title": "Skin barrier care",
          "text": "The right moisturizers and bathing habits to soothe and protect the skin."
        },
        {
          "title": "Prescription relief",
          "text": "Creams and other medicines that calm itch and inflammation."
        },
        {
          "title": "Breaking the cycle",
          "text": "Tips to stop scratching and protect the skin while it heals."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines your skin and asks about your health, medicines and when the itch is worst."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with relief steps to start right away, and tests if they are needed."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Itch often eases within days to weeks as the skin heals and the cause is treated."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We review progress and adjust treatment until you are comfortable."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Some itch treatments are not right for everyone, especially in pregnancy or older age.",
        "Itching all over without a rash can sometimes signal a health problem, so we look at the whole picture."
      ]
    },
    "faqs": [
      {
        "q": "Why do I itch at night?",
        "a": "Itch often feels worse at night because of warmth, dryness and fewer distractions. Treatment can help you sleep."
      },
      {
        "q": "Can itching happen without a rash?",
        "a": "Yes. Dry skin, nerves and some internal conditions can cause itching without a visible rash."
      },
      {
        "q": "Is scratching harmful?",
        "a": "Scratching can damage the skin, cause infection and make itching worse."
      },
      {
        "q": "Can I have a rash checked by video?",
        "a": "Yes. Our teledermatology visits cover new rashes and follow-up care, from the comfort of your home."
      }
    ]
  },
  {
    "slug": "dry-skin",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Dry Skin",
    "localTopic": "Dry skin treatment",
    "title": "Dry Skin Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Dry Skin (Xerosis) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for dry, rough, flaky and itchy skin (xerosis) in Torrance, CA, with a routine that restores comfort and softness.",
    "lede": "Soft, comfortable skin again, with a simple routine that restores moisture.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/dry-skin/hero.webp",
      "heroAlt": "Woman in a white robe smoothing moisturizer onto her legs in bed",
      "one": "/images/services/dry-skin/one.webp",
      "oneAlt": "Close-up of dry, flaky skin",
      "two": "/images/services/dry-skin/two.webp",
      "twoAlt": "Smiling front desk team member"
    },
    "overview": {
      "eyebrow": "Understanding Dry Skin",
      "title": "What is",
      "accent": "dry skin?",
      "text": [
        "Dry skin, or xerosis, is rough, flaky or itchy skin due to lack of moisture. It often affects the legs, arms and hands.",
        "Hot showers, harsh soaps, dry air, aging and some skin conditions and medicines can all dry the skin out.",
        "Severe dry skin can crack and become itchy or inflamed. Dr. Sandhu builds a routine that repairs your skin barrier."
      ],
      "facts": [
        {
          "label": "Medical name",
          "value": "Xerosis"
        },
        {
          "label": "Common areas",
          "value": "Legs, arms, hands"
        },
        {
          "label": "Approach",
          "value": "Repair the barrier"
        }
      ]
    },
    "candidates": {
      "title": "Is dry skin care",
      "accent": "right for you?",
      "text": "See a dermatologist when dry skin cracks, itches, or does not improve with regular moisturizers.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Rough, flaky skin",
        "Cracked hands and heels",
        "Dry skin in winter",
        "Dry skin with aging",
        "Itchy dry patches",
        "Dry skin from skin conditions"
      ],
      "signs": [
        "Skin that cracks or bleeds",
        "Itch that will not stop",
        "Red, inflamed dry patches",
        "Moisturizers do not help",
        "Dryness that keeps returning",
        "Dry skin affecting sleep"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Most dry skin improves quickly with the right routine. When it does not, we look for an underlying cause.",
      "items": [
        {
          "title": "Barrier repair routine",
          "text": "The right moisturizers, applied at the right times, to lock in moisture."
        },
        {
          "title": "Gentle cleansing",
          "text": "Lukewarm water and mild, fragrance-free cleansers that protect the skin."
        },
        {
          "title": "Prescription care",
          "text": "Stronger creams for cracked, inflamed or very dry skin."
        },
        {
          "title": "Finding the cause",
          "text": "A check for eczema, thyroid or other conditions when dryness persists."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines your skin and reviews your bathing habits and products."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a simple daily routine and product list."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Most people feel softer, calmer skin within one to two weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We adjust your routine for the seasons and check for any underlying cause."
        }
      ]
    },
    "safety": {
      "title": "Safe, gentle care",
      "text": [
        "Cracked skin can let in infection. Tell us if dry areas become painful, warm or weep.",
        "Dr. Sandhu recommends products that suit your skin and explains how to use them."
      ]
    },
    "faqs": [
      {
        "q": "What is the best moisturizer?",
        "a": "Thick creams and ointments without fragrance usually work best. Apply them right after bathing."
      },
      {
        "q": "Why is my skin drier in winter?",
        "a": "Cold air and indoor heating pull moisture from the skin. A richer routine helps."
      },
      {
        "q": "Can dry skin be a sign of something else?",
        "a": "Sometimes. Eczema, thyroid conditions and some medicines can cause dry skin."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      }
    ]
  },
  {
    "slug": "excessive-sweating",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Excessive Sweating",
    "localTopic": "Excessive sweating treatment",
    "title": "Excessive Sweating",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Excessive Sweating (Hyperhidrosis) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for excessive sweating (hyperhidrosis) in Torrance, CA. Treatment for heavy underarm, hand, foot and facial sweating.",
    "lede": "Feel fresh and confident again, with care for heavy sweating that gets in the way.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/excessive-sweating/hero.webp",
      "heroAlt": "Confident young woman in a white T-shirt with her arms crossed",
      "one": "/images/services/excessive-sweating/one.webp",
      "oneAlt": "Woman checking sweat marks on her T-shirt",
      "two": "/images/services/excessive-sweating/two.webp",
      "twoAlt": "Dr. Sophia Sandhu smiling with a patient in the exam room"
    },
    "overview": {
      "eyebrow": "Understanding Excessive Sweating",
      "title": "What is",
      "accent": "excessive sweating?",
      "text": [
        "Excessive sweating, or hyperhidrosis, is abnormally high sweating not related to heat or exercise. It often affects the underarms, hands, feet or face.",
        "It can soak clothing, make it hard to hold things and affect work, school and confidence. It often starts in the teen years.",
        "It is a real medical condition, and it is treatable. Dr. Sandhu helps you find the right option for you."
      ],
      "facts": [
        {
          "label": "Medical name",
          "value": "Hyperhidrosis"
        },
        {
          "label": "Common areas",
          "value": "Underarms, hands, feet"
        },
        {
          "label": "Approach",
          "value": "Step-by-step care"
        }
      ]
    },
    "candidates": {
      "title": "Is sweating care",
      "accent": "right for you?",
      "text": "See a dermatologist when sweating soaks through clothes, disrupts daily life, or store-bought antiperspirants do not help.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Heavy underarm sweating",
        "Sweaty palms",
        "Sweaty feet",
        "Facial and scalp sweating",
        "Sweating that starts in the teen years",
        "Sweating affecting confidence"
      ],
      "signs": [
        "Sweat stains on clothes every day",
        "Changing clothes during the day",
        "Slippery hands",
        "Avoiding handshakes or social events",
        "Antiperspirants do not work",
        "Night sweats or sudden new sweating (needs a check-up)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment usually starts simple and steps up as needed.",
      "items": [
        {
          "title": "Prescription antiperspirants",
          "text": "Stronger antiperspirants, used the right way, are often the first step."
        },
        {
          "title": "Topical medicines",
          "text": "Prescription wipes and creams that reduce sweating."
        },
        {
          "title": "Oral medicines",
          "text": "For widespread sweating, medicines taken by mouth may help."
        },
        {
          "title": "Other options",
          "text": "If needed, Dr. Sandhu discusses other treatments that may suit you."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu asks where and when you sweat and checks for any medical cause."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a step-by-step plan, starting with the simplest effective option."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Many people notice less sweating within a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We review results and step up treatment if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "New night sweats or sudden heavy sweating can have other medical causes and should be checked.",
        "Dr. Sandhu explains each treatment, possible side effects and how to use it safely."
      ]
    },
    "faqs": [
      {
        "q": "Is excessive sweating a medical condition?",
        "a": "Yes. Hyperhidrosis is a recognized medical condition, and treatment can make a real difference."
      },
      {
        "q": "Do regular antiperspirants work?",
        "a": "They help some people. Prescription-strength products are often more effective."
      },
      {
        "q": "Can teenagers be treated?",
        "a": "Yes. Hyperhidrosis often starts in the teen years, and Dr. Sandhu treats patients of all ages."
      },
      {
        "q": "Should I worry about night sweats?",
        "a": "New night sweats should be checked, as they can have other causes."
      }
    ]
  },
  {
    "slug": "folliculitis",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Folliculitis",
    "localTopic": "Folliculitis treatment",
    "title": "Folliculitis Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Folliculitis Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified folliculitis care in Torrance, CA. Treatment for red, itchy bumps around hair follicles, including bumps after shaving.",
    "lede": "Clear, smooth skin, with care for red bumps around hair follicles.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/folliculitis/hero.webp",
      "heroAlt": "Woman with smooth legs sitting gracefully against a light background",
      "one": "/images/services/folliculitis/one.webp",
      "oneAlt": "Close-up of a woman shaving her leg",
      "two": "/images/services/folliculitis/two.webp",
      "twoAlt": "Smooth, healthy legs against a warm background"
    },
    "overview": {
      "eyebrow": "Understanding Folliculitis",
      "title": "What is",
      "accent": "folliculitis?",
      "text": [
        "Folliculitis is inflammation of hair follicles causing red bumps. The bumps can look like small pimples and may itch or feel tender.",
        "It can be caused by bacteria or yeast, shaving, tight clothing, sweat, and hot tubs. It often appears on the legs, buttocks, chest, back and beard area.",
        "Dr. Sandhu identifies the cause and clears the bumps, then helps you prevent them from coming back."
      ],
      "facts": [
        {
          "label": "Looks like",
          "value": "Small red bumps"
        },
        {
          "label": "Common areas",
          "value": "Legs, chest, back"
        },
        {
          "label": "Focus",
          "value": "Clear & prevent"
        }
      ]
    },
    "candidates": {
      "title": "Is folliculitis care",
      "accent": "right for you?",
      "text": "See a dermatologist when bumps keep coming back, spread, become painful, or do not clear with gentle care.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Bumps after shaving",
        "Hot tub folliculitis",
        "Bacterial folliculitis",
        "Yeast folliculitis",
        "Razor bumps in the beard area",
        "Bumps on the buttocks or thighs"
      ],
      "signs": [
        "Red bumps around hairs",
        "Itchy or tender spots",
        "Bumps after shaving",
        "Bumps that keep returning",
        "Spots that look like acne but are not",
        "Painful, swollen bumps"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the cause. We clear the current bumps and help prevent new ones.",
      "items": [
        {
          "title": "Finding the cause",
          "text": "A close exam, and a swab when needed, to tell bacteria, yeast or irritation apart."
        },
        {
          "title": "Prescription washes and creams",
          "text": "Topical treatments that clear infection and calm inflammation."
        },
        {
          "title": "Oral medicines",
          "text": "For widespread or stubborn folliculitis, medicine by mouth may be added."
        },
        {
          "title": "Shaving & skin habits",
          "text": "Simple changes to shaving, clothing and skin care that prevent new bumps."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the bumps and asks about shaving, workouts, hot tubs and products."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment and simple habits to start right away."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Most folliculitis clears within a few weeks of treatment."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We check your skin and help prevent the bumps from returning."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Painful, spreading or swollen bumps, or bumps with fever, need prompt medical attention.",
        "Dr. Sandhu chooses the right treatment for the cause and explains how to use it."
      ]
    },
    "faqs": [
      {
        "q": "Is folliculitis the same as acne?",
        "a": "No. It can look similar, but it starts in the hair follicles and needs different care."
      },
      {
        "q": "Can shaving cause folliculitis?",
        "a": "Yes. Shaving can irritate follicles. Changing technique often helps."
      },
      {
        "q": "Is it contagious?",
        "a": "Usually not, though some infections can spread. We will tell you if yours can."
      },
      {
        "q": "Can I have a rash checked by video?",
        "a": "Yes. Our teledermatology visits cover new rashes and follow-up care, from the comfort of your home."
      }
    ]
  },
  {
    "slug": "insect-bites",
    "category": "medical-dermatology",
    "group": "Rashes & Irritation",
    "name": "Insect Bites",
    "localTopic": "Insect bite care",
    "title": "Insect Bite",
    "accent": "Care in Torrance, CA",
    "metaTitle": "Insect Bite & Sting Reaction Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for insect bites and stings in Torrance, CA. Relief for red, itchy or swollen skin in adults and children.",
    "lede": "Relief for red, itchy or swollen bites, so the whole family can enjoy the outdoors.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/insect-bites/hero.webp",
      "heroAlt": "Mother and daughter laughing together on a blanket in the grass",
      "one": "/images/services/insect-bites/one.webp",
      "oneAlt": "Close-up of a swollen insect bite on the skin",
      "two": "/images/services/insect-bites/two.webp",
      "twoAlt": "Happy mother carrying her toddler through a sunny flower garden"
    },
    "overview": {
      "eyebrow": "Understanding Insect Bites",
      "title": "What are insect",
      "accent": "bite reactions?",
      "text": [
        "Insect bites cause red, itchy or swollen skin. Most come from mosquitoes, fleas, bed bugs, ants, spiders and bees.",
        "Some people, especially children, react strongly, with large swollen areas or itchy bumps that last for days. Scratching can lead to infection.",
        "Dr. Sandhu calms the reaction, checks for infection and helps you prevent future bites."
      ],
      "facts": [
        {
          "label": "Main signs",
          "value": "Red, itchy, swollen"
        },
        {
          "label": "Who we treat",
          "value": "Children & adults"
        },
        {
          "label": "Focus",
          "value": "Relief & prevention"
        }
      ]
    },
    "candidates": {
      "title": "Is bite care",
      "accent": "right for you?",
      "text": "See a dermatologist when bites are very itchy, swollen or spreading, keep appearing, or look infected.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Mosquito bite reactions",
        "Flea and bed bug bites",
        "Bites in children",
        "Large local swelling",
        "Itchy bumps that last for days",
        "Infected bites"
      ],
      "signs": [
        "Bites that swell a lot",
        "Itch that will not settle",
        "Bites that blister",
        "Warmth, pus or red streaks (signs of infection)",
        "New bites appearing at home",
        "Bites that leave dark marks"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Most bite reactions settle quickly with the right care.",
      "items": [
        {
          "title": "Calming the itch",
          "text": "Prescription creams and antihistamines that reduce itching and swelling."
        },
        {
          "title": "Treating infection",
          "text": "Care for bites that have become infected from scratching."
        },
        {
          "title": "Finding the source",
          "text": "Help working out what is biting, such as fleas or bed bugs."
        },
        {
          "title": "Prevention",
          "text": "Tips on repellents, clothing and home care to avoid future bites."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the bites and asks where and when they appeared."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment to calm the bites and tips to prevent new ones."
        },
        {
          "label": "Next weeks",
          "title": "Relief",
          "text": "Most bite reactions settle within days to a week or two."
        },
        {
          "label": "Follow-up",
          "title": "Stay comfortable",
          "text": "We make sure the skin heals well and new bites have stopped."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Swelling of the face or throat, trouble breathing or feeling faint after a sting is an emergency. Call 911 right away.",
        "For children, Dr. Sandhu chooses gentle treatments and explains clearly how to use them."
      ]
    },
    "faqs": [
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      },
      {
        "q": "How can I stop scratching?",
        "a": "Cool compresses, anti-itch treatment and short nails help. We can prescribe stronger relief if needed."
      },
      {
        "q": "When is a bite infected?",
        "a": "Growing redness, warmth, pus, red streaks or fever can mean infection and should be checked."
      },
      {
        "q": "When is a sting an emergency?",
        "a": "Call 911 for swelling of the face or throat, trouble breathing or feeling faint."
      }
    ]
  },
  {
    "slug": "warts",
    "category": "medical-dermatology",
    "group": "Skin Infections",
    "name": "Warts",
    "localTopic": "Wart treatment",
    "title": "Wart Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Wart Removal & Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified wart treatment in Torrance, CA for adults and children, including common, plantar and flat warts.",
    "lede": "Clear, smooth skin, with safe and effective care for stubborn warts.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/warts/hero.webp",
      "heroAlt": "Graceful hands with smooth, clear skin against a warm background",
      "one": "/images/services/warts/one.webp",
      "oneAlt": "Dermatologist examining a patient's hand with a dermatoscope",
      "two": "/images/services/warts/two.webp",
      "twoAlt": "Waiting room with curved wooden chairs"
    },
    "overview": {
      "eyebrow": "Understanding Warts",
      "title": "What are",
      "accent": "warts?",
      "text": [
        "Warts are rough skin growths caused by the human papillomavirus (HPV). They are common on the hands, feet and face, and in children.",
        "Warts can spread to other areas or other people through direct contact or shared surfaces, such as pool decks.",
        "Many warts go away on their own, but some last for years. Dr. Sandhu offers treatments that clear warts safely and help prevent spread."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "HPV virus"
        },
        {
          "label": "Common areas",
          "value": "Hands, feet, face"
        },
        {
          "label": "Who we treat",
          "value": "Children & adults"
        }
      ]
    },
    "candidates": {
      "title": "Is wart treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when warts spread, hurt, keep coming back, or do not clear with store-bought treatments.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Common warts on the hands",
        "Plantar warts on the feet",
        "Flat warts on the face",
        "Warts around the nails",
        "Warts in children",
        "Warts that keep returning"
      ],
      "signs": [
        "Rough bumps on the skin",
        "Painful spots on the soles",
        "Warts that are spreading",
        "Warts near the nails",
        "Store-bought treatments have not worked",
        "Any growth you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "The best treatment depends on the wart's type, location and your age. Several visits are often needed.",
      "items": [
        {
          "title": "Cryotherapy",
          "text": "Freezing treatment in the office that destroys the wart tissue over one or more visits."
        },
        {
          "title": "Prescription topicals",
          "text": "Creams and solutions used at home to peel away or fight the wart."
        },
        {
          "title": "Other in-office treatments",
          "text": "For stubborn warts, other options may be used, chosen for your skin and age."
        },
        {
          "title": "Prevention tips",
          "text": "Simple habits that help stop warts from spreading."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the wart and confirms the diagnosis."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment started and a clear home plan."
        },
        {
          "label": "Weeks",
          "title": "Clearing",
          "text": "Warts usually shrink over several weeks. Repeat treatments are common."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We re-treat any remaining wart until the skin is clear."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Some treatments can cause blistering or soreness for a few days. We explain what to expect.",
        "A growth that bleeds, changes or looks unusual should always be checked to be sure it is a wart."
      ]
    },
    "faqs": [
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      },
      {
        "q": "Are warts contagious?",
        "a": "Yes. Warts can spread through direct contact or shared surfaces. Covering them and not picking helps."
      },
      {
        "q": "Will my wart go away on its own?",
        "a": "Many do over time, but some last for years. Treatment can speed things up."
      },
      {
        "q": "How many treatments will I need?",
        "a": "It varies. Many warts need a few treatments spaced a few weeks apart."
      }
    ]
  },
  {
    "slug": "herpes",
    "category": "medical-dermatology",
    "group": "Skin Infections",
    "name": "Herpes",
    "localTopic": "Herpes treatment",
    "title": "Herpes Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Herpes (Cold Sore) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Private, board-certified care for herpes and cold sores in Torrance, CA. Treatment to shorten outbreaks and reduce how often they come back.",
    "lede": "Private, respectful care to shorten outbreaks and help prevent them.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/herpes/hero.webp",
      "heroAlt": "Smiling woman applying a soothing lip balm",
      "one": "/images/services/herpes/one.webp",
      "oneAlt": "Woman checking her lips in a mirror",
      "two": "/images/services/herpes/two.webp",
      "twoAlt": "Woman gently applying ointment to her lips"
    },
    "overview": {
      "eyebrow": "Understanding Herpes",
      "title": "What is",
      "accent": "herpes?",
      "text": [
        "Herpes is a viral infection causing blisters, typically on the mouth or genitals. Cold sores on the lips are the most common form.",
        "After the first infection, the virus stays in the body and can flare again, often with stress, sun, illness or tiredness.",
        "There is no cure, but treatment shortens outbreaks, eases discomfort and can reduce how often they return. Dr. Sandhu offers private, judgment-free care."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "Herpes simplex virus"
        },
        {
          "label": "Common areas",
          "value": "Lips, mouth, genitals"
        },
        {
          "label": "Approach",
          "value": "Private & respectful"
        }
      ]
    },
    "candidates": {
      "title": "Is herpes care",
      "accent": "right for you?",
      "text": "See a dermatologist for frequent or painful cold sores, a first outbreak, or blisters you are unsure about.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Cold sores on the lips",
        "Recurring outbreaks",
        "First outbreaks",
        "Genital herpes",
        "Outbreaks triggered by sun or stress",
        "Blisters you are unsure about"
      ],
      "signs": [
        "Tingling or burning before blisters",
        "Small, painful blisters",
        "Sores that crust over",
        "Outbreaks several times a year",
        "Sores that heal slowly",
        "Sores near the eyes (seek prompt care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment works best when started early, at the first tingle.",
      "items": [
        {
          "title": "Antiviral medicines",
          "text": "Prescription medicines that shorten outbreaks and ease symptoms."
        },
        {
          "title": "Suppressive therapy",
          "text": "For frequent outbreaks, daily medicine can reduce how often they return."
        },
        {
          "title": "Comfort care",
          "text": "Ways to ease pain and help sores heal."
        },
        {
          "title": "Trigger guidance",
          "text": "Sun protection for the lips and tips to avoid common triggers."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area in private and asks about your outbreaks."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a treatment plan, often with medicine to keep on hand."
        },
        {
          "label": "Days",
          "title": "Healing",
          "text": "Treated outbreaks usually heal within days to about a week."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We adjust your plan if outbreaks are frequent."
        }
      ]
    },
    "safety": {
      "title": "Private, safe care",
      "text": [
        "Herpes can pass to others, especially during an outbreak. We share simple ways to protect partners and family.",
        "Sores near the eye need prompt medical attention."
      ]
    },
    "faqs": [
      {
        "q": "Can herpes be cured?",
        "a": "No, but treatment shortens outbreaks and can greatly reduce how often they come back."
      },
      {
        "q": "When should I start treatment?",
        "a": "As early as possible, ideally at the first tingle or burning."
      },
      {
        "q": "Is it contagious?",
        "a": "Yes, especially when sores are present. Avoid kissing and sharing items during an outbreak."
      },
      {
        "q": "Is my visit private?",
        "a": "Yes. Your care is always private and respectful."
      }
    ]
  },
  {
    "slug": "shingles",
    "category": "medical-dermatology",
    "group": "Skin Infections",
    "name": "Shingles",
    "localTopic": "Shingles treatment",
    "title": "Shingles Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Shingles Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified shingles care in Torrance, CA. Fast treatment for the painful rash caused by the chickenpox virus.",
    "lede": "Fast, careful treatment for a painful shingles rash, because early care matters.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/shingles/hero.webp",
      "heroAlt": "Dermatologist gently examining a mature woman's face",
      "one": "/images/services/shingles/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/shingles/two.webp",
      "twoAlt": "Doctor listening to a senior woman during a home consultation"
    },
    "overview": {
      "eyebrow": "Understanding Shingles",
      "title": "What is",
      "accent": "shingles?",
      "text": [
        "Shingles (herpes zoster) is a painful rash caused by reactivation of the chickenpox virus. Anyone who has had chickenpox can get it.",
        "It usually appears as a band of blisters on one side of the body or face, often after tingling or burning pain.",
        "Starting treatment within a few days of the rash helps it heal faster and can lower the risk of lasting nerve pain."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "Chickenpox virus"
        },
        {
          "label": "Main sign",
          "value": "Painful one-sided rash"
        },
        {
          "label": "Key",
          "value": "Treat early"
        }
      ]
    },
    "candidates": {
      "title": "Is shingles care",
      "accent": "right for you?",
      "text": "See a doctor promptly if you have a painful, blistering rash on one side of your body or face.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "New shingles rash",
        "Shingles on the face",
        "Painful blisters",
        "Rash healing slowly",
        "Skin care during healing",
        "Questions about prevention"
      ],
      "signs": [
        "Burning or tingling pain",
        "A band of blisters on one side",
        "Rash on the face or near the eye (urgent)",
        "Fever or tiredness with the rash",
        "Pain that lingers after the rash",
        "A weakened immune system"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Prompt treatment is the most important step.",
      "items": [
        {
          "title": "Antiviral medicines",
          "text": "Started early, they help the rash heal faster."
        },
        {
          "title": "Pain relief",
          "text": "Medicines and comfort care to ease nerve pain."
        },
        {
          "title": "Skin care",
          "text": "Gentle care of the blisters to prevent infection and scarring."
        },
        {
          "title": "Prevention advice",
          "text": "Information about the shingles vaccine from your primary care doctor."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the rash and confirms the diagnosis."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with antiviral medicine and a plan for pain and skin care."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "The rash usually crusts and heals over two to four weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and help with any lingering pain."
        }
      ]
    },
    "safety": {
      "title": "Prompt, careful care",
      "text": [
        "Shingles near the eye can affect vision. Seek same-day care.",
        "Shingles blisters can spread chickenpox to people who never had it or the vaccine, so keep them covered."
      ]
    },
    "faqs": [
      {
        "q": "Is shingles contagious?",
        "a": "You cannot catch shingles, but the blisters can spread chickenpox to people who are not immune."
      },
      {
        "q": "How fast should I be seen?",
        "a": "As soon as possible. Antivirals work best when started within a few days of the rash."
      },
      {
        "q": "Can shingles come back?",
        "a": "It can, though it is uncommon. Ask your primary doctor about the shingles vaccine."
      },
      {
        "q": "What if the pain lasts?",
        "a": "Some people have nerve pain after the rash heals. Treatment can help."
      }
    ]
  },
  {
    "slug": "fungal-infections",
    "category": "medical-dermatology",
    "group": "Skin Infections",
    "name": "Fungal Infections",
    "localTopic": "Fungal infection treatment",
    "title": "Fungal Skin Infection",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Fungal Skin Infection Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified treatment for fungal skin infections in Torrance, CA, including ringworm, athlete's foot and yeast infections.",
    "lede": "Clear, comfortable skin, with the right treatment for ringworm, athlete's foot and yeast.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/fungal-infections/hero.webp",
      "heroAlt": "Woman resting her bare foot on a chair, caring for her feet",
      "one": "/images/services/fungal-infections/one.webp",
      "oneAlt": "Woman applying cream between her toes",
      "two": "/images/services/fungal-infections/two.webp",
      "twoAlt": "Doctor examining a young woman's scalp in a bright clinic"
    },
    "overview": {
      "eyebrow": "Understanding Fungal Infections",
      "title": "What are fungal",
      "accent": "skin infections?",
      "text": [
        "Fungal infections include ringworm, athlete's foot and yeast infections. They often cause itchy, red, scaly or ring-shaped patches.",
        "Fungi grow in warm, damp places such as the feet, groin, skin folds and scalp. They can spread from person to person, pets or surfaces.",
        "Many rashes look like fungus but are not. Dr. Sandhu confirms the cause, so treatment works the first time."
      ],
      "facts": [
        {
          "label": "Examples",
          "value": "Ringworm, athlete's foot"
        },
        {
          "label": "Thrives in",
          "value": "Warm, damp areas"
        },
        {
          "label": "First step",
          "value": "Confirm the cause"
        }
      ]
    },
    "candidates": {
      "title": "Is fungal care",
      "accent": "right for you?",
      "text": "See a dermatologist when an itchy, scaly or ring-shaped rash spreads, returns, or does not clear with store-bought creams.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Ringworm (tinea)",
        "Athlete's foot",
        "Jock itch",
        "Yeast infections in skin folds",
        "Scalp ringworm in children",
        "Tinea versicolor"
      ],
      "signs": [
        "Ring-shaped, itchy patches",
        "Peeling or cracked skin between toes",
        "Red rash in skin folds",
        "Scaly patches on the scalp",
        "Light or dark spots on the chest or back",
        "Creams have not worked"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Most fungal infections clear with the right medicine and simple habits.",
      "items": [
        {
          "title": "Confirming the cause",
          "text": "A quick skin scraping may be checked to confirm fungus."
        },
        {
          "title": "Antifungal creams",
          "text": "Prescription creams and powders for skin infections."
        },
        {
          "title": "Oral medicines",
          "text": "For scalp, widespread or stubborn infections, medicine by mouth may be needed."
        },
        {
          "title": "Prevention",
          "text": "Keeping skin dry, changing socks and treating pets or shared items."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the rash and may take a small scraping."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment and clear instructions."
        },
        {
          "label": "Weeks",
          "title": "Clearing",
          "text": "Most skin infections clear within two to four weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We confirm the infection is gone and help prevent it from returning."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Using steroid creams on fungus can make it worse. Check with us before using leftover creams.",
        "Some oral antifungals need a review of your other medicines."
      ]
    },
    "faqs": [
      {
        "q": "Is ringworm a worm?",
        "a": "No. Ringworm is a fungal infection named for its ring shape."
      },
      {
        "q": "Is it contagious?",
        "a": "Yes. Fungal infections can spread through contact with people, pets or surfaces."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      },
      {
        "q": "Why does it keep coming back?",
        "a": "Warm, damp conditions and untreated sources, such as feet or pets, can cause reinfection."
      }
    ]
  },
  {
    "slug": "skin-cancer-screenings",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Skin Cancer Screenings",
    "localTopic": "Skin cancer screening",
    "title": "Skin Cancer Screenings",
    "accent": "in Torrance, CA",
    "metaTitle": "Skin Cancer Screening in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified full-body skin cancer screenings in Torrance, CA. Early detection of melanoma, basal cell and squamous cell carcinoma.",
    "lede": "A careful, head-to-toe skin check, because early detection saves lives.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/skin-cancer-screenings/hero.webp",
      "heroAlt": "Front desk team member at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/skin-cancer-screenings/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/skin-cancer-screenings/two.webp",
      "twoAlt": "Dermatologist examining a spot on a patient's arm"
    },
    "overview": {
      "eyebrow": "Understanding Skin Cancer Screenings",
      "title": "What is a",
      "accent": "skin cancer screening?",
      "text": [
        "A skin cancer screening is an exam to detect early signs of skin cancer. Dr. Sandhu checks your skin from head to toe, including areas you cannot easily see.",
        "Skin cancer is the abnormal growth of skin cells, often caused by sun exposure. The main types are basal cell carcinoma, squamous cell carcinoma and melanoma, the most serious type.",
        "Found early, most skin cancers are highly treatable. Prevention, education and early detection are at the heart of our practice."
      ],
      "facts": [
        {
          "label": "Exam",
          "value": "Head to toe"
        },
        {
          "label": "Looks for",
          "value": "Melanoma, BCC, SCC"
        },
        {
          "label": "Takes",
          "value": "About 15 minutes"
        }
      ]
    },
    "candidates": {
      "title": "Is a skin check",
      "accent": "right for you?",
      "text": "Everyone benefits from a skin check, especially people with many moles, fair skin, a history of sunburns or a family history of skin cancer.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Full-body skin exams",
        "Checks of new or changing moles",
        "Personal history of skin cancer",
        "Family history of melanoma",
        "Many or unusual moles",
        "Sun-damaged skin"
      ],
      "signs": [
        "A new spot",
        "A mole that changes in size, shape or color",
        "A sore that does not heal",
        "A spot that bleeds or itches",
        "A rough, scaly patch",
        "A spot that looks different from the rest"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "If anything looks suspicious, we act quickly, often at the same visit.",
      "items": [
        {
          "title": "Full-body exam",
          "text": "A careful head-to-toe check with a dermatoscope for closer looks."
        },
        {
          "title": "Biopsy when needed",
          "text": "A small sample of a suspicious spot is sent to a lab."
        },
        {
          "title": "Treatment of skin cancer",
          "text": "Excision, electrodesiccation and curettage, cryosurgery and other treatments."
        },
        {
          "title": "Prevention plan",
          "text": "Sun protection advice and a schedule for your next skin check."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu asks about your history and checks your skin from head to toe."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave knowing your results, and a biopsy is done if needed."
        },
        {
          "label": "Results",
          "title": "Lab results",
          "text": "Biopsy results usually return within about a week to two."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We plan treatment if needed and set your next screening."
        }
      ]
    },
    "safety": {
      "title": "Safe, private care",
      "text": [
        "The exam is private and respectful. You can keep underwear on and ask to skip any area.",
        "Any spot that changes, bleeds or does not heal should be checked, even between visits."
      ]
    },
    "faqs": [
      {
        "q": "How often should I get a skin check?",
        "a": "Many people benefit from a yearly check. Dr. Sandhu recommends a schedule based on your risk."
      },
      {
        "q": "What are warning signs of melanoma?",
        "a": "Look for the ABCDEs: Asymmetry, irregular Borders, uneven Color, Diameter larger than a pencil eraser and Evolving or changing spots."
      },
      {
        "q": "Does a screening hurt?",
        "a": "No. It is a visual exam. A biopsy, if needed, uses numbing medicine."
      },
      {
        "q": "Can I do self-checks?",
        "a": "Yes. Monthly self-checks help you notice changes early."
      }
    ]
  },
  {
    "slug": "actinic-keratoses",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Actinic Keratoses",
    "localTopic": "Actinic keratosis treatment",
    "title": "Actinic Keratosis",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Actinic Keratosis Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified treatment of actinic keratoses (precancerous sun spots) in Torrance, CA, to lower the risk of skin cancer.",
    "lede": "Treat rough, scaly sun spots early, before they can turn into skin cancer.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/actinic-keratoses/hero.webp",
      "heroAlt": "Smiling mature woman with sunscreen on her cheek",
      "one": "/images/services/actinic-keratoses/one.webp",
      "oneAlt": "Dermatologist examining a mature woman's facial skin",
      "two": "/images/services/actinic-keratoses/two.webp",
      "twoAlt": "Smiling woman in a sun hat applying sunscreen"
    },
    "overview": {
      "eyebrow": "Understanding Actinic Keratoses",
      "title": "What are",
      "accent": "actinic keratoses?",
      "text": [
        "Actinic keratoses are rough, scaly patches caused by sun damage, and they can be precancerous. They often appear on the face, scalp, ears, lips, hands and arms.",
        "They are common in people with fair skin and years of sun exposure. Some can develop into squamous cell carcinoma if left untreated.",
        "Treating them early lowers your risk. Dr. Sandhu also helps you protect your skin going forward."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "Sun damage"
        },
        {
          "label": "Feels like",
          "value": "Rough, scaly patch"
        },
        {
          "label": "Why treat",
          "value": "Can be precancerous"
        }
      ]
    },
    "candidates": {
      "title": "Is AK treatment",
      "accent": "right for you?",
      "text": "See a dermatologist if you have rough, scaly spots that come back, or a history of sun damage.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Single actinic keratoses",
        "Many sun-damaged spots",
        "Spots on the face and scalp",
        "Spots on the lips",
        "Spots on hands and arms",
        "Sun-damaged skin"
      ],
      "signs": [
        "Rough, sandpaper-like spots",
        "Scaly patches that return",
        "Spots that are tender or itch",
        "Pink or red scaly patches",
        "A spot that grows or bleeds",
        "Many spots on sun-exposed skin"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on how many spots you have and where they are.",
      "items": [
        {
          "title": "Cryosurgery",
          "text": "Freezing individual spots in the office."
        },
        {
          "title": "Field treatments",
          "text": "Prescription creams that treat many spots and sun damage across an area."
        },
        {
          "title": "Chemical peels",
          "text": "Peels that remove damaged top layers of skin."
        },
        {
          "title": "Sun protection",
          "text": "Daily sunscreen and protective habits to prevent new spots."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines your sun-exposed skin and checks each spot."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment started, often the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas may be red or crusty for a few days to weeks, then heal."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check for new spots at regular skin exams."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Treated skin may be red, sore or crusty while it heals. We explain what to expect.",
        "A spot that grows, bleeds or becomes painful should be checked for skin cancer."
      ]
    },
    "faqs": [
      {
        "q": "Are actinic keratoses cancer?",
        "a": "They are precancerous. Some can turn into squamous cell carcinoma, which is why we treat them."
      },
      {
        "q": "Will they come back?",
        "a": "New spots can appear with more sun exposure. Regular checks and sunscreen help."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Freezing stings briefly. Creams can cause temporary redness and irritation."
      },
      {
        "q": "How can I prevent them?",
        "a": "Use broad-spectrum sunscreen daily, wear a hat and avoid peak sun."
      }
    ]
  },
  {
    "slug": "moles",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Moles",
    "localTopic": "Mole evaluation and removal",
    "title": "Mole Checks & Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Mole Check & Mole Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified mole checks and mole removal in Torrance, CA. Evaluation of new or changing moles and removal for health or cosmetic reasons.",
    "lede": "Peace of mind for every mole, with expert checks and careful removal.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/moles/hero.webp",
      "heroAlt": "Reception at Oceanside Dermatology & Aesthetics in Torrance",
      "one": "/images/services/moles/one.webp",
      "oneAlt": "Dermatologist checking a mole on a woman's shoulder with a dermatoscope",
      "two": "/images/services/moles/two.webp",
      "twoAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet"
    },
    "overview": {
      "eyebrow": "Understanding Moles",
      "title": "What are",
      "accent": "moles?",
      "text": [
        "Moles are pigmented skin growths that can be flat or raised. They are usually harmless.",
        "Most people have between 10 and 40 moles. A mole that is new, changing or different from the others should be checked, because melanoma can start in or near a mole.",
        "Dr. Sandhu checks your moles closely with a dermatoscope and removes any that are suspicious, irritated or unwanted."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Harmless"
        },
        {
          "label": "Check if",
          "value": "New or changing"
        },
        {
          "label": "Removal",
          "value": "Medical or cosmetic"
        }
      ]
    },
    "candidates": {
      "title": "Is a mole check",
      "accent": "right for you?",
      "text": "See a dermatologist for any mole that is new after age 30, changing, itchy, bleeding or different from your other moles.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Mole checks",
        "New or changing moles",
        "Atypical (unusual) moles",
        "Moles that catch on clothing",
        "Mole removal for cosmetic reasons",
        "Many moles"
      ],
      "signs": [
        "A mole that changes size, shape or color",
        "Uneven borders or colors",
        "Bigger than a pencil eraser",
        "Itching, bleeding or crusting",
        "A new mole in adulthood",
        "A mole that looks different (the ugly duckling)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every suspicious mole is checked. Removal is quick and done in the office.",
      "items": [
        {
          "title": "Dermatoscope exam",
          "text": "A close, magnified look at each mole's pattern."
        },
        {
          "title": "Biopsy",
          "text": "A sample of a suspicious mole sent to a lab."
        },
        {
          "title": "Excision",
          "text": "Removal of the whole mole with careful stitches for a neat result."
        },
        {
          "title": "Shave removal",
          "text": "Removal of raised moles level with the skin, often for cosmetic reasons."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu checks your moles and asks about any changes."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave knowing which moles are healthy and what needs attention."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Removal sites heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review lab results and plan your next skin check."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Removal uses numbing medicine and leaves a small scar. We aim for the neatest possible result.",
        "Every removed mole can be sent to a lab, so nothing is missed."
      ]
    },
    "faqs": [
      {
        "q": "When should I worry about a mole?",
        "a": "Use the ABCDEs: Asymmetry, Border, Color, Diameter and Evolving. Any change is a reason to be seen."
      },
      {
        "q": "Does mole removal leave a scar?",
        "a": "There is usually a small scar. Dr. Sandhu chooses the method that gives the best result."
      },
      {
        "q": "Can I have a mole removed for cosmetic reasons?",
        "a": "Yes. Moles can be removed if they bother you, after we check that they are healthy."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      }
    ]
  },
  {
    "slug": "skin-tags",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Skin Tags",
    "localTopic": "Skin tag removal",
    "title": "Skin Tag Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Skin Tag Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Quick, board-certified skin tag removal in Torrance, CA for tags on the neck, underarms, eyelids and body.",
    "lede": "Quick, gentle removal of skin tags that catch, rub or bother you.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/skin-tags/hero.webp",
      "heroAlt": "Woman with smooth skin touching her neck and collarbone",
      "one": "/images/services/skin-tags/one.webp",
      "oneAlt": "Dermatologist examining the skin on a woman's neck",
      "two": "/images/services/skin-tags/two.webp",
      "twoAlt": "Woman gently touching the smooth skin on her neck"
    },
    "overview": {
      "eyebrow": "Understanding Skin Tags",
      "title": "What are",
      "accent": "skin tags?",
      "text": [
        "Skin tags are small, soft growths hanging off the skin. They are often found on the neck, underarms, eyelids and in skin folds.",
        "They are harmless, but they can catch on jewelry or clothing, become irritated or simply bother you.",
        "Dr. Sandhu removes them quickly and safely in the office."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No, benign"
        },
        {
          "label": "Common areas",
          "value": "Neck, underarms, eyelids"
        },
        {
          "label": "Removal",
          "value": "Quick, in office"
        }
      ]
    },
    "candidates": {
      "title": "Is skin tag removal",
      "accent": "right for you?",
      "text": "Consider removal when skin tags catch, rub, bleed or bother you, or when you are unsure what a growth is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Skin tags on the neck",
        "Underarm skin tags",
        "Eyelid skin tags",
        "Skin tags in skin folds",
        "Many small tags",
        "Irritated or bleeding tags"
      ],
      "signs": [
        "Soft growths hanging from the skin",
        "Tags that catch on clothing or jewelry",
        "Tags that bleed or become sore",
        "Tags you do not like the look of",
        "A growth you are unsure about",
        "Tags that keep appearing"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Removal is quick and usually done in a single visit.",
      "items": [
        {
          "title": "Snip removal",
          "text": "Quick removal with sterile instruments after numbing if needed."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small tags so they fall off."
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine electric current to remove small tags."
        },
        {
          "title": "Checking any growth",
          "text": "Making sure each growth is truly a skin tag before removal."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the tags and confirms they are harmless."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Removal is often done the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated spots heal within one to two weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We treat any new tags as needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, gentle care",
      "text": [
        "Please do not cut skin tags off at home, which can cause bleeding and infection.",
        "Removal for cosmetic reasons may not be covered by insurance. We will let you know before treatment."
      ]
    },
    "faqs": [
      {
        "q": "Are skin tags dangerous?",
        "a": "No. Skin tags are harmless, but any growth you are unsure about should be checked."
      },
      {
        "q": "Does removal hurt?",
        "a": "Removal is quick, and numbing is used when needed."
      },
      {
        "q": "Will they come back?",
        "a": "Removed tags do not come back, but new ones can form over time."
      },
      {
        "q": "Can tags near the eyes be removed?",
        "a": "Yes, with special care."
      }
    ]
  },
  {
    "slug": "basal-cell-carcinoma",
    "category": "surgical-dermatology",
    "group": "Skin Cancer Treatment",
    "name": "Basal Cell Carcinoma",
    "localTopic": "Basal cell carcinoma treatment",
    "title": "Basal Cell Carcinoma",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Basal Cell Carcinoma Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified basal cell carcinoma treatment in Torrance, CA, with careful surgical techniques and natural-looking results.",
    "lede": "Expert treatment of the most common skin cancer, with care for how your skin heals.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/basal-cell-carcinoma/hero.webp",
      "heroAlt": "Waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/basal-cell-carcinoma/one.webp",
      "oneAlt": "Reception desk under the Oceanside sign",
      "two": "/images/services/surgical/basal-cell-carcinoma/two.webp",
      "twoAlt": "Clinician examining a woman's arm"
    },
    "overview": {
      "eyebrow": "Understanding Basal Cell Carcinoma",
      "title": "What is",
      "accent": "basal cell carcinoma?",
      "text": [
        "Basal cell carcinoma is a common, slow-growing cancer from the lower layer of the epidermis. It is the most common type of skin cancer.",
        "It often appears as a pearly or shiny bump, a pink patch or a sore that does not heal, usually on sun-exposed skin.",
        "It rarely spreads, but it can grow into nearby tissue if left untreated. Found early, it is highly curable."
      ],
      "facts": [
        {
          "label": "Most common",
          "value": "Skin cancer"
        },
        {
          "label": "Grows",
          "value": "Slowly"
        },
        {
          "label": "Cure rate",
          "value": "High when early"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist promptly for any new, changing or non-healing spot. Early treatment is simpler and more successful.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Pearly or shiny bumps",
        "Pink, scaly patches",
        "Sores that do not heal",
        "Basal cell on the face, ears or scalp",
        "Basal cell on the body",
        "Recurring basal cell carcinoma"
      ],
      "signs": [
        "A shiny, pearly bump",
        "A sore that bleeds and does not heal",
        "A pink patch that grows",
        "A scar-like area",
        "A spot that crusts again and again",
        "Any new or changing spot"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the type, size and location of the cancer. Dr. Sandhu explains every option and recommends the best fit.",
      "items": [
        {
          "title": "Excision",
          "text": "Removing the cancer with a margin of healthy skin, then closing with fine stitches.",
          "href": "/surgical-dermatology/excisions"
        },
        {
          "title": "Electrodesiccation and curettage",
          "text": "Scraping and gently cauterizing small, low-risk cancers.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Topical or other treatments",
          "text": "For some superficial cancers, prescription creams or other options may be used."
        },
        {
          "title": "Follow-up skin checks",
          "text": "Regular exams to catch any new spots early."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the spot and reviews any biopsy results."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear treatment plan, often scheduled within days."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most treatment sites heal within a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "Regular skin checks help catch any new spots early."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Is basal cell carcinoma dangerous?",
        "a": "It rarely spreads, but it can damage nearby skin if untreated. Early treatment is simple and very effective."
      },
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "Will there be a scar?",
        "a": "Usually a small, fine scar. Dr. Sandhu closes carefully for the most natural result."
      },
      {
        "q": "Can it come back?",
        "a": "Sometimes. Regular skin checks help catch new or returning spots early."
      }
    ]
  },
  {
    "slug": "squamous-cell-carcinoma",
    "category": "surgical-dermatology",
    "group": "Skin Cancer Treatment",
    "name": "Squamous Cell Carcinoma",
    "localTopic": "Squamous cell carcinoma treatment",
    "title": "Squamous Cell Carcinoma",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Squamous Cell Carcinoma Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified squamous cell carcinoma treatment in Torrance, CA, with prompt, careful surgery and close follow-up.",
    "lede": "Prompt, precise treatment for squamous cell carcinoma, with close follow-up.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/squamous-cell-carcinoma/hero.webp",
      "heroAlt": "Reception area with the Oceanside sign",
      "one": "/images/services/surgical/squamous-cell-carcinoma/one.webp",
      "oneAlt": "Reception desk under the Oceanside sign",
      "two": "/images/services/surgical/squamous-cell-carcinoma/two.webp",
      "twoAlt": "Clinician examining a woman's facial skin"
    },
    "overview": {
      "eyebrow": "Understanding Squamous Cell Carcinoma",
      "title": "What is",
      "accent": "squamous cell carcinoma?",
      "text": [
        "Squamous cell carcinoma is a cancer from the upper layers of the skin. It can spread if untreated.",
        "It often looks like a firm red bump, a scaly patch or a sore that heals and comes back, on sun-exposed areas such as the face, ears, lips and hands.",
        "Many start from actinic keratoses, rough sun spots. Treating it early gives excellent results."
      ],
      "facts": [
        {
          "label": "Starts in",
          "value": "Upper skin layers"
        },
        {
          "label": "Can",
          "value": "Spread if untreated"
        },
        {
          "label": "Key",
          "value": "Treat promptly"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist promptly for any new, changing or non-healing spot. Early treatment is simpler and more successful.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Firm red bumps",
        "Scaly, crusted patches",
        "Sores that heal and return",
        "Squamous cell on the lips or ears",
        "Squamous cell on the hands",
        "Cancers that start from sun spots"
      ],
      "signs": [
        "A firm, red bump",
        "A rough, scaly patch that grows",
        "A sore that will not heal",
        "A spot that bleeds easily",
        "A growing spot on the lip or ear",
        "Any new or changing spot"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the type, size and location of the cancer. Dr. Sandhu explains every option and recommends the best fit.",
      "items": [
        {
          "title": "Excision",
          "text": "Removing the cancer with a margin of healthy skin.",
          "href": "/surgical-dermatology/excisions"
        },
        {
          "title": "Electrodesiccation and curettage",
          "text": "For small, low-risk cancers.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Treating precancers",
          "text": "Treating rough sun spots before they become cancer.",
          "href": "/surgical-dermatology/precancerous-lesions"
        },
        {
          "title": "Close follow-up",
          "text": "Regular checks of the skin and treated area."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the spot and reviews any biopsy results."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear treatment plan, often scheduled within days."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most treatment sites heal within a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "Regular skin checks help catch any new spots early."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Can squamous cell carcinoma spread?",
        "a": "It can if left untreated, which is why prompt treatment matters."
      },
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "What causes it?",
        "a": "Mostly years of sun exposure. Sun protection lowers your risk."
      },
      {
        "q": "How often will I need skin checks?",
        "a": "Dr. Sandhu will recommend a schedule based on your risk."
      }
    ]
  },
  {
    "slug": "melanoma",
    "category": "surgical-dermatology",
    "group": "Skin Cancer Treatment",
    "name": "Melanoma",
    "localTopic": "Melanoma treatment",
    "title": "Melanoma",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Melanoma Diagnosis & Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified melanoma diagnosis and treatment in Torrance, CA. Careful evaluation of changing moles and prompt surgical care.",
    "lede": "Careful, prompt care for the most serious type of skin cancer.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/melanoma/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/melanoma/one.webp",
      "oneAlt": "Dr. Sophia Sandhu checking a smiling patient's scalp",
      "two": "/images/services/surgical/melanoma/two.webp",
      "twoAlt": "Doctor checking a mole with a dermatoscope"
    },
    "overview": {
      "eyebrow": "Understanding Melanoma",
      "title": "What is",
      "accent": "melanoma?",
      "text": [
        "Melanoma is the most serious type of skin cancer, arising from pigment-producing cells. It can appear as a new dark spot or a change in an existing mole.",
        "It can spread to other parts of the body, so early detection and treatment are critical.",
        "Dr. Sandhu evaluates suspicious moles closely, performs biopsies and removes melanoma with appropriate margins, coordinating further care when needed."
      ],
      "facts": [
        {
          "label": "Most serious",
          "value": "Skin cancer"
        },
        {
          "label": "Warning signs",
          "value": "ABCDEs"
        },
        {
          "label": "Key",
          "value": "Early detection"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist promptly for any new, changing or non-healing spot. Early treatment is simpler and more successful.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "New or changing moles",
        "Dark, irregular spots",
        "Early-stage melanoma",
        "Melanoma in situ",
        "Follow-up after melanoma",
        "Family history of melanoma"
      ],
      "signs": [
        "Asymmetry: two halves do not match",
        "Border: uneven or ragged edges",
        "Color: several shades",
        "Diameter: larger than a pencil eraser",
        "Evolving: any change in size, shape or color",
        "A spot that looks different from the rest"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the type, size and location of the cancer. Dr. Sandhu explains every option and recommends the best fit.",
      "items": [
        {
          "title": "Biopsy",
          "text": "Removing all or part of a suspicious spot for lab testing."
        },
        {
          "title": "Wide excision",
          "text": "Removing the melanoma with a margin of healthy skin.",
          "href": "/surgical-dermatology/excisions"
        },
        {
          "title": "Coordinated care",
          "text": "Referral to specialists for further testing or treatment when needed."
        },
        {
          "title": "Lifelong skin checks",
          "text": "Regular full-body exams after melanoma.",
          "href": "/medical-dermatology/skin-cancer-screenings"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the spot and reviews any biopsy results."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear treatment plan, often scheduled within days."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most treatment sites heal within a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "Regular skin checks help catch any new spots early."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "How is melanoma found?",
        "a": "Through skin checks and a biopsy of any suspicious spot."
      },
      {
        "q": "Is melanoma curable?",
        "a": "Melanoma found early is usually highly treatable. That is why skin checks matter."
      },
      {
        "q": "What happens after treatment?",
        "a": "Regular full-body skin checks to catch any new spots early."
      },
      {
        "q": "Who is at higher risk?",
        "a": "People with many moles, fair skin, a history of sunburns, or a family history of melanoma."
      }
    ]
  },
  {
    "slug": "precancerous-lesions",
    "category": "surgical-dermatology",
    "group": "Skin Cancer Treatment",
    "name": "Precancerous Lesions",
    "localTopic": "Precancerous lesion treatment",
    "title": "Precancerous Lesions",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Precancerous Lesion Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified treatment of precancerous skin lesions such as actinic keratoses in Torrance, CA, to lower skin cancer risk.",
    "lede": "Treat sun-damaged precancers early, to lower your risk of skin cancer.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/precancerous-lesions/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu laughing with a team member",
      "one": "/images/services/surgical/precancerous-lesions/one.webp",
      "oneAlt": "Dr. Sophia Sandhu and a team member in the hallway",
      "two": "/images/services/surgical/precancerous-lesions/two.webp",
      "twoAlt": "Mature woman in a sun hat holding sunscreen"
    },
    "overview": {
      "eyebrow": "Understanding Precancerous Lesions",
      "title": "What is",
      "accent": "precancerous lesions?",
      "text": [
        "Precancerous lesions are skin changes that can turn into skin cancer over time. The most common are actinic keratoses, rough, scaly patches caused by sun damage.",
        "They often appear on the face, scalp, ears, lips, hands and arms.",
        "Treating them early is one of the best ways to prevent squamous cell carcinoma."
      ],
      "facts": [
        {
          "label": "Most common",
          "value": "Actinic keratoses"
        },
        {
          "label": "Cause",
          "value": "Sun damage"
        },
        {
          "label": "Why treat",
          "value": "Prevent cancer"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist promptly for any new, changing or non-healing spot. Early treatment is simpler and more successful.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Actinic keratoses",
        "Actinic cheilitis on the lips",
        "Many sun-damaged spots",
        "Scaly patches on the scalp",
        "Precancers on the hands",
        "Recurring precancers"
      ],
      "signs": [
        "Rough, sandpaper-like spots",
        "Scaly patches that return",
        "Dry, scaly lips",
        "Spots that are tender",
        "A spot that grows or bleeds",
        "Many spots on sun-exposed skin"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on the type, size and location of the cancer. Dr. Sandhu explains every option and recommends the best fit.",
      "items": [
        {
          "title": "Cryosurgery",
          "text": "Freezing individual precancers in the office.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Field treatments",
          "text": "Prescription creams for many spots across an area."
        },
        {
          "title": "Chemical peels",
          "text": "Removing damaged top layers of skin.",
          "href": "/cosmetic-dermatology/chemical-peels"
        },
        {
          "title": "Sun protection",
          "text": "Daily habits to prevent new spots."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the spot and reviews any biopsy results."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear treatment plan, often scheduled within days."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most treatment sites heal within a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "Regular skin checks help catch any new spots early."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Are precancers cancer?",
        "a": "Not yet, but some can become squamous cell carcinoma, which is why we treat them."
      },
      {
        "q": "Does freezing hurt?",
        "a": "It stings briefly and may blister for a few days."
      },
      {
        "q": "Will new spots appear?",
        "a": "They can with more sun. Sunscreen and regular checks help."
      },
      {
        "q": "Where can I learn more?",
        "a": "See our actinic keratoses page for details."
      }
    ]
  },
  {
    "slug": "excisions",
    "category": "surgical-dermatology",
    "group": "Procedures",
    "name": "Excisions",
    "localTopic": "Skin excision",
    "title": "Surgical Excisions",
    "accent": "in Torrance, CA",
    "metaTitle": "Surgical Skin Excision in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified surgical excisions in Torrance, CA for skin cancers, moles, cysts and growths, with careful closure for natural-looking results.",
    "lede": "Precise removal of skin cancers and growths, closed with care for a natural look.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/excisions/hero.webp",
      "heroAlt": "Reception desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/excisions/one.webp",
      "oneAlt": "Waiting room seating under a pendant light",
      "two": "/images/services/surgical/excisions/two.webp",
      "twoAlt": "Doctor putting on medical gloves"
    },
    "overview": {
      "eyebrow": "Understanding Excisions",
      "title": "What is",
      "accent": "excisions?",
      "text": [
        "An excision is a minor surgical procedure that removes a growth along with a small margin of surrounding skin. The area is then closed with fine stitches.",
        "It is used for skin cancers, suspicious moles, cysts and other growths. The removed tissue can be sent to a lab for testing.",
        "Dr. Sandhu plans each excision to follow natural skin lines, for the neatest possible scar."
      ],
      "facts": [
        {
          "label": "Used for",
          "value": "Cancers, moles, cysts"
        },
        {
          "label": "Done with",
          "value": "Local numbing"
        },
        {
          "label": "Closure",
          "value": "Fine stitches"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Skin cancer removal",
        "Suspicious or atypical moles",
        "Cysts and lipomas",
        "Benign growths",
        "Growths in visible areas",
        "Growths that keep returning"
      ],
      "signs": [
        "A biopsy shows skin cancer",
        "A mole is changing",
        "A cyst keeps coming back",
        "A growth is irritated or bleeding",
        "A growth bothers you",
        "A spot needs full removal for testing"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Careful planning",
          "text": "Incisions placed along natural skin lines."
        },
        {
          "title": "Complete removal",
          "text": "The growth is removed with an appropriate margin."
        },
        {
          "title": "Layered closure",
          "text": "Fine stitches for a smooth, flat scar."
        },
        {
          "title": "Lab testing",
          "text": "Tissue is sent to a lab when needed."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "How long does it take?",
        "a": "Most excisions take under an hour."
      },
      {
        "q": "Will I have stitches?",
        "a": "Yes. Stitches are usually removed in one to two weeks."
      },
      {
        "q": "How do I care for the wound?",
        "a": "We give simple written instructions for cleaning and protecting the area."
      }
    ]
  },
  {
    "slug": "electrodesiccation-and-curettage",
    "category": "surgical-dermatology",
    "group": "Procedures",
    "name": "Electrodesiccation and Curettage",
    "localTopic": "Electrodesiccation and curettage",
    "title": "Electrodesiccation & Curettage",
    "accent": "in Torrance, CA",
    "metaTitle": "Electrodesiccation and Curettage (ED&C) in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified electrodesiccation and curettage (ED&C) in Torrance, CA for small, low-risk skin cancers and benign growths.",
    "lede": "A quick, effective treatment for small, low-risk skin cancers and growths.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/electrodesiccation-and-curettage/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/electrodesiccation-and-curettage/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/surgical/electrodesiccation-and-curettage/two.webp",
      "twoAlt": "Smiling patient in a dermatology clinic"
    },
    "overview": {
      "eyebrow": "Understanding Electrodesiccation and Curettage",
      "title": "What is",
      "accent": "electrodesiccation and curettage?",
      "text": [
        "Electrodesiccation and curettage (ED&C) removes a growth by gently scraping it away (curettage), then treating the base with a fine electric current (electrodesiccation).",
        "It is often used for small, low-risk basal cell and squamous cell carcinomas, and some benign growths.",
        "No stitches are needed. The area heals over a few weeks, usually leaving a small, flat scar."
      ],
      "facts": [
        {
          "label": "Used for",
          "value": "Small, low-risk cancers"
        },
        {
          "label": "Stitches",
          "value": "None"
        },
        {
          "label": "Takes",
          "value": "Minutes"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Small basal cell carcinomas",
        "Small squamous cell carcinomas",
        "Seborrheic keratoses",
        "Skin tags and small growths",
        "Angiomas",
        "Superficial lesions"
      ],
      "signs": [
        "A small, low-risk skin cancer",
        "A benign growth you want removed",
        "A growth on the trunk or limbs",
        "A spot not suited to excision",
        "A quick in-office option",
        "A small lesion that bleeds"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Curettage",
          "text": "The growth is gently scraped away after numbing."
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current treats the base and stops bleeding."
        },
        {
          "title": "Repeat cycles",
          "text": "Often repeated two or three times for skin cancers."
        },
        {
          "title": "Wound care",
          "text": "A simple dressing while the area heals."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "Do I need stitches?",
        "a": "No. The area heals on its own."
      },
      {
        "q": "How long does healing take?",
        "a": "Usually two to four weeks."
      },
      {
        "q": "Is it right for every skin cancer?",
        "a": "No. It is best for small, low-risk cancers. Dr. Sandhu will recommend the right option."
      }
    ]
  },
  {
    "slug": "cryosurgery",
    "category": "surgical-dermatology",
    "group": "Procedures",
    "name": "Cryosurgery",
    "localTopic": "Cryosurgery",
    "title": "Cryosurgery",
    "accent": "in Torrance, CA",
    "metaTitle": "Cryosurgery (Freezing Treatment) in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified cryosurgery in Torrance, CA. Quick freezing treatment for precancers, warts and benign growths.",
    "lede": "A quick freezing treatment for precancers, warts and benign growths.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/cryosurgery/hero.webp",
      "heroAlt": "Waiting room seating with natural light",
      "one": "/images/services/surgical/cryosurgery/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/surgical/cryosurgery/two.webp",
      "twoAlt": "Cryotherapy treatment in a clinic"
    },
    "overview": {
      "eyebrow": "Understanding Cryosurgery",
      "title": "What is",
      "accent": "cryosurgery?",
      "text": [
        "Cryosurgery uses extreme cold, usually liquid nitrogen, to freeze and destroy abnormal skin cells.",
        "It is commonly used for actinic keratoses (precancers), warts, seborrheic keratoses and other benign growths.",
        "It is quick, needs no cutting and is done right in the office."
      ],
      "facts": [
        {
          "label": "Uses",
          "value": "Liquid nitrogen"
        },
        {
          "label": "Used for",
          "value": "Precancers, warts"
        },
        {
          "label": "Takes",
          "value": "Seconds per spot"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Actinic keratoses",
        "Warts",
        "Seborrheic keratoses",
        "Skin tags",
        "Small benign growths",
        "Some superficial lesions"
      ],
      "signs": [
        "Rough, scaly sun spots",
        "Stubborn warts",
        "Raised, waxy growths",
        "Small growths you want removed",
        "A quick in-office option",
        "Spots not needing stitches"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Freezing treatment",
          "text": "Liquid nitrogen applied for a few seconds."
        },
        {
          "title": "Healing",
          "text": "The spot may blister, crust and fall off over one to three weeks."
        },
        {
          "title": "Repeat if needed",
          "text": "Some spots need more than one treatment.",
          "href": "/medical-dermatology/warts"
        },
        {
          "title": "Aftercare",
          "text": "Simple care to keep the area clean."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Does it hurt?",
        "a": "It stings briefly, like a cold burn."
      },
      {
        "q": "Will it blister?",
        "a": "Often, yes. This is normal and heals on its own."
      },
      {
        "q": "Will it scar?",
        "a": "Scarring is uncommon, but a lighter spot can remain, especially on darker skin."
      },
      {
        "q": "How many treatments will I need?",
        "a": "Many spots clear in one, while warts often need a few."
      }
    ]
  },
  {
    "slug": "incision-and-drainage",
    "category": "surgical-dermatology",
    "group": "Procedures",
    "name": "Incision and Drainage",
    "localTopic": "Incision and drainage",
    "title": "Incision & Drainage",
    "accent": "in Torrance, CA",
    "metaTitle": "Incision and Drainage in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified incision and drainage in Torrance, CA for painful, swollen cysts, boils and abscesses.",
    "lede": "Fast relief for painful, swollen cysts, boils and abscesses.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/incision-and-drainage/hero.webp",
      "heroAlt": "Front desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/incision-and-drainage/one.webp",
      "oneAlt": "Front desk under the Oceanside sign",
      "two": "/images/services/surgical/incision-and-drainage/two.webp",
      "twoAlt": "Caring for a small wound with a bandage"
    },
    "overview": {
      "eyebrow": "Understanding Incision and Drainage",
      "title": "What is",
      "accent": "incision and drainage?",
      "text": [
        "Incision and drainage is a simple procedure that relieves a painful, swollen lump such as an inflamed cyst, boil or abscess.",
        "After numbing, a small opening is made to drain the fluid, which quickly eases pressure and pain.",
        "It is often the first step in treating an infected cyst or a flare of hidradenitis suppurativa."
      ],
      "facts": [
        {
          "label": "Used for",
          "value": "Cysts, boils, abscesses"
        },
        {
          "label": "Relief",
          "value": "Fast"
        },
        {
          "label": "Done with",
          "value": "Local numbing"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Inflamed cysts",
        "Boils",
        "Skin abscesses",
        "Hidradenitis suppurativa flares",
        "Infected cysts",
        "Painful swollen lumps"
      ],
      "signs": [
        "A painful, swollen lump",
        "Redness and warmth",
        "A lump that feels full of fluid",
        "Pain that keeps you up",
        "A lump that is getting bigger",
        "Fever with a skin lump (seek urgent care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Numbing",
          "text": "The area is numbed for comfort."
        },
        {
          "title": "Drainage",
          "text": "A small opening releases the fluid and pressure."
        },
        {
          "title": "Packing or dressing",
          "text": "The area is dressed to help it heal."
        },
        {
          "title": "Follow-up care",
          "text": "Antibiotics or later cyst removal if needed.",
          "href": "/surgical-dermatology/cyst-and-lipoma-removal"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Does it hurt?",
        "a": "The area is numbed first, and most people feel quick relief afterwards."
      },
      {
        "q": "Will the cyst come back?",
        "a": "Drainage relieves pain, but a cyst can return. Removing it later may be recommended."
      },
      {
        "q": "How long does healing take?",
        "a": "Usually one to two weeks."
      },
      {
        "q": "When is it urgent?",
        "a": "Seek urgent care for fever, spreading redness or red streaks."
      }
    ]
  },
  {
    "slug": "benign-growth-removal",
    "category": "surgical-dermatology",
    "group": "Removals & Repair",
    "name": "Benign Growth Removal",
    "localTopic": "Benign growth removal",
    "title": "Benign Growth Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Benign Skin Growth Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified removal of benign skin growths in Torrance, CA, including skin tags, moles, seborrheic keratoses and more.",
    "lede": "Safe removal of harmless growths that bother you, with a natural-looking result.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/benign-growth-removal/hero.webp",
      "heroAlt": "Light-filled reception area",
      "one": "/images/services/surgical/benign-growth-removal/one.webp",
      "oneAlt": "Dr. Sophia Sandhu smiling with a patient in the exam room",
      "two": "/images/services/surgical/benign-growth-removal/two.webp",
      "twoAlt": "Doctor examining a patient's skin"
    },
    "overview": {
      "eyebrow": "Understanding Benign Growth Removal",
      "title": "What is",
      "accent": "benign growth removal?",
      "text": [
        "Benign growths are non-cancerous skin lesions, such as skin tags, moles, seborrheic keratoses, cherry angiomas and sebaceous hyperplasia.",
        "They are harmless, but they can catch on clothing, become irritated or simply affect how you feel about your skin.",
        "Dr. Sandhu confirms each growth is benign and removes it with the method that gives the best result."
      ],
      "facts": [
        {
          "label": "Growths",
          "value": "Harmless"
        },
        {
          "label": "Reasons",
          "value": "Comfort or cosmetic"
        },
        {
          "label": "Methods",
          "value": "Several options"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Skin tags",
        "Moles",
        "Seborrheic keratoses",
        "Cherry angiomas",
        "Sebaceous hyperplasia",
        "Dermatosis papulosa nigra"
      ],
      "signs": [
        "Growths that catch or rub",
        "Spots that itch or bleed",
        "Growths you do not like the look of",
        "Many small growths",
        "A growth in a visible area",
        "A growth you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Snip or shave removal",
          "text": "Quick removal of raised growths."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small growths.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current for small spots.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Excision",
          "text": "Full removal with stitches when needed.",
          "href": "/surgical-dermatology/excisions"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Removal for cosmetic reasons may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it scar?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "Can a growth come back?",
        "a": "Removed growths rarely return, but new ones can form."
      }
    ]
  },
  {
    "slug": "cyst-and-lipoma-removal",
    "category": "surgical-dermatology",
    "group": "Removals & Repair",
    "name": "Cyst and Lipoma Removal",
    "localTopic": "Cyst and lipoma removal",
    "title": "Cyst & Lipoma Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Cyst and Lipoma Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified cyst and lipoma removal in Torrance, CA, with careful technique for minimal scarring.",
    "lede": "Careful removal of cysts and lipomas, with attention to a natural result.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/cyst-and-lipoma-removal/hero.webp",
      "heroAlt": "Front desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/surgical/cyst-and-lipoma-removal/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/surgical/cyst-and-lipoma-removal/two.webp",
      "twoAlt": "Dermatologist examining a smiling patient's skin"
    },
    "overview": {
      "eyebrow": "Understanding Cyst and Lipoma Removal",
      "title": "What is",
      "accent": "cyst and lipoma removal?",
      "text": [
        "Cysts are closed sacs filled with fluid or semi-solid material, and lipomas are soft, fatty lumps under the skin. Both are usually harmless.",
        "They can grow, become inflamed or uncomfortable, or simply bother you.",
        "Dr. Sandhu removes them through the smallest practical incision, aiming for a neat, natural-looking scar."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Benign"
        },
        {
          "label": "Done with",
          "value": "Local numbing"
        },
        {
          "label": "Goal",
          "value": "Small, neat scar"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Epidermoid cysts",
        "Lipomas",
        "Cysts that keep returning",
        "Growing lumps",
        "Painful or inflamed cysts",
        "Lumps in visible areas"
      ],
      "signs": [
        "A round bump under the skin",
        "A soft, movable lump",
        "A lump that is growing",
        "Pain or pressure",
        "A cyst that drains",
        "A lump you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Full removal",
          "text": "Removing the whole cyst wall or lipoma to lower the chance of return."
        },
        {
          "title": "Small incisions",
          "text": "The smallest practical opening for a neat scar."
        },
        {
          "title": "Calming first",
          "text": "Inflamed cysts may be drained or treated before removal.",
          "href": "/surgical-dermatology/incision-and-drainage"
        },
        {
          "title": "Careful closure",
          "text": "Fine stitches and simple aftercare."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "Will it come back?",
        "a": "Removing the whole cyst wall or lipoma lowers the chance it returns."
      },
      {
        "q": "How long is recovery?",
        "a": "Most people return to normal activities right away, with some limits for a week or two."
      },
      {
        "q": "Should I squeeze a cyst?",
        "a": "No. Squeezing can cause infection and scarring."
      }
    ]
  },
  {
    "slug": "earlobe-repair",
    "category": "surgical-dermatology",
    "group": "Removals & Repair",
    "name": "Earlobe Repair",
    "localTopic": "Earlobe repair",
    "title": "Earlobe Repair",
    "accent": "in Torrance, CA",
    "metaTitle": "Earlobe Repair in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified earlobe repair in Torrance, CA for torn, split or stretched earlobes, with natural-looking results.",
    "lede": "Restore the natural shape of torn or stretched earlobes.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/surgical/earlobe-repair/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "one": "/images/services/surgical/earlobe-repair/one.webp",
      "oneAlt": "Dr. Sophia Sandhu, wearing gloves, checking a patient's skin",
      "two": "/images/services/surgical/earlobe-repair/two.webp",
      "twoAlt": "Woman touching her ear"
    },
    "overview": {
      "eyebrow": "Understanding Earlobe Repair",
      "title": "What is",
      "accent": "earlobe repair?",
      "text": [
        "Earlobes can stretch or tear from heavy earrings, injury or gauges over time.",
        "Earlobe repair is a minor procedure that closes the tear or stretched hole and restores a natural shape.",
        "It is done in the office under local numbing, and most people return to normal activities the same day."
      ],
      "facts": [
        {
          "label": "Repairs",
          "value": "Torn or stretched lobes"
        },
        {
          "label": "Done with",
          "value": "Local numbing"
        },
        {
          "label": "Downtime",
          "value": "Minimal"
        }
      ]
    },
    "candidates": {
      "title": "Is this procedure",
      "accent": "right for you?",
      "text": "Dr. Sandhu recommends the procedure that best fits your diagnosis, the area and your goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Split earlobes",
        "Stretched piercing holes",
        "Torn earlobes from injury",
        "Gauged earlobes",
        "Uneven earlobes",
        "Earlobes that will not hold earrings"
      ],
      "signs": [
        "A tear through the earlobe",
        "A long, stretched piercing hole",
        "Earrings that droop",
        "An injury to the earlobe",
        "Lobes that look uneven",
        "Wanting to wear earrings again"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Every procedure is planned around a healthy result and a natural look.",
      "items": [
        {
          "title": "Repair",
          "text": "The edges are trimmed and closed with fine stitches."
        },
        {
          "title": "Natural shape",
          "text": "Closed to restore a smooth, natural lobe."
        },
        {
          "title": "Re-piercing guidance",
          "text": "Advice on when it is safe to pierce again."
        },
        {
          "title": "Aftercare",
          "text": "Simple care while the area heals."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains the procedure."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "Many procedures can be done the same day or scheduled soon after."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Most areas heal within one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and review any lab results."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Procedures are done under local numbing in our office. Dr. Sandhu explains each step and what to expect while healing.",
        "Dr. Sandhu performs all surgical procedures with precision and care, prioritizing both medical outcomes and natural cosmetic results."
      ]
    },
    "faqs": [
      {
        "q": "Will I be awake?",
        "a": "Yes. Most procedures use local numbing medicine, so you stay awake and comfortable."
      },
      {
        "q": "When can I wear earrings again?",
        "a": "Usually after the area has fully healed, often several weeks. We will guide you."
      },
      {
        "q": "Will there be a scar?",
        "a": "A fine scar is expected and usually fades well."
      },
      {
        "q": "How long does it take?",
        "a": "The procedure is usually quick, often under an hour."
      }
    ]
  },
  {
    "slug": "bacterial-infections",
    "category": "medical-dermatology",
    "group": "Skin Infections",
    "name": "Bacterial Infections",
    "localTopic": "Bacterial skin infection treatment",
    "title": "Bacterial Skin Infection",
    "accent": "Treatment in Torrance, CA",
    "metaTitle": "Bacterial Skin Infection Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified treatment for bacterial skin infections in Torrance, CA, including impetigo, cellulitis and folliculitis, for adults and children.",
    "lede": "Prompt treatment for impetigo, cellulitis and other bacterial skin infections.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/bacterial-infections/hero.webp",
      "heroAlt": "Mother and daughter caring for their skin together at home",
      "one": "/images/services/bacterial-infections/one.webp",
      "oneAlt": "Woman applying a healing ointment to her arm",
      "two": "/images/services/bacterial-infections/two.webp",
      "twoAlt": "Dermatologist checking a child's skin with a dermatoscope"
    },
    "overview": {
      "eyebrow": "Understanding Bacterial Infections",
      "title": "What are bacterial",
      "accent": "skin infections?",
      "text": [
        "Bacterial skin infections include impetigo, cellulitis and folliculitis. They are caused by bacteria entering the skin, often through a cut, scrape, bite or rash.",
        "Signs include redness, warmth, swelling, pain, crusting or pus. Impetigo is common in children and spreads easily.",
        "Prompt treatment stops the infection from spreading. Dr. Sandhu treats the infection and helps the skin heal."
      ],
      "facts": [
        {
          "label": "Examples",
          "value": "Impetigo, cellulitis"
        },
        {
          "label": "Who we treat",
          "value": "Children & adults"
        },
        {
          "label": "Key",
          "value": "Treat promptly"
        }
      ]
    },
    "candidates": {
      "title": "Is infection care",
      "accent": "right for you?",
      "text": "See a doctor promptly when skin becomes red, warm, swollen or painful, or a sore crusts or oozes.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Impetigo",
        "Cellulitis",
        "Folliculitis",
        "Infected cuts or bites",
        "Boils",
        "Infected eczema"
      ],
      "signs": [
        "Honey-colored crusts",
        "Red, warm, swollen skin",
        "Pus or oozing",
        "A sore that is spreading",
        "Fever with a skin infection (seek urgent care)",
        "Red streaks from a wound (seek urgent care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on how deep and widespread the infection is.",
      "items": [
        {
          "title": "Antibiotic ointments",
          "text": "For small, surface infections such as mild impetigo."
        },
        {
          "title": "Oral antibiotics",
          "text": "For deeper or more widespread infections."
        },
        {
          "title": "Wound and skin care",
          "text": "Gentle cleansing and care to help the skin heal."
        },
        {
          "title": "Prevention",
          "text": "Hand washing, covering sores and treating the skin conditions that let bacteria in."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the skin and may take a swab."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with treatment and clear wound care steps."
        },
        {
          "label": "Days",
          "title": "Healing",
          "text": "Most infections improve within days of starting treatment."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We make sure the infection has cleared and the skin is healing."
        }
      ]
    },
    "safety": {
      "title": "Prompt, safe care",
      "text": [
        "Spreading redness, fever, red streaks or severe pain need urgent care.",
        "Finish the full course of any antibiotic, even if the skin looks better."
      ]
    },
    "faqs": [
      {
        "q": "Is impetigo contagious?",
        "a": "Yes. Children can usually return to school after 24 hours of treatment."
      },
      {
        "q": "Do you treat children?",
        "a": "Yes. Dr. Sandhu treats patients of all ages, from newborns to adults."
      },
      {
        "q": "When is a skin infection an emergency?",
        "a": "Seek urgent care for fever, rapidly spreading redness or red streaks."
      },
      {
        "q": "How can I prevent infections?",
        "a": "Keep cuts clean and covered, wash hands, and treat eczema and other skin conditions."
      }
    ]
  },
  {
    "slug": "cysts",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Cysts",
    "localTopic": "Cyst removal",
    "title": "Cyst Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Cyst Treatment & Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified cyst treatment and removal in Torrance, CA, including epidermoid cysts, with careful technique for minimal scarring.",
    "lede": "Careful removal of skin cysts, with attention to a neat, natural result.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cysts/hero.webp",
      "heroAlt": "Smiling woman with smooth skin touching her jawline",
      "one": "/images/services/cysts/one.webp",
      "oneAlt": "Doctor examining a woman's shoulder",
      "two": "/images/services/cysts/two.webp",
      "twoAlt": "Smiling woman touching her smooth jawline"
    },
    "overview": {
      "eyebrow": "Understanding Cysts",
      "title": "What are",
      "accent": "cysts?",
      "text": [
        "Cysts are closed sacs filled with fluid or semi-solid material under the skin. They often feel like smooth, round bumps.",
        "They are usually harmless but can grow, become inflamed or infected, or simply bother you.",
        "Dr. Sandhu removes cysts with care, prioritizing both a healthy outcome and a natural-looking result."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Benign"
        },
        {
          "label": "Feels like",
          "value": "Smooth, round bump"
        },
        {
          "label": "Removal",
          "value": "In office"
        }
      ]
    },
    "candidates": {
      "title": "Is cyst removal",
      "accent": "right for you?",
      "text": "See a dermatologist when a cyst grows, becomes painful or inflamed, keeps coming back, or bothers you.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Epidermoid cysts",
        "Cysts on the face, neck and back",
        "Inflamed cysts",
        "Infected cysts",
        "Cysts that keep returning",
        "Cysts you want removed"
      ],
      "signs": [
        "A round bump under the skin",
        "A bump that is growing",
        "Redness, swelling or pain",
        "Drainage from a bump",
        "A bump in a visible area",
        "A lump you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Treatment depends on whether the cyst is calm or inflamed.",
      "items": [
        {
          "title": "Surgical removal",
          "text": "Removing the whole cyst and its wall to lower the chance it returns.",
          "href": "/surgical-dermatology/cyst-and-lipoma-removal"
        },
        {
          "title": "Incision and drainage",
          "text": "Relief for a painful, swollen cyst.",
          "href": "/surgical-dermatology/incision-and-drainage"
        },
        {
          "title": "Calming inflammation",
          "text": "Treatment to settle an inflamed cyst before removal."
        },
        {
          "title": "Checking any lump",
          "text": "Making sure a lump is a harmless cyst."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the bump and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a plan, and removal is scheduled or done."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "The site heals over one to three weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We check healing and remove stitches if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Do not squeeze a cyst at home, which can cause infection and scarring.",
        "Removal uses numbing medicine and leaves a small, carefully placed scar."
      ]
    },
    "faqs": [
      {
        "q": "Are cysts dangerous?",
        "a": "Most are harmless. Any lump you are unsure about should be checked."
      },
      {
        "q": "Will a cyst come back?",
        "a": "Removing the whole cyst wall lowers the chance it returns."
      },
      {
        "q": "Can a cyst be removed with a small scar?",
        "a": "Dr. Sandhu uses careful technique to keep scars as small as possible."
      },
      {
        "q": "What if my cyst is painful?",
        "a": "An inflamed cyst may need drainage or treatment first."
      }
    ]
  },
  {
    "slug": "lipoma",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Lipoma",
    "localTopic": "Lipoma treatment",
    "title": "Lipoma Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Lipoma Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified lipoma removal in Torrance, CA. Careful removal of soft, fatty lumps under the skin.",
    "lede": "Careful removal of soft, fatty lumps under the skin.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/lipoma/hero.webp",
      "heroAlt": "Front desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/lipoma/one.webp",
      "oneAlt": "Smiling front desk team member",
      "two": "/images/services/lipoma/two.webp",
      "twoAlt": "Woman applying lotion to her shoulder"
    },
    "overview": {
      "eyebrow": "Understanding Lipoma",
      "title": "What is a",
      "accent": "lipoma?",
      "text": [
        "A lipoma is a soft, fatty lump under the skin. It usually moves slightly when pressed and grows slowly.",
        "Lipomas are almost always harmless. They are often removed when they grow, cause discomfort or bother you.",
        "Dr. Sandhu removes lipomas with precision, aiming for a natural-looking result."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Benign"
        },
        {
          "label": "Feels like",
          "value": "Soft, movable lump"
        },
        {
          "label": "Removal",
          "value": "In office"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when this concern grows, changes, hurts or bothers you, or you are unsure what it is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Lipomas on the back and shoulders",
        "Lipomas on the arms and neck",
        "Growing lipomas",
        "Painful lipomas",
        "Lipomas you want removed",
        "Lumps you are unsure about"
      ],
      "signs": [
        "A soft lump that moves",
        "A lump that is growing",
        "Pain or pressure",
        "A lump in a visible area",
        "A lump that feels hard (needs a check)",
        "A lump you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, the area and your goals.",
      "items": [
        {
          "title": "Surgical removal",
          "text": "Removing the lipoma through a small incision.",
          "href": "/surgical-dermatology/cyst-and-lipoma-removal"
        },
        {
          "title": "Checking any lump",
          "text": "Making sure a lump is a harmless lipoma."
        },
        {
          "title": "Careful closure",
          "text": "Stitches placed for the neatest possible scar."
        },
        {
          "title": "Aftercare",
          "text": "Simple wound care to help the skin heal well."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, and treatment may start the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas usually heal or improve over a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review results and add treatments if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Every treatment is chosen for your skin type and the area being treated, including skin of color.",
        "Any growth or scar that changes, bleeds or looks unusual should be checked first."
      ]
    },
    "faqs": [
      {
        "q": "Is it harmful?",
        "a": "Most of these growths and scars are harmless, but any change should be checked."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Numbing is used when needed, and most treatments are quick."
      },
      {
        "q": "Will it come back?",
        "a": "Some can return or new ones can form over time. We will tell you what to expect."
      },
      {
        "q": "Is cosmetic removal covered by insurance?",
        "a": "Cosmetic treatment may not be covered. We will let you know before treatment."
      }
    ]
  },
  {
    "slug": "angiomas",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Angiomas",
    "localTopic": "Angiomas treatment",
    "title": "Angioma Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Angioma (Cherry Angioma) Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified angioma care in Torrance, CA. Treatment of small red or purple vascular spots for health or cosmetic reasons.",
    "lede": "Clear, even skin, with gentle treatment for small red spots.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/angiomas/hero.webp",
      "heroAlt": "Reception desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/angiomas/one.webp",
      "oneAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "two": "/images/services/angiomas/two.webp",
      "twoAlt": "Woman with smooth, clear skin touching her face"
    },
    "overview": {
      "eyebrow": "Understanding Angiomas",
      "title": "What are",
      "accent": "angiomas?",
      "text": [
        "Angiomas are small red or purple vascular growths made up of blood vessels. Cherry angiomas are the most common type and often appear with age.",
        "They are harmless, but they can bleed if scratched or simply bother you.",
        "Dr. Sandhu confirms the diagnosis and removes angiomas when you would like them gone."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Harmless"
        },
        {
          "label": "Looks like",
          "value": "Small red spots"
        },
        {
          "label": "Removal",
          "value": "Quick, in office"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when this concern grows, changes, hurts or bothers you, or you are unsure what it is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Cherry angiomas",
        "Many small red spots",
        "Angiomas that bleed",
        "Angiomas on the face and body",
        "Spots you want removed",
        "Red spots you are unsure about"
      ],
      "signs": [
        "Small bright red bumps",
        "Spots that bleed when scratched",
        "New red spots with age",
        "Spots in visible areas",
        "A spot that changes (needs a check)",
        "A spot you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, the area and your goals.",
      "items": [
        {
          "title": "Diagnosis",
          "text": "A close look to confirm the spot is an angioma."
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine electric current that seals and removes the spot."
        },
        {
          "title": "Laser & light",
          "text": "Light-based treatments for vascular spots, where suitable.",
          "href": "/cosmetic-dermatology/facial-and-leg-veins"
        },
        {
          "title": "Cosmetic removal",
          "text": "Removal of harmless spots you do not want."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, and treatment may start the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas usually heal or improve over a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review results and add treatments if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Every treatment is chosen for your skin type and the area being treated, including skin of color.",
        "Any growth or scar that changes, bleeds or looks unusual should be checked first."
      ]
    },
    "faqs": [
      {
        "q": "Is it harmful?",
        "a": "Most of these growths and scars are harmless, but any change should be checked."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Numbing is used when needed, and most treatments are quick."
      },
      {
        "q": "Will it come back?",
        "a": "Some can return or new ones can form over time. We will tell you what to expect."
      },
      {
        "q": "Is cosmetic removal covered by insurance?",
        "a": "Cosmetic treatment may not be covered. We will let you know before treatment."
      }
    ]
  },
  {
    "slug": "seborrheic-keratoses",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Seborrheic Keratoses",
    "localTopic": "Seborrheic Keratoses treatment",
    "title": "Seborrheic Keratosis",
    "accent": "Removal in Torrance, CA",
    "metaTitle": "Seborrheic Keratosis Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified care for seborrheic keratoses in Torrance, CA. Diagnosis and removal of waxy, wart-like growths that appear with age.",
    "lede": "Smoother skin, with safe removal of waxy growths that appear with age.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/seborrheic-keratoses/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu laughing with a team member",
      "one": "/images/services/seborrheic-keratoses/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/seborrheic-keratoses/two.webp",
      "twoAlt": "Mature woman checking her skin in a mirror"
    },
    "overview": {
      "eyebrow": "Understanding Seborrheic Keratoses",
      "title": "What are",
      "accent": "seborrheic keratoses?",
      "text": [
        "Seborrheic keratoses are waxy, wart-like growths that appear with age. They can be tan, brown or black and look stuck on to the skin.",
        "They are harmless and not contagious, but they can itch, catch on clothing or look like other growths.",
        "Dr. Sandhu confirms the diagnosis and removes them when they bother you."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Harmless"
        },
        {
          "label": "Looks like",
          "value": "Waxy, stuck-on"
        },
        {
          "label": "Removal",
          "value": "Quick, in office"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when this concern grows, changes, hurts or bothers you, or you are unsure what it is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Growths on the face and body",
        "Many seborrheic keratoses",
        "Itchy or irritated growths",
        "Growths that catch on clothing",
        "Growths you want removed",
        "Dark growths that need a check"
      ],
      "signs": [
        "Waxy, stuck-on growths",
        "Growths that itch or bleed",
        "New growths with age",
        "Growths in visible areas",
        "A growth that looks different (needs a check)",
        "A dark spot you are unsure about"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, the area and your goals.",
      "items": [
        {
          "title": "Diagnosis",
          "text": "A dermatoscope exam to tell them apart from other growths."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing the growth so it falls off."
        },
        {
          "title": "Curettage",
          "text": "Gentle scraping of the growth after numbing."
        },
        {
          "title": "Cosmetic removal",
          "text": "Removal of harmless growths you do not want."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, and treatment may start the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas usually heal or improve over a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review results and add treatments if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Every treatment is chosen for your skin type and the area being treated, including skin of color.",
        "Any growth or scar that changes, bleeds or looks unusual should be checked first."
      ]
    },
    "faqs": [
      {
        "q": "Is it harmful?",
        "a": "Most of these growths and scars are harmless, but any change should be checked."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Numbing is used when needed, and most treatments are quick."
      },
      {
        "q": "Will it come back?",
        "a": "Some can return or new ones can form over time. We will tell you what to expect."
      },
      {
        "q": "Is cosmetic removal covered by insurance?",
        "a": "Cosmetic treatment may not be covered. We will let you know before treatment."
      }
    ]
  },
  {
    "slug": "keloids",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Keloids",
    "localTopic": "Keloids treatment",
    "title": "Keloid Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Keloid Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified keloid treatment in Torrance, CA. Care for thick, raised scars that grow beyond the original wound.",
    "lede": "Flatter, softer, more comfortable scars, with expert keloid care.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/keloids/hero.webp",
      "heroAlt": "Front desk team member at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/keloids/one.webp",
      "oneAlt": "Dr. Sophia Sandhu examining a patient's skin with a dermatoscope",
      "two": "/images/services/keloids/two.webp",
      "twoAlt": "Hands caring for a small mark on the skin"
    },
    "overview": {
      "eyebrow": "Understanding Keloids",
      "title": "What are",
      "accent": "keloids?",
      "text": [
        "Keloids are thick, raised scars that grow beyond the original wound site. They can follow cuts, piercings, acne, surgery or even minor scratches.",
        "They can itch, hurt or feel tight, and they tend to come back. Keloids are more common in skin of color.",
        "Dr. Sandhu creates a plan to flatten and soften keloids and lower the chance they return."
      ],
      "facts": [
        {
          "label": "Looks like",
          "value": "Raised, firm scar"
        },
        {
          "label": "Can",
          "value": "Grow beyond the wound"
        },
        {
          "label": "Approach",
          "value": "Combined care"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when this concern grows, changes, hurts or bothers you, or you are unsure what it is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Keloids after piercings",
        "Keloids after surgery",
        "Keloids from acne",
        "Itchy or painful keloids",
        "Keloids that returned",
        "Raised (hypertrophic) scars"
      ],
      "signs": [
        "A scar that keeps growing",
        "Itching or tenderness",
        "Firm, shiny raised skin",
        "A scar that limits movement",
        "A keloid that came back",
        "Concern about a new piercing or surgery"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, the area and your goals.",
      "items": [
        {
          "title": "Scar-softening treatments",
          "text": "In-office treatments that flatten and soften the keloid."
        },
        {
          "title": "Silicone & pressure",
          "text": "Silicone sheets or gels and pressure to help flatten scars."
        },
        {
          "title": "Removal with follow-up care",
          "text": "Surgical removal combined with treatment to lower the chance of return."
        },
        {
          "title": "Prevention advice",
          "text": "Guidance before piercings or surgery if you are keloid-prone."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, and treatment may start the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas usually heal or improve over a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review results and add treatments if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Every treatment is chosen for your skin type and the area being treated, including skin of color.",
        "Any growth or scar that changes, bleeds or looks unusual should be checked first."
      ]
    },
    "faqs": [
      {
        "q": "Is it harmful?",
        "a": "Most of these growths and scars are harmless, but any change should be checked."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Numbing is used when needed, and most treatments are quick."
      },
      {
        "q": "Will it come back?",
        "a": "Some can return or new ones can form over time. We will tell you what to expect."
      },
      {
        "q": "Is cosmetic removal covered by insurance?",
        "a": "Cosmetic treatment may not be covered. We will let you know before treatment."
      }
    ]
  },
  {
    "slug": "scars",
    "category": "medical-dermatology",
    "group": "Growths & Skin Cancer",
    "name": "Scars",
    "localTopic": "Scars treatment",
    "title": "Scar Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Scar Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Board-certified scar treatment in Torrance, CA. Soften, flatten and fade scars from injury, surgery, acne and skin conditions.",
    "lede": "Softer, flatter, less visible scars, with treatments chosen for your skin.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/scars/hero.webp",
      "heroAlt": "Front desk under the Oceanside sign",
      "one": "/images/services/scars/one.webp",
      "oneAlt": "Dr. Sophia Sandhu and a team member in the hallway",
      "two": "/images/services/scars/two.webp",
      "twoAlt": "Woman touching her smooth chin"
    },
    "overview": {
      "eyebrow": "Understanding Scars",
      "title": "What are",
      "accent": "scars?",
      "text": [
        "Scars are fibrous tissue that replaces normal skin after injury or surgery. They can be flat, raised, sunken or discolored.",
        "Scars from acne, surgery, injuries and skin conditions can affect confidence and comfort.",
        "Treatments aimed at softening, flattening or fading scars can make a real difference. Dr. Sandhu matches treatment to your scar and skin type."
      ],
      "facts": [
        {
          "label": "Types",
          "value": "Raised, sunken, discolored"
        },
        {
          "label": "Goal",
          "value": "Soften & fade"
        },
        {
          "label": "Options",
          "value": "Medical & cosmetic"
        }
      ]
    },
    "candidates": {
      "title": "Is treatment",
      "accent": "right for you?",
      "text": "See a dermatologist when this concern grows, changes, hurts or bothers you, or you are unsure what it is.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Acne scars",
        "Surgical scars",
        "Scars from injuries",
        "Raised (hypertrophic) scars",
        "Discolored scars",
        "Keloids"
      ],
      "signs": [
        "A scar that is raised or thick",
        "A sunken or pitted scar",
        "A scar that is red or dark",
        "A scar that itches or feels tight",
        "A scar affecting your confidence",
        "A scar that keeps growing"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, the area and your goals.",
      "items": [
        {
          "title": "Laser & light",
          "text": "Fractional and other lasers that improve texture and color, including UltraClear, which is safe for all skin types.",
          "href": "/cosmetic-dermatology/scar-treatment"
        },
        {
          "title": "Medical-grade microneedling",
          "text": "Stimulates collagen to smooth texture and scars.",
          "href": "/cosmetic-dermatology/medical-grade-microneedling"
        },
        {
          "title": "Customized chemical peels",
          "text": "Peels that improve tone and texture.",
          "href": "/cosmetic-dermatology/chemical-peels"
        },
        {
          "title": "Scar-softening treatments",
          "text": "Silicone, creams and in-office treatments to flatten raised scars."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu examines the area and explains your options."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, and treatment may start the same day."
        },
        {
          "label": "Weeks",
          "title": "Healing",
          "text": "Treated areas usually heal or improve over a few weeks."
        },
        {
          "label": "Follow-up",
          "title": "Stay well",
          "text": "We review results and add treatments if needed."
        }
      ]
    },
    "safety": {
      "title": "Safe, careful care",
      "text": [
        "Every treatment is chosen for your skin type and the area being treated, including skin of color.",
        "Any growth or scar that changes, bleeds or looks unusual should be checked first."
      ]
    },
    "faqs": [
      {
        "q": "Is it harmful?",
        "a": "Most of these growths and scars are harmless, but any change should be checked."
      },
      {
        "q": "Does treatment hurt?",
        "a": "Numbing is used when needed, and most treatments are quick."
      },
      {
        "q": "Will it come back?",
        "a": "Some can return or new ones can form over time. We will tell you what to expect."
      },
      {
        "q": "Is cosmetic removal covered by insurance?",
        "a": "Cosmetic treatment may not be covered. We will let you know before treatment."
      }
    ]
  },
  {
    "slug": "botox-and-dysport",
    "category": "cosmetic-dermatology",
    "group": "Injectables",
    "name": "Botox & Dysport",
    "localTopic": "Botox & Dysport",
    "title": "Botox & Dysport",
    "accent": "in Torrance, CA",
    "metaTitle": "Botox & Dysport in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Botox and Dysport in Torrance, CA by a board-certified dermatologist. Natural-looking results for frown lines, forehead lines and crow's feet.",
    "lede": "Soften frown lines and crow's feet for a fresh, natural look.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/botox-and-dysport/hero.webp",
      "heroAlt": "Front desk team member at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/botox-and-dysport/one.webp",
      "oneAlt": "Dr. Sophia Sandhu preparing a Botox treatment for a patient",
      "two": "/images/services/cosmetic/botox-and-dysport/two.webp",
      "twoAlt": "Mature woman with silver hair smoothing her forehead"
    },
    "overview": {
      "eyebrow": "Understanding Botox & Dysport",
      "title": "What are",
      "accent": "Botox & Dysport?",
      "text": [
        "Botox and Dysport are neuromodulators, also called wrinkle relaxers. They temporarily relax facial muscles to smooth dynamic wrinkles, like frown lines or crow's feet.",
        "Results appear within days and usually last a few months. Treatment takes minutes, with little to no downtime.",
        "Our philosophy is that less is more. Dr. Sandhu aims for a refreshed, natural look, never a frozen one."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Dynamic wrinkles"
        },
        {
          "label": "Results",
          "value": "Within days"
        },
        {
          "label": "Downtime",
          "value": "Little to none"
        }
      ]
    },
    "candidates": {
      "title": "Are Botox & Dysport",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Frown lines between the brows",
        "Forehead lines",
        "Crow's feet",
        "Bunny lines on the nose",
        "Preventive treatment",
        "Subtle refresh before events"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want a natural, refreshed look",
        "Lines show when you smile or frown",
        "You prefer no downtime",
        "You want subtle, gradual results",
        "You want to look less tired",
        "You are new to cosmetic treatment"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Natural dosing",
          "text": "Carefully planned doses for a soft, natural result."
        },
        {
          "title": "Targeted areas",
          "text": "Frown lines, forehead lines and crow's feet."
        },
        {
          "title": "Combined care",
          "text": "Pairs well with skin care and laser treatments for overall glow.",
          "href": "/cosmetic-dermatology/m22-stellar-ipl"
        },
        {
          "title": "Maintenance plan",
          "text": "Timing your visits so results stay consistent."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "How long do results last?",
        "a": "Usually around three to four months, depending on the person and area."
      },
      {
        "q": "Will I look frozen?",
        "a": "No. Dr. Sandhu uses a less-is-more approach for natural movement."
      },
      {
        "q": "Is there downtime?",
        "a": "Most people return to normal activities right away."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "hyaluronic-acid-fillers",
    "category": "cosmetic-dermatology",
    "group": "Injectables",
    "name": "Hyaluronic Acid Fillers",
    "localTopic": "Hyaluronic Acid Fillers",
    "title": "Hyaluronic Acid Fillers",
    "accent": "in Torrance, CA",
    "metaTitle": "Hyaluronic Acid Fillers in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Hyaluronic acid fillers in Torrance, CA, including Restylane and RHA, by a board-certified dermatologist. Natural volume, smoother lines, refined contours.",
    "lede": "Restore soft volume and smooth lines, with results that still look like you.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/hyaluronic-acid-fillers/hero.webp",
      "heroAlt": "Front desk under the Oceanside sign",
      "one": "/images/services/cosmetic/hyaluronic-acid-fillers/one.webp",
      "oneAlt": "Dr. Sophia Sandhu treating a relaxed patient's face",
      "two": "/images/services/cosmetic/hyaluronic-acid-fillers/two.webp",
      "twoAlt": "Woman touching her smooth cheek"
    },
    "overview": {
      "eyebrow": "Understanding Hyaluronic Acid Fillers",
      "title": "What are",
      "accent": "hyaluronic acid fillers?",
      "text": [
        "Hyaluronic acid fillers add volume, smooth wrinkles and enhance facial contours using naturally occurring hyaluronic acid. We offer the Restylane family and RHA fillers.",
        "They can restore lost volume in the cheeks, soften smile lines, and add subtle definition to the lips and jawline.",
        "Results are visible right away and can last many months. Dr. Sandhu's goal is balance and harmony, enhancing your natural beauty, not altering it."
      ],
      "facts": [
        {
          "label": "Products",
          "value": "Restylane, RHA"
        },
        {
          "label": "Results",
          "value": "Immediate"
        },
        {
          "label": "Approach",
          "value": "Natural balance"
        }
      ]
    },
    "candidates": {
      "title": "Are fillers",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Smile lines",
        "Lost cheek volume",
        "Lip definition and hydration",
        "Under-eye hollows",
        "Jawline and chin contour",
        "Marionette lines"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You see volume loss with age",
        "Lines remain at rest",
        "You want subtle lip enhancement",
        "You want natural-looking results",
        "You want little downtime",
        "You want a refreshed, balanced face"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Restylane family",
          "text": "A range of fillers for lips, cheeks, lines and contours."
        },
        {
          "title": "RHA fillers",
          "text": "Flexible fillers designed to move naturally with your expressions."
        },
        {
          "title": "Balanced planning",
          "text": "Treating the whole face in harmony, not one line at a time."
        },
        {
          "title": "Combined care",
          "text": "Pairs well with Botox, Sculptra and skin care.",
          "href": "/cosmetic-dermatology/sculptra"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "How long do fillers last?",
        "a": "Many months, depending on the product and area."
      },
      {
        "q": "Will it look natural?",
        "a": "Yes. Dr. Sandhu enhances your features with a light touch."
      },
      {
        "q": "Is there downtime?",
        "a": "Some swelling or bruising is possible for a few days."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "sculptra",
    "category": "cosmetic-dermatology",
    "group": "Injectables",
    "name": "Sculptra",
    "localTopic": "Sculptra",
    "title": "Sculptra",
    "accent": "in Torrance, CA",
    "metaTitle": "Sculptra in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Sculptra biostimulator treatment in Torrance, CA by a board-certified dermatologist. Gradual, natural collagen-building for volume and firmness.",
    "lede": "Gradually restore firmness and volume by stimulating your own collagen.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/sculptra/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/sculptra/one.webp",
      "oneAlt": "Dr. Sophia Sandhu performing a facial treatment",
      "two": "/images/services/cosmetic/sculptra/two.webp",
      "twoAlt": "Mature woman caring for her skin"
    },
    "overview": {
      "eyebrow": "Understanding Sculptra",
      "title": "What is",
      "accent": "sculptra?",
      "text": [
        "Sculptra is a biostimulator. It stimulates collagen production over time to gradually restore facial volume and firmness.",
        "Results build slowly over a series of sessions and can last a long time, for a subtle, natural improvement.",
        "It suits people who want a gradual refresh rather than an instant change."
      ],
      "facts": [
        {
          "label": "Works by",
          "value": "Building collagen"
        },
        {
          "label": "Results",
          "value": "Gradual"
        },
        {
          "label": "Sessions",
          "value": "Usually a series"
        }
      ]
    },
    "candidates": {
      "title": "Is sculptra",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Facial volume loss",
        "Thinning, lax skin",
        "Hollow temples",
        "Aging cheeks",
        "Overall facial firmness",
        "Natural, gradual refresh"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You prefer gradual change",
        "You want long-lasting results",
        "You see overall volume loss",
        "You want firmer skin",
        "You want natural-looking results",
        "You are planning ahead for an event"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Collagen stimulation",
          "text": "Helps your skin rebuild its own support over time."
        },
        {
          "title": "Treatment series",
          "text": "Usually a few sessions spaced several weeks apart."
        },
        {
          "title": "Whole-face approach",
          "text": "Planned for natural, balanced results."
        },
        {
          "title": "Combined care",
          "text": "Can be combined with fillers and lasers.",
          "href": "/cosmetic-dermatology/hyaluronic-acid-fillers"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "When will I see results?",
        "a": "Gradually over several weeks to months as collagen builds."
      },
      {
        "q": "How many sessions?",
        "a": "Most people need a series. Dr. Sandhu will plan yours."
      },
      {
        "q": "How long does it last?",
        "a": "Results can last a long time compared with many fillers."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "m22-stellar-ipl",
    "category": "cosmetic-dermatology",
    "group": "Lasers & Light",
    "name": "M22 Stellar IPL",
    "localTopic": "M22 Stellar IPL",
    "title": "M22 Stellar IPL",
    "accent": "in Torrance, CA",
    "metaTitle": "M22 Stellar IPL in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "M22 Stellar IPL photofacials in Torrance, CA for redness, sun damage and pigmentation, by a board-certified dermatologist.",
    "lede": "Brighter, clearer, more even skin, with gentle intense pulsed light.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/m22-stellar-ipl/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/cosmetic/m22-stellar-ipl/one.webp",
      "oneAlt": "Dr. Sophia Sandhu and a team member in the hallway",
      "two": "/images/services/cosmetic/m22-stellar-ipl/two.webp",
      "twoAlt": "Woman receiving an IPL facial treatment"
    },
    "overview": {
      "eyebrow": "Understanding M22 Stellar IPL",
      "title": "What is the",
      "accent": "M22 Stellar IPL?",
      "text": [
        "The M22 Stellar IPL uses Intense Pulsed Light for redness, sun damage and pigmentation.",
        "Gentle pulses of light target brown spots and visible vessels, leaving skin clearer and more even.",
        "Most people have a series of treatments, with little downtime."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Redness, sun damage"
        },
        {
          "label": "Downtime",
          "value": "Minimal"
        },
        {
          "label": "Sessions",
          "value": "Usually a series"
        }
      ]
    },
    "candidates": {
      "title": "Is IPL",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Sun spots and brown spots",
        "Facial redness",
        "Rosacea",
        "Broken capillaries",
        "Uneven skin tone",
        "Sun damage on the chest and hands"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want clearer, brighter skin",
        "You have redness or flushing",
        "You have sun spots",
        "You want little downtime",
        "You want an even tone",
        "You want a refreshing glow"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Pigment treatment",
          "text": "Fades brown spots and sun damage.",
          "href": "/cosmetic-dermatology/sun-spots-and-sun-damage"
        },
        {
          "title": "Redness treatment",
          "text": "Reduces redness and visible vessels.",
          "href": "/cosmetic-dermatology/rosacea-and-redness"
        },
        {
          "title": "Series of sessions",
          "text": "Usually a few treatments a few weeks apart."
        },
        {
          "title": "Sun protection",
          "text": "Daily sunscreen keeps results lasting."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Does IPL hurt?",
        "a": "Most people feel a quick snap, like a rubber band."
      },
      {
        "q": "How many sessions?",
        "a": "Usually three to five, spaced a few weeks apart."
      },
      {
        "q": "Is there downtime?",
        "a": "Spots may darken briefly before flaking off."
      },
      {
        "q": "Is it safe for all skin types?",
        "a": "IPL is not right for every skin type. Dr. Sandhu will advise the safest option."
      }
    ]
  },
  {
    "slug": "ultraclear-laser",
    "category": "cosmetic-dermatology",
    "group": "Lasers & Light",
    "name": "UltraClear Laser",
    "localTopic": "UltraClear Laser",
    "title": "UltraClear Laser",
    "accent": "in Torrance, CA",
    "metaTitle": "UltraClear Laser in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "UltraClear laser in Torrance, CA. A cold-fiber fractional laser safe for all skin types, including skin of color.",
    "lede": "One advanced laser for wrinkles, acne scars, pigmentation, redness and sun damage.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/ultraclear-laser/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/ultraclear-laser/one.webp",
      "oneAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "two": "/images/services/cosmetic/ultraclear-laser/two.webp",
      "twoAlt": "Smiling woman with fresh, glowing skin"
    },
    "overview": {
      "eyebrow": "Understanding UltraClear Laser",
      "title": "What is the",
      "accent": "UltraClear laser?",
      "text": [
        "UltraClear is a new cold-fiber laser and a fractionated ablative laser that is safe for all skin types, including skin of color.",
        "It is a one-stop-shop laser that can target wrinkles, acne scars, pigmentation, redness and sun damage.",
        "Treatment can be adjusted from a light refresh to deeper resurfacing, with downtime to match."
      ],
      "facts": [
        {
          "label": "Type",
          "value": "Cold-fiber fractional"
        },
        {
          "label": "Safe for",
          "value": "All skin types"
        },
        {
          "label": "Treats",
          "value": "Wrinkles, scars, tone"
        }
      ]
    },
    "candidates": {
      "title": "Is UltraClear",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Fine lines and wrinkles",
        "Acne scars",
        "Pigmentation",
        "Redness",
        "Sun damage",
        "Uneven texture"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want overall skin renewal",
        "You have acne scars",
        "You have uneven pigment",
        "You have skin of color",
        "You want adjustable downtime",
        "You want visible, lasting improvement"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Customized depth",
          "text": "Light to deeper treatments based on your goals."
        },
        {
          "title": "Scar improvement",
          "text": "Smooths acne scars and texture.",
          "href": "/cosmetic-dermatology/acne-scar-treatment"
        },
        {
          "title": "Tone & pigment",
          "text": "Treats pigmentation and sun damage."
        },
        {
          "title": "Combined care",
          "text": "Can be combined with other treatments for best results."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is UltraClear safe for darker skin?",
        "a": "Yes. It is designed to be safe for all skin types, including skin of color."
      },
      {
        "q": "How much downtime?",
        "a": "It depends on the depth, from a day or two to about a week."
      },
      {
        "q": "How many sessions?",
        "a": "Some people see results after one; others benefit from a series."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "resurfx",
    "category": "cosmetic-dermatology",
    "group": "Lasers & Light",
    "name": "ResurFX",
    "localTopic": "ResurFX",
    "title": "ResurFX",
    "accent": "in Torrance, CA",
    "metaTitle": "ResurFX in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "ResurFX fractional non-ablative laser in Torrance, CA for texture, fine lines and scars.",
    "lede": "Smoother texture and tone, with gentle fractional resurfacing.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/resurfx/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "one": "/images/services/cosmetic/resurfx/one.webp",
      "oneAlt": "Patient smiling during a skin check with Dr. Sophia Sandhu",
      "two": "/images/services/cosmetic/resurfx/two.webp",
      "twoAlt": "Smiling woman with cream on her cheek"
    },
    "overview": {
      "eyebrow": "Understanding ResurFX",
      "title": "What is",
      "accent": "ResurFX?",
      "text": [
        "ResurFX is a fractional non-ablative laser for skin resurfacing and collagen stimulation.",
        "It improves texture, tone, fine lines and scars without removing the skin surface, so downtime is limited.",
        "Most people benefit from a short series of treatments."
      ],
      "facts": [
        {
          "label": "Type",
          "value": "Fractional non-ablative"
        },
        {
          "label": "Treats",
          "value": "Texture, lines, scars"
        },
        {
          "label": "Downtime",
          "value": "Limited"
        }
      ]
    },
    "candidates": {
      "title": "Is resurfx",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Fine lines",
        "Uneven texture",
        "Acne scars",
        "Surgical scars",
        "Stretch marks",
        "Enlarged pores"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want smoother skin",
        "You want limited downtime",
        "You have mild scarring",
        "You want gradual improvement",
        "You want firmer-looking skin",
        "You want to refresh your complexion"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Collagen stimulation",
          "text": "Encourages new collagen for smoother skin."
        },
        {
          "title": "Series of sessions",
          "text": "Usually a few treatments spaced weeks apart."
        },
        {
          "title": "Scar care",
          "text": "Softens the look of scars.",
          "href": "/cosmetic-dermatology/scar-treatment"
        },
        {
          "title": "Combined care",
          "text": "Pairs well with IPL and skin care."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Does ResurFX hurt?",
        "a": "Cooling and numbing keep treatment comfortable."
      },
      {
        "q": "What is the downtime?",
        "a": "Redness and mild swelling for a few days is common."
      },
      {
        "q": "How many sessions?",
        "a": "Usually three to five."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "q-switched-nd-yag",
    "category": "cosmetic-dermatology",
    "group": "Lasers & Light",
    "name": "Q-Switched Nd:YAG",
    "localTopic": "Q-Switched Nd:YAG",
    "title": "Q-Switched Nd:YAG Laser",
    "accent": "in Torrance, CA",
    "metaTitle": "Q-Switched Nd:YAG Laser in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Q-Switched Nd:YAG laser treatment in Torrance, CA for pigmentation and tattoo removal.",
    "lede": "Target pigmentation and tattoos with ultra-fast pulses of laser light.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/q-switched-nd-yag/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/q-switched-nd-yag/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/cosmetic/q-switched-nd-yag/two.webp",
      "twoAlt": "Woman receiving a laser treatment for pigment"
    },
    "overview": {
      "eyebrow": "Understanding Q-Switched Nd:YAG",
      "title": "What is",
      "accent": "the Q-Switched Nd:YAG?",
      "text": [
        "The Q-Switched Nd:YAG laser targets pigmentation and tattoos with ultra-fast pulses of laser light.",
        "The light breaks pigment into tiny particles that the body then clears away over time.",
        "It is used for brown spots, some pigmented birthmarks and tattoo removal."
      ],
      "facts": [
        {
          "label": "Targets",
          "value": "Pigment & tattoos"
        },
        {
          "label": "Pulses",
          "value": "Ultra-fast"
        },
        {
          "label": "Sessions",
          "value": "Usually several"
        }
      ]
    },
    "candidates": {
      "title": "Is q-switched nd:yag",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Brown spots",
        "Sun spots",
        "Some pigmented birthmarks",
        "Tattoo removal",
        "Uneven pigment",
        "Freckling"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have stubborn spots",
        "You want a tattoo removed or faded",
        "You want even tone",
        "You can commit to a series",
        "You want gradual change",
        "You want a precise treatment"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Pigment treatment",
          "text": "Breaks up excess pigment.",
          "href": "/cosmetic-dermatology/sun-spots-and-sun-damage"
        },
        {
          "title": "Tattoo removal",
          "text": "Fades tattoo ink over several sessions.",
          "href": "/cosmetic-dermatology/tattoo-removal"
        },
        {
          "title": "Series of sessions",
          "text": "Treatments spaced several weeks apart."
        },
        {
          "title": "Sun protection",
          "text": "Protects your results."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Does it hurt?",
        "a": "It feels like quick snaps. Cooling helps."
      },
      {
        "q": "How many sessions for a tattoo?",
        "a": "Several are usually needed, depending on the ink and colors."
      },
      {
        "q": "Is there downtime?",
        "a": "Mild redness or darkening for a few days."
      },
      {
        "q": "Is it safe for my skin?",
        "a": "Dr. Sandhu adjusts settings for your skin type."
      }
    ]
  },
  {
    "slug": "multi-spot-nd-yag",
    "category": "cosmetic-dermatology",
    "group": "Lasers & Light",
    "name": "Multi-Spot Nd:YAG",
    "localTopic": "Multi-Spot Nd:YAG",
    "title": "Multi-Spot Nd:YAG Laser",
    "accent": "in Torrance, CA",
    "metaTitle": "Multi-Spot Nd:YAG Laser in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Multi-Spot Nd:YAG laser in Torrance, CA for visible veins, facial vessels and redness.",
    "lede": "Clear visible veins and redness with a targeted vascular laser.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/multi-spot-nd-yag/hero.webp",
      "heroAlt": "Waiting room seating with natural light",
      "one": "/images/services/cosmetic/multi-spot-nd-yag/one.webp",
      "oneAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "two": "/images/services/cosmetic/multi-spot-nd-yag/two.webp",
      "twoAlt": "Woman wearing eye protection during a laser treatment"
    },
    "overview": {
      "eyebrow": "Understanding Multi-Spot Nd:YAG",
      "title": "What is",
      "accent": "the Multi-Spot Nd:YAG?",
      "text": [
        "The Multi-Spot Nd:YAG is a laser that treats vascular lesions like visible veins and redness.",
        "Light energy targets the blood vessel, which then fades over the following weeks.",
        "It is used for facial vessels, small leg veins and other vascular spots."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Veins & redness"
        },
        {
          "label": "Targets",
          "value": "Blood vessels"
        },
        {
          "label": "Sessions",
          "value": "One or more"
        }
      ]
    },
    "candidates": {
      "title": "Is multi-spot nd:yag",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Facial veins",
        "Small leg veins",
        "Broken capillaries",
        "Cherry angiomas",
        "Redness",
        "Vascular spots"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have visible veins",
        "You have facial redness",
        "You have small red spots",
        "You want clearer skin",
        "You want a targeted treatment",
        "You prefer minimal downtime"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Vein treatment",
          "text": "Fades facial and small leg veins.",
          "href": "/cosmetic-dermatology/facial-and-leg-veins"
        },
        {
          "title": "Redness care",
          "text": "Reduces visible redness.",
          "href": "/cosmetic-dermatology/rosacea-and-redness"
        },
        {
          "title": "Angioma removal",
          "text": "Treats small red vascular spots.",
          "href": "/cosmetic-dermatology/angiomas"
        },
        {
          "title": "Series if needed",
          "text": "Some areas need more than one session."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Does it hurt?",
        "a": "A quick snap with cooling for comfort."
      },
      {
        "q": "When will I see results?",
        "a": "Vessels fade over several weeks."
      },
      {
        "q": "Is there downtime?",
        "a": "Mild redness or bruising for a few days."
      },
      {
        "q": "Can veins return?",
        "a": "New vessels can form over time. Touch-ups help."
      }
    ]
  },
  {
    "slug": "fractional-laser-resurfacing",
    "category": "cosmetic-dermatology",
    "group": "Skin Rejuvenation",
    "name": "Fractional Laser Resurfacing",
    "localTopic": "Fractional Laser Resurfacing",
    "title": "Fractional Laser Resurfacing",
    "accent": "in Torrance, CA",
    "metaTitle": "Fractional Laser Resurfacing in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Fractional non-ablative laser skin resurfacing in Torrance, CA for texture, tone and fine lines.",
    "lede": "Smoother texture, tone and fine lines, without damaging the skin surface.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/fractional-laser-resurfacing/hero.webp",
      "heroAlt": "Reception at Oceanside Dermatology & Aesthetics in Torrance",
      "one": "/images/services/cosmetic/fractional-laser-resurfacing/one.webp",
      "oneAlt": "Team member on the phone helping a patient book a visit",
      "two": "/images/services/cosmetic/fractional-laser-resurfacing/two.webp",
      "twoAlt": "Patient relaxing during a laser skin treatment"
    },
    "overview": {
      "eyebrow": "Understanding Fractional Laser Resurfacing",
      "title": "What is",
      "accent": "fractional laser resurfacing?",
      "text": [
        "Fractional non-ablative laser skin resurfacing stimulates collagen without damaging the skin surface, improving texture, tone and fine lines.",
        "It treats tiny columns of skin at a time, so healing is quick.",
        "It is a good choice for gradual, natural-looking renewal."
      ],
      "facts": [
        {
          "label": "Improves",
          "value": "Texture, tone, lines"
        },
        {
          "label": "Surface",
          "value": "Kept intact"
        },
        {
          "label": "Healing",
          "value": "Quick"
        }
      ]
    },
    "candidates": {
      "title": "Is fractional laser resurfacing",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Fine lines",
        "Rough texture",
        "Dullness",
        "Mild scarring",
        "Enlarged pores",
        "Early signs of aging"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want smoother skin",
        "You want limited downtime",
        "You want gradual renewal",
        "You want natural results",
        "You want brighter skin",
        "You want to prevent aging"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "ResurFX",
          "text": "Our fractional non-ablative laser.",
          "href": "/cosmetic-dermatology/resurfx"
        },
        {
          "title": "UltraClear",
          "text": "A deeper option for more change.",
          "href": "/cosmetic-dermatology/ultraclear-laser"
        },
        {
          "title": "Series of sessions",
          "text": "Usually a few treatments."
        },
        {
          "title": "Skin care",
          "text": "A routine to support and protect results."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is there downtime?",
        "a": "Usually a few days of redness and mild swelling."
      },
      {
        "q": "How many sessions?",
        "a": "Most people need a few."
      },
      {
        "q": "When will I see results?",
        "a": "Skin improves over weeks as collagen builds."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "medical-grade-microneedling",
    "category": "cosmetic-dermatology",
    "group": "Skin Rejuvenation",
    "name": "Medical-Grade Microneedling",
    "localTopic": "Medical-Grade Microneedling",
    "title": "Medical-Grade Microneedling",
    "accent": "in Torrance, CA",
    "metaTitle": "Medical-Grade Microneedling in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Medical-grade microneedling in Torrance, CA for texture, scars and firmness, by a board-certified dermatologist.",
    "lede": "Smoother texture and firmer skin, by boosting your own collagen.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/medical-grade-microneedling/hero.webp",
      "heroAlt": "Waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/medical-grade-microneedling/one.webp",
      "oneAlt": "Reception desk under the Oceanside sign",
      "two": "/images/services/cosmetic/medical-grade-microneedling/two.webp",
      "twoAlt": "Woman applying a serum to glowing skin"
    },
    "overview": {
      "eyebrow": "Understanding Medical-Grade Microneedling",
      "title": "What is",
      "accent": "medical-grade microneedling?",
      "text": [
        "Medical-grade microneedling uses tiny needles to create micro-injuries that promote collagen and elastin production, improving texture, scars and firmness.",
        "It is safe for many skin types and has short downtime.",
        "Most people have a series of treatments for best results."
      ],
      "facts": [
        {
          "label": "Improves",
          "value": "Texture, scars, firmness"
        },
        {
          "label": "Works by",
          "value": "Collagen & elastin"
        },
        {
          "label": "Downtime",
          "value": "Short"
        }
      ]
    },
    "candidates": {
      "title": "Is medical-grade microneedling",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Acne scars",
        "Fine lines",
        "Enlarged pores",
        "Uneven texture",
        "Mild laxity",
        "Stretch marks"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want smoother texture",
        "You have acne scars",
        "You want firmer skin",
        "You want short downtime",
        "You want natural results",
        "You want an option for many skin types"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Collagen induction",
          "text": "Stimulates your skin's natural repair."
        },
        {
          "title": "Series of sessions",
          "text": "Usually a few sessions a few weeks apart."
        },
        {
          "title": "Scar care",
          "text": "Softens acne and other scars.",
          "href": "/cosmetic-dermatology/acne-scar-treatment"
        },
        {
          "title": "Skin care",
          "text": "A routine to support healing."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Does microneedling hurt?",
        "a": "Numbing cream keeps treatment comfortable."
      },
      {
        "q": "What is the downtime?",
        "a": "Redness for a day or two, like a mild sunburn."
      },
      {
        "q": "How many sessions?",
        "a": "Usually three or more."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "chemical-peels",
    "category": "cosmetic-dermatology",
    "group": "Skin Rejuvenation",
    "name": "Customized Chemical Peels",
    "localTopic": "Customized Chemical Peels",
    "title": "Customized Chemical Peels",
    "accent": "in Torrance, CA",
    "metaTitle": "Customized Chemical Peels in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Customized chemical peels in Torrance, CA for tone, texture, acne and pigmentation.",
    "lede": "Brighter, smoother skin with a peel tailored to you.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/chemical-peels/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/chemical-peels/one.webp",
      "oneAlt": "Waiting room seating under a pendant light",
      "two": "/images/services/cosmetic/chemical-peels/two.webp",
      "twoAlt": "Chemical peel being applied with a soft brush"
    },
    "overview": {
      "eyebrow": "Understanding Customized Chemical Peels",
      "title": "What are",
      "accent": "chemical peels?",
      "text": [
        "Customized chemical peels apply chemical solutions to exfoliate the top skin layers, improving tone, texture, acne and pigmentation.",
        "Peels range from gentle to deeper, and each is chosen for your skin type and goals.",
        "Most peels have little downtime, with some light flaking for a few days."
      ],
      "facts": [
        {
          "label": "Improves",
          "value": "Tone, texture, acne"
        },
        {
          "label": "Strength",
          "value": "Customized"
        },
        {
          "label": "Downtime",
          "value": "Little"
        }
      ]
    },
    "candidates": {
      "title": "Are chemical peels",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Acne and breakouts",
        "Dark spots and melasma",
        "Dull skin",
        "Uneven texture",
        "Fine lines",
        "Acne marks"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You want brighter skin",
        "You have breakouts",
        "You have uneven tone",
        "You want little downtime",
        "You want a regular refresh",
        "You want to boost your skin care"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Gentle peels",
          "text": "A light refresh with minimal flaking."
        },
        {
          "title": "Targeted peels",
          "text": "Stronger peels for acne, pigment or texture."
        },
        {
          "title": "Series of peels",
          "text": "Spaced a few weeks apart for best results."
        },
        {
          "title": "Home care",
          "text": "A routine to protect and maintain results."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Will my skin peel?",
        "a": "Light flaking for a few days is common."
      },
      {
        "q": "How often can I have a peel?",
        "a": "Usually every few weeks, depending on the peel."
      },
      {
        "q": "Are peels safe for darker skin?",
        "a": "Many are. Dr. Sandhu chooses peels suited to your skin type."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "acne-scar-treatment",
    "category": "cosmetic-dermatology",
    "group": "Skin Rejuvenation",
    "name": "Acne Scar Treatment",
    "localTopic": "Acne Scar Treatment",
    "title": "Acne Scar Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Acne Scar Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Acne scar treatment in Torrance, CA with lasers, microneedling and peels, including options safe for skin of color.",
    "lede": "Smoother, more even skin, with targeted care for acne scars.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/acne-scar-treatment/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/acne-scar-treatment/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/cosmetic/acne-scar-treatment/two.webp",
      "twoAlt": "Woman with clear, smooth skin"
    },
    "overview": {
      "eyebrow": "Understanding Acne Scar Treatment",
      "title": "What is",
      "accent": "acne scar treatment?",
      "text": [
        "Acne scar treatment uses targeted therapies, like microneedling, lasers or peels, designed to smooth and reduce the appearance of acne scars.",
        "Scars come in different types, and the best results usually come from combining treatments.",
        "The UltraClear laser is safe for all skin types, including skin of color."
      ],
      "facts": [
        {
          "label": "Treatments",
          "value": "Laser, needling, peels"
        },
        {
          "label": "Approach",
          "value": "Combined"
        },
        {
          "label": "Skin types",
          "value": "All"
        }
      ]
    },
    "candidates": {
      "title": "Is acne scar treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Rolling scars",
        "Boxcar scars",
        "Ice-pick scars",
        "Dark marks after acne",
        "Uneven texture",
        "Scars with active acne"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have pitted or uneven scars",
        "Your acne is under control",
        "You want smoother texture",
        "You have skin of color",
        "You want a plan that combines treatments",
        "You want gradual, lasting change"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "UltraClear laser",
          "text": "Resurfaces scars and evens tone.",
          "href": "/cosmetic-dermatology/ultraclear-laser"
        },
        {
          "title": "Microneedling",
          "text": "Builds collagen to lift scars.",
          "href": "/cosmetic-dermatology/medical-grade-microneedling"
        },
        {
          "title": "Chemical peels",
          "text": "Smooths texture and fades marks.",
          "href": "/cosmetic-dermatology/chemical-peels"
        },
        {
          "title": "Acne control",
          "text": "Treating active acne first.",
          "href": "/medical-dermatology/acne"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Can acne scars be removed completely?",
        "a": "They can be greatly improved, though not always fully erased."
      },
      {
        "q": "How many treatments?",
        "a": "Usually a series, often combining methods."
      },
      {
        "q": "Should acne be treated first?",
        "a": "Yes. Controlling active acne prevents new scars."
      },
      {
        "q": "Is it safe for skin of color?",
        "a": "Yes. We offer options such as UltraClear that are safe for all skin types."
      }
    ]
  },
  {
    "slug": "scar-treatment",
    "category": "cosmetic-dermatology",
    "group": "Skin Rejuvenation",
    "name": "Scar Treatment",
    "localTopic": "Scar Treatment",
    "title": "Cosmetic Scar Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Cosmetic Scar Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Cosmetic scar treatment in Torrance, CA to soften, flatten and fade scars from injury, surgery or skin conditions.",
    "lede": "Soften, flatten and fade scars from injury, surgery or skin conditions.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/scar-treatment/hero.webp",
      "heroAlt": "Reception desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/scar-treatment/one.webp",
      "oneAlt": "Front desk under the Oceanside sign",
      "two": "/images/services/cosmetic/scar-treatment/two.webp",
      "twoAlt": "Woman gently massaging lotion into her arm"
    },
    "overview": {
      "eyebrow": "Understanding Scar Treatment",
      "title": "What is",
      "accent": "scar treatment?",
      "text": [
        "Scar treatments aim at softening, flattening or fading scars from injury, surgery or skin conditions.",
        "Lasers, microneedling, peels and other treatments are chosen for the scar type and your skin.",
        "Results build gradually over a series of sessions."
      ],
      "facts": [
        {
          "label": "Goal",
          "value": "Soften & fade"
        },
        {
          "label": "Options",
          "value": "Several"
        },
        {
          "label": "Results",
          "value": "Gradual"
        }
      ]
    },
    "candidates": {
      "title": "Is scar treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Surgical scars",
        "Injury scars",
        "Raised scars",
        "Red or dark scars",
        "Stretch marks",
        "Acne scars"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have a visible scar",
        "A scar is raised or discolored",
        "A scar feels tight",
        "You want gradual improvement",
        "You want natural results",
        "You want a combined plan"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Laser treatment",
          "text": "Improves texture and color.",
          "href": "/cosmetic-dermatology/fractional-laser-resurfacing"
        },
        {
          "title": "Microneedling",
          "text": "Remodels scar tissue.",
          "href": "/cosmetic-dermatology/medical-grade-microneedling"
        },
        {
          "title": "Peels",
          "text": "Smooth and brighten.",
          "href": "/cosmetic-dermatology/chemical-peels"
        },
        {
          "title": "Medical scar care",
          "text": "For raised scars and keloids.",
          "href": "/medical-dermatology/keloids"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "When can a scar be treated?",
        "a": "Many scars can be treated once healed. Dr. Sandhu will advise timing."
      },
      {
        "q": "Can scars disappear?",
        "a": "They can be softened and faded, though not always erased."
      },
      {
        "q": "How many sessions?",
        "a": "Usually a series."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "sun-spots-and-sun-damage",
    "category": "cosmetic-dermatology",
    "group": "Spots, Veins & Redness",
    "name": "Sun Spots & Sun Damage",
    "localTopic": "Sun Spots & Sun Damage",
    "title": "Sun Spot & Sun Damage Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Sun Spot & Sun Damage Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Treatment of brown spots, sun spots and sun damage in Torrance, CA with lasers and light.",
    "lede": "Fade brown spots and sun damage for a clearer, more even complexion.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/sun-spots-and-sun-damage/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/cosmetic/sun-spots-and-sun-damage/one.webp",
      "oneAlt": "Reception desk under the Oceanside sign",
      "two": "/images/services/cosmetic/sun-spots-and-sun-damage/two.webp",
      "twoAlt": "Woman applying sunscreen to her face"
    },
    "overview": {
      "eyebrow": "Understanding Sun Spots & Sun Damage",
      "title": "What are",
      "accent": "sun spots?",
      "text": [
        "Lasers or light therapy target and reduce excess pigmentation caused by UV exposure or aging.",
        "Brown spots, sun spots and freckling fade, leaving skin clearer and more even.",
        "Daily sun protection keeps results lasting. Dr. Sandhu first checks every spot is harmless."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Brown spots"
        },
        {
          "label": "Cause",
          "value": "Sun & aging"
        },
        {
          "label": "Tools",
          "value": "Lasers & light"
        }
      ]
    },
    "candidates": {
      "title": "Is spot treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Sun spots",
        "Age spots",
        "Freckling",
        "Sun damage on the face",
        "Spots on the chest and hands",
        "Uneven tone"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have brown spots",
        "You want even tone",
        "You want clearer skin",
        "You want little downtime",
        "You want to look refreshed",
        "You want gradual change"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "M22 Stellar IPL",
          "text": "Gentle light for sun damage and pigment.",
          "href": "/cosmetic-dermatology/m22-stellar-ipl"
        },
        {
          "title": "Q-Switched Nd:YAG",
          "text": "Precise laser for stubborn spots.",
          "href": "/cosmetic-dermatology/q-switched-nd-yag"
        },
        {
          "title": "UltraClear",
          "text": "Resurfacing for pigment and texture.",
          "href": "/cosmetic-dermatology/ultraclear-laser"
        },
        {
          "title": "Sun protection",
          "text": "Keeps new spots away."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Will spots come back?",
        "a": "New spots can form with sun. Sunscreen helps protect results."
      },
      {
        "q": "How many sessions?",
        "a": "Usually a few."
      },
      {
        "q": "Is every spot safe to treat?",
        "a": "Dr. Sandhu checks every spot first."
      },
      {
        "q": "Is there downtime?",
        "a": "Spots darken and flake off over about a week."
      }
    ]
  },
  {
    "slug": "rosacea-and-redness",
    "category": "cosmetic-dermatology",
    "group": "Spots, Veins & Redness",
    "name": "Rosacea & Redness",
    "localTopic": "Rosacea & Redness",
    "title": "Rosacea & Redness Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Rosacea & Redness Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Laser and light treatment for rosacea, broken capillaries and redness in Torrance, CA.",
    "lede": "Calmer, more even skin, with laser and light care for redness.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/rosacea-and-redness/hero.webp",
      "heroAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "one": "/images/services/cosmetic/rosacea-and-redness/one.webp",
      "oneAlt": "Waiting room seating under a pendant light",
      "two": "/images/services/cosmetic/rosacea-and-redness/two.webp",
      "twoAlt": "Woman with calm, clear skin"
    },
    "overview": {
      "eyebrow": "Understanding Rosacea & Redness",
      "title": "What causes",
      "accent": "facial redness?",
      "text": [
        "Laser or light-based treatments shrink or collapse visible blood vessels and reduce redness.",
        "They help with rosacea, broken capillaries and flushing, often alongside medical care.",
        "Most people have a series of sessions with little downtime."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Redness & vessels"
        },
        {
          "label": "Tools",
          "value": "IPL & lasers"
        },
        {
          "label": "Downtime",
          "value": "Little"
        }
      ]
    },
    "candidates": {
      "title": "Is redness treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Rosacea redness",
        "Broken capillaries",
        "Flushing",
        "Redness on the cheeks and nose",
        "Small facial vessels",
        "Redness after sun damage"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have persistent redness",
        "You have visible vessels",
        "You want calmer skin",
        "You want little downtime",
        "Medical care alone is not enough",
        "You want even tone"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "M22 Stellar IPL",
          "text": "Reduces redness and vessels.",
          "href": "/cosmetic-dermatology/m22-stellar-ipl"
        },
        {
          "title": "Multi-Spot Nd:YAG",
          "text": "Targets individual vessels.",
          "href": "/cosmetic-dermatology/multi-spot-nd-yag"
        },
        {
          "title": "Medical rosacea care",
          "text": "Prescription care for flares.",
          "href": "/medical-dermatology/rosacea"
        },
        {
          "title": "Gentle routine",
          "text": "Sun protection and calm skin care."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Will redness come back?",
        "a": "Rosacea is chronic, so maintenance helps."
      },
      {
        "q": "How many sessions?",
        "a": "Usually a few."
      },
      {
        "q": "Is it painful?",
        "a": "A quick snap with cooling."
      },
      {
        "q": "Can I combine with medicine?",
        "a": "Yes, and it often works best that way."
      }
    ]
  },
  {
    "slug": "facial-and-leg-veins",
    "category": "cosmetic-dermatology",
    "group": "Spots, Veins & Redness",
    "name": "Facial & Leg Veins",
    "localTopic": "Facial & Leg Veins",
    "title": "Facial & Leg Vein Treatment",
    "accent": "in Torrance, CA",
    "metaTitle": "Facial & Leg Vein Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Laser treatment of facial veins and small leg veins in Torrance, CA.",
    "lede": "Clear visible facial veins and small leg veins with targeted laser care.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/facial-and-leg-veins/hero.webp",
      "heroAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "one": "/images/services/cosmetic/facial-and-leg-veins/one.webp",
      "oneAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "two": "/images/services/cosmetic/facial-and-leg-veins/two.webp",
      "twoAlt": "Woman with smooth, calm skin touching her face"
    },
    "overview": {
      "eyebrow": "Understanding Facial & Leg Veins",
      "title": "What are",
      "accent": "spider veins?",
      "text": [
        "Laser or light-based treatments shrink or collapse visible blood vessels such as facial veins and small leg veins.",
        "The treated vessels fade over the following weeks.",
        "Larger leg veins may need care from a vein specialist. Dr. Sandhu will advise you."
      ],
      "facts": [
        {
          "label": "Treats",
          "value": "Small visible veins"
        },
        {
          "label": "Tools",
          "value": "Vascular laser"
        },
        {
          "label": "Results",
          "value": "Over weeks"
        }
      ]
    },
    "candidates": {
      "title": "Is vein treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Facial spider veins",
        "Broken capillaries",
        "Small leg veins",
        "Veins around the nose",
        "Red or purple vessels",
        "Vascular spots"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You have visible small veins",
        "You want clearer legs",
        "You want clearer facial skin",
        "You want a targeted treatment",
        "You prefer minimal downtime",
        "You want gradual results"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Multi-Spot Nd:YAG",
          "text": "Targets visible veins.",
          "href": "/cosmetic-dermatology/multi-spot-nd-yag"
        },
        {
          "title": "M22 Stellar IPL",
          "text": "For redness and fine vessels.",
          "href": "/cosmetic-dermatology/m22-stellar-ipl"
        },
        {
          "title": "Series if needed",
          "text": "Some veins need more than one session."
        },
        {
          "title": "Referral if needed",
          "text": "Larger veins may need a vein specialist."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Can large leg veins be treated?",
        "a": "Larger veins are best seen by a vein specialist."
      },
      {
        "q": "When will veins fade?",
        "a": "Over several weeks."
      },
      {
        "q": "Is there downtime?",
        "a": "Mild redness or bruising."
      },
      {
        "q": "Can new veins appear?",
        "a": "Yes, over time. Touch-ups help."
      }
    ]
  },
  {
    "slug": "tattoo-removal",
    "category": "cosmetic-dermatology",
    "group": "Spots, Veins & Redness",
    "name": "Tattoo Removal",
    "localTopic": "Tattoo Removal",
    "title": "Laser Tattoo Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Laser Tattoo Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Laser tattoo removal in Torrance, CA with the Q-Switched Nd:YAG laser.",
    "lede": "Fade or remove unwanted tattoos with precise laser treatment.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/tattoo-removal/hero.webp",
      "heroAlt": "Reception at Oceanside Dermatology & Aesthetics in Torrance",
      "one": "/images/services/cosmetic/tattoo-removal/one.webp",
      "oneAlt": "Dr. Sophia Sandhu, wearing gloves, checking a patient's skin",
      "two": "/images/services/cosmetic/tattoo-removal/two.webp",
      "twoAlt": "Laser tattoo removal on an arm"
    },
    "overview": {
      "eyebrow": "Understanding Tattoo Removal",
      "title": "How does",
      "accent": "tattoo removal work?",
      "text": [
        "The Q-Switched Nd:YAG laser targets tattoo ink with ultra-fast pulses of laser light.",
        "The ink breaks into tiny particles that the body gradually clears away over several sessions.",
        "Results depend on the ink colors, depth and age of the tattoo."
      ],
      "facts": [
        {
          "label": "Laser",
          "value": "Q-Switched Nd:YAG"
        },
        {
          "label": "Sessions",
          "value": "Several"
        },
        {
          "label": "Spacing",
          "value": "Weeks apart"
        }
      ]
    },
    "candidates": {
      "title": "Is tattoo removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Full tattoo removal",
        "Fading before a cover-up",
        "Small tattoos",
        "Older tattoos",
        "Dark ink tattoos",
        "Cosmetic tattoos"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "You regret a tattoo",
        "You want to fade for a cover-up",
        "You can commit to several sessions",
        "You want a medical setting",
        "You want careful, safe treatment",
        "You want gradual results"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Q-Switched Nd:YAG",
          "text": "Breaks up tattoo ink.",
          "href": "/cosmetic-dermatology/q-switched-nd-yag"
        },
        {
          "title": "Series of sessions",
          "text": "Spaced weeks apart to let the body clear ink."
        },
        {
          "title": "Aftercare",
          "text": "Simple care for healing skin."
        },
        {
          "title": "Realistic planning",
          "text": "Clear expectations based on your tattoo."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "How many sessions will I need?",
        "a": "Several, depending on the tattoo."
      },
      {
        "q": "Does it hurt?",
        "a": "It feels like quick snaps. Cooling helps."
      },
      {
        "q": "Will all colors fade?",
        "a": "Dark inks respond best. Some colors are harder to remove."
      },
      {
        "q": "Is there a scar risk?",
        "a": "It is low with proper care."
      }
    ]
  },
  {
    "slug": "sebaceous-hyperplasia",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Sebaceous Hyperplasia",
    "localTopic": "Sebaceous Hyperplasia",
    "title": "Sebaceous Hyperplasia Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Sebaceous Hyperplasia Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Sebaceous hyperplasia treatment in Torrance, CA. Gentle removal of small, soft, yellowish bumps on the face.",
    "lede": "Smoother skin, with gentle removal of small, yellowish bumps.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/sebaceous-hyperplasia/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/cosmetic/sebaceous-hyperplasia/one.webp",
      "oneAlt": "Dr. Sophia Sandhu treating a small growth on a patient's face",
      "two": "/images/services/cosmetic/sebaceous-hyperplasia/two.webp",
      "twoAlt": "Woman with cream on her cheek in profile"
    },
    "overview": {
      "eyebrow": "Understanding Sebaceous Hyperplasia",
      "title": "What is",
      "accent": "sebaceous hyperplasia?",
      "text": [
        "Sebaceous hyperplasia is a harmless skin condition where enlarged oil glands form small, soft, yellowish bumps, usually on the face.",
        "They are common with age and can look like small pimples that do not go away.",
        "They can be removed for cosmetic reasons with quick in-office treatments."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No"
        },
        {
          "label": "Common on",
          "value": "Forehead, cheeks"
        },
        {
          "label": "Removal",
          "value": "Quick"
        }
      ]
    },
    "candidates": {
      "title": "Is sebaceous hyperplasia",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Yellowish bumps on the face",
        "Bumps with a central dip",
        "Many small bumps",
        "Bumps on the forehead",
        "Bumps on the cheeks",
        "Bumps that look like pimples"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Bumps that do not go away",
        "You want smoother skin",
        "You want a quick treatment",
        "You want little downtime",
        "You want a check that they are harmless",
        "You want a natural result"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Dr. Sandhu checks that each growth is harmless."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small growths.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current for small spots.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Prescription care",
          "text": "Some creams can help reduce new bumps."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Are they acne?",
        "a": "No. They are enlarged oil glands, not pimples."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "skin-tags",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Skin Tags",
    "localTopic": "Skin Tags",
    "title": "Cosmetic Skin Tag Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Cosmetic Skin Tag Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Cosmetic skin tag removal in Torrance, CA for tags on the neck, armpits and eyelids.",
    "lede": "Quick, gentle removal of skin tags that catch or bother you.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/skin-tags/hero.webp",
      "heroAlt": "Front desk team member at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/skin-tags/one.webp",
      "oneAlt": "Dr. Sophia Sandhu removing a small skin growth",
      "two": "/images/services/cosmetic/skin-tags/two.webp",
      "twoAlt": "Woman touching the smooth skin of her neck"
    },
    "overview": {
      "eyebrow": "Understanding Skin Tags",
      "title": "What are",
      "accent": "skin tags?",
      "text": [
        "Skin tags are small, soft growths often found on the neck, armpits or eyelids.",
        "They are harmless but can catch on clothing or jewelry and become irritated.",
        "Removal is quick and done in the office."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No"
        },
        {
          "label": "Common on",
          "value": "Neck, armpits, eyelids"
        },
        {
          "label": "Removal",
          "value": "Quick"
        }
      ]
    },
    "candidates": {
      "title": "Is skin tag removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Neck skin tags",
        "Underarm skin tags",
        "Eyelid skin tags",
        "Many small tags",
        "Irritated tags",
        "Tags in skin folds"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Tags catch on clothing",
        "You do not like how they look",
        "You want a quick treatment",
        "You want little downtime",
        "You have several tags",
        "You want them checked"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Dr. Sandhu checks that each growth is harmless."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small growths.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current for small spots.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Snip removal",
          "text": "Quick removal with sterile instruments."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Should I remove them at home?",
        "a": "No. Home removal can cause bleeding and infection."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "moles",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Moles",
    "localTopic": "Moles",
    "title": "Cosmetic Mole Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Cosmetic Mole Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Cosmetic mole removal in Torrance, CA by a board-certified dermatologist.",
    "lede": "Safe removal of moles you do not want, after a careful check.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/moles/hero.webp",
      "heroAlt": "Light-filled reception area",
      "one": "/images/services/cosmetic/moles/one.webp",
      "oneAlt": "Dr. Sophia Sandhu checking a smiling patient's scalp",
      "two": "/images/services/cosmetic/moles/two.webp",
      "twoAlt": "Woman with flawless skin in profile"
    },
    "overview": {
      "eyebrow": "Understanding Moles",
      "title": "What are",
      "accent": "moles?",
      "text": [
        "Moles are common pigmented growths on the skin. Most are harmless.",
        "Some people choose to remove moles that catch on clothing or affect how they feel about their appearance.",
        "Dr. Sandhu checks every mole first and can send it to a lab after removal."
      ],
      "facts": [
        {
          "label": "Usually",
          "value": "Harmless"
        },
        {
          "label": "First",
          "value": "A careful check"
        },
        {
          "label": "Removal",
          "value": "Shave or excision"
        }
      ]
    },
    "candidates": {
      "title": "Is mole removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Raised moles on the face",
        "Moles that catch on clothing",
        "Moles in visible areas",
        "Several moles",
        "Moles you do not like",
        "Moles that get irritated"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "A mole bothers you",
        "A mole catches or rubs",
        "You want smoother skin",
        "You want a careful check first",
        "You want a natural result",
        "You want lab testing for peace of mind"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Mole check",
          "text": "A dermatoscope exam first.",
          "href": "/medical-dermatology/moles"
        },
        {
          "title": "Shave removal",
          "text": "For raised moles, level with the skin."
        },
        {
          "title": "Excision",
          "text": "Full removal with fine stitches.",
          "href": "/surgical-dermatology/excisions"
        },
        {
          "title": "Lab testing",
          "text": "Removed moles can be sent to a lab."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "What if a mole is changing?",
        "a": "A changing mole should be checked medically first."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "seborrheic-keratoses",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Seborrheic Keratoses",
    "localTopic": "Seborrheic Keratoses",
    "title": "Seborrheic Keratosis Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Seborrheic Keratosis Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Cosmetic removal of seborrheic keratoses in Torrance, CA.",
    "lede": "Smoother skin, with quick removal of warty, age-related growths.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/seborrheic-keratoses/hero.webp",
      "heroAlt": "Reception area with the Oceanside sign",
      "one": "/images/services/cosmetic/seborrheic-keratoses/one.webp",
      "oneAlt": "Dr. Sophia Sandhu laughing with a team member",
      "two": "/images/services/cosmetic/seborrheic-keratoses/two.webp",
      "twoAlt": "Smiling mature woman with healthy skin"
    },
    "overview": {
      "eyebrow": "Understanding Seborrheic Keratoses",
      "title": "What are",
      "accent": "seborrheic keratoses?",
      "text": [
        "Seborrheic keratoses are warty, often pigmented growths common with aging.",
        "They are harmless but can itch, catch or simply be unwanted.",
        "They are removed quickly in the office for comfort or cosmetic reasons."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No"
        },
        {
          "label": "Common with",
          "value": "Age"
        },
        {
          "label": "Removal",
          "value": "Quick"
        }
      ]
    },
    "candidates": {
      "title": "Is removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Growths on the face",
        "Growths on the back and chest",
        "Many growths",
        "Itchy growths",
        "Growths that catch",
        "Dark growths"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Growths bother you",
        "You want smoother skin",
        "You want a quick treatment",
        "You want them checked first",
        "You have several growths",
        "You want a natural result"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Dr. Sandhu checks that each growth is harmless."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small growths.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current for small spots.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Curettage",
          "text": "Gentle scraping after numbing."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Are they contagious?",
        "a": "No."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "dermatosis-papulosa-nigra",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Dermatosis Papulosa Nigra",
    "localTopic": "Dermatosis Papulosa Nigra",
    "title": "Dermatosis Papulosa Nigra Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Dermatosis Papulosa Nigra Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Dermatosis papulosa nigra removal in Torrance, CA with gentle, skin-type-aware treatment.",
    "lede": "Gentle removal of small, dark bumps, with care for your skin type.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/dermatosis-papulosa-nigra/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/cosmetic/dermatosis-papulosa-nigra/one.webp",
      "oneAlt": "Dr. Sophia Sandhu treating small facial spots",
      "two": "/images/services/cosmetic/dermatosis-papulosa-nigra/two.webp",
      "twoAlt": "Smiling woman with an even complexion"
    },
    "overview": {
      "eyebrow": "Understanding Dermatosis Papulosa Nigra",
      "title": "What is",
      "accent": "dermatosis papulosa nigra?",
      "text": [
        "Dermatosis papulosa nigra are small, dark bumps mostly seen on darker skin tones, often on the face and neck.",
        "They are harmless but can increase in number with age.",
        "Dr. Sandhu removes them gently, with settings chosen to protect your skin."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No"
        },
        {
          "label": "Common on",
          "value": "Face, neck"
        },
        {
          "label": "Approach",
          "value": "Gentle"
        }
      ]
    },
    "candidates": {
      "title": "Is removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Small dark bumps on the cheeks",
        "Bumps on the neck",
        "Many small bumps",
        "Bumps that catch",
        "Bumps that bother you",
        "Bumps increasing with age"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Bumps bother you",
        "You want smoother skin",
        "You want gentle treatment",
        "You want care for your skin type",
        "You want a quick treatment",
        "You want a natural result"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Dr. Sandhu checks that each growth is harmless."
        },
        {
          "title": "Cryosurgery",
          "text": "Freezing small growths.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current for small spots.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Snip removal",
          "text": "For slightly raised bumps."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Is treatment safe for my skin?",
        "a": "Yes. Settings are chosen carefully to avoid light or dark marks."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "angiomas",
    "category": "cosmetic-dermatology",
    "group": "Growth Removal",
    "name": "Angiomas",
    "localTopic": "Angiomas",
    "title": "Cosmetic Angioma Removal",
    "accent": "in Torrance, CA",
    "metaTitle": "Cosmetic Angioma Removal in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Cosmetic removal of cherry angiomas in Torrance, CA.",
    "lede": "Clear small red spots with quick, gentle treatment.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/angiomas/hero.webp",
      "heroAlt": "Reception area with the Oceanside sign",
      "one": "/images/services/cosmetic/angiomas/one.webp",
      "oneAlt": "Dr. Sophia Sandhu treating a small spot on a patient's face",
      "two": "/images/services/cosmetic/angiomas/two.webp",
      "twoAlt": "Woman with glowing skin touching her cheeks"
    },
    "overview": {
      "eyebrow": "Understanding Angiomas",
      "title": "What are",
      "accent": "angiomas?",
      "text": [
        "Angiomas are small red or purple vascular growths made up of blood vessels. Cherry angiomas are the most common.",
        "They are harmless but can bleed if scratched, or simply be unwanted.",
        "They can be removed quickly with laser or electrodesiccation."
      ],
      "facts": [
        {
          "label": "Harmful?",
          "value": "No"
        },
        {
          "label": "Looks like",
          "value": "Small red spots"
        },
        {
          "label": "Removal",
          "value": "Quick"
        }
      ]
    },
    "candidates": {
      "title": "Is removal",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Cherry angiomas",
        "Many red spots",
        "Spots on the chest and back",
        "Spots on the face",
        "Spots that bleed",
        "Spots that bother you"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Red spots bother you",
        "Spots bleed when scratched",
        "You want clearer skin",
        "You want a quick treatment",
        "You have several spots",
        "You want them checked"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Dr. Sandhu checks each spot."
        },
        {
          "title": "Multi-Spot Nd:YAG",
          "text": "Laser for vascular spots.",
          "href": "/cosmetic-dermatology/multi-spot-nd-yag"
        },
        {
          "title": "Electrodesiccation",
          "text": "A fine current seals the spot.",
          "href": "/surgical-dermatology/electrodesiccation-and-curettage"
        },
        {
          "title": "Several at once",
          "text": "Many spots can be treated in one visit."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "Is removal covered by insurance?",
        "a": "Cosmetic removal may not be covered. We will let you know beforehand."
      },
      {
        "q": "Will it leave a mark?",
        "a": "Most methods leave little or no mark."
      },
      {
        "q": "Do they mean something is wrong?",
        "a": "Usually not. They are very common with age."
      },
      {
        "q": "Can new ones form?",
        "a": "Yes, new growths can appear over time."
      }
    ]
  },
  {
    "slug": "prp-for-hair-loss",
    "category": "cosmetic-dermatology",
    "group": "Hair",
    "name": "PRP for Hair Loss",
    "localTopic": "PRP for Hair Loss",
    "title": "PRP for Hair Loss",
    "accent": "in Torrance, CA",
    "metaTitle": "PRP for Hair Loss in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Platelet-rich plasma (PRP) hair loss treatment in Torrance, CA by a board-certified dermatologist.",
    "lede": "Thicker, fuller-looking hair, using your own growth factors.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/cosmetic/prp-for-hair-loss/hero.webp",
      "heroAlt": "Front desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/cosmetic/prp-for-hair-loss/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/cosmetic/prp-for-hair-loss/two.webp",
      "twoAlt": "Woman brushing long, healthy hair"
    },
    "overview": {
      "eyebrow": "Understanding PRP for Hair Loss",
      "title": "What is",
      "accent": "PRP for hair loss?",
      "text": [
        "Platelet-rich plasma (PRP) hair loss treatment uses your own blood's plasma, rich in growth factors, placed into the scalp to stimulate hair growth and improve thickness.",
        "It is usually done as a series of sessions, followed by maintenance.",
        "It works best as part of a plan after Dr. Sandhu finds the cause of your hair loss."
      ],
      "facts": [
        {
          "label": "Uses",
          "value": "Your own plasma"
        },
        {
          "label": "Goal",
          "value": "Thicker hair"
        },
        {
          "label": "Sessions",
          "value": "A series"
        }
      ]
    },
    "candidates": {
      "title": "Is PRP",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Thinning hair",
        "Female pattern hair loss",
        "Male pattern hair loss",
        "Widening part",
        "Early hair loss",
        "Hair loss alongside medical treatment"
      ],
      "signsTitle": "You may like this if",
      "signs": [
        "Your hair is thinning",
        "You want a natural option",
        "You want to boost other treatments",
        "You can commit to a series",
        "You want fuller-looking hair",
        "You want a dermatologist-led plan"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Diagnosis first",
          "text": "Finding the cause of hair loss.",
          "href": "/medical-dermatology/hair-loss"
        },
        {
          "title": "PRP series",
          "text": "Usually a few monthly sessions."
        },
        {
          "title": "Maintenance",
          "text": "Periodic sessions to keep results."
        },
        {
          "title": "Combined care",
          "text": "Works well with medical hair loss treatment."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Consultation",
          "text": "Dr. Sandhu looks at your skin, listens to your goals and explains what is realistic."
        },
        {
          "label": "Same day",
          "title": "Your personal plan",
          "text": "You leave with a clear plan, including the number of sessions and costs."
        },
        {
          "label": "Treatment",
          "title": "Treatment day",
          "text": "Treatments are done in our office with comfort measures as needed."
        },
        {
          "label": "Follow-up",
          "title": "Results & upkeep",
          "text": "We review your results and plan maintenance to keep them looking their best."
        }
      ]
    },
    "safety": {
      "title": "Safe, natural-looking care",
      "text": [
        "Our philosophy is that less is more. We enhance your natural beauty, never change it.",
        "Every treatment is chosen for your skin type, including skin of color. Some treatments are not done during pregnancy, and we review your health history first."
      ]
    },
    "faqs": [
      {
        "q": "When will I see results?",
        "a": "Usually after a few months."
      },
      {
        "q": "How many sessions?",
        "a": "Commonly three, then maintenance."
      },
      {
        "q": "Does it hurt?",
        "a": "Numbing keeps it comfortable."
      },
      {
        "q": "Can I have this treatment while pregnant or breastfeeding?",
        "a": "Many cosmetic treatments are postponed during pregnancy and breastfeeding. Dr. Sandhu will advise you."
      }
    ]
  },
  {
    "slug": "atopic-dermatitis-and-eczema",
    "category": "pediatric-dermatology",
    "group": "Common Conditions",
    "name": "Eczema",
    "localTopic": "Pediatric eczema care",
    "title": "Eczema Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Eczema Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric eczema (atopic dermatitis) care in Torrance, CA for babies, children and teens.",
    "lede": "Gentle relief for itchy, dry, inflamed skin in babies, children and teens.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/atopic-dermatitis-and-eczema/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/pediatric/atopic-dermatitis-and-eczema/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/pediatric/atopic-dermatitis-and-eczema/two.webp",
      "twoAlt": "Mother applying cream to her son's face"
    },
    "overview": {
      "eyebrow": "Understanding Eczema",
      "title": "What is",
      "accent": "eczema?",
      "text": [
        "Atopic dermatitis, or eczema, is chronic itchy, red, inflamed skin linked to allergies or asthma.",
        "It is very common in babies and children and tends to come and go in flares.",
        "Dr. Sandhu helps families calm flares, protect the skin barrier and help children sleep comfortably."
      ],
      "facts": [
        {
          "label": "Who",
          "value": "Babies to teens"
        },
        {
          "label": "Main sign",
          "value": "Itchy, dry skin"
        },
        {
          "label": "Linked to",
          "value": "Allergies, asthma"
        }
      ]
    },
    "candidates": {
      "title": "Is eczema care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Baby eczema",
        "Eczema in skin folds",
        "Itchy flares",
        "Dry, rough patches",
        "Infected eczema",
        "Eczema affecting sleep"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Your child scratches often",
        "Red, rough patches",
        "Flares keep coming back",
        "Itch disturbs sleep",
        "Moisturizers are not enough",
        "Skin cracks or weeps"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Skin barrier care",
          "text": "Gentle bathing and the right moisturizers."
        },
        {
          "title": "Prescription treatments",
          "text": "Safe creams and ointments for flares."
        },
        {
          "title": "Itch relief",
          "text": "Tips to help your child sleep."
        },
        {
          "title": "Flare plan",
          "text": "A written plan for when flares start.",
          "href": "/medical-dermatology/eczema"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Will my child outgrow eczema?",
        "a": "Many children improve with age, but some keep sensitive skin."
      },
      {
        "q": "Is eczema contagious?",
        "a": "No."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "What helps at home?",
        "a": "Short lukewarm baths and moisturizing right after."
      }
    ]
  },
  {
    "slug": "acne",
    "category": "pediatric-dermatology",
    "group": "Common Conditions",
    "name": "Acne",
    "localTopic": "Pediatric acne care",
    "title": "Teen Acne Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Teen Acne Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Teen and preteen acne treatment in Torrance, CA by a board-certified dermatologist.",
    "lede": "Clearer skin and more confidence for preteens and teens.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/acne/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu laughing with a team member",
      "one": "/images/services/pediatric/acne/one.webp",
      "oneAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "two": "/images/services/pediatric/acne/two.webp",
      "twoAlt": "Teenager washing her face at the mirror"
    },
    "overview": {
      "eyebrow": "Understanding Acne",
      "title": "What is",
      "accent": "acne?",
      "text": [
        "Acne is pimples, blackheads or cysts from clogged hair follicles and oil buildup.",
        "It often starts in the preteen and teen years and can affect confidence.",
        "Dr. Sandhu builds simple, teen-friendly plans that fit busy school routines."
      ],
      "facts": [
        {
          "label": "Who",
          "value": "Preteens & teens"
        },
        {
          "label": "Visit options",
          "value": "In office or video"
        },
        {
          "label": "Approach",
          "value": "Simple routines"
        }
      ]
    },
    "candidates": {
      "title": "Is acne care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Blackheads and whiteheads",
        "Red pimples",
        "Cysts",
        "Acne on the back and chest",
        "Acne marks",
        "Acne affecting confidence"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Breakouts that do not clear",
        "Painful bumps",
        "Dark marks after pimples",
        "Store-bought products have not worked",
        "Acne affects confidence",
        "Scarring"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Simple routines",
          "text": "Easy steps teens will follow."
        },
        {
          "title": "Prescription creams",
          "text": "To unclog pores and calm redness."
        },
        {
          "title": "Oral medicines",
          "text": "For more severe acne when needed."
        },
        {
          "title": "Adult acne care",
          "text": "Learn more about acne care.",
          "href": "/medical-dermatology/acne"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "At what age can acne be treated?",
        "a": "Acne can be treated as soon as it starts."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "Should teens pop pimples?",
        "a": "No. Picking can cause marks and scars."
      },
      {
        "q": "How long until it improves?",
        "a": "Usually several weeks."
      }
    ]
  },
  {
    "slug": "psoriasis",
    "category": "pediatric-dermatology",
    "group": "Common Conditions",
    "name": "Psoriasis",
    "localTopic": "Pediatric psoriasis care",
    "title": "Psoriasis Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Psoriasis Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric psoriasis care in Torrance, CA by a board-certified dermatologist.",
    "lede": "Gentle, effective care for scaly patches in children.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/psoriasis/hero.webp",
      "heroAlt": "Waiting room with curved wooden chairs",
      "one": "/images/services/pediatric/psoriasis/one.webp",
      "oneAlt": "Smiling front desk team member",
      "two": "/images/services/pediatric/psoriasis/two.webp",
      "twoAlt": "Mother applying cream to her baby's arm"
    },
    "overview": {
      "eyebrow": "Understanding Psoriasis",
      "title": "What is",
      "accent": "psoriasis?",
      "text": [
        "Psoriasis is an autoimmune disorder causing thick, scaly, red skin patches.",
        "In children it often appears on the scalp, elbows, knees or diaper area.",
        "Dr. Sandhu chooses treatments that are safe and gentle for growing skin."
      ],
      "facts": [
        {
          "label": "Who",
          "value": "Children & teens"
        },
        {
          "label": "Main sign",
          "value": "Scaly, red patches"
        },
        {
          "label": "Contagious?",
          "value": "No"
        }
      ]
    },
    "candidates": {
      "title": "Is psoriasis care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Scalp psoriasis",
        "Plaque psoriasis",
        "Diaper-area psoriasis",
        "Nail changes",
        "Guttate psoriasis after infection",
        "Itchy patches"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Thick, scaly patches",
        "Flaking on the scalp",
        "Pitted nails",
        "Patches after a sore throat",
        "Itchy skin",
        "Patches affecting confidence"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Gentle topicals",
          "text": "Creams and scalp treatments safe for children."
        },
        {
          "title": "Skin care",
          "text": "Moisturizing and gentle bathing."
        },
        {
          "title": "Advanced options",
          "text": "For more widespread psoriasis when needed."
        },
        {
          "title": "Adult psoriasis care",
          "text": "Learn more about psoriasis.",
          "href": "/medical-dermatology/psoriasis"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Is psoriasis contagious?",
        "a": "No."
      },
      {
        "q": "Can it be cured?",
        "a": "Not yet, but it can be well controlled."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "Can an infection trigger it?",
        "a": "Yes. A strep throat can trigger a type of psoriasis in children."
      }
    ]
  },
  {
    "slug": "rashes",
    "category": "pediatric-dermatology",
    "group": "Common Conditions",
    "name": "Rashes",
    "localTopic": "Pediatric rashes care",
    "title": "Rash Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Rash Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric rash diagnosis and treatment in Torrance, CA.",
    "lede": "Find out what is causing your child's rash and calm it quickly.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/rashes/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu laughing with a team member",
      "one": "/images/services/pediatric/rashes/one.webp",
      "oneAlt": "Waiting room with curved wooden chairs",
      "two": "/images/services/pediatric/rashes/two.webp",
      "twoAlt": "Parent applying cream to a baby's skin"
    },
    "overview": {
      "eyebrow": "Understanding Rashes",
      "title": "What causes",
      "accent": "rashes?",
      "text": [
        "Rashes are irritated, red or inflamed skin with many possible causes, from heat and allergies to infections and eczema.",
        "Most childhood rashes are harmless, but some need treatment.",
        "Dr. Sandhu finds the cause and helps your child feel comfortable quickly."
      ],
      "facts": [
        {
          "label": "Who",
          "value": "Babies to teens"
        },
        {
          "label": "Visit options",
          "value": "In office or video"
        },
        {
          "label": "First step",
          "value": "Find the cause"
        }
      ]
    },
    "candidates": {
      "title": "Is rashes care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Heat rash",
        "Diaper rash",
        "Allergic rashes",
        "Viral rashes",
        "Contact rashes",
        "Rashes that keep returning"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "A rash that spreads",
        "Itching or discomfort",
        "Blisters or crusting",
        "A rash lasting more than a few days",
        "A rash after a new product",
        "A rash with fever (seek urgent care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Accurate diagnosis",
          "text": "A careful exam to find the cause."
        },
        {
          "title": "Soothing treatment",
          "text": "Gentle creams and comfort care."
        },
        {
          "title": "Treating the cause",
          "text": "Care for infection or allergy."
        },
        {
          "title": "Prevention",
          "text": "Tips to avoid triggers.",
          "href": "/medical-dermatology/rashes"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "When is a rash an emergency?",
        "a": "Seek urgent care for a rash with fever, rapid spreading, or trouble breathing."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "Are most rashes serious?",
        "a": "Most are harmless, but a check gives peace of mind."
      },
      {
        "q": "Can I use adult creams?",
        "a": "Ask first. Some are not right for children."
      }
    ]
  },
  {
    "slug": "insect-bites",
    "category": "pediatric-dermatology",
    "group": "Common Conditions",
    "name": "Insect Bites",
    "localTopic": "Pediatric insect bites care",
    "title": "Insect Bite Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Insect Bite Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric insect bite care in Torrance, CA.",
    "lede": "Relief for itchy, swollen bites so kids can enjoy the outdoors.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/insect-bites/hero.webp",
      "heroAlt": "Bright waiting room at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/pediatric/insect-bites/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/pediatric/insect-bites/two.webp",
      "twoAlt": "Parent applying insect repellent to a child's arm"
    },
    "overview": {
      "eyebrow": "Understanding Insect Bites",
      "title": "What are",
      "accent": "bite reactions?",
      "text": [
        "Insect bites cause skin reactions with redness, swelling and itching from insect stings or bites.",
        "Children often react more strongly, and scratching can lead to infection.",
        "Dr. Sandhu calms the reaction and helps prevent new bites."
      ],
      "facts": [
        {
          "label": "Who",
          "value": "Babies to teens"
        },
        {
          "label": "Main signs",
          "value": "Red, itchy, swollen"
        },
        {
          "label": "Focus",
          "value": "Relief & prevention"
        }
      ]
    },
    "candidates": {
      "title": "Is insect bites care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Mosquito bites",
        "Flea bites",
        "Bed bug bites",
        "Large local reactions",
        "Infected bites",
        "Itchy bumps lasting days"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Bites that swell a lot",
        "Itch that will not settle",
        "Blisters",
        "Signs of infection",
        "New bites at home",
        "Dark marks after bites"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Itch relief",
          "text": "Gentle creams and antihistamines."
        },
        {
          "title": "Infection care",
          "text": "Treating infected bites."
        },
        {
          "title": "Finding the source",
          "text": "Help identifying what is biting."
        },
        {
          "title": "Prevention",
          "text": "Child-safe repellent and clothing tips.",
          "href": "/medical-dermatology/insect-bites"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "When is a sting an emergency?",
        "a": "Call 911 for face or throat swelling or trouble breathing."
      },
      {
        "q": "How can my child stop scratching?",
        "a": "Cool compresses, anti-itch care and short nails."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "Which repellents are safe?",
        "a": "We will recommend options suited to your child's age."
      }
    ]
  },
  {
    "slug": "warts",
    "category": "pediatric-dermatology",
    "group": "Infections & Growths",
    "name": "Warts",
    "localTopic": "Pediatric warts care",
    "title": "Wart Treatment",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Wart Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric wart treatment in Torrance, CA.",
    "lede": "Gentle, child-friendly treatment for common and plantar warts.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/warts/hero.webp",
      "heroAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "one": "/images/services/pediatric/warts/one.webp",
      "oneAlt": "Dr. Sophia Sandhu laughing with a team member",
      "two": "/images/services/pediatric/warts/two.webp",
      "twoAlt": "Parent holding a child's hand"
    },
    "overview": {
      "eyebrow": "Understanding Warts",
      "title": "What are",
      "accent": "warts?",
      "text": [
        "Warts are small, rough growths caused by the HPV virus. They are very common in children.",
        "They often appear on the hands and feet and can spread.",
        "Dr. Sandhu chooses gentle treatments that suit your child's age and comfort."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "HPV virus"
        },
        {
          "label": "Common on",
          "value": "Hands, feet"
        },
        {
          "label": "Approach",
          "value": "Child-friendly"
        }
      ]
    },
    "candidates": {
      "title": "Is wart treatment",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Common warts",
        "Plantar warts",
        "Flat warts",
        "Warts around nails",
        "Many warts",
        "Warts that keep returning"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Rough bumps on the skin",
        "Painful spots on the feet",
        "Warts that spread",
        "Warts near nails",
        "Home treatments have not worked",
        "Warts bothering your child"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Gentle topicals",
          "text": "Treatments used at home."
        },
        {
          "title": "Freezing",
          "text": "Quick in-office freezing for older children.",
          "href": "/surgical-dermatology/cryosurgery"
        },
        {
          "title": "Other options",
          "text": "Painless options for younger children."
        },
        {
          "title": "Prevention",
          "text": "Tips to stop spreading.",
          "href": "/medical-dermatology/warts"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Are warts contagious?",
        "a": "Yes. Avoid picking and sharing towels."
      },
      {
        "q": "Do warts go away on their own?",
        "a": "Many do over time, but treatment can help."
      },
      {
        "q": "Is treatment painful?",
        "a": "We choose gentle options for children."
      },
      {
        "q": "How many visits?",
        "a": "Often a few."
      }
    ]
  },
  {
    "slug": "molluscum",
    "category": "pediatric-dermatology",
    "group": "Infections & Growths",
    "name": "Molluscum",
    "localTopic": "Pediatric molluscum care",
    "title": "Molluscum Treatment",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Molluscum Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric molluscum contagiosum treatment in Torrance, CA.",
    "lede": "Gentle care for small, dimpled bumps common in children.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/molluscum/hero.webp",
      "heroAlt": "Reception at Oceanside Dermatology & Aesthetics in Torrance",
      "one": "/images/services/pediatric/molluscum/one.webp",
      "oneAlt": "Team member on the phone helping a patient book a visit",
      "two": "/images/services/pediatric/molluscum/two.webp",
      "twoAlt": "Mother and toddler after bath time"
    },
    "overview": {
      "eyebrow": "Understanding Molluscum",
      "title": "What is",
      "accent": "molluscum?",
      "text": [
        "Molluscum is a viral infection causing small, firm bumps with a dimple in the center.",
        "It is common in children and spreads by touch and shared towels.",
        "It often clears on its own, but treatment can speed things up and stop spreading."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "A virus"
        },
        {
          "label": "Looks like",
          "value": "Dimpled bumps"
        },
        {
          "label": "Common in",
          "value": "Children"
        }
      ]
    },
    "candidates": {
      "title": "Is molluscum care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Molluscum on the trunk",
        "Molluscum in skin folds",
        "Many bumps",
        "Itchy molluscum",
        "Molluscum with eczema",
        "Spreading bumps"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Small, shiny, dimpled bumps",
        "Bumps that spread",
        "Itchy or red bumps",
        "Bumps with eczema",
        "Bumps bothering your child",
        "Siblings with bumps"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Watchful waiting",
          "text": "Many cases clear on their own."
        },
        {
          "title": "Gentle treatments",
          "text": "In-office options suited to children."
        },
        {
          "title": "Itch and eczema care",
          "text": "Calming the skin around bumps.",
          "href": "/pediatric-dermatology/atopic-dermatitis-and-eczema"
        },
        {
          "title": "Prevention",
          "text": "Tips to stop spreading."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Is molluscum contagious?",
        "a": "Yes, by touch and shared items."
      },
      {
        "q": "Will it go away on its own?",
        "a": "Often, though it can take months."
      },
      {
        "q": "Can my child swim?",
        "a": "Usually yes, with bumps covered and no shared towels."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      }
    ]
  },
  {
    "slug": "impetigo-and-bacterial-infections",
    "category": "pediatric-dermatology",
    "group": "Infections & Growths",
    "name": "Impetigo",
    "localTopic": "Pediatric impetigo care",
    "title": "Impetigo Treatment",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Impetigo Treatment in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric impetigo and bacterial skin infection treatment in Torrance, CA.",
    "lede": "Fast treatment for impetigo and other bacterial skin infections in children.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/impetigo-and-bacterial-infections/hero.webp",
      "heroAlt": "Front desk at Oceanside Dermatology & Aesthetics",
      "one": "/images/services/pediatric/impetigo-and-bacterial-infections/one.webp",
      "oneAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "two": "/images/services/pediatric/impetigo-and-bacterial-infections/two.webp",
      "twoAlt": "Pediatrician talking with a young patient and her mother"
    },
    "overview": {
      "eyebrow": "Understanding Impetigo",
      "title": "What is",
      "accent": "impetigo?",
      "text": [
        "Impetigo is a contagious infection causing red sores that burst and crust, often with a honey-colored crust.",
        "It is common in children, especially around the nose and mouth.",
        "Prompt treatment clears it quickly and stops it from spreading."
      ],
      "facts": [
        {
          "label": "Main sign",
          "value": "Honey-colored crusts"
        },
        {
          "label": "Contagious",
          "value": "Yes"
        },
        {
          "label": "Key",
          "value": "Treat promptly"
        }
      ]
    },
    "candidates": {
      "title": "Is impetigo care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Impetigo",
        "Infected scrapes",
        "Infected eczema",
        "Boils",
        "Folliculitis",
        "Infected bites"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Red sores that crust",
        "Sores around the nose and mouth",
        "Spreading sores",
        "Sores after a scrape",
        "Fever (seek urgent care)",
        "Redness spreading quickly (seek urgent care)"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Antibiotic ointments",
          "text": "For small areas."
        },
        {
          "title": "Oral antibiotics",
          "text": "For larger or spreading infection."
        },
        {
          "title": "Gentle wound care",
          "text": "Cleaning and covering sores."
        },
        {
          "title": "Prevention",
          "text": "Hand washing and not sharing towels.",
          "href": "/medical-dermatology/bacterial-infections"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "When can my child return to school?",
        "a": "Usually 24 hours after starting treatment."
      },
      {
        "q": "Is impetigo contagious?",
        "a": "Yes. Keep sores covered."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      },
      {
        "q": "When is it urgent?",
        "a": "Fever or quickly spreading redness needs urgent care."
      }
    ]
  },
  {
    "slug": "fungal-infections",
    "category": "pediatric-dermatology",
    "group": "Infections & Growths",
    "name": "Fungal Infections",
    "localTopic": "Pediatric fungal infections care",
    "title": "Fungal Infection Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Fungal Infection Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric fungal infection care in Torrance, CA, including ringworm and scalp ringworm.",
    "lede": "Clear itchy, scaly fungal infections such as ringworm and scalp infections.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/fungal-infections/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "one": "/images/services/pediatric/fungal-infections/one.webp",
      "oneAlt": "Dr. Sophia Sandhu talking with a patient in the exam room",
      "two": "/images/services/pediatric/fungal-infections/two.webp",
      "twoAlt": "Child's bare feet in the grass"
    },
    "overview": {
      "eyebrow": "Understanding Fungal Infections",
      "title": "What is",
      "accent": "fungal infections?",
      "text": [
        "Fungal infections cause itchy, red, sometimes scaly skin. Ringworm and scalp ringworm are common in children.",
        "They spread through contact with people, pets or shared items.",
        "Dr. Sandhu confirms the cause and chooses child-safe treatment."
      ],
      "facts": [
        {
          "label": "Examples",
          "value": "Ringworm"
        },
        {
          "label": "Spread by",
          "value": "Contact, pets"
        },
        {
          "label": "First step",
          "value": "Confirm the cause"
        }
      ]
    },
    "candidates": {
      "title": "Is fungal infections care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Ringworm on the body",
        "Scalp ringworm",
        "Athlete's foot",
        "Diaper-area yeast",
        "Infections from pets",
        "Recurring infections"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Ring-shaped itchy patches",
        "Scaly patches on the scalp",
        "Hair loss in a patch",
        "Peeling feet",
        "Red rash in skin folds",
        "Creams have not worked"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Antifungal creams",
          "text": "For skin infections."
        },
        {
          "title": "Oral medicine",
          "text": "Needed for scalp ringworm."
        },
        {
          "title": "Family and pet checks",
          "text": "Treating the source to prevent return."
        },
        {
          "title": "Prevention",
          "text": "Simple hygiene habits.",
          "href": "/medical-dermatology/fungal-infections"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Is ringworm a worm?",
        "a": "No. It is a fungus."
      },
      {
        "q": "Is it contagious?",
        "a": "Yes, including from pets."
      },
      {
        "q": "Why does scalp ringworm need pills?",
        "a": "Creams cannot reach the hair roots."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      }
    ]
  },
  {
    "slug": "alopecia-areata",
    "category": "pediatric-dermatology",
    "group": "Hair",
    "name": "Alopecia Areata",
    "localTopic": "Pediatric alopecia areata care",
    "title": "Alopecia Areata Care",
    "accent": "for Children in Torrance, CA",
    "metaTitle": "Pediatric Alopecia Areata Care in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Pediatric alopecia areata care in Torrance, CA.",
    "lede": "Caring, expert treatment for patchy hair loss in children.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/pediatric/alopecia-areata/hero.webp",
      "heroAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "one": "/images/services/pediatric/alopecia-areata/one.webp",
      "oneAlt": "Smiling front desk team member",
      "two": "/images/services/pediatric/alopecia-areata/two.webp",
      "twoAlt": "Mother brushing her daughter's hair"
    },
    "overview": {
      "eyebrow": "Understanding Alopecia Areata",
      "title": "What is",
      "accent": "alopecia areata?",
      "text": [
        "Alopecia areata is autoimmune hair loss causing patchy bald spots.",
        "It can affect the scalp, eyebrows or eyelashes, and hair often regrows.",
        "Dr. Sandhu supports children and families with gentle treatment and reassurance."
      ],
      "facts": [
        {
          "label": "Cause",
          "value": "Autoimmune"
        },
        {
          "label": "Looks like",
          "value": "Round bald patches"
        },
        {
          "label": "Hair often",
          "value": "Regrows"
        }
      ]
    },
    "candidates": {
      "title": "Is alopecia areata care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Round bald patches",
        "Eyebrow or eyelash loss",
        "Multiple patches",
        "Nail pitting",
        "Recurring patches",
        "Hair loss affecting confidence"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "Smooth, round bald spots",
        "Patches appearing suddenly",
        "Eyebrow or lash loss",
        "Pitted nails",
        "Hair loss upsetting your child",
        "Patches that spread"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Gentle topicals",
          "text": "Treatments suited to children."
        },
        {
          "title": "In-office care",
          "text": "Options for older children when suitable."
        },
        {
          "title": "Support",
          "text": "Reassurance and resources for families."
        },
        {
          "title": "Adult hair loss care",
          "text": "Learn more about hair loss.",
          "href": "/medical-dermatology/hair-loss"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Visit",
          "title": "Family-friendly visit",
          "text": "Dr. Sandhu examines your child gently and talks with you and your child in simple words."
        },
        {
          "label": "Same day",
          "title": "A clear plan",
          "text": "You leave with an easy plan that fits your family's routine."
        },
        {
          "label": "Next weeks",
          "title": "Feeling better",
          "text": "Most children improve within days to weeks with the right care."
        },
        {
          "label": "Follow-up",
          "title": "Check-in",
          "text": "We check progress in the office or by video visit and adjust care as your child grows."
        }
      ]
    },
    "safety": {
      "title": "Gentle care for children",
      "text": [
        "Treatments are chosen for your child's age and skin, and explained clearly to parents.",
        "Dr. Sandhu is highly experienced in treating patients of all ages, from newborns to adults."
      ]
    },
    "faqs": [
      {
        "q": "Will the hair grow back?",
        "a": "Often yes, though it can take months and may recur."
      },
      {
        "q": "Is it contagious?",
        "a": "No."
      },
      {
        "q": "Is it caused by stress?",
        "a": "It is autoimmune, though stress may play a role in some people."
      },
      {
        "q": "Can we have a video visit?",
        "a": "Yes. Many follow-ups and new rashes can be seen by secure video visit."
      }
    ]
  },
  {
    "slug": "new-rashes",
    "category": "teledermatology",
    "group": "Virtual Visits For",
    "name": "New Rashes",
    "localTopic": "Teledermatology for new rashes",
    "title": "New Rash Visits",
    "accent": "by Video Visit",
    "metaTitle": "New Rash Visits by Video Visit | Teledermatology in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Teledermatology video visits for new rashes with a board-certified dermatologist serving Torrance, CA.",
    "lede": "Get a new rash checked from home by a board-certified dermatologist.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/tele/new-rashes/hero.webp",
      "heroAlt": "Smiling front desk team member",
      "one": "/images/services/tele/new-rashes/one.webp",
      "oneAlt": "Dr. Sophia Sandhu explaining a treatment to a patient",
      "two": "/images/services/tele/new-rashes/two.webp",
      "twoAlt": "Woman on an online visit with her doctor"
    },
    "overview": {
      "eyebrow": "Understanding New Rashes",
      "title": "Video visits for",
      "accent": "new rashes",
      "text": [
        "Skip the waiting room. Our teledermatology visits let you consult with a board-certified dermatologist through secure, virtual appointments.",
        "A new rash is one of the most common reasons for a video visit. Clear photos and a short video chat are often all we need.",
        "If an in-person exam is better, we will let you know and book you in."
      ],
      "facts": [
        {
          "label": "Visit",
          "value": "Secure video"
        },
        {
          "label": "Good for",
          "value": "New rashes"
        },
        {
          "label": "From",
          "value": "Home"
        }
      ]
    },
    "candidates": {
      "title": "Is a video visit for new rashes",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Itchy rashes",
        "Allergic reactions",
        "Hives",
        "Contact dermatitis",
        "Heat rash",
        "Rashes in children"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "A new rash you want checked",
        "You cannot easily come in",
        "You want fast advice",
        "Your child has a rash",
        "A rash after a new product",
        "You want peace of mind"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Video consultation",
          "text": "See Dr. Sandhu from home."
        },
        {
          "title": "Photos",
          "text": "Clear photos help us see details."
        },
        {
          "title": "Prescriptions",
          "text": "Sent to your pharmacy when needed."
        },
        {
          "title": "In-person if needed",
          "text": "We book an office visit when best.",
          "href": "/medical-dermatology/rashes"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Step 1",
          "title": "Request a visit",
          "text": "Book an online appointment that fits your day."
        },
        {
          "label": "Step 2",
          "title": "Meet by secure video",
          "text": "See a board-certified dermatologist from home."
        },
        {
          "label": "Step 3",
          "title": "Get your care plan",
          "text": "Leave with clear next steps, prescriptions if needed, and follow-up care."
        },
        {
          "label": "Follow-up",
          "title": "Stay on track",
          "text": "Check in again by video, or come to the office if an in-person exam is best."
        }
      ]
    },
    "safety": {
      "title": "Secure, private visits",
      "text": [
        "Video visits are private and secure. All you need is a phone, tablet or computer with a camera.",
        "Some concerns, such as a full-body skin check or a growth that needs a biopsy, are best seen in person. We will tell you if that is the case."
      ]
    },
    "faqs": [
      {
        "q": "What do I need?",
        "a": "A phone, tablet or computer with a camera, and good lighting."
      },
      {
        "q": "Can you prescribe medicine?",
        "a": "Yes, when appropriate."
      },
      {
        "q": "Is it private?",
        "a": "Yes. Visits are secure and private."
      },
      {
        "q": "When should I come in instead?",
        "a": "For a rash with fever or anything urgent, seek in-person or urgent care."
      }
    ]
  },
  {
    "slug": "acne",
    "category": "teledermatology",
    "group": "Virtual Visits For",
    "name": "Acne",
    "localTopic": "Teledermatology for acne",
    "title": "Acne Visits",
    "accent": "by Video Visit",
    "metaTitle": "Acne Visits by Video Visit | Teledermatology in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Teledermatology acne visits with a board-certified dermatologist serving Torrance, CA.",
    "lede": "Start or adjust your acne treatment from home.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/tele/acne/hero.webp",
      "heroAlt": "Team member on the phone helping a patient book a visit",
      "one": "/images/services/tele/acne/one.webp",
      "oneAlt": "Team member on the phone helping a patient book a visit",
      "two": "/images/services/tele/acne/two.webp",
      "twoAlt": "Young woman on a video visit with her doctor"
    },
    "overview": {
      "eyebrow": "Understanding Acne",
      "title": "Video visits for",
      "accent": "acne",
      "text": [
        "Acne care works well by video. We can review your skin, products and goals, and start or adjust treatment.",
        "Follow-up visits are especially easy by video, so you stay on track without missing school or work.",
        "If your skin needs an in-person look, we will book you in."
      ],
      "facts": [
        {
          "label": "Visit",
          "value": "Secure video"
        },
        {
          "label": "Good for",
          "value": "New & follow-up acne"
        },
        {
          "label": "From",
          "value": "Home"
        }
      ]
    },
    "candidates": {
      "title": "Is a video visit for acne",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Teen acne",
        "Adult acne",
        "Hormonal acne",
        "Acne follow-ups",
        "Treatment adjustments",
        "Acne marks"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "You want to start acne treatment",
        "You need a follow-up",
        "Your treatment needs adjusting",
        "You are busy with school or work",
        "You want convenient care",
        "You want fewer trips"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Video consultation",
          "text": "Review your skin and routine."
        },
        {
          "title": "Personal plan",
          "text": "Clear steps and products."
        },
        {
          "title": "Prescriptions",
          "text": "Sent to your pharmacy when needed."
        },
        {
          "title": "Learn more",
          "text": "Our full acne care.",
          "href": "/medical-dermatology/acne"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Step 1",
          "title": "Request a visit",
          "text": "Book an online appointment that fits your day."
        },
        {
          "label": "Step 2",
          "title": "Meet by secure video",
          "text": "See a board-certified dermatologist from home."
        },
        {
          "label": "Step 3",
          "title": "Get your care plan",
          "text": "Leave with clear next steps, prescriptions if needed, and follow-up care."
        },
        {
          "label": "Follow-up",
          "title": "Stay on track",
          "text": "Check in again by video, or come to the office if an in-person exam is best."
        }
      ]
    },
    "safety": {
      "title": "Secure, private visits",
      "text": [
        "Video visits are private and secure. All you need is a phone, tablet or computer with a camera.",
        "Some concerns, such as a full-body skin check or a growth that needs a biopsy, are best seen in person. We will tell you if that is the case."
      ]
    },
    "faqs": [
      {
        "q": "Can acne be treated by video?",
        "a": "Yes. Many acne visits work well by video."
      },
      {
        "q": "Do I need photos?",
        "a": "Clear photos in good light help."
      },
      {
        "q": "Can teens have video visits?",
        "a": "Yes, with a parent present for minors."
      },
      {
        "q": "What if I need an exam?",
        "a": "We will book an office visit."
      }
    ]
  },
  {
    "slug": "eczema",
    "category": "teledermatology",
    "group": "Virtual Visits For",
    "name": "Eczema",
    "localTopic": "Teledermatology for eczema",
    "title": "Eczema Visits",
    "accent": "by Video Visit",
    "metaTitle": "Eczema Visits by Video Visit | Teledermatology in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Teledermatology eczema visits with a board-certified dermatologist serving Torrance, CA.",
    "lede": "Calm eczema flares with expert care from home.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/tele/eczema/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu laughing with a team member",
      "one": "/images/services/tele/eczema/one.webp",
      "oneAlt": "Smiling front desk team member",
      "two": "/images/services/tele/eczema/two.webp",
      "twoAlt": "Dermatologist on a video consultation"
    },
    "overview": {
      "eyebrow": "Understanding Eczema",
      "title": "Video visits for",
      "accent": "eczema",
      "text": [
        "Eczema flares can be managed well by video. We review your skin, your routine and what has helped before.",
        "It is especially convenient for parents of young children and for regular follow-ups.",
        "If the skin looks infected or needs a closer look, we will book you in."
      ],
      "facts": [
        {
          "label": "Visit",
          "value": "Secure video"
        },
        {
          "label": "Good for",
          "value": "Flares & follow-ups"
        },
        {
          "label": "From",
          "value": "Home"
        }
      ]
    },
    "candidates": {
      "title": "Is a video visit for eczema",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Eczema flares",
        "Baby and child eczema",
        "Hand eczema",
        "Treatment adjustments",
        "Follow-up visits",
        "Itch that disturbs sleep"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "A flare has started",
        "Your plan needs adjusting",
        "Your child has eczema",
        "You want a follow-up",
        "You want convenient care",
        "You want fewer trips"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Video consultation",
          "text": "Review the flare and routine."
        },
        {
          "title": "Flare plan",
          "text": "Clear steps to calm the skin."
        },
        {
          "title": "Prescriptions",
          "text": "Sent to your pharmacy when needed."
        },
        {
          "title": "Learn more",
          "text": "Our full eczema care.",
          "href": "/medical-dermatology/eczema"
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Step 1",
          "title": "Request a visit",
          "text": "Book an online appointment that fits your day."
        },
        {
          "label": "Step 2",
          "title": "Meet by secure video",
          "text": "See a board-certified dermatologist from home."
        },
        {
          "label": "Step 3",
          "title": "Get your care plan",
          "text": "Leave with clear next steps, prescriptions if needed, and follow-up care."
        },
        {
          "label": "Follow-up",
          "title": "Stay on track",
          "text": "Check in again by video, or come to the office if an in-person exam is best."
        }
      ]
    },
    "safety": {
      "title": "Secure, private visits",
      "text": [
        "Video visits are private and secure. All you need is a phone, tablet or computer with a camera.",
        "Some concerns, such as a full-body skin check or a growth that needs a biopsy, are best seen in person. We will tell you if that is the case."
      ]
    },
    "faqs": [
      {
        "q": "Can eczema be treated by video?",
        "a": "Yes, especially flares and follow-ups."
      },
      {
        "q": "Can my child be seen by video?",
        "a": "Yes, with a parent present."
      },
      {
        "q": "What if the skin looks infected?",
        "a": "We may book an office visit."
      },
      {
        "q": "What do I need?",
        "a": "A device with a camera and good lighting."
      }
    ]
  },
  {
    "slug": "follow-up-care",
    "category": "teledermatology",
    "group": "Virtual Visits For",
    "name": "Follow-Up Care",
    "localTopic": "Teledermatology for follow-up care",
    "title": "Follow-Up Visits",
    "accent": "by Video Visit",
    "metaTitle": "Follow-Up Visits by Video Visit | Teledermatology in Torrance, CA | Oceanside Dermatology & Aesthetics",
    "description": "Teledermatology follow-up visits with a board-certified dermatologist serving Torrance, CA.",
    "lede": "Check in on your treatment without leaving home.",
    "heroPosition": "center",
    "photos": {
      "hero": "/images/services/tele/follow-up-care/hero.webp",
      "heroAlt": "Dr. Sophia Sandhu and a team member reviewing a tablet",
      "one": "/images/services/tele/follow-up-care/one.webp",
      "oneAlt": "Reception desk with the Sophia Sandhu M.D. name",
      "two": "/images/services/tele/follow-up-care/two.webp",
      "twoAlt": "Doctor smiling during a telehealth visit"
    },
    "overview": {
      "eyebrow": "Understanding Follow-Up Care",
      "title": "Video",
      "accent": "follow-up care",
      "text": [
        "Follow-up visits are one of the best uses of teledermatology. We check your progress, answer questions and adjust your plan.",
        "They save time while keeping your care on track.",
        "If anything needs a closer look, we will book an office visit."
      ],
      "facts": [
        {
          "label": "Visit",
          "value": "Secure video"
        },
        {
          "label": "Good for",
          "value": "Progress checks"
        },
        {
          "label": "From",
          "value": "Home"
        }
      ]
    },
    "candidates": {
      "title": "Is a video visit for follow-up care",
      "accent": "right for you?",
      "text": "A consultation with Dr. Sandhu is the best way to know which option fits your skin and goals.",
      "conditionsTitle": "What we help with",
      "conditions": [
        "Acne follow-ups",
        "Eczema follow-ups",
        "Rosacea follow-ups",
        "Psoriasis follow-ups",
        "Medication checks",
        "Post-treatment questions"
      ],
      "signsTitle": "Signs it is time to book",
      "signs": [
        "You are on an ongoing treatment",
        "You need a medication check",
        "You have questions after a visit",
        "You want to save time",
        "You want convenient care",
        "You live or work far away"
      ]
    },
    "options": {
      "title": "Your treatment",
      "accent": "options",
      "text": "Dr. Sandhu chooses treatment based on your skin, your goals and the area being treated.",
      "items": [
        {
          "title": "Progress review",
          "text": "How your skin is responding."
        },
        {
          "title": "Plan adjustments",
          "text": "Changes to medicines or routine."
        },
        {
          "title": "Prescriptions",
          "text": "Refills when appropriate."
        },
        {
          "title": "In-person if needed",
          "text": "An office visit when best."
        }
      ]
    },
    "steps": {
      "title": "What to",
      "accent": "expect",
      "text": "Here is how your care usually unfolds.",
      "items": [
        {
          "label": "Step 1",
          "title": "Request a visit",
          "text": "Book an online appointment that fits your day."
        },
        {
          "label": "Step 2",
          "title": "Meet by secure video",
          "text": "See a board-certified dermatologist from home."
        },
        {
          "label": "Step 3",
          "title": "Get your care plan",
          "text": "Leave with clear next steps, prescriptions if needed, and follow-up care."
        },
        {
          "label": "Follow-up",
          "title": "Stay on track",
          "text": "Check in again by video, or come to the office if an in-person exam is best."
        }
      ]
    },
    "safety": {
      "title": "Secure, private visits",
      "text": [
        "Video visits are private and secure. All you need is a phone, tablet or computer with a camera.",
        "Some concerns, such as a full-body skin check or a growth that needs a biopsy, are best seen in person. We will tell you if that is the case."
      ]
    },
    "faqs": [
      {
        "q": "What can be followed up by video?",
        "a": "Many conditions, including acne, eczema, rosacea and psoriasis."
      },
      {
        "q": "Can you refill prescriptions?",
        "a": "Yes, when appropriate."
      },
      {
        "q": "Do I need to come in at all?",
        "a": "Some visits, like full skin checks, need to be in person."
      },
      {
        "q": "How do I book?",
        "a": "Request a visit online or call us."
      }
    ]
  },
];

export const getService = (category: string, slug: string) =>
  serviceContent.find((s) => s.category === category && s.slug === slug);

// Breadcrumb path and sibling services, from the mega menu data.
export function serviceContext(s: ServiceContent) {
  const cat = serviceMenu.find((c) => c.slug === s.category)!;
  const grp = cat.groups.find((g) => g.title === s.group)!;
  return {
    category: cat,
    group: grp,
    crumbs: [
      { label: "Services", href: "/services" },
      { label: cat.title, href: cat.href },
      { label: grp.title, href: groupContent[`${cat.slug}/${groupSlug(grp.title)}`] ? groupHref(cat, grp) : `${cat.href}#${groupSlug(grp.title)}` },
    ],
    siblings: grp.items.filter((i) => !i.href.endsWith(`/${s.slug}`)),
  };
}

// Built service page for a menu link, if any.
export const serviceByHref = (href: string) => serviceContent.find((s) => `/${s.category}/${s.slug}` === href);
