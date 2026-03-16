import axios from 'axios';

import { practiceAreas, PracticeArea } from "./mockData"

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

// export interface PracticeArea {
//   id: number;
//   slug: string;
//   title: { rendered: string };
//   excerpt?: { rendered: string };
//   content: { rendered: string };
//   acf?: any; // If you use Advanced Custom Fields
// }

// export interface TeamMember {
//   id: number;
//   slug: string;
//   title: { rendered: string }; // Typically the name
//   content: { rendered: string }; // Bio
//   acf?: {
//     position: string;
//     photo?: string;
//     email?: string;
//     phone?: string;
//   };
// }


// GET ALL PRACTICE AREAS
export async function getPracticeAreas(): Promise<PracticeArea[]> {
  return practiceAreas
}

// GET SINGLE PRACTICE AREA
export async function getPracticeArea(slug: string): Promise<PracticeArea | null> {
  const area = practiceAreas.find((a) => a.slug === slug)
  return area || null
}

// Fetch functions
export async function getPosts(): Promise<WPPost[]> {
  const { data } = await api.get('/posts?_embed');
  return data;
}

export async function getPost(slug: string): Promise<WPPost> {
  const { data } = await api.get(`/posts?slug=${slug}&_embed`);
  return data[0];
}

// export async function getPracticeAreas(): Promise<PracticeArea[]> {
//   const { data } = await api.get('/practice-areas');
//   return data;
// }

// export async function getPracticeArea(slug: string): Promise<PracticeArea> {
//   const { data } = await api.get(`/practice-areas?slug=${slug}`);
//   return data[0];
// }

export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data } = await api.get('/team');
  return data;
}

export async function getTeamMember(slug: string): Promise<TeamMember> {
  const { data } = await api.get(`/team?slug=${slug}`);
  return data[0];
}

export async function getPage(slug: string): Promise<WPPost> {
  const { data } = await api.get(`/pages?slug=${slug}`);
  return data[0];
}