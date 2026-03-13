import { getTeamMembers } from '@/lib/api';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const TeamSection = async () => {
  const members = await getTeamMembers();
  const preview = members.slice(0, 3); // Show first 3 on home

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Meet our experienced advocates">Our Team</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preview.map((member) => (
            <Card key={member.id} href={`/team/${member.slug}`} title={member.title.rendered}>
              {member.acf?.photo && (
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.acf.photo}
                    alt={member.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {member.acf?.position && (
                <p className="text-gold font-medium text-sm mb-2">{member.acf.position}</p>
              )}
              <div
                className="text-gray-600 text-sm line-clamp-3"
                dangerouslySetInnerHTML={{ __html: member.content.rendered }}
              />
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/team" variant="primary">View All Team Members</Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;