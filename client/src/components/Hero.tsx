import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, slideLeft, slideRight } from "@/utils/animations";
import { FaLinkedin, FaGithub, FaCode, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hello, I'm <span className="text-primary">Venkata Mouli</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I build modern web applications with a focus on clean code, performance, and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
                <a href="/attached_assets/Kundula_Venkata_Mouli_resume.pdf" download>
                  Download Resume <FaDownload />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex space-x-6">
              <a 
                href="https://linkedin.com/in/venkata-mouli/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://leetcode.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            {...slideLeft}
          >
            <div className="w-full h-80 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg flex items-center justify-center">
              <div className="w-64 h-64 bg-primary rounded-full flex items-center justify-center text-white text-6xl">
                <span className="font-bold">VM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
