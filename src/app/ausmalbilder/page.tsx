import type { Metadata } from "next";
import Link from "next/link";
import { ColoringPageCard } from "@/components/ColoringPageCard";
import { categories, coloringPages, getPagesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ausmalbilder kostenlos für Kinder",
  description:
    "Kostenlose Lern-Ausmalbilder für Kinder. Druckvorlagen für Kita, Kindergarten, Vorschule und Grundschule.",
};

export default function AusmalbilderPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Sammlung</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">
          Ausmalbilder kostenlos zum Ausdrucken
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          Kuratierte Malvorlagen für Kinder von 3 bis 7 Jahren. Jede Vorlage ist auf klare Linien, einfache Formen und pädagogischen Nutzen ausgelegt.
        </p>
      </div>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" aria-label="Kategorien">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/ausmalbilder/${category.slug}`}
            className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <p className="font-semibold text-stone-950">{category.shortName}</p>
            <p className="mt-2 text-sm text-stone-600">{getPagesByCategory(category.slug).length} Vorlagen</p>
          </Link>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight text-stone-950">Neue Vorlagen</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coloringPages.map((page) => (
            <ColoringPageCard key={page.slug} page={page} />
          ))}
        </div>
      </section>
    </main>
  );
}
