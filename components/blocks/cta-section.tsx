"use client";

import { motion } from "motion/react";

export default function CTASection() {
    return (
        <section className="py-28 px-8 bg-[#FAFAF8] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] rounded-full bg-[#C9A96E]/5 blur-3xl" />
            </div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">
                        Commencer maintenant
                    </p>
                    <h2
                        className="text-4xl md:text-6xl font-light italic text-black leading-tight mb-4"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Offrez à vos patients<br />
                        le soin qu&apos;ils{" "}
                        <em className="text-[#C9A96E]">méritent.</em>
                    </h2>
                    <p className="text-sm text-black/45 tracking-wide mb-10">
                        Rejoignez les 200+ cliniques qui font confiance à HelixLab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:helixlab27@gmail.com?subject=Demande%20de%20démo%20Helixlab&body=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20Helixlab."
                            className="bg-[#C9A96E] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 font-medium hover:bg-[#b8956a] transition-colors"
                        >
                            Demander une démo
                        </a>
                        <a
                            href="#protocole"
                            className="border border-[#C9A96E]/35 text-[#C9A96E] text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#C9A96E]/5 hover:border-[#C9A96E] transition-colors"
                        >
                            Voir le protocole
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
