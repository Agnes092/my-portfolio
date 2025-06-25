export const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is the first sample project.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg",
    duration: "3 Months",
    role: "Frontend Developer",
    fullDescription: "A detailed overview of Project One, discussing the challenges and outcomes. This project was focused on building a modern, responsive web application from scratch using the latest technologies. The goal was to deliver a high-performance, user-friendly experience.",
    features: ["Feature A: Interactive Dashboard", "Feature B: Real-time Data Sync", "Feature C: User Authentication"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second sample project.",
    tags: ["React", "Vite", "Zustand"],
    image: "/placeholder.svg",
    duration: "6 Weeks",
    role: "Full Stack Developer",
    fullDescription: "Project Two involved creating a full-stack solution for a client. This included designing the database schema, building a RESTful API, and developing a reactive frontend. The emphasis was on code quality and scalability.",
    features: ["REST API with Node.js", "State Management with Zustand", "CI/CD Pipeline"],
    technologies: ["React", "Vite", "Zustand", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third sample project.",
    tags: ["SvelteKit", "TypeScript"],
    image: "/placeholder.svg",
    duration: "1 Month",
    role: "Lead Developer",
    fullDescription: "This was a fast-paced project to build a proof-of-concept application using SvelteKit. The main objective was to explore the capabilities of SvelteKit for rapid application development and server-side rendering.",
    features: ["Server-Side Rendering", "Type-safe APIs", "Lightweight and Performant"],
    technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "Supabase"],
  },
];

export type Project = (typeof projects)[0];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
} 