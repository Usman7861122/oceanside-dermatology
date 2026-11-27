# Legal pages: review before launch

These are plain-language website policies written for the site. Please have the practice's
legal counsel or compliance advisor review them before launch.

- /privacy: website-only privacy policy. Points to the practice's HIPAA Notice of Privacy
  Practices, which the office must supply (we did not write it). Check the California
  (CCPA/CPRA) wording applies to the practice's size.
- /terms: governing law set to California, courts in Los Angeles County. Confirm.
- /accessibility: target WCAG 2.2 AA. Re-test after the final images go in.
- /cookie-policy: matches the cookie card (Necessary, Analytics, Marketing). No analytics
  are installed yet. When one is added, load it only after `osd-consent.analytics` is true
  (listen for the `osd:consent` window event) and name the tool on this page.
- Contact form is still not connected. When it is, name the form/email provider in Privacy.
- "Last updated" date lives in src/data/legal.ts (legalUpdated).
