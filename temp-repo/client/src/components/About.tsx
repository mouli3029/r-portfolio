import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">About Me</h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <p className="text-lg mb-6 dark:text-gray-300">
            I am a passionate Software Engineer with experience in building modern web applications. 
            Currently working at Genesys, I focus on developing robust, user-friendly interfaces and 
            improving application performance.
          </p>
          <p className="text-lg mb-6 dark:text-gray-300">
            My journey in software development has equipped me with a strong foundation in both 
            frontend and backend technologies. I enjoy solving complex problems and creating 
            efficient solutions that deliver exceptional user experiences.
          </p>
          <p className="text-lg dark:text-gray-300">
            Outside of coding, I'm passionate about continuous learning and staying updated with 
            the latest trends in technology. I have solved over 500 programming problems across 
            various competitive platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
