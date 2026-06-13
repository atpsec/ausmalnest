import Link from "next/link";
import type { ColoringPage } from "@/lib/content";
import { ColoringIllustration } from "./ColoringIllustration";

type Props = {
  page: ColoringPage;
};

export function ColoringPageCard({ page }: Props) {
  return (
    <article className="group rounded-3xl border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/ausmalbilder/${page.category}/${page.slug}`} className="block">
        <div className="rounded-2xl bg-stone-50 p-3 ring-1 ring-stone-100">
          <ColoringIllustration variant={page.illustration} title={page.title} />
        </div>
        <div className="mt-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
            <span>{page.age}</span>
            <span aria-hidden="true">/</span>
            <span>{page.difficulty}</span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight text-stone-950 group-hover:underline">
            {page.title}
          </h3>
          <p className="text-sm leading-6 text-stone-600">{page.description}</p>
        </div>
      </Link>
    </article>
  );
}
