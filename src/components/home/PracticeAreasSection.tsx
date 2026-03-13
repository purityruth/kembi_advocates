import SectionHeading from '@/components/ui/SectionHeading';
import Card from '../ui/Card';
import { getPracticeAreas } from '@/lib/api';
import Button from '../ui/Button';

// This is a server component (can be async)
const PracticeAreasSection = async () => {
  const areas = await getPracticeAreas();
  // Show only first 3 on home
  const preview = areas.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Areas of expertise">Practice Areas</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preview.map((area) => (
            <Card key={area.id} href={`/practice-areas/${area.slug}`} title={area.title.rendered}>
              <div dangerouslySetInnerHTML={{ __html: area.excerpt?.rendered || '' }} />
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/practice-areas" variant="primary">View All Practice Areas</Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;