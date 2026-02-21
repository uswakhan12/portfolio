import { motion } from "framer-motion"

function Experience() {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "BloodShare",
      period: "Summer 2025",
      duration: "3 months",
      description: "Optimized backend APIs and improved system reliability for a blood donation management platform.",
      achievements: [
        "Optimized backend API performance to improve response time and system reliability",
        "Debugged and enhanced existing services for smoother data flow between frontend and backend systems"
      ],
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-400/30",
      icon: "⚙️"
    },
    {
      title: "Machine Learning Intern",
      company: "Elevvo",
      period: "Summer 2025",
      duration: "1 month",
      description: "Built predictive models and collaborative filtering systems for recommendation engine.",
      achievements: [
        "Developed predictive models including student score prediction and customer segmentation",
        "Engineered a collaborative filtering movie recommendation system and weather forecasting models"
      ],
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-400/30",
      icon: "🤖"
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
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-300">
            Building scalable systems and intelligent models
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`tilt-card bg-gradient-to-br ${exp.color} ${exp.borderColor} border rounded-2xl p-8 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{exp.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm px-3 py-1 bg-white/10 rounded-full text-gray-200 font-medium w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-lg text-blue-300 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                {exp.description}
              </p>

              <div>
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                  Key Achievements
                </p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-blue-400 font-bold mt-1 min-w-fit">
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