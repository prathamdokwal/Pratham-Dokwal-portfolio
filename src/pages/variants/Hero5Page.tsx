import Layout from "@/components/Layout";
import Hero5 from "@/components/sections/hero-variants/Hero5";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Hero5Page() {
  return (
    <Layout>
      <Hero5 />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}
