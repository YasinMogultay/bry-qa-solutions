import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '../components/layout/Container.tsx';
import { Section } from '../components/layout/Section.tsx';
import { Icon } from '../components/ui/Icon.tsx';
import { SERVICES } from '../lib/constants.ts';

export function ServicesPage() {
  return (
    <>
      <section className="bg-dark py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive quality assurance and testing services tailored for
            federal agencies and mission-critical commercial systems.
          </p>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Request this service
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="lg:w-2/3 bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
                  <h3 className="font-semibold text-dark mb-4">Key Capabilities</h3>
                  <ServiceCapabilities serviceId={service.id} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-dark py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a custom QA solution?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every project is unique. Let us design a testing strategy that fits your
            mission requirements and timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors"
          >
            Book a Call
          </Link>
        </Container>
      </section>
    </>
  );
}

const CAPABILITIES: Record<string, string[]> = {
  'manual-qa': [
    'Structured exploratory testing sessions',
    'User acceptance testing (UAT) facilitation',
    'Requirements-based test case design',
    'Regression testing for each release cycle',
    'Defect triage and severity classification',
    'Cross-browser and cross-device testing',
  ],
  automation: [
    'Selenium, Playwright, and Cypress framework development',
    'CI/CD pipeline integration (Jenkins, GitHub Actions, GitLab)',
    'Page Object Model and maintainable test architecture',
    'Data-driven and keyword-driven test design',
    'API test automation (REST, SOAP, GraphQL)',
    'Automated visual regression testing',
  ],
  performance: [
    'Load testing with JMeter, Gatling, and k6',
    'Stress testing and breaking-point analysis',
    'Capacity planning and resource optimization',
    'Real-time performance monitoring dashboards',
    'Bottleneck identification and resolution guidance',
    'Performance baseline establishment and trending',
  ],
  security: [
    'OWASP Top 10 vulnerability assessment',
    'Static Application Security Testing (SAST)',
    'Dynamic Application Security Testing (DAST)',
    'Penetration testing coordination and reporting',
    'Authority to Operate (ATO) support',
    'Security compliance gap analysis (FISMA, FedRAMP)',
  ],
  accessibility: [
    'Section 508 compliance audits',
    'WCAG 2.1 AA/AAA conformance testing',
    'Assistive technology testing (JAWS, NVDA, VoiceOver)',
    'VPAT (Voluntary Product Accessibility Template) creation',
    'Remediation guidance and developer training',
    'Automated and manual accessibility scanning',
  ],
  ivv: [
    'Independent requirements validation',
    'System integration verification',
    'Acceptance test planning and execution',
    'Risk-based test prioritization',
    'CMMI-aligned process documentation',
    'Compliance reporting for government stakeholders',
  ],
};

function ServiceCapabilities({ serviceId }: { serviceId: string }) {
  const caps = CAPABILITIES[serviceId] ?? [];
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {caps.map((cap) => (
        <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
          <Check className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" aria-hidden="true" />
          {cap}
        </li>
      ))}
    </ul>
  );
}
