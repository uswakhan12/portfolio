// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.17a10.9 10.9 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.09v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M6.94 8.5v11H3.28v-11h3.66Zm.24-3.4a2.12 2.12 0 1 1-4.24 0 2.12 2.12 0 0 1 4.24 0ZM20.72 13.2v6.3h-3.65v-5.88c0-1.48-.53-2.5-1.85-2.5-1.01 0-1.61.68-1.88 1.34-.1.24-.12.57-.12.9v6.14H9.56s.05-9.97 0-11h3.66v1.56c.49-.76 1.36-1.84 3.31-1.84 2.42 0 4.2 1.58 4.2 4.98Z" />
  </svg>
)

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

function Hero() {
  return (
    <section className="section-shell relative pt-36">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="card-surface mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Computer Science Undergraduate at NUST
          </p>
          <h1 className="mb-4 text-5xl font-extrabold text-white md:text-7xl">
            Uswa Khan
          </h1>

          <p className="mb-6 text-lg tracking-wide text-sky-300 md:text-2xl">
            Artificial Intelligence • Deep Learning • Computer Vision
          </p>

          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Computer Science Undergraduate at NUST with hands-on experience in AI research,
            backend engineering, and full-stack product development. I build deployable machine
            learning systems that translate complex research into measurable outcomes.
          </p>

          <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              3rd place globally (5,500+ participants)
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              National AI gala award-winning project
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              Ongoing computer vision research at NUST
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/uswakhan12"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub profile"
              className="rounded-xl bg-white p-3 text-slate-900 transition hover:bg-slate-100"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/uswa-khan"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-white/30 p-3 text-white transition hover:bg-white/10"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:uswaakhan03@gmail.com"
              title="Email"
              aria-label="Send email"
              className="rounded-xl border border-sky-400/40 bg-sky-500/15 p-3 text-sky-200 transition hover:bg-sky-500/25"
            >
              <MailIcon />
            </a>
            <a
              href="tel:+923141709256"
              title="Phone"
              aria-label="Call phone number"
              className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 p-3 text-emerald-200 transition hover:bg-emerald-500/25"
            >
              <PhoneIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero