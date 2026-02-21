import { motion } from "framer-motion"

function Achievements() {
  const achievements = [
    {
      icon: "🥉",
      title: "3rd Position",
      description: "National AI, Cybersecurity & Drone Swarm Gala",
      detail: "Attentio - Deep Learning research project",
      color: "from-orange-500/20 to-orange-600/10",
      borderColor: "border-orange-400/30"
    },
    {
      icon: "📄",
      title: "Research Accepted",
      description: "WiDS PSU 2026 Conference",
      detail: "Lead author on resource-constrained engagement detection",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: "🏆",
      title: "Best Learner Award",
      description: "Agentic AI Workshop",
      detail: "Recognition for advanced multi-agent system learning",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-400/30"
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
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-300">
            Recognition for excellence in research and innovation
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`tilt-card bg-gradient-to-br ${achievement.color} ${achievement.borderColor} border rounded-2xl p-6 backdrop-blur-sm text-center`}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-blue-300 font-semibold mb-2">
                {achievement.description}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
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