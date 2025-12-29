import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Trophy, Award, FileText, Code, Sparkles, Star } from "lucide-react";

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: FileText,
      title: "IEEE Author",
      description: "Published 2 research papers in IEEE conferences",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      count: "2",
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      description: "Multiple victories in coding competitions",
      color: "from-yellow-500 via-orange-500 to-red-500",
      count: "5+",
    },
    {
      icon: Award,
      title: "AI Certification",
      description: "Certified in Machine Learning and Deep Learning",
      color: "from-purple-500 via-pink-500 to-rose-500",
      count: "3",
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Active contributions to developer community",
      color: "from-green-500 via-emerald-500 to-teal-500",
      count: "100+",
    },
    {
      icon: Sparkles,
      title: "E-Commerce Projects",
      description: "Built full-stack e-commerce solutions",
      color: "from-indigo-500 via-purple-500 to-pink-500",
      count: "10+",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated star particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <Star className="h-2 w-2 text-purple-400 fill-purple-400" />
        </motion.div>
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
            <span className="px-6 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full border-2 border-yellow-300 dark:border-yellow-700 font-grotesk text-yellow-700 dark:text-yellow-300 flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Milestones & Recognition
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones throughout my professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 h-full group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-white dark:bg-gray-800">
                  {/* Animated gradient border */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${achievement.color}`}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  ></motion.div>

                  {/* Gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></motion.div>

                  {/* Glowing orb */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${achievement.color} rounded-full blur-3xl`}
                  ></motion.div>

                  <div className="relative z-10 space-y-6">
                    {/* Icon with count badge */}
                    <div className="relative inline-block">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                      >
                        <achievement.icon className="h-10 w-10 text-white" />
                      </motion.div>
                      
                      {/* Count badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                        className={`absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white font-grotesk shadow-lg border-4 border-white dark:border-gray-800`}
                      >
                        {achievement.count}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-grotesk text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom decorative element */}
                  <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
