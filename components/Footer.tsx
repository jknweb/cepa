import Link from "next/link";
import { MapPin, Mail, PhoneCall } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Cabinet Elite Performing</h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Un cabinet de référence pour les études, le conseil, la formation et l’accompagnement de l’agrobusiness.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/#about" className="hover:text-white">À propos</Link></li>
              <li><Link href="/#services" className="hover:text-white">Services</Link></li>
              <li><Link href="/#prestations" className="hover:text-white">Prestations</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contacts</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-red-500" />
                <span>Ouagadougou, Avenue Père Joseph Wresinski, secteur 23</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-red-500" />
                <span>+226 25 65 44 36 / +226 76 29 49 49</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-red-500" />
                <span>eliteperforming@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Cabinet Elite Performing. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
