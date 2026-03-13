import { getPracticeArea, getPracticeAreas } from '@/lib/api';
import { notFound } from 'next/navigation';
import SectionHeading from '@/components/ui/SectionHeading';

export async function generateStaticParams() {
  const areas = await getPracticeAreas();
  return areas.map((area) => ({ slug: area.slug }));
}

export default async function PracticeAreaPage({ params }: { params: { slug: string } }) {
  const area = await getPracticeArea(params.slug);
  if (!area) notFound();

  return (
    <article className="container mx-auto px-6 py-16 max-w-4xl">
      <SectionHeading align="left">{area.title.rendered}</SectionHeading>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: area.content.rendered }} />
    </article>
  );
}