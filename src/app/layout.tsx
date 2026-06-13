import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ausmalnest.vercel.app"),
  title: {
    default: "AusmalNest - Lern-Ausmalbilder fÃ¼r Kinder",
    template: "%s | AusmalNest",
  },
  description:
    "Kostenlose Lern-Ausmalbilder fÃ¼r Kita, Kindergarten, Vorschule und Grundschule. Druckvorlagen fÃ¼r Eltern und PÃ¤dagog:innen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen antialiased">
        <header className="no-print sticky top-0 z-20 border-b border-stone-200 bg-[#fbfaf7]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-stone-950">
              AusmalNest
            </Link>
            <nav aria-label="Hauptnavigation" className="flex items-center gap-5 text-sm font-medium text-stone-700">
              <Link href="/ausmalbilder" className="hover:text-stone-950">
                Ausmalbilder
              </Link>
              <Link href="/#mvp" className="hidden hover:text-stone-950 sm:inline">
                MVP
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="no-print border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-stone-600">
            <p className="font-medium text-stone-950">AusmalNest</p>
            <p className="mt-2 max-w-2xl">
              Ein MVP fÃ¼r deutschsprachige Lern-Ausmalbilder. Keine Nutzerprofile, keine Kinderkonten, keine lizenzierten Figuren.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

