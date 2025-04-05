import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Trophy, Award, Code, IdCard } from "lucide-react";
import { FaAws, FaReact, FaPython } from "react-icons/fa";

const achievements = [
  {
    icon: <Award className="text-primary" />,
    text: "Secured all India rank of 914 in TCS codevita season 10."
  },
  {
    icon: <Code className="text-primary" />,
    text: "Solved more than 500+ problems across competitive programming platforms."
  }
];

const certifications = [
  {
    icon: <FaAws className="text-primary text-lg" />,
    text: "AWS Certified Solution Architect"
  },
  {
    icon: <FaReact className="text-primary text-lg" />,
    text: "Full-Stack Web Development with React Specialization"
  },
  {
    icon: <FaPython className="text-primary text-lg" />,
    text: "Django for Everybody Specialization"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements & Certifications</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          {...staggerContainer}
        >
          {/* Achievements */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            {...fadeInUp}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                <Trophy />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">{achievement.icon}</div>
                  <p>{achievement.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Certifications */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            {...fadeInUp}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary mr-4">
                <IdCard />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((certification, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">{certification.icon}</div>
                  <p>{certification.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
