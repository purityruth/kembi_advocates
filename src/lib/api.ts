// lib/api.ts
import axios from 'axios';
import { practiceAreas, PracticeArea, TeamMember, teamMembers } from "./mockData";
import { MockPost, mockPosts } from './mockPosts';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_API_URL,
});

// Types
export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

// ============= PRACTICE AREAS =============
export async function getPracticeAreas(): Promise<PracticeArea[]> {
  return practiceAreas;
}

export async function getPracticeArea(slug: string): Promise<PracticeArea | null> {
  const area = practiceAreas.find((a) => a.slug === slug);
  return area || null;
}

// ============= TEAM MEMBERS =============
export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  const member = teamMembers.find((m) => m.slug === slug);
  return member || null;
}

// ============= BLOG POSTS =============
// Get all posts
export async function getPosts(): Promise<MockPost[]> {
  // Simulate network delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockPosts;
}

// Get a single post by slug (main function)
export async function getPostBySlug(slug: string): Promise<MockPost | null> {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

// Get all slugs for static generation
export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map((post) => post.slug);
}

// Get related posts (exclude current post)
export async function getRelatedPosts(slug: string, limit: number = 3): Promise<MockPost[]> {
  const posts = await getPosts();
  return posts
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

// ============= PAGES =============
export async function getPage(slug: string): Promise<WPPost> {
  const { data } = await api.get(`/pages?slug=${slug}`);
  return data[0];
}

// ============= OPTIONAL: WordPress API versions =============
// Uncomment these if you want to use WordPress API instead of mock data

/*
export async function getPosts(): Promise<WPPost[]> {
  const { data } = await api.get('/posts?_embed');
  return data;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const { data } = await api.get(`/posts?slug=${slug}&_embed`);
  return data[0] || null;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data } = await api.get('/posts?fields=slug');
  return data.map((post: any) => post.slug);
}
*/