import { Link } from 'react-router-dom';
import { SITE, SERVICES, CERTIFICATIONS } from '../../lib/constants.ts';
import { Icon } from '../ui/Icon.tsx';
import { Logo } from '../ui/Logo.tsx';

export function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Logo variant="light" className="h-9 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              SBA-certified small business delivering quality assurance and
              IV&amp;V services to federal agencies and commercial organizations.
            </p>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  className="text-xs bg-dark-card text-gray-400 px-2.5 py-1 rounded-md border border-dark-border"
                >
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/technologies" className="hover:text-white transition-colors">Technologies</Link></li>
              <li><Link to="/#industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="location" className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </span>
              </li>
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="phone" className="w-4 h-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="mail" className="w-4 h-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>DUNS: 000000000 | CAGE: 00000 | UEI: 000000000000</p>
        </div>
      </div>
    </footer>
  );
}
