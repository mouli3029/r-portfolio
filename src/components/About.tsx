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
            Full Stack Software Engineer at <strong className="text-primary">Genesys</strong> with 3+ years of experience, primarily focused on building scalable frontend systems in Vue.js and React, while also developing CRUD APIs with Node.js. I build scheduling & workforce management features used by <strong className="text-primary">30,000+ agents</strong> across global enterprise customers, backed by cloud-based automation pipelines.
          </p>
          <p className="text-lg mb-6 dark:text-gray-300">
            My experience spans the full SDLC — from requirement analysis and design discussions to implementation, testing with <strong className="text-primary">95%+ coverage</strong>, and production support. On the frontend I specialize in performance optimization, having solved critical rendering bottlenecks through virtual scroll techniques. On the backend, I've built automated pipelines using <strong className="text-primary">AWS Bedrock</strong> and Lambda.
          </p>
          <p className="text-lg dark:text-gray-300">
            Outside of work, I've solved <strong className="text-primary">500+ problems</strong> on LeetCode, CodeForces, and HackerRank, and hold an <strong className="text-primary">AWS Certified Solution Architect</strong> certification. I also explore AI-powered developer tooling — including building an automated PR-reviews-to-rules pipeline using AWS Bedrock.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
