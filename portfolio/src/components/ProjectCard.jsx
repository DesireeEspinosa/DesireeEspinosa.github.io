// src/components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  const { name, year, type, desc, stack, accent, image, client } = project;

  return (
    <div
      className="relative w-75 h-115 shrink-0 flex flex-col bg-bg2 border border-white/5"
      style={{ borderTopColor: `var(${accent})`, borderTopWidth: "2px" }}
    >

      {/* Image */}
      <div
        className="h-40 shrink-0 overflow-hidden flex items-center justify-center"
        style={{ background: `color-mix(in srgb, var(${accent}) 8%, transparent)` }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span
            className="font-mono text-[8px] tracking-[0.2em] border border-dashed px-3 py-1.5"
            style={{
              color: `color-mix(in srgb, var(${accent}) 50%, transparent)`,
              borderColor: `color-mix(in srgb, var(${accent}) 25%, transparent)`,
            }}
          >
            [ add screenshot ]
          </span>
        )}
      </div>

      {/* Info  */}
      <div className="flex flex-col flex-1 p-4 border-t border-white/5 overflow-hidden">

        {/* Year + type */}
        <div className="flex items-center gap-3 mb-2 shrink-0">
          <span
            className="font-mono text-xs tracking-wider"
            style={{ color: `var(${accent})` }}
          >
            {year}
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: `color-mix(in srgb, var(${accent}) 45%, transparent)` }}
          >
            {type}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display font-light text-3xl text-cream leading-tight mb-2 shrink-0">
          {name}
        </h3>

        {/* Description */}
        <p
          className="font-display italic text-base text-muted leading-relaxed mb-3 shrink-0"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-3 shrink-0">
          {stack.map(s => (
            <span
              key={s}
              className="font-mono text-[10px] tracking-wide px-2 py-1 rounded-sm border"
              style={{
                color: `var(${accent})`,
                borderColor: `color-mix(in srgb, var(${accent}) 30%, transparent)`,
                background: `color-mix(in srgb, var(${accent}) 10%, transparent)`,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Footer card: client */}
        <div className="flex items-center justify-between border-t border-white/4 pt-3 mt-auto shrink-0">

          {client.url ? (
            <a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-opacity opacity-40 hover:opacity-90"
              style={{ color: `var(${accent})` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: `var(${accent})` }}
              />
              <span className="font-mono text-xs tracking-wide">
                {client.name}
              </span>
            </a>
          ) : (
            <span
              className="flex items-center gap-1.5 opacity-35"
              style={{ color: `var(${accent})` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: `var(${accent})` }}
              />
              <span className="font-mono text-xs ">
                <p>Client: {client.name}</p>
              </span>
            </span>
          )}

          <span
            className="font-mono text-sm opacity-40"
            style={{ color: `var(${accent})` }}
          >
            ↗
          </span>
        </div>
      </div>
    </div>
  );
}