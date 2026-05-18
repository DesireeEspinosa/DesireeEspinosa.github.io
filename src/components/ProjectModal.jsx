import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
    const {
        name,
        year,
        period,
        type,
        desc,
        descLong,
        stack,
        accent,
        images,
        client,
    } = project;
    const [activeImg, setActiveImg] = useState(1);

    useEffect(() => {
        function handleKey(e) {
            if (e.key === "Escape") onClose();
            if (!project.video) {
                if (e.key === "ArrowRight")
                    setActiveImg((i) =>
                        Math.min(i + 1, (images?.length || 2) - 1),
                    );
                if (e.key === "ArrowLeft")
                    setActiveImg((i) => Math.max(i - 1, 1));
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose, images, project.video]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const hasImages = images && images.length > 0;
    const hasMultiple = images && images.length > 1;

    return (
        <>
            {/* Overlay with blur */}
            <div
                className="fixed inset-0 z-50 bg-bg/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none">
                <div
                    className="
            relative w-full max-w-190 max-h-[90vh]
            bg-bg2 border border-white/10
            overflow-y-auto pointer-events-auto scrollbar-none 
            flex flex-col
            rounded-lg
          "
                    style={{
                        borderTopColor: `var(${accent})`,
                        borderTopWidth: "2px",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 font-mono text-base text-muted hover:text-cream transition-colors z-10 cursor-pointer"
                    >
                        ✕
                    </button>

                    {/* Media */}
                    {!project.hideMedia && (
                        <div className="relative w-full h-75 shrink-0 overflow-hidden bg-bg">
                            {project.video ? (
                                <video
                                    src={project.video.src}
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-contain"
                                    style={{
                                        background: `color-mix(in srgb, var(${accent}) 5%, #08060a)`,
                                    }}
                                />
                            ) : (
                                <div className="relative w-full h-full">
                                    {hasImages && (
                                        <>
                                            <img
                                                key={activeImg}
                                                src={images[activeImg]}
                                                alt={`${name} ${activeImg + 1}`}
                                                className="w-full h-full object-contain"
                                                style={{
                                                    background: `color-mix(in srgb, var(${accent}) 5%, #08060a)`,
                                                }}
                                            />
                                            {hasMultiple && (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            setActiveImg((i) =>
                                                                Math.max(
                                                                    i - 1,
                                                                    1,
                                                                ),
                                                            )
                                                        }
                                                        disabled={
                                                            activeImg === 1
                                                        }
                                                        className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm px-2 py-1 bg-bg/70 border border-white/10 text-cream disabled:opacity-20 hover:bg-bg/90 transition-all cursor-pointer disabled:cursor-not-allowed rounded-sm"
                                                    >
                                                        ←
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setActiveImg((i) =>
                                                                Math.min(
                                                                    i + 1,
                                                                    images.length -
                                                                        1,
                                                                ),
                                                            )
                                                        }
                                                        disabled={
                                                            activeImg ===
                                                            images.length - 1
                                                        }
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-sm px-2 py-1 bg-bg/70 border border-white/10 text-cream disabled:opacity-20 hover:bg-bg/90 transition-all cursor-pointer disabled:cursor-not-allowed rounded-sm"
                                                    >
                                                        →
                                                    </button>
                                                    <span className="absolute bottom-3 right-4 font-mono text-[9px] text-white/40 tracking-widest">
                                                        {activeImg} /{" "}
                                                        {images.length - 1}
                                                    </span>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Info */}
                    <div className="p-8 flex flex-col gap-5">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span
                                    className="font-mono text-sm tracking-wider"
                                    style={{ color: `var(${accent})` }}
                                >
                                    {period}
                                </span>
                                <span
                                    className="font-mono text-sm"
                                    style={{
                                        color: `color-mix(in srgb, var(${accent}) 45%, transparent)`,
                                    }}
                                >
                                    {type}
                                </span>
                            </div>
                            <h2 className="font-display font-light text-[clamp(28px,2.6vw,38px)] text-cream leading-tight">
                                {name}
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="font-display italic text-lg text-muted leading-relaxed">
                            {desc + " " + descLong}
                        </p>

                        {/* Stack */}
                        <div>
                            <p className="font-mono text-sm text-muted/50 tracking-wider mb-2">
                                — tech stack
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {stack.map((s) => (
                                    <span
                                        key={s}
                                        className="font-mono text-xs tracking-wide px-2.5 py-1 border rounded-sm"
                                        style={{
                                            color: `var(${accent})`,
                                            borderColor: `color-mix(in srgb, var(${accent}) 30%, transparent)`,
                                            background: `color-mix(in srgb, var(${accent}) 8%, transparent)`,
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Client */}
                        <div className="border-t border-white/6 pt-4 flex items-center justify-between">
                            {client.url ? (
                                <a
                                    href={client.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                                    style={{ color: `var(${accent})` }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: `var(${accent})` }}
                                    />
                                    <span className="font-mono text-xs tracking-wide">
                                        Client: {client.name} ↗
                                    </span>
                                </a>
                            ) : (
                                <span
                                    className="flex items-center gap-2 opacity-35"
                                    style={{ color: `var(${accent})` }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: `var(${accent})` }}
                                    />
                                    <span className="font-mono text-xs tracking-wide">
                                        Client: {client.name}
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
