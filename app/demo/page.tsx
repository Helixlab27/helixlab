"use client"

import { useState, useEffect, useRef } from "react"

const DAYS = [
    { key: "1",  label: "J+1",     desc: "Check-in lendemain"  },
    { key: "3",  label: "J+3",     desc: "Suivi gonflement"    },
    { key: "7",  label: "J+7 ✦",  desc: "Questionnaire IA", special: true },
    { key: "14", label: "J+14",    desc: "Résultat final"      },
    { key: "30", label: "J+30",    desc: "Relance RDV"         },
]

const SCENARIOS: Record<string, any> = {
    "1": {
        date: "Lundi 10 juin 2026",
        steps: [
            { type: "typing", delay: 400 },
            { type: "out", delay: 1200, text: "Bonjour Sophie 🌿\n\nC'est HelixLab, votre clinique esthétique.\n\nComment vous sentez-vous le lendemain de votre injection Botox ? Un léger gonflement ou des rougeurs sont tout à fait normaux et disparaissent en 24–48h.\n\nN'hésitez pas à nous répondre si vous avez la moindre question 💬", time: "09:02" },
            { type: "in", delay: 3000, text: "Bonjour ! Tout va bien merci 😊 Juste un peu rouge, c'est normal ?", time: "09:47" },
        ],
        alert: null, ai: null,
    },
    "3": {
        date: "Mercredi 12 juin 2026",
        steps: [
            { type: "typing", delay: 400 },
            { type: "out", delay: 1200, text: "Bonjour Sophie 😊\n\nVotre clinique HelixLab revient vers vous 3 jours après votre injection.\n\nLe gonflement devrait maintenant être réduit. L'effet plein du Botox apparaît généralement entre J+7 et J+14 !\n\nComment vous sentez-vous ? 🌸", time: "10:15" },
            { type: "in", delay: 2800, text: "Oui le gonflement a disparu ! J'attends le résultat final avec impatience 😊", time: "11:30" },
        ],
        alert: null, ai: null,
    },
    "7": {
        date: "Dimanche 16 juin 2026",
        steps: [
            { type: "typing", delay: 400 },
            { type: "out", delay: 1200, text: "Bonjour Sophie ✨\n\nUne semaine après votre injection — votre clinique souhaite faire le point.\n\nPourriez-vous répondre à quelques questions rapides ? 🙏", time: "09:00" },
            { type: "out", delay: 2200, text: "1️⃣  Comment évaluez-vous le résultat sur 5 ?", time: "09:00" },
            { type: "out", delay: 3000, text: "2️⃣  Avez-vous ressenti des douleurs inhabituelles ?", time: "09:00" },
            { type: "out", delay: 3800, text: "3️⃣  Rougeurs, gonflements ou asymétrie persistants ?", time: "09:00" },
            { type: "in", delay: 5200, text: "2/5... J'ai très mal depuis hier soir, douleur forte dans la zone frontale et un gonflement asymétrique qui inquiète mon mari 😟", time: "10:22" },
            { type: "ai-analysis", delay: 6400 },
            { type: "alert-msg", delay: 7000, text: "⚠️ Alerte envoyée à votre clinique. Une praticienne va vous contacter dans les plus brefs délais.", time: "10:23" },
            { type: "typing", delay: 8200 },
            { type: "out", delay: 9200, text: "Sophie, nous avons bien reçu votre message et nous vous rappelons dans les plus brefs délais. Prenez soin de vous 🙏", time: "10:24" },
        ],
        ai: { body: "Score : 2/5 · Douleur forte signalée · Gonflement asymétrique · J+7 post-injection", result: "⚠️ ANOMALIE DÉTECTÉE" },
        alert: { body: "Sophie M. signale une douleur intense et un gonflement asymétrique à J+7 post-Botox. Intervention recommandée sous 24h." },
    },
    "14": {
        date: "Dimanche 23 juin 2026",
        steps: [
            { type: "typing", delay: 400 },
            { type: "out", delay: 1200, text: "Bonjour Sophie 💫\n\nDeux semaines après l'injection, c'est le moment où le Botox donne son meilleur résultat. Comment vous sentez-vous aujourd'hui ? 🌿", time: "11:00" },
            { type: "in", delay: 2800, text: "Oui merci ! Après votre appel tout est rentré dans l'ordre. Le résultat est superbe maintenant 😍 Merci à toute l'équipe !", time: "14:05" },
            { type: "typing", delay: 4000 },
            { type: "out", delay: 5000, text: "Nous sommes tellement contentes pour vous Sophie ! 😍 On revient vers vous dans 2 semaines pour un dernier point 🌷", time: "14:07" },
            { type: "ai-chip", delay: 5200, text: "🤖 IA · Réponse générée en 1.0s · Satisfaction détectée ✅" },
        ],
        alert: null, ai: null,
    },
    "30": {
        date: "Mardi 9 juillet 2026",
        steps: [
            { type: "typing", delay: 400 },
            { type: "out", delay: 1200, text: "Bonjour Sophie 🌷\n\nUn mois déjà depuis votre injection Botox chez HelixLab !\n\nPour maintenir vos résultats, c'est le bon moment pour planifier votre prochaine séance 📅\n\nRépondez « OUI » et nous vous envoyons le lien 😊", time: "10:00" },
            { type: "in", delay: 2800, text: "OUI ! Je veux reprendre RDV, vous êtes vraiment au top 🙏✨", time: "10:18" },
            { type: "typing", delay: 4000 },
            { type: "out", delay: 5000, text: "Avec plaisir Sophie ! 🌷 Voici le lien : calendly.com/helixlab27/30min — à très bientôt chez nous 💛", time: "10:19" },
            { type: "ai-chip", delay: 5200, text: "🤖 IA · Réponse générée en 0.8s · Intention RDV détectée ✅ · Lien Calendly envoyé" },
        ],
        alert: null, ai: null,
    },
}

