import {algorithms, oscs,} from "../assets";
import { FaReact, FaHtml5, FaCss3, FaJs, FaPython } from "react-icons/fa";
import { SiC, SiMysql, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, url: "https://reactjs.org/", color: "text-cyan-400" },
  { name: "HTML", icon: FaHtml5, url: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "text-orange-500" },
  { name: "CSS", icon: FaCss3, url: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "text-yellow-400" },
  { name: "C", icon: SiC, url: "https://www.cprogramming.com/", color: "text-blue-200" },
  { name: "Python", icon: FaPython, url: "https://www.python.org/", color: "text-yellow-600" },
  { name: "MySQL", icon: SiMysql, url: "https://www.mysql.com/", color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, url: "https://www.mongodb.com/", color: "text-green-600" },
  { name: "C#", icon: null, url: "https://docs.microsoft.com/en-us/dotnet/csharp/", color: "text-purple-600", isText: true }, // C# aggiunto
];

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Full-Stack C# Development",
    company_name: "School Projects & Self-Improvement",
    date: "2023 - 2025",
    details: [
      "Developed 15+ modular <span style='color: white;'>C#</span> applications implementing SOLID principles and design patterns, including repository pattern for data layer abstraction",
      "Created RESTful APIs with ASP.NET Core integrating Entity Framework for <span style='color: white;'>MySQL</span> database management",
      "Built real-time chat systems using <span style='color: white;'>SimpleTCP/IP</span> library with end-to-end encryption and message queuing capabilities",
      "Implemented automated build pipelines with GitHub Actions for CI/CD workflows, reducing deployment time by 40%",
      "Designed (for school) a management system with SQL Client ADO.NET, featuring role-based access control and report generation"
    ],
  },
  {
    title: "Modern Web Development",
    company_name: "Frontend Mastery Initiative",
    date: "2023 - 2025",
    details: [
      "Architected 10+ responsive SPAs using <span style='color: white;'>React/Tailwind CSS</span> with mobile-first approach",
      "Implemented GitHub-based version control workflows with feature branching strategy and PR reviews",
      "Optimized web performance through code splitting (35% load time reduction) and CSP implementation",
    ],
  },
  {
    title: "Cloud-Native Backend Systems",
    company_name: "Distributed Systems Lab",
    date: "2025",
    details: [
      "Created interactive code editor (<span style='color: white;'>fluxa.vercel.app</span>) with <span style='color: white;'>React + Typescript</span>, back-end on <span style='color: white;'>Convex</span>, auth with <span style='color: white;'>Clerk</span> and payments on <span style='color: white;'>LemonSqueeze</span>",
      "Implemented <span style='color: white;'>JWT authentication</span> flow with Clerk and role-based permissions matrix",
      "Designed <span style='color: white;'>MongoDB/Mongoose</span> schemas with aggregation pipelines for complex analytics queries",
      "Integrated Convex real-time database for collaborative features using CRDT conflict resolution",
    ],
  },
  {
    title: "3D Game Development Suite",
    company_name: "Unity Engine Mastery",
    date: "2024",
    details: [
      "Created open-world <span style='color: white;'>RPG</span> with procedurally generated terrain and biomes",
      "Optimized rendering pipeline achieving stable 60 FPS on mid-range hardware",
    ],
  }
];

const portfolio = [
  {
    name: "Open Source C# e React Projects",
    description:
      "A GitHub repo containing a curated list of easy projects for beginners to learn C, C#, React and some Phyton.",
    image: oscs,
  },
  {
    name: "Sorting Algorithms",
    description:
      "Not gonna lie, but this was quite hard, algorithms are not easy to understand, especially the sort ones, I had to understand in deep every one of them for a school project.",
    image: algorithms,
  },
];

export { experiences, portfolio};
export default skills;
