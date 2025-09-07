import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ai4papers",
    category: "AI Research Tool",
    title: "AI4Papers",
    src: "/assets/projects-screenshots/ai4papers/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://ai4papers.com",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automatically matches and retrieves the latest papers in researchers&apos; fields
          </TypographyP>
          <TypographyP className="font-mono">
            AI4Papers is an intelligent research assistant that helps researchers stay 
            up-to-date with the latest publications in their field. Using advanced AI 
            algorithms, it automatically matches your research interests with newly 
            published papers, saving you hours of manual searching.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "video2ppt",
    category: "Productivity Tool",
    title: "Video2PPT",
    src: "/assets/projects-screenshots/video2ppt/landing.png",
    screenshots: ["landing.png"],
    live: "https://video2ppt.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono">
            Video2PPT transforms any video content into professional PowerPoint 
            presentations. Whether you&apos;re converting lectures, tutorials, or 
            conference talks, this AI-powered tool extracts key information and 
            creates structured slides automatically.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Automatic transcription and content extraction</li>
            <li>Intelligent slide generation with key points</li>
            <li>Support for multiple video formats</li>
            <li>Customizable presentation templates</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "viewpair",
    category: "Video Tool",
    title: "View-Pair",
    src: "/assets/projects-screenshots/viewpair/landing.png",
    screenshots: ["landing.png"],
    live: "https://view-pair.fun",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            View-Pair is a split-screen application that allows you to watch two 
            online videos simultaneously. Perfect for comparing content, learning 
            from multiple sources, or multitasking with video content.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Use Cases</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Compare different tutorial approaches</li>
            <li>Watch multiple streams simultaneously</li>
            <li>Cross-reference educational content</li>
            <li>Efficient video content consumption</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "supasubmit",
    category: "AI Agent",
    title: "SupaSubmit",
    src: "/assets/projects-screenshots/supasubmit/landing.png",
    screenshots: ["landing.png"],
    live: "https://supasubmit.com",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            SupaSubmit is an AI agent for form-filling automation and intelligent 
            data entry. It streamlines repetitive form submissions and automates 
            data processing workflows, saving time and reducing errors.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Intelligent form field recognition</li>
            <li>Automated data validation</li>
            <li>Batch processing capabilities</li>
            <li>Custom workflow automation</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "xiaozishu",
    category: "AI Research Assistant",
    title: "XiaoZiShu",
    src: "/assets/projects-screenshots/xiaozishu/landing.png",
    screenshots: ["landing.png"],
    live: "https://xiaozishu.org",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            XiaoZiShu is an AI research agent designed to provide intelligent 
            academic research assistance. It helps researchers with literature 
            review, paper analysis, and research methodology guidance.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Automated literature review</li>
            <li>Research paper summarization</li>
            <li>Citation analysis and management</li>
            <li>Research methodology suggestions</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "fabu",
    category: "SaaS Platform",
    title: "Fabu",
    src: "/assets/projects-screenshots/fabu/landing.png",
    screenshots: ["landing.png"],
    live: "https://fabu.dev",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Fabu is a comprehensive SaaS launch platform designed to help 
            developers and entrepreneurs launch their products efficiently. 
            It provides all the tools needed to go from idea to market.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Platform Features</TypographyH3>
          <ul className="list-disc list-inside space-y-2 font-mono">
            <li>Product launch templates</li>
            <li>Marketing automation tools</li>
            <li>Analytics and tracking</li>
            <li>User feedback management</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
