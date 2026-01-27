import React from "react";
import { Skeleton } from "#components/ui/skeleton";

export default function HomepageLoading() {
  return (
    <React.Fragment>
      <Skeleton className="h-12 w-107.5" />
      <Skeleton className="mt-1 h-6 w-105.5" />
    </React.Fragment>
  );
}
