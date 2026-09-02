import { personalInfo } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";

/**
 * ContactSection Component
 * Centered contact section
 */
export default function ContactSection() {
  return (
    <SplitSection title="Contact" id="contact" count={6}>
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-8">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-40 h-48 object-cover"
            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
          />
        </div>

        <p className="text-large">{personalInfo.name}</p>

        <p className="text-body">
          {personalInfo.location.city}, {personalInfo.location.country}
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="text-body hover:text-[var(--color-primary)] transition-colors block"
        >
          {personalInfo.email}
        </a>

        <a
          href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
          className="text-body hover:text-[var(--color-primary)] transition-colors block"
        >
          {personalInfo.phone}
        </a>

        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body hover:text-[var(--color-primary)] transition-colors block"
        >
          LinkedIn
        </a>

        <p className="text-body">{personalInfo.languages}</p>
      </div>
    </SplitSection>
  );
}
