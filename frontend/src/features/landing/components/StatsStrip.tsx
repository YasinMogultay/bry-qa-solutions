import { Container } from '../../../components/layout/Container.tsx';
import { STATS } from '../../../lib/constants.ts';

export function StatsStrip() {
  return (
    <section className="py-14 bg-dark">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
