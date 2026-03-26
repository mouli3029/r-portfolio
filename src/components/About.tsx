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
            I am a Software Engineer at Genesys with a strong focus on frontend engineering and building modern web applications.
            I enjoy collaborating with product and design teams to deliver customer-centric features with strong performance and usability.
          </p>
          <p className="text-lg mb-6 dark:text-gray-300">
            My experience spans the full SDLC, including requirement understanding, design discussions, implementation, testing, and production support.
            I care about clean architecture, maintainable code, and shipping reliable UI at scale.
          </p>
          <p className="text-lg dark:text-gray-300">Outside of work, I stay active in coding and continuous learning. I have solved 500+ problems across platforms and enjoy sharpening fundamentals in data structures and algorithms. I also explore databases and backend systems, and enjoy experimenting with AI-powered tooling to build smarter applications.</p>
        </motion.div>
      </div>
    </section>
  );
}
