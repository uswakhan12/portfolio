// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const FlaskIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M10 3h4M12 3v5l5 8a3 3 0 0 1-2.6 4H9.6A3 3 0 0 1 7 16l5-8V3Z" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 14h6" />
  </svg>
)

function Research() {
  return (
    <section id="research" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Research</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Applied computer vision research on attention and behavioral pattern recognition
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sketch-card p-6 md:p-8"
          >
            <div className="mb-4 flex items-start gap-4">
              <span className="text-blush-700"><FlaskIcon /></span>
              <div>
                <h3 className="font-display text-4xl font-bold leading-none text-ink">
                  Attentio - Real-Time Attention Analysis
                </h3>
                <p className="mt-2 font-bold text-blush-700">
                  NUST SINES · Undergraduate Research Assistant, Oct 2025 – Feb 2026
                </p>
              </div>
            </div>
            <p className="leading-relaxed text-ink">
              Engineered Attentio, a real-time AI prototype for student attention-span analysis using
              YOLOv8 and deep learning. The system runs live inference on video streams to support
              classroom behavioral analytics.
            </p>
            <ul className="mt-4 space-y-2 text-ink">
              <li className="flex gap-2">
                <span className="font-bold text-blush-700">✓</span>
                Designed experiment pipelines, annotated datasets, and validated outputs against ground-truth behavioral benchmarks with faculty researcher.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Research
