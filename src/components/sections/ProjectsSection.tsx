import { projects } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * ProjectsSection Component
 * Projects with live links
 */
export default function ProjectsSection() {
  return (
    <SplitSection title="Projects" id="projects" count={2}>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              {/* Center dot - organic blob shape */}
              <div
                className="absolute left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              ></div>

              {/* Mobile: Stacked layout */}
              <div className="md:hidden space-y-3 text-center">
                <h3 className="text-large text-[var(--color-primary)]">{project.name}</h3>
                <p className="text-body">{project.description}</p>
                <p className="text-small">{project.techStack.join(" · ")}</p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small underline hover:text-[var(--color-primary)] transition-colors break-all block"
                  >
                    {project.liveUrl}
                  </a>
                )}
              </div>

              {/* Desktop: Split layout */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                <div className="text-right pr-8">
                  <h3 className="text-large mb-1 text-[var(--color-primary)]">{project.name}</h3>
                  <p className="text-body">{project.description}</p>
                </div>

                <div className="pl-8">
                  <p className="text-body max-w-md mb-2">{project.techStack.join(" · ")}</p>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-small underline hover:text-[var(--color-primary)] transition-colors break-all"
                    >
                      {project.liveUrl}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}
