// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="m4 7 8 6 8-6" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" d="M6.5 3h3l1.3 4-1.8 1.8a14 14 0 0 0 6 6l1.8-1.8 4 1.3v3A1.7 1.7 0 0 1 19.1 19 16.1 16.1 0 0 1 5 4.9 1.7 1.7 0 0 1 6.5 3Z" />
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
          className="sketch-card sketch-card-flat px-6 py-10 text-center md:px-10"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-inksoft">
            Open to AI, computer vision, and full-stack ML roles, plus research collaborations.
            Based in Islamabad, Pakistan.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:uswaakhan03@gmail.com" className="sketch-btn sketch-btn-fill">
              <MailIcon />
              Email Me
            </a>
            <a href="tel:+923141709256" className="sketch-btn">
              <PhoneIcon />
              +92 314 1709256
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="https://github.com/uswakhan12"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-chip"
            >
              github.com/uswakhan12
            </a>
            <a
              href="https://www.linkedin.com/in/uswa-khan-070b85260/"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-chip"
            >
              linkedin.com/in/uswa-khan-070b85260
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
