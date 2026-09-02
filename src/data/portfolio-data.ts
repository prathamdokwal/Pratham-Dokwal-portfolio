/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Project,
  Education,
  SocialLink,
  TechnicalSkillGroup,
} from "@/types/portfolio";

import headshot from "@/assets/pratham.png";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Pratham Dokwal",
  title: "Web Developer & BCA Student",
  location: { city: "Hyderabad, Telangana", country: "India" },
  email: "dokwalpratham@gmail.com",
  phone: "+91 8329277453",
  linkedin: "https://www.linkedin.com/in/pratham-dokwal-55291136b/",
  avatar: headshot,
  bio: "BCA student skilled in web development and AI-powered applications, focused on building practical, user-oriented software solutions.",
  skills:
    "Problem Solving, Quick Learner, Communication, Teamwork, Time Management, Adaptability, Critical Thinking, Attention to Detail",
  languages: "English · Hindi · Telugu",
};

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Inventory Tracker",
    description: "Full-Stack Web Application",
    techStack: ["React", "TanStack", "Node.js", "Supabase", "JavaScript"],
    liveUrl: "https://inventory-tracker.my-stack.workers.dev/",
    status: "active",
  },
  {
    id: "proj-2",
    name: "ResuAI",
    description: "AI Resume Analyzer",
    techStack: ["React", "Node.js", "Gemini API", "Vercel"],
    liveUrl: "https://analyze-my-career-37-pratham-c8a6.vercel.app/",
    status: "active",
  },
  {
    id: "proj-3",
    name: "StudyFlow",
    description: "Study Management Application",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://studyflow-flame-eight.vercel.app/",
    status: "active",
  },
];

export const technicalSkills: TechnicalSkillGroup[] = [
  { id: "tech-1", label: "Languages", items: ["Java", "JavaScript", "C", "C++"] },
  {
    id: "tech-2",
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "TanStack"],
  },
  { id: "tech-3", label: "Backend", items: ["Node.js", "REST APIs"] },
  {
    id: "tech-4",
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Supabase"],
  },
  {
    id: "tech-5",
    label: "Concepts",
    items: [
      "Full-Stack Development",
      "Database Management",
      "API Integration",
      "Responsive Web Design",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Jhanavi Degree College | Affiliated to Osmania University",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Applications",
    startYear: "2024",
    endYear: "2027",
    location: "Hyderabad, Telangana",
    details:
      "Relevant Coursework: Programming, Database Management Systems, Data Structures, Web Development, Software Engineering.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "Pratham Dokwal",
    url: "https://www.linkedin.com/in/pratham-dokwal-55291136b/",
  },
];
