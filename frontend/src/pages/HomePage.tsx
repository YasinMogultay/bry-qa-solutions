import {
  Hero,
  LogoBar,
  ServicesGrid,
  HowWeWork,
  ComplianceSection,
  Testimonial,
  Recognition,
  CTABanner,
} from '../features/landing/index.ts';

export function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesGrid />
      <HowWeWork />
      <ComplianceSection />
      <Testimonial />
      <Recognition />
      <CTABanner />
    </>
  );
}
