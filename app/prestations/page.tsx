import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { getData } from "@/lib/data";

export default async function PrestationsPage() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Prestations</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Nos interventions et réalisations</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Des prestations pensées pour renforcer la performance, la gouvernance et la compétitivité des institutions et acteurs du secteur agricole.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {data.prestations.map((item) => (
              <article key={item.id} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">{item.category}</span>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{item.date}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                    Demander un devis <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
