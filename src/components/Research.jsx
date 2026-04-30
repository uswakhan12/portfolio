// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M10 3h4M12 3v5l5 8a3 3 0 0 1-2.6 4H9.6A3 3 0 0 1 7 16l5-8V3Z" />
    <path strokeWidth="1.8" d="M9 14h6" />
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M4 5a2 2 0 0 1 2-2h6v17H6a2 2 0 0 0-2 2V5Zm16 0a2 2 0 0 0-2-2h-6v17h6a2 2 0 0 1 2 2V5Z" />
  </svg>
)

function Research() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="research" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Research
          </h2>
          <p className="section-subheading">
            Deep learning research and publication pipeline
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Research Project Card */}
          <motion.div
            variants={itemVariants}
            className="card-surface"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-cyan-300"><FlaskIcon /></span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Attentio - Real-Time Attention Analysis
                </h3>
                <p className="font-semibold text-cyan-300">
                  NUST SINES | WiDS PSU 2026 Submission
                </p>
              </div>
            </div>

            <p className="mb-4 leading-relaxed text-slate-300">
              Conducting research on student attention span analysis using YOLO-based computer vision and deep learning methods for real classroom environments.
            </p>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">
                Lead author on a behavioral pattern recognition paper submitted to WiDS PSU 2026 and awarded 3rd Position at the National AI, Cybersecurity, and Drone Swarm Gala.
              </p>
            </div>
          </motion.div>

          {/* Publication Card */}
          <motion.div
            variants={itemVariants}
            className="card-surface"
          >
            <div className="flex items-start gap-4">
              <span className="text-purple-300"><BookIcon /></span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Publication Focus
                </h3>
                <p className="mb-3 font-semibold text-purple-300">
                  Deep Learning-Based Attention Span Analysis
                </p>
                <p className="mb-4 leading-relaxed text-slate-300">
                  Research explores behavior-aware attention modeling and scalable inference for practical deployment in academic settings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-500/30 px-3 py-1 text-sm text-purple-200">
                    Conference Submission
                  </span>
                  <span className="rounded-full bg-purple-500/30 px-3 py-1 text-sm text-purple-200">
                    Behavioral Pattern Recognition
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Research