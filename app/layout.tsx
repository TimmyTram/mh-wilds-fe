import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProviders } from "./providers";
import { LanguageProvider } from "./Context/LanguageProvider";
import Content from "./components/layout/Content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monster Hunter Wilds Wiki",
  description: "A centralized location for information regarding Monster Hunter Wilds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <DarkModeProviders>
            <Content>
              {children}
            </Content>
          </DarkModeProviders>
        </LanguageProvider>
      </body>
    </html>
  );
}