import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <p className="text-lg mb-6">
            I am a passionate Software Engineer with experience in building modern web applications. 
            Currently working at Genesys, I focus on developing robust, user-friendly interfaces and 
            improving application performance.
          </p>
          <p className="text-lg mb-6">
            My journey in software development has equipped me with a strong foundation in both 
            frontend and backend technologies. I enjoy solving complex problems and creating 
            efficient solutions that deliver exceptional user experiences.
          </p>
          <p className="text-lg">
            Outside of coding, I'm passionate about continuous learning and staying updated with 
            the latest trends in technology. I have solved over 500 programming problems across 
            various competitive platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
