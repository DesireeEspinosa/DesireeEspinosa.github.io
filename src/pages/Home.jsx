import { useEffect, useState } from "react";

const tickerItems = [
    "REACT",
    "JAVASCRIPT",
    "UI/UX",
    "TAILWIND CSS",
    "NODE.JS",
    "REST APIs",
    "AWS",
    "FIGMA",
    "REACT NATIVE",
    "MONGODB",
    "MYSQL",
    "PYTHON",
    "C++",
    "GIT",
    "HCI",
    "DOCKER",
];

export default function Home() {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return now.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("es-MX", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                }),
            );
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[calc(100vh-72px-50px)] bg-bg overflow-hidden flex flex-col justify-end px-20 pb-0">
            <span
                className="
                absolute top-4 left-2.5
                font-display font-light italic
                text-[clamp(120px,16vw,200px)] tracking-wide
                text-neon/18 leading-none
                pointer-events-none"
            >
                Desirée
            </span>

            <span
                className="
                absolute top-7 right-20
                font-mono text-[10px] text-neon/35
                tracking-[0.25em]"
            >
                FRAME 0024 / ROLL 12
            </span>

            <p className="font-mono text-xs text-neon/70 tracking-widest mb-5">
                {time} — CUERNAVACA, MX — 2026
            </p>

            <h1 className="font-title font-medium text-[clamp(48px,6vw,68px)] text-cream leading-[1.05] mb-2">
                Frontend developer
            </h1>

            <h2
                className="
                font-display font-light italic
                text-[clamp(16px,1.6vw,22px)]
                text-neon glow-neon leading-tight mb-8"
            >
                Film enthusiast
            </h2>

            <p
                className="
                font-display italic text-lg text-muted
                leading-relaxed max-w-120 mb-20"
            >
                I build interfaces with the same attention I give to a Wong
                Kar-wai shot.
                <br />
                Every detail deliberate, nothing accidental.
            </p>

            <div className="flex gap-6 mb-15">
                <a
                    href="#projects"
                    className="
                    font-mono text-xs tracking-widest
                    border border-neon/20 px-5 py-3
                    text-neon/70 hover:text-neon hover:border-neon/50
                    transition-all duration-300"
                >
                    View projects →
                </a>
            </div>
            
            <div className="relative -mx-20 border-t border-b border-neon/20 overflow-hidden mb-5">
                <div className="flex gap-5 px-3 py-1 border-b border-neon/10">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-2 rounded-xs bg-bg border border-neon/25 shrink-0"
                        />
                    ))}
                </div>

                {/* Ticker */}
                <div className="flex overflow-hidden py-1 bg-neon/4">
                    <div className="flex animate-ticker whitespace-nowrap">
                        {[...tickerItems, ...tickerItems].map((item, i) => (
                            <span
                                key={i}
                                className="font-mono text-xs text-neon/30 tracking-[0.25em] px-4 shrink-0"
                            >
                                {item}
                                <span className="mx-3">·</span>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-4.5 px-3 py-1 border-t border-neon/10">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-4 h-2 rounded-xs bg-bg border border-neon/25 shrink-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
