import { technicalSkills } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * TechnicalSection Component
 * Technical skills grouped by category
 */
export default function TechnicalSection() {
  return (
    <SplitSection title="Technical Skills" id="technical" count={4}>
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--color-primary)] opacity-30 transform -translate-x-1/2"></div>

        <div className="space-y-10 md:space-y-14">
          {technicalSkills.map((group) => (
            <div key={group.id} className="relative">
              <div
                className="absolute left-1/2 top-0 w-3 h-3 bg-[var(--color-primary)] transform -translate-x-1/2 hidden md:block"
                style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
              ></div>

              {/* Mobile */}
              <div className="md:hidden space-y-2 text-center">
                <h3 className="text-large text-[var(--color-primary)]">{group.label}</h3>
                <p className="text-body">{group.items.join(" · ")}</p>
              </div>

              {/* Desktop */}
              <div className="hidden md:grid grid-cols-2 gap-6">
                <div className="text-right pr-8">
                  <h3 className="text-large text-[var(--color-primary)]">{group.label}</h3>
                </div>
                <div className="pl-8">
                  <p className="text-body max-w-md">{group.items.join(" · ")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}
