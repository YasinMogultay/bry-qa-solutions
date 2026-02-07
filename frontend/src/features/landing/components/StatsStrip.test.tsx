import { render, screen } from '@testing-library/react';
import { StatsStrip } from './StatsStrip.tsx';

describe('StatsStrip', () => {
  it('renders all stats', () => {
    render(<StatsStrip />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('150+')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('99.2%')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<StatsStrip />);
    expect(screen.getByText('Years of Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects Delivered')).toBeInTheDocument();
    expect(screen.getByText('Federal Clients Served')).toBeInTheDocument();
    expect(screen.getByText('Client Satisfaction Rate')).toBeInTheDocument();
  });
});
