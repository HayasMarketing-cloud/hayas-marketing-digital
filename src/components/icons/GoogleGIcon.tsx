import React from 'react';

const GoogleGIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Outer circle */}
      <circle cx="12" cy="12" r="7" />
      {/* G notch */}
      <path d="M12 12h3" />
      <path d="M15 12v2" />
    </svg>
  )
);

GoogleGIcon.displayName = 'GoogleGIcon';
export default GoogleGIcon;
