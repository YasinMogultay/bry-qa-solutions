import { render, screen } from '@testing-library/react';
import { Button } from './Button.tsx';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-brand-500');
  });

  it('applies secondary variant', () => {
    render(<Button variant="secondary">Test</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('border-gray-200');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
