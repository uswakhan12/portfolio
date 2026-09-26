// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Chore Robotics",
    period: "Jul 2026 – Present",
    location: "Irvine, California · Remote",
    label: "Robotics",
    summary: "Synthetic data and perception datasets for robotics and computer vision.",
    achievements: [
      "Developed synthetic-data generation workflows using Blender and BlenderProc.",
      "Created and organized synthetic datasets for robotic perception, including object-focused scenes and attachment-specific data.",
      "Benchmarked YOLO models for a specific robotics use case."
    ]
  },
  {
    title: "Edge AI & Computer Vision Intern",
    company: "Plateau Dynamics",
    period: "Jun 2026 – Aug 2026",
    location: "NSTP, Islamabad · Hybrid",
    label: "Edge AI",
    summary: "End-to-end edge vision that turns camera detections into autonomous steering and interception commands.",
    achievements: [
      "Built a computer vision pipeline translating raw camera detections into autonomous steering and interception commands.",
      "Benchmarked object tracking algorithms to keep target lock and ID consistency during high-speed, evasive maneuvers.",
      "Implemented aerospace interception guidance laws and trajectory prediction for collision paths and time-to-impact.",
      "Optimized the stack for real-time video, resolving memory and performance bottlenecks for live multi-target tracking on edge hardware."
    ]
  },
  {
    title: "Undergraduate Research Assistant (Computer Vision)",
    company: "NUST SINES",
    period: "Oct 2025 – Feb 2026",
    location: "Islamabad, Pakistan",
    label: "Research",
    summary: "Attention Analysis ",
    achievements: [
      "Engineered Attentio, a prototype for student attention-span analysis using YOLOv8, with inference on video streams.",
      "Earned 3rd position nationally at the AI, Cybersecurity, and Drone Swarm Gala.",
      "Collaborated with faculty to design experiment pipelines, annotate datasets, and validate model outputs against behavioral benchmarks."
    ]
  },
  {
    title: "Backend Developer Intern",
    company: "BloodShare",
    period: "Sep 2025 – Nov 2025",
    location: "Islamabad, Pakistan",
    label: "Backend",
    summary: "Production API performance and reliability for user-facing workflows.",
    achievements: [
      "Optimized backend API pathways, improving response-time consistency and system reliability.",
      "Diagnosed service-level bottlenecks and reduced latency on critical user-facing endpoints."
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Experience</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Internships in robotics, edge AI, computer vision research, and backend systems
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="sketch-card p-6 md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="sketch-pill">{exp.label}</span>
                  <h3 className="mt-2 font-display text-4xl font-bold leading-none text-ink">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-blush-700">{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-bold text-ink">{exp.period}</p>
                  <p className="text-inksoft">{exp.location}</p>
                </div>
              </div>
              <p className="mb-4 leading-relaxed text-ink">{exp.summary}</p>
              <ul className="space-y-2">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <span className="mt-0.5 font-bold text-blush-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
