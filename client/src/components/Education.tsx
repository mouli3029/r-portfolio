import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          {...fadeInUp}
        >
          <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-primary">
            <div className="flex justify-between flex-wrap mb-2">
              <h3 className="text-xl font-bold">Bachelor of Technology in Information Technology</h3>
              <span className="text-gray-500">July 2019 - June 2023</span>
            </div>
            <p className="text-primary font-medium mb-2">KL University, Guntur, India</p>
            <p className="text-gray-700">CGPA: 9.02/10.0</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
