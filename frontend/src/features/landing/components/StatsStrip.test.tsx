import { render, screen } from '@testing-library/react';
import { StatsStrip } from './StatsStrip.tsx';

describe('StatsStrip', () => {
  it('renders all stats', () => {
    render(<StatsStrip />);
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('8(a)')).toBeInTheDocument();
    expect(screen.getByText('HUBZone')).toBeInTheDocument();
    expect(screen.getByText('SDB')).toBeInTheDocument();
  });

  it('renders stat labels', () => {
    render(<StatsStrip />);
    expect(screen.getByText('Years Combined QA Experience')).toBeInTheDocument();
    expect(screen.getByText('SBA Certified Small Business')).toBeInTheDocument();
    expect(screen.getByText('Certified HUBZone Business')).toBeInTheDocument();
    expect(screen.getByText('Small Disadvantaged Business')).toBeInTheDocument();
  });
});
