import { Container } from '../../../components/layout/Container.tsx';
import { Section } from '../../../components/layout/Section.tsx';
import { PROCESS_STEPS } from '../../../lib/constants.ts';

export function HowWeWork() {
  return (
    <Section id="process" background="white">
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
            A Process Built for Mission Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-px bg-brand-200" />
              )}
              <div className="relative w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
