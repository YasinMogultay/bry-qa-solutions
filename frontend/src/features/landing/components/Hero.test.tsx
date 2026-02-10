import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero.tsx';

describe('Hero', () => {
  it('renders the headline', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(
      screen.getByText('QA Engineering for Federal Contractors and High-Stakes Software Teams'),
    ).toBeInTheDocument();
  });

  it('renders the trust badge', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(
      screen.getByText('Trusted Software Testing Company'),
    ).toBeInTheDocument();
  });

  it('renders the Book a call CTA', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(screen.getByText('Book a call')).toBeInTheDocument();
  });
});
