import { Check } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';
import { HERO_STATS, WHAT_SETS_US_APART } from '../../../lib/constants.ts';

export function LogoBar() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-dark tracking-tight text-center mb-14 leading-tight">
          What sets us apart
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Stats cards - 2x2 grid */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="lg:col-span-2 bg-brand-50 rounded-2xl p-6 md:p-8 border border-brand-100">
            <ul className="space-y-4" aria-label="Key differentiators">
              {WHAT_SETS_US_APART.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-dark leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
