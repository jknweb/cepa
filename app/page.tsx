import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  GraduationCap,
  Layers3,
  Leaf,
  MapPin,
  PhoneCall,
  Sprout,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PrestationsSection } from "@/components/PrestationsSection";
import { getData } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  ChartNoAxesCombined,
  Layers3,
  BarChart3,
  Leaf,
  Sprout,
};

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <Navbar />
      <Hero />

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Présentation du cabinet</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Un cabinet engagé pour le développement</h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-slate-600">
                <p>
                  CAEP est un cabinet d&apos;études, de formation et d&apos;assistance-conseil en économie et développement. Il veut contribuer au développement socio-économique du Burkina Faso et de l&apos;Afrique en général à travers la mise à disposition d&apos;études de qualité en relation avec les problématiques majeures du développement.
                </p>
                <p>
                  CAEP assure également le renforcement des capacités à travers des formations pointues répondant aux besoins des agents et cadres des administrations publiques, privées, des projets et programmes de développement, des ONG/OSC et des institutions internationales.
                </p>
                <p>
                  CAEP apporte écoute, assistance et conseil aux jeunes sur les questions d&apos;entrepreneuriat en les aidant à transformer leurs idées en opportunités d&apos;affaires.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-blue-100" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl bg-red-100" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-xl shadow-slate-200/60">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/cea1.jpeg"
                    alt="Équipe du cabinet CAEP"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Mot de la directrice générale</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Votre partenaire de confiance pour transformer vos ambitions</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Chez le Cabinet Elite Performing, nous croyons que la performance durable repose sur une vision claire, des décisions éclairées et des compétences solides. Nous accompagnons nos partenaires dans l’analyse, l’organisation, la formation et la mise en œuvre de solutions stratégiques.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-600">
                À travers des approches pragmatiques et un accompagnement sur mesure, nous aidons nos clients à relever les défis du changement, de la croissance et du développement.
              </p>
              <div className="mt-8">
                <p className="font-semibold text-slate-900">Madame KADIATHOU KONE</p>
                <p className="text-sm text-slate-500">Directrice Générale</p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-blue-100" />
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl bg-red-100" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-3 shadow-xl shadow-slate-200/60 transition duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/kadi.jpeg"
                    alt="Madame Kadiathou Kone"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">DG</p>
                    <p className="text-sm font-medium text-slate-700">Kadiathou Kone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4">
            {data.stats.map((stat) => (
              <div key={stat.id} className="rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-3xl font-semibold text-blue-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PrestationsSection items={data.prestations} />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-8 py-14 text-white">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">Compétences exploitées</p>
            <h2 className="mt-3 text-3xl font-semibold">Une expertise au service de vos objectifs</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {data.skills.map((skill) => {
              const Icon = iconMap[skill.icon] ?? Layers3;
              return (
                <div key={skill.id} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Icon className="h-6 w-6 text-red-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{skill.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
