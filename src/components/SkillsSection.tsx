import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code2, TestTube, Brain, Server, Users, Zap } from "lucide-react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["Angular", "TypeScript", "HTML/CSS", "JavaScript", "React"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Testing & CI/CD",
      icon: TestTube,
      skills: ["Cypress", "Jenkins", "Git", "Docker", "Kubernetes"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "AI & Backend",
      icon: Brain,
      skills: ["Python", "REST APIs", "Node.js", "TensorFlow", "NLP"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600 dark:text-teal-400",
    },
    {
      title: "DevOps & Cloud",
      icon: Server,
      skills: ["Docker", "Kubernetes", "CI/CD", "Linux", "Automation"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Problem Solving", "Communication", "Leadership", "Agile"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-cyan-50/30 to-teal-50/30 dark:from-gray-900 dark:via-cyan-900/10 dark:to-teal-900/10 relative overflow-hidden">
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

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
              <Zap className="h-4 w-4" />
              Technical Arsenal
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setActiveCategory(index)}
              onHoverEnd={() => setActiveCategory(null)}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group ${
                  activeCategory === index ? 'ring-2 ring-purple-500' : ''
                }`}>
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={activeCategory === index ? {
                      opacity: [0.1, 0.15, 0.1],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>

                  {/* Glowing orb */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  ></motion.div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <motion.div
                      animate={activeCategory === index ? { 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.8 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className={`font-grotesk text-xl text-gray-900 dark:text-white group-hover:${category.textColor} transition-colors`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        <Badge
                          className={`${category.bgColor} ${category.textColor} border-0 hover:bg-gradient-to-r hover:${category.color} hover:text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-default`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} origin-left`}
                  ></motion.div>

                  {/* Corner decoration */}
                  <div className={`absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full opacity-5 group-hover:opacity-15 transition-opacity blur-2xl`}></div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 border-0 shadow-2xl relative overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                backgroundSize: "200% 100%",
              }}
            ></motion.div>
            
            <div className="text-center relative z-10">
              <h4 className="text-xl font-grotesk text-white mb-3 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5" />
                Also Proficient In
              </h4>
              <p className="text-white/90 leading-relaxed">
                Go • Scala • Java • Django • Rasa • OpenCV • MediaPipe • Hyperledger Fabric • WSO2 Identity Server • Apache Tomcat • YAML • Jira • RxJS • LSTM • Reinforcement Learning • PyAutoGUI • pygame • gTTS • Selenium • Arduino • Cryptography
              </p>
            </div>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random(),
                }}
              />
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
