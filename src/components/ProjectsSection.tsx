import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Decentralised Authentication Protocol for Devices & Users to Access Private Network Services Using Blockchain.",
      description: "Decentralized authentication protocol for IoT devices using blockchain technology, published in IEEE conference.",
      technologies: ["Blockchain", "Cryptography", "Hyperledger Fabric", "Arduino Mega","PUF"],
      period: "2022 - 2023",
      link: "https://github.com/gosupraneeth/major-project",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      iconGradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Vision-based Hand Gesture Interface for Real-time Computer Operation Control",
      description: "Vision-based hand gesture recognition system for real-time computer control using deep learning and computer vision techniques.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision","MediaPipe","PyAutoGUI"],
      period: "Jan - Apr 2022",
      link: "https://github.com/gosupraneeth/Vision-based-Hand-Gesture-Interface-for-Real-time-Computer-Operation-Control",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
      iconGradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Long Short Term Memory Networks for Lexical Normalization of Tweets",
      description: "NLP project implementing LSTM networks for text normalization and processing of non-standard language forms.",
      technologies: ["Python", "LSTM", "NLP", "TensorFlow"],
      period: "Aug - Nov 2021",
      link: "https://github.com/gosupraneeth/Lexical_Normalization",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      iconGradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Traffic Sign Predictor",
      description: "Computer vision project for self-driving cars using the GTSRB dataset, enabling vehicles to develop an understanding of their environment from digital images.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
      period: "Aug - Nov 2021",
      link: "https://github.com/gosupraneeth/Traffic-Sign-Predictor",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      iconGradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Voice Based OS",
      description: "Operating system project enabling file access, application control, and various actions through voice commands.",
      technologies: ["Python", "Voice Recognition", "Operating Systems", "Speech Processing","gTTs","selenium","tkinter"],
      period: "Jan - Apr 2021",
      link: "https://github.com/gosupraneeth/IT253-OS-Project/tree/master",
      gradient: "from-teal-500 via-cyan-500 to-sky-500",
      iconGradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Movie Review Application with Chatbot",
      description: "Web application providing movie suggestions based on user activity with an intelligent chatbot for mood-based recommendations considering language and genre preferences.",
      technologies: ["Django" , "Rasa", "Chatbot", "Web Development"],
      period: "Jan - Apr 2021",
      link: "https://github.com/gosupraneeth/IT254-Project",
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      iconGradient: "from-sky-600 to-blue-600",
    },
    {
      title: "Minesweeper AI",
      description: "Artificial Intelligence system designed to play Minesweeper using advanced game-playing algorithms and logical reasoning.",
      technologies: ["Python", "Artificial Intelligence", "Game AI", "Algorithms", "pygame"],
      period: "Aug - Nov 2020",
      link: "https://github.com/gosupraneeth/Minesweeper",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      iconGradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Uno-Morse-Conversie",
      description: "Embedded systems project that converts morse code to text and converts the output to speech, bridging traditional and modern communication.",
      technologies: ["KMeans", "Morse Code", "Text-to-Speech"],
      period: "Aug - Nov 2020",
      link: "https://github.com/gosupraneeth/Uno-Morse-Conversie",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500",
      iconGradient: "from-cyan-600 to-teal-600",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(at 40% 20%, rgba(20, 184, 166, 0.3) 0px, transparent 50%),
              radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.3) 0px, transparent 50%),
              radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.3) 0px, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        ></motion.div>
      </div>

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
            <span className="px-6 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-full border-2 border-teal-300 dark:border-teal-700 font-grotesk text-teal-700 dark:text-teal-300 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Featured Work
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Innovative <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing cutting-edge solutions across AI, blockchain, and web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 relative">
                {/* Animated gradient header */}
                <motion.div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                  animate={hoveredIndex === index ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                ></motion.div>
                
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></motion.div>

                {/* Glowing orb effect */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.iconGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></motion.div>

                <div className="p-8 space-y-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.iconGradient} flex items-center justify-center shadow-lg`}
                  >
                    <Sparkles className="h-8 w-8 text-white" />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-grotesk text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    {project.period && (
                      <p className="text-sm text-teal-600 dark:text-teal-400 mb-3 font-grotesk">
                        {project.period}
                      </p>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="outline"
                          className={`border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20 hover:bg-gradient-to-r hover:${project.iconGradient} hover:text-white hover:border-transparent transition-all`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${project.iconGradient} text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-xl font-grotesk relative overflow-hidden group/btn cursor-pointer`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <motion.div
                            className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"
                          ></motion.div>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            View Project
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className={`rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:bg-gradient-to-r hover:${project.iconGradient} hover:text-white hover:border-transparent transition-all cursor-pointer`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom decorative element */}
                <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${project.iconGradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
