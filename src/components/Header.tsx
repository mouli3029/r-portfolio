import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-200/60 dark:border-gray-800/60 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Venkata Mouli
        </a>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <button
            onClick={toggle}
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-indigo-500 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/80 dark:bg-gray-800/70 backdrop-blur-md py-4 px-4 shadow-lg border-t border-gray-200/60 dark:border-gray-700/40"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}
