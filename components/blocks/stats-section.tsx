"use client";

import { motion } from "motion/react";

const stats = [
    { num: "94%", label: "Satisfaction patient" },
    { num: "×3", label: "Récupération accélérée" },
    { num: "200+", label: "Cliniques partenaires" },
];

export default function StatsSection() {
    return (
        <section className="py-20 px-8 bg-white border-y border-black/6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                    >
                        <p
                            className="text-6xl md:text-7xl font-light text-[#C9A96E] leading-none mb-3"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            {s.num}
                        </p>
                        <p className="text-xs tracking-[0.2em] uppercase text-black/45">{s.label}</p>
                        <div className="w-8 h-px bg-[#C9A96E] mx-auto mt-4 opacity-60" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
