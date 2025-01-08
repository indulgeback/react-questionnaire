import "@/styles/globals.css";
import React from "react";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh-CN">
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <footer className="w-full flex flex-col items-center justify-center py-3 text-sm">
              <Link
                isExternal
                className="flex items-center gap-1"
                href="https://indulgeback.netlify.app/"
                title="indulgeback homepage"
              >
                <span className="text-default-600 ">小木问卷&copy;2024-present.Created by</span>
                <p className="text-primary">IndulgeBack</p>
              </Link>
              <span className="text-default-600">晋ICP备2023025256号-2</span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
