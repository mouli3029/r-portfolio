import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Genesys",
    period: "Feb 2024 - Present",
    responsibilities: [
      "Enhanced application's date and time formatting for sub-regions by implementing a solution that utilizes browser locale and app language to determine the end locale, resolving customer's issue regarding dates."
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Genesys",
    period: "Jun 2023 - Feb 2024",
    responsibilities: [
      "Worked on implementing unit testing for entire application with a spec coverage of over 95%",
      "Optimized application performance by implementing API request caching, reducing server load and improving response times.",
      "Got promoted to Software engineer in 9 months"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Genesys",
    period: "August 2022 - May 2023",
    responsibilities: [
      "Responsible for development of notification rules management UI that includes development of custom components that can handle huge data interactively.",
      "Worked on user reported defects to improve customer experience of the product."
    ]
  }
];

const technologies = ["Vue.js", "KnockoutJS", "Less", "Jest", "Webpack"];

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
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-primary">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{exp.period}</span>
                </div>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className="ml-12 animate-in bg-gray-100 dark:bg-gray-600 p-5 rounded-lg shadow-sm"
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
