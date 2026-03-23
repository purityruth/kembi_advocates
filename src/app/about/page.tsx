import AboutHero from "@/components/about/AboutHero";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutPracticeAreas from "@/components/about/AboutPracticeAreas";
import AboutTeamPreview from "@/components/about/AboutTeamPreview";
import AboutCTA from "@/components/about/AboutCTA";
import TeamSection from "@/components/home/TeamSection";

export default function Page() {
  return (
    <>
      <AboutHero />
      <AboutPhilosophy />
      {/* <AboutPracticeAreas /> */}
      <TeamSection />
      <AboutCTA />
    </>
  );
}
