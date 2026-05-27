import AlexMorgan from "../GymImg/AlexMorgan.avif";
import SophieLee from "../GymImg/SophieLee.avif";
export const menuLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "", disabled: true },
  { name: "Contact", href: "#contact" },
];
export const planDetails = [
  {
    id: 1,
    title: "Strength Training",
    duration: "6 weeks",
    schedule: "Mon, Wed, Fri",
    goal: "Improve strength, posture, and total-body control.",
    milestones: [
      "Week 1-2: Learn foundational lifting form",
      "Week 3-4: Increase resistance and consistency",
      "Week 5-6: Track measurable strength gains",
    ],
  },
  {
    id: 2,
    title: "Yoga Class",
    duration: "5 weeks",
    schedule: "Tue, Thu",
    goal: "Build flexibility, breath control, and recovery habits.",
    milestones: [
      "Week 1-2: Focus on mobility and breathing basics",
      "Week 3-4: Improve stability and balance routines",
      "Week 5: Create a calm personal recovery flow",
    ],
  },
  {
    id: 3,
    title: "Cardio Workout",
    duration: "4 weeks",
    schedule: "Sat, Sun",
    goal: "Boost endurance and create a sustainable cardio routine.",
    milestones: [
      "Week 1: Build a simple cardio habit",
      "Week 2-3: Increase pace and interval tolerance",
      "Week 4: Finish with stronger stamina and recovery",
    ],
  },
];
export const authContent = {
  signup: {
    eyebrow: "Join FitZone",
    title: "Register for your program",
    description:
      "Create your membership profile to book classes, save your schedule, and join your favorite training programs.",
    primaryLabel: "Join Program",
    secondaryText: "Already a member?",
    secondaryAction: "Login",
    fields: [
      { label: "Full Name", type: "text", placeholder: "Enter your full name" },
      { label: "Email", type: "email", placeholder: "Enter your email" },
      {
        label: "Preferred Program",
        type: "text",
        placeholder: "Strength Training",
      },
      { label: "Password", type: "password", placeholder: "Create a password" },
    ],
  },
  login: {
    eyebrow: "Welcome Back",
    title: "Login to your fitness account",
    description:
      "Continue your workouts, check trainer updates, and manage your active membership plan.",
    primaryLabel: "Login",
    secondaryText: "Need to register first?",
    secondaryAction: "Join Now",
    fields: [
      { label: "Email", type: "email", placeholder: "Enter your email" },
      {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
      },
    ],
  },
};
export const programs = [
  {
    id: 1,
    title: "Strength Training",
    description: "Build muscle and improve your full body strength.",
    icon: "🏋️",
  },
  {
    id: 2,
    title: "Yoga Class",
    description: "Increase flexibility and relax your mind and body.",
    icon: "🧘",
  },
  {
    id: 3,
    title: "Cardio Workout",
    description: "Boost endurance and improve heart health.",
    icon: "🏃",
  },
];

export const activePrograms = [
  {
    id: 1,
    status: "Active Program",
    title: "Strength Training",
    coach: "Alex Morgan",
    schedule: "Mon, Wed, Fri",
    progress: "8 of 12 sessions completed",
  },
  {
    id: 2,
    status: "Active Program",
    title: "Yoga Class",
    coach: "Sophie Lee",
    schedule: "Tue, Thu",
    progress: "3 of 10 sessions completed",
  },
];

export const programmingCourses = [
  {
    id: 1,
    title: "HTML & CSS Foundations",
    duration: "4 weeks",
    lessons: "12 lessons",
    level: "Beginner",
    description:
      "Learn how websites are structured and styled by building clean page layouts, cards, buttons, and responsive sections.",
    highlights: [
      "Create real page sections with HTML",
      "Style layouts with modern CSS",
      "Practice responsive design basics",
    ],
  },
  {
    id: 2,
    title: "JavaScript Starter Lab",
    duration: "5 weeks",
    lessons: "15 lessons",
    level: "Beginner to Intermediate",
    description:
      "Understand variables, functions, arrays, and DOM events by making interactive mini features that feel like real apps.",
    highlights: [
      "Work with click events and forms",
      "Build small interactive widgets",
      "Strengthen problem-solving logic",
    ],
  },
  {
    id: 3,
    title: "React UI Builder",
    duration: "6 weeks",
    lessons: "18 lessons",
    level: "Intermediate",
    description:
      "Turn ideas into reusable components and connect them into a polished frontend experience with practical React workflows.",
    highlights: [
      "Build reusable components",
      "Pass props and manage simple state",
      "Create a demo portfolio-ready project",
    ],
  },
];

export const trainers = [
  {
    id: 1,
    name: "Alex Morgan",
    specialty: "Strength Coach",
    image: AlexMorgan,
    adviceTitle: "Train with consistency, not guesswork",
    advice:
      "Alex recommends keeping your workouts simple and trackable. Focus on clean form first, then increase intensity gradually over time.",
    tips: [
      "Start each week with one measurable strength goal",
      "Rest enough between sessions to recover properly",
      "Track reps, sets, and how strong you feel each workout",
    ],
  },
  {
    id: 2,
    name: "Sophie Lee",
    specialty: "Yoga Trainer",
    image: SophieLee,
    adviceTitle: "Progress feels better when your body feels supported",
    advice:
      "Sophie encourages students to combine movement with breath awareness. Her advice is to improve flexibility slowly and make recovery part of your routine.",
    tips: [
      "Use breathing to relax into each stretch",
      "Practice short mobility sessions on non-training days",
      "Focus on posture quality more than speed",
    ],
  },
];

export const footerItems = [
  "About",
  "Classes",
  "Membership",
  "Support",
  "planDetails",
];
