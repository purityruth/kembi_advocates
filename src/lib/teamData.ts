// lib/teamData.ts

export interface TeamMember {
  id: string;
  slug: string;
  fullName: string;
  title: string;
  position: string;
  description: string;
  bio: string;
  image: string;
  email: string;
  phone?: string;
  education: string[];
  achievements: string[];
  areasOfExpertise: string[];
  publications?: string[];
  languages?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    slug: "kembi-gitura",
    fullName: "Sen. Kembi-Gitura",
    title: "Founding Partner",
    position: "Founding Partner",
    description: "Founder and Senior Partner with over 30 years of experience in corporate law and dispute resolution.",
    bio: "Sen. Kembi-Gitura founded the firm in 1995 with a vision to create a premier law practice built on integrity, excellence, and client-centered service. With over three decades of legal experience, he has established himself as one of Kenya's leading corporate and commercial lawyers. His strategic counsel has guided numerous multinational corporations, financial institutions, and government entities through complex transactions and disputes. Kembi's leadership and vision continue to shape the firm's commitment to excellence.",
    image: "/images/team/Kembi Gitura.webp",
    email: "kembigitura@gmail.com",
    phone: "+254 711 719 401",
    education: [
      "University of Nairobi, LL.B (Hons)",
      "Kenya School of Law, Diploma in Law",
      "Harvard Law School, Executive Education",
    ],
    achievements: [
      "Listed in Chambers Global as a leading individual in Corporate & Commercial Law",
      "Recognized by Legal 500 for Dispute Resolution expertise",
      "Chairman, Law Society of Kenya (2005-2007)",
      "Awarded for Outstanding Contribution to Legal Practice (2020)",
    ],
    areasOfExpertise: [
      "Corporate Law",
      "Commercial Litigation",
      "Mergers & Acquisitions",
      "Arbitration",
    ],
    publications: [
      "Corporate Governance in Emerging Markets (2022)",
      "The Future of Arbitration in East Africa (2020)",
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/kembi-gitura",
      email: "kembigitura@gmail.com",
    },
  },
  {
    id: "2",
    slug: "njoki-gachihi",
    fullName: "Njoki Gachihi",
    title: "Managing Partner",
    position: "Managing Partner",
    description: "Managing Partner specializing in commercial litigation and arbitration.",
    bio: "Njoki Gachihi is a distinguished advocate with over 20 years of experience in commercial litigation and international arbitration. As Managing Partner, she oversees the firm's strategic direction while maintaining an active practice representing clients in high-stakes disputes. Njoki is recognized for her analytical rigor, strategic approach, and ability to navigate complex commercial conflicts. She has successfully represented clients before Kenyan courts, the East African Court of Justice, and various international arbitral tribunals.",
    image: "/images/team/Njoki.webp",
    email: "njokigachihi@kembi-gituradv.com",
    phone: "+254 711 719 401",
    education: [
      "University of Warwick, LL.M in International Commercial Law",
      "University of Nairobi, LL.B (Hons)",
      "Chartered Institute of Arbitrators, Diploma in International Arbitration",
    ],
    achievements: [
      "Recognized by Chambers Global for Dispute Resolution",
      "Fellow, Chartered Institute of Arbitrators (FCIArb)",
      "Chairperson, Nairobi Centre for International Arbitration (2018-2022)",
      "Leading Individual, Legal 500 EMEA (2023)",
    ],
    areasOfExpertise: [
      "Commercial Litigation",
      "International Arbitration",
      "Mediation",
      "Cross-Border Disputes",
    ],
    publications: [
      "Arbitration in East Africa: A Practitioner's Guide (2021)",
      "Commercial Litigation Trends in Kenya (2023)",
    ],
    languages: ["English", "Swahili", "French"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/njoki-gachihi",
      email: "njokigachihi@kembi-gituradv.com",
    },
  },
  {
    id: "3",
    slug: "angela-ndolo",
    fullName: "Angela Ndolo",
    title: "Associate Advocate",
    position: "Associate Advocate",
    description: "Associate Advocate specializing in tax advisory and compliance.",
    bio: "Angela Ndolo is an Associate Advocate in the tax practice, with experience in tax advisory, compliance, and dispute resolution. She advises clients on complex tax matters, including corporate restructuring, cross-border transactions, and tax audits. Angela is known for her analytical approach and ability to develop tax-efficient structures that align with clients' business objectives.",
    image: "/images/team/angela.webp",
    email: "angelandolo@kembi-gituradv.com",
    phone: "+254 711 719 401",
    education: [
      "Kenya School of Law — Post Graduate Diploma in Law (2019)",
      "Moi University — Bachelor of Laws (2018)",
    ],
    achievements: [
      "Certified Tax Advisor (CTA)",
      "Author: Kenya Tax Law Digest",
      "Member, Institute of Certified Public Accountants",
      "Rising Star, Tax Practice (2022)",
    ],
    areasOfExpertise: [
      "Tax Compliance",
      "Tax Disputes",
      "Commercial Law",
      "Corporate Law",
      "Estate Planning",
    ],
    publications: [
      "Tax Planning Strategies for Businesses (2022)",
      "Understanding VAT in Kenya (2023)",
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/angela-ndolo",
      email: "angelandolo@kembi-gituradv.com",
    },
  },

  {
    id: "4",
    slug: "brigid-alusa",
    fullName: "Brigid Alusa",
    title: "Associate Advocate",
    position: "Associate Advocate",
    description: "Associate Advocate specializing in Banking & Finance, Real Estate, Corporate Law, and Tax Advisory.",
    bio: "Brigid Alusa is an accomplished Associate Advocate whose practice is defined by technical excellence, commercial awareness, and a client-centred approach to legal advisory. She combines strong legal expertise with a practical understanding of business needs, enabling her to deliver tailored solutions that support clients' strategic and commercial objectives. Her work is characterized by precision, professionalism, and a commitment to achieving effective outcomes. Her expertise in Banking and Finance encompasses advising on secured and unsecured lending transactions, trade finance arrangements, subordinated and tier-two financing structures, and capital markets transactions. She is experienced in negotiating and preparing financing documentation, perfecting security interests, and ensuring compliance with applicable regulatory requirements, thereby safeguarding clients' interests throughout the transaction process. In Real Estate, Conveyancing, and Tax Advisory, Brigid advises on land acquisitions and disposals, lease extensions and renewals, property developments, ownership structures, and real estate joint ventures. She has extensive experience conducting legal due diligence, negotiating and drafting commercial leases, and providing risk assessments for complex property transactions. She also offers tax advisory services, including legal opinions on tax matters, guidance on the tax implications of commercial transactions, and assistance with obtaining statutory tax exemptions and reliefs. Brigid further advises local and international clients on Corporate and Commercial Law matters, including business formation, corporate structuring, regulatory compliance, governance, and ongoing corporate support. Driven by a commitment to continuous professional development and innovative problem-solving, she is a trusted legal advisor known for delivering clear, practical, and commercially sound legal guidance.",
    image: "/images/team/brigid-alusa.webp",
    email: "brigidalusa@kembi-gituradv.com",
    phone: "+254 711 719 401",
    education: [
      "Kenya School of Law — Post Graduate Diploma in Law (2020)",
      "Moi University — Bachelor of Laws (2019)",
    ],
    achievements: [
      // Achievements not specified in profile
    ],
    areasOfExpertise: [
      "Banking & Securitization",
      "Real Estate & Conveyancing",
      "Tax Advisory",
      "Corporate & Commercial Law",
      "Trade Finance",
      "Capital Markets",
      "Property Development",
      "Regulatory Compliance",
      "Conveyancing",
    ],
    publications: [],
    languages: [],
    socialLinks: {
      email: "brigidalusa@kembi-gituradv.com",
      linkedin: "https://linkedin.com/in/brigid-alusa"
    },
  },
  {
    id: "5",
    slug: "peter-mbugua",
    fullName: "Peter Mbugua",
    title: "Associate Advocate",
    position: "Associate Advocate",
    description: "Peter is an Associate Advocate specializing in the Dispute Resolution Department.",
    bio: "Peter is an Associate Advocate in the Dispute Resolution Practice Group at the firm. He represents clients in complex commercial litigation and trials involving land and environmental matters, fraud, employment matters and commercial contracts, banking, defamation, material damages and debt collection in courts and arbitration forums across the country.",
    image: "/images/team/peter-mbugua.webp",
    email: "peternjoroge@kembi-gituradv.com",
    phone: "+254 711 719 401",
    education: [
      "MTI East Africa — Certified Professional Mediator (2023)",
      "University of Nairobi, Bachelor of Laws (LL.B.) (2017)",
      "Kenya School of Law, Diploma in Law (2019)",
    ],
    achievements: [
      "Advocate admitted to the High Court of Kenya (2021)",
      "Certified Professional Mediator (2023)",
    ],
    areasOfExpertise: [
      "Land and Environmental Matters",
      "Employment Law",
      "Commercial Contracts",
      "Banking Law",
      "Debt Collection",
      "Arbitration",
      "Mediation",
    ],
    publications: [],
    languages: [],
    socialLinks: {
      email: "peternjoroge@kembi-gituradv.com",
      linkedin: "https://linkedin.com/in/peter-njoroge"
    },
  },
  {
    id: "6",
    slug: "sabrina-addikah",
    fullName: "Sabrina Addikah",
    title: "Associate Advocate",
    position: "Associate Advocate",
    description: "Associate Advocate experienced in litigation, commercial transactions, employment law, and conveyancing.",
    bio: "Sabrina Naliali Addikah is an Advocate of the High Court of Kenya, admitted to the Bar in 2022. She holds a Bachelor of Laws (LL.B) degree from the University of Nairobi and a Postgraduate Diploma in Law from the Kenya School of Law. Sabrina has experience in litigation, legal research, commercial transactions, employment law, conveyancing, and policy review. Throughout her practice, she has advised and represented clients in a broad range of civil, commercial, employment, and property-related matters, while also drafting and reviewing pleadings, contracts, leases, and other legal instruments. Prior to joining the Firm, Sabrina worked with several reputable law firms where she gained extensive experience in dispute resolution, legal advisory services, and client management. She also participated in various election petitions, including matters arising from the 2022 General Elections. Sabrina is committed to providing practical, client-focused legal solutions and delivering services with professionalism, diligence, and integrity.",
    image: "/images/team/sabrina-addikah.webp",
    email: "sabrinaaddikah@kembi-gituradv.com",
    phone: "+254 711 719 401",
    education: [
      "University of Nairobi, Bachelor of Laws (LL.B.)",
      "Kenya School of Law, Postgraduate Diploma in Law",
    ],
    achievements: [
      "Advocate of the High Court of Kenya (2022)",
    ],
    areasOfExpertise: [
      "Litigation",
      "Dispute Resolution",
      "Commercial Transactions",
      "Employment Law",
      "Conveyancing",
      "Legal Research",
      "Policy Review",
      "Election Petitions",
    ],
    publications: [],
    languages: [],
    socialLinks: {
      email: "sabrinaaddikah@kembi-gituradv.com",
      linkedin: "https://linkedin.com/in/sabrina-addikah"
    },
  },

];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.slug === slug);
};

export const getTeamMembersByPosition = (position: string): TeamMember[] => {
  return teamMembers.filter((member) => member.position === position);
};