import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Trophy, Award, Code, IdCard, ExternalLink } from "lucide-react";
import { FaAws, FaReact, FaPython } from "react-icons/fa";

const achievements = [
  {
    icon: <Award className="text-primary" />,
    text: "Secured All India Rank 914 out of 100,000+ participants in TCS CodeVita Season 10."
  },
  {
    icon: <Code className="text-primary" />,
    text: "Solved 500+ problems across LeetCode, CodeForces, and HackerRank — focused on data structures, algorithms, and competitive programming."
  }
];

const certifications = [
  {
    icon: <FaAws className="text-primary text-lg" />,
    text: "AWS Certified Solution Architect – Associate",
    detail: "Amazon Web Services"
  },
  {
    icon: <FaReact className="text-primary text-lg" />,
    text: "Full-Stack Web Development with React Specialization",
    detail: "Coursera (Hong Kong University)"
  },
  {
    icon: <FaPython className="text-primary text-lg" />,
    text: "Django for Everybody Specialization",
    detail: "Coursera (University of Michigan)"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 section-wrap transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">Achievements & Certifications</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          {...staggerContainer}
        >
          {/* Achievements */}
          <motion.div 
            className="surface-card surface-card-hover surface-border p-6"
            {...fadeInUp}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary mr-4">
                <Trophy />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Achievements</h3>
            </div>
            <ul className="space-y-5">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">{achievement.icon}</div>
                  <p className="dark:text-gray-200">{achievement.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Certifications */}
          <motion.div 
            className="surface-card surface-card-hover surface-border p-6"
            {...fadeInUp}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary mr-4">
                <IdCard />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-5">
              {certifications.map((certification, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1 flex-shrink-0">{certification.icon}</div>
                  <div>
                    <p className="dark:text-gray-200 font-medium">{certification.text}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{certification.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
