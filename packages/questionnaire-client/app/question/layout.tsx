import React from "react";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-4 md:py-10">
      <div className="justify-center h-full w-full">{children}</div>
    </section>
  );
}
