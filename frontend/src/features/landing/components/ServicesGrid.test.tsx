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

  it('renders all service cards', () => {
    render(
      <MemoryRouter>
        <ServicesGrid />
      </MemoryRouter>,
    );
    expect(screen.getByText('Test Automation Engineering')).toBeInTheDocument();
    expect(screen.getByText('API & Integration Testing')).toBeInTheDocument();
    expect(screen.getByText('Manual QA & UAT')).toBeInTheDocument();
    expect(screen.getByText('Security Testing')).toBeInTheDocument();
    expect(screen.getByText('Section 508 & Accessibility')).toBeInTheDocument();
    expect(screen.getByText('QA Advisory & Independent Validation')).toBeInTheDocument();
  });
});
