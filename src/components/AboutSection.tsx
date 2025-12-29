import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Trophy, BookOpen, Briefcase, Cpu } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      title: "2+ Years at Cisco",
      description: "Building enterprise solutions",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Generative AI",
      description: "Deep Learning enthusiast",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: BookOpen,
      title: "3 Publications",
      description: "Deep Learning research",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Trophy,
      title: "Full Stack Dev",
      description: "Versatile tech background",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-full border-2 border-teal-300 dark:border-teal-700 font-grotesk text-teal-700 dark:text-teal-300">
              About Me
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
            Innovating at the Intersection of{" "}
            <span className="gradient-text">AI & Web Development</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              As a Software Developer at Cisco, I bring a robust foundation in technology, backed by a Bachelor's degree in Information Technology from the National Institute of Technology Karnataka. In my role, I specialize in UI development with Angular, building streamlined and effective user experiences.
            </p>
            
            <p>
              Beyond my professional responsibilities, I am deeply interested in Generative AI and am committed to staying at the forefront of this rapidly evolving field. My dedication to research has led to three publications in renowned conferences within the domain of Deep Learning, underscoring my passion for pushing the boundaries of AI.
            </p>
            
            <p>
              With a versatile background that also includes Full Stack Web Development, I am always looking for new ways to broaden my technical horizons. I thrive on learning, innovation, and opportunities to apply cutting-edge technology to impactful projects.
            </p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="font-grotesk text-teal-700 dark:text-teal-400"
            >
              Let's connect and discuss how we can drive technology forward together!
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <Card className="relative p-8 h-full border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></motion.div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}></div>

                <div className="flex flex-col items-center text-center gap-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="mb-2 text-gray-900 dark:text-white font-grotesk">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
