import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Code, Server, Monitor, Beaker, Drill, Plus } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="text-primary" />,
    skills: ["JavaScript", "TypeScript", "Java", "Python", "HTML/CSS", "SQL"]
  },
  {
    title: "Frontend",
    icon: <Monitor className="text-primary" />,
    skills: ["Vue.js", "React.js", "KnockoutJS", "LESS", "Webpack"]
  },
  {
    title: "Backend",
    icon: <Server className="text-primary" />,
    skills: ["Node.js", "Express", "Django", "Spring Boot", "MongoDB"]
  },
  {
    title: "Testing",
    icon: <Beaker className="text-primary" />,
    skills: ["Jest", "Unit Testing"]
  },
  {
    title: "Tools & DevOps",
    icon: <Drill className="text-primary" />,
    skills: ["Git", "AWS"]
  },
  {
    title: "Other Skills",
    icon: <Plus className="text-primary" />,
    skills: ["Problem Solving", "Algorithms", "Data Structures"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">Technical Skills</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          {...staggerContainer}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
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
                  <span key={idx} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600 dark:text-gray-200">
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
