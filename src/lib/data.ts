export type ServiceItem = {
  title: string;
  description: string;
  details?: string[];
};

export type PracticeArea = {
  slug: string;
  number: string;
  label: string;
  /** Short on-the-index description */
  tagline: string;
  description: string;
  items: ServiceItem[];
};

/* ------------------------------------------------------------------ */
/* Practice areas — source of truth for the index and detail pages     */
/* ------------------------------------------------------------------ */

export const practiceAreas: PracticeArea[] = [
  {
    slug: "family-law",
    number: "01",
    label: "Family Law",
    tagline: "Sensitive matters. Practical guidance.",
    description:
      "Sensitive, practical guidance through relationship property, protection orders and care matters.",
    items: [
      {
        title: "Relationship Property",
        description:
          "When you separate, decisions need to be made about how your property is divided. We help you negotiate a settlement and provide expert, practical advice so you obtain the best property settlement for your situation.",
        details: [
          "Negotiating separation settlements",
          "Contracting Out Agreements (prenuptial agreements) to protect your assets in the event you separate from your partner",
          "Expert practical advice on division of property",
        ],
      },
      {
        title: "Domestic Violence",
        description:
          "We talk through your situation with you and help you apply for a Protection Order, property order and furniture order. A Protection Order will protect you and your children from family violence.",
        details: [
          "Protection Order applications",
          "Property orders and furniture orders",
          "Support through the court process",
        ],
      },
      {
        title: "Oranga Tamariki",
        description:
          "Oranga Tamariki (formerly known as Child, Youth & Family) deals with care and safety issues relating to children. We can assist you in all your dealings with the Ministry.",
        details: [
          "Care and protection matters",
          "Meetings and correspondence with the Ministry",
          "Advice on your rights and options",
        ],
      },
    ],
  },
  {
    slug: "property",
    number: "02",
    label: "Property & Conveyancing",
    tagline: "Clear advice for important property decisions.",
    description:
      "If you're looking to purchase or sell a property, we prepare the sale and purchase agreement and carry out conveyancing. We recommend having your lawyer involved right from the start.",
    items: [
      {
        title: "Sale & Purchase",
        description:
          "Looking to purchase or sell a property? We prepare the sale and purchase agreement and carry out conveyancing — and we recommend having your lawyer involved right from the start.",
        details: [
          "Sale and purchase agreements",
          "Conveyancing",
          "Advice from the very start of your purchase or sale",
        ],
      },
    ],
  },
  {
    slug: "immigration",
    number: "03",
    label: "Immigration",
    tagline: "Practical guidance through complex immigration matters.",
    description:
      "Early consultation with us ensures your application is accurate, complete and strategically positioned — giving you the best chance to achieve your immigration objectives in New Zealand.",
    items: [
      {
        title: "Visa Applications",
        description:
          "Early consultation with us ensures your application is accurate, complete and strategically positioned, giving you the best chance to achieve your immigration objectives in New Zealand.",
        details: [
          "Student Visas",
          "Visitor Visas",
          "Work Visas",
          "Resident Visas",
          "Family Visas",
        ],
      },
      {
        title: "Employers",
        description:
          "We help employers stay ahead of accreditation and employee visa requirements so your workforce can move quickly.",
        details: ["Employer Accreditation", "Employee Visas", "Job Check"],
      },
      {
        title: "Complex Cases",
        description:
          "When the answer isn't straightforward, we draw on deep experience to protect your position.",
        details: [
          "Legal Opinion on which visa is suitable, considering your immigration history",
          "PPI Response — when Immigration NZ holds potentially prejudicial information",
          "RFI Response — responding to Immigration NZ requests",
          "DLN Response — responding to a Deportation Liability Notice",
          "Section 61 Requests — when your visa has expired and you wish to apply again",
          "Family Violence — when you hold a temporary visa and need another because of family violence",
          "Ministerial Appeals — when all avenues through Immigration NZ are exhausted",
          "Appeal to the Immigration and Protection Tribunal",
          "Appeal to the High Court",
        ],
      },
    ],
  },
  {
    slug: "commercial-law",
    number: "04",
    label: "Business & Commercial",
    tagline: "Clear legal support for businesses and commercial decisions.",
    description:
      "We support businesses of every size with a full suite of commercial legal services.",
    items: [
      {
        title: "Business Services",
        description:
          "We support businesses of every size with a full suite of commercial legal services.",
        details: [
          "Company Incorporation",
          "Joint Venture Agreements",
          "Partnership Agreements",
          "Restructurings and Refinancing",
          "Franchising",
          "Commercial Leases",
          "Finance (including lending and security documentation)",
          "Commercial Contracts",
          "Forestry Rights",
          "Buying and Selling a Business",
          "Directors' and Shareholders' Duties and Obligations",
        ],
      },
    ],
  },
  {
    slug: "elders-law",
    number: "05",
    label: "Elders Law",
    tagline: "Property, business and commercial expertise.",
    description:
      "Property, business and commercial expertise — from conveyancing to company incorporations.",
    items: [],
  },
  {
    slug: "legal-aid",
    number: "06",
    label: "Legal Aid",
    tagline: "Legal support for eligible family law proceedings.",
    description:
      "If you cannot afford a lawyer, you may be able to apply for Legal Aid. We can advise you whether or not you may be eligible to apply for aid.",
    items: [],
  },
];

