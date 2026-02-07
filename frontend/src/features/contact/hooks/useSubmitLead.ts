import { useState } from 'react';
import { submitLead } from '../../landing/api/leads.ts';
import type { LeadRequest } from '../types.ts';

export function useSubmitLead() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function submit(request: LeadRequest) {
    setIsLoading(true);
    setError(null);
    try {
      await submitLead(request);
      setIsSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isSuccess, error, isLoading, submit };
}
