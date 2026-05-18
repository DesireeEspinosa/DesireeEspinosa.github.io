import { films } from "../data/films";

export default function Cinema() {
    return (
        <section id="cinema" className="bg-bg2/50 px-20 py-16">
            {/* Header */}
            <div className="flex items-end justify-between mb-12">
                <div>
                    <p className="font-mono text-[10px] text-neon/70 tracking-widest mb-4">
                        — 05 / cinema
                    </p>
                    <h2 className="font-display font-light text-[clamp(36px,3.6vw,52px)] text-cream leading-tight">
                        My four favorites
                        <br />
                        <span className="italic text-neon">on letterboxd</span>
                    </h2>
                </div>

                <a
                    href="https://letterboxd.com/desies345/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted/50 hover:text-neon transition-colors border-b border-muted/20 hover:border-neon/40 pb-0.5 shrink-0"
                >
                    view my full diary on letterboxd ↗
                </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-4 gap-px bg-neon/10">
                {films.map((film, i) => (
                    <a
                        key={film.title}
                        href={film.letterboxd}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-bg2 p-6 flex flex-col gap-3 hover:bg-bg transition-colors duration-300"
                    >
                        {/* Accent line top */}
                        <div
                            className="absolute top-0 left-0 w-full h-0.5 transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                            style={{ background: `var(${film.accent})` }}
                        />

                        {/* Number */}
                        <span
                            className="font-mono text-xs tracking-[0.3em] opacity-40"
                            style={{ color: `var(${film.accent})` }}
                        >
                            0{i + 1}
                        </span>

                        {/* Title */}
                        <h3 className="font-display font-light text-xl text-cream leading-tight">
                            {film.title}
                        </h3>

                        {/* Director + year */}
                        <p
                            className="font-display italic text-lg leading-tight"
                            style={{
                                color: `color-mix(in srgb, var(${film.accent}) 60%, transparent)`,
                            }}
                        >
                            {film.director}, {film.year}
                        </p>

                        {/* Personal note */}
                        <p className="font-display italic text-base text-muted leading-relaxed flex-1">
                            {film.note}
                        </p>

                        {/* Rating + arrow */}
                        <div className="flex items-center justify-between mt-2">
                            <span
                                className="text-xs tracking-wider"
                                style={{
                                    color: `color-mix(in srgb, var(${film.accent}) 50%, transparent)`,
                                }}
                            >
                                {film.rating}
                            </span>
                            <span
                                className="font-mono text-xs opacity-0 group-hover:opacity-60 transition-opacity"
                                style={{ color: `var(${film.accent})` }}
                            >
                                ↗
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer — quote */}
            <p className="font-display italic text-base text-muted/50 mt-8 text-right">
                "I learned composition from films before I learned it from design."
            </p>
        </section>
    );
}