export const businessServices = [
  "Company Incorporation",
  "Joint Venture Agreements",
  "Partnership Agreements",
  "Restructurings and Refinancing",
  "Franchising",
  "Commercial Leases",
  "Finance (including lending and security documentation)",
  "Commercial Contracts",
  "Forestry Rights",
  "Buying and Selling a Business",
  "Directors' and Shareholders' Duties and Obligations",
];

export const contactDetails = {
  north: {
    island: "North Island",
    name: "Jayanthi Vallipuram",
    role: "Barrister & Solicitor",
    phone: "0277218483",
    phoneHref: "tel:0277218483",
    email: "jaylawandassociates@gmail.com",
    emailHref: "mailto:jaylawandassociates@gmail.com",
  },
  south: {
    island: "South Island",
    name: "Sadaat Abasi",
    role: "Associate",
    phone: "",
    phoneHref: "",
    email: "jaylawandassociates@gmail.com",
    emailHref: "mailto:jaylawandassociates@gmail.com",
  },
};

export const values = [
  {
    title: "Their issues become ours.",
    description:
      "We pride ourselves on the strong relationships we form with our clients. We are with you every step of the way.",
  },
  {
    title: "Experience, wisdom & integrity.",
    description:
      "Jay and Sadaat bring a combination of experience, wisdom, insight and integrity to resolve your legal issues.",
  },
  {
    title: "Honest, practical advice.",
    description:
      "Clear guidance in plain English — we deal with the fine print so you don't have to.",
  },
  {
    title: "Free first consultation.",
    description:
      "Book a free first consultation to explore how we can help you and what outcomes are realistic.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "A first conversation about your situation, what you need and what a realistic outcome looks like. Your first consultation with us is free.",
  },
  {
    title: "Define",
    text: "We set out your options in plain English. You know where you stand — and what it involves — before anything begins.",
  },
  {
    title: "Prepare",
    text: "We prepare the agreements, applications and responses your matter needs, carefully and on time.",
  },
  {
    title: "Advise",
    text: "Honest, practical advice on what is realistic for your circumstances. We deal with the fine print so you don't have to.",
  },
  {
    title: "Deliver",
    text: "We work your matter through to its conclusion and keep you informed at every step of the way.",
  },
];

export const testimonials = [
  {
    quote:
      "Jayanthi explained everything clearly and kept us informed at every step.",
    name: "Priya R.",
    matter: "Family law",
  },
  {
    quote:
      "Honest, practical advice — we always knew exactly where we stood.",
    name: "D. & K. Turner",
    matter: "Property",
  },
  {
    quote:
      "Our immigration application felt manageable for the first time. Professional and caring.",
    name: "S. Sharma",
    matter: "Immigration",
  },
];

export const timeline = [
  {
    year: "2017",
    title: "The journey begins",
    text: "Jayanthi Vallipuram starts practising as a sole practitioner in Family, Immigration, Employment and Commercial Law.",
  },
  {
    year: "2022",
    title: "Jay Law is established",
    text: "Jayanthi Vallipuram (Jay) establishes Jay Law — a firm built on strong relationships and practical, human legal advice.",
  },
  {
    year: "2026",
    title: "Expansion to the South Island",
    text: "Jay Law expands its services to the South Island with the support of Sadaat Abasi, extending experience and wisdom to more New Zealanders.",
  },
];

export const people = [
  {
    name: "Jayanthi Vallipuram",
    shortName: "Jay",
    role: "Principal · Barrister & Solicitor",
    photo: "/jayanthi-vallipuram.jpg",
    photoPos: "50% 8%",
    island: "North Island",
    bio: "Jay has been a sole practitioner providing services in Family, Immigration, Employment and Commercial Law since 2017. In 2022 she founded Jay Law on the belief that expert legal care should feel human — fixed clarity, fast responses and advice you can actually use.",
    tags: ["Family Law", "Immigration", "Employment", "Commercial"],
    contact: {
      title: "Jayanthi Vallipuram",
      role: "Barrister and Solicitor",
      firm: "Jay Law",
      phone: "0277218483",
    },
  },
  {
    name: "Sadaat Abasi",
    shortName: "Sadaat",
    role: "Associate",
    photo: "/sadaat-abasi.jpg",
    photoPos: "50% 15%",
    island: "South Island",
    bio: "Sadaat joined Jay Law in 2026, bringing extensive personal experience and wisdom from his legal background. His presence allowed Jay Law to expand its services to the South Island, extending the firm's reach and depth.",
    tags: ["Property", "Commercial", "South Island clients"],
  },
];

