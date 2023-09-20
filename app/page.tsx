import ContactSection from '@/components/containers/contact-section';
import FooterSection from '@/components/containers/footer-section';
import HeaderSection from '@/components/containers/header-section';
import HeroSection from '@/components/containers/hero-section';
import ProjectSection from '@/components/containers/project-section';
import SkillSection from '@/components/containers/skill-section';

export default function Home() {
  return (
    <main className='mt-5'>
      <HeaderSection />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
