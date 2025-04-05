import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Utensils, Recycle, MessageSquare, Link, Github } from "lucide-react";

const projects = [
  {
    title: "Food and Hospitality System",
    tech: "Django, HTML, CSS and SQLite",
    description: "It is all about providing customers food outside home at their convenient location. It provides an interface where admin can add food, restaurants, hotels. User can search, order food and can book hotels.",
    icon: <Utensils className="text-5xl" />,
    gradient: "from-blue-400 to-indigo-500",
    link: "#",
    github: "#"
  },
  {
    title: "Waste Management System",
    tech: "Spring boot, MySql and JSP",
    description: "A spring boot based web application in which a customer can book a slot for taking the household waste and waste collected is then transported to an appropriate recycled unit by an volunteer. Admin can add all recycled products back to the website so that customers can buy.",
    icon: <Recycle className="text-5xl" />,
    gradient: "from-green-400 to-teal-500",
    link: "#",
    github: "#"
  },
  {
    title: "Chat Application",
    tech: "Socket.io, HTML, CSS, Express",
    description: "It provides an interface where users can temporarily register and can chat with other online users, can also create groups. Uses socket.io for real time communication.",
    icon: <MessageSquare className="text-5xl" />,
    gradient: "from-purple-400 to-pink-500",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          {...staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              {...fadeInUp}
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.tech}</p>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                    <Link size={16} /> View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
