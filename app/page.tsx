import HeaderSection from '@/components/containers/header-section';
import HeroSection from '@/components/containers/hero-section';
import ProjectSection from '@/components/containers/project-section';
import SkillSection from '@/components/containers/skill-section';
import PageLayout from '@/components/layouts/page-layout';

export default function Home() {
  return (
    <PageLayout>
      <HeaderSection />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </PageLayout>
  );
}
