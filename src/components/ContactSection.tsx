import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Linkedin, Github, Mail, Send, MessageCircle, Sparkles, BookOpen } from "lucide-react";
import { toast } from "sonner";
import logo from "asset/my_logo";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!formData.name.trim()) {
      toast.error("Please enter your name", { duration: 3000 });
      return;
    }
    
    if (!formData.email.trim()) {
      toast.error("Please enter your email address", { duration: 3000 });
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", { duration: 3000 });
      return;
    }
    
    if (!formData.message.trim()) {
      toast.error("Please enter your message", { duration: 3000 });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // EmailJS configuration with your credentials
      const serviceId = 'service_cwudyej';
      const templateId = 'template_z6j8jgg';
      const publicKey = '6BV7_ThIvhYAdZUut'; // You need to add your EmailJS public key here

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(), // Adding timestamp
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Thank you for reaching out! I'll get back to you soon.", {
        duration: 4000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email send error:', error);
      toast.error("Failed to send message. Please try again or email me directly.", {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/praneeth-gosu/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gosupraneeth",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black",
    },
    {
      icon: BookOpen,
      label: "IEEE",
      href: "https://ieeexplore.ieee.org/author/37089867639",
      color: "from-indigo-600 to-purple-600",
      hoverColor: "hover:from-indigo-700 hover:to-purple-700",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:praneethgosu322@gmail.com",
      color: "from-teal-500 to-cyan-600",
      hoverColor: "hover:from-teal-600 hover:to-cyan-700",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-blue-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-teal-300 dark:border-teal-700 font-grotesk text-teal-700 dark:text-teal-300 flex items-center gap-2 shadow-lg">
              <MessageCircle className="h-4 w-4" />
              Let's Connect
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 lg:p-10 border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl relative overflow-hidden group">
              {/* Glowing border effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              ></motion.div>
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-[10px]"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-grotesk">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                    className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 rounded-xl transition-all bg-white/50 dark:bg-gray-900/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-grotesk">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 rounded-xl transition-all bg-white/50 dark:bg-gray-900/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-grotesk">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={6}
                    className="mt-2 border-2 border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 rounded-xl transition-all bg-white/50 dark:bg-gray-900/50"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-7 rounded-xl font-grotesk shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <Card className="p-8 lg:p-10 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 border-0 shadow-2xl text-white relative overflow-hidden">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 opacity-20"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
              ></motion.div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border-2 border-white/30 p-1.5"
                  >
                    <img src={logo} alt="PG Logo" className="w-full h-full object-contain" />
                  </motion.div>
                  <h3 className="text-2xl font-display">Let's Create Something Amazing</h3>
                </div>

                <p className="text-white/90 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4 pt-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <Mail className="h-5 w-5" />
                    <span>praneethgosu322@gmail.com</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>linkedin.com/in/praneethgosu</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <Github className="h-5 w-5" />
                    <span>github.com/gosupraneeth</span>
                  </motion.div>
                  <motion.a
                    href="https://ieeexplore.ieee.org/author/37089867639"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>IEEE Author Profile</span>
                  </motion.a>
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </Card>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className={`p-6 text-center group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${social.color} ${social.hoverColor} cursor-pointer relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"
                    ></motion.div>
                    <social.icon className="h-8 w-8 mx-auto mb-2 text-white" />
                    <p className="text-white font-grotesk">
                      {social.label}
                    </p>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
