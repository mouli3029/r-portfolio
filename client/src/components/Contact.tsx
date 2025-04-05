import { motion } from "framer-motion";
import { fadeInUp, slideLeft, slideRight } from "@/utils/animations";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
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
      // Simulated form submission (no actual API endpoint)
      // In a real app, you'd send this data to a backend endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
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
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            {...slideRight}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="mb-8">
              Feel free to reach out to me for any opportunities, questions, or just to say hello!
            </p>
            
            <div className="space-y-6">
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
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 mt-1">
                  <FaLinkedin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/venkatamouli" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-300 hover:underline"
                  >
                    linkedin.com/in/venkatamouli
                  </a>
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
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-lg"
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
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
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
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
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
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="dark:text-gray-200">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    className="resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
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
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
