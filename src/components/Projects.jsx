function Projects() {
  const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.16c-3.2.69-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.17a10.9 10.9 0 0 1 5.77 0c2.2-1.48 3.17-1.17 3.17-1.17.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.39-5.24 5.67.41.35.78 1.03.78 2.09v3.1c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )

  const ExternalLinkIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
      <path strokeWidth="2" d="M14 3h7v7m0-7L10 14" />
      <path strokeWidth="2" d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  )

  const VideoIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
      <rect x="3" y="6" width="13" height="12" rx="2" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" strokeWidth="2" />
    </svg>
  )

  const projects = [
    {
      title: "LabMind AI",
      tag: "3rd Place Globally, Hack-Nation",
      tech: "Full-Stack AI, React, Node.js, LLMs",
      github: "https://github.com/uswakhan12/lab-mindai",
      live: "https://tanstack-start-app.labmind.workers.dev/",
      demo: "https://drive.google.com/file/d/1maUpBxlDiGnwiEHSE9Sk_KbDBoU2KEp7/view?usp=sharing",
      description:
        "Secured 3rd Place Globally out of 5,500+ applicants in the MIT-backed Hack-Nation Fulcrum Science Challenge by engineering a full-stack AI pipeline that transformed raw scientific hypotheses into costed, lab-ready experiment plans in under 20 hours."
    },
    {
      title: "FocusFlow",
      tag: "HCI Project",
      tech: "HCI, Python, JavaScript",
      github: "https://github.com/uswakhan12/focusflow",
      demo: "https://drive.google.com/file/d/1oziXngp_XfsPlDjRPUFff0Mr7ueEHxLi/view?usp=drive_link",
      description:
        "Designed an ADHD-focused productivity tool using HCI principles, with responsive frontend workflows and Python-driven behavioral logic."
    },
    {
      title: "Multi-Modal Image Analysis",
      tag: "Computer Vision Project",
      tech: "YOLOv8, BLIP, Computer Vision",
      github: "https://github.com/uswakhan12/photosense",
      live: "https://photosense.streamlit.app/",
      demo: "https://drive.google.com/file/d/1x5HhiInxCkViTudwRj_pFqUaD6khi8LM/view?usp=sharing",
      description:
        "Engineered a dual-model vision system combining YOLOv8 detection with BLIP captioning to improve scene understanding and image-text retrieval."
    },
    {
      title: "Respiratory Illness Prediction",
      tag: "Machine Learning Dashboard",
      tech: "Python, Streamlit, Pandas, Machine Learning",
      github: "https://github.com/uswakhan12/respiratory-illness-risk-prediction",
      live: "https://respiratory-illness-risk-prediction.streamlit.app/",
      demo: "https://drive.google.com/file/d/17lB6suBETUrxZBC6Ob6YPHR3GulpKI0R/view?usp=drive_link",
      description:
        "Developed an ML risk prediction system using ILI and weather signals across U.S. states, delivered through an interactive Streamlit dashboard."
    },
    {
      title: "FacePulseAI",
      tag: "Full-Stack Computer Vision",
      tech: "React, FastAPI, OpenCV, WebSockets",
      github: "https://github.com/uswakhan12/facepulseAI",
      demo: "https://your-demo-video-link.com/facepulseai",
      description:
        "Built a real-time face analysis application with registration, image-quality checks, and REST/WebSocket endpoints for low-latency inference."
    }
  ]

  return (
    <section id="projects" className="section-shell relative">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="section-container">
        <h2 className="section-heading mb-12">Featured Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-surface transition duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-2 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">
                {project.tag}
              </p>

              <p className="mb-4 text-sm text-sky-300">
                {project.tech}
              </p>

              <p className="leading-relaxed text-slate-300">{project.description}</p>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub repository"
                    aria-label={`${project.title} GitHub repository`}
                    className="rounded-lg border border-white/20 bg-white/10 p-2.5 text-slate-100 transition hover:bg-white/20"
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
                    className="rounded-lg border border-sky-300/40 bg-sky-500/10 p-2.5 text-sky-200 transition hover:bg-sky-500/20"
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
                    className="rounded-lg border border-purple-300/40 bg-purple-500/10 p-2.5 text-purple-200 transition hover:bg-purple-500/20"
                  >
                    <VideoIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects