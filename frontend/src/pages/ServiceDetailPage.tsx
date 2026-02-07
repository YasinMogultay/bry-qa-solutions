import { useParams, Navigate, Link } from 'react-router-dom';
import { Container } from '../components/layout/Container.tsx';
import { Section } from '../components/layout/Section.tsx';
import { Icon } from '../components/ui/Icon.tsx';
import { getServiceBySlug } from '../lib/services-data.ts';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-16 md:py-24">
        <Container className="text-center">
          <div className="w-16 h-16 bg-brand-500/20 text-brand-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name={service.icon} className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            {service.intro}
          </p>
        </Container>
      </section>

      {/* About */}
      <Section background="white">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-dark mb-6">
            {service.aboutHeading}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {service.aboutBody}
          </p>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section background="gray">
        <Container>
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {cap.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-dark py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Tell us about your project and we'll design a {service.title.toLowerCase()} solution
            tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors"
          >
            Request a Quote
          </Link>
        </Container>
      </section>
    </>
  );
}
