import type { Metadata } from "next";
import "./globals.css";
import { siteConfig, buildMetadata } from "@/config/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body>{children}</body>
      </html>
  );
}