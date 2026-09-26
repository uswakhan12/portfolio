const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.17a10.9 10.9 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.09v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <path strokeWidth="2" strokeLinecap="round" d="M14 3h7v7m0-7L10 14" />
    <path strokeWidth="2" strokeLinecap="round" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
)

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
    <rect x="3" y="6" width="13" height="12" rx="2" strokeWidth="2" />
    <path d="M16 10l5-3v10l-5-3z" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const projects = [
  {
    title: "LabMind AI",
    tag: "3rd Place Globally · Hack-Nation (MIT-backed)",
    tech: "Full-Stack AI, React, Node.js, LLMs",
    github: "https://github.com/uswakhan12/lab-mindai",
    live: "https://tanstack-start-app.labmind.workers.dev/",
    demo: "https://drive.google.com/file/d/1maUpBxlDiGnwiEHSE9Sk_KbDBoU2KEp7/view?usp=sharing",
    description:
      "Designed and built a full-stack AI pipeline in under 20 hours that turns raw scientific hypotheses into fully costed, lab-ready experiment plans using LLM orchestration and automated NLP. Ranked 3rd of 5,500+ applicants."
  },
  {
    title: "Attentio",
    tag: "NUST SINES · WiDS PSU 2026",
    tech: "YOLOv8, Deep Learning, Computer Vision",
    description:
      "Video inference system that classifies student attention states with YOLOv8. Includes annotated training data, low-latency inference."
  },
  {
    title: "FacePulseAI",
    tag: "Real-time face recognition",
    tech: "React, FastAPI, OpenCV, WebSockets",
    github: "https://github.com/uswakhan12/facepulseAI",
    description:
      "Real-time face detection and recognition platform with a React frontend and FastAPI backend, WebSocket inference streams, facial registration, and image quality checks."
  },
  {
    title: "Multi-Modal Image Analysis",
    tag: "Object detection + captioning",
    tech: "YOLOv8, BLIP, Computer Vision",
    github: "https://github.com/uswakhan12/photosense",
    live: "https://photosense.streamlit.app/",
    demo: "https://drive.google.com/file/d/1x5HhiInxCkViTudwRj_pFqUaD6khi8LM/view?usp=sharing",
    description:
      "Dual-model pipeline combining YOLOv8 object detection with BLIP semantic captioning for richer scene understanding and image-text retrieval beyond a single-model baseline."
  },
  {
    title: "FocusFlow",
    tag: "ADHD-focused productivity",
    tech: "OpenCV, HCI, Python, JavaScript",
    github: "https://github.com/uswakhan12/focusflow",
    demo: "https://drive.google.com/file/d/1oziXngp_XfsPlDjRPUFff0Mr7ueEHxLi/view?usp=drive_link",
    description:
      "Productivity assistant designed with HCI principles for ADHD, with Python backend logic and a responsive frontend for task and focus monitoring."
  },
  {
    title: "Respiratory Illness Prediction",
    tag: "Risk dashboard",
    tech: "Python, Streamlit, Pandas",
    github: "https://github.com/uswakhan12/respiratory-illness",
    live: "https://respiratory-illness-risk-prediction.streamlit.app/",
    demo: "https://drive.google.com/file/d/17lB6suBETUrxZBC6Ob6YPHR3GulpKI0R/view?usp=drive_link",
    description:
      "ML risk prediction system using ILI and weather datasets across U.S. states, with an interactive Streamlit dashboard for real-time assessment and decision-oriented visualization."
  }
]

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <h2 className="section-heading">Featured Projects</h2>
        <span className="squiggle" aria-hidden="true" />
        <p className="section-subheading mb-12">
          Full-stack AI, real-time vision, and applied machine learning
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="sketch-card p-6">
              <h3 className="font-display text-4xl font-bold leading-none text-ink">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-blush-700">
                {project.tag}
              </p>
              <p className="mt-2 text-inksoft">{project.tech}</p>
              <p className="mt-4 leading-relaxed text-ink">{project.description}</p>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub repository"
                    aria-label={`${project.title} GitHub repository`}
                    className="sketch-icon-btn"
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live deployed link"
                    aria-label={`${project.title} live deployed link`}
                    className="sketch-icon-btn sketch-btn-fill"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Demo video"
                    aria-label={`${project.title} demo video`}
                    className="sketch-icon-btn"
                  >
                    <VideoIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
