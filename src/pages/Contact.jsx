import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            );
            setStatus("success");
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="bg-bg px-20 py-16">
            <p className="font-mono text-[10px] text-neon/70 tracking-widest mb-10">
                — 06 / contact
            </p>

            <div className="grid grid-cols-[1fr_1fr] gap-20 items-start">
                {/* Left side - text */}
                <div className="relative">
                    <div
                        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(232,130,10,0.07) 0%, transparent 70%)",
                        }}
                    />

                    <h2 className="font-display font-light text-[clamp(36px,3.6vw,52px)] text-cream leading-tight mb-4 relative">
                        Let's make
                        <br />
                        <span className="italic text-neon glow-neon">
                            the next frame
                        </span>
                    </h2>

                    <p className="font-display italic text-lg text-muted leading-relaxed mb-8 relative">
                        Open to frontend or fullstack roles, UI/UX collaborations, and
                        interesting problems.
                    </p>

                    {/* Links directos */}
                    <div className="flex flex-col gap-3 relative">
                        {[
                            {
                                label: "linkedin",
                                href: "https://www.linkedin.com/in/desireeespinosac/",
                            },
                            {
                                label: "github",
                                href: "https://github.com/DesireeEspinosa",
                            },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-xs tracking-widest text-muted/60 hover:text-neon transition-colors w-fit border-b border-muted/20 hover:border-neon/40 pb-0.5"
                            >
                                {label} ↗
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right side - form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    {/* Nombre */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-sm text-muted/60 tracking-widest">
                            — name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            required
                            placeholder="Your name"
                            className="
                bg-bg2 border border-white/10 px-4 py-3
                font-display text-sm text-cream
                placeholder:text-muted/30
                focus:outline-none focus:border-neon/40
                transition-colors
              "
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-sm text-muted/60 tracking-widest">
                            — email
                        </label>
                        <input
                            type="email"
                            name="reply_to"
                            required
                            placeholder="your@email.com"
                            className="
                bg-bg2 border border-white/10 px-4 py-3
                font-display text-sm text-cream
                placeholder:text-muted/30
                focus:outline-none focus:border-neon/40
                transition-colors
              "
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                        <label className="font-mono text-sm text-muted/60 tracking-widest">
                            — message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about the opportunity..."
                            className="
                bg-bg2 border border-white/10 px-4 py-3
                font-display text-sm text-cream
                placeholder:text-muted/30
                focus:outline-none focus:border-neon/40
                transition-colors resize-none
              "
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="
                            flex items-center justify-between
                            border border-neon/25 px-5 py-4
                            font-mono text-sm tracking-widest
                            text-neon/70 hover:text-neon hover:border-neon/50
                            hover:bg-neon/3
                            disabled:opacity-40 disabled:cursor-not-allowed
                            transition-all duration-300
                            cursor-pointer
                        "
                    >
                        <span>
                            {status === "sending"
                                ? "sending..."
                                : "send message"}
                        </span>
                        <span>{status === "sending" ? "..." : "→"}</span>
                    </button>

                    {/* Feedback */}
                    {status === "success" && (
                        <p className="font-mono text-xs text-neon/70 tracking-wider">
                            ✓ message sent. I'll get back to you soon.
                        </p>
                    )}
                    {status === "error" && (
                        <p className="font-mono text-xs text-rose/70 tracking-wider">
                            ✕ something went wrong. try again or email me
                            directly.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
