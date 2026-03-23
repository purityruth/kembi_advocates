// app/practice-areas/page.tsx
import { getPracticeAreas } from "@/lib/api";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

// Map your 8 areas to images in /public/images/practice-areas/
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

export default async function PracticeAreasPage() {
  const areas = await getPracticeAreas();

  console.log(
    "Grid page slugs:",
    areas.map((a) => a.slug),
  ); // debug

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-20 bg-gray-50 text-center">
        <SectionHeading>Our Expertise</SectionHeading>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          We deliver strategic, high-impact legal solutions across key sectors.
        </p>
      </section>

      {/* GRID */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <Link
              key={area.id}
              href={`/practice-areas/${area.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="h-56 w-full relative overflow-hidden">
                <img
                  src={practiceAreaImages[area.slug]}
                  alt={area.title.rendered}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3
                  className="text-xl font-semibold text-dark-blue mb-3"
                  dangerouslySetInnerHTML={{ __html: area.title.rendered }}
                />
                <div
                  className="text-gray-600 mb-4 line-clamp-3 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: area.excerpt?.rendered || "",
                  }}
                />
                {/* Learn More button aligned at bottom */}
                <span className="mt-auto text-gold font-semibold">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
