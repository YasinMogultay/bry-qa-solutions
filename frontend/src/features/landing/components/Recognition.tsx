import { BadgeCheck } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';
import { Section } from '../../../components/layout/Section.tsx';
import { AWARDS } from '../../../lib/constants.ts';

export function Recognition() {
  return (
    <Section background="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              <span className="text-gray-400">Certified</span><br />
              <span className="text-dark">small business ready for federal work</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
              As an SBA-certified small business, BRYQA is eligible for{' '}
              <strong className="text-dark">sole-source and set-aside contracts</strong> across
              federal agencies. Our certifications give prime contractors and
              government buyers a{' '}
              <strong className="text-dark">trusted, compliant QA partner</strong>.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3">
              {AWARDS.map((award, index) => (
                <div
                  key={award.name}
                  className={`rounded-2xl p-5 flex flex-col items-center justify-center text-center ${
                    index === 0
                      ? 'bg-brand-500 text-white'
                      : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${
                    index === 0 ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    <BadgeCheck className={`w-5 h-5 ${index === 0 ? 'text-white' : 'text-gray-400'}`} aria-hidden="true" />
                  </div>
                  <p className={`text-xs font-semibold ${index === 0 ? 'text-white' : 'text-dark'}`}>
                    {award.name}
                  </p>
                  <p className={`text-[10px] mt-0.5 ${index === 0 ? 'text-white/70' : 'text-gray-400'}`}>
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
