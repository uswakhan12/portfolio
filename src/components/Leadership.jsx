import { motion } from "framer-motion"

function Leadership() {
  const roles = [
    {
      icon: "👥",
      title: "Director of Social Media & Marketing",
      organization: "GDG NUST",
      description: "Leading digital presence and community engagement for Google Developer Group at NUST",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-400/30"
    },
    {
      icon: "💼",
      title: "Deputy Director, Human Resources",
      organization: "Entrepreneur Club",
      description: "Overseeing talent acquisition, team development, and organizational culture",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-400/30"
    },
    {
      icon: "❤️",
      title: "Social Welfare Intern",
      organization: "Alkhidmat Foundation",
      description: "Contributing to community development and social impact initiatives",
      color: "from-pink-500/20 to-pink-600/10",
      borderColor: "border-pink-400/30"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="leadership" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            Leadership & Social Impact
          </h2>
          <p className="text-lg text-gray-300">
            Driving community growth and making a difference
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`tilt-card bg-gradient-to-br ${role.color} ${role.borderColor} border rounded-2xl p-6 backdrop-blur-sm`}
            >
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {role.title}
              </h3>
              <p className="text-blue-300 font-semibold mb-3">
                {role.organization}
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                {role.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership