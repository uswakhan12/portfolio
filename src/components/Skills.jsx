// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C/C++", "Java", "JavaScript", "SQL", "PL/SQL"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Node.js", "Flask", "Streamlit", "JavaFX"]
    },
    {
      title: "Domains",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Human-Computer Interaction"]
    },
    {
      title: "Tools",
      skills: ["VSCode", "NetBeans", "Android Studio", "GitHub", "MySQL Workbench"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Technical Skills
          </h2>
          <p className="section-subheading">
            Core stack from your latest resume
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface"
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="cursor-default rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-100 transition hover:bg-white/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills