# BRY QA Solutions — Website Blueprint

## Reference Sites & Extracted Patterns

### B2B QA Companies
1. **TestPros** — Gov contract vehicles front-and-center, compliance badges (CMMI L3, ISO 9001/27001), named testimonials, resource center with checklists
2. **Qualitest** — AI-led positioning, persona-based nav, 14+ logo marquee, free consultation CTA, industry verticals
3. **QualityLogic** — Longevity stats in hero (35+ yrs, 6000+ programs), dual lead forms, Clutch badge, onshore differentiator

### Modern React Product Pages (Linear, Vercel, Stripe)
- Centered hero: 4–10 word headline, tight letter-spacing, muted subhead
- Logo bar immediately below hero (grayscale, 5–8 logos)
- Alternating feature rows (text/visual swap)
- Stats strip (3–4 large numbers)
- Card grids for services (2x2 or 3x3)
- 3–4 CTA touchpoints per page (not more)
- Light mode primary for B2B services
- Generous vertical spacing (120–160px sections)

---

## 1. Sitemap

```
/                           → Homepage
/services                   → Services overview
/services/manual-qa         → Manual QA & exploratory testing
/services/test-automation   → Automation frameworks & CI integration
/services/performance       → Load, stress, scalability testing
/services/security          → Security testing & OWASP review
/services/accessibility     → Section 508, WCAG compliance
/technologies               → Tools & frameworks expertise
/about                      → Company story, team, values
/contact                    → Lead form (Formspree)
```

---

## 2. Homepage Copy

### Hero
**Badge:** "Trusted by Government & Enterprise Teams"
**Headline:** "Quality Assurance That Ships With Confidence"
**Subheadline:** "We embed with your team to find defects before your users do. Manual QA, automation, performance testing — built for teams that can't afford to ship broken software."
**Primary CTA:** "Get a Free Assessment"
**Secondary CTA:** "See Our Approach"

### Logo Bar
"Trusted by teams who demand quality" — [Client logos in grayscale]

### Services Section
**Heading:** "End-to-End QA Services"
**Subheading:** "From test strategy to execution, we cover every layer of your application."

| Card | Title | Description |
|------|-------|-------------|
| 1 | Manual QA & Exploratory Testing | Experienced testers who think like users. We find the bugs automation misses. |
| 2 | Test Automation | Selenium, Playwright, Cypress frameworks integrated into your CI/CD pipeline. |
| 3 | Performance Testing | Load, stress, and scalability testing so your app performs under real-world traffic. |
| 4 | Security Testing | OWASP-aligned vulnerability assessments and penetration testing coordination. |
| 5 | Accessibility Testing | Section 508 and WCAG 2.1 compliance for government and regulated industries. |
| 6 | QA Consulting | Test strategy, process improvement, and QA team augmentation. |

### Stats Strip
| Stat | Label |
|------|-------|
| 10+  | Years of Experience |
| 200+ | Projects Delivered |
| 98%  | Client Satisfaction |
| 40%  | Faster Release Cycles |

### How We Work
**Heading:** "A Process Built for Results"
1. **Assess** — We audit your current testing coverage, tools, and gaps.
2. **Plan** — We design a test strategy tailored to your stack and risk profile.
3. **Execute** — Our team embeds with yours to deliver continuous quality.
4. **Report** — Clear dashboards, defect trends, and release readiness metrics.

### Government & Compliance Section
**Heading:** "Built for Regulated Industries"
**Body:** "We understand the compliance requirements of federal, state, and healthcare organizations. From Section 508 accessibility to FISMA security controls, we've helped government teams ship software that meets the bar."
**Trust badges:** CMMI, ISO 9001, Section 508, WCAG 2.1, HIPAA

### Testimonial
> "BRY QA embedded with our development team and cut our post-release defects by 60%. They understand government timelines and compliance — they just get it."
> — **Director of Engineering, Federal Agency Client**

### CTA Banner
**Heading:** "Ready to Ship With Confidence?"
**Body:** "Tell us about your project. We'll respond within one business day with a tailored QA assessment."
**CTA:** "Get Your Free Assessment →"

### Footer
- Logo + tagline
- Services links
- Company links (About, Contact)
- Contact info (email, phone)
- Social links (LinkedIn, GitHub)
- "© 2026 BRY QA Solutions. All rights reserved."

---

## 3. React Component Architecture

```
frontend/src/
├── components/
│   ├── ui/                         # Design system primitives
│   │   ├── Button.tsx              # variant: primary|secondary|ghost|outline
│   │   ├── Card.tsx                # variant: default|elevated|bordered
│   │   ├── Icon.tsx                # Lucide icon wrapper
│   │   ├── Input.tsx               # Form input with label + error
│   │   ├── Textarea.tsx            # Multi-line input
│   │   └── Spinner.tsx             # Loading indicator
│   │
│   └── layout/                     # Page structure
│       ├── Container.tsx           # max-w-7xl mx-auto px wrapper
│       ├── Section.tsx             # Vertical padding + optional bg + id
│       ├── Navbar.tsx              # Sticky nav with dropdown
│       └── Footer.tsx              # Multi-column footer
│
├── features/
│   └── landing/                    # Homepage feature module
│       ├── components/
│       │   ├── Hero.tsx            # Badge + headline + sub + CTAs
│       │   ├── LogoBar.tsx         # Grayscale client logos
│       │   ├── ServicesGrid.tsx    # 3x2 grid of ServiceCards
│       │   ├── ServiceCard.tsx     # Icon + title + description
│       │   ├── StatsStrip.tsx      # 4 animated number stats
│       │   ├── HowWeWork.tsx       # 4-step process section
│       │   ├── ComplianceSection.tsx # Gov trust badges + copy
│       │   ├── Testimonial.tsx     # Quote + author card
│       │   └── CTABanner.tsx       # Full-width call-to-action
│       ├── api/
│       │   └── leads.ts            # submitLead() via Formspree
│       ├── types.ts                # LeadRequest
│       └── index.ts
│
│   └── contact/                    # Contact/lead form feature
│       ├── components/
│       │   └── ContactForm.tsx     # Full lead capture form
│       ├── hooks/
│       │   └── useSubmitLead.ts    # Form submission hook
│       ├── types.ts
│       └── index.ts
│
├── lib/
│   ├── constants.ts               # Site-wide constants
│   ├── services-data.ts           # Service definitions
│   └── technologies-data.ts       # Technology data
│
├── pages/
│   ├── HomePage.tsx               # Assembles landing sections
│   ├── ServicesPage.tsx           # Services overview
│   ├── ServiceDetailPage.tsx      # Individual service detail
│   ├── TechnologiesPage.tsx       # Tools & frameworks
│   ├── AboutPage.tsx              # Company info
│   └── ContactPage.tsx            # Lead form page
│
├── App.tsx                        # Router + layout wrapper
├── main.tsx                       # Entry point
└── index.css                      # Tailwind directives + theme
```
