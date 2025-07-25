import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {siteConfig} from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.meta.keywords,
  authors: [{name: siteConfig.meta.author}],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.meta.language,
    type: "website",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <header className="border-b p-4">
            <h1 className="text-2xl font-bold">{siteConfig.name}</h1>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t p-4 text-center text-sm text-muted-foreground">
            {siteConfig.footer.copyright} - {siteConfig.footer.madeWith}
          </footer>
        </div>
      </body>
    </html>
  );
}
