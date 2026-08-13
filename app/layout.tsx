import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiao Liu Ren Lab",
  description: "...",
  verification: {
    google: "jJl_vysem5ybrg8cNUhe-QkbvT-rqSMrDuZvG7GknRQ",
  },
};

const navItems = [
  ["Home", "/"],
  ["Start Here", "/start-here"],
  ["Tool", "/tool"],
  ["Six Palaces", "/six-palaces"],
  ["Learn", "/learn"],
  ["Method", "/method"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="brand" href="/">
              Xiao Liu Ren Lab
            </Link>
            <nav className="site-nav" aria-label="Main navigation">
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
          <div className="ad-slot" aria-label="Advertisement">
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  atOptions = {
                    'key' : 'c639acb7485e8d64bc2264f6019014ae',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                  };
                `,
              }}
            />
  <script async src="https://www.highperformanceformat.com/c639acb7485e8d64bc2264f6019014ae/invoke.js" />
</div>

          <footer className="site-footer">
            <span>Chinese terms are shown with pinyin to preserve the original system.</span>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/method">Method Used</Link>
            </nav>
          </footer>
        </div>
       <script
        defer
        type="module"
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token":"2dbea2f9d14c4157a611c2a309cf2b19"}'
       />
      </body>
    </html>
  );
}
