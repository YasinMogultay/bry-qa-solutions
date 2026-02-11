import { render, screen } from '@testing-library/react';
import { StatsStrip } from './StatsStrip.tsx';

describe('StatsStrip', () => {
  it('renders all stats', () => {
    render(<StatsStrip />);
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('SAM')).toBeInTheDocument();
    expect(screen.getByText('541512')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<StatsStrip />);
    expect(screen.getByText('Years Combined QA Experience')).toBeInTheDocument();
    expect(screen.getByText('SAM.gov Registration Pending')).toBeInTheDocument();
    expect(screen.getByText('Primary NAICS Code')).toBeInTheDocument();
    expect(screen.getByText('Founder-Led Delivery')).toBeInTheDocument();
  });
});
