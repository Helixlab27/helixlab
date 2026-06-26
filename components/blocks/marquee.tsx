"use client";

const items = [
    "Suivi cicatriciel",
    "Drainage lymphatique",
    "Protocole premium",
    "Excellence médicale",
    "Soins post-opératoires",
    "Reconstruction tissulaire",
];

export default function Marquee() {
    const doubled = [...items, ...items];

    return (
        <div className="border-y border-black/8 py-4 overflow-hidden bg-white">
            <div
                className="flex gap-12 w-max"
                style={{ animation: "marquee 28s linear infinite" }}
            >
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className="text-sm tracking-[0.25em] uppercase text-[#C9A96E] whitespace-nowrap flex items-center gap-12"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        {item}
                        <span className="text-[8px] text-[#8a6830]">✦</span>
                    </span>
                ))}
            </div>
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
}
