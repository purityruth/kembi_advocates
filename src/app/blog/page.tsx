import { getPosts } from '@/lib/api';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-6 py-16">
      <SectionHeading align="left">Latest Insights</SectionHeading>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-serif font-bold text-dark-blue hover:text-gold transition-colors">
                {post.title.rendered}
              </h2>
            </Link>
            <div
              className="mt-2 text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-gold font-medium hover:underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}