export const SITE = {
  name: 'BRYQA',
  legalName: 'Bry Tech Solutions LLC',
  tagline: 'Founder-led QA Engineering',
  headline: 'QA Engineering for Federal Contractors and High-Stakes Software Teams',
  subheadline: 'We provide automation, API, regression, and UAT support to reduce defects, shorten validation cycles, and improve release readiness.',
  description:
    'BRYQA is a small business delivering quality assurance, test automation, and independent verification & validation services to federal agencies and commercial organizations.',
  email: 'info@bryqasolutions.com',
  phone: '(210) 740-8829',
  address: {
    street: 'Madison Ct',
    city: 'Celina',
    state: 'TX',
    zip: '75009',
  },
} as const;

export const NAV_LINKS = [
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        group: 'Core Testing',
        items: [
          { label: 'Test Automation', href: '/services/test-automation', description: 'Playwright-based UI/API automation with CI quality gates' },
          { label: 'API & Integration Testing', href: '/services/api-testing', description: 'REST contract validation, negative tests, auth/error flows' },
          { label: 'Manual QA & UAT', href: '/services/manual-qa-testing', description: 'Exploratory, regression, release sign-off support' },
          { label: 'Functional & Regression', href: '/services/functional-testing', description: 'Requirements traceability & cross-browser validation' },
        ],
      },
      {
        group: 'Specialized Testing',
        items: [
          { label: 'Performance Testing', href: '/services/performance-testing', description: 'Load, stress, and scalability validation' },
          { label: 'Security Testing', href: '/services/security-testing', description: 'OWASP-aligned vulnerability assessments' },
          { label: 'Penetration Testing', href: '/services/penetration-testing', description: 'Controlled attack simulation & risk assessment' },
          { label: 'Mobile Testing', href: '/services/mobile-testing', description: 'iOS & Android native, hybrid & responsive testing' },
        ],
      },
      {
        group: 'Strategy & Compliance',
        items: [
          { label: 'QA Advisory & IV&V', href: '/services/qa-advisory', description: 'Test planning, risk-based coverage, quality reporting' },
          { label: 'CI/CD Quality Gates', href: '/services/cicd-quality-gates', description: 'Shift-left quality gates in your CI/CD pipeline' },
          { label: 'Release Readiness', href: '/services/release-readiness', description: 'Defect triage, go/no-go criteria & sign-off support' },
          { label: 'Accessibility (508)', href: '/services/accessibility-testing', description: 'Section 508 & WCAG 2.1 AA compliance audits' },
        ],
      },
    ],
  },
  {
    label: 'Technologies',
    href: '/technologies',
    children: [
      {
        group: 'Automation & API',
        items: [
          { label: 'Playwright', href: '/technologies#test-automation', description: 'Modern end-to-end UI & API testing' },
          { label: 'Selenium', href: '/technologies#test-automation', description: 'Cross-platform web automation' },
          { label: 'Postman / REST Assured', href: '/technologies#api-testing', description: 'API testing and contract validation' },
          { label: 'Appium', href: '/technologies#mobile-testing', description: 'Cross-platform mobile automation' },
        ],
      },
      {
        group: 'Frameworks & Quality',
        items: [
          { label: 'JUnit 5 / pytest', href: '/technologies#bdd-methodology', description: 'Test frameworks for Java & Python' },
          { label: 'JMeter', href: '/technologies#performance-load', description: 'Load and performance testing' },
          { label: 'SonarQube', href: '/technologies#security-testing', description: 'Static analysis & code quality gates' },
          { label: 'OWASP ZAP', href: '/technologies#security-testing', description: 'Application security scanning' },
        ],
      },
      {
        group: 'DevOps & Management',
        items: [
          { label: 'GitHub Actions / Azure DevOps', href: '/technologies#cicd-devops', description: 'CI/CD pipeline automation' },
          { label: 'Docker', href: '/technologies#cicd-devops', description: 'Containerized test environments' },
          { label: 'Jira / Azure Boards', href: '/technologies#test-management', description: 'Project & defect management' },
          { label: 'TestRail / Zephyr', href: '/technologies#test-management', description: 'Test case management' },
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
          { label: 'Registrations', href: '/about', description: 'SAM.gov, NAICS codes & compliance' },
          { label: 'Contact', href: '/contact', description: 'Get in touch with our team' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
] as const;

export const HERO_STATS = [
  { value: '15+', label: 'years of combined QA experience' },
  { value: 'SAM', label: 'registered small business' },
  { value: '100%', label: 'founder-led engagement on every project' },
  { value: '508', label: 'Section 508 & WCAG accessibility expertise' },
] as const;

export const TRUSTED_BY = [
  'SAM.gov Registered',
] as const;

export const SERVICES = [
  {
    id: 'automation',
    slug: 'test-automation',
    title: 'Test Automation Engineering',
    shortTitle: 'Automation',
    description:
      'Playwright-based UI and API automation with CI quality gates. Maintainable frameworks that accelerate your release cycles.',
    icon: 'cog',
  },
  {
    id: 'api',
    slug: 'api-testing',
    title: 'API & Integration Testing',
    shortTitle: 'API',
    description:
      'REST contract validation, negative tests, authentication and error flows. Automated regression suites for continuous confidence.',
    icon: 'globe',
  },
  {
    id: 'manual-qa',
    slug: 'manual-qa-testing',
    title: 'Manual QA & UAT',
    shortTitle: 'Manual QA',
    description:
      'Exploratory testing, regression coverage, and release sign-off support by experienced QA engineers.',
    icon: 'search',
  },
  {
    id: 'advisory',
    slug: 'qa-advisory',
    title: 'QA Advisory & Independent Validation',
    shortTitle: 'QA Advisory',
    description:
      'Test planning, risk-based coverage design, and quality reporting. Independent verification that satisfies federal oversight.',
    icon: 'check',
  },
  {
    id: 'functional',
    slug: 'functional-testing',
    title: 'Functional & Regression Testing',
    shortTitle: 'Functional',
    description:
      'Requirements traceability, cross-browser validation, and comprehensive regression suites to ensure every feature works as specified.',
    icon: 'check',
  },
  {
    id: 'cicd',
    slug: 'cicd-quality-gates',
    title: 'CI/CD Quality Gates',
    shortTitle: 'CI/CD',
    description:
      'Shift-left quality gates in your pipeline to catch defects earlier. Automated test execution, thresholds, and fast feedback loops.',
    icon: 'git-branch',
  },
  {
    id: 'release',
    slug: 'release-readiness',
    title: 'Release Readiness & Defect Triage',
    shortTitle: 'Release',
    description:
      'Go/no-go criteria, defect triage, risk-based release assessments, and stakeholder sign-off support.',
    icon: 'chart',
  },
  {
    id: 'performance',
    slug: 'performance-testing',
    title: 'Performance Testing',
    shortTitle: 'Performance',
    description:
      'Load, stress, and scalability validation using JMeter to ensure your systems perform under real-world conditions.',
    icon: 'chart',
  },
  {
    id: 'security',
    slug: 'security-testing',
    title: 'Security Testing',
    shortTitle: 'Security',
    description:
      'OWASP-aligned vulnerability assessments, SAST/DAST analysis to identify risks and support your Authority to Operate.',
    icon: 'shield',
  },
  {
    id: 'pentest',
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    shortTitle: 'Pen Testing',
    description:
      'Controlled attack simulation and risk assessment to find exploitable vulnerabilities before adversaries do.',
    icon: 'crosshair',
  },
  {
    id: 'mobile',
    slug: 'mobile-testing',
    title: 'Mobile Testing',
    shortTitle: 'Mobile',
    description:
      'iOS and Android testing for native, hybrid, and responsive web apps using Appium and real device labs.',
    icon: 'phone',
  },
  {
    id: 'accessibility',
    slug: 'accessibility-testing',
    title: 'Section 508 & Accessibility',
    shortTitle: 'Accessibility',
    description:
      'Section 508 and WCAG 2.1 AA compliance testing. Manual and automated audits with remediation guidance.',
    icon: 'accessibility',
  },
] as const;

export const WHAT_SETS_US_APART = [
  'SAM.gov registered small business',
  'Security clearance obtainable personnel',
  'Founder-led, hands-on delivery',
  'Federal compliance expertise (FISMA, HIPAA)',
  'Agile small business responsiveness',
  'Transparent pricing, no hidden fees',
] as const;

export const STATS = [
  { value: '15+', label: 'Years Combined QA Experience' },
  { value: 'SAM', label: 'SAM.gov Registered Entity' },
  { value: '541512', label: 'Primary NAICS Code' },
  { value: '100%', label: 'Founder-Led Delivery' },
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
  { name: 'SAM.gov', description: 'System for Award Management — registered entity' },
  { name: 'NAICS 541512', description: 'Computer Systems Design Services (Primary)' },
  { name: 'NAICS 541511', description: 'Custom Computer Programming Services' },
  { name: 'NAICS 541519', description: 'Other Computer Related Services' },
  { name: 'NAICS 541611', description: 'Administrative Management Consulting Services' },
] as const;

export const CONTRACT_VEHICLES = [
  { name: 'SAM.gov', description: 'Registered and active in System for Award Management' },
  { name: 'NAICS 541512', description: 'Computer Systems Design Services (Primary)' },
  { name: 'NAICS 541511', description: 'Custom Computer Programming Services' },
  { name: 'NAICS 541519', description: 'Other Computer Related Services' },
  { name: 'NAICS 541611', description: 'Administrative Management Consulting Services' },
] as const;

export const TESTIMONIALS: readonly { quote: string; author: string; company: string; rating: number }[] = [];

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
    bio: 'QA professional with 15+ years of experience delivering mission-critical testing programs for federal agencies and commercial organizations.',
  },
] as const;

export const AWARDS = [
  { name: 'SAM.gov', year: 'Registered' },
  { name: 'NAICS 541512', year: 'Primary' },
  { name: 'NAICS 541511', year: 'Active' },
  { name: 'NAICS 541519', year: 'Active' },
  { name: 'NAICS 541611', year: 'Active' },
] as const;
