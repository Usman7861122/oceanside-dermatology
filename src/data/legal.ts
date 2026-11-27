// Legal pages: Privacy, Terms, Accessibility, Cookies.
// These are website policies written in plain words. They need a review by the practice's
// legal counsel before launch (see .pending/LEGAL-REVIEW.md). They do not replace the
// practice's HIPAA Notice of Privacy Practices, which the office provides to patients.
import { site } from "./site";

export const legalUpdated = "November 27, 2026";

export interface LegalSection {
  id: string;
  title: string;
  body: string[];
  list?: string[];
  after?: string[];
}
export interface LegalDoc {
  href: string;
  title: string;
  accent: string;
  eyebrow: string;
  lede: string;
  description: string;
  intro: string[];
  sections: LegalSection[];
}

const contactLine = `${site.name}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}. Phone <a href="${site.phoneHref}">${site.phone}</a>. Email <a href="mailto:${site.email}">${site.email}</a>.`;

export const privacy: LegalDoc = {
  href: "/privacy",
  title: "Privacy",
  accent: "Policy",
  eyebrow: "Privacy Policy",
  lede: "How this website collects, uses and protects the information you share with us.",
  description: `Privacy policy for the ${site.name} website in Torrance, CA: what we collect, how we use it, cookies, and your choices.`,
  intro: [
    `This policy explains how ${site.name} (“we”, “us”) handles information collected through this website. It covers the website only. Your medical records and the health information you share during care are protected under federal law (HIPAA) and California law, and are described in our <strong>Notice of Privacy Practices</strong>, which is available at our office or on request.`,
  ],
  sections: [
    {
      id: "what-we-collect",
      title: "Information we collect",
      body: ["We collect only what we need to respond to you and to keep the site working."],
      list: [
        "<strong>Information you send us.</strong> When you use the appointment request form or email us, we receive what you enter, such as your name, email, phone number, date of birth, the service you are interested in and your message.",
        "<strong>Basic technical data.</strong> Like most websites, our hosting provider records standard information such as your browser type, device, pages visited and the time of the visit, to keep the site secure and running.",
        "<strong>Cookies.</strong> We use necessary cookies, and analytics or marketing cookies only if you allow them. See our <a href=\"/cookie-policy\">Cookie Policy</a>.",
      ],
      after: [
        "Please do not send detailed medical information through the website form or by email. Share it with our team by phone or at your visit.",
      ],
    },
    {
      id: "how-we-use",
      title: "How we use it",
      body: ["We use the information you share to:"],
      list: [
        "Reply to your request and schedule your visit.",
        "Answer questions about our services, hours and location.",
        "Keep the website secure, fix problems and improve how it works.",
        "Meet our legal obligations.",
      ],
      after: ["We do not sell your personal information, and we do not share it for advertising based on your activity across other sites."],
    },
    {
      id: "sharing",
      title: "When we share information",
      body: ["We share information only with service providers who help us run the website and our office, such as hosting, email and scheduling services. They may use it only to provide those services to us. We may also share information when the law requires it, or to protect the safety of our patients, staff or the public."],
    },
    {
      id: "third-party",
      title: "Links and third-party content",
      body: ["Our site links to other sites, such as Google Maps and Google reviews. Those sites have their own privacy policies. The map on our Contact page loads from Google only after you choose to show it, or if you have allowed marketing cookies."],
    },
    {
      id: "security",
      title: "How we protect it",
      body: ["We use reasonable safeguards, including encrypted connections (HTTPS), to protect information sent through this site. No method of sending or storing data online is completely secure, which is another reason we ask you not to send detailed medical information through the website."],
    },
    {
      id: "retention",
      title: "How long we keep it",
      body: ["We keep website inquiries only as long as needed to respond and for our normal business records, unless the law requires us to keep them longer. Information that becomes part of your medical record is kept as required by law."],
    },
    {
      id: "your-choices",
      title: "Your choices and California rights",
      body: ["You can ask us to see, correct or delete the personal information you sent through this website. You can change your cookie choices at any time with the <button type=\"button\" data-cookie-settings class=\"underline decoration-gold/50 underline-offset-2\">Cookie settings</button> link in the footer. California residents may have additional rights under state law, such as the right to know what personal information is collected and to request its deletion. We will not treat you differently for using these rights."],
    },
    {
      id: "children",
      title: "Children",
      body: ["We care for patients of all ages, but this website is meant for adults. A parent or guardian should contact us on behalf of a child. We do not knowingly collect personal information online from children under 13."],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: [`We may update this policy from time to time. The date at the top of this page shows when it last changed.`],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [`For questions about this policy or to make a request, contact ${contactLine}`],
    },
  ],
};

