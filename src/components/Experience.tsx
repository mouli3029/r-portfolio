import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Genesys (Chennai, India)",
    period: "Aug 2022 - Present",
    responsibilities: [
      {
        text: "Owned end-to-end development of a scheduling calendar UI rendering weekly schedules for up to 30,000 agents. Independently identified and resolved critical page-hang issues caused by 7,000+ DOM elements per page by architecting a virtual scroll rendering solution — reducing active DOM to ~700 elements and eliminating freezes entirely.",
        highlights: ["Owned end-to-end", "30,000 agents", "7,000+ DOM elements", "virtual scroll rendering", "~700 elements", "eliminating freezes entirely"]
      },
      {
        text: "Led the development of 15+ reusable Vue.js/TypeScript UI components, driving adoption across multiple product teams and establishing a shared component library that accelerated feature delivery for enterprise customers.",
        highlights: ["Led the development", "15+ reusable", "Vue.js/TypeScript", "shared component library", "enterprise customers"]
      },
      {
        text: "Drove testing culture across the team by owning the test infrastructure and achieving 95%+ unit and integration test coverage on core scheduling modules, reducing production regression defects and improving release confidence.",
        highlights: ["Drove testing culture", "owning the test infrastructure", "95%+ unit and integration test coverage", "reducing production regression defects"]
      },
      {
        text: "Independently designed and built an automated Cursor rules optimization pipeline that ingests merged PR review comments, uses AWS Bedrock for semantic analysis to detect rule gaps, and dynamically updates team coding standards. Leveraged RAG to store existing rules and retrieve relevant matches to prevent duplicates, with prompt caching to minimize cost.",
        highlights: ["Independently designed and built", "automated", "AWS Bedrock", "semantic analysis", "Leveraged RAG", "prevent duplicates", "prompt caching", "minimize cost"]
      },
      {
        text: "Took ownership of internationalization improvements — implemented automatic locale detection for date/time formatting across the scheduling UI, eliminating customer-reported i18n issues across multiple global regions.",
        highlights: ["Took ownership", "automatic locale detection", "eliminating customer-reported", "multiple global regions"]
      },
      {
        text: "Mentored junior engineers through onboarding and ongoing code reviews, taking ownership of team knowledge-sharing and fostering engineering best practices.",
        highlights: ["Mentored junior engineers", "code reviews", "taking ownership"]
      }
    ]
  },
];

const technologies = [
  "Vue.js",
  "React",
  "Knockout.js",
  "Stencil",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "HTML5",
  "CSS3",
  "Webpack",
  "Virtual Rendering",
  "Unit/Integration Testing",
  "AWS Bedrock",
  "AWS Lambda",
  "Jenkins"
];

function highlightText(text: string, highlights: string[]) {
  if (!highlights.length) return <span>{text}</span>;

  const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${sorted.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    if (!isHighlight) return <span key={index}>{part}</span>;
    return (
      <span key={index} className="font-semibold text-primary dark:text-blue-300">
        {part}
      </span>
    );
  });
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">Professional Experience</h2>

        <motion.div
          className="max-w-3xl mx-auto relative"
          {...staggerContainer}
        >
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="ml-12 mb-10"
              {...fadeInUp}
            >
              <div className="absolute left-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                <BriefcaseIcon size={20} />
              </div>
              <div className="surface-card surface-card-hover p-6 border-l-4 border-primary">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-200 space-y-3 leading-relaxed">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{highlightText(responsibility.text, responsibility.highlights)}</li>
                  ))}
                </ul>

                {/* Inline tech stack */}
                <div className="mt-5 pt-4 border-t border-gray-200/60 dark:border-gray-600/40">
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="bg-white dark:bg-gray-700 px-2.5 py-0.5 rounded-full text-xs border border-gray-200 dark:border-gray-500 dark:text-gray-200 text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
