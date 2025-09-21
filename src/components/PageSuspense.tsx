import { Suspense, ReactNode } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface PageSuspenseProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const PageSuspense = ({ children, fallback }: PageSuspenseProps) => {
  return (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      {children}
    </Suspense>
  );
};

export default PageSuspense;