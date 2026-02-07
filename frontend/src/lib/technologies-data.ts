export interface Technology {
  name: string;
  description: string;
}

export interface TechnologyCategory {
  slug: string;
  title: string;
  icon: string;
  technologies: Technology[];
}

export const TECHNOLOGIES: TechnologyCategory[] = [
  {
    slug: 'test-automation',
    title: 'Test Automation',
    icon: 'cog',
    technologies: [
      { name: 'Selenium', description: 'Cross-platform web automation supporting multiple languages and browsers' },
      { name: 'Playwright', description: 'Modern framework for reliable end-to-end testing of complex web apps' },
      { name: 'Cypress', description: 'Developer-friendly framework with fast feedback and built-in debugging' },
      { name: 'WebdriverIO', description: 'Node.js automation framework with extensive plugin ecosystem' },
    ],
  },
  {
    slug: 'mobile-testing',
    title: 'Mobile Testing',
    icon: 'globe',
    technologies: [
      { name: 'Appium', description: 'Cross-platform mobile automation using the WebDriver protocol' },
      { name: 'XCUITest', description: 'Apple native iOS testing framework integrated with Xcode' },
      { name: 'Espresso', description: 'Google native Android testing framework with high reliability' },
      { name: 'Detox', description: 'React Native end-to-end testing for iOS and Android' },
    ],
  },
  {
    slug: 'api-testing',
    title: 'API Testing',
    icon: 'arrow',
    technologies: [
      { name: 'Postman', description: 'Collaborative API testing with scripting and automated collections' },
      { name: 'REST Assured', description: 'Java DSL for testing RESTful APIs with fluent assertions' },
      { name: 'SoapUI', description: 'Enterprise SOAP and REST API testing with protocol-level coverage' },
      { name: 'Karate', description: 'Unified API testing, performance testing, and mock server framework' },
    ],
  },
  {
    slug: 'performance-load',
    title: 'Performance & Load Testing',
    icon: 'chart',
    technologies: [
      { name: 'JMeter', description: 'Industry-standard open-source load testing and performance measurement' },
      { name: 'Gatling', description: 'High-performance load testing with non-blocking architecture' },
      { name: 'k6', description: 'Developer-centric load testing designed for CI/CD pipelines' },
      { name: 'Locust', description: 'Python-based distributed load testing with code-defined scenarios' },
    ],
  },
  {
    slug: 'security-testing',
    title: 'Security Testing',
    icon: 'shield',
    technologies: [
      { name: 'OWASP ZAP', description: 'Open-source dynamic application security testing with CI/CD support' },
      { name: 'Burp Suite', description: 'Industry-standard platform for penetration testing and vulnerability scanning' },
      { name: 'SonarQube', description: 'Static code analysis for detecting vulnerabilities early in development' },
    ],
  },
  {
    slug: 'bdd-methodology',
    title: 'BDD & Test Methodology',
    icon: 'check',
    technologies: [
      { name: 'Cucumber', description: 'Cross-language BDD framework using Gherkin plain-language syntax' },
      { name: 'pytest / pytest-bdd', description: 'Python testing with optional BDD plugin for behavior-driven scenarios' },
      { name: 'JUnit 5', description: 'Modern Java testing framework for unit, integration, and parameterized tests' },
      { name: 'TestNG', description: 'Flexible Java testing framework with advanced configuration and parallel execution' },
      { name: 'SpecFlow', description: '.NET BDD framework using Gherkin for C# development teams' },
    ],
  },
  {
    slug: 'cicd-devops',
    title: 'CI/CD & DevOps',
    icon: 'git-branch',
    technologies: [
      { name: 'Jenkins', description: 'Enterprise automation server for complex pipelines and compliance workflows' },
      { name: 'GitHub Actions', description: 'Cloud-native CI/CD integrated directly with GitHub repositories' },
      { name: 'GitLab CI', description: 'Complete DevOps platform with built-in security scanning' },
      { name: 'Docker', description: 'Containerized test environments for consistent, reproducible results' },
    ],
  },
  {
    slug: 'test-management',
    title: 'Test Management',
    icon: 'check-circle',
    technologies: [
      { name: 'Jira', description: 'Issue tracking and project management with test management plugins' },
      { name: 'TestRail', description: 'Dedicated test case management with CI/CD integrations' },
      { name: 'Zephyr', description: 'Jira-native test management for manual and automated workflows' },
      { name: 'qTest', description: 'Enterprise test management for regulated environments' },
    ],
  },
];
