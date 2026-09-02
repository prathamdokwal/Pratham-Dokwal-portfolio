import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * AboutSection Component
 * Centered about section
 */
export default function AboutSection() {
  return (
    <SplitSection title="About" id="about" count={1}>
      <div className="text-center">
        <p className="text-body max-w-2xl mx-auto">{personalInfo.bio}</p>
      </div>
    </SplitSection>
  );
}
