import Link from "next/link";
import { ColoringPageCard } from "@/components/ColoringPageCard";
import { categories, coloringPages } from "@/lib/content";

const featuredPages = coloringPages.slice(0, 6);

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            Kita / Kindergarten / Vorschule
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight text-stone-950 sm:text-6xl">
            Kostenlose Lern-Ausmalbilder fÃ¼r Kinder.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            AusmalNest startet als kuratierte Sammlung druckfertiger Malvorlagen fÃ¼r Eltern, Lehrer:innen und Erzieher:innen. Der Fokus liegt auf einfachen Motiven, Lernwert und sicherer Nutzung ohne Kinderprofile.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ausmalbilder"
              className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Ausmalbilder ansehen
            </Link>
            <a
              href="#mvp"
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:border-stone-950"
            >
              MVP-Umfang prÃ¼fen
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
          <div className="rounded-[1.5rem] bg-stone-50 p-6">
            <div className="grid grid-cols-2 gap-3">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.slug}
                  href={`/ausmalbilder/${category.slug}`}
                  className="rounded-2xl border border-stone-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <p className="text-sm font-semibold text-stone-950">{category.name}</p>
                  <p className="mt-2 text-xs leading-5 text-stone-600">{category.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Erste Vorlagen</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">Startkollektion</h2>
            </div>
            <Link href="/ausmalbilder" className="text-sm font-semibold text-stone-950 underline underline-offset-4">
              Alle Kategorien Ã¶ffnen
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPages.map((page) => (
              <ColoringPageCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      <section id="mvp" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">MVP</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Erster technischer Umfang</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ["10 Kategorien", "Buchstaben, Zahlen, Tiere, Formen und saisonale Themen."],
              ["Druckansicht", "Jede Vorlage hat eine eigene druckfreundliche Seite."],
              ["SEO-Struktur", "Saubere URLs, Metadaten, Sitemap und Robots-Datei."],
              ["Kindersicher", "Keine Profile, keine Uploads, keine geschÃ¼tzten Figuren."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

