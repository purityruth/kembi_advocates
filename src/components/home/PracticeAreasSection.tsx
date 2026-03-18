import SectionHeading from "@/components/ui/SectionHeading";
import Card from "../ui/Card";
import { getPracticeAreas } from "@/lib/api";
import Button from "../ui/Button";

const PracticeAreasSection = async () => {
  const areas = await getPracticeAreas();
  const preview = areas.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Premium Section Heading */}
        <SectionHeading subtitle="Areas of Expertise">
          Practice Areas
        </SectionHeading>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {preview.map((area) => (
            <Card
              key={area.id}
              href={`/practice-areas/${area.slug}`}
              title={area.title.rendered}
              className="group relative overflow-hidden border border-gray-200 rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="p-6 h-full flex flex-col justify-between">
                {/* Excerpt / Description */}
                <p className="text-gray-700 mb-4 group-hover:text-gray-900 transition-colors text-sm">
                  {area.excerpt?.rendered
                    .replace(area.title.rendered, "")
                    .replace(/<a[^>]*>.*?<\/a>/gi, "") // remove ALL links completely
                    .replace(/Read more/gi, "") // remove text
                    .replace(/<[^>]+>/g, "") // remove remaining HTML
                    .trim()}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-action Button */}
        <div className="text-center mt-16">
          <Button
            href="/practice-areas"
            variant="primary"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
