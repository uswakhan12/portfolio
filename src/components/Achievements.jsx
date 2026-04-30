// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
    <path strokeWidth="1.8" d="M9 20h6m-5-3h4m-2-6v6M17 6h2a2 2 0 0 1-2 2M7 6H5a2 2 0 0 0 2 2" />
  </svg>
)

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M7 3h7l4 4v14H7z" />
    <path strokeWidth="1.8" d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
)

const MedalIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M8 3h3l1 3 1-3h3l-3 6h-2zM12 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
    <path strokeWidth="1.8" d="m10.5 15 1.5-1 1.5 1-.5-1.8 1.4-1.2h-1.8L12 10.4 11.4 12H9.6l1.4 1.2z" />
  </svg>
)

function Achievements() {
  const achievements = [
    {
      icon: <TrophyIcon />,
      title: "3rd Place Globally",
      description: "Fulcrum Science Challenge, Hack-Nation 2026",
      detail: "LabMind AI ranked 3rd out of 5,500+ applicants"
    },
    {
      icon: <TrophyIcon />,
      title: "3rd Position Nationally",
      description: "AI, Cybersecurity & Drone Swarm Gala",
      detail: "Attentio recognized in AI Project Display"
    },
    {
      icon: <DocumentIcon />,
      title: "Research Submission",
      description: "WiDS PSU 2026",
      detail: "Deep Learning-Based Attention Span Analysis"
    },
    {
      icon: <MedalIcon />,
      title: "Best Learner Award",
      description: "Agentic AI Workshop (2025)",
      detail: "Recognized for excellence in applied agentic AI learning"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="achievements" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Achievements
          </h2>
          <p className="section-subheading">
            Recognition for excellence in research and innovation
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface text-center"
            >
              <div className="mb-4 flex justify-center text-sky-300">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="mb-2 font-semibold text-sky-300">
                {achievement.description}
              </p>
              <p className="text-sm leading-relaxed text-slate-400">
                {achievement.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements