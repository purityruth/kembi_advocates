import { practiceAreas, PracticeArea } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  params: Promise<{ slug: string }>; // <- Important fix
}) {
  const { slug } = await params; // <- unwrap promise

  const area = await getPracticeArea(slug);
  if (!area) {
    return (
      <main className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Practice Area Not Found</h1>
        <p className="text-gray-600 mb-6">
          The requested practice area does not exist. Check your URL or go back.
        </p>
        <Link
          href="/practice-areas"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Practice Areas
        </Link>
      </main>
    );
  }

  const imageSrc = practiceAreaImages[slug] || "/images/default-practice.jpg";

  return (
    <main className="bg-white">
      {/* HERO IMAGE */}
      <div className="relative h-64 md:h-96 w-full">
        <img
          src={imageSrc}
          alt={area.title.rendered}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="absolute bottom-6 left-6 text-white text-3xl md:text-5xl font-bold">
          {area.title.rendered}
        </h1>
      </div>

      {/* CONTENT */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <div
          className="prose prose-lg text-gray-700 max-w-none"
          dangerouslySetInnerHTML={{ __html: area.content.rendered }}
        />
      </article>

      {/* BACK BUTTON */}
      <div className="text-center mb-16">
        <Link
          href="/practice-areas"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Practice Areas
        </Link>
      </div>
    </main>
  );
}
