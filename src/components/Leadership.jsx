// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinejoin="round" d="M4 13V9l11-4v12L4 13Z" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M15 9h2a3 3 0 0 1 0 6h-2M6 13l1.5 5h2L8 12" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinejoin="round" d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.3" strokeWidth="1.8" />
  </svg>
)

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinejoin="round" d="M12 4a8 8 0 1 0 0 16h1.2a2 2 0 0 0 0-4H12a2 2 0 0 1-2-2 6 6 0 0 1 2-10Z" />
    <circle cx="8" cy="10" r="0.8" fill="currentColor" />
    <circle cx="10" cy="7.5" r="0.8" fill="currentColor" />
    <circle cx="13.5" cy="8" r="0.8" fill="currentColor" />
  </svg>
)

const ClipboardIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <rect x="6" y="5" width="12" height="15" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" strokeLinecap="round" d="M9 5.5V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5v1M9 11h6M9 15h4" />
  </svg>
)

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
  </svg>
)

const roles = [
  {
    icon: <MegaphoneIcon />,
    title: "Director, Social Media Marketing",
    organization: "GDG NUST",
    description: "Led social media strategy to improve engagement and visibility for technical events."
  },
  {
    icon: <BriefcaseIcon />,
    title: "Deputy Director, HR",
    organization: "Entrepreneur Club",
    description: "Managed recruitment and cross-team coordination for campus initiatives."
  },
  {
    icon: <HeartIcon />,
    title: "Social Welfare Intern",
    organization: "Alkhidmat Foundation",
    description: "Coordinated volunteers and supported community welfare initiatives."
  },
  {
    icon: <TargetIcon />,
    title: "Executive Member (SMM)",
    organization: "NUST Archery Club & Excursion Club",
    description: "Contributed to outreach and student engagement campaigns."
  },
  {
    icon: <PaletteIcon />,
    title: "Deputy Director (SMM)",
    organization: "NUST Fine Arts Club",
    description: "Led social media for the club and helped coordinate student arts initiatives."
  },
  {
    icon: <ClipboardIcon />,
    title: "Executive, Quality Assurance",
    organization: "Orientation '26",
    description: "Served on the Orientation '26 team through Quality Assurance, making sure all teams are working efficiently."
  },
  {
    icon: <CodeIcon />,
    title: "Executive, Web & IT",
    organization: "NUST Literary Festival",
    description: "Handled web and IT work for the NUST Literary Festival."
  }
]

function Leadership() {
  return (
    <section id="leadership" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-heading">Leadership & Social Impact</h2>
          <span className="squiggle" aria-hidden="true" />
          <p className="section-subheading">
            Campus leadership, outreach, and community work
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((role, index) => (
            <motion.article
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="sketch-card p-6"
            >
              <div className="mb-3 text-blush-700">{role.icon}</div>
              <h3 className="font-display text-3xl font-bold leading-none text-ink">{role.title}</h3>
              <p className="mt-2 font-bold text-blush-700">{role.organization}</p>
              <p className="mt-3 leading-relaxed text-ink">{role.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
