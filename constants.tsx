
import { OfferCard, Testimonial, FAQEntry } from './types';

export interface PricingOfferCard extends OfferCard {
  price: string;
}

// UPDATE YOUR SOCIAL LINKS HERE
export const SOCIAL_LINKS = {
  discord: "https://discord.gg/sFRUm2bC", // Updated with user provided link
  twitter: "https://twitter.com/humanos",
  linkedin: "https://linkedin.com/company/humanos",
  substack: "https://humanos.substack.com"
};

export const OFFERS: PricingOfferCard[] = [
  // Academy (Human Track)
  {
    category: 'Academy',
    title: 'THE ESSENTIALS',
    description: 'Master the core stack of personal performance intelligence. Learn to orchestrate the foundational tools that reclaim 10+ hours of your week.',
    outcome: 'Core AI tools for radical personal productivity.',
    status: 'ENROLLING',
    price: '$499',
    roi: '10h+ Weekly Recovery',
    features: [
      'Personal Workflow Audit',
      'Advanced Prompt Engineering',
      'Task Automation Workflows',
      'Content Generation Systems'
    ]
  },
  {
    category: 'Academy',
    title: 'THE BUILDER TRACK',
    description: 'The definitive roadmap for engineers and consultants. Build, deploy, and monetize high-level AI systems for external clients.',
    outcome: 'Engineering complex AI systems for commercial scale.',
    status: 'INTENSIVE',
    price: '$2,499',
    roi: 'High-Ticket Service Launch',
    features: [
      'Multi-Agent System Design',
      'Custom LLM Fine-Tuning',
      'Agency Lead-Gen Protocol',
      'White-Label Deployment'
    ]
  },
  {
    category: 'Academy',
    title: '1-ON-1 MENTORSHIP',
    description: 'Direct access to the Lead Architects. Custom-tailored engineering paths for those requiring absolute mastery in system design.',
    outcome: 'Custom-tailored expert engineering and logic mastery.',
    status: 'LIMITED',
    price: 'ENQUIRE',
    roi: 'Bespoke IP Architecture',
    features: [
      'Direct Weekly Architect Access',
      'Proprietary System Audits',
      'Custom Curriculum Design',
      'Executive Network Entry'
    ]
  },
  // Agency (AI Track)
  {
    category: 'Agency',
    title: 'THE DIGITAL LAUNCHPAD',
    description: 'A high-performance AI-integrated website or micro-app build. We transform your static presence into a functional asset that qualifies leads and automates initial engagement.',
    outcome: 'Turning digital traffic into qualified, actionable business data.',
    status: 'ASSET BUILD',
    price: '$1,500',
    roi: 'LIVE CONVERSION ENGINE',
    features: [
      'High-Conversion UI/UX Build',
      'Intelligent Lead Capture Logic',
      'AI Copy & SEO Optimization',
      'Mobile-Responsive Deployment'
    ]
  },
  {
    category: 'Agency',
    title: 'CUSTOM AI BUILD',
    description: 'We architect and deploy proprietary autonomous agents that handle your operations, sales, and data loops without human fatigue.',
    outcome: 'Deploying autonomous agents into live operations.',
    status: 'IMPLEMENTATION',
    price: 'FROM $5,000',
    roi: '10x Operational Velocity',
    features: [
      'Autonomous Sales Agents',
      'Custom Internal Knowledge Base',
      'API-First System Integration',
      '24/7 Operations Protocol'
    ]
  },
  {
    category: 'Agency',
    title: 'PARTNER PROGRAM',
    description: 'The ultimate performance partnership. We act as your fractional AI Architecture department, ensuring perpetual system optimization.',
    outcome: 'Long-term systems optimization and market dominance.',
    status: 'STRATEGIC',
    price: 'RETAINER',
    roi: 'Perpetual System Dominance',
    features: [
      'Fractional CTO Advisory',
      'Perpetual Model Upgrades',
      'Staff Augmentation Strategy',
      'Competitor Disruption Audit'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Thorne",
    role: "CEO, Nexus Logistics",
    content: "Human OS didn't just automate our tasks; they re-engineered our entire growth trajectory. We are now running a company twice the size with the same team."
  },
  {
    name: "Elena Vance",
    role: "Founder, Zenith Design",
    content: "The Academy provided the missing link. I went from being overwhelmed by AI tools to architecting a system that works for me while I sleep."
  },
  {
    name: "David Chen",
    role: "Director of Ops, ScaleUp AI",
    content: "The executive clarity Human OS brings is unmatched. They translate complex technical shifts into immediate business results."
  }
];

export const FAQS: FAQEntry[] = [
  {
    question: "How does AI impact my existing team headcount?",
    answer: "Our goal is not replacement, but exponential augmentation. We focus on removing the 'busy work' so your team can focus on high-leverage strategic initiatives that actually drive revenue."
  },
  {
    question: "What is the typical timeline for ROI?",
    answer: "Agency clients typically see significant operational efficiency gains within the first 45 days. Academy learners report immediate productivity increases of 20-30% within the first week."
  },
  {
    question: "Is our company data secure during custom LLM training?",
    answer: "Security is our primary pillar. We build private, siloed environments where your data remains your property. We never train public models on client-sensitive information."
  },
  {
    question: "Why focus on 'Systems Engineering' rather than just tools?",
    answer: "Tools change every week. Systems endure. We teach and build the 'Operating System' of your business so you remain tool-agnostic and market-resilient."
  },
  {
    question: "Do you offer ongoing support after implementation?",
    answer: "Yes. Our Agency partnerships include a 'Systems Maintenance' layer to ensure your AI infrastructure evolves as the technology matures."
  },
  {
    question: "What prior technical knowledge is required for the Academy?",
    answer: "Zero. We focus on logical frameworks and business strategy. If you can explain your business process to a human, you can learn to architect it for AI."
  },
  {
    question: "How do we get started with the Agency?",
    answer: "We begin with a high-level Systems Audit. This determines where the most friction exists in your current operation and where AI will have the highest immediate impact."
  },
  {
    question: "Is Human OS a consulting firm or a software provider?",
    answer: "We are an Architecture Firm. We design the strategy (Academy) and build the infrastructure (Agency) that powers the modern enterprise."
  }
];
