import { motion } from "framer-motion"

function Skills() {
  const skillCategories = [
    {
      title: "AI, Machine Learning & Deep Learning",
      skills: ["Computer Vision", "NLP", "Generative AI", "LLMs", "Multi-Agent Systems", "Deep Learning", "Edge AI"],
      color: "from-purple-500/30 to-purple-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "CrewAI", "Hugging Face Transformers", "Gradio"],
      color: "from-blue-500/30 to-blue-600/20",
      borderColor: "border-blue-400/30"
    },
    {
      title: "Model Architectures",
      skills: ["YOLOv8", "Swin Transformer", "EfficientNet", "XGBoost", "Random Forest", "LSTM"],
      color: "from-cyan-500/30 to-cyan-600/20",
      borderColor: "border-cyan-400/30"
    },
    {
      title: "Computer Vision & Tools",
      skills: ["OpenCV", "MediaPipe"],
      color: "from-green-500/30 to-green-600/20",
      borderColor: "border-green-400/30"
    },
    {
      title: "Techniques",
      skills: ["CLAHE", "Face Detection", "Gesture Recognition", "Real-time Processing"],
      color: "from-orange-500/30 to-orange-600/20",
      borderColor: "border-orange-400/30"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "RISC-V Assembly", "SQL", "PL/SQL"],
      color: "from-yellow-500/30 to-yellow-600/20",
      borderColor: "border-yellow-400/30"
    },
    {
      title: "Web & API Development",
      skills: ["React", "Next.js", "FastAPI", "Node.js"],
      color: "from-pink-500/30 to-pink-600/20",
      borderColor: "border-pink-400/30"
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
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300">
            Comprehensive toolkit for AI/ML research & full-stack development
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`tilt-card bg-gradient-to-br ${category.color} ${category.borderColor} border rounded-2xl p-6 backdrop-blur-sm`}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium text-gray-100 transition cursor-default border border-white/20"
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