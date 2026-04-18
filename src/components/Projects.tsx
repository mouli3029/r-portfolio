import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Utensils, Recycle, MessageSquare, Link, Github } from "lucide-react";

const projects = [
  {
    title: "Food and Hospitality System",
    tech: "Django, HTML, CSS, SQLite",
    description:
      "Full-stack Django application with role-based access control (admin/customer), search indexing, and order management. Features restaurant discovery, food ordering, and hotel booking with admin dashboard for content management.",
    icon: <Utensils className="text-5xl" />,
    gradient: "from-blue-400 to-indigo-500",
    link: "https://food-hospitality.venkata-mouli.com",
    github: "https://github.com/venkata-mouli/food-hospitality-system"
  },
  {
    title: "Waste Management System",
    tech: "Spring, MySQL, JSP",
    description:
      "Spring-based web application implementing a multi-role workflow (customer → volunteer → admin) for household waste collection, transport, and recycling. Features slot booking, volunteer assignment, and a recycled-products marketplace.",
    icon: <Recycle className="text-5xl" />,
    gradient: "from-green-400 to-teal-500",
    link: "https://waste-management.venkata-mouli.com",
    github: "https://github.com/venkata-mouli/waste-management-system"
  },
  {
    title: "Real-Time Chat Application",
    tech: "Socket.io, Express, Node.js",
    description:
      "Real-time messaging platform built with Socket.io for WebSocket communication. Supports instant user registration, private messaging, group creation, and online presence indicators — all with zero-latency message delivery.",
    icon: <MessageSquare className="text-5xl" />,
    gradient: "from-purple-400 to-pink-500",
    link: "https://chat-app.venkata-mouli.com",
    github: "https://github.com/venkata-mouli/chat-application"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title dark:text-white">Projects</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          {...staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="surface-card surface-card-hover overflow-hidden"
              {...fadeInUp}
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.split(", ").map((t, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm">
                    <Link size={14} /> View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm">
                    <Github size={14} /> Source Code
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
