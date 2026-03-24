// app/team/page.tsx
"use client";

import HeroInner from "@/components/ui/HeroInner";
import ContactCTA from "@/components/ui/ContactCTA";
import TeamGrid from "@/components/ui/TeamGrid";
import { teamMembers } from "@/lib/teamData";

export default function TeamPage() {
  // Group members by rank for the grid
  const partners = teamMembers.filter(
    (m) => m.position === "Senior Partner" || m.position === "Managing Partner" || m.position === "Partner"
  );
  const seniorAssociates = teamMembers.filter((m) => m.position === "Senior Associate");
  const associates = teamMembers.filter((m) => m.position === "Associate");

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroInner
        title="Our Team"
        subtitle="Meet the distinguished professionals dedicated to providing exceptional legal counsel and client service."
        breadcrumbs={[{ label: "Team", href: "/team" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        showScrollIndicator={true}
      />

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team brings together exceptional legal talent, deep industry knowledge,
              and a shared commitment to client success. We work collaboratively across
              practice areas to deliver comprehensive solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {partners.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <TeamGrid
              members={partners}
              title="Partners"
              subtitle="Our leadership team brings decades of experience and strategic insight."
              columns={3}
              variant="default"
            />
          </div>
        </section>
      )}

      {/* Senior Associates Section */}
      {seniorAssociates.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <TeamGrid
              members={seniorAssociates}
              title="Senior Associates"
              subtitle="Experienced legal professionals dedicated to client success."
              columns={3}
              variant="default"
            />
          </div>
        </section>
      )}

      {/* Associates Section */}
      {associates.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <TeamGrid
              members={associates}
              title="Associates"
              subtitle="Talented legal professionals committed to excellence."
              columns={3}
              variant="default"
            />
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <ContactCTA
        title="Work With Our Distinguished Team"
        subtitle="Partner with experienced advocates who are committed to your success."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        textAlign="center"
      />
    </main>
  );
}