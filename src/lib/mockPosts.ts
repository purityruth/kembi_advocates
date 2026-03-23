// src/lib/mockPosts.ts
export interface MockPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
}

export const mockPosts: MockPost[] = [
  {
    id: 1,
    slug: "legal-trends-2026",
    title: { rendered: "Top Legal Trends to Watch in 2026" },
    content: { rendered: "<p>Full article content goes here...</p>" },
    excerpt: { rendered: "<p>Discover the key legal trends shaping the industry...</p>" },
    date: "2026-03-23",
  },
  {
    id: 2,
    slug: "corporate-compliance-tips",
    title: { rendered: "Corporate Compliance Tips for SMEs" },
    content: { rendered: "<p>Full article content goes here...</p>" },
    excerpt: { rendered: "<p>Learn practical compliance strategies for small businesses...</p>" },
    date: "2026-02-15",
  },
  {
    id: 3,
    slug: "contract-drafting-best-practices",
    title: { rendered: "Contract Drafting Best Practices" },
    content: { rendered: "<p>Full article content goes here...</p>" },
    excerpt: { rendered: "<p>Key tips for drafting clear, enforceable contracts...</p>" },
    date: "2026-01-10",
  },
];