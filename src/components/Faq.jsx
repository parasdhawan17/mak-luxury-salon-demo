import { useState } from "react";
import { FAQS, BUSINESS } from "../data";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Good to know</p>
        <h2 className="font-display mt-3 text-center text-4xl font-bold text-ink md:text-5xl">
          Questions, answered
        </h2>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{f.q}</span>
                  <span className={`text-xl text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink/65">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink/55">
          Still curious?{" "}
          <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="font-semibold text-gold underline underline-offset-4">
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
