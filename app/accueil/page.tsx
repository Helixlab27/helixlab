import { FinancialHero } from "@/components/ui/financial-hero";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { Feature } from "@/components/ui/feature";

export default function AccueilPage() {
    return (
        <>
            {/* Hero */}
            <section id="hero">
                <FinancialHero
                    title={<>Répondez à vos prospects.<br />Même quand vous êtes en soin.</>}
                    description="Helixlab installe un agent IA qui répond à vos prospects 24h/24 sur Instagram, WhatsApp et Messenger — et réserve les RDV directement dans votre agenda."
                    buttonText="Voir la démo"
                    buttonLink="mailto:contact@helixlab.fr?subject=Demande%20de%20démo%20Helixlab"
                    imageUrl1="/prospect-ecrit.jpg"
                    imageUrl2="/clinique.jpg"
                />
            </section>

            {/* A propos */}
            <section id="a-propos" className="bg-white py-24 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">A propos</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight mb-6">
                        L'IA au service de votre clinique.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Helixlab est une agence spécialisée dans l&apos;acquisition de clients pour les cliniques esthétiques.
                        Notre agent IA répond à vos prospects 24h/24 sur tous vos canaux, gère leurs questions et réserve les rendez-vous —
                        sans mobiliser votre équipe.
                    </p>
                </div>
            </section>

            {/* Système */}
            <section id="systeme" className="bg-gray-50">
                <LandingAccordionItem />
            </section>

            {/* Démo */}
            <section id="demo" className="bg-white">
                <Feature />
            </section>

            {/* Contact */}
            <section id="contact" className="bg-black py-24 px-6">
                <div className="container mx-auto max-w-xl text-center">
                    <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-4">Contact</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
                        Prêt à ne plus perdre aucun prospect ?
                    </h2>
                    <p className="text-lg text-gray-400 mb-10">
                        Réservez une démo de 20 minutes et voyez HelixLab en action sur votre clinique.
                    </p>
                    <a
                        href="mailto:contact@helixlab.fr?subject=Demande%20de%20démo%20Helixlab"
                        className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-xl text-base hover:bg-gray-100 transition-colors"
                    >
                        Nous contacter →
                    </a>
                </div>
            </section>
        </>
    );
}
