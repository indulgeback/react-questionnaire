import React from "react";
import HomeClient from "@/components/home-client";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6 py-12 md:py-16">
      {" "}
      {/* 增大垂直间距 */}
      <div className="w-full max-w-6xl">
        {" "}
        {/* 匹配组件最大宽度 */}
        <HomeClient />
      </div>
    </section>
  );
}
