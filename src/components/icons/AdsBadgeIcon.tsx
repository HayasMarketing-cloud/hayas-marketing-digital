import React from 'react';

const AdsBadgeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" ry="3" />
      {/* A */}
      <path d="M7 16 L9 10 L11 16" />
      <path d="M7.8 13 H10.2" />
      {/* D */}
      <path d="M12.5 10 V16" />
      <path d="M12.5 10 H14.5 a3 3 0 0 1 0 6 H12.5" />
      {/* S */}
      <path d="M18 11.5c-.6-.6-1.8-.6-2.4 0c-.6.6.2 1.2 1.2 1.5s1.8.9 1.2 1.5c-.6.6-1.8.6-2.4 0" />
    </svg>
  )
);

AdsBadgeIcon.displayName = 'AdsBadgeIcon';
export default AdsBadgeIcon;