/* ------------------------------------------------------------------ */
/* FAQs (all groups — used on /faqs and in detail pages)                */
/* ------------------------------------------------------------------ */

export const faqGroups = [
  {
    group: "Getting started",
    items: [
      {
        title: "Is the first consultation really free?",
        content:
          "Yes. Your first consultation is free. It's a chance for us to understand your situation and for you to get expert, practical advice on what outcomes are realistic.",
      },
      {
        title: "How quickly will I hear back?",
        content:
          "We respond to calls and emails within one working day. Where matters are urgent — such as protection order applications — we prioritise your matter.",
      },
      {
        title: "Do you charge fixed fees?",
        content:
          "Where possible we agree fees up front so you know where you stand before we start. Where a matter is unusual, we will quote before undertaking the work.",
      },
    ],
  },
  {
    group: "Family law",
    items: [
      {
        title: "Can I sign a Contracting Out Agreement before marriage?",
        content:
          "Yes. A Contracting Out Agreement (commonly known as a prenuptial agreement) protects your assets in the event that you separate from your partner. We can prepare one for you.",
      },
      {
        title: "How do I apply for a Protection Order?",
        content:
          "We can talk through your situation and help you apply for a Protection Order, property order and furniture order. A Protection Order will protect you and your children from family violence.",
      },
      {
        title: "Oranga Tamariki is involved with my family — can you help?",
        content:
          "Yes. We assist clients in all their dealings with Oranga Tamariki (formerly Child, Youth & Family), which deals with care and safety issues relating to children.",
      },
    ],
  },
  {
    group: "Property & business",
    items: [
      {
        title: "When should I involve a lawyer in a property purchase?",
        content:
          "Right from the start. We recommend having your lawyer involved from the beginning — we prepare the sale and purchase agreement and carry out conveyancing.",
      },
      {
        title: "What business services do you offer?",
        content:
          "Company incorporation, joint venture and partnership agreements, restructurings and refinancing, franchising, commercial leases, finance and security documentation, commercial contracts, forestry rights, buying and selling a business, and directors' and shareholders' duties and obligations.",
      },
    ],
  },
  {
    group: "Immigration",
    items: [
      {
        title: "Which visas do you help with?",
        content:
          "Student, Visitor, Work, Resident and Family visas. We also assist employers with accreditation, employee visas and job checks.",
      },
      {
        title: "What is a Section 61 request, and can you help?",
        content:
          "A Section 61 request is made when your visa has expired and you want to apply for another visa. We can prepare and lodge these requests for you, alongside PPI, RFI and DLN responses, ministerial appeals, and appeals to the Immigration and Protection Tribunal and High Court.",
      },
      {
        title: "I hold a temporary visa but need to leave due to family violence.",
        content:
          "We can apply for another visa on the grounds of family violence. This is a complex area — early consultation with us ensures your application is accurate, complete and strategically positioned.",
      },
      {
        title: "Can you help with passport and citizenship applications?",
        content:
          "Yes. We offer assistance with passport and citizenship applications and renewals, ensuring all documentation is correctly prepared and submitted.",
      },
    ],
  },
  {
    group: "Legal aid",
    items: [
      {
        title: "Am I eligible for Legal Aid?",
        content:
          "If you cannot afford a lawyer, you may be able to apply for Legal Aid. We can advise you whether or not you may be eligible to apply for aid. We only provide Legal Aid for eligible Family Law proceedings.",
      },
      {
        title: "Does Legal Aid cover immigration or commercial work?",
        content:
          "No — we only provide Legal Aid for eligible Family Law proceedings.",
      },
    ],
  },
];

export const footerLinks = [
  {
    heading: "Practice Areas",
    links: [
      { label: "Family Law", href: "/practice-areas/family-law" },
      { label: "Property & Conveyancing", href: "/practice-areas/property" },
      { label: "Immigration", href: "/practice-areas/immigration" },
      { label: "Business & Commercial", href: "/practice-areas/commercial-law" },
      { label: "Elders Law", href: "/practice-areas/elders-law" },
      { label: "Legal Aid", href: "/practice-areas/legal-aid" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { label: "About", href: "/about" },
      { label: "Our People", href: "/our-people" },
      { label: "Our Approach", href: "/#approach" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
