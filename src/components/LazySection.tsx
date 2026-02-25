import React, { useRef, useState, useEffect, Suspense, ComponentType } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  fallbackHeight?: string;
  rootMargin?: string;
  component: React.LazyExoticComponent<ComponentType<any>>;
  componentProps?: Record<string, any>;
  children?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  fallbackHeight = '400px',
  rootMargin = '200px',
  component: LazyComponent,
  componentProps = {},
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (!isVisible) {
    return (
      <div ref={ref} style={{ minHeight: fallbackHeight }} aria-hidden="true">
        <Skeleton className="w-full h-full" style={{ minHeight: fallbackHeight }} />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div style={{ minHeight: fallbackHeight }}>
          <Skeleton className="w-full h-full" style={{ minHeight: fallbackHeight }} />
        </div>
      }
    >
      {children ? children : <LazyComponent {...componentProps} />}
    </Suspense>
  );
};

export default LazySection;
