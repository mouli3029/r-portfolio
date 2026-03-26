import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, slideLeft, slideRight } from "@/utils/animations";
import { FaLinkedin, FaGithub, FaCode, FaDownload } from "react-icons/fa";
import { Building2, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-20 transition-colors duration-200 bg-white dark:bg-gray-900">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-primary/25 to-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/20 to-primary/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.10),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.10),transparent_40%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeInUp}>
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="chip">
                <Building2 size={16} className="text-primary" />
                Genesys • Software Engineer
              </span>
              <span className="chip">
                <MapPin size={16} className="text-primary" />
                Chennai, India
              </span>
              <span className="chip">
                <Sparkles size={16} className="text-primary" />
                Frontend • Performance • DX
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Hello, I'm <span className="text-primary">Venkata Mouli</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I build modern web applications with a focus on clean code, performance, and user experience — and I enjoy delivering scalable UI for enterprise customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
                <a
                  href={`${import.meta.env.BASE_URL}Kundula_Venkata_Mouli_resume.pdf`}
                  download="Kundula_Venkata_Mouli_resume.pdf"
                >
                  Download Resume <FaDownload />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex space-x-6">
              <a 
                href="https://linkedin.com/in/venkata-mouli/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/venkata-mouli" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://leetcode.com/u/mouli_2303/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LeetCode Profile"
              >
                <FaCode />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="hidden lg:block"
            {...slideLeft}
          >
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-96 rounded-full p-2 bg-gradient-to-br from-primary/60 to-indigo-500/60 shadow-2xl">
                <div className="h-full w-full overflow-hidden rounded-full border-4 border-white/70 dark:border-gray-800/70 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Venkata Mouli profile"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className="h-full w-full items-center justify-center bg-gradient-to-br from-primary to-indigo-500 text-white text-6xl font-bold"
                  >
                    VM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
