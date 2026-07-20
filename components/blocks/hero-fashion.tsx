"use client";

import { motion } from "motion/react";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white relative flex flex-col justify-center md:block">

            {/* Image en background sur mobile uniquement */}
            <div className="absolute inset-0 md:hidden">
                <img
                    src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/portrait2-x5MjJSaQ9ed0HZrewEhH7TkZwjZ66K.jpeg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative container mx-auto px-4 py-8 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 overflow-x-hidden">

                    {/* Image à droite sur desktop */}
                    <div className="hidden md:block md:order-2 relative">
                        <div className="absolute -z-10 w-72 h-72 rounded-full bg-[#f8b3c4] blur-3xl opacity-20 -top-10 -left-10"></div>
                        <img
                            src="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/portrait2-x5MjJSaQ9ed0HZrewEhH7TkZwjZ66K.jpeg"
                            alt="Fashion model"
                            className="rounded-2xl shadow-2xl w-full object-cover filter brightness-105"
                        />
                    </div>

                    <div className="md:order-1 flex flex-col md:h-full">
                        <div className="flex flex-col gap-6 md:gap-0 md:h-full md:justify-between text-center md:text-left">

                            <h1 className="text-5xl md:text-7xl font-bold text-white md:text-black leading-tight tracking-tighter">
                                Helixlab.
                            </h1>
                            <ul className="hidden md:block space-y-2 tracking-tighter text-base md:text-lg text-white/90 md:text-black/90">
                                {[
                                    { label: "A propos",  href: "#a-propos" },
                                    { label: "Système",   href: "#systeme"  },
                                    { label: "Démo",      href: "#demo"     },
                                    { label: "Contact",   href: "#contact"  },
                                ].map((item, index) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{
                                            opacity: 1,
                                            y: -3,
                                            transition: { duration: 0.4, ease: "easeOut" },
                                        }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a href={item.href} className="cursor-pointer">
                                            {item.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                            <div>
                                <h2 className="text-xl md:text-2xl font-medium text-white md:text-black">
                                    Agent IA acquisition
                                </h2>
                                <p className="text-base md:text-lg text-white/90 md:text-black/95 max-w-md pt-4 tracking-tight">
                                    Helixlab installe un agent IA qui répond à vos prospects 24h/24 et réserve les RDV dans votre agenda.
                                </p>
                                <a
                                    href="mailto:helixlab27@gmail.com?subject=Demande%20de%20démo%20Helixlab"
                                    className="md:hidden inline-block mt-6 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl text-base tracking-tight hover:bg-black transition-colors"
                                >
                                    Voir la démo →
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
