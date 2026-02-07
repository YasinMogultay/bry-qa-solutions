import type { LeadRequest } from '../types.ts';

export async function submitLead(data: LeadRequest): Promise<void> {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form. Please try again.');
  }
}
