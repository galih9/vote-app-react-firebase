import React, { Suspense } from "react";
import AppAuthenticatedPage from "./AppAuthenticated";

const RoutePage: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="absolute z-10 w-full h-full rounded-lg flex flex-direction items-center justify-center">
          <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
      }
    >
      <AppAuthenticatedPage />
    </Suspense>
  );
};
export default RoutePage;
