// app/practice-areas/[slug]/page.tsx
import { practiceAreas, PracticeArea } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import HeroInner from "@/components/ui/HeroInner";
import ContactCTA from "@/components/ui/ContactCTA";
import { motion } from "framer-motion";

const practiceAreaImages: Record<string, string> = {
  "real-estate-banking-finance": "/images/practice-areas/real-estate.jpg",
  "commercial-corporate-law": "/images/practice-areas/commercial-law.jpg",
  "dispute-resolution": "/images/practice-areas/dispute-resolution.jpg",
  "private-wealth": "/images/practice-areas/private-wealth.jpg",
  "employment-labour-law": "/images/practice-areas/employment-law.jpg",
  "immigration-law": "/images/practice-areas/immigration-law.jpg",
  "family-law": "/images/practice-areas/family-law.jpg",
  "tax-advisory": "/images/practice-areas/tax-advisory.jpg",
};

// Practice area descriptions for additional context
const practiceAreaDescriptions: Record<string, string> = {
  "real-estate-banking-finance": "Comprehensive legal solutions for property transactions, development projects, banking regulations, and financial services.",
  "commercial-corporate-law": "Strategic counsel on business formation, corporate governance, mergers & acquisitions, and commercial contracts.",
  "dispute-resolution": "Expert representation in litigation, arbitration, mediation, and alternative dispute resolution mechanisms.",
  "private-wealth": "Tailored advice on estate planning, wealth management, succession planning, and asset protection.",
  "employment-labour-law": "Guidance on employment contracts, workplace policies, dispute resolution, and regulatory compliance.",
  "immigration-law": "Assistance with work permits, residency applications, citizenship matters, and immigration compliance.",
  "family-law": "Sensitive handling of divorce, child custody, matrimonial property, and family dispute resolution.",
  "tax-advisory": "Strategic tax planning, compliance, dispute resolution, and advisory services for individuals and corporations.",
};

async function getPracticeArea(
  slug: string,
): Promise<PracticeArea | undefined> {
  return practiceAreas.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const area = await getPracticeArea(slug);
  if (!area) {
    notFound();
  }

  const imageSrc = practiceAreaImages[slug] || "/images/default-practice.jpg";
  const description = practiceAreaDescriptions[slug] || "";

  // Get related practice areas (exclude current, take first 3)
  const relatedAreas = practiceAreas
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroInner
        title={area.title.rendered}
        subtitle={description}
        breadcrumbs={[
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.title.rendered, href: `/practice-areas/${slug}` },
        ]}
        backgroundImage={imageSrc}
        overlayOpacity="dark"
        showScrollIndicator={false}
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: area.content.rendered }}
                />
              </div>

              {/* Key Highlights Section */}
              <div className="mt-12 pt-8 border-t border-[#d9d9d9]/30">
                <h3 className="text-2xl font-serif font-bold text-[#0a456e] mb-6">
                  Our Approach
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <div className="w-1 h-12 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Strategic Counsel
                      </h4>
                      <p className="text-gray-600 text-sm">
                        We provide practical, commercially viable solutions aligned with your objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-12 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Partner-Led Service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Direct partner involvement ensures the highest level of expertise and attention.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-12 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Technical Excellence
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Rigorous legal analysis backed by deep sector knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 h-12 bg-[#d9d9d9]" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Responsive & Agile
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Swift adaptation to shifting regulatory and commercial landscapes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="bg-gray-50 p-6 border border-[#d9d9d9]/30 mb-8">
                <h3 className="text-xl font-serif font-bold text-[#0a456e] mb-4">
                  Need Assistance?
                </h3>
                <div className="w-12 h-[2px] bg-[#d9d9d9] mb-4" />
                <p className="text-gray-600 text-sm mb-6">
                  Our team is ready to provide expert guidance on {area.title.rendered.toLowerCase()} matters.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3 bg-[#0a456e] text-white font-semibold text-sm hover:bg-[#0a456e]/90 transition-colors group"
                >
                  <span>Schedule a Consultation</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              {/* Key Contacts */}
              <div className="bg-gray-50 p-6 border border-[#d9d9d9]/30 mb-8">
                <h3 className="text-xl font-serif font-bold text-[#0a456e] mb-4">
                  Key Contacts
                </h3>
                <div className="w-12 h-[2px] bg-[#d9d9d9] mb-4" />
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">John Kembi Gitura</p>
                    <p className="text-sm text-gray-600">Senior Partner</p>
                    <a
                      href="mailto:john.kembi@kembigituralaw.com"
                      className="text-sm text-[#0a456e] hover:text-[#d9d9d9] transition-colors"
                    >
                      john.kembi@kembigituralaw.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Sarah Mwangi</p>
                    <p className="text-sm text-gray-600">Managing Partner</p>
                    <a
                      href="mailto:sarah.mwangi@kembigituralaw.com"
                      className="text-sm text-[#0a456e] hover:text-[#d9d9d9] transition-colors"
                    >
                      sarah.mwangi@kembigituralaw.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Resources */}
              <div className="bg-gray-50 p-6 border border-[#d9d9d9]/30">
                <h3 className="text-xl font-serif font-bold text-[#0a456e] mb-4">
                  Resources
                </h3>
                <div className="w-12 h-[2px] bg-[#d9d9d9] mb-4" />
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a456e] transition-colors group"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Practice Area Brochure
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0a456e] transition-colors group"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Case Study: Recent Success
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Practice Areas */}
      {relatedAreas.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-4">
                Related Practice Areas
              </h2>
              <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore other areas where we can provide expert legal guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAreas.map((relatedArea) => (
                <Link
                  key={relatedArea.id}
                  href={`/practice-areas/${relatedArea.slug}`}
                  className="group block bg-white border border-[#d9d9d9]/30 hover:border-[#d9d9d9] transition-all p-6"
                >
                  <h3 className="text-xl font-bold text-[#0a456e] mb-2 group-hover:text-[#d9d9d9] transition-colors">
                    {relatedArea.title.rendered}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {practiceAreaDescriptions[relatedArea.slug] || "Expert legal counsel in this practice area."}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#0a456e] group-hover:text-[#d9d9d9] transition-colors">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <ContactCTA
        title={`Expert ${area.title.rendered} Counsel`}
        subtitle="Whether you need strategic advice or representation, our team is ready to assist with your legal needs."
        buttonText="Speak With Our Team"
        buttonLink="/contact"
        backgroundImage={imageSrc}
        overlayOpacity="dark"
        textAlign="center"
      />
    </main>
  );
}

// Not Found Component
export function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-6xl font-serif font-bold text-[#0a456e] mb-4">
          404
        </h1>
        <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Practice Area Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The requested practice area does not exist. Please check the URL or return to the practice areas overview.
        </p>
        <Link
          href="/practice-areas"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Practice Areas
        </Link>
      </div>
    </main>
  );
}