export interface ServiceDetail {
  slug: string;
  title: string;
  intro: string;
  aboutHeading: string;
  aboutBody: string;
  icon: string;
  capabilities: { title: string; description: string }[];
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: 'test-automation',
    title: 'Test Automation Engineering',
    intro:
      'Playwright-based UI and API automation with CI quality gates that accelerate your release cycles.',
    aboutHeading: 'Automate with Confidence',
    aboutBody:
      'We build maintainable, scalable automation frameworks designed for your CI/CD pipeline. Using Playwright as our primary framework alongside Selenium and Cypress where appropriate, we create test suites that run reliably across environments, catch regressions early, and free your team to focus on exploratory and edge-case testing. Every framework follows Page Object Model patterns for long-term maintainability.',
    icon: 'cog',
    capabilities: [
      { title: 'Framework Development', description: 'Playwright, Selenium, and Cypress frameworks built for your tech stack.' },
      { title: 'CI/CD Integration', description: 'Seamless integration with GitHub Actions, Azure DevOps, and Jenkins pipelines.' },
      { title: 'API Test Automation', description: 'REST and GraphQL API testing with contract validation and schema checks.' },
      { title: 'Visual Regression', description: 'Automated screenshot comparison to catch unintended UI changes across releases.' },
      { title: 'Data-Driven Testing', description: 'Parameterized test execution across multiple datasets and configurations.' },
      { title: 'Maintainable Architecture', description: 'Page Object Model, reusable components, and clear separation of concerns.' },
    ],
  },
  {
    slug: 'api-testing',
    title: 'API & Integration Testing',
    intro:
      'REST contract validation, negative tests, authentication and error flows with automated regression suites.',
    aboutHeading: 'Reliable APIs, Validated End-to-End',
    aboutBody:
      'APIs are the backbone of modern applications, and defects at the API layer cascade into every consumer. Our API testing validates functionality, contracts, performance, and security for REST, SOAP, and GraphQL endpoints. We cover positive and negative scenarios, authentication flows, error handling, and data integrity. Automated regression suites using Postman and REST Assured integrate into your CI/CD pipeline for continuous validation.',
    icon: 'globe',
    capabilities: [
      { title: 'Contract Testing', description: 'Validate API responses against OpenAPI, WSDL, and GraphQL schemas.' },
      { title: 'Negative Testing', description: 'Invalid inputs, boundary conditions, and error response validation.' },
      { title: 'Authentication Flows', description: 'Validate OAuth, JWT, API key, and certificate-based authentication.' },
      { title: 'Integration Testing', description: 'End-to-end workflow validation across multiple services and data sources.' },
      { title: 'Automated Regression', description: 'Postman and REST Assured suites integrated into CI/CD pipelines.' },
      { title: 'Performance Profiling', description: 'API response time benchmarking and throughput testing under load.' },
    ],
  },
  {
    slug: 'manual-qa-testing',
    title: 'Manual QA & UAT',
    intro:
      'Exploratory testing, regression coverage, and release sign-off support by experienced QA engineers.',
    aboutHeading: 'Thorough, Human-Driven Quality Assurance',
    aboutBody:
      'Automated tests catch known issues, but experienced QA engineers find the ones nobody anticipated. Our manual testing covers exploratory testing, ad-hoc scenarios, usability evaluation, and user acceptance testing. We bring structured methodologies and domain knowledge to uncover defects that automation misses — edge cases, workflow issues, and user experience problems that matter in production.',
    icon: 'search',
    capabilities: [
      { title: 'Exploratory Testing', description: 'Experienced testers investigate your application beyond scripted scenarios.' },
      { title: 'Regression Testing', description: 'Systematic verification that new changes haven\'t broken existing functionality.' },
      { title: 'User Acceptance Testing', description: 'Facilitated UAT sessions with structured test scripts and stakeholder sign-off.' },
      { title: 'Usability Evaluation', description: 'Assess user workflows, navigation, and experience from an end-user perspective.' },
      { title: 'Defect Reporting', description: 'Detailed defect reports with severity classification, reproduction steps, and screenshots.' },
      { title: 'Release Sign-Off', description: 'Structured release readiness assessment and stakeholder communication.' },
    ],
  },
  {
    slug: 'qa-advisory',
    title: 'QA Advisory & Independent Validation',
    intro:
      'Test planning, risk-based coverage design, and quality reporting with independent verification.',
    aboutHeading: 'Strategic QA That Meets Federal Standards',
    aboutBody:
      'Our advisory and IV&V services help organizations improve their testing maturity, fix QA bottlenecks, and achieve compliance with federal quality standards. We provide independent verification and validation that satisfies government oversight requirements, while our consulting engagements deliver actionable roadmaps for process improvement. From test strategy design to quality metrics reporting, we help you build a QA practice that scales.',
    icon: 'check',
    capabilities: [
      { title: 'Test Strategy Design', description: 'Tailored strategies aligned with mission objectives, risk profiles, and compliance needs.' },
      { title: 'Risk-Based Coverage', description: 'Focus testing effort where it matters most based on risk and business impact.' },
      { title: 'Independent V&V', description: 'Third-party verification and validation satisfying federal oversight requirements.' },
      { title: 'Quality Reporting', description: 'Metrics dashboards and reporting that meets government stakeholder expectations.' },
      { title: 'Process Assessment', description: 'Evaluate your current QA practices against industry benchmarks and standards.' },
      { title: 'Tool Selection Guidance', description: 'Vendor-neutral recommendations for test management, automation, and defect tracking.' },
    ],
  },
  {
    slug: 'functional-testing',
    title: 'Functional & Regression Testing',
    intro:
      'Requirements traceability, cross-browser validation, and comprehensive regression suites.',
    aboutHeading: 'Validate Every Requirement, Every Release',
    aboutBody:
      'Functional testing is the backbone of software quality. Our team designs and executes test cases that trace directly to your requirements, ensuring every feature works as specified. We cover regression suites, cross-browser compatibility, and user acceptance testing, catching defects before they reach production. Our structured approach means nothing falls through the cracks.',
    icon: 'check',
    capabilities: [
      { title: 'Requirements Traceability', description: 'Every test case maps to a specific requirement for complete coverage visibility.' },
      { title: 'Regression Testing', description: 'Comprehensive regression suites that run with each release to catch side effects.' },
      { title: 'Cross-Browser Testing', description: 'Validation across Chrome, Firefox, Safari, Edge, and mobile browsers.' },
      { title: 'User Acceptance Testing', description: 'Facilitated UAT sessions with structured test scripts and stakeholder sign-off.' },
      { title: 'Defect Management', description: 'Detailed defect reports with severity classification and root cause analysis.' },
      { title: 'Test Case Design', description: 'Boundary value analysis, equivalence partitioning, and decision table techniques.' },
    ],
  },
  {
    slug: 'cicd-quality-gates',
    title: 'CI/CD Quality Gates',
    intro:
      'Shift-left quality gates in your pipeline to catch defects earlier and release faster with confidence.',
    aboutHeading: 'Quality Built Into Every Pipeline Stage',
    aboutBody:
      'Modern development demands quality at speed. We embed quality gates directly into your CI/CD pipeline so defects are caught at the earliest and cheapest stage. We configure automated test execution, quality thresholds, and feedback loops that give developers instant confidence in their changes. The result: faster releases with fewer production incidents.',
    icon: 'git-branch',
    capabilities: [
      { title: 'Pipeline Integration', description: 'Quality gates in GitHub Actions, Azure DevOps, GitLab CI, and Jenkins.' },
      { title: 'Shift-Left Testing', description: 'Unit, integration, and contract tests running on every commit.' },
      { title: 'Environment Management', description: 'Containerized test environments for consistent, reproducible results.' },
      { title: 'Test Orchestration', description: 'Parallel test execution and intelligent test selection for fast feedback.' },
      { title: 'Quality Dashboards', description: 'Real-time visibility into test results, coverage, and quality trends.' },
      { title: 'Threshold Enforcement', description: 'Automated pass/fail gates based on coverage, defect counts, and performance.' },
    ],
  },
  {
    slug: 'release-readiness',
    title: 'Release Readiness & Defect Triage',
    intro:
      'Go/no-go criteria, defect triage, risk-based release assessments, and stakeholder sign-off support.',
    aboutHeading: 'Confident Releases, Every Time',
    aboutBody:
      'Release decisions should be based on data, not guesswork. Our release readiness services provide structured go/no-go assessments backed by defect metrics, test coverage data, and risk analysis. We triage defects by severity and business impact, facilitate stakeholder sign-off, and ensure every release meets your quality bar. For federal systems, we provide the documentation and evidence trail your program office expects.',
    icon: 'chart',
    capabilities: [
      { title: 'Go/No-Go Assessment', description: 'Data-driven release decisions based on quality metrics and risk analysis.' },
      { title: 'Defect Triage', description: 'Priority-based defect classification with business impact assessment.' },
      { title: 'Release Metrics', description: 'Defect density, test coverage, and trend analysis for stakeholder reporting.' },
      { title: 'Stakeholder Sign-Off', description: 'Structured review process with evidence packages for decision makers.' },
      { title: 'Risk Assessment', description: 'Identify and communicate residual risk for informed release decisions.' },
      { title: 'Post-Release Monitoring', description: 'Production smoke testing and early defect detection after deployment.' },
    ],
  },
  {
    slug: 'performance-testing',
    title: 'Performance Testing',
    intro:
      'Load, stress, and scalability validation to ensure your systems perform under real-world conditions.',
    aboutHeading: 'Performance Under Pressure',
    aboutBody:
      'We identify bottlenecks and validate that your applications meet performance requirements before they reach production. Using JMeter and modern frameworks, we simulate real-world traffic patterns, stress-test failure scenarios, and establish performance baselines. You get clear dashboards showing exactly where your system stands and what needs attention.',
    icon: 'chart',
    capabilities: [
      { title: 'Load Testing', description: 'Simulate expected user volumes to validate response times and throughput targets.' },
      { title: 'Stress Testing', description: 'Push systems beyond capacity to understand failure modes and recovery behavior.' },
      { title: 'Capacity Planning', description: 'Data-driven sizing recommendations for infrastructure and resource allocation.' },
      { title: 'Performance Monitoring', description: 'Real-time dashboards tracking response times, throughput, and error rates.' },
      { title: 'Bottleneck Analysis', description: 'Pinpoint database queries, API calls, and infrastructure components limiting performance.' },
      { title: 'Baseline Trending', description: 'Track performance over time to catch degradation before it impacts users.' },
    ],
  },
  {
    slug: 'security-testing',
    title: 'Security Testing',
    intro:
      'OWASP-aligned vulnerability assessments and SAST/DAST analysis to support your Authority to Operate.',
    aboutHeading: 'Secure Systems, Confident Stakeholders',
    aboutBody:
      'Security testing is critical for any system handling sensitive government or commercial data. Our team performs OWASP-aligned vulnerability assessments, static and dynamic analysis, and coordinates penetration testing to identify and remediate security risks. We help you achieve and maintain your Authority to Operate (ATO) by providing the evidence and documentation your security team needs.',
    icon: 'shield',
    capabilities: [
      { title: 'Vulnerability Assessment', description: 'OWASP Top 10 focused testing to identify common and critical vulnerabilities.' },
      { title: 'Static Analysis (SAST)', description: 'Source code scanning to find security flaws before deployment.' },
      { title: 'Dynamic Analysis (DAST)', description: 'Runtime testing to discover vulnerabilities in deployed applications.' },
      { title: 'ATO Support', description: 'Security documentation and evidence packages for Authority to Operate.' },
      { title: 'Compliance Alignment', description: 'Gap analysis against FISMA, FedRAMP, and agency-specific requirements.' },
      { title: 'Remediation Guidance', description: 'Developer-friendly fix recommendations with severity-based prioritization.' },
    ],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    intro:
      'Controlled attack simulation and risk assessment to find exploitable vulnerabilities before adversaries do.',
    aboutHeading: 'Find Vulnerabilities Before Adversaries Do',
    aboutBody:
      'Our penetration testing services go beyond automated scanning to simulate real-world attack scenarios against your applications and infrastructure. Using the same techniques as adversaries, we identify exploitable vulnerabilities, test your defenses, and provide actionable findings. Every engagement includes a detailed report with risk ratings, reproduction steps, and remediation recommendations.',
    icon: 'crosshair',
    capabilities: [
      { title: 'Application Pen Testing', description: 'Web, mobile, and API penetration testing following OWASP methodologies.' },
      { title: 'Network Pen Testing', description: 'Internal and external network assessment to identify infrastructure weaknesses.' },
      { title: 'Social Engineering', description: 'Phishing simulations and awareness testing to evaluate human-factor risks.' },
      { title: 'Red Team Exercises', description: 'Full-scope adversary simulation to test detection and response capabilities.' },
      { title: 'Detailed Reporting', description: 'Executive summary and technical findings with risk ratings and proof-of-concept.' },
      { title: 'Remediation Validation', description: 'Re-testing confirmed vulnerabilities after your team applies fixes.' },
    ],
  },
  {
    slug: 'mobile-testing',
    title: 'Mobile Testing',
    intro:
      'iOS and Android testing for native, hybrid, and responsive web apps across real devices and emulators.',
    aboutHeading: 'Quality Across Every Device',
    aboutBody:
      'Mobile applications face unique challenges — fragmented device ecosystems, varying OS versions, network conditions, and touch-based interactions. Our mobile testing covers native iOS and Android apps, hybrid frameworks, and responsive web applications. Using Appium and real device labs, we validate functionality, performance, and usability across the devices your users actually use.',
    icon: 'phone',
    capabilities: [
      { title: 'Native App Testing', description: 'iOS and Android native application testing across multiple OS versions.' },
      { title: 'Hybrid App Testing', description: 'React Native, Flutter, and Ionic cross-platform app validation.' },
      { title: 'Responsive Web Testing', description: 'Mobile browser testing across screen sizes, orientations, and viewports.' },
      { title: 'Device Lab Testing', description: 'Real device testing across popular phones and tablets for authentic results.' },
      { title: 'Appium Automation', description: 'Cross-platform mobile test automation for continuous regression coverage.' },
      { title: 'Performance & Battery', description: 'Monitor app performance, memory usage, and battery consumption on mobile.' },
    ],
  },
  {
    slug: 'accessibility-testing',
    title: 'Section 508 & Accessibility',
    intro:
      'Section 508 and WCAG 2.1 AA compliance audits with remediation guidance and VPAT documentation.',
    aboutHeading: 'Accessible Software for Everyone',
    aboutBody:
      'Federal systems must be accessible to all users, including those with disabilities. Our accessibility testing covers Section 508 requirements and WCAG 2.1 AA/AAA conformance using both automated scanning and manual evaluation with assistive technologies. We deliver detailed findings, prioritized remediation guidance, and VPAT documentation to support your compliance journey.',
    icon: 'accessibility',
    capabilities: [
      { title: 'Section 508 Audits', description: 'Complete compliance audits against the Revised Section 508 Standards.' },
      { title: 'WCAG Conformance', description: 'Testing against WCAG 2.1 Level AA and AAA success criteria.' },
      { title: 'Assistive Technology', description: 'Manual testing with JAWS, NVDA, VoiceOver, and other screen readers.' },
      { title: 'VPAT Creation', description: 'Voluntary Product Accessibility Template documentation for procurement.' },
      { title: 'Remediation Guidance', description: 'Prioritized fixes with code examples and developer-friendly explanations.' },
      { title: 'Automated Scanning', description: 'Axe, WAVE, and Lighthouse integration for continuous accessibility monitoring.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export { SERVICES_DATA };
