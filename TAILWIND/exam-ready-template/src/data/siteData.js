import {
  HiBadgeCheck,
  HiCalendar,
  HiFire,
  HiLightningBolt,
  HiSparkles,
  HiUserGroup,
} from "react-icons/hi";
import heroImage from "../assets/images/hero.avif";
import coachOneImage from "../assets/images/coach-one.avif";
import coachTwoImage from "../assets/images/coach-two.avif";

// Exam edit zone: change this file first for another topic.
export const siteInfo = {
  brand: "Pulse Studio",
  eyebrow: "Build Your Routine",
  title: "Train better with focused classes and expert coaches",
  description:
    "A polished starter website with cards, popups, saved items, auth forms, and responsive sections ready to restyle.",
  heroImage,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const programs = [
  {
    id: 1,
    title: "Strength Lab",
    category: "Beginner Friendly",
    description: "Build full-body strength with simple weekly progress.",
    schedule: "Mon, Wed, Fri",
    coach: "Alex Morgan",
    price: "$49",
    Icon: HiFire,
    details:
      "This class focuses on form, confidence, and steady progress. Students follow guided sessions with clear goals each week.",
    highlights: ["Full-body workouts", "Progress tracking", "Coach feedback"],
  },
  {
    id: 2,
    title: "Yoga Flow",
    category: "Recovery",
    description: "Improve flexibility, breathing, and daily energy.",
    schedule: "Tue, Thu",
    coach: "Sophie Lee",
    price: "$39",
    Icon: HiSparkles,
    details:
      "A calm class for mobility and recovery. It works well for beginners and for students who need a softer routine.",
    highlights: ["Mobility practice", "Breathing drills", "Balance work"],
  },
  {
    id: 3,
    title: "Cardio Boost",
    category: "High Energy",
    description: "Increase stamina with short and effective sessions.",
    schedule: "Sat, Sun",
    coach: "Jordan Kim",
    price: "$29",
    Icon: HiLightningBolt,
    details:
      "A fast-moving program built around intervals, warmups, and recovery. Great for showing interactive program cards.",
    highlights: ["Interval rounds", "Heart-rate goals", "Weekend sessions"],
  },
];

export const coaches = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Strength Coach",
    image: coachOneImage,
    Icon: HiUserGroup,
    details:
      "Alex helps students learn safe form first, then adds weight and intensity step by step.",
    highlights: ["Strength planning", "Posture checks", "Weekly targets"],
  },
  {
    id: 2,
    name: "Sophie Lee",
    role: "Yoga Trainer",
    image: coachTwoImage,
    Icon: HiBadgeCheck,
    details:
      "Sophie teaches recovery routines, flexibility practice, and breathing habits that support long-term fitness.",
    highlights: ["Flexibility", "Recovery habits", "Mindful movement"],
  },
];

export const planDetails = [
  {
    id: 1,
    name: "Starter",
    price: "$19",
    timeline: "2 weeks",
    features: ["3 guided classes", "Basic schedule", "Email support"],
  },
  {
    id: 2,
    name: "Growth",
    price: "$39",
    timeline: "1 month",
    features: ["8 guided classes", "Progress dashboard", "Coach tips"],
  },
  {
    id: 3,
    name: "Complete",
    price: "$59",
    timeline: "6 weeks",
    features: ["Unlimited classes", "Custom plan", "Priority support"],
  },
];

export const authContent = {
  login: {
    eyebrow: "Welcome Back",
    title: "Login to continue",
    description: "Open your saved programs and continue your plan.",
    button: "Login",
    switchText: "Need an account?",
    switchAction: "Sign up",
    fields: [
      { label: "Email", type: "email", placeholder: "name@email.com" },
      { label: "Password", type: "password", placeholder: "Your password" },
    ],
  },
  signup: {
    eyebrow: "Join Today",
    title: "Create your account",
    description: "Save programs, view plans, and manage your schedule.",
    button: "Sign up",
    switchText: "Already joined?",
    switchAction: "Login",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Your name" },
      { label: "Email", type: "email", placeholder: "name@email.com" },
      { label: "Goal", type: "text", placeholder: "Strength, yoga, cardio..." },
      { label: "Password", type: "password", placeholder: "Create password" },
    ],
  },
};

export const contactItems = [
  { label: "Schedule", value: "Mon-Sun, 7:00-21:00", Icon: HiCalendar },
  { label: "Location", value: "Central Fitness Hall", Icon: HiBadgeCheck },
];
