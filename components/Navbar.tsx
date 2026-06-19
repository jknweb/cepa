"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/#home" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Prestations", href: "/#prestations" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 sm:h-14 sm:w-14">
              <Image
                src="/logo.jpeg"
                alt="Logo Cabinet Elite Performing"
                width={56}
                height={56}
                priority
                className="h-9 w-9 rounded-xl object-contain sm:h-10 sm:w-10"
              />
            </div>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-900 sm:block sm:text-base lg:text-lg">
              Cabinet Elite Performing
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Nous contacter
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
