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
      rendered:
        "Strategic legal advisory across complex real estate transactions and banking engagements.",
    },
    content: {
      rendered: `
        <p>The Firm provides strategic legal advisory across complex real estate transactions and banking engagements. We act for financial institutions, developers, investors, and corporate borrowers in structuring, securing, and executing high value property and finance transactions with precision and regulatory compliance.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Commercial and residential conveyancing</li>
          <li>Real estate development advisory</li>
          <li>Land due diligence and title investigations</li>
          <li>Lease structuring and negotiation</li>
          <li>Project finance and security documentation</li>
          <li>Loan structuring and syndicated lending</li>
          <li>Perfection of securities and collateral management</li>
          <li>Debt recovery and enforcement of securities</li>
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
      rendered:
        "Advisory on structuring, governance, and complex commercial transactions.",
    },
    content: {
      rendered: `
        <p>We advise corporates, investors, and institutions on structuring, governance, and complex commercial transactions. Our approach integrates legal rigor with commercial insight to support sustainable growth and regulatory compliance.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Mergers and acquisitions</li>
          <li>Joint ventures and strategic partnerships</li>
          <li>Corporate restructuring and reorganisation</li>
          <li>Company secretarial and governance advisory</li>
          <li>Regulatory compliance and risk management</li>
          <li>Shareholder agreements and capital structuring</li>
          <li>Contract drafting and negotiation</li>
          <li>Advisory for NGOs, trusts, and companies limited by guarantee</li>
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
      rendered:
        "Strategic and effective legal representation in civil and commercial disputes.",
    },
    content: {
      rendered: `
        <p>We provide strategic and effective legal representation in civil and commercial disputes across Kenya. We understand that disputes can be stressful, time-consuming, and financially draining. Our litigation team is committed to protecting your rights, resolving conflicts efficiently, and pursuing the best possible outcome for you.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Commercial and contractual disputes</li>
          <li>Land and property disputes</li>
          <li>Debt recovery and enforcement proceedings</li>
          <li>Judicial review and constitutional matters</li>
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
      rendered:
        "Discreet and strategic advisory for high net worth individuals and families.",
    },
    content: {
      rendered: `
        <p>The Firm provides discreet and strategic advisory services to high net worth individuals and families on wealth preservation, succession planning, and asset structuring across generations.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Estate planning and wealth structuring</li>
          <li>Trust formation and administration</li>
          <li>Wills and succession planning</li>
          <li>Probate and estate administration</li>
          <li>Asset protection strategies</li>
          <li>Family business succession planning</li>
          <li>Cross border estate advisory</li>
        </ul>
      `,
    },
  },
  {
    id: 5,
    slug: "employment-labour-law",
    title: {
      rendered: "Employment and Labour Law",
    },
    excerpt: {
      rendered:
        "Advisory on employment frameworks, compliance, and workplace governance.",
    },
    content: {
      rendered: `
        <p>We advise employers, executives, and institutions on employment frameworks, compliance, and dispute resolution. Our practice is focused on risk mitigation, regulatory alignment, and effective workplace governance.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Employment contracts and executive agreements</li>
          <li>HR policies and workplace compliance audits</li>
          <li>Redundancy and restructuring advisory</li>
          <li>Disciplinary and workplace investigations</li>
          <li>Employment dispute resolution</li>
          <li>Advisory on employee benefits and termination procedures</li>
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
      rendered:
        "Advisory on immigration compliance, mobility strategy, and regulatory approvals.",
    },
    content: {
      rendered: `
        <p>The Firm advises corporations and individuals on immigration compliance, mobility strategy, and regulatory approvals, ensuring seamless engagement with Kenyan immigration authorities.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Work permits and special passes</li>
          <li>Residency and citizenship applications</li>
          <li>Investor and expatriate advisory</li>
          <li>Compliance audits for corporate entities</li>
          <li>Immigration appeals and reviews</li>
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
      rendered:
        "Strategic and discreet representation in family law matters.",
    },
    content: {
      rendered: `
        <p>We provide strategic and discreet representation in family law matters, combining technical expertise with sensitivity in high value and complex personal disputes.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Divorce and separation proceedings</li>
          <li>Matrimonial property disputes</li>
          <li>Guardianship applications</li>
          <li>Pre nuptial and post nuptial agreements</li>
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
      rendered:
        "Structured, compliance-focused tax advisory for corporates and private clients.",
    },
    content: {
      rendered: `
        <p>Our tax advisory practice provides corporations and private clients with structured, compliance focused solutions in an evolving regulatory environment. We combine technical tax knowledge with commercial practicality.</p>
        
        <p><strong>Key services:</strong></p>
        <ul>
          <li>Tax structuring and planning</li>
          <li>Corporate and individual tax compliance</li>
          <li>Advisory on VAT, income tax, and corporate tax</li>
          <li>Tax risk assessment and mitigation</li>
          <li>Representation in engagements with Kenya Revenue Authority</li>
          <li>Tax dispute resolution and appeals</li>
          <li>Advisory on tax implications of mergers and acquisitions</li>
        </ul>
      `,
    },
  },
];