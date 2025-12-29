import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, ExternalLink, Award, BookOpen } from "lucide-react";

export function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const publications = [
    {
      title: "Decentralised Authentication Protocol for Devices Using Blockchain",
      venue: "33rd Conference of Open Innovations Association (FRUCT)",
      year: "2023",
      description: "A novel approach to securing IoT devices using blockchain-based authentication mechanisms.",
      link: "https://ieeexplore.ieee.org/document/10143051",
      gradient: "from-emerald-500 to-teal-500",
      isIEEE: true,
    },
    {
      title: "Vision-based Hand Gesture Interface for Real-time Computer Control",
      venue: "TENCON 2022",
      year: "2022",
      description: "Implementation of computer vision and deep learning for intuitive gesture-based control systems.",
      link: "https://ieeexplore.ieee.org/document/9977948",
      gradient: "from-teal-500 to-cyan-500",
      isIEEE: true,
    },
    {
      title: "Modeling Human Cognition in Chess using Reinforcement Learning",
      venue: "8th ACCS Conference 2022",
      year: "2022",
      description: "Research on developing a Reinforcement Learning chess engine that models human cognitive processes, published as Paper ID 21.",
      link: "https://www.amrita.edu/events/accs8/#:~:text=Occasion%20Noise%20is%20moderated%20by%20Expertise%3A%20Insights%20from%20over%20a%20Billion%20open%20source%20chess%20games",
      gradient: "from-cyan-500 to-blue-500",
      isIEEE: false,
    },
    {
      title: "Long Short Term Memory Networks for Lexical Normalization of Tweets",
      venue: "12th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      year: "2021",
      description: "Lexical normalization is converting a non-standard text into a standard text that is more readable and universal.",
      link: "https://ieeexplore.ieee.org/document/9579684",
      gradient: "from-blue-500 to-indigo-500",
      isIEEE: true,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30"></div>
        </motion.div>
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
            <span className="px-6 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full border-2 border-emerald-300 dark:border-emerald-700 font-grotesk text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Research Papers
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Published <span className="gradient-text">Research</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Contributions to the fields of blockchain, computer vision, and AI.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                  {/* Gradient accent bar */}
                  <motion.div
                    className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b ${pub.gradient}`}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  ></motion.div>

                  {/* Glowing background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></motion.div>

                  <div className="flex flex-col md:flex-row md:items-start gap-8 relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pub.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                        <FileText className="h-10 w-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-grotesk text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                          {pub.title}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
                          <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${pub.gradient} text-white font-grotesk shadow-md`}>
                            {pub.venue}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400 font-grotesk">
                            {pub.year}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {pub.description}
                        </p>
                      </div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          className={`bg-gradient-to-r ${pub.gradient} text-white border-0 shadow-lg hover:shadow-xl transition-all rounded-xl font-grotesk group/btn relative overflow-hidden cursor-pointer`}
                        >
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <motion.div
                              className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"
                            ></motion.div>
                            <span className="relative z-10 flex items-center gap-2">
                              {pub.isIEEE ? (
                                <>
                                  <BookOpen className="h-4 w-4" />
                                  View on IEEE
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="h-4 w-4" />
                                  Read Paper
                                </>
                              )}
                            </span>
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br ${pub.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-3xl`}></div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
