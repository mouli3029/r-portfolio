import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Genesys (Chennai, India)",
    period: "Aug 2022 - Present",
    responsibilities: [
      "Develop and deliver high-quality frontend features across the Software Development Lifecycle (SDLC) including requirement understanding, design discussions, implementation, testing, and production support.",
      "Built scalable and reusable UI components using Vue.js, JavaScript, HTML5 and CSS3 to enhance digital user experiences for enterprise customers.",
      "Collaborate closely with product managers, designers and senior engineers to clarify requirements, propose technical solutions, and deliver customer-centric features.",
      "Contribute actively to code reviews and design discussions, ensuring adherence to internal engineering standards, performance best practices and maintainable architecture.",
      "Improved application performance by implementing API caching strategies and virtual rendering techniques, enabling smooth scheduling experience for 30,000+ concurrent users.",
      "Enhanced global usability by implementing an automatic locale detection mechanism for date/time formatting, reducing customer-reported issues across multiple regions.",
      "Strengthened product quality by developing unit and integration tests achieving 95%+ coverage, improving release confidence and reducing regression defects.",
      "Debugged complex UI production issues using browser profiling tools and performance analysis, improving responsiveness and accessibility compliance.",
      "Mentored junior engineers and supported onboarding, fostering collaborative team culture and engineering excellence."
    ]
  },
];

const technologies = [
  "Vue.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "API Caching",
  "Virtual Rendering",
  "Unit/Integration Testing"
];

const impactTerms = [
  "Software Development Lifecycle (SDLC)",
  "30,000+ concurrent users",
  "95%+ coverage",
  "performance",
  "scalable",
  "reusable",
  "customer-centric",
  "code reviews",
  "global usability",
  "regression defects",
  "accessibility compliance",
  "Mentored"
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const impactRegex = new RegExp(
  `(${impactTerms
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|")})`,
  "gi"
);

function highlightImpactTerms(text: string) {
  const parts = text.split(impactRegex);
  return parts.map((part, index) => {
    const isImpactTerm = impactTerms.some((term) => term.toLowerCase() === part.toLowerCase());
    if (!isImpactTerm) return <span key={index}>{part}</span>;

    return (
      <span
        key={index}
        className="font-semibold text-primary dark:text-blue-300"
      >
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
                <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-200 space-y-2 leading-relaxed">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{highlightImpactTerms(responsibility)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="ml-12 animate-in surface-card surface-card-hover p-5"
            {...fadeInUp}
          >
            <h4 className="font-semibold mb-2 dark:text-white">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-500 dark:text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