export const terms: LegalDoc = {
  href: "/terms",
  title: "Terms",
  accent: "of Use",
  eyebrow: "Terms of Use",
  lede: "The terms that apply when you use this website.",
  description: `Terms of use for the ${site.name} website in Torrance, CA.`,
  intro: [`By using this website, you agree to these terms. If you do not agree, please do not use the site.`],
  sections: [
    {
      id: "not-medical-advice",
      title: "Not medical advice",
      body: ["The information on this website is general education. It is not medical advice and does not replace a visit with a qualified clinician. Every patient is different, and results of any treatment vary. Do not delay seeking care because of something you read here."],
    },
    {
      id: "emergencies",
      title: "Emergencies",
      body: ["This website, our form and our email are not monitored for emergencies. <strong>If you have a medical emergency, call 911</strong> or go to the nearest emergency room."],
    },
    {
      id: "no-relationship",
      title: "No doctor-patient relationship",
      body: ["Using this website, sending a form or emailing us does not create a doctor-patient relationship. That relationship begins only when you are seen by our physician, in person or by a scheduled video visit."],
    },
    {
      id: "appointments",
      title: "Appointment requests",
      body: ["An online request is not a confirmed appointment. Our team will contact you to confirm a time. Please call the office if you need to change or cancel a visit."],
    },
    {
      id: "content",
      title: "Our content",
      body: [`Text, photos, logos and design on this site belong to ${site.name} or are used under license. You may view and print pages for personal use. Please do not copy, change or reuse our content for other purposes without our written permission. Photos of models are for illustration only and do not show real patients unless stated.`],
    },
    {
      id: "acceptable-use",
      title: "Using the site",
      body: ["Please do not misuse the site, such as by trying to gain unauthorized access, sending harmful code, or using the form to send spam."],
    },
    {
      id: "links",
      title: "Links to other sites",
      body: ["We link to other sites for your convenience. We are not responsible for their content or their privacy practices."],
    },
    {
      id: "liability",
      title: "Disclaimer and limits",
      body: [`We work to keep this site accurate and available, but it is provided “as is,” without warranties of any kind. To the extent the law allows, ${site.name} is not liable for any loss or damage that results from using, or being unable to use, this website.`],
    },
    {
      id: "law",
      title: "Governing law",
      body: ["These terms are governed by the laws of the State of California. Any dispute about this website will be handled in the courts located in Los Angeles County, California."],
    },
    {
      id: "changes",
      title: "Changes",
      body: ["We may update these terms. The date at the top of this page shows when they last changed. Using the site after a change means you accept the updated terms."],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [`Questions about these terms? Contact ${contactLine}`],
    },
  ],
};

export const accessibility: LegalDoc = {
  href: "/accessibility",
  title: "Accessibility",
  accent: "Statement",
  eyebrow: "Accessibility",
  lede: "We want every patient to be able to use this website with ease.",
  description: `Accessibility statement for the ${site.name} website. How we support WCAG 2.2 AA and how to tell us about a barrier.`,
  intro: [`${site.name} is committed to making this website usable for everyone, including people who use assistive technology.`],
  sections: [
    {
      id: "standard",
      title: "Our goal",
      body: ["We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA. These guidelines explain how to make web content easier to use for people with disabilities."],
    },
    {
      id: "what-we-do",
      title: "What we have done",
      body: ["While building this site we:"],
      list: [
        "Used clear headings and page structure so screen readers can move through each page.",
        "Added a “Skip to content” link and made every menu, button and form usable by keyboard, with a visible focus outline.",
        "Wrote text descriptions for meaningful images.",
        "Checked color contrast for text and buttons.",
        "Labeled every form field.",
        "Respected the “reduce motion” setting on your device, so animations calm down when you ask them to.",
        "Made pages work on phones, tablets and with browser zoom.",
      ],
    },
    {
      id: "limits",
      title: "Known limits",
      body: ["Some content comes from other services, such as Google Maps and Google reviews, which we do not control. If you have trouble with any part of the site, we are glad to help by phone or email."],
    },
    {
      id: "feedback",
      title: "Tell us about a barrier",
      body: [`If something on this site is hard to use, please let us know. Tell us the page and what happened, and we will work to fix it and get you the information you need another way. Call <a href="${site.phoneHref}">${site.phone}</a> or email <a href="mailto:${site.email}">${site.email}</a>.`],
    },
    {
      id: "in-office",
      title: "At our office",
      body: [`If you need help or an accommodation for your visit, please call us before your appointment so we can get ready for you. Our team speaks ${site.languages.join(", ").replace(/, ([^,]*)$/, " and $1")}.`],
    },
  ],
};

export const cookies: LegalDoc = {
  href: "/cookie-policy",
  title: "Cookie",
  accent: "Policy",
  eyebrow: "Cookie Policy",
  lede: "What cookies this site uses, and how to change your choice at any time.",
  description: `Cookie policy for the ${site.name} website: necessary, analytics and marketing cookies, and how to change your settings.`,
  intro: [`Cookies are small files a website saves in your browser. Similar tools, such as local storage, work the same way. This page explains how we use them. You can change your choice at any time with <button type="button" data-cookie-settings class="underline decoration-gold/50 underline-offset-2">Cookie settings</button>.`],
  sections: [
    {
      id: "necessary",
      title: "Necessary",
      body: ["These keep the site working and secure and remember your cookie choice. They are always on, because the site cannot work properly without them. We save your choice in your browser’s local storage under the name <strong>osd-consent</strong>."],
    },
    {
      id: "analytics",
      title: "Analytics",
      body: ["With your permission, analytics tools help us understand how visitors use the site, such as which pages are viewed most, so we can improve it. They are off unless you turn them on."],
    },
    {
      id: "marketing",
      title: "Marketing and third-party content",
      body: ["With your permission, we load content from partners, such as the Google map on our Contact page. These partners may set their own cookies. They are off unless you turn them on, and you can still choose to show the map on its own."],
    },
    {
      id: "manage",
      title: "How to change your choice",
      body: ["Use the Cookie settings link in the footer of any page. You can also block or delete cookies in your browser settings. Blocking necessary cookies may stop parts of the site from working."],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [`Questions about cookies? Contact ${contactLine}`],
    },
  ],
};

export const legalDocs = [privacy, terms, accessibility, cookies];
