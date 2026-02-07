import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container.tsx';
import { Section } from '../components/layout/Section.tsx';
import { Icon } from '../components/ui/Icon.tsx';
import { SITE, CERTIFICATIONS } from '../lib/constants.ts';

export function AboutPage() {
  return (
    <>
      <section className="bg-dark py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About {SITE.name}
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A mission-driven QA partner delivering excellence for federal agencies
            and commercial organizations since 2014.
          </p>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl font-bold text-dark mb-6">
                To evaluate, collaborate, and innovate with our customers
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  {SITE.name} was founded on a simple principle: government agencies and
                  commercial organizations deserve the same caliber of quality assurance
                  that the most demanding technology companies expect.
                </p>
                <p>
                  We combine deep domain expertise in federal IT compliance with modern
                  testing practices to deliver measurable quality improvements. Our team
                  of cleared QA professionals embeds directly with your development teams,
                  bringing structured processes and a relentless focus on defect prevention.
                </p>
                <p>
                  As an SBA-certified small business, we are agile enough to move fast
                  and experienced enough to meet the most rigorous government standards.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-dark mb-6">Company Snapshot</h3>
              <dl className="space-y-4">
                {[
                  { label: 'Founded', value: '2026' },
                  { label: 'Headquarters', value: 'DFW,TX' },
                  { label: 'Employees', value: '2+' },
                  { label: 'Security Clearances', value: 'Public Trust (Others Obtainable)' },
                  { label: 'SBA Certifications', value: '8(a), SDB, HUBZone' },
                  { label: 'NAICS Codes', value: '541511, 541512, 541519' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start gap-4 text-sm">
                    <dt className="text-gray-500 font-medium">{item.label}</dt>
                    <dd className="text-dark font-semibold text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark tracking-tight">
              SBA Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center"
              >
                <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Icon name="check" className="w-5 h-5" />
                </div>
                <p className="font-semibold text-dark text-sm">{cert.name}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-dark py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with {SITE.name}
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you are a prime contractor seeking a trusted QA subcontractor or an
            agency looking for independent IV&amp;V, we are ready to support your mission.
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
