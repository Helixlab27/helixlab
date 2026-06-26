
export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 font-sans">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Gauche */}
                    <div className="flex flex-col gap-3">
                        <span className="text-lg font-bold text-gray-900">Helixlab.</span>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Le système de relance automatique qui convertit vos prospects en rendez-vous.
                        </p>
                    </div>

                    {/* Centre */}
                    <div className="flex flex-col gap-3 md:items-center">
                        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Navigation</span>
                        <nav className="flex flex-col gap-2">
                            {[
                                { label: "A propos", href: "#a-propos" },
                                { label: "Système",  href: "#systeme"  },
                                { label: "Fonctionnement", href: "#demo" },
                                { label: "Contact",  href: "#contact"  },
                            ].map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Droite */}
                    <div className="flex flex-col gap-3 md:items-end">
                        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Contact</span>
                        <a
                            href="mailto:contact@helixlab.ai"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            contact@helixlab.ai
                        </a>
                        <a
                            href="https://instagram.com/helixlab.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                            <span>@helixlab.ai</span>
                        </a>
                    </div>

                </div>

                {/* Séparateur + copyright */}
                <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-gray-400">
                        © 2026 Helixlab. Tous droits réservés.
                    </p>
                    <a
                        href="/mentions-legales"
                        className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                    >
                        Mentions légales
                    </a>
                </div>
            </div>
        </footer>
    );
}
