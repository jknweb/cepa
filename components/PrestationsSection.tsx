"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

interface PrestationsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image?: string;
  details?: string;
}

export function PrestationsSection({ items }: { items: PrestationsItem[] }) {
  const [selected, setSelected] = useState<PrestationsItem | null>(null);

  return (
    <section id="prestations" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Prestations</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Quelques réalisations phares</h2>
          </div>
          <Link href="/prestations" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900">
            Voir toutes nos prestations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group rounded-3xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-500">
                    {item.title}
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
                  {item.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-slate-400">{item.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative h-72 md:h-full">
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-100 text-slate-500">
                    {selected.title}
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
                  {selected.category}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">{selected.title}</h3>
                <p className="mt-3 text-sm text-slate-500">{selected.date}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{selected.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}