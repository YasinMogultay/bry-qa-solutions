import { Container } from '../../../components/layout/Container.tsx';
import { Section } from '../../../components/layout/Section.tsx';
import { CONTRACT_VEHICLES, INDUSTRIES } from '../../../lib/constants.ts';
import { Icon } from '../../../components/ui/Icon.tsx';

export function ComplianceSection() {
  return (
    <Section id="industries" background="gray">
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Certifications &amp; Industries
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
            Ready for Federal Work
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            SAM.gov registered and ready to support federal contracts. We bring
            domain expertise across regulated industries with the highest compliance standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-dark mb-6 flex items-center gap-2">
              <Icon name="globe" className="w-5 h-5 text-brand-600" />
              Set-Aside Eligibility
            </h3>
            <div className="space-y-3">
              {CONTRACT_VEHICLES.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-dark">{vehicle.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{vehicle.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-dark mb-6 flex items-center gap-2">
              <Icon name="building" className="w-5 h-5 text-brand-600" />
              Industries We Serve
            </h3>
            <div className="space-y-3">
              {INDUSTRIES.map((industry) => (
                <div
                  key={industry.name}
                  className="bg-white border border-gray-100 rounded-2xl px-5 py-4"
                >
                  <div className="font-semibold text-dark">{industry.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{industry.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
