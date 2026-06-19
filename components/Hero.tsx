"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, ChartNoAxesCombined, GraduationCap } from "lucide-react";

const overlayCards = [
  {
    title: "Études",
    description: "Analyses stratégiques et diagnostics",
    icon: <BadgeCheck className="h-5 w-5 text-blue-900" />,
  },
  {
    title: "Conseil",
    description: "Accompagnement décisionnel et gouvernance",
    icon: <BriefcaseBusiness className="h-5 w-5 text-blue-900" />,
  },
  {
    title: "Formation",
    description: "Programmes sur mesure pour les équipes",
    icon: <GraduationCap className="h-5 w-5 text-blue-900" />,
  },
  {
    title: "Agrobusiness",
    description: "Innovation, production et performance agricole",
    icon: <ChartNoAxesCombined className="h-5 w-5 text-blue-900" />,
  },
];

const slides = [
  {
    badge: "Cabinet d’expertise et d’accompagnement",
    title: "Propulsez votre performance institutionnelle et agricole",
    description:
      "Le Cabinet Elite Performing accompagne les institutions, les entreprises et les acteurs agricoles dans leurs stratégies, leurs formations et leurs transformations.",
    image: "/cea1.jpeg",
  },
  {
    badge: "Conseil stratégique & gouvernance",
    title: "Renforcer la vision, la gouvernance et la prise de décision",
    description:
      "Nous aidons les organisations à clarifier leurs objectifs, structurer leurs plans et bâtir des décisions performantes à long terme.",
    image: "/cea2.jpeg",
  },
  {
    badge: "Formation & montée en compétences",
    title: "Former les équipes pour accélérer les résultats",
    description:
      "Nos programmes de formation permettent aux équipes d’acquérir les compétences clés pour évoluer dans un environnement exigeant.",
    image: "/cea3.jpeg",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 pb-32 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="transition-all duration-700 ease-out">
            <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              {slide.badge}
            </span>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{slide.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
              >
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#prestations"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
              >
                Découvrir nos réalisations
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
            <div className="absolute -right-3 bottom-0 h-40 w-40 rounded-full bg-red-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] bg-white p-4 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-200 sm:p-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] sm:aspect-[5/6]">
                <Image
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-4 rounded-3xl bg-white p-4 shadow-xl shadow-slate-200/70 sm:grid-cols-2 xl:grid-cols-4">
          {overlayCards.map((card) => (
            <div
              key={card.title}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                {card.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
