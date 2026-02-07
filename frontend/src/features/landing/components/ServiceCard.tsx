import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Icon } from '../../../components/ui/Icon.tsx';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
      <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-100 transition-colors">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
            Learn more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link to={href} className="block">{content}</Link>;
  }
  return content;
}
