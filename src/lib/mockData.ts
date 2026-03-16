export type PracticeArea = {
  id: number
  slug: string
  title: {
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
    content: {
      rendered: `
        <p>We provide legal services for property acquisition, development, leasing and conveyancing.</p>
        <p>Our team supports investors, developers and institutions in navigating property transactions.</p>
      `,
    },
  },
]