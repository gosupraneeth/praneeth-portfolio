import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { Building2, Zap, Briefcase, Code, Users, TrendingUp, Award, TestTube2, GitBranch, Activity, Grid3x3, BarChart3, Workflow, Server, Wrench, Star } from "lucide-react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedWork, setSelectedWork] = useState<any>(null);

  // Helper function to convert gradient string to CSS gradient
  const getGradientStyle = (gradient: string, direction = "to-br") => {
    const colors = gradient.replace(/from-|to-/g, '').split(' ');
    const directionMap: Record<string, string> = {
      'to-br': '135deg',
      'to-r': '90deg',
      'to-b': '180deg'
    };
    return {
      background: `linear-gradient(${directionMap[direction]}, var(--${colors[0]}), var(--${colors[1]}))`,
      backgroundImage: `linear-gradient(${directionMap[direction]}, rgb(var(--color-${colors[0]})), rgb(var(--color-${colors[1]})))`
    };
  };

  // Corporate work details for Cisco
  const ciscoWork = [
    {
      title: "End-to-End Test Automation & Coverage",
      description: "Raised E2E test coverage ≈80% for support-bot and serviceability areas by refactoring the Cypress suite with live-API and mock-API scenarios, stabilizing CI signal and reducing flaky builds. Cut test-authoring effort ≈80% and review time ≈50% by introducing AI-assisted prompts for Cypress generation and PR regression analysis.",
      impact: "80% increase in test coverage, 80% reduction in test authoring effort, 50% faster review cycles",
      technologies: ["Cypress", "TypeScript", "AI Prompts", "Mock APIs", "Testing Automation"],
      icon: TestTube2,
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "CI/CD Pipeline & Build Infrastructure",
      description: "Built and hardened CI/CD for UI codebase by standing up Jenkins pipelines and gating deployments with sanity + E2E tests. Migrated jobs to centralized Jenkins and set up unit-test environment that attaches results to PRs, improving service health monitoring and observability.",
      impact: "Faster feedback cycles, more reliable releases, better observability with fewer false alarms",
      technologies: ["Jenkins", "CI/CD", "Docker", "YAML", "DevOps", "Automated Testing"],
      icon: GitBranch,
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      title: "Service Health & Serviceability Status",
      description: "Delivered Service Health feature on time with 0 post-release defects by designing UI heartbeat monitor and coordinating with platform teams to eliminate false negatives, improving ops visibility and incident response.",
      impact: "0 post-release defects, improved ops visibility, faster incident response",
      technologies: ["Angular", "TypeScript", "REST APIs", "Monitoring", "Real-time Data"],
      icon: Activity,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      title: "Results Viewer & Test Triage Platform",
      description: "Owned Results Viewer & Test Triage capabilities by adding multi-layer filters, hierarchical grids, bulk actions (approve/reject/undo), exports, console logs, Jira tagging, and reruns, streamlining defect triage and decision-making.",
      impact: "Streamlined defect triage workflows and improved decision-making efficiency",
      technologies: ["Angular", "TypeScript", "Jira Integration", "Data Grids", "Export Features"],
      icon: Grid3x3,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      title: "Static Analysis & Code Coverage Migration",
      description: "Migrated Static Analysis (SA) and Code Coverage (CC) insights to new internal platform by owning store-to-component architecture and UX improvements, resulting in seamless navigation from Quality pages and broader adoption.",
      impact: "Seamless navigation, broader platform adoption, improved developer insights",
      technologies: ["Angular", "TypeScript", "Data Visualization", "Architecture Design", "UX"],
      icon: BarChart3,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Test Services Execution Flow",
      description: "Shipped Test Services execution flow used cross-org (in-progress/completed views) by implementing UI/UX and backend integrations, delivering ahead of schedule and improving developer efficiency. Added search/filter to device discovery and user preferences.",
      impact: "Delivered ahead of schedule, improved developer efficiency across organization",
      technologies: ["Angular", "TypeScript", "REST APIs", "State Management", "UX Design"],
      icon: Workflow,
      gradient: "from-pink-600 to-rose-600",
    },
    {
      title: "Build-as-a-Service (BaaS) & Backend Contributions",
      description: "Implemented BaaS Spaces CRUD and workflow event handling by contributing Go services and API integrations, expanding platform capabilities. Delivered Pod Queuing & Reservations flows with new pod pages, instance views, and API integrations.",
      impact: "Expanded platform capabilities with new resource scheduling features",
      technologies: ["Go", "REST APIs", "Microservices", "Event Handling", "Backend Development"],
      icon: Server,
      gradient: "from-rose-600 to-orange-600",
    },
    {
      title: "Quality & Issue Resolution",
      description: "Resolved 118 Jira issues (42 customer support; 76 internal enhancements) by triaging, debugging, and shipping fixes across large UI monorepo. Delivered Teardown Actions feature, reducing manual lab clean-up and lowering developer effort at scale.",
      impact: "118 issues resolved, improved product quality and customer satisfaction",
      technologies: ["Angular", "Debugging", "Jira", "Customer Support", "Code Quality"],
      icon: Wrench,
      gradient: "from-orange-600 to-amber-600",
    },
    {
      title: "Leadership & Team Excellence",
      description: "Established robust testing culture by writing module-level test plans (Resource Services, InfraSwitches, IPAM), refactoring legacy suites, and reviewing PRs. Onboarded and mentored 3 engineers and led knowledge-sharing sessions on Cypress/E2E and architecture. Won 1st place in Cisco-wide catalyst hackathon building AI-enhanced internal marketplace.",
      impact: "Mentored 3 engineers, raised team proficiency, won 1st place hackathon",
      technologies: ["Mentorship", "Cypress", "E2E Testing", "Code Review", "Team Leadership"],
      icon: Star,
      gradient: "from-amber-600 to-yellow-600",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer-II",
      company: "Cisco",
      period: "2025 – Present",
      description: "Leading end-to-end development of test infrastructure, CI/CD pipelines, and enterprise web applications. Delivered service health monitoring, test triage platforms, and AI-assisted automation tools. Mentoring team members and driving quality engineering practices across the organization.",
      technologies: ["Angular", "TypeScript", "Cypress", "Jenkins", "Go", "REST APIs", "CI/CD", "Microservices"],
      current: true,
      gradient: "from-teal-600 to-cyan-600",
      hasWork: true,
    },
    {
      role: "Software Engineer",
      company: "Cisco",
      period: "2023 – 2025",
      description: "Raised E2E test coverage ≈80% through Cypress refactoring and AI-assisted test generation. Built Jenkins CI/CD pipelines with automated quality gates. Resolved 118+ Jira issues and delivered critical features including Service Health monitoring, Static Analysis migration, and Test Services execution flows. Won 1st place in Cisco-wide hackathon.",
      technologies: ["Angular", "TypeScript", "Cypress", "Jenkins", "Go", "REST APIs", "Jira", "Git"],
      current: false,
      gradient: "from-cyan-600 to-blue-600",
      hasWork: true,
    },
    {
      role: "Intern",
      company: "GE Healthcare",
      period: "2022",
      description: "Engineered a centralized Single Sign-On (SSO) authentication application for multi-tenant environments across 15 internal services using WSO2 Identity Server and Apache Tomcat. Reduced average user login time by 70% through Session ID-based authentication, boosting IT operational efficiency by eliminating separate authentication modules.",
      technologies: ["WSO2", "Apache Tomcat", "SSO", "Java", "Session Management"],
      current: false,
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      role: "Summer Research Intern",
      company: "IIIT Hyderabad",
      period: "May 2021 – Aug 2021",
      description: "Developed a Reinforcement Learning chess engine modeling human cognition under Professor S. Bapi Raju. Analyzed lichess API chess data using Scala and published research at the 8th ACCS Conference 2022 (Paper ID 21).",
      technologies: ["Reinforcement Learning", "Scala", "Python", "Chess AI", "Machine Learning"],
      current: false,
      gradient: "from-indigo-600 to-purple-600",
    },
    {
      role: "Deep Learning Intern",
      company: "Sparks Foundation",
      period: "2021",
      description: "Worked on deep learning projects and neural network implementations.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "NLP"],
      current: false,
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
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
            <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border-2 border-blue-300 dark:border-blue-700 font-grotesk text-blue-700 dark:text-blue-300">
              Professional Journey
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building innovative solutions and contributing to cutting-edge technologies.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? "" : "lg:text-right"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                    className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8"
                  >
                    <motion.div
                      animate={exp.current ? {
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(139, 92, 246, 0.7)",
                          "0 0 0 20px rgba(139, 92, 246, 0)",
                          "0 0 0 0 rgba(139, 92, 246, 0)"
                        ]
                      } : {}}
                      transition={exp.current ? { duration: 2, repeat: Infinity } : {}}
                      className={`w-6 h-6 rounded-full shadow-lg shadow-purple-500/50 border-4 border-white dark:border-gray-900 ${
                        !exp.current && "bg-gray-400 dark:bg-gray-600"
                      }`}
                      style={exp.current ? {
                        background: exp.gradient.includes('teal') ? 'linear-gradient(90deg, #0d9488, #0891b2)' :
                                  exp.gradient.includes('cyan') ? 'linear-gradient(90deg, #0891b2, #2563eb)' :
                                  'linear-gradient(90deg, #9333ea, #db2777)'
                      } : undefined}
                    ></motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"}>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                      <Card className={`p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                        index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                      }`}>
                        {/* Gradient background on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                          style={{
                            background: exp.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                      exp.gradient.includes('cyan') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                      exp.gradient.includes('blue') && exp.gradient.includes('indigo') ? 'linear-gradient(135deg, #2563eb, #4f46e5)' :
                                      exp.gradient.includes('indigo') && exp.gradient.includes('purple') ? 'linear-gradient(135deg, #4f46e5, #9333ea)' :
                                      exp.gradient.includes('emerald') ? 'linear-gradient(135deg, #059669, #0d9488)' :
                                      'linear-gradient(135deg, #9333ea, #db2777)'
                          }}
                        ></motion.div>

                        {/* Corner accent */}
                        <div 
                          className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1 h-full`}
                          style={{
                            background: exp.gradient.includes('teal') ? 'linear-gradient(180deg, #0d9488, #0891b2)' :
                                      exp.gradient.includes('cyan') ? 'linear-gradient(180deg, #0891b2, #2563eb)' :
                                      exp.gradient.includes('blue') && exp.gradient.includes('indigo') ? 'linear-gradient(180deg, #2563eb, #4f46e5)' :
                                      exp.gradient.includes('indigo') && exp.gradient.includes('purple') ? 'linear-gradient(180deg, #4f46e5, #9333ea)' :
                                      exp.gradient.includes('emerald') ? 'linear-gradient(180deg, #059669, #0d9488)' :
                                      'linear-gradient(180deg, #9333ea, #db2777)'
                          }}
                        ></div>

                        <div className={`relative z-10 ${index % 2 === 0 ? "" : "lg:text-right"}`}>
                          <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                              style={{
                                background: exp.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                          exp.gradient.includes('cyan') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                          'linear-gradient(135deg, #9333ea, #db2777)'
                              }}
                            >
                              <Building2 className="h-7 w-7 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "" : "lg:flex-row-reverse lg:justify-end"}`}>
                                <h3 className="text-xl font-grotesk text-gray-900 dark:text-white">
                                  {exp.role}
                                </h3>
                                {exp.current && (
                                  <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                  >
                                    <Badge 
                                      className="text-white border-0 shadow-lg"
                                      style={{
                                        background: exp.gradient.includes('teal') ? 'linear-gradient(90deg, #0d9488, #0891b2)' :
                                                  exp.gradient.includes('cyan') ? 'linear-gradient(90deg, #0891b2, #2563eb)' :
                                                  'linear-gradient(90deg, #9333ea, #db2777)'
                                      }}
                                    >
                                      <Zap className="h-3 w-3 mr-1" />
                                      Current
                                    </Badge>
                                  </motion.div>
                                )}
                              </div>
                              <div className="font-display text-purple-600 dark:text-purple-400 mb-1">
                                {exp.company}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-500">
                                {exp.period}
                              </div>
                            </div>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "lg:justify-end"}`}>
                            {exp.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>

                          {/* View Work Button for Cisco */}
                          {exp.hasWork && (
                            <div className={`mt-6 ${index % 2 === 0 ? "" : "lg:flex lg:justify-end"}`}>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    className="text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                    style={{
                                      background: exp.gradient.includes('teal') ? 'linear-gradient(90deg, #0d9488, #0891b2)' :
                                                exp.gradient.includes('cyan') ? 'linear-gradient(90deg, #0891b2, #2563eb)' :
                                                'linear-gradient(90deg, #9333ea, #db2777)'
                                    }}
                                  >
                                    <Briefcase className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                                    View My Work
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                                  <DialogTitle className="text-2xl font-display bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                                    Work at {exp.company}
                                  </DialogTitle>
                                  <DialogDescription className="text-gray-600 dark:text-gray-400">
                                    Key projects and contributions during my time as {exp.role}
                                  </DialogDescription>

                                  <div className="mt-6 grid gap-6">
                                    {ciscoWork.map((work, idx) => {
                                      const IconComponent = work.icon;
                                      return (
                                        <motion.div
                                          key={idx}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: idx * 0.1 }}
                                        >
                                          <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                                            {/* Gradient background */}
                                            <motion.div
                                              className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                              style={{
                                                background: work.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                                          work.gradient.includes('cyan') && work.gradient.includes('blue') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                                          work.gradient.includes('blue') && work.gradient.includes('indigo') ? 'linear-gradient(135deg, #2563eb, #4f46e5)' :
                                                          work.gradient.includes('indigo') && work.gradient.includes('purple') ? 'linear-gradient(135deg, #4f46e5, #9333ea)' :
                                                          work.gradient.includes('purple') && work.gradient.includes('pink') ? 'linear-gradient(135deg, #9333ea, #db2777)' :
                                                          work.gradient.includes('pink') && work.gradient.includes('rose') ? 'linear-gradient(135deg, #db2777, #f43f5e)' :
                                                          work.gradient.includes('rose') && work.gradient.includes('orange') ? 'linear-gradient(135deg, #f43f5e, #ea580c)' :
                                                          work.gradient.includes('orange') && work.gradient.includes('amber') ? 'linear-gradient(135deg, #ea580c, #d97706)' :
                                                          work.gradient.includes('amber') && work.gradient.includes('yellow') ? 'linear-gradient(135deg, #d97706, #ca8a04)' :
                                                          'linear-gradient(135deg, #9333ea, #db2777)'
                                              }}
                                            ></motion.div>

                                            {/* Accent line */}
                                            <div 
                                              className="absolute top-0 left-0 w-full h-1"
                                              style={{
                                                background: work.gradient.includes('teal') ? 'linear-gradient(90deg, #0d9488, #0891b2)' :
                                                          work.gradient.includes('cyan') && work.gradient.includes('blue') ? 'linear-gradient(90deg, #0891b2, #2563eb)' :
                                                          work.gradient.includes('blue') && work.gradient.includes('indigo') ? 'linear-gradient(90deg, #2563eb, #4f46e5)' :
                                                          work.gradient.includes('indigo') && work.gradient.includes('purple') ? 'linear-gradient(90deg, #4f46e5, #9333ea)' :
                                                          work.gradient.includes('purple') && work.gradient.includes('pink') ? 'linear-gradient(90deg, #9333ea, #db2777)' :
                                                          work.gradient.includes('pink') && work.gradient.includes('rose') ? 'linear-gradient(90deg, #db2777, #f43f5e)' :
                                                          work.gradient.includes('rose') && work.gradient.includes('orange') ? 'linear-gradient(90deg, #f43f5e, #ea580c)' :
                                                          work.gradient.includes('orange') && work.gradient.includes('amber') ? 'linear-gradient(90deg, #ea580c, #d97706)' :
                                                          work.gradient.includes('amber') && work.gradient.includes('yellow') ? 'linear-gradient(90deg, #d97706, #ca8a04)' :
                                                          'linear-gradient(90deg, #9333ea, #db2777)'
                                              }}
                                            ></div>

                                            <div className="relative z-10">
                                              <div className="flex items-start gap-4 mb-4">
                                                <div
                                                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                                                  style={{
                                                    background: work.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                                              work.gradient.includes('cyan') && work.gradient.includes('blue') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                                              work.gradient.includes('blue') && work.gradient.includes('indigo') ? 'linear-gradient(135deg, #2563eb, #4f46e5)' :
                                                              work.gradient.includes('indigo') && work.gradient.includes('purple') ? 'linear-gradient(135deg, #4f46e5, #9333ea)' :
                                                              work.gradient.includes('purple') && work.gradient.includes('pink') ? 'linear-gradient(135deg, #9333ea, #db2777)' :
                                                              work.gradient.includes('pink') && work.gradient.includes('rose') ? 'linear-gradient(135deg, #db2777, #f43f5e)' :
                                                              work.gradient.includes('rose') && work.gradient.includes('orange') ? 'linear-gradient(135deg, #f43f5e, #ea580c)' :
                                                              work.gradient.includes('orange') && work.gradient.includes('amber') ? 'linear-gradient(135deg, #ea580c, #d97706)' :
                                                              work.gradient.includes('amber') && work.gradient.includes('yellow') ? 'linear-gradient(135deg, #d97706, #ca8a04)' :
                                                              'linear-gradient(135deg, #9333ea, #db2777)'
                                                  }}
                                                >
                                                  <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className="w-full h-full flex items-center justify-center"
                                                  >
                                                    <IconComponent className="h-6 w-6 text-white" />
                                                  </motion.div>
                                                </div>
                                                <div className="flex-1">
                                                  <h4 className="text-xl font-grotesk text-gray-900 dark:text-white mb-2">
                                                    {work.title}
                                                  </h4>
                                                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                                                    {work.description}
                                                  </p>
                                                  <div className="flex items-center gap-2 mb-4">
                                                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                                                      {work.impact}
                                                    </span>
                                                  </div>
                                                  <div className="flex flex-wrap gap-2">
                                                    {work.technologies.map((tech) => (
                                                      <Badge
                                                        key={tech}
                                                        variant="outline"
                                                        className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/20"
                                                      >
                                                        {tech}
                                                      </Badge>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>

                                            {/* Decorative circle */}
                                            <div 
                                              className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 blur-2xl"
                                              style={{
                                                background: work.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                                          work.gradient.includes('cyan') && work.gradient.includes('blue') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                                          work.gradient.includes('blue') && work.gradient.includes('indigo') ? 'linear-gradient(135deg, #2563eb, #4f46e5)' :
                                                          work.gradient.includes('indigo') && work.gradient.includes('purple') ? 'linear-gradient(135deg, #4f46e5, #9333ea)' :
                                                          work.gradient.includes('purple') && work.gradient.includes('pink') ? 'linear-gradient(135deg, #9333ea, #db2777)' :
                                                          work.gradient.includes('pink') && work.gradient.includes('rose') ? 'linear-gradient(135deg, #db2777, #f43f5e)' :
                                                          work.gradient.includes('rose') && work.gradient.includes('orange') ? 'linear-gradient(135deg, #f43f5e, #ea580c)' :
                                                          work.gradient.includes('orange') && work.gradient.includes('amber') ? 'linear-gradient(135deg, #ea580c, #d97706)' :
                                                          work.gradient.includes('amber') && work.gradient.includes('yellow') ? 'linear-gradient(135deg, #d97706, #ca8a04)' :
                                                          'linear-gradient(135deg, #9333ea, #db2777)'
                                              }}
                                            ></div>
                                          </Card>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          )}
                        </div>

                        {/* Decorative circle */}
                        <div 
                          className={`absolute ${index % 2 === 0 ? '-right-12' : '-left-12'} -bottom-12 w-32 h-32 rounded-full opacity-10 blur-2xl`}
                          style={{
                            background: exp.gradient.includes('teal') ? 'linear-gradient(135deg, #0d9488, #0891b2)' :
                                      exp.gradient.includes('cyan') ? 'linear-gradient(135deg, #0891b2, #2563eb)' :
                                      exp.gradient.includes('blue') && exp.gradient.includes('indigo') ? 'linear-gradient(135deg, #2563eb, #4f46e5)' :
                                      exp.gradient.includes('indigo') && exp.gradient.includes('purple') ? 'linear-gradient(135deg, #4f46e5, #9333ea)' :
                                      exp.gradient.includes('emerald') ? 'linear-gradient(135deg, #059669, #0d9488)' :
                                      'linear-gradient(135deg, #9333ea, #db2777)'
                          }}
                        ></div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
