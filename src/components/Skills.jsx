// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Deep Learning",
    skills: [
      "CNNs",
      "YOLOv8",
      "BLIP",
      "Transformers",
      "TensorFlow",
      "PyTorch"
    ]
  },
  {
    title: "Computer Vision",
    skills: [
      "YOLO",
      "OpenCV",
      "MediaPipe",
      "Object Detection",
      "WebSockets",
      "Real-Time Video Pipelines"
    ]
  },
  {
    title: "NLP & LLMs",
    skills: [
      "LLM Pipelines",
      "RAG",
      "Prompt Engineering",
      "Hypothesis-to-Plan Automation",
      "Text Summarization",
      "Scikit-learn"
    ]
  },
  {
    title: "Languages",
    skills: ["Python", "C/C++", "Java", "JavaScript", "SQL", "PL/SQL", "HTML/CSS"]
  },
  {
    title: "MLOps & Tools",
    skills: [
      "Git/GitHub",
      "Blender",
      "BlenderProc",
      "Streamlit Cloud",
      "REST APIs",
      "Android Studio",
      "MySQL Workbench",
      "VS Code"
    ]
  },
  {
    title: "Professional",
    skills: ["Research & Publication", "Agile Development", "Technical Documentation"]
  }
]

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Machine learning, computer vision, LLMs, and the tools behind them
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="sketch-card p-6"
            >
              <h3 className="font-display text-3xl font-bold text-ink">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="sketch-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
