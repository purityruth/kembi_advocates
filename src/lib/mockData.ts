export type PracticeArea = {
  id: number
  slug: string
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
}

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: "corporate-commercial-law",
    title: {
      rendered: "Corporate & Commercial Law",
    },
    excerpt: {
      rendered: "Corporate & Commercial Law",
    },
    content: {
      rendered: `
        <p>We advise businesses on corporate structuring, governance, regulatory compliance and commercial transactions.</p>
        <p>Our lawyers assist companies in navigating complex legal frameworks while maintaining operational efficiency.</p>
      `,
    },
  },
  {
    id: 2,
    slug: "litigation-dispute-resolution",
    title: {
      rendered: "Litigation & Dispute Resolution",
    },
    excerpt: {
      rendered: "Litigation & Dispute Resolution",
    },
    content: {
      rendered: `
        <p>Our litigation team represents clients in complex commercial disputes before courts and arbitration tribunals.</p>
        <p>We focus on strategic dispute resolution that protects our clients' interests.</p>
      `,
    },
  },
  {
    id: 3,
    slug: "real-estate-property-law",
    title: {
      rendered: "Real Estate & Property Law",
    },
    excerpt: {
      rendered: "Real Estate & Property Law",
    },
    content: {
      rendered: `
        <p>We provide legal services for property acquisition, development, leasing and conveyancing.</p>
        <p>Our team supports investors, developers and institutions in navigating property transactions.</p>
      `,
    },
  },
]

export interface TeamMember {
  id: number
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  acf?: {
    position: string
    photo?: string
    email?: string
    phone?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: "kembi-gitura",
    title: { rendered: "Kembi Gitura" },
    content: {
      rendered: `
        <p>Kembi Gitura is the founding partner of the firm with extensive experience in corporate law,
        governance advisory, and high-value commercial transactions.</p>
      `,
    },
    acf: {
      position: "Managing Partner",
      photo: "/images/team/kembi.jpg",
      email: "kembi@kgadvocates.com",
      phone: "+254700000000",
    },
  },
  {
    id: 2,
    slug: "jane-wanjiku",
    title: { rendered: "Jane Wanjiku" },
    content: {
      rendered: `
        <p>Jane specializes in litigation and dispute resolution,
        representing clients in complex commercial and civil matters.</p>
      `,
    },
    acf: {
      position: "Senior Associate",
      photo: "/images/team/jane.jpg",
      email: "jane@kgadvocates.com",
      phone: "+254711000000",
    },
  },
  {
    id: 3,
    slug: "david-otieno",
    title: { rendered: "David Otieno" },
    content: {
      rendered: `
        <p>David focuses on real estate law and conveyancing,
        assisting developers and investors with property transactions.</p>
      `,
    },
    acf: {
      position: "Associate Advocate",
      photo: "/images/team/david.jpg",
      email: "david@kgadvocates.com",
      phone: "+254722000000",
    },
  },
]