// app/blog/page.tsx
import { getPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import HeroInner from '@/components/ui/HeroInner';
import ContactCTA from '@/components/ui/ContactCTA';
import { format } from 'date-fns';

export default async function BlogPage() {
  const posts = await getPosts();
  
  // Get featured post (first post or most recent)
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  // Categories for filter (you can extract from posts or define manually)
  const categories = [
    "All",
    "Legal Insights",
    "Case Studies",
    "Firm News",
    "Industry Updates",
    "Client Alerts"
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroInner
        title="Insights & Publications"
        subtitle="Stay informed with the latest legal developments, firm news, and expert analysis from our team of experienced advocates."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        showScrollIndicator={false}
      />

      {/* Categories Bar */}
      <section className="py-6 bg-white border-b border-[#d9d9d9]/30 sticky top-0 z-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                  index === 0
                    ? "bg-[#0a456e] text-white"
                    : "bg-transparent text-gray-600 hover:text-[#0a456e] border border-[#d9d9d9]/50 hover:border-[#0a456e]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Featured Image */}
              <div className="relative h-[350px] lg:h-[450px] overflow-hidden border border-[#d9d9d9]/30 order-2 lg:order-1">
                <Image
                  src={featuredPost.featured_image || "/images/photorealistic-lawyer-environment.jpg"}
                  alt={featuredPost.title.rendered}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0a456e] text-white text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {format(new Date(featuredPost.date), 'MMMM dd, yyyy')}
                  </span>
                  <span className="text-[#d9d9d9]">•</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs">
                    Legal Insights
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#0a456e] leading-[1.2]">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#d9d9d9] transition-colors">
                    {featuredPost.title.rendered}
                  </Link>
                </h2>

                <div 
                  className="text-gray-600 leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: featuredPost.excerpt.rendered }}
                />

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-all group w-fit"
                >
                  <span>Read Full Article</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-[#0a456e]">
              Latest Articles
            </h2>
            <div className="w-16 h-[2px] bg-[#d9d9d9] mt-3" />
          </div>

          {remainingPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-white border border-[#d9d9d9]/30 hover:border-[#d9d9d9] transition-all"
                >
                  {/* Post Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                    <Image
                      src={post.featured_image || "/images/blog-placeholder.jpg"}
                      alt={post.title.rendered}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </Link>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {format(new Date(post.date), 'MMM dd, yyyy')}
                      </span>
                      <span className="text-[#d9d9d9]">•</span>
                      <span className="text-gray-500">5 min read</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0a456e] mb-3 leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#d9d9d9] transition-colors">
                        {post.title.rendered}
                      </Link>
                    </h3>

                    <div 
                      className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a456e] hover:text-[#d9d9d9] transition-colors group"
                    >
                      <span>Read More</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-[#d9d9d9]/30">
              <p className="text-gray-500">No blog posts available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-[#0a456e] mb-4">
              Subscribe to Our Newsletter
            </h2>
            <div className="w-20 h-[2px] bg-[#d9d9d9] mx-auto mb-6" />
            <p className="text-gray-600 mb-8">
              Get the latest legal insights, firm news, and updates delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 border border-[#d9d9d9]/50 focus:border-[#0a456e] outline-none transition-colors bg-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#0a456e] text-white font-semibold hover:bg-[#0a456e]/90 transition-all whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA
        title="Have a Legal Question?"
        subtitle="Our team of experienced advocates is ready to provide the guidance you need."
        buttonText="Contact Our Team"
        buttonLink="/contact"
        backgroundImage="/images/photorealistic-lawyer-environment.jpg"
        overlayOpacity="dark"
        textAlign="center"
        showTrustBadges={true}
      />
    </main>
  );
}