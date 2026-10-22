import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yog Maya Ashram",
  description: "Pradipanand Jagdamba Parivar Trust — Ashram, Pashushala, Puja, Meditation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
