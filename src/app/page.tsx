import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import TeamSection from '@/components/home/TeamSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeAreasSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}