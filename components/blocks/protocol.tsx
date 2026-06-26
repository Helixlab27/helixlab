"use client";

import { motion } from "motion/react";

const steps = [
    {
        roman: "I",
        title: "Consultation & Bilan Initial",
        text: "Dès J+1 après votre intervention, notre équipe réalise un bilan complet : état des tissus, type de cicatrices, sensibilités. Un plan de soins personnalisé est établi sur 12 semaines minimum.",
        period: "J+1 — J+7",
    },
    {
        roman: "II",
        title: "Soins & Traitements Actifs",
        text: "Séances de drainage lymphatique, application des soins biocompatibles HelixLab, suivi photographique hebdomadaire. Chaque session est ajustée selon l'évolution cicatricielle observée.",
        period: "Semaines 2 — 8",
    },
    {
        roman: "III",
        title: "Consolidation & Résultat Final",
        text: "Phase de finition et de pérennisation des résultats. Bilan final en téléconsultation et remise du rapport médical complet avec recommandations à long terme.",
        period: "Semaines 9 — 24",
    },
];

export default function Protocol() {
    return (
        <section className="py-24 px-8 bg-[#FAFAF8]">
            <div className="max-w-3xl mx-auto">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] text-center mb-3">
                    Comment ça marche
                </p>
                <h2
                    className="text-4xl md:text-5xl font-light italic text-black text-center mb-16"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    Le protocole en trois temps
                </h2>
                <div className="flex flex-col">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.roman}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                            className="grid grid-cols-[4rem_1fr] gap-6 py-10 border-b border-black/6 last:border-0"
                        >
                            <span
                                className="text-4xl font-light text-[#C9A96E]/20 leading-none mt-1"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                {s.roman}
                            </span>
                            <div>
                                <h3
                                    className="text-xl font-normal text-black mb-2"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {s.title}
                                </h3>
                                <p className="text-sm text-black/55 leading-relaxed mb-4">{s.text}</p>
                                <span className="inline-block text-xs tracking-widest uppercase border border-[#C9A96E]/20 text-[#C9A96E] px-3 py-1">
                                    {s.period}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
