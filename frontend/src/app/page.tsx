import CTABanner from '@/components/home/CTABanner';
import FeaturedWork from '@/components/home/FeaturedWork';
import HeroSection from '@/components/home/HeroSection';
import HowIWork from '@/components/home/HowIWork';
import ImpactBento from '@/components/home/ImpactBento';
import TechMarquee from '@/components/home/TechMarquee';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <ImpactBento />
      <FeaturedWork />
      <HowIWork />
      <CTABanner />
    </>
  );
}
