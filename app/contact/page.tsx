"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setFeedback(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setFeedback(data.message || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setFeedback("Impossible d’envoyer le message pour le moment.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-blue-900 p-10 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Contact</p>
              <h1 className="mt-3 text-4xl font-semibold">Parlons de votre projet</h1>
              <p className="mt-4 text-sm leading-6 text-blue-100">
                Notre équipe vous répondra dans les meilleurs délais pour vous accompagner dans vos besoins en études, conseil, formation et agrobusiness.
              </p>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-red-300" />
                  <span>Ouagadougou, Avenue Père Joseph Wresinski, secteur 23</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-red-300" />
                  <span>+226 25 65 44 36 / +226 76 29 49 49</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-red-300" />
                  <span>aliteperforming@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-900"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Téléphone</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-900"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Objet</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-900"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Envoyer le message <Send className="h-4 w-4" />
                </button>
                {feedback && (
                  <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}>
                    {feedback}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
