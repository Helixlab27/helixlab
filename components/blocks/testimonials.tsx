"use client";

import { motion } from "motion/react";

const testimonials = [
    {
        initials: "LM",
        name: "Dr. Laurent Marchand",
        role: "Chirurgien plasticien — Paris 8e",
        quote: "HelixLab a transformé la qualité du suivi que je peux offrir à mes patients. Les résultats cicatriciels à 3 mois sont remarquablement supérieurs à ce que j'observais auparavant.",
    },
    {
        initials: "SC",
        name: "Dr. Sophie Caron",
        role: "Médecin esthétique — Neuilly-sur-Seine",
        quote: "Le protocole HelixLab est devenu incontournable dans ma pratique. Mes patientes apprécient la qualité des soins et la plateforme de suivi digital est un vrai plus.",
    },
    {
        initials: "AT",
        name: "Dr. Alexandre Thiébaut",
        role: "Chirurgien esthétique — Monaco",
        quote: "Ce qui m'a convaincu, c'est la rigueur scientifique derrière chaque produit. La traçabilité des actifs inspire une confiance totale. Je recommande sans réserve.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] text-center mb-3">
                    Ils nous font confiance
                </p>
                <h2
                    className="text-4xl md:text-5xl font-light italic text-black text-center mb-16"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    La parole des médecins partenaires
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                            className="border border-black/6 p-8 bg-[#FAFAF8]"
                        >
                            <div className="text-[#C9A96E] text-sm tracking-widest mb-5">★★★★★</div>
                            <p
                                className="text-base font-light italic text-black/70 leading-relaxed mb-6"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] text-sm shrink-0" style={{ fontFamily: "var(--font-cormorant)" }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-black">{t.name}</p>
                                    <p className="text-xs text-black/40 mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
