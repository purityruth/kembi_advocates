import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="With decades of combined experience">About Our Firm</SectionHeading>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-4 text-gray-700">
            <p className="text-lg">
              Kembi Gitura & Company Advocates is a premier law firm based in Nairobi, Kenya, dedicated to providing exceptional legal services to individuals and corporations.
            </p>
            <p>
              Our team of experienced advocates combines deep legal knowledge with a practical approach to solve complex legal challenges. We pride ourselves on integrity, professionalism, and a client-centered philosophy.
            </p>
            <Button href="/about" variant="outline">Read More</Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/photorealistic-lawyer-environment.jpg"
                alt="Law firm office"
                fill
                className="object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;