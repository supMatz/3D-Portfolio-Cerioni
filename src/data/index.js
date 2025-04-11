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
    title: "C#",
    company_name: "School - Fun",
    date: "2023 - 2025",
    details: [
      "I've built a lot of <span style='color: white;'>C# projects</span> for self improvement and school projects.",
      "I've crafted high-quality and educational projects that helped me with learning C#, Python, ecc.. and advanced programming skills, using <span style='color: white;'>MySql</span>, SqlClient, and nugget packages like <span style='color: white;'>SimpleTCP/IP</span> used for creating messaging forms.",
    ],
  },
  {
    title: "HTML, CSS, JS",
    company_name: "Fun - Learning",
    date: "2023 - 2025",
    details: [
      "I've built a lot of <span style='color: white;'>Web sites</span> for self improvement and web pages understanding.",
      "I've crafted high-quality projects that helped me learning HTML, CSS and JS using <span style='color: white;'>VS Code</span>, <span style='color: white;'>Git</span> and <span style='color: white;'>GitHub</span> for commits and <span style='color: white;'>Tailwind</span> for styling.",
    ],
  },
  {
    title: "Backend Dev",
    company_name: "Fun - Learning",
    date: "2025",
    details: [
      "I've built some <span style='color: white;'>React</span> (implementing <span style='color: white;'>Next.js - Node.js</span>) projects implementing authentication <span style='color: white;'>(using Clerk)</span> and database like <span style='color: white;'>Mongoose and Convex</span>, using PostMan as a testing tool.",
    ],
  },
  {
    title: "3D Games",
    company_name: "Fun - 3D Learning",
    date: "2024",
    details: [
      "I've developed created my own custom<span style='color: white;'> open world 3D</span> game for fun using <span style='color: white;'>Unity Engine</span>.",
    ],
  },
  {
    title: "Frontend Dev",
    company_name: "La Tana Di Cora",
    date: "2025",
    details: [
      "I've developed and delivered <span style='color: white;'>custom interdisciplinary coding</span> e-commerce web site, for La Tana Di Cora, a pet shop in Jesi, An, IT.",
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
    name: "Sort Algorithms",
    description:
      "Not gonna lie, but this was quite hard, algorithms are not easy to understand, especially the sort ones, I had to understand in deep every one of them for a school project.",
    image: algorithms,
  },
];

export { experiences, portfolio};
export default skills;