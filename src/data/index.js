import {algorithms, oscs,} from "../assets";
import { FaReact, FaHtml5, FaCss3, FaJs, FaPython } from "react-icons/fa";
import { SiC, SiMysql, SiMongodb } from "react-icons/si";

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
    title: "C# Development",
    company_name: "School | Self-Improvement",
    date: "2023 - 2025",
    details: [
      "<span style='color: white;'>Developed 15+ modular</span> <span style='color: #9333ea;'>C#</span> <span style='color: white;'>applications implementing</span> <span style='color: #00d4ff;'>SOLID principles</span> <span style='color: white;'>and design patterns, including repository pattern for data layer abstraction</span>",
      "<span style='color: white;'>Built real-time chat systems using</span> <span style='color: #ec4899;'>SimpleTCP/IP</span> <span style='color: white;'>library with end-to-end encryption and message queuing capabilities</span>",
      "<span style='color: white;'>Designed management system with</span> <span style='color: #06b6d4;'>SQL Client</span><span style='color: white;'>, featuring role-based access control and report generation</span>"
    ],
  },
  {
    title: "Fluxa",
    company_name: "Saas | Self-Improvement",
    date: "2025",
    details: [
      "<span style='color: white;'>Developed a comprehensive code playground platform (</span><span style='color: #f59e0b;'>fluxa.vercel.app</span><span style='color: white;'>) </span> supporting 10+ programming languages with real-time execution capabilities powered by</span> <span style='color: #00d4ff;'>Convex</span> <span style='color: white;'>backend infrastructure for lightning-fast response times</span>",
      "<span style='color: white;'>Integrated</span> <span style='color: #9333ea;'>Clerk</span> <span style='color: white;'>authentication provider for enterprise-grade security, enabling seamless user management with social logins, email authentication, and robust data protection across user sessions</span>",
      "<span style='color: white;'>Built some user analytics dashboard at</span> <span style='color: #10b981;'>/profile</span> <span style='color: white;'>featuring a little coding statistics, language usage metrics and more</span>",
      "<span style='color: white;'>Created social code sharing system with snippet publishing, a simple page for sharing your best snippets with a simple searching ui</span>"
    ],
  },
  {
    title: "Cloud-Native Backend Systems and Payments Providers",
    company_name: "Learning | Fun",
    date: "2025",
    details: [
      "<span style='color: white;'>Created Fluxa (</span><span style='color: #f59e0b;'>code editor above described</span><span style='color: white;'>) with</span> <span style='color: #61dafb;'>React</span> <span style='color: white;'>+</span> <span style='color: #3178c6;'>TypeScript</span><span style='color: white;'>, back-end on</span> <span style='color: #ec4899;'>Convex</span><span style='color: white;'>, auth with</span> <span style='color: #10b981;'>Clerk</span> <span style='color: white;'>and payments on</span> <span style='color: #fbbf24;'>LemonSqueeze</span>",
      "<span style='color: white;'>Implemented</span> <span style='color: #06b6d4;'>JWT authentication</span> <span style='color: white;'>flow with Clerk and role-based permissions matrix</span>",
      "<span style='color: white;'>Designed</span> <span style='color: #10b981;'>MongoDB/Mongoose</span> <span style='color: white;'>schemas with aggregation pipelines for complex analytics queries</span>",
      "<span style='color: white;'>Integrated Convex real-time database for collaborative features using</span> <span style='color: #9333ea;'>CRDT</span> <span style='color: white;'>conflict resolution</span>",
    ],
  },
  {
    title: "3D Game Development Suite",
    company_name: "Unity Engine",
    date: "2024",
    details: [
      "<span style='color: white;'>Created open-world</span> <span style='color: #ef4444;'>RPG</span> <span style='color: white;'>with procedurally generated terrain and biomes</span>",
      "<span style='color: white;'>Optimized rendering pipeline achieving stable</span> <span style='color: #22c55e;'>60 FPS</span> <span style='color: white;'>on mid-range hardware</span>",
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
