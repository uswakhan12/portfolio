// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const MegaphoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M4 13V9l11-4v12L4 13Z" />
    <path strokeWidth="1.8" d="M15 9h2a3 3 0 0 1 0 6h-2M6 13l1.5 5h2L8 12" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
    <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.3" strokeWidth="1.8" />
  </svg>
)

function Leadership() {
  const roles = [
    {
      icon: <MegaphoneIcon />,
      title: "Director SMM",
      organization: "GDG NUST",
      description: "Leading social media marketing strategies to drive engagement for technology events."
    },
    {
      icon: <BriefcaseIcon />,
      title: "Deputy Director HR",
      organization: "Entrepreneur Club",
      description: "Managing recruitment and team coordination for campus initiatives."
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
      description: "Active contributor as social media executive for student engagement and outreach."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="leadership" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Leadership & Social Impact
          </h2>
          <p className="section-subheading">
            Driving community growth and making a difference
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-surface"
            >
              <div className="mb-4 text-sky-300">{role.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {role.title}
              </h3>
              <p className="mb-3 font-semibold text-sky-300">
                {role.organization}
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                {role.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership