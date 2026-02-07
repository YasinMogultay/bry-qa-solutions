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
    slug: 'qa-outsourcing',
    title: 'QA Outsourcing',
    intro:
      'Extend your testing capacity with experienced, cleared QA engineers — fast, compliant, and cost-effective.',
    aboutHeading: 'Scale Your QA Team On Demand',
    aboutBody:
      'Our QA outsourcing model lets you augment your existing team with security-cleared professionals who integrate seamlessly into your workflows. Whether you need a single engineer for a sprint or an entire squad for a multi-year program, we provide vetted talent with domain expertise in federal and commercial systems. Every engineer follows your processes, tools, and communication standards from day one.',
    icon: 'search',
    capabilities: [
      { title: 'Cleared Talent Pool', description: 'Secret and Top Secret cleared QA professionals ready to deploy within days.' },
      { title: 'Flexible Engagement Models', description: 'Staff augmentation, managed teams, or project-based engagements tailored to your needs.' },
      { title: 'Domain Expertise', description: 'Engineers experienced in federal healthcare, defense, financial, and civilian systems.' },
      { title: 'Rapid Onboarding', description: 'Structured onboarding processes get engineers productive in your environment fast.' },
      { title: 'Quality Metrics', description: 'Transparent KPIs and regular performance reporting so you always know the value delivered.' },
      { title: 'Cost Efficiency', description: 'Reduce overhead compared to full-time hires while maintaining the same quality bar.' },
    ],
  },
  {
    slug: 'functional-testing',
    title: 'Functional Testing',
    intro:
      'Comprehensive requirements validation, regression, and compatibility testing to ensure your software works as intended.',
    aboutHeading: 'Validate Every Requirement, Every Release',
    aboutBody:
      'Functional testing is the backbone of software quality. Our team designs and executes test cases that trace directly to your requirements, ensuring every feature works as specified. We cover regression suites, cross-browser compatibility, and user acceptance testing, catching defects before they reach production. Our structured approach means nothing falls through the cracks.',
    icon: 'check',
    capabilities: [
      { title: 'Requirements Traceability', description: 'Every test case maps to a specific requirement for complete coverage visibility.' },
      { title: 'Regression Testing', description: 'Comprehensive regression suites that run with each release to catch unintended side effects.' },
      { title: 'Cross-Browser Testing', description: 'Validation across Chrome, Firefox, Safari, Edge, and mobile browsers.' },
      { title: 'User Acceptance Testing', description: 'Facilitated UAT sessions with structured test scripts and stakeholder sign-off.' },
      { title: 'Defect Management', description: 'Detailed defect reports with severity classification, reproduction steps, and root cause analysis.' },
      { title: 'Test Case Design', description: 'Boundary value analysis, equivalence partitioning, and decision table techniques.' },
    ],
  },
  {
    slug: 'test-automation',
    title: 'Test Automation',
    intro:
      'CI/CD-ready Selenium, Playwright, and Cypress suites that accelerate your release cycles and reduce manual effort.',
    aboutHeading: 'Automate with Confidence',
    aboutBody:
      'We build maintainable, scalable automation frameworks designed for your CI/CD pipeline. Using industry-leading tools like Selenium, Playwright, and Cypress, our engineers create test suites that run reliably across environments, catch regressions early, and free your team to focus on exploratory and edge-case testing. Every framework follows Page Object Model patterns for long-term maintainability.',
    icon: 'cog',
    capabilities: [
      { title: 'Framework Development', description: 'Custom Selenium, Playwright, and Cypress frameworks built for your tech stack.' },
      { title: 'CI/CD Integration', description: 'Seamless integration with Jenkins, GitHub Actions, GitLab CI, and Azure DevOps.' },
      { title: 'API Test Automation', description: 'REST, SOAP, and GraphQL API testing with contract validation and schema checks.' },
      { title: 'Visual Regression', description: 'Automated screenshot comparison to catch unintended UI changes across releases.' },
      { title: 'Data-Driven Testing', description: 'Parameterized test execution across multiple datasets and configurations.' },
      { title: 'Maintainable Architecture', description: 'Page Object Model, reusable components, and clear separation of concerns.' },
    ],
  },
  {
    slug: 'qa-consulting-ivv',
    title: 'QA Consulting & IV&V',
    intro:
      'Expert strategy, process maturity assessments, and independent verification to meet federal standards.',
    aboutHeading: 'Strategic QA That Meets Federal Standards',
    aboutBody:
      'Our consulting and IV&V services help organizations improve their testing maturity, fix QA bottlenecks, and achieve compliance with federal quality standards. We provide independent verification and validation that satisfies government oversight requirements, while our consulting engagements deliver actionable roadmaps for process improvement. Our assessors are CMMI-trained and understand the nuances of government program management.',
    icon: 'check',
    capabilities: [
      { title: 'Process Maturity Assessment', description: 'Evaluate your current QA practices against CMMI and industry benchmarks.' },
      { title: 'Test Strategy Design', description: 'Tailored strategies aligned with mission objectives, risk profiles, and compliance needs.' },
      { title: 'Independent V&V', description: 'Third-party verification and validation satisfying federal oversight requirements.' },
      { title: 'Risk-Based Prioritization', description: 'Focus testing effort where it matters most based on risk and business impact.' },
      { title: 'Compliance Reporting', description: 'Documentation and reporting that meets government stakeholder expectations.' },
      { title: 'Tool Selection Guidance', description: 'Vendor-neutral recommendations for test management, automation, and defect tracking tools.' },
    ],
  },
  {
    slug: 'performance-testing',
    title: 'Performance Testing',
    intro:
      'Load, stress, and scalability validation to ensure your systems perform under real-world conditions.',
    aboutHeading: 'Performance Under Pressure',
    aboutBody:
      'We identify bottlenecks and validate that your applications meet performance requirements before they reach production. Using tools like JMeter, Gatling, and k6, our engineers simulate real-world traffic patterns, stress-test failure scenarios, and establish performance baselines. You get clear dashboards showing exactly where your system stands and what needs attention.',
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
    slug: 'managed-testing',
    title: 'Managed Testing Services',
    intro:
      'End-to-end test operations managed by us — you stay focused on delivery and mission objectives.',
    aboutHeading: 'Your Testing, Fully Managed',
    aboutBody:
      'Hand off your entire testing operation to our team. We plan test strategies, design and execute test cases, manage defects, and deliver release readiness reports — all while you focus on development and delivery. Our managed service model provides predictable costs, consistent quality, and full transparency through regular reporting and stakeholder updates.',
    icon: 'chart',
    capabilities: [
      { title: 'Test Planning & Design', description: 'Complete test planning, case design, and execution managed by our team.' },
      { title: 'Defect Management', description: 'Full lifecycle defect tracking with severity classification and trend analysis.' },
      { title: 'Release Readiness', description: 'Go/no-go recommendations backed by quality metrics and risk assessments.' },
      { title: 'Regular Reporting', description: 'Weekly status reports and dashboards keeping stakeholders informed and confident.' },
      { title: 'Tool Management', description: 'We configure, maintain, and optimize your test management and automation tools.' },
      { title: 'Predictable Costs', description: 'Fixed-price or time-and-materials models with transparent, no-surprise billing.' },
    ],
  },
  {
    slug: 'accessibility-testing',
    title: 'Accessibility Testing',
    intro:
      'Section 508 and WCAG 2.1 AA compliance audits with remediation guidance and VPAT documentation support.',
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
  {
    slug: 'compliance-testing',
    title: 'Compliance Testing',
    intro:
      'FISMA, HIPAA, and GDPR standards validation to ensure your systems meet regulatory requirements.',
    aboutHeading: 'Meet Every Regulatory Standard',
    aboutBody:
      'Regulatory compliance is non-negotiable for government and healthcare systems. Our compliance testing validates that your applications meet FISMA, HIPAA, GDPR, and other regulatory frameworks. We identify gaps, provide evidence for audit readiness, and work with your team to close findings before they become issues. Our assessors understand the intersection of technology and regulation.',
    icon: 'shield',
    capabilities: [
      { title: 'FISMA Compliance', description: 'Validate security controls against NIST SP 800-53 and FISMA requirements.' },
      { title: 'HIPAA Validation', description: 'Test PHI handling, access controls, and audit logging for healthcare systems.' },
      { title: 'GDPR Assessment', description: 'Data privacy validation including consent management and right-to-erasure.' },
      { title: 'Audit Evidence', description: 'Generate compliance artifacts and documentation for auditor review.' },
      { title: 'Gap Analysis', description: 'Identify compliance gaps with prioritized remediation recommendations.' },
      { title: 'Continuous Monitoring', description: 'Ongoing compliance checks integrated into your development pipeline.' },
    ],
  },
  {
    slug: 'security-testing',
    title: 'Security Testing',
    intro:
      'OWASP-aligned vulnerability assessments and security analysis to achieve and maintain your Authority to Operate.',
    aboutHeading: 'Secure Systems, Confident Stakeholders',
    aboutBody:
      'Security testing is critical for any system handling sensitive government or commercial data. Our team performs OWASP-aligned vulnerability assessments, static and dynamic analysis, and coordinates penetration testing to identify and remediate security risks. We help you achieve and maintain your Authority to Operate (ATO) by providing the evidence and documentation your security team needs.',
    icon: 'shield',
    capabilities: [
      { title: 'Vulnerability Assessment', description: 'OWASP Top 10 focused testing to identify common and critical vulnerabilities.' },
      { title: 'Static Analysis (SAST)', description: 'Source code scanning to find security flaws before deployment.' },
      { title: 'Dynamic Analysis (DAST)', description: 'Runtime testing to discover vulnerabilities in deployed applications.' },
      { title: 'ATO Support', description: 'Security documentation and evidence packages for Authority to Operate.' },
      { title: 'Security Compliance', description: 'Gap analysis against FISMA, FedRAMP, and agency-specific requirements.' },
      { title: 'Remediation Guidance', description: 'Developer-friendly fix recommendations with severity-based prioritization.' },
    ],
  },
  {
    slug: 'penetration-testing',
    title: 'Penetration Testing',
    intro:
      'Controlled attack simulation and risk assessment to identify exploitable vulnerabilities before adversaries do.',
    aboutHeading: 'Find Vulnerabilities Before Adversaries Do',
    aboutBody:
      'Our penetration testing services go beyond automated scanning to simulate real-world attack scenarios against your applications and infrastructure. Certified ethical hackers use the same techniques as adversaries to identify exploitable vulnerabilities, test your defenses, and provide actionable findings. Every engagement includes a detailed report with risk ratings, reproduction steps, and remediation recommendations.',
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
    slug: 'devops-testing',
    title: 'DevOps Testing',
    intro:
      'Shift-left quality gates in your CI/CD pipeline to catch defects earlier and release faster with confidence.',
    aboutHeading: 'Quality Built Into Every Pipeline Stage',
    aboutBody:
      'Modern development demands quality at speed. Our DevOps testing services embed quality gates directly into your CI/CD pipeline so defects are caught at the earliest and cheapest stage. We configure automated test execution, quality thresholds, and feedback loops that give developers instant confidence in their changes. The result: faster releases with fewer production incidents.',
    icon: 'git-branch',
    capabilities: [
      { title: 'Pipeline Integration', description: 'Quality gates in Jenkins, GitHub Actions, GitLab CI, and Azure DevOps.' },
      { title: 'Shift-Left Testing', description: 'Unit, integration, and contract tests running on every commit.' },
      { title: 'Environment Management', description: 'Containerized test environments for consistent, reproducible results.' },
      { title: 'Test Orchestration', description: 'Parallel test execution and intelligent test selection for fast feedback.' },
      { title: 'Quality Dashboards', description: 'Real-time visibility into test results, coverage, and quality trends.' },
      { title: 'Infrastructure as Code', description: 'Test infrastructure defined and version-controlled alongside application code.' },
    ],
  },
  {
    slug: 'dedicated-qa-team',
    title: 'Dedicated QA Team',
    intro:
      'A full-time QA squad embedded in your workflow — your team, your tools, our expertise.',
    aboutHeading: 'Your Dedicated QA Squad',
    aboutBody:
      'Get a fully dedicated QA team that works exclusively on your projects, embedded in your workflows and using your tools. Unlike staff augmentation, a dedicated team comes with built-in leadership, processes, and accountability. We handle hiring, training, and retention so you get consistent quality without the management overhead. Your dedicated squad grows with you as your needs evolve.',
    icon: 'users',
    capabilities: [
      { title: 'Exclusive Team', description: 'Engineers dedicated solely to your projects — no shared resources or divided attention.' },
      { title: 'Built-In Leadership', description: 'QA lead manages the team, processes, and stakeholder communication.' },
      { title: 'Your Tools & Processes', description: 'The team uses your existing tools, workflows, and communication channels.' },
      { title: 'Flexible Scaling', description: 'Scale the team up or down as project demands change.' },
      { title: 'Knowledge Retention', description: 'Long-term engagement means deep domain expertise that compounds over time.' },
      { title: 'Managed Operations', description: 'We handle hiring, training, performance management, and retention.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export { SERVICES_DATA };
