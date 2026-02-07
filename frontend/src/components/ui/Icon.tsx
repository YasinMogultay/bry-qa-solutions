import {
  Search,
  Settings,
  BarChart3,
  ShieldCheck,
  Accessibility,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  Building2,
  Users,
  Star,
  ArrowRight,
  Globe,
  CheckCircle,
  Crosshair,
  GitBranch,
  type LucideProps,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  search: Search,
  cog: Settings,
  chart: BarChart3,
  shield: ShieldCheck,
  accessibility: Accessibility,
  check: BadgeCheck,
  phone: Phone,
  mail: Mail,
  location: MapPin,
  building: Building2,
  users: Users,
  star: Star,
  arrow: ArrowRight,
  globe: Globe,
  'check-circle': CheckCircle,
  crosshair: Crosshair,
  'git-branch': GitBranch,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: string;
  className?: string;
  'aria-label'?: string;
}

export function Icon({ name, className = 'w-6 h-6', 'aria-label': ariaLabel }: IconProps) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;

  return (
    <LucideIcon
      className={className}
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    />
  );
}
