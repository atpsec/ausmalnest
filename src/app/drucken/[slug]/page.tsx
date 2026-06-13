import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ColoringIllustration } from "@/components/ColoringIllustration";
import { coloringPages, getCategory, getColoringPage } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coloringPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getColoringPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} Druckvorlage`,
    robots: { index: false, follow: true },
  };
}

export default async function PrintPage({ params }: Props) {
  const { slug } = await params;
  const page = getColoringPage(slug);

  if (!page) {
    notFound();
  }

  const category = getCategory(page.category);

  return (
    <main className="mx-auto max-w-[900px] bg-white px-6 py-6 print:p-0">
      <div className="no-print mb-6 flex items-center justify-between rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm">
        <Link href={`/ausmalbilder/${page.category}/${page.slug}`} className="font-semibold text-stone-950 underline underline-offset-4">
          Zurück zur Vorlage
        </Link>
        <span className="rounded-full bg-stone-950 px-4 py-2 font-semibold text-white">
          Drucken: Strg+P / Cmd+P
        </span>
      </div>

      <section className="min-h-[1120px] border-[6px] border-stone-950 p-8 print:min-h-screen print:border-4">
        <div className="flex items-start justify-between gap-4 border-b-4 border-stone-950 pb-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em]">AusmalNest</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">{page.title}</h1>
            <p className="mt-2 text-base">{category?.name}</p>
          </div>
          <div className="rounded-2xl border-4 border-stone-950 px-5 py-3 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">Alter</p>
            <p className="text-lg font-bold">{page.age}</p>
          </div>
        </div>

        <div className="mt-8">
          <ColoringIllustration variant={page.illustration} title={page.title} large />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm font-semibold">
          {page.usage.map((usage) => (
            <div key={usage} className="rounded-xl border-2 border-stone-950 p-3">{usage}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
