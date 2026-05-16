import { skills } from "../data/skills";
import { education } from "../data/education";

export default function About() {
    return (
        <section id="about" className="bg-bg px-20 py-16">
            <p className="font-mono text-[10px] text-neon/70 tracking-widest mb-10">
                — 02 / about me
            </p>

            <div className="flex gap-8 mb-10">
                {/* Film strip */}
                <div className="flex flex-col gap-0.75 shrink-0">
                    {[
                        { label: "portrait", active: true },
                        { label: "KNU", active: false },
                        { label: "ITESM", active: false },
                    ].map(({ label, active }) => (
                        <div
                            key={label}
                            className={`
                                relative w-24 h-16 flex items-center justify-center border
                                ${active ? "bg-film border-neon/50" : "bg-film/60 border-neon/12"}
                            `}
                        >
                            <div className="absolute left-1 inset-y-0 flex flex-col justify-evenly">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-xs bg-bg border border-neon/15"
                                    />
                                ))}
                            </div>
                            <span
                                className={`font-mono text-[9px] pl-3 ${active ? "text-neon/80" : "text-neon/30"}`}
                            >
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Portrait text */}
                <div className="max-w-200">
                    <h2 className="font-display font-light text-[clamp(28px,2.6vw,38px)] text-cream leading-12 mb-6">
                        Building things with the same attention
                        <br />
                        <span className="italic text-neon">
                            as a shot you can't forget
                        </span>
                    </h2>

                    <p className="font-display text-[clamp(13px,1.4vw,20px)] text-muted leading-[1.8] mb-3">
                        B.S. in Computer Science and Technology at Tec de
                        Monterrey — graduating June 2026, GPA 3.81. <br />
                        Academic exchange at Kyungpook National University,
                        South Korea.
                    </p>

                    <p className="font-display italic text-[clamp(14px,1.2vw,16px)] text-muted leading-[1.85] mb-1">
                        I work where Frontend development meets interaction
                        design. Drawn to interfaces that feel inevitable, where
                        you can't imagine them existing any other way.
                    </p>

                    <p className="font-display italic text-[clamp(14px,1.2vw,16px)] text-muted leading-[1.85]">
                        When I'm not coding I'm in a room watching something
                        shot on film, taking notes in the margins.
                    </p>
                </div>
            </div>

            {/* Education timeline */}
            <div className="border-t border-neon/12 pt-5">
                <p className="font-mono text-[10px] text-neon/70 tracking-[0.4em] mb-5">
                    — education & experience
                </p>

                <div className="flex flex-col">
                    {education.map(({ period, title, detail }, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-[140px_1fr] py-5 border-b border-neon/7"
                        >
                            <span className="font-mono text-xs text-neon/50 tracking-[0.15em] pt-1">
                                {period}
                            </span>
                            <div>
                                <p className="font-display text-base text-cream leading-tight mb-1">
                                    {title}
                                </p>
                                <p className="font-display italic text-sm text-muted">
                                    {detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
