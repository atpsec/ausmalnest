import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColoringIllustration } from "@/components/ColoringIllustration";
import { coloringPages, getCategory, getColoringPage } from "@/lib/content";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return coloringPages.map((page) => ({ category: page.category, slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getColoringPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} kostenlos herunterladen`,
    description: `${page.description} Geeignet für ${page.usage.join(", ")}.`,
  };
}

export default async function ColoringDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const page = getColoringPage(slug);
  const category = getCategory(categorySlug);

  if (!page || !category || page.category !== category.slug) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <nav className="text-sm text-stone-600" aria-label="Breadcrumb">
        <Link href="/ausmalbilder" className="hover:text-stone-950">Ausmalbilder</Link>
        <span className="mx-2">/</span>
        <Link href={`/ausmalbilder/${category.slug}`} className="hover:text-stone-950">{category.shortName}</Link>
        <span className="mx-2">/</span>
        <span>{page.title}</span>
      </nav>

      <section className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm">
          <div className="rounded-[1.5rem] bg-stone-50 p-4">
            <ColoringIllustration variant={page.illustration} title={page.title} large />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Kostenlose Druckvorlage</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">{page.title}</h1>
          <p className="mt-4 text-xl leading-8 text-stone-700">{page.subtitle}</p>
          <p className="mt-5 text-base leading-7 text-stone-700">{page.description}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Info label="Alter" value={page.age} />
            <Info label="Schwierigkeit" value={page.difficulty} />
            <Info label="Kategorie" value={category.shortName} />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/drucken/${page.slug}`}
              className="rounded-full bg-stone-950 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              Druckvorlage öffnen
            </Link>
            <button
              disabled
              className="cursor-not-allowed rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-400"
              title="Online ausmalen wird im nächsten Sprint umgesetzt"
            >
              Online ausmalen bald
            </button>
          </div>

          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="font-semibold text-stone-950">Geeignet für</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.usage.map((item) => (
                <span key={item} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">{item}</span>
              ))}
            </div>
            <h2 className="mt-6 font-semibold text-stone-950">Tags</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-stone-200 px-3 py-1 text-sm text-stone-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{label}</p>
      <p className="mt-2 font-semibold text-stone-950">{value}</p>
    </div>
  );
}
