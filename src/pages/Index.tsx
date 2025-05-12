
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <AdvantagesSection />
      <ProjectsSection />
      <ContactForm />
    </Layout>
  );
};

export default Index;
