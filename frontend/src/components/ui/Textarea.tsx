import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, id, className = '', ...props }: TextareaProps) {
  const errorId = error && id ? `${id}-error` : undefined;
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={`block w-full rounded-xl border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        rows={4}
        {...props}
      />
      {error && <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">{error}</p>}
    </div>
  );
}
