export interface ProjectLink {
  label: string;
  url: string;
  isContact?: boolean; // If true, links to #contact anchor for private repos
  isExternal?: boolean;
}

export interface Project {
  id: string;
  category: 'AI and data' | 'Websites for businesses' | 'Civic tech';
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  isPrivate?: boolean;
  privateNote?: string;
  // Easily extendable fields for future additions:
  liveUrl?: string;
  screenshot?: string;
  featured?: boolean;
}

export const CATEGORIES = [
  'AI and data',
  'Websites for businesses',
  'Civic tech'
] as const;

export type Category = typeof CATEGORIES[number];

export const PROJECTS: Project[] = [
  // ---------------------------------------------------------
  // AI and data
  // ---------------------------------------------------------
  {
    id: 'bitfinder',
    category: 'AI and data',
    title: 'BitFinder',
    description: 'A model and API that helps students pick a course of study, paired with a survey interface to collect student answers and generate recommendations.',
    tech: ['Python', 'JavaScript', 'REST API', 'Machine Learning'],
    links: [
      {
        label: 'Model & API Repo',
        url: 'https://github.com/adegbenleg-a11y/bitfinder-model-api',
        isExternal: true,
      },
      {
        label: 'Survey Repo',
        url: 'https://github.com/adegbenleg-a11y/bitfinder-survey',
        isExternal: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: 'https://bitfinder-demo.example.com',
    // screenshot: '/projects/bitfinder.webp',
  },
  {
    id: 'churn-detection',
    category: 'AI and data',
    title: 'Churn Detection',
    description: 'Predicts which customers are likely to leave, enabling a business to proactively act and retain accounts before they churn.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Predictive Modeling'],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/adegbenleg-a11y/Churn-Detection-model',
        isExternal: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/churn-detection.webp',
  },

  // ---------------------------------------------------------
  // Websites for businesses
  // ---------------------------------------------------------
  {
    id: 'oreos-delicacies',
    category: 'Websites for businesses',
    title: 'Oreos Delicacies',
    description: 'A custom storefront for cakes and pastries with a purpose-built administrative portal for staff to manage orders and menu items.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Admin Dashboard'],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/adegbenleg-a11y/oreos-delicacies',
        isExternal: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/oreos-delicacies.webp',
  },
  {
    id: 'aveltrixa-travels',
    category: 'Websites for businesses',
    title: 'Aveltrixa Travels',
    description: 'A modern travel agency website engineered to capture user inquiries and route every booking enquiry instantly to Telegram.',
    tech: ['HTML', 'JavaScript', 'Telegram API', 'CSS3'],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/adegbenleg-a11y/aveltrixa-travels',
        isExternal: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/aveltrixa-travels.webp',
  },
  {
    id: 'bomie-glam',
    category: 'Websites for businesses',
    title: 'Bomie Glam',
    description: 'A bold, visually refined digital brand experience and product catalog built for an expansive cosmetics and full makeup line.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Brand Identity'],
    links: [
      {
        label: 'GitHub Repo',
        url: 'https://github.com/adegbenleg-a11y/bomie-glam',
        isExternal: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/bomie-glam.webp',
  },
  {
    id: 'bholus-skin-art',
    category: 'Websites for businesses',
    title: "Bholu's Skin Art",
    description: 'A client-facing digital showcase for a beauty and aesthetics brand, highlighting services, skincare treatments, and booking details.',
    tech: ['TypeScript', 'Responsive Design', 'UI/UX'],
    isPrivate: true,
    privateNote: 'Private repo. Ask me for a demo',
    links: [
      {
        label: 'Private repo. Ask me for a demo',
        url: '#contact',
        isContact: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/bholus-skin-art.webp',
  },

  // ---------------------------------------------------------
  // Civic tech
  // ---------------------------------------------------------
  {
    id: 'buildvote-naija',
    category: 'Civic tech',
    title: 'BuildVote Naija',
    description: 'An accessible, objective civic voting guide designed to empower Nigerian voters with clear electoral and candidate information.',
    tech: ['TypeScript', 'Civic Tech', 'Data Presentation'],
    isPrivate: true,
    privateNote: 'Private repo. Ask me for a demo',
    links: [
      {
        label: 'Private repo. Ask me for a demo',
        url: '#contact',
        isContact: true,
      },
    ],
    // Optional extension slots:
    // liveUrl: '',
    // screenshot: '/projects/buildvote-naija.webp',
  },
];
