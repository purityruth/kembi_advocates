// src/lib/mockPosts.ts
export interface MockPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_image?: string;
  date: string;
}

export const mockPosts: MockPost[] = [
  {
    id: 1,
    slug: "legal-trends-2026",
    title: { rendered: "Top Legal Trends to Watch in 2026" },
    content: {
      rendered: `
        <p>
          As businesses continue to navigate an increasingly complex regulatory and technological environment,
          the legal landscape is evolving at an unprecedented pace. From artificial intelligence governance
          to data privacy reforms, organizations must stay informed and proactive to remain compliant and competitive.
        </p>

        <p class="mt-4">
          Below are some of the most significant legal trends expected to shape 2026.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">1. Increased Regulation of Artificial Intelligence</h2>

        <p>
          Artificial intelligence is transforming industries across the globe, but its rapid adoption has prompted
          governments and regulatory bodies to introduce stricter oversight.
        </p>

        <p>
          In 2026, businesses can expect greater scrutiny regarding how AI systems are developed, deployed,
          and monitored. Key concerns include algorithmic transparency, data usage, bias mitigation, and accountability
          for AI-generated decisions.
        </p>

        <p>
          Organizations utilizing AI-powered tools should review their governance frameworks and ensure compliance
          with emerging regulatory requirements.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">2. Data Privacy and Cybersecurity Compliance</h2>

        <p>
          Data protection remains a top priority for regulators and consumers alike. As cyber threats become more
          sophisticated, businesses are expected to strengthen their cybersecurity measures and enhance their
          data management practices.
        </p>

        <p>
          New privacy regulations and amendments to existing laws are likely to introduce stricter obligations around
          data collection, storage, consent management, and breach reporting.
        </p>

        <p>
          Companies should regularly assess their privacy policies, security protocols, and third-party vendor
          arrangements to minimize legal and operational risks.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">3. ESG and Sustainability Reporting Requirements</h2>

        <p>
          Environmental, Social, and Governance (ESG) considerations are no longer optional. Investors, customers,
          and regulators increasingly demand greater transparency regarding sustainability initiatives and corporate
          responsibility practices.
        </p>

        <p>
          In 2026, organizations may face expanded reporting obligations relating to environmental impact,
          climate risk disclosures, workplace diversity, and governance standards.
        </p>

        <p>
          Legal teams will play a critical role in helping businesses navigate these requirements while reducing
          exposure to regulatory and reputational risks.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">4. Evolving Employment and Workplace Laws</h2>

        <p>
          The modern workplace continues to change as hybrid work arrangements, remote employment,
          and digital collaboration become standard practice.
        </p>

        <p>
          Employers should monitor developments relating to employee classification, workplace surveillance,
          flexible work policies, and employee wellbeing obligations.
        </p>

        <p>
          Organizations that proactively review employment contracts, workplace policies, and compliance procedures
          will be better positioned to adapt to new legal requirements.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">5. Cross-Border Business and Regulatory Complexity</h2>

        <p>
          As businesses expand into new markets, they face a growing number of cross-border legal challenges.
          Differing regulatory standards, tax obligations, and compliance requirements can create significant risks
          for organizations operating internationally.
        </p>

        <p>
          Legal advisors will increasingly be called upon to guide businesses through international transactions,
          market entry strategies, and regulatory compliance across multiple jurisdictions.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">6. Growing Focus on Corporate Governance</h2>

        <p>
          Regulators and stakeholders continue to demand higher standards of corporate governance and accountability.
        </p>

        <p>
          Boards of directors are expected to play a more active role in risk management, compliance oversight,
          and strategic decision-making. Organizations that strengthen governance structures and internal controls
          can improve resilience while building stakeholder confidence.
        </p>

        <h2 class="text-xl font-bold text-[#0a456e] mt-6 mb-4">Preparing for the Future</h2>

        <p>
          The legal environment in 2026 will be shaped by rapid technological advancement, evolving regulatory
          expectations, and increased stakeholder scrutiny.
        </p>

        <p>
          Businesses that stay informed, invest in compliance, and seek proactive legal guidance will be better
          equipped to manage risk and capitalize on emerging opportunities.
        </p>

        <p>
          At our firm, we remain committed to helping clients navigate these changes with confidence.
          If you would like guidance on how these developments may affect your organization, our team is available to assist.
        </p>
      `,
    },
    excerpt: {
      rendered:
        "<p>Explore the key legal developments expected to shape businesses, compliance, governance, and technology in 2026.</p>",
    },
    featured_image: "/images/blog/photorealistic-lawyer-environment.jpg",
    date: "2026-03-23",
  },
  {
    id: 2,
    slug: "corporate-compliance-tips",
    title: { rendered: "Corporate Compliance Tips for SMEs" },
    content: { rendered: "<p>Full article content goes here...</p>" },
    excerpt: { rendered: "<p>Learn practical compliance strategies for small businesses...</p>" },
    featured_image: "/images/blog/photorealistic-lawyer-environment.jpg",
    date: "2026-02-15",
  },
  {
    id: 3,
    slug: "contract-drafting-best-practices",
    title: { rendered: "Contract Drafting Best Practices" },
    content: { rendered: "<p>Full article content goes here...</p>" },
    excerpt: { rendered: "<p>Key tips for drafting clear, enforceable contracts...</p>" },
    featured_image: "/images/blog/photorealistic-lawyer-environment.jpg",
    date: "2026-01-10",
  },
];