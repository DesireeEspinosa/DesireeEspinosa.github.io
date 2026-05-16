import { useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    function handleScroll() {
        if (!scrollRef.current) return;
        const cardWidth = 300 + 20;
        const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
    }

    function scrollTo(index) {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: index * (300 + 20),
            behavior: "smooth",
        });
        setActiveIndex(index);
    }

    return (
        <section id="projects" className="bg-bg py-24 overflow-hidden">
            <div className="px-20 mb-12">
                <p className="font-mono text-[10px] text-neon/70 tracking-widest mb-6">
                    — 03 / projects
                </p>
                <div className="flex items-baseline gap-4">
                    <h2 className="font-display font-light text-5xl text-cream">
                        Selected
                    </h2>
                    <h2 className="font-display font-light italic text-5xl text-neon glow-neon">
                        work
                    </h2>
                </div>
                <p className="font-mono text-xs text-muted tracking-[0.3em] mt-4 mb-5">
                    {projects.length} projects
                </p>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-5 overflow-x-auto pb-6 pl-20 scroll-smooth snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden"
                >
                    {projects.map((p) => (
                        <div
                            key={p.id}
                            className="snap-start shrink-0"
                            onClick={() => setSelectedProject(p)}
                        >
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
}
