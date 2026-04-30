// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" d="m4 7 8 6 8-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M6.5 3h3l1.3 4-1.8 1.8a14 14 0 0 0 6 6l1.8-1.8 4 1.3v3A1.7 1.7 0 0 1 19.1 19 16.1 16.1 0 0 1 5 4.9 1.7 1.7 0 0 1 6.5 3Z" />
  </svg>
)

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-surface text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Get In Touch
          </h2>

          <p className="mb-8 text-lg text-slate-300">
            Open to AI/ML internships, research assistant opportunities, and collaborative
            projects in computer vision and intelligent systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:uswaakhan03@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <MailIcon />
              Email Me
            </a>
            <a
              href="tel:+923141709256"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneIcon />
              Call: +92 314 1709256
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
