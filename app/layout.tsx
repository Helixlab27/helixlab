import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/ui/mobile-nav";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "HelixLab — Relance automatique de prospects",
    description: "HelixLab automatise la relance de vos prospects pour les cliniques esthétiques.",
    other: {
        "color-scheme": "light only",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ scrollBehavior: "smooth" }}>
            <body className="antialiased">
                <MobileNav />
                <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 h-14 bg-white/85 backdrop-blur-md border-b border-black/6">
                    <a href="/accueil" className="text-base font-bold tracking-tight text-black">Helixlab.</a>
                    <div className="flex items-center gap-8">
                        {[
                            { label: "A propos", href: "#a-propos" },
                            { label: "Système",  href: "#systeme"  },
                            { label: "Fonctionnement", href: "#demo" },
                            { label: "Contact",  href: "#contact"  },
                        ].map(link => (
                            <a key={link.label} href={link.href} className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>
                <div className="pt-14">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
