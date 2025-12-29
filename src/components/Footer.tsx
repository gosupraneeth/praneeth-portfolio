import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
import logo from "asset/my_logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(219, 39, 119, 0.3) 0px, transparent 50%)
          `,
          backgroundSize: "200% 200%",
        }}
      ></motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-gray-800/50 flex items-center justify-center border-2 border-purple-500/30 p-1.5"
            >
              <img src={logo} alt="PG Logo" className="w-full h-full object-contain" />
            </motion.div>
            <span className="font-display text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Praneeth Gosu
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-md mx-auto"
          >
            Crafting exceptional digital experiences with creativity and precision
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"
          ></motion.div>

          {/* Copyright with animated heart */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            <span>© {currentYear} Praneeth Gosu</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              Built with
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <Heart className="h-4 w-4 text-pink-500 fill-pink-500" />
              </motion.div>
              and precision
            </span>
          </motion.div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500"
          >
            Designed & Developed with modern technologies
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
      ></motion.div>
    </footer>
  );
}
