// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title.rendered} | Insights & Publications`,
    description: post.excerpt.rendered
      .replace(/<[^>]*>/g, '')
      .slice(0, 160),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, 3);

  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <main className="bg-white">
      {/* Hero Section with Post Title */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image */}
        {post.featured_image && (
          <Image
            src={post.featured_image}
            alt={post.title.rendered}
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a456e]/90 via-[#0a456e]/50 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full pb-16 lg:pb-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Insights
              </Link>
              <span>›</span>
              <span className="text-white font-medium truncate">
                {post.title.rendered}
              </span>
            </nav>

            {/* Title and Meta */}
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider">
                  Legal Insights
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </span>
                <span className="text-white/80 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {readingTime} min read
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.1]">
                {post.title.rendered}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">

                <div className="prose prose-lg max-w-none text-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>

              {/* Navigation between posts */}
              <div className="mt-12 pt-8 border-t border-[#d9d9d9]/30 flex flex-wrap justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#0a456e] hover:text-[#d9d9d9] transition-colors font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to all insights
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start">

              {/* Categories */}
              <div className="bg-gray-50 p-6 border border-[#d9d9d9]/30 mb-8">
                <h3 className="font-serif font-bold text-[#0a456e] text-lg mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0a456e] text-white text-sm">
                    Legal Insights
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm hover:bg-[#0a456e] hover:text-white transition-colors cursor-pointer">
                    Corporate Law
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm hover:bg-[#0a456e] hover:text-white transition-colors cursor-pointer">
                    Compliance
                  </span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm hover:bg-[#0a456e] hover:text-white transition-colors cursor-pointer">
                    Litigation
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-[#0a456e] p-6 text-white">
                <h3 className="font-serif font-bold text-xl mb-2">
                  Get Legal Insights
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Subscribe to receive the latest updates directly in your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 text-gray-900 bg-white placeholder:text-gray-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-white text-[#0a456e] font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0a456e]">
                Related Articles
              </h2>
              <div className="w-16 h-[2px] bg-[#d9d9d9] mt-3" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.id} 
                  className="group bg-white border border-[#d9d9d9]/30 hover:border-[#d9d9d9] transition-all"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.featured_image || "/images/blog-placeholder.jpg"}
                      alt={relatedPost.title.rendered}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{format(new Date(relatedPost.date), 'MMM dd, yyyy')}</span>
                      <span className="text-[#d9d9d9]">•</span>
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a456e] leading-tight hover:text-[#d9d9d9] transition-colors">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title.rendered}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}