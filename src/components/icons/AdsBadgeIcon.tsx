import React from 'react';

const AdsBadgeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
      <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
      {/* A */}
      <path d="M6.5 16 L8 12 L9.5 16" />
      <path d="M7.2 14 H8.8" />
      {/* D */}
      <path d="M11.3 12 V16" />
      <path d="M11.3 12 H13.3 a2 2 0 0 1 0 4 H11.3" />
      {/* S */}
      <path d="M16.8 12.8c-.6-.6-1.8-.6-2.4 0m0 0c-.6.6.2 1.2 1.2 1.5l.8.3c1 .3 1.6.9 1.1 1.5m0 0c-.6.6-1.8.6-2.4 0" />
    </svg>
  )
);

AdsBadgeIcon.displayName = 'AdsBadgeIcon';
export default AdsBadgeIcon;
