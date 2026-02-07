interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'dark' ? '#1a2744' : '#ffffff';

  return (
    <svg
      viewBox="0 0 180 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="BRYQA logo"
      role="img"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#29a9b5" />
          <stop offset="100%" stopColor="#3d63a6" />
        </linearGradient>
      </defs>

      {/* Magnifying glass icon */}
      <circle cx="16" cy="17" r="11" fill="none" stroke="url(#logo-grad)" strokeWidth="3" />
      <line x1="24" y1="25" x2="33" y2="34" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" />
      {/* Checkmark inside lens */}
      <path
        d="M11 17.5l3.5 3.5 6-7"
        fill="none"
        stroke="url(#logo-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* BRY text */}
      <text
        x="40"
        y="27"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="1"
        fill={textColor}
      >
        BRY
      </text>

      {/* QA text in gradient */}
      <text
        x="107"
        y="27"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="1"
        fill="url(#logo-grad)"
      >
        QA
      </text>

      {/* SOLUTIONS subtitle */}
      <text
        x="108"
        y="39"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="600"
        fontSize="9"
        letterSpacing="3.5"
        fill={variant === 'dark' ? '#6b7280' : '#9ca3af'}
      >
        SOLUTIONS
      </text>
    </svg>
  );
}
