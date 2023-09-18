import HeaderSection from '@/components/containers/header-section';
import HeroSection from '@/components/containers/hero-section';
import PageLayout from '@/components/layouts/page-layout';

export default function Home() {
  return (
    <PageLayout>
      <HeaderSection />
      <HeroSection />
    </PageLayout>
  );
}
