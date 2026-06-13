import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-950">Vorlage nicht gefunden</h1>
      <p className="mt-4 text-stone-700">Diese Ausmalvorlage existiert noch nicht oder wurde verschoben.</p>
      <Link href="/ausmalbilder" className="mt-8 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white">
        Zu den Ausmalbildern
      </Link>
    </main>
  );
}

