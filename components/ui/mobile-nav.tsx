"use client";

import { useState } from "react";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "A propos", href: "#a-propos" },
        { label: "Système",  href: "#systeme"  },
        { label: "Fonctionnement", href: "#demo" },
        { label: "Contact",  href: "#contact"  },
    ];

    return (
        <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/6">
            <div className="flex items-center justify-between px-5 h-14">
                <a href="/accueil" className="text-lg font-bold tracking-tight text-black">
                    Helixlab.
                </a>
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                    className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
                >
                    <span className={`block h-[2px] w-6 bg-black rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block h-[2px] w-6 bg-black rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block h-[2px] w-6 bg-black rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64" : "max-h-0"}`}>
                <ul className="flex flex-col px-5 pb-5 pt-2 gap-4">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-base font-medium text-black/80 hover:text-black transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
