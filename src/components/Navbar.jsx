import { useState } from "react";

const links = [
    { label: "about", href: "#about" },
    { label: "projects", href: "#projects" },
    { label: "resume", href: "#resume" },
    { label: "cinema", href: "#cinema" },
    { label: "contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="
            w-full h-18 bg-bg
            flex items-center
            px-20
            border-b border-neon/15
            sticky top-0 z-50"
        >
            {/* Logo */}
            <div className="flex-1">
                <a
                    href="/"
                    className="font-mono text-sm text-neon tracking-[0.3em] hover:opacity-70 transition-opacity"
                >
                    D · E · C
                </a>
            </div>

            {/* Links - desktop */}
            <ul className="hidden md:flex items-center gap-8">
                {links.map(({ label, href }) => (
                    <li key={label}>
                        <a
                            href={href}
                            className="font-mono text-xs tracking-[0.2em] text-muted hover:text-neon transition-colors duration-200"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Dot */}
            <span className="hidden md:block w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_#e040a0] animate-pulse ml-8" />

            {/* Hamburger — mobile */}
            <button
                className="md:hidden font-mono text-xs text-muted tracking-widest ml-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="menu"
            >
                {menuOpen ? "✕" : "menu"}
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="
                    absolute top-72 left-0 w-full   
                    bg-bg border-b border-neon/10
                    flex flex-col px-20 py-6 gap-5
                    md:hidden"
                >
                    {links.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="font-mono text-xs tracking-[0.2em] text-muted hover:text-neon transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
