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
              <span className="text-gray-400">Recognized</span><br />
              <span className="text-dark">excellence in software testing and QA</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
              Our commitment to delivering outstanding software testing and
              quality assurance services has been recognized by{' '}
              <strong className="text-dark">industry certifications</strong>. These honors reflect not just our
              team&apos;s hard work and innovation, but also the success we&apos;ve{' '}
              <strong className="text-dark">achieved together with our partners</strong>.
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
