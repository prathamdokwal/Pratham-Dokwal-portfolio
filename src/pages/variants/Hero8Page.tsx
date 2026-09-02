import Layout from "@/components/Layout";
import Hero8 from "@/components/sections/hero-variants/Hero8";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero8Page() {
  return (
    <Layout>
      <Hero8 />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
