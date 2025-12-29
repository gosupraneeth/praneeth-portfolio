import { motion, useMotionValue } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { Award, Calendar, ExternalLink, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

export function CertificationsSection() {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "March 2023",
      credentialId: "AWS-SA-2023-789456",
      image: "https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWElMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjI1OTc4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      iconGradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI - Coursera",
      date: "January 2023",
      credentialId: "DL-SPEC-2023-456789",
      image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0aW9uJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzYyNjc5MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      iconGradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "September 2022",
      credentialId: "GCP-DEV-2022-123456",
      image: "https://images.unsplash.com/photo-1762330917920-141e05d4eb9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3NjI2NzkzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-sky-500 via-blue-500 to-indigo-500",
      iconGradient: "from-sky-600 to-blue-600",
    },
    {
      title: "Machine Learning Engineering",
      issuer: "Coursera - Stanford University",
      date: "June 2022",
      credentialId: "ML-ENG-2022-987654",
      image: "https://images.unsplash.com/photo-1664262283608-05edf08055be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY2VydGlmaWNhdGlvbiUyMGF3YXJkfGVufDF8fHx8MTc2MjY3OTM2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-indigo-500 via-purple-500 to-blue-500",
      iconGradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "March 2022",
      credentialId: "FCC-FS-2022-567890",
      image: "https://images.unsplash.com/photo-1752937326758-f130e633b422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWElMjBhY2hpZXZlbWVudHxlbnwxfHx8fDE3NjI1OTc4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-teal-500 via-cyan-500 to-sky-500",
      iconGradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "December 2021",
      credentialId: "CKA-2021-345678",
      image: "https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0aW9uJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzYyNjc5MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 via-indigo-500 to-cyan-500",
      iconGradient: "from-blue-600 to-indigo-600",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420; // Card width + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate active index based on scroll position
      const cardWidth = 380;
      const gap = 24;
      const totalCardWidth = cardWidth + gap;
      
      // If scrolled to the very beginning (within 10px tolerance)
      if (scrollLeft < 10) {
        setActiveIndex(0);
        return;
      }
      
      // If scrolled to the very end (within 10px tolerance)
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        setActiveIndex(certifications.length - 1);
        return;
      }
      
      // Calculate which card is the leftmost visible card (with at least 50% visibility)
      // This works better for multiple visible cards
      const firstVisibleIndex = Math.floor((scrollLeft + cardWidth * 0.3) / totalCardWidth);
      
      // Clamp index to valid range
      const clampedIndex = Math.max(0, Math.min(firstVisibleIndex, certifications.length - 1));
      setActiveIndex(clampedIndex);
    }
  };

  // Check scroll position on mount and when container size changes
  useEffect(() => {
    const timer = setTimeout(() => {
      checkScrollButtons();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-cyan-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 180],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
      ></motion.div>
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [180, 90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full border-2 border-cyan-300 dark:border-cyan-700 font-grotesk text-cyan-700 dark:text-cyan-300 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Professional Credentials
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating expertise in cloud computing, AI, and full-stack development.
          </p>
        </motion.div>

        {/* Scroll Container with Navigation */}
        <div className="relative">
          {/* Left Scroll Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollLeft ? 1 : 0 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <Button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              size="icon"
              className="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border-2 border-cyan-200 dark:border-cyan-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white transition-all disabled:opacity-0 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </motion.div>

          {/* Right Scroll Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: canScrollRight ? 1 : 0 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <Button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              size="icon"
              className="h-12 w-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl border-2 border-cyan-200 dark:border-cyan-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all disabled:opacity-0 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 px-4 lg:px-12 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="flex-shrink-0 w-[380px] snap-center"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer h-full"
                    >
                      <Card className="h-auto overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 group relative">
                        {/* Gradient top border */}
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${cert.gradient}`}
                          animate={hoveredIndex === index ? {
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          } : {}}
                          transition={{ duration: 3, repeat: Infinity }}
                          style={{ backgroundSize: "200% 200%" }}
                        ></motion.div>

                        {/* Certificate Image - Standard Certificate Aspect Ratio (16:11) */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                          <AspectRatio ratio={16 / 11}>
                            <motion.div
                              className="absolute inset-0"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <ImageWithFallback
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            
                            {/* Overlay gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${cert.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* View badge */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ExternalLink className={`h-5 w-5 bg-gradient-to-r ${cert.iconGradient} bg-clip-text text-transparent`} />
                            </motion.div>
                          </AspectRatio>
                        </div>

                        <div className="p-6 space-y-4 relative">
                          {/* Glowing orb */}
                          <motion.div
                            className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${cert.iconGradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                          ></motion.div>

                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.iconGradient} flex items-center justify-center shadow-lg relative z-10`}
                          >
                            <Award className="h-7 w-7 text-white" />
                          </motion.div>

                          {/* Title */}
                          <h3 className="text-lg font-grotesk text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 transition-all relative z-10 line-clamp-2 min-h-[3.5rem]">
                            {cert.title}
                          </h3>

                          {/* Issuer Badge */}
                          <Badge
                            variant="outline"
                            className={`border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20 relative z-10`}
                          >
                            {cert.issuer}
                          </Badge>

                          {/* Date and Credential */}
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                              <span>{cert.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                              <span className="font-mono text-xs truncate">{cert.credentialId}</span>
                            </div>
                          </div>

                          {/* View Certificate hint */}
                          <motion.div
                            className="pt-2 text-sm text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 font-grotesk opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
                          >
                            Click to view certificate
                          </motion.div>
                        </div>

                        {/* Bottom decorative element */}
                        <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br ${cert.iconGradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl`}></div>
                      </Card>
                    </motion.div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                    <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                    <DialogDescription className="sr-only">
                      Certificate from {cert.issuer}, issued on {cert.date}
                    </DialogDescription>
                    <div className="relative">
                      {/* Gradient header */}
                      <div className={`h-2 bg-gradient-to-r ${cert.gradient}`}></div>
                      
                      {/* Certificate Image - Full View with Standard Certificate Aspect Ratio */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
                        <div className="w-full max-w-3xl">
                          <AspectRatio ratio={16 / 11}>
                            <ImageWithFallback
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </AspectRatio>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-8 space-y-4 bg-white dark:bg-gray-800">
                        <div className="flex items-start gap-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.iconGradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                            <Award className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-grotesk text-gray-900 dark:text-white mb-2">
                              {cert.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className="border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/20"
                            >
                              {cert.issuer}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <Calendar className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                              <span className="text-sm">Issue Date</span>
                            </div>
                            <p className="font-grotesk text-gray-900 dark:text-white">{cert.date}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <Shield className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                              <span className="text-sm">Credential ID</span>
                            </div>
                            <p className="font-mono text-sm text-gray-900 dark:text-white">{cert.credentialId}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators (Dots) */}
          <div className="flex justify-center gap-2 mt-6">
            {certifications.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 380;
                    const gap = 24;
                    const scrollPosition = index * (cardWidth + gap);
                    scrollContainerRef.current.scrollTo({
                      left: scrollPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80 ${
                  index === activeIndex 
                    ? "w-8 bg-gradient-to-r from-teal-500 to-cyan-500" 
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
