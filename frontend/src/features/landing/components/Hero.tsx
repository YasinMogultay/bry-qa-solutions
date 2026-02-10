import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';
import { SITE, TRUSTED_BY } from '../../../lib/constants.ts';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#0a2a2f]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-navy-500 rounded-full blur-[100px]" />
      </div>

      <div className="relative py-20 md:py-28 lg:py-36">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <ShieldCheck className="w-4 h-4 text-brand-400" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                Trusted Software Testing Company
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              {SITE.headline}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {SITE.subheadline}
            </p>

            {/* Email input + CTA */}
            <form
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
              onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }}
              aria-label="Quick contact"
            >
              <input
                type="email"
                placeholder="Enter your business email"
                required
                className="w-full sm:flex-1 px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                aria-label="Business email address"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-[#0a1628]"
              >
                Book a call
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Trusted by bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-8 sm:gap-12" aria-label="Registrations">
              {TRUSTED_BY.map((name) => (
                <span key={name} className="text-lg font-bold text-gray-400 tracking-wide">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
