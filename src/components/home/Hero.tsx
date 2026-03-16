import Button from '../ui/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-dark-blue to-blue-900 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Kembi Gitura <span className="text-gold">& Company</span> Advocates
          </h1>
          <p className="text-xl text-gray-200 max-w-lg">
            Trusted legal counsel with a commitment to integrity, excellence, and client success.
          </p>
          <div className="flex space-x-4">
            <Button href="/contact" variant="primary">Schedule a Consultation</Button>
            <Button href="/practice-areas" variant="outline">Explore Practice Areas</Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
                src="/images/photorealistic-lawyer-environment.jpg"
                alt="Law firm office"
                fill
                className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;