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
        <p>Kembi Gitura is the founding partner of the firm with extensive experience in corporate law.</p>
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
        <p>Jane specializes in litigation and dispute resolution.</p>
      `,
    },
    acf: {
      position: "Senior Associate",
      photo: "/images/team/jane.jpg",
      email: "jane@kgadvocates.com",
      phone: "+254711000000",
    },
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: "real-estate-banking-finance",
    title: {
      rendered: "Real Estate, Banking & Finance",
    },
    excerpt: {
      rendered: "Strategic advisory across real estate transactions and banking engagements.",
    },
    content: {
      rendered: `
        <p>The Firm provides strategic legal advisory across complex real estate transactions and banking engagements.</p>
        <ul>
          <li>Commercial and residential conveyancing</li>
          <li>Real estate development advisory</li>
          <li>Land due diligence and title investigations</li>
          <li>Lease structuring and negotiation</li>
          <li>Project finance and security documentation</li>
          <li>Loan structuring and syndicated lending</li>
        </ul>
      `,
    },
  },
  {
    id: 2,
    slug: "commercial-corporate-law",
    title: {
      rendered: "Commercial & Corporate Law",
    },
    excerpt: {
      rendered: "Advisory on structuring, governance, and complex transactions.",
    },
    content: {
      rendered: `
        <p>We advise corporates and investors on structuring and governance.</p>
        <ul>
          <li>Mergers and acquisitions</li>
          <li>Joint ventures and partnerships</li>
          <li>Corporate restructuring</li>
          <li>Regulatory compliance</li>
          <li>Contract drafting and negotiation</li>
        </ul>
      `,
    },
  },
  {
    id: 3,
    slug: "dispute-resolution",
    title: {
      rendered: "Dispute Resolution",
    },
    excerpt: {
      rendered: "Strategic legal representation in civil and commercial disputes.",
    },
    content: {
      rendered: `
        <p>We provide effective legal representation in disputes across Kenya.</p>
        <ul>
          <li>Commercial disputes</li>
          <li>Land and property disputes</li>
          <li>Debt recovery</li>
          <li>Judicial review matters</li>
        </ul>
      `,
    },
  },
  {
    id: 4,
    slug: "private-wealth",
    title: {
      rendered: "Private Wealth",
    },
    excerpt: {
      rendered: "Advisory for high net worth individuals and families.",
    },
    content: {
      rendered: `
        <p>We provide advisory on wealth preservation and succession planning.</p>
        <ul>
          <li>Estate planning</li>
          <li>Trust formation</li>
          <li>Wills and succession</li>
          <li>Asset protection</li>
        </ul>
      `,
    },
  },
  {
    id: 5,
    slug: "employment-labour-law",
    title: {
      rendered: "Employment & Labour Law",
    },
    excerpt: {
      rendered: "Advisory on employment frameworks and compliance.",
    },
    content: {
      rendered: `
        <p>We advise employers and institutions on employment law.</p>
        <ul>
          <li>Employment contracts</li>
          <li>HR policies</li>
          <li>Workplace investigations</li>
          <li>Dispute resolution</li>
        </ul>
      `,
    },
  },
  {
    id: 6,
    slug: "immigration-law",
    title: {
      rendered: "Immigration Law",
    },
    excerpt: {
      rendered: "Advisory on immigration compliance and mobility.",
    },
    content: {
      rendered: `
        <p>We assist corporations and individuals with immigration processes.</p>
        <ul>
          <li>Work permits</li>
          <li>Residency applications</li>
          <li>Compliance audits</li>
        </ul>
      `,
    },
  },
  {
    id: 7,
    slug: "family-law",
    title: {
      rendered: "Family Law",
    },
    excerpt: {
      rendered: "Discreet representation in sensitive family matters.",
    },
    content: {
      rendered: `
        <p>We provide representation in complex family disputes.</p>
        <ul>
          <li>Divorce proceedings</li>
          <li>Matrimonial disputes</li>
          <li>Guardianship</li>
        </ul>
      `,
    },
  },
  {
    id: 8,
    slug: "tax-advisory",
    title: {
      rendered: "Tax Advisory",
    },
    excerpt: {
      rendered: "Structured tax solutions for corporates and individuals.",
    },
    content: {
      rendered: `
        <p>We provide tax advisory in an evolving regulatory environment.</p>
        <ul>
          <li>Tax planning</li>
          <li>Compliance</li>
          <li>Tax dispute resolution</li>
        </ul>
      `,
    },
  },
];