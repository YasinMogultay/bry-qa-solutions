import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';
import { SERVICES } from '../../../lib/constants.ts';
import { Icon } from '../../../components/ui/Icon.tsx';

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-dark tracking-tight leading-tight">
            Our QA and software<br className="hidden md:block" /> testing services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Build high-quality, bug-free software with our comprehensive suite of testing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group block bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
            >
              {/* Illustration area */}
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-500">
                  <Icon name={service.icon} className="w-8 h-8" aria-label={service.title} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
