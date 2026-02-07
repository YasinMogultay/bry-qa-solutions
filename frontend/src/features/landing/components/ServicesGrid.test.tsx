import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ServicesGrid } from './ServicesGrid.tsx';

describe('ServicesGrid', () => {
  it('renders section heading', () => {
    render(
      <MemoryRouter>
        <ServicesGrid />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Our QA and software/)).toBeInTheDocument();
  });

  it('renders all 6 service cards', () => {
    render(
      <MemoryRouter>
        <ServicesGrid />
      </MemoryRouter>,
    );
    expect(screen.getByText('QA Outsourcing')).toBeInTheDocument();
    expect(screen.getByText('Test Automation Engineering')).toBeInTheDocument();
    expect(screen.getByText('Managed Testing Services')).toBeInTheDocument();
    expect(screen.getByText('Security Testing & Assessment')).toBeInTheDocument();
    expect(screen.getByText('Section 508 & Accessibility')).toBeInTheDocument();
    expect(screen.getByText('QA Consulting & IV&V')).toBeInTheDocument();
  });
});
