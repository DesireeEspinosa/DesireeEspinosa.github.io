export default function Resume() {
  return (
    <section id="resume" className="bg-bg px-20 py-16">

      <p className="font-mono text-[10px] text-neon/70 tracking-widest mb-10">
        — 04 / resume
      </p>

      {/* Main grid */}
      <div className="grid grid-cols-[1fr_1fr] gap-20">

        {/* Left column */}
        <div className="flex flex-col gap-12">

          {/* Download */}
          <div>
            <p className="font-mono text-xs text-muted/50 tracking-[0.3em] mb-4">
              — download
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/DesireeEspinosa_Resume.pdf"
                download
                className="flex items-center justify-between px-5 py-4 border border-neon/20 hover:border-neon/50 hover:bg-neon/3 transition-all duration-300 group w-full"
              >
                <span className="font-mono text-sm tracking-wider text-cream">
                  resume / english
                </span>
                <span className="font-mono text-neon/40 group-hover:text-neon transition-colors">
                  ↓
                </span>
              </a>
              <a
                href="/DesireeEspinosa_CV.pdf"
                download
                className="flex items-center justify-between px-5 py-4 border border-neon/20 hover:border-neon/50 hover:bg-neon/3 transition-all duration-300 group w-full"
              >
                <span className="font-mono text-sm tracking-wider text-cream">
                  currículum / español
                </span>
                <span className="font-mono text-neon/40 group-hover:text-neon transition-colors">
                  ↓
                </span>
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="font-mono text-xs text-muted/50 tracking-[0.3em] mb-4">
              — certifications
            </p>
            <div className="flex flex-col">
              {[
                { name: "SFC™ — Scrum Fundamentals Certified", issuer: "VMEdu", year: "2024" },
                { name: "SODFC™ — Scrum for Ops and DevOps Fundamentals Certified", issuer: "VMEdu", year: "2025" },
                { name: "TOEFL iBT C1 English",                issuer: "ETS",        year: "2025" },
              ].map(({ name, issuer, year }) => (
                <div key={name} className="grid grid-cols-[1fr_auto] py-4 border-b border-neon/5">
                  <div>
                    <p className="font-display text-base text-cream leading-tight mb-0.5">
                      {name}
                    </p>
                    <p className="font-mono text-sm text-muted/60 tracking-wider">
                      {issuer}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-neon/50 tracking-wider pt-1">
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column */}
        <div className="flex flex-col gap-12">

          {/* Languages */}
          <div>
            <p className="font-mono text-xs text-muted/50 tracking-[0.3em] mb-4">
              — languages
            </p>
            <div className="flex flex-col">
              {[
                { lang: "Español", level: "Native" },
                { lang: "English", level: "C1" },
                { lang: "한국어",   level: "Elementary" },
              ].map(({ lang, level }) => (
                <div key={lang} className="grid grid-cols-[100px_1fr] py-4 border-b border-neon/5">
                  <p className="font-display text-base text-cream">{lang}</p>
                  <p className="font-display italic text-base text-muted">{level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Currently exploring */}
          {/* <div>
            <p className="font-mono text-xs text-muted/50 tracking-[0.3em] mb-4">
              — currently exploring
            </p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Flutter"].map(item => (
                <span
                  key={item}
                  className="font-mono text-[10px] tracking-wide px-3 py-1.5 border border-neon/15 text-neon/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div> */}

          {/* Availability */}
          <div className="border border-neon/30 px-5 py-4">
            <p className="font-mono text-xs text-neon/40 tracking-[0.3em] mb-2">
              — availability
            </p>
            <p className="font-display italic text-lg text-cream tracking-wide">
              Available for full-time roles starting June 2026.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-xs text-neon/60 tracking-wider">
                open to opportunities
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}