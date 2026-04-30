// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "BloodShare",
      period: "Sep 2025 - Nov 2025",
      duration: "Islamabad, Pakistan",
      description: "Strengthened API performance and service reliability for a production healthcare platform.",
      achievements: [
        "Optimized backend API performance to improve response time and system reliability",
        "Debugged and enhanced existing services for smoother data flow between frontend and backend systems"
      ],
      icon: "Backend"
    },
    {
      title: "Undergraduate Research Assistant (Computer Vision)",
      company: "NUST SINES",
      period: "Jan 2026 - Present",
      duration: "Islamabad, Pakistan",
      description: "Driving applied computer vision research on attention analysis and behavioral pattern modeling.",
      achievements: [
        "Engineered Attentio, an AI prototype for real-time student attention span analysis using YOLO and Deep Learning",
        "Authored a primary research paper on behavioral pattern recognition submitted to WiDS PSU 2026",
        "Awarded 3rd Position nationally in AI Project Display at AI, Cybersecurity, and Drone Swarm Gala"
      ],
      icon: "Research"
    },
    {
      title: "Machine Learning Intern",
      company: "Elevvo",
      period: "Sep 2025",
      duration: "Remote",
      description: "Built and evaluated predictive and recommender models for real-world ML tasks.",
      achievements: [
        "Developed predictive models including student score prediction and customer segmentation",
        "Engineered a collaborative filtering movie recommendation system and weather forecasting models"
      ],
      icon: "ML"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Experience
          </h2>
          <p className="section-subheading">
            Professional internships and research impact
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-sky-300">
                    {exp.company}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="mb-6 text-base leading-relaxed text-slate-300">
                {exp.description}
              </p>

              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Key Achievements
                </p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <span className="mt-1 min-w-fit font-bold text-sky-400">
                        ✓
                      </span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience