import { Check } from 'lucide-react';
import { Container } from '../components/layout/Container.tsx';
import { Section } from '../components/layout/Section.tsx';
import { Icon } from '../components/ui/Icon.tsx';
import { ContactForm } from '../features/contact/index.ts';
import { SITE } from '../lib/constants.ts';

export function ContactPage() {
  return (
    <>
      <section className="bg-dark py-16 md:py-20">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Tell us about your project. We respond within one business day
            with a tailored QA strategy and a no-obligation quote.
          </p>
        </Container>
      </section>

      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-dark mb-6">
                  Request a Quote
                </h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-dark mb-4">Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Icon name="location" className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                    <span className="text-gray-600">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                    </span>
                  </li>
                  <li>
                    <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-600">
                      <Icon name="phone" className="w-5 h-5 text-brand-600 shrink-0" />
                      {SITE.phone}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-600">
                      <Icon name="mail" className="w-5 h-5 text-brand-600 shrink-0" />
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6">
                <h3 className="font-semibold text-dark mb-3">Why Choose BRYQA?</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {[
                    'SAM.gov registration pending',
                    'Security clearance obtainable personnel',
                    'Federal compliance expertise',
                    'Founder-led, hands-on delivery',
                    'Response within 1 business day',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
