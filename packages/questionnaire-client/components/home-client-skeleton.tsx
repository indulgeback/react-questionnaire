"use client";

import React from "react";
import { Skeleton } from "@heroui/skeleton";

export default function HomeClientSkeleton() {
  return (
    <div className="flex items-center flex-col">
      <Skeleton className="w-3/5 h-7 mt-2 rounded-full" />
      <Skeleton className="w-2/5 h-7 mt-2 rounded-full" />
      <Skeleton className="w-1/6 h-7 mt-2 rounded-full" />
    </div>
  );
}
