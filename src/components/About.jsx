const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M7 4h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V4Z" />
    <path strokeWidth="1.8" d="M9 20h6m-5-3h4m-2-6v6M17 6h2a2 2 0 0 1-2 2M7 6H5a2 2 0 0 0 2 2" />
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="1.8" d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path strokeWidth="1.8" d="M2 19a5 5 0 0 1 10 0M12 19a5 5 0 0 1 10 0" />
  </svg>
)

const AwardIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <circle cx="12" cy="8" r="4" strokeWidth="1.8" />
    <path strokeWidth="1.8" d="M9 12v8l3-2 3 2v-8" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.8" />
    <path strokeWidth="1.8" d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" />
  </svg>
)

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <h2 className="section-heading">
          About Me
        </h2>
        <p className="section-subheading mx-auto max-w-4xl">
          I specialize in turning AI ideas into working products: from research prototypes and
          predictive models to production-oriented web applications. My work focuses on Deep
          Learning, Computer Vision, and scalable full-stack AI systems.
        </p>
        <div className="card-surface mx-auto mt-10 grid max-w-5xl gap-4 text-sm md:grid-cols-4 md:text-base">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="mb-2 flex justify-center text-sky-300">
              <TrophyIcon />
            </div>
            <p className="text-2xl font-bold text-white">3rd</p>
            <p className="text-slate-300">Global Hackathon Rank</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="mb-2 flex justify-center text-sky-300">
              <UsersIcon />
            </div>
            <p className="text-2xl font-bold text-white">5,500+</p>
            <p className="text-slate-300">Applicants Competed</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="mb-2 flex justify-center text-sky-300">
              <AwardIcon />
            </div>
            <p className="text-2xl font-bold text-white">3rd</p>
            <p className="text-slate-300">National AI Gala Position</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="mb-2 flex justify-center text-sky-300">
              <BriefcaseIcon />
            </div>
            <p className="text-2xl font-bold text-white">2+</p>
            <p className="text-slate-300">Internships Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About