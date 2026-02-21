// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import certificate from "../assets/attentio-certificate.jpeg"

function Hero() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 mt-24"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Uswa Khan
          </h1>

          <p className="text-lg md:text-2xl text-blue-300 mb-6 tracking-wider">
            AI Researcher | Deep Learning | Computer Vision | YOLO
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Computer Science undergraduate at NUST specializing in
            building intelligent systems that bridge research and real-world impact.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/uswa12"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/uswa-khan-070b85260/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 hover:bg-blue-500 px-8 py-3 rounded-xl font-semibold transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Award Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80 mb-6">
              Award Highlight
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Attentio - 3rd Position Winner
            </h2>

            <h3 className="text-lg md:text-xl text-blue-300 mb-6">
              National AI, Cybersecurity & Drone Swarm Gala
            </h3>

            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold min-w-fit mt-1">✓</span>
                <span>Deep learning research system for student engagement analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold min-w-fit mt-1">✓</span>
                <span>YOLO-based detection with posture, gaze, and motion cues for real-time attention classification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold min-w-fit mt-1">✓</span>
                <span>Research direction, model optimization, and evaluation pipeline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold min-w-fit mt-1">✓</span>
                <span>Achieved high accuracy while reducing latency for resource-constrained environments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold min-w-fit mt-1">✓</span>
                <span>3rd position at national competition</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={certificate}
              alt="Attentio award certificate"
              className="w-full max-w-sm rounded-2xl border border-white/10 shadow-2xl"
            />
            <p className="mt-4 text-sm text-gray-400">
              Award Certificate
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero