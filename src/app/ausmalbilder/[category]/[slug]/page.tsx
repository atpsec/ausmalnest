import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColoringIllustration } from "@/components/ColoringIllustration";
import {
  coloringPages,
  getCategory,
  getColoringPage,
  getDifficultyLabel,
  siteConfig,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coloringPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getColoringPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} drucken`,
    description: page.seoDescription,
  };
}

export default async function PrintPage({ params }: Props) {
  const { slug } = await params;
  const page = getColoringPage(slug);

  if (!page) {
    notFound();
  }

  const category = getCategory(page.categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[900px] bg-white px-6 py-6 print:p-0">
      <section className="mb-6 flex items-center justify-between gap-4 print:hidden">
        <Link
          href={`/ausmalbilder/${page.categorySlug}/${page.slug}`}
          className="text-sm font-semibold text-stone-700 hover:text-stone-950"
        >
          ZurÃ¼ck zur Vorlage
        </Link>

        <button
          type="button"
          className="rounded-full bg-stone-950 px-5 py-2 text-sm font-semibold text-white hover:bg-stone-800"
        >
          Im Browser drucken
        </button>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 print:border-0 print:p-0">
        <header className="mb-6 border-b border-stone-200 pb-5 print:mb-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
            {siteConfig.name}
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-950">
            {page.title}
          </h1>

          <p className="mt-2 text-sm text-stone-600">
            {category.name} Â· {page.ageMin}-{page.ageMax} Jahre Â·{" "}
            {getDifficultyLabel(page.difficulty)}
          </p>
        </header>

        <div className="mx-auto max-w-[720px]">
          <ColoringIllustration variant="shape" title={page.title} large />
        </div>

        <section className="mt-8 grid gap-4 text-sm text-stone-700 print:mt-5">
          <div>
            <h2 className="font-semibold text-stone-950">Lernziel</h2>
            <p className="mt-1 leading-6">{page.learningGoal}</p>
          </div>

          <div>
            <h2 className="font-semibold text-stone-950">Einsatzidee</h2>
            <p className="mt-1 leading-6">{page.usageIdea}</p>
          </div>

          <div>
            <h2 className="font-semibold text-stone-950">Drucktipp</h2>
            <p className="mt-1 leading-6">{page.printTip}</p>
          </div>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-3 print:mt-5">
          {category.audience.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-stone-300 p-3 text-center text-sm font-semibold text-stone-800"
            >
              {item}
            </div>
          ))}
        </section>

        <footer className="mt-8 border-t border-stone-200 pt-4 text-xs leading-5 text-stone-500 print:mt-5">
          {siteConfig.licenseText}
        </footer>
      </section>
    </main>
  );
}
