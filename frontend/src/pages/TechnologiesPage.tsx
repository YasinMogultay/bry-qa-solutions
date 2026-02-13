import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container.tsx';
import { Section } from '../components/layout/Section.tsx';
import { Icon } from '../components/ui/Icon.tsx';
import { TECHNOLOGIES } from '../lib/technologies-data.ts';

export function TechnologiesPage() {
  return (
    <>
      <section className="bg-dark py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technologies We Use
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Industry-leading tools and frameworks across the full QA lifecycle —
            from test automation to security, performance, and CI/CD.
          </p>
        </Container>
      </section>

      <Section background="white">
        <Container>
          <div className="space-y-16">
            {TECHNOLOGIES.map((category) => (
              <div key={category.slug} id={category.slug}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                    <Icon name={category.icon} className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark">
                    {category.title}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-gray-50 rounded-xl border border-gray-100 p-5"
                    >
                      <h3 className="text-sm font-semibold text-dark mb-1">
                        {tech.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-dark py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need expertise with a specific tool?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our engineers are trained and experienced across this full stack.
            Tell us about your project and we'll match the right expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors"
          >
            Get In Touch
          </Link>
        </Container>
      </section>
    </>
  );
}
