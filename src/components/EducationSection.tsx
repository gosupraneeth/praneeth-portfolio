import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
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
            <span className="px-6 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border-2 border-indigo-300 dark:border-indigo-700 font-grotesk text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Academic Background
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Educational <span className="gradient-text">Excellence</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation in technology and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="p-10 lg:p-12 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden bg-white dark:bg-gray-800">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-[10px]"></div>

              {/* Glowing orb */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
              ></motion.div>

              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="flex-shrink-0 mx-auto md:mx-0"
                >
                  <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-shadow">
                    <GraduationCap className="h-14 w-14 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                      className="text-2xl lg:text-3xl font-grotesk text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all"
                    >
                      Bachelor of Technology in Information Technology
                    </motion.h3>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="font-display text-xl text-purple-600 dark:text-purple-400 mb-4"
                    >
                      National Institute of Technology Karnataka (NIT Karnataka)
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 justify-center md:justify-start"
                  >
                    <div className="flex items-center gap-3 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                      <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <span className="font-grotesk">2019 – 2023</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-2 bg-pink-50 dark:bg-pink-900/20 rounded-xl">
                      <MapPin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      <span className="font-grotesk">Karnataka, India</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="relative p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-2xl border-2 border-purple-100 dark:border-purple-800 overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    ></motion.div>
                    
                    <div className="relative z-10 flex items-start gap-3">
                      <Award className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Specialized in information technology with a focus on software development, web engineering, and artificial intelligence. Actively contributed to hackathons, IEEE publications, and innovation-driven research projects.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl"></div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
