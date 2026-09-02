import Layout from "@/components/Layout";
import Hero3 from "@/components/sections/hero-variants/Hero3";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero3Page() {
  return (
    <Layout>
      <Hero3 />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
