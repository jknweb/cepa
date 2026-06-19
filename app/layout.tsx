import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinet Elite Performing",
  description:
    "Cabinet Elite Performing — études, conseil, formation et agrobusiness pour des performances durables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full bg-gray-50 text-slate-900">{children}</body>
    </html>
  );
}
