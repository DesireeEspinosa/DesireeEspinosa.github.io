import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const { name, year, period, type, desc, stack, accent, images, client } = project;
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

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
            overflow-y-auto pointer-events-auto
            flex flex-col
          "
          style={{ borderTopColor: `var(${accent})`, borderTopWidth: "2px" }}
          onClick={e => e.stopPropagation()}
        >

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 font-mono text-[11px] text-muted hover:text-cream transition-colors z-10"
          >
            ✕ esc
          </button>

          {/* Image gallery */}
          <div className="relative w-full h-75 bg-bg shrink-0 overflow-hidden">
            {images && images.length > 0 ? (
              <>
                <img
                  src={images[activeImg]}
                  alt={`${name} screenshot ${activeImg + 1}`}
                  className="w-full h-full object-cover object-top"
                />
                {/* Thumbnails if more than 1 image */}
                {images.length > 1 && (
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        className={`w-12 h-8 overflow-hidden border transition-all ${
                          activeImg === i
                            ? "border-white/60 opacity-100"
                            : "border-white/20 opacity-40 hover:opacity-70"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `color-mix(in srgb, var(${accent}) 6%, transparent)` }}
              >
                <span
                  className="font-mono text-[8px] tracking-[0.2em] border border-dashed px-3 py-1.5"
                  style={{
                    color: `color-mix(in srgb, var(${accent}) 40%, transparent)`,
                    borderColor: `color-mix(in srgb, var(${accent}) 20%, transparent)`,
                  }}
                >
                  [ add screenshots ]
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col gap-5">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="font-mono text-[9px] tracking-wider"
                  style={{ color: `var(${accent})` }}
                >
                  {year}
                </span>
                <span
                  className="font-mono text-[9px]"
                  style={{ color: `color-mix(in srgb, var(${accent}) 45%, transparent)` }}
                >
                  {type}
                </span>
                <span className="font-mono text-[9px] text-muted/40">
                  {period}
                </span>
              </div>
              <h2 className="font-display font-light text-[clamp(28px,2.6vw,38px)] text-cream leading-tight">
                {name}
              </h2>
            </div>

            {/* Description */}
            <p className="font-display italic text-[14px] text-muted leading-relaxed">
              {desc}
            </p>

            {/* Stack */}
            <div>
              <p className="font-mono text-[8px] text-muted/50 tracking-[0.3em] mb-2">
                — tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map(s => (
                  <span
                    key={s}
                    className="font-mono text-[8px] tracking-wide px-2.5 py-1 border"
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
                  <span className="font-mono text-[9px] tracking-wide">
                    {client.name} ↗
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
                  <span className="font-mono text-[9px] tracking-wide">
                    {client.name}
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