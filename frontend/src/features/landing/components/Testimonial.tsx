import { Star } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';
import { Section } from '../../../components/layout/Section.tsx';
import { TESTIMONIALS } from '../../../lib/constants.ts';

export function Testimonial() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Client Success
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
            Trusted by Mission-Critical Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-brand-500 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-semibold text-dark text-sm">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
