import { motion } from "framer-motion";
import { fadeInUp, slideLeft, slideRight } from "@/utils/animations";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Construct mailto link as fallback
      const mailtoLink = `mailto:venkatmouli823@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi, I'm ${formData.name} (${formData.email}).\n\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Opening your email client!",
        description: "Your email app should open with the message pre-filled.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error. Please email me directly at venkatmouli823@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 section-wrap transition-colors duration-200 bg-gray-900 text-white">
      <div className="absolute inset-0 section-glow opacity-60" />
      <div className="container mx-auto px-4 relative">
        <h2 className="section-title text-white">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            {...slideRight}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="mb-8 text-gray-300">
              I'm open to new opportunities, collaborations, and conversations. The fastest way to reach me is via email or LinkedIn.
            </p>
            
            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a 
                href="mailto:venkatmouli823@gmail.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} /> Email Me Directly
              </a>
              <a 
                href="https://linkedin.com/in/venkata-mouli/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] text-white font-medium hover:bg-[#0A66C2]/90 transition-colors"
              >
                <FaLinkedin size={18} /> Connect on LinkedIn
              </a>
            </div>

            <div className="space-y-5">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:venkatmouli823@gmail.com" className="text-blue-300 hover:underline">
                    venkatmouli823@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+918309844075" className="text-blue-300 hover:underline">
                    +91 8309844075
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p>Rajahmundry, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            {...slideLeft}
          >
            <form 
              onSubmit={handleSubmit} 
              className="surface-card surface-border p-6 text-gray-800 dark:text-gray-200"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="dark:text-gray-200">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-900/20 dark:border-gray-700/60 dark:text-gray-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="dark:text-gray-200">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-900/20 dark:border-gray-700/60 dark:text-gray-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="dark:text-gray-200">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="dark:bg-gray-900/20 dark:border-gray-700/60 dark:text-gray-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="dark:text-gray-200">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="resize-none dark:bg-gray-900/20 dark:border-gray-700/60 dark:text-gray-200"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening..." : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                  This will open your default email client with the message pre-filled.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
