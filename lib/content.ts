import {
  CalendarCheck,
  ClipboardCheck,
  Compass,
  HeartHandshake,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  UserRoundCheck
} from "lucide-react";

export const business = {
  name: "AlphaCare Concierge Care Management",
  founder: "Janet Adusei, LPN",
  founderTitle: "Founder & Healthcare Advocate",
  location: "Greater Boston Area",
  email: "hello@alphacareconcierge.com",
  website: "alphacareconcierge.com",
  url: "https://alphacareconcierge.com",
  tagline:
    "Healthcare advocacy and care coordination for families navigating the complexities of aging."
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "Healthcare Advocacy",
    icon: ShieldCheck,
    preview:
      "Steady advocacy that helps your loved one’s priorities, questions, and preferences stay visible.",
    description:
      "AlphaCare helps families prepare for conversations, clarify concerns, organize questions, and advocate for thoughtful attention across the care experience. We help translate complexity into informed next steps while respecting the role of licensed medical providers."
  },
  {
    title: "Care Coordination",
    icon: ClipboardCheck,
    preview:
      "Organized support across appointments, providers, documents, follow-ups, and family priorities.",
    description:
      "We bring order to the details that often become overwhelming: appointment flow, provider communication, records readiness, family priorities, and follow-up tasks. The goal is continuity, not fragmentation."
  },
  {
    title: "Provider Communication Support",
    icon: MessagesSquare,
    preview:
      "Clearer communication before and after healthcare visits, with careful attention to family concerns.",
    description:
      "AlphaCare supports families in preparing for provider conversations, tracking recommendations, and keeping key family members aligned after important updates. We help make sure questions are not lost in the rush of appointments."
  },
  {
    title: "Care Transition Guidance",
    icon: Compass,
    preview:
      "Guidance during hospital discharges, rehabilitation moves, new diagnoses, and changing care needs.",
    description:
      "Care transitions can be confusing and emotionally demanding. We help families understand the moving pieces, identify practical priorities, prepare for next steps, and maintain continuity as needs evolve."
  },
  {
    title: "Family Updates & Ongoing Support",
    icon: HeartHandshake,
    preview:
      "Responsive, high-touch support that keeps families informed, calmer, and better prepared.",
    description:
      "For families managing care from near or far, AlphaCare provides ongoing touchpoints, organized updates, and a trusted point of continuity. We remain attentive as needs change over time."
  }
];

export const whyAlphaCare = [
  {
    title: "Continuity",
    copy:
      "A consistent partner who understands the full picture, not only the latest appointment."
  },
  {
    title: "Clarity",
    copy:
      "Care details are organized into priorities, questions, next steps, and plain-language context."
  },
  {
    title: "Discretion",
    copy:
      "Families receive private, respectful support through sensitive and often emotional decisions."
  },
  {
    title: "Responsiveness",
    copy:
      "Timely guidance helps families move with confidence when circumstances change."
  },
  {
    title: "Healthcare Experience",
    copy:
      "Led by Janet Adusei, LPN, AlphaCare brings practical healthcare fluency to family advocacy."
  },
  {
    title: "Peace of Mind",
    copy:
      "The experience is designed to help families feel less alone and more prepared."
  }
];

export const processSteps = [
  {
    title: "Connect",
    copy: "We begin with a private conversation to understand your family’s situation and concerns."
  },
  {
    title: "Assess",
    copy: "We clarify priorities, identify gaps, and organize the immediate questions that need attention."
  },
  {
    title: "Create a Plan",
    copy: "We outline a personalized path forward with clear recommendations and next steps."
  },
  {
    title: "Coordinate",
    copy: "We support communication, appointments, transitions, and the details that require follow-through."
  },
  {
    title: "Ongoing Support",
    copy: "We remain a steady partner as needs evolve, keeping families informed and prepared."
  }
];

export const audienceCards = [
  {
    title: "Overwhelmed families",
    copy:
      "For families facing multiple providers, unfamiliar terms, urgent decisions, and a growing list of details."
  },
  {
    title: "Adult children",
    copy:
      "For daughters and sons balancing careers, households, distance, and the needs of an aging parent."
  },
  {
    title: "Families seeking guidance",
    copy:
      "For those who want a trusted healthcare advocate to bring order, context, and continuity."
  }
];

export const trustPoints = [
  { label: "Guidance", icon: Sparkles },
  { label: "Advocacy", icon: UserRoundCheck },
  { label: "Peace of mind", icon: CalendarCheck }
];
