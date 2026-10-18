import { useState } from "react";
import { BUSINESS, SERVICES } from "../data";

const ALL_SERVICES = SERVICES.flatMap((s) => s.items);

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: ALL_SERVICES[0], date: "" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi MAK Luxury Salon! I'd like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service)}%0APreferred date: ${encodeURIComponent(form.date || "flexible")}`;
    window.open(`https://wa.me/919871822365?text=${msg}`, "_blank");
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-coal py-20 md:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-goldlight">Reserve your chair</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-cream md:text-5xl">
            Book your appointment in <span className="gold-text">under a minute</span>
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              ["Free consultation", "We understand your hair, skin and occasion before we begin."],
              ["Senior stylists only", "14+ years of craft — no juniors learning on your hair."],
              ["Premium products", "Salon-grade colour, keratin and skincare — never diluted."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">✓</span>
                <div>
                  <p className="font-semibold text-cream">{t}</p>
                  <p className="text-sm text-cream/60">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-cream/60">
            Prefer to talk?{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-goldlight underline underline-offset-4">
              {BUSINESS.phone}
            </a>
          </p>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-cream p-8 shadow-2xl">
          <h3 className="font-display text-2xl font-bold text-ink">Request an appointment</h3>
          <p className="mt-1 text-sm text-ink/55">We confirm on WhatsApp within minutes.</p>
          <div className="mt-6 space-y-4">
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={set("name")}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            <input
              required
              placeholder="Phone number"
              pattern="[0-9+ ]{10,15}"
              value={form.phone}
              onChange={set("phone")}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            <select
              value={form.service}
              onChange={set("service")}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            >
              {ALL_SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <input
              type="date"
              value={form.date}
              onChange={set("date")}
              className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3.5 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-goldlight"
            >
              Confirm on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
