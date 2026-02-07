import { type FormEvent, useState } from 'react';
import { Check } from 'lucide-react';
import { Input } from '../../../components/ui/Input.tsx';
import { Textarea } from '../../../components/ui/Textarea.tsx';
import { Spinner } from '../../../components/ui/Spinner.tsx';
import { useSubmitLead } from '../hooks/useSubmitLead.ts';
import type { ProjectType } from '../types.ts';

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: 'MANUAL_QA', label: 'Manual QA & Exploratory Testing' },
  { value: 'AUTOMATION', label: 'Test Automation' },
  { value: 'PERFORMANCE', label: 'Performance Testing' },
  { value: 'SECURITY', label: 'Security Testing' },
  { value: 'ACCESSIBILITY', label: 'Section 508 & Accessibility Testing' },
  { value: 'CONSULTING', label: 'IV&V / QA Consulting' },
  { value: 'OTHER', label: 'Other' },
];

export function ContactForm() {
  const { isSuccess, error, isLoading, submit } = useSubmitLead();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errors: Record<string, string> = {};

    const fullName = (form.get('fullName') as string)?.trim();
    const email = (form.get('email') as string)?.trim();
    const company = (form.get('company') as string)?.trim();
    const projectType = form.get('projectType') as ProjectType;
    const message = (form.get('message') as string)?.trim();

    if (!fullName) errors.fullName = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!company) errors.company = 'Company is required';
    if (!projectType) errors.projectType = 'Please select a service';
    if (!message) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    submit({
      fullName,
      email,
      company,
      phone: (form.get('phone') as string)?.trim() || undefined,
      projectType,
      message,
    });
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">Thank you!</h3>
        <p className="text-gray-600">
          We received your message and will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm" role="alert" aria-live="polite">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="fullName"
          name="fullName"
          label="Full Name"
          placeholder="Jane Smith"
          error={formErrors.fullName}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="jane@agency.gov"
          error={formErrors.email}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          id="company"
          name="company"
          label="Company / Organization"
          placeholder="Your organization"
          error={formErrors.company}
          required
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone (optional)"
          placeholder="(301) 555-0147"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
          What service are you interested in?
        </label>
        <select
          id="projectType"
          name="projectType"
          aria-invalid={formErrors.projectType ? true : undefined}
          aria-describedby={formErrors.projectType ? 'projectType-error' : undefined}
          className={`block w-full rounded-xl border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            formErrors.projectType ? 'border-red-500' : 'border-gray-300'
          }`}
          defaultValue=""
          required
        >
          <option value="" disabled>Select a service...</option>
          {PROJECT_TYPES.map((pt) => (
            <option key={pt.value} value={pt.value}>{pt.label}</option>
          ))}
        </select>
        {formErrors.projectType && (
          <p id="projectType-error" className="mt-1 text-sm text-red-600" role="alert">{formErrors.projectType}</p>
        )}
      </div>

      <Textarea
        id="message"
        name="message"
        label="Tell us about your project"
        placeholder="Describe your testing needs, timeline, and any specific compliance requirements..."
        error={formErrors.message}
        required
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <Spinner className="mr-2 h-5 w-5" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </button>
    </form>
  );
}
