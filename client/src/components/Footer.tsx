import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white border-t border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Venkata Mouli. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/venkatamouli" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/venkata-mouli" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://leetcode.com/venkatamouli" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LeetCode Profile"
            >
              <FaCode className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
