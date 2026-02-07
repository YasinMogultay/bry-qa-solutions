import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
}

const variantStyles = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border border-gray-200',
};

export function Card({
  variant = 'bordered',
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
