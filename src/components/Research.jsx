// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

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
    <section id="research" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
            Research
          </h2>
          <p className="text-lg text-gray-300">
            Advancing AI in resource-constrained environments
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
            className="tilt-card bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-400/30 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl">🔬</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Optimizing Student Engagement Detection
                </h3>
                <p className="text-cyan-300 font-semibold">
                  WiDS PSU 2026 Conference (Accepted)
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              Developed a benchmark comparing modern architectures for real-time student engagement detection in classrooms with limited computational resources.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-gray-300 text-sm">
                Designed an optimized YOLO-based attention and posture recognition framework, achieving high accuracy while reducing processing latency for low-power devices.
              </p>
            </div>
          </motion.div>

          {/* Publication Card */}
          <motion.div
            variants={itemVariants}
            className="tilt-card bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 p-8 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">📚</span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Lead Author Publication
                </h3>
                <p className="text-purple-300 font-semibold mb-3">
                  WiDS PSU 2026 • Submission ID: 45
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Comprehensive benchmark of modern architectures for resource-constrained engagement detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200 text-sm">
                    IEEE Xplore Eligible
                  </span>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-purple-200 text-sm">
                    Peer Reviewed
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