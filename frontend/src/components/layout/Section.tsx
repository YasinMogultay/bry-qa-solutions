import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: 'white' | 'gray' | 'dark';
}

const bgStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  dark: 'bg-dark text-white',
};

export function Section({
  background = 'white',
  className = '',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 lg:py-32 ${bgStyles[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
