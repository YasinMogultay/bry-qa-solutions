export const SITE = {
  name: 'BRYQA',
  legalName: 'BRYQA, LLC',
  tagline: 'Your Trusted QA Partner',
  headline: 'Your QA Partner',
  subheadline: 'We provide best-in-class software testing & QA services for federal agencies and mission-critical systems.',
  description:
    'BRYQA is an SBA-certified small business delivering quality assurance, test automation, and independent verification & validation services to federal agencies and commercial organizations.',
  email: 'info@bryqa.com',
  phone: '(301) 555-0147',
  address: {
    street: '7900 Westpark Drive, Suite T300',
    city: 'Tysons',
    state: 'VA',
    zip: '22102',
  },
} as const;

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        group: 'QA & Functional',
        items: [
          { label: 'QA Outsourcing', href: '/services/qa-outsourcing', description: 'Extend your team with cleared QA engineers' },
          { label: 'Functional Testing', href: '/services/functional-testing', description: 'Requirements validation, regression & compatibility' },
          { label: 'Test Automation', href: '/services/test-automation', description: 'CI/CD-ready Selenium, Playwright & Cypress suites' },
          { label: 'QA Consulting & IV&V', href: '/services/qa-consulting-ivv', description: 'Strategy, process maturity & independent verification' },
        ],
      },
      {
        group: 'UX & Performance',
        items: [
          { label: 'Performance Testing', href: '/services/performance-testing', description: 'Load, stress, and scalability validation' },
          { label: 'Managed Testing', href: '/services/managed-testing', description: 'End-to-end test operations managed by us' },
          { label: 'Accessibility Testing', href: '/services/accessibility-testing', description: 'Section 508 & WCAG 2.1 AA compliance audits' },
          { label: 'Compliance Testing', href: '/services/compliance-testing', description: 'FISMA, HIPAA, and GDPR standards validation' },
        ],
      },
      {
        group: 'Security & Specialized',
        items: [
          { label: 'Security Testing', href: '/services/security-testing', description: 'OWASP-aligned vulnerability assessments' },
          { label: 'Penetration Testing', href: '/services/penetration-testing', description: 'Controlled attack simulation & risk assessment' },
          { label: 'DevOps Testing', href: '/services/devops-testing', description: 'Shift-left quality gates in your CI/CD pipeline' },
          { label: 'Dedicated QA Team', href: '/services/dedicated-qa-team', description: 'A full-time QA squad embedded in your workflow' },
        ],
      },
    ],
  },
  {
    label: 'Technologies',
    href: '/technologies',
    children: [
      {
        group: 'Automation & Frameworks',
        items: [
          { label: 'Selenium', href: '/technologies#test-automation', description: 'Cross-platform web automation' },
          { label: 'Playwright', href: '/technologies#test-automation', description: 'Modern end-to-end testing' },
          { label: 'Cypress', href: '/technologies#test-automation', description: 'Developer-friendly test framework' },
          { label: 'Appium', href: '/technologies#mobile-testing', description: 'Cross-platform mobile automation' },
        ],
      },
      {
        group: 'API & Performance',
        items: [
          { label: 'Postman / REST Assured', href: '/technologies#api-testing', description: 'API testing and validation' },
          { label: 'JMeter', href: '/technologies#performance-load', description: 'Load and performance testing' },
          { label: 'Gatling & k6', href: '/technologies#performance-load', description: 'Modern performance frameworks' },
          { label: 'Karate', href: '/technologies#api-testing', description: 'Unified API and perf testing' },
        ],
      },
      {
        group: 'Security & Methodology',
        items: [
          { label: 'OWASP ZAP / Burp Suite', href: '/technologies#security-testing', description: 'Application security testing' },
          { label: 'Cucumber / BDD', href: '/technologies#bdd-methodology', description: 'Behavior-driven development' },
          { label: 'pytest / JUnit 5', href: '/technologies#bdd-methodology', description: 'Test frameworks for Python & Java' },
          { label: 'SonarQube', href: '/technologies#security-testing', description: 'Static code analysis' },
        ],
      },
      {
        group: 'DevOps & Management',
        items: [
          { label: 'Jenkins / GitHub Actions', href: '/technologies#cicd-devops', description: 'CI/CD pipeline automation' },
          { label: 'Docker', href: '/technologies#cicd-devops', description: 'Containerized test environments' },
          { label: 'TestRail / Zephyr', href: '/technologies#test-management', description: 'Test case management' },
          { label: 'Jira / qTest', href: '/technologies#test-management', description: 'Project and test management' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    children: [
      {
        group: 'Industries',
        items: [
          { label: 'Federal Government', href: '/#industries', description: 'Civilian, DoD, and intelligence community programs' },
          { label: 'Healthcare & Life Sciences', href: '/#industries', description: 'CMS, VA, and HHS clinical system validation' },
          { label: 'Financial Services', href: '/#industries', description: 'SOX-compliant banking & regulatory systems' },
          { label: 'State & Local Government', href: '/#industries', description: 'Benefits systems & citizen digital services' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      {
        group: 'Company',
        items: [
          { label: 'About Us', href: '/about', description: 'Our story, mission, and values' },
          { label: 'Leadership Team', href: '/about', description: 'Meet the people behind BRYQA' },
          { label: 'Certifications', href: '/about', description: 'ISO, CMMI, and compliance credentials' },
          { label: 'Contract Vehicles', href: '/#industries', description: 'GSA MAS, CIO-SP3, and more' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
] as const;

export const HERO_STATS = [
  { value: '250+', label: 'software QA engineers' },
  { value: '15+', label: 'years of experience in QA and software testing' },
  { value: '300+', label: 'clients served across government and commercial' },
  { value: '96%', label: 'client retention rate' },
] as const;

export const TRUSTED_BY = [
  'GSA', 'DHS', 'DoD', 'HHS', 'VA', 'USDA',
] as const;

export const SERVICES = [
  {
    id: 'manual-qa',
    slug: 'qa-outsourcing',
    title: 'QA Outsourcing',
    shortTitle: 'Manual QA',
    description:
      'Extend your testing capacity with experienced QA engineers from our cleared talent pool — fast, compliant, and cost-effective.',
    icon: 'search',
  },
  {
    id: 'automation',
    slug: 'test-automation',
    title: 'Test Automation Engineering',
    shortTitle: 'Automation',
    description:
      'Selenium, Playwright, and Cypress frameworks designed for your CI/CD pipeline. We build maintainable, scalable automation suites that accelerate your release cycles.',
    icon: 'cog',
  },
  {
    id: 'performance',
    slug: 'managed-testing',
    title: 'Managed Testing Services',
    shortTitle: 'Performance',
    description:
      'Hand off your testing operations to us — we plan, execute, and report while you stay focused on delivery and mission objectives.',
    icon: 'chart',
  },
  {
    id: 'security',
    slug: 'security-testing',
    title: 'Security Testing & Assessment',
    shortTitle: 'Security',
    description:
      'OWASP-aligned vulnerability assessments, static analysis, and penetration testing coordination. We help you achieve and maintain your Authority to Operate (ATO).',
    icon: 'shield',
  },
  {
    id: 'accessibility',
    slug: 'accessibility-testing',
    title: 'Section 508 & Accessibility',
    shortTitle: 'Accessibility',
    description:
      'Full Section 508 and WCAG 2.1 AA compliance testing for government systems. Manual and automated audits with remediation guidance and VPAT documentation support.',
    icon: 'accessibility',
  },
  {
    id: 'ivv',
    slug: 'qa-consulting-ivv',
    title: 'QA Consulting & IV&V',
    shortTitle: 'IV&V',
    description:
      'Get expert advice to improve your testing strategy, fix QA bottlenecks, and ensure systems meet federal standards through independent verification.',
    icon: 'check',
  },
] as const;

export const WHAT_SETS_US_APART = [
  'SBA 8(a) certified small business',
  'CMMI Level 3 appraised processes',
  'ISO 9001:2015 & ISO 27001 certified',
  'Secret / Top Secret cleared staff',
  'Active GSA MAS contract holder',
  'Transparent pricing, no hidden gotchas',
] as const;

export const STATS = [
  { value: '10+', label: 'Years of Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Federal Clients Served' },
  { value: '99.2%', label: 'Client Satisfaction Rate' },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We assess your current testing maturity, technology stack, compliance requirements, and quality gaps.',
  },
  {
    step: 2,
    title: 'Strategize',
    description:
      'We design a tailored test strategy aligned with your mission objectives, timelines, and risk profile.',
  },
  {
    step: 3,
    title: 'Execute',
    description:
      'Our cleared QA engineers embed with your team to deliver continuous, measurable quality improvements.',
  },
  {
    step: 4,
    title: 'Report',
    description:
      'Clear dashboards, defect analytics, and release readiness metrics keep stakeholders informed and confident.',
  },
] as const;

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'ISO 27001', description: 'Information Security Management' },
  { name: 'ISO 20000', description: 'IT Service Management' },
  { name: 'CMMI Level 3', description: 'Capability Maturity Model' },
] as const;

export const CONTRACT_VEHICLES = [
  { name: 'GSA MAS', description: 'GSA Multiple Award Schedule — IT Professional Services' },
  { name: 'CIO-SP3', description: 'NIH Chief Information Officer Solutions and Partners' },
  { name: 'Alliant 2', description: 'GSA Alliant 2 Small Business GWAC' },
  { name: 'SEWP V', description: 'NASA Solutions for Enterprise-Wide Procurement' },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      'BRYQA embedded with our development team and cut our post-release defects by 60%. They understand government timelines and compliance — they just get it.',
    author: 'Director of Engineering',
    company: 'Federal Civilian Agency',
    rating: 5,
  },
  {
    quote:
      'Their IV&V team identified critical integration issues weeks before our go-live date. That kind of thoroughness saved us from a costly production failure.',
    author: 'Program Manager',
    company: 'DoD Contractor',
    rating: 5,
  },
  {
    quote:
      'We needed Section 508 compliance testing on an aggressive timeline. BRYQA delivered a complete VPAT and remediation roadmap in under three weeks.',
    author: 'CTO',
    company: 'Health IT Organization',
    rating: 5,
  },
] as const;

export const INDUSTRIES = [
  {
    name: 'Federal Government',
    description: 'Civilian agencies, DoD, and intelligence community programs requiring cleared personnel and FISMA-compliant processes.',
    icon: 'building',
  },
  {
    name: 'Healthcare & Life Sciences',
    description: 'CMS, VA, HHS programs requiring HIPAA compliance, 21 CFR Part 11, and clinical system validation.',
    icon: 'shield',
  },
  {
    name: 'Financial Services',
    description: 'Banking, fintech, and financial regulatory systems requiring SOX compliance and high-availability testing.',
    icon: 'chart',
  },
  {
    name: 'State & Local Government',
    description: 'State agency modernization, benefits systems, and citizen-facing digital services.',
    icon: 'globe',
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: 'Bryan Reynolds',
    title: 'Founder & CEO',
    bio: 'Former federal QA lead with 15+ years delivering mission-critical testing programs across DoD and civilian agencies.',
  },
  {
    name: 'Sarah Chen',
    title: 'VP of Delivery',
    bio: 'CMMI appraiser and test strategy architect. Led QA transformation programs for three Cabinet-level agencies.',
  },
  {
    name: 'Marcus Johnson',
    title: 'Director of Automation',
    bio: 'Full-stack automation engineer specializing in CI/CD integration, Playwright, and performance testing at scale.',
  },
] as const;

export const AWARDS = [
  { name: 'Top Software Testing Company', year: '2019 — 2025' },
  { name: 'Leading Testing Provider', year: 'Recognized' },
  { name: 'ISO 9001 Certified', year: 'Quality Standard' },
  { name: 'ISO 27001 Certified', year: 'Security Standard' },
  { name: 'CMMI Level 3', year: 'Process Maturity' },
  { name: 'SBA 8(a)', year: 'Small Business' },
] as const;
