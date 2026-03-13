import { getPracticeAreas } from '@/lib/api';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

export default async function PracticeAreasPage() {
  const areas = await getPracticeAreas();

  return (
    <div className="container mx-auto px-6 py-16">
      <SectionHeading align="left">Practice Areas</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area) => (
          <Card key={area.id} href={`/practice-areas/${area.slug}`} title={area.title.rendered}>
            <div dangerouslySetInnerHTML={{ __html: area.excerpt?.rendered || '' }} />
          </Card>
        ))}
      </div>
    </div>
  );
}