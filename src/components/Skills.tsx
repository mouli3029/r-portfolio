import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Server, Monitor, Beaker, Plus } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: <Monitor className="text-primary" />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Vue.js",
      "React.js",
      "Knockout.js",
      "Storybook",
      "HTML5",
      "CSS3",
      "Less",
      "Responsive",
      "Cross-Browser Compatibility"
    ]
  },
  {
    title: "Build & Testing",
    icon: <Beaker className="text-primary" />,
    skills: ["Jest", "Stencil", "Webpack", "Vite", "Test-Driven Development (TDD)"]
  },
  {
    title: "Backend & Tools",
    icon: <Server className="text-primary" />,
    skills: ["Node.js", "Express", "Django", "Spring", "Git", "Docker", "Jenkins", "AWS Bedrock"]
  },
  {
    title: "Other Skills",
    icon: <Plus className="text-primary" />,
    skills: [
      "Chrome DevTools",
      "Performance Debugging",
      "REST APIs",
      "Microfrontend Architecture",
      "Architecture",
      "Data Structures & Algorithms",
      "GitHub",
      "Jira"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 section-wrap transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">Technical Skills</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          {...staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="surface-card surface-card-hover surface-border p-6"
              {...fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-white/70 dark:bg-gray-900/20 px-3 py-1 rounded-full text-sm border border-gray-200/70 dark:border-gray-700/60 dark:text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
