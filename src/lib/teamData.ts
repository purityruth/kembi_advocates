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
    slug: "john-kembi-gitura",
    fullName: "John Kembi Gitura",
    title: "Senior Partner & Founder",
    position: "Senior Partner",
    description: "Founder and Senior Partner with over 30 years of experience in corporate law and dispute resolution.",
    bio: "John Kembi Gitura founded the firm in 1995 with a vision to create a premier law practice built on integrity, excellence, and client-centered service. With over three decades of legal experience, he has established himself as one of Kenya's leading corporate and commercial lawyers. His strategic counsel has guided numerous multinational corporations, financial institutions, and government entities through complex transactions and disputes. John's leadership and vision continue to shape the firm's commitment to excellence.",
    image: "/images/team/Kembi Gitura.webp",
    email: "john.kembi@kembigituralaw.com",
    phone: "+254 700 000 001",
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
      linkedin: "https://linkedin.com/in/john-kembi-gitura",
      email: "john.kembi@kembigituralaw.com",
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
    email: "njoki.gachihi@kembigituralaw.com",
    phone: "+254 700 000 002",
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
      linkedin: "https://linkedin.com/in/sarah-mwangi",
      email: "sarah.mwangi@kembigituralaw.com",
    },
  },
  {
    id: "3",
    slug: "michael-ochieng",
    fullName: "Michael Ochieng",
    title: "Partner",
    position: "Partner",
    description: "Partner specializing in real estate and property law.",
    bio: "Michael Ochieng leads the firm's real estate and property law practice, bringing over 18 years of experience in complex property transactions, land disputes, and real estate development. He has advised on some of Kenya's largest real estate developments, providing strategic guidance on acquisitions, financing, regulatory compliance, and dispute resolution. Michael's pragmatic approach and deep understanding of the real estate sector have made him a trusted advisor to developers, investors, and financial institutions.",
    image: "/images/team/michael-ochieng.jpg",
    email: "michael.ochieng@kembigituralaw.com",
    phone: "+254 700 000 003",
    education: [
      "University of London, LL.M in Property Law",
      "University of Nairobi, LL.B (Hons)",
      "Kenya School of Law, Diploma in Law",
    ],
    achievements: [
      "Named Real Estate Lawyer of the Year (2022)",
      "Advisor on KES 50B Real Estate Development Project",
      "Member, Kenya Property Developers Association",
      "Top Tier Real Estate Lawyer, Legal 500 (2023)",
    ],
    areasOfExpertise: [
      "Real Estate Development",
      "Property Transactions",
      "Land Dispute Resolution",
      "Construction Law",
      "Mortgage & Finance",
    ],
    publications: [
      "Real Estate Investment in Kenya: A Legal Guide (2020)",
      "Navigating Land Law in East Africa (2022)",
    ],
    languages: ["English", "Swahili", "Luo"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/michael-ochieng",
      email: "michael.ochieng@kembigituralaw.com",
    },
  },
  {
    id: "4",
    slug: "grace-nyambura",
    fullName: "Grace Nyambura",
    title: "Partner",
    position: "Partner",
    description: "Partner specializing in employment and labour law.",
    bio: "Grace Nyambura leads the employment and labour law practice, providing strategic counsel to corporations, financial institutions, and multinational organizations. With over 15 years of experience, she advises on all aspects of employment law, including contract drafting, workplace policies, disciplinary proceedings, and dispute resolution. Grace is recognized for her practical approach and ability to navigate complex employment relationships while ensuring regulatory compliance.",
    image: "/images/team/grace-nyambura.jpg",
    email: "grace.nyambura@kembigituralaw.com",
    phone: "+254 700 000 004",
    education: [
      "University of Cape Town, LL.M in Labour Law",
      "University of Nairobi, LL.B (Hons)",
      "Kenya School of Law, Diploma in Law",
    ],
    achievements: [
      "Top Tier Employment Lawyer, Chambers Global",
      "Advisor on Labour Law Reform Committee (2019-2021)",
      "Author: Employment Law Handbook of Kenya",
      "Recognized by Legal 500 for Employment & Labour",
    ],
    areasOfExpertise: [
      "Employment Contracts",
      "Workplace Policies",
      "Dispute Resolution",
      "Regulatory Compliance",
      "Trade Union Relations",
    ],
    publications: [
      "Employment Law in Kenya: A Comprehensive Guide (2021)",
      "Workplace Investigations: Best Practices (2023)",
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/grace-nyambura",
      email: "grace.nyambura@kembigituralaw.com",
    },
  },
  {
    id: "5",
    slug: "james-maina",
    fullName: "James Maina",
    title: "Senior Associate",
    position: "Senior Associate",
    description: "Senior Associate specializing in tax advisory and compliance.",
    bio: "James Maina is a Senior Associate in the tax practice, bringing over 10 years of experience in tax advisory, compliance, and dispute resolution. He advises clients on complex tax matters, including corporate restructuring, cross-border transactions, and tax audits. James is known for his analytical approach and ability to develop tax-efficient structures that align with clients' business objectives.",
    image: "/images/team/james-maina.jpg",
    email: "james.maina@kembigituralaw.com",
    phone: "+254 700 000 005",
    education: [
      "Strathmore University, MSc in Taxation",
      "University of Nairobi, LL.B (Hons)",
      "Kenya School of Law, Diploma in Law",
    ],
    achievements: [
      "Certified Tax Advisor (CTA)",
      "Author: Kenya Tax Law Digest",
      "Member, Institute of Certified Public Accountants",
      "Rising Star, Tax Practice (2022)",
    ],
    areasOfExpertise: [
      "Corporate Tax",
      "International Tax",
      "Tax Compliance",
      "Tax Disputes",
      "Transfer Pricing",
    ],
    publications: [
      "Tax Planning Strategies for Businesses (2022)",
      "Understanding VAT in Kenya (2023)",
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/james-maina",
      email: "james.maina@kembigituralaw.com",
    },
  },
  {
    id: "6",
    slug: "catherine-wanjiku",
    fullName: "Catherine Wanjiku",
    title: "Senior Associate",
    position: "Senior Associate",
    description: "Senior Associate specializing in family law and private wealth.",
    bio: "Catherine Wanjiku is a Senior Associate in the family law and private wealth practice, with extensive experience in matrimonial disputes, child custody matters, and estate planning. She takes a compassionate yet strategic approach to sensitive family matters, ensuring that clients' interests are protected while minimizing conflict. Catherine is dedicated to helping families navigate complex legal challenges with dignity and respect.",
    image: "/images/team/catherine-wanjiku.jpg",
    email: "catherine.wanjiku@kembigituralaw.com",
    phone: "+254 700 000 006",
    education: [
      "University of Nairobi, LL.B (Hons)",
      "Kenya School of Law, Diploma in Law",
      "Mediation Training, Mediation Training Institute",
    ],
    achievements: [
      "Accredited Mediator",
      "Pro Bono Lawyer of the Year (2021)",
      "Member, Family Law Practitioners Association",
      "Recognized for Excellence in Family Law (2023)",
    ],
    areasOfExpertise: [
      "Matrimonial Disputes",
      "Child Custody",
      "Estate Planning",
      "Succession Matters",
      "Alternative Dispute Resolution",
    ],
    publications: [
      "Family Law in Kenya: A Practitioner's Guide (2021)",
      "Estate Planning for High-Net-Worth Individuals (2023)",
    ],
    languages: ["English", "Swahili", "Kikuyu"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/catherine-wanjiku",
      email: "catherine.wanjiku@kembigituralaw.com",
    },
  },
];

export const getTeamMemberBySlug = (slug: string): TeamMember | undefined => {
  return teamMembers.find((member) => member.slug === slug);
};

export const getTeamMembersByPosition = (position: string): TeamMember[] => {
  return teamMembers.filter((member) => member.position === position);
};