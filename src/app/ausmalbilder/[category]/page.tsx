import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColoringPageCard } from "@/components/ColoringPageCard";
import { categories, getCategory, getPagesByCategory } from "@/lib/content";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const pages = getPagesByCategory(category.slug);

  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <nav className="text-sm text-stone-600" aria-label="Breadcrumb">
        <Link href="/ausmalbilder" className="hover:text-stone-950">Ausmalbilder</Link>
        <span className="mx-2">/</span>
        <span>{category.shortName}</span>
      </nav>

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Kategorie</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl">{category.name}</h1>
        <p className="mt-5 text-lg leading-8 text-stone-700">{category.description}</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <ColoringPageCard key={page.slug} page={page} />
        ))}
      </div>

      {pages.length === 0 && (
        <div className="mt-10 rounded-3xl border border-dashed border-stone-300 bg-white p-8 text-stone-600">
          Diese Kategorie ist vorbereitet. Die ersten Vorlagen werden als nächstes eingepflegt.
        </div>
      )}
    </main>
  );
}
