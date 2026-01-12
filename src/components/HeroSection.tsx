import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Download, ArrowDown, Sparkles, Code2, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import my_image from "asset/my_image";

export function HeroSection() {
  const scrollToWork = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    const fileId = '1-xtRWfbTnRenj811ai2Lr1fwB_8dOFx0';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
          className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-teal-200 dark:border-teal-700 shadow-lg"
            >
              <Sparkles className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <span className="font-grotesk text-gray-800 dark:text-gray-200">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-display text-5xl lg:text-7xl text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="gradient-text">Praneeth Gosu</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-3 text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                <Code2 className="h-6 w-6 text-teal-600" />
                <span className="font-grotesk">Software Engineer-II at Cisco</span>
              </div>
              <div className="flex items-center gap-3 text-xl lg:text-2xl text-gray-700 dark:text-gray-300">
                <Rocket className="h-6 w-6 text-cyan-600" />
                <span className="font-grotesk">UI Developer | Angular & AI Enthusiast</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Developing scalable, end-to-end software solutions powered by modern web frameworks, cloud technologies, and AI-driven automation. Dedicated to bridging front-end finesse with robust backend intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={scrollToWork}
                  className="relative px-8 py-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2 font-grotesk">
                    View My Work
                    <ArrowDown className="h-4 w-4" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  onClick={handleResumeDownload}
                  className="px-8 py-6 border-2 border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white rounded-2xl font-grotesk shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-8 pt-8"
            >
              {[
                { number: "2+", label: "Years Experience" },
                { number: "15+", label: "Projects Completed" },
                { number: "3", label: "IEEE Publications" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-grotesk">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating elements around image */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-3xl shadow-2xl opacity-70"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl shadow-2xl opacity-70"
              ></motion.div>
              
              {/* Main image container */}
                <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20 mix-blend-overlay"></div>
                <ImageWithFallback
                  src={my_image}
                  alt="Praneeth Gosu"
                  className="w-full h-full object-cover"
                />
                </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 font-grotesk">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-teal-600 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-teal-600 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