export default function HelixLabDemo() {
    const [activeDay, setActiveDay] = useState<string | null>(null)
    const [bubbles, setBubbles] = useState<any[]>([])
    const [sentDays, setSentDays] = useState<Set<string>>(new Set())
    const [showAI, setShowAI] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [currentScenario, setCurrentScenario] = useState<any>(null)
    const bodyRef = useRef<HTMLDivElement>(null)
    const timers = useRef<ReturnType<typeof setTimeout>[]>([])

    useEffect(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }, [bubbles])

    const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = [] }

    const loadDay = (key: string) => {
        if (key === activeDay) return
        clearTimers()
        setActiveDay(key)
        setBubbles([])
        setShowAI(false)
        setShowAlert(false)
        setSentDays(prev => new Set([...prev, key]))
        const scenario = SCENARIOS[key]
        setCurrentScenario(scenario)
        scenario.steps.forEach((step: any) => {
            const t = setTimeout(() => {
                if (step.type === "typing") {
                    setBubbles(prev => [...prev, { id: Date.now(), type: "typing" }])
                } else if (step.type === "out" || step.type === "in") {
                    setBubbles(prev => [...prev.filter((b: any) => b.type !== "typing"), { id: Date.now() + Math.random(), type: step.type, text: step.text, time: step.time }])
                } else if (step.type === "alert-msg") {
                    setBubbles(prev => [...prev, { id: Date.now(), type: "alert-msg", text: step.text }])
                } else if (step.type === "ai-chip") {
                    setBubbles(prev => [...prev, { id: Date.now() + Math.random(), type: "ai-chip", text: step.text }])
                } else if (step.type === "ai-analysis") {
                    setShowAI(true); setShowAlert(true)
                }
            }, step.delay)
            timers.current.push(t)
        })
    }

    const sentCount = sentDays.size

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #F5F0EA 0%, #EDE5D8 50%, #E8DDD0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 24px",
            fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 80, flexWrap: "wrap", justifyContent: "center" }}>

                {/* ── DROITE : iPhone 14 Pro Max en 3D ── */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, order: 2 }}>

                    {/* Timeline */}
                    <div style={{ display: "flex", gap: 6 }}>
                        {DAYS.map(d => {
                            const active = activeDay === d.key
                            const sent = sentDays.has(d.key)
                            return (
                                <button
                                    key={d.key}
                                    onClick={() => loadDay(d.key)}
                                    style={{
                                        display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                                        padding: "6px 10px", borderRadius: 10,
                                        border: `1px solid ${active ? "#C9A96E" : d.special ? "rgba(201,169,110,0.4)" : "rgba(0,0,0,0.12)"}`,
                                        background: active ? "rgba(201,169,110,0.18)" : d.special ? "rgba(201,169,110,0.06)" : "rgba(255,255,255,0.55)",
                                        backdropFilter: "blur(10px)",
                                        cursor: "pointer", transition: "all 0.18s", outline: "none", minWidth: 52,
                                    }}
                                >
                                    <span style={{ fontSize: 10, fontWeight: 700, color: active ? "#8B6914" : "#C9A96E" }}>{d.label}</span>
                                    <span style={{ fontSize: 8, color: active ? "#555" : "#999", lineHeight: 1.2, textAlign: "center" }}>{d.desc}</span>
                                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: sent ? "#25D366" : "rgba(0,0,0,0.12)", marginTop: 2 }} />
                                </button>
                            )
                        })}
                    </div>

                    {/* iPhone 14 Pro Max frame — perspective 3D */}
                    <div style={{
                        position: "relative",
                        transform: "perspective(1100px) rotateY(-22deg) rotateX(6deg)",
                        transformOrigin: "center center",
                        filter: "drop-shadow(-20px 30px 40px rgba(0,0,0,0.35))",
                        transition: "transform 0.4s ease",
                    }}>

                        {/* Boutons gauche (volume) */}
                        <div style={{ position: "absolute", left: -3, top: 88, width: 3, height: 28, background: "#1C1C1E", borderRadius: "3px 0 0 3px" }} />
                        <div style={{ position: "absolute", left: -3, top: 124, width: 3, height: 44, background: "#1C1C1E", borderRadius: "3px 0 0 3px" }} />
                        <div style={{ position: "absolute", left: -3, top: 176, width: 3, height: 44, background: "#1C1C1E", borderRadius: "3px 0 0 3px" }} />
                        {/* Bouton droit (power) */}
                        <div style={{ position: "absolute", right: -3, top: 148, width: 3, height: 64, background: "#1C1C1E", borderRadius: "0 3px 3px 0" }} />

                        {/* Corps du téléphone */}
                        <div style={{
                            width: 260,
                            height: 540,
                            background: "linear-gradient(160deg, #3D3D3D 0%, #2A2A2A 30%, #1C1C1C 60%, #111 100%)",
                            border: "10px solid #3a3a3a",
                            borderRadius: 44,
                            padding: 0,
                            boxShadow: `
                                inset 0 1px 0 rgba(255,255,255,0.12),
                                inset 0 -1px 0 rgba(0,0,0,0.4),
                                inset 1px 0 0 rgba(255,255,255,0.06),
                                inset -1px 0 0 rgba(0,0,0,0.3),
                                0 0 0 1px #222,
                                0 2px 4px rgba(255,255,255,0.04),
                                0 25px 60px rgba(0,0,0,0.55),
                                0 8px 20px rgba(0,0,0,0.35),
                                4px 4px 12px rgba(0,0,0,0.25)
                            `,
                            position: "relative",
                        }}>

                            {/* Écran */}
                            <div style={{
                                width: "100%",
                                height: "100%",
                                background: "#E5DDD5",
                                borderRadius: 34,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                            }}>

                                {/* Status bar */}
                                <div style={{
                                    height: 44,
                                    background: "#075E54",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                    padding: "0 20px 6px",
                                    flexShrink: 0,
                                }}>
                                    <span style={{ fontSize: 10, fontWeight: 600, color: "white" }}>09:41</span>
                                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.7)" }}>▲ ● ▬</span>
                                </div>

                                {/* Dynamic Island */}
                                <div style={{
                                    position: "absolute",
                                    top: 10,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 90,
                                    height: 26,
                                    background: "#000",
                                    borderRadius: 20,
                                    zIndex: 10,
                                }} />

                                {/* WhatsApp header */}
                                <div style={{
                                    background: "#075E54",
                                    padding: "8px 12px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    flexShrink: 0,
                                }}>
                                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg,#C9A96E,#8B6914)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "white", flexShrink: 0 }}>H</div>
                                    <div>
                                        <div style={{ fontSize: 12, fontWeight: 600, color: "white" }}>HelixLab Clinic</div>
                                        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>en ligne</div>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div ref={bodyRef} style={{ flex: 1, padding: "8px 6px", display: "flex", flexDirection: "column", gap: 3, overflowY: "auto" }}>
                                    {!activeDay && (
                                        <div style={{ textAlign: "center", color: "rgba(0,0,0,0.3)", fontSize: 11, margin: "auto", padding: "0 16px", lineHeight: 2 }}>
                                            Sélectionnez un jour{"\n"}dans le parcours ↑
                                        </div>
                                    )}
                                    {activeDay && currentScenario && (
                                        <div style={{ alignSelf: "center", fontSize: 9, color: "#8a8a8a", background: "rgba(255,255,255,0.6)", borderRadius: 7, padding: "2px 8px", margin: "2px 0" }}>
                                            {currentScenario.date}
                                        </div>
                                    )}
                                    {bubbles.map((b: any) => {
                                        if (b.type === "typing") return (
                                            <div key={b.id} style={{ background: "white", borderRadius: 8, padding: "7px 10px", alignSelf: "flex-start", display: "flex", gap: 3, alignItems: "center" }}>
                                                {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#bbb", animation: `bounce 1.2s ${i * 0.2}s infinite` }} />)}
                                            </div>
                                        )
                                        if (b.type === "alert-msg") return (
                                            <div key={b.id} style={{ padding: "6px 8px", borderRadius: 8, fontSize: 9, background: "#FFF3CD", border: "1px solid #FFDB70", color: "#7A5C00", alignSelf: "center", maxWidth: "90%", textAlign: "center" }}>{b.text}</div>
                                        )
                                        if (b.type === "ai-chip") return (
                                            <div key={b.id} style={{ alignSelf: "center", background: "#1A1A1A", color: "#C9A96E", fontSize: 8, fontWeight: 700, padding: "3px 8px", borderRadius: 20, margin: "2px auto", letterSpacing: "0.05em", maxWidth: "90%", textAlign: "center" }}>{b.text}</div>
                                        )
                                        const isOut = b.type === "out"
                                        return (
                                            <div key={b.id} style={{
                                                maxWidth: "82%", padding: "5px 7px 14px",
                                                borderRadius: isOut ? "8px 8px 2px 8px" : "8px 8px 8px 2px",
                                                fontSize: 10, lineHeight: 1.45,
                                                background: isOut ? "#DCF8C6" : "white",
                                                alignSelf: isOut ? "flex-end" : "flex-start",
                                                color: "#111", whiteSpace: "pre-wrap", position: "relative",
                                            }}>
                                                {b.text}
                                                {b.time && <span style={{ position: "absolute", bottom: 3, right: 7, fontSize: 8, color: "rgba(0,0,0,0.35)" }}>{b.time}</span>}
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Input */}
                                <div style={{ background: "#F0F0F0", padding: "5px 8px", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                                    <div style={{ flex: 1, background: "white", borderRadius: 18, padding: "4px 10px", fontSize: 10, color: "#bbb" }}>Message</div>
                                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#128C7E", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10 }}>➤</div>
                                </div>

                                {/* Home indicator */}
                                <div style={{ background: "#E5DDD5", padding: "6px 0 8px", display: "flex", justifyContent: "center", flexShrink: 0 }}>
                                    <div style={{ width: 90, height: 4, background: "#1A1A1A", borderRadius: 4, opacity: 0.25 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── GAUCHE : Info panels ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 260, order: 1 }}>

                    <div style={{ marginBottom: 8 }}>
                        <div style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", letterSpacing: "0.08em" }}>
                            HelixLab<sup style={{ fontSize: 11, color: "#C9A96E", verticalAlign: "super" }}>®</sup>
                        </div>
                        <div style={{ fontSize: 9, color: "#C9A96E", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Suivi patient IA</div>
                    </div>

                    <div style={{ background: "rgba(255,255,255,0.75)", borderRadius: 16, padding: "14px 16px", border: "1px solid rgba(201,169,110,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: 8 }}>Patiente</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>Sophie M.</div>
                        <div style={{ fontSize: 11, color: "#888", marginTop: 3 }}>Injection Botox · 09/06/2026</div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#1A1A1A", color: "#C9A96E", fontSize: 9, fontWeight: 700, padding: "3px 9px", borderRadius: 20, marginTop: 10, letterSpacing: "0.08em" }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#25D366" }} /> IA active
                        </div>
                    </div>

                    <div style={{ background: "rgba(255,255,255,0.75)", borderRadius: 16, padding: "14px 16px", border: "1px solid rgba(201,169,110,0.25)", backdropFilter: "blur(16px)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: 8 }}>Statistiques</div>
                        {[
                            ["Messages envoyés", `${sentCount} / 5`],
                            ["Taux de réponse", "92%"],
                            ["Alertes clinique", showAlert ? "1" : "0"],
                            ["Économie / mois", "~8h staff"],
                        ].map(([label, val], i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none", fontSize: 11 }}>
                                <span style={{ color: "#aaa" }}>{label}</span>
                                <span style={{ fontWeight: 700, color: label === "Alertes clinique" && showAlert ? "#E67E00" : "#1A1A1A" }}>{val}</span>
                            </div>
                        ))}
                    </div>

                    {showAI && currentScenario?.ai && (
                        <div style={{ background: "#1A1A1A", borderRadius: 16, padding: "14px 16px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)", animation: "fadeUp 0.3s ease" }}>
                            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A96E", marginBottom: 6 }}>🤖 Analyse IA</div>
                            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{currentScenario.ai.body}</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#ff6b6b", marginTop: 8 }}>{currentScenario.ai.result}</div>
                        </div>
                    )}

                    {showAlert && currentScenario?.alert && (
                        <div style={{ background: "rgba(255,243,205,0.95)", border: "1.5px solid #FFDB70", borderRadius: 16, padding: "14px 16px", boxShadow: "0 4px 24px rgba(230,126,0,0.15)", animation: "fadeUp 0.3s ease" }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: "#5A3D00", marginBottom: 6 }}>⚠️ ALERTE CLINIQUE</div>
                            <div style={{ fontSize: 10, color: "#7A5C00", lineHeight: 1.6 }}>{currentScenario.alert.body}</div>
                            <div style={{ display: "inline-block", background: "#E67E00", color: "white", fontSize: 9, fontWeight: 700, padding: "5px 12px", borderRadius: 20, marginTop: 10, letterSpacing: "0.05em" }}>📞 Contacter Sophie M.</div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-4px); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                button:hover { opacity: 0.85; }
            `}</style>
        </div>
    )
}
