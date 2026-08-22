import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tingxiao Wu — HCI Researcher",
  description:
    "Academic homepage of Tingxiao Wu, an HCI researcher working across interactive materials, soft sensing, digital fabrication, haptics, and pneumatic interfaces.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
