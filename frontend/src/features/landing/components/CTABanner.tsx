import { ArrowRight } from 'lucide-react';
import { Container } from '../../../components/layout/Container.tsx';

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/30 to-brand-100/20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-500/10 to-transparent" />

      <Container className="relative py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-dark tracking-tight leading-tight">
            Ready to elevate your<br className="hidden md:block" /> software quality?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Let&apos;s work together to deliver exceptional products that delight your customers
            and drive your business forward.
          </p>

          {/* Email input + CTA */}
          <form
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
            onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }}
            aria-label="Get started"
          >
            <input
              type="email"
              placeholder="Enter your business email"
              required
              className="w-full sm:flex-1 px-5 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent shadow-sm"
              aria-label="Business email address"
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
            >
              Book a call
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
