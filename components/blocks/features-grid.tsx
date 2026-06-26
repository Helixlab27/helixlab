"use client";

import { motion } from "motion/react";

const features = [
    {
        icon: "✦",
        title: "Protocole Cicatriciel",
        text: "Soins concentrés sur la maturation cicatricielle, du J+1 au J+180, pour une cicatrice discrète et une peau reconstruite en profondeur.",
    },
    {
        icon: "◈",
        title: "Drainage Expert",
        text: "Drainage lymphatique certifié Vodder par des thérapeutes spécialisés post-chirurgie esthétique, réduisant gonflements et inconforts.",
    },
    {
        icon: "⬡",
        title: "Cosmétique Médicale",
        text: "Gamme formulée en laboratoire pharmaceutique, sans perturbateur endocrinien, optimisée pour les peaux fragilisées post-opératoires.",
    },
    {
        icon: "◎",
        title: "Suivi Digital",
        text: "Application mobile et espace patient sécurisé pour suivre votre protocole et consulter à distance votre médecin référent.",
    },
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 px-8 bg-[#FAFAF8]">
            <div className="max-w-6xl mx-auto">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] text-center mb-3">
                    Solutions HelixLab
                </p>
                <h2
                    className="text-4xl md:text-5xl font-light italic text-black text-center mb-16"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    Quatre piliers d&apos;excellence
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-[#C9A96E]/10 p-8 group transition-shadow hover:shadow-lg hover:shadow-[#C9A96E]/5"
                        >
                            <div className="w-10 h-10 border border-[#C9A96E]/25 rounded-full flex items-center justify-center text-[#C9A96E] text-sm mb-6 group-hover:border-[#C9A96E]/60 transition-colors">
                                {f.icon}
                            </div>
                            <h3
                                className="text-xl font-normal text-black mb-3"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                {f.title}
                            </h3>
                            <p className="text-sm text-black/55 leading-relaxed">
                                {f.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
