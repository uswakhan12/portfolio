function Projects() {
  const projects = [
    {
      title: "Multi-Modal Image Analysis System",
      tag: "Individual project",
      tech: "YOLOv8, BLIP, PyTorch, Computer Vision",
      github: "https://github.com/uswa12/multi-modal-image-analysis",
      demo: "https://multi-modal-image-analysis.streamlit.app/",
      video: "https://drive.google.com/file/d/1x5HhiInxCkViTudwRj_pFqUaD6khi8LM/view?usp=sharing",
      description: `
      Developed a dual-model AI system combining YOLOv8 for real-time object
      detection and BLIP for semantic caption generation.

      • Integrated detection + captioning pipeline
      • Enabled contextual scene understanding
      • Designed for image-text retrieval and automated visual summaries
      `,
    },
    {
      title: "FocusFlow – ADHD Productivity Tool",
      tag: "Team project",
      tech: "Python, JavaScript, HCI, HTML/CSS",
      github: "https://github.com/uswa12/ADHD-hci",
      video: "https://drive.google.com/file/d/1oziXngp_XfsPlDjRPUFff0Mr7ueEHxLi/view?usp=sharing",
      description: `
      Designed an ADHD monitoring and workflow optimization tool using
      Human-Computer Interaction principles.

      • Behavior-based productivity tracking
      • Adaptive focus timer system
      • Frontend UI built in HTML/CSS
      • Backend logic implemented in Python
      `,
    },
    {
      title: "AxonAI",
      tag: "Team project",
      tech: "FastAPI, React + Vite, Tailwind, LLMs, ElevenLabs",
      github: "https://github.com/Esh90/AxonAI",
      demo: "https://axon-ai-gilt.vercel.app/",
      video: "https://drive.google.com/file/d/16PdcyB51SlNM9LPf7ri8YZmwwjLC3gb2/view?usp=drive_link",
      description: `
      AI-powered organizational intelligence system with a resizable
      knowledge graph, Shadow Council multi-agent advisory, and Critic Agent
      for cross-checking input. Integrated ElevenLabs TTS for dynamic voice
      responses and a responsive React dashboard with mobile support.

      • Knowledge graph: nodes, edges, conflicts, dependencies, insights
      • Shadow Council: multi-agent advisory with fallback LLMs
      • Critic Agent: flags contradictions and recommends notifications
      • Voice synthesis: seamless TTS with stop button, pre-generated clips
      • Responsive UI: resizable panels, zoom, minimap, dark theme
      `,
    },
    {
      title: "Respiratory Illness Prediction Dashboard",
      tag: "Team project",
      tech: "Python, Streamlit, Pandas, Machine Learning",
      github: "https://github.com/uswa12/respiratory-illness-risk-prediction",
      demo: "https://respiratory-illness-risk-prediction-e8bdczqphmukmmitbcsxt3.streamlit.app/",
      video: "https://drive.google.com/file/d/17lB6suBETUrxZBC6Ob6YPHR3GulpKI0R/view?usp=sharing",
      description: `
      Built a predictive ML system using Influenza-Like Illness (ILI) and
      weather datasets to forecast respiratory illness risks across US states.

      • Feature engineering on weather + health datasets
      • Implemented classification model for risk prediction
      • Interactive dashboard using Streamlit for visualization
      `,
    },
    {
      title: "AI Travel Planner – Multi-Agent System",
      tag: "Team project",
      tech: "n8n, LLMs, Agentic AI",
      github: "https://github.com/uswa12/AgenticAI_Workshop",
      description: `
      Built an autonomous multi-agent AI workflow for intelligent itinerary generation.

      • Researcher agent gathers travel data
      • Planner agent structures trip schedule
      • Writer agent generates formatted itinerary
      • Reviewer agent validates and optimizes output

      Automated full travel planning pipeline end-to-end.
      `,
    },
    {
      title: "SecureBank – Desktop Banking System",
      tag: "Team project",
      tech: "JavaFX, FXML, REST APIs",
      github: "https://github.com/A-Hassan-5/SecureBank",
      description: `
      Architected a secure desktop banking application replicating core
      HBL banking features.

      • Account creation & authentication
      • Transaction handling & history tracking
      • REST API integration for dynamic account management
      • Secure UI using JavaFX and FXML
      `,
    },
    {
      title: "IoT Crop Freshness Tracker",
      tag: "Team project",
      tech: "React, Flask, PostgreSQL, WebSockets",
      github: "https://github.com/uswa12/CauliTrack",
      description: `
      Designed a real-time IoT monitoring system to track crop freshness
      across Farm → Depot → Transport → Market phases.

      • Simulated virtual IoT sensors
      • Real-time data streaming via WebSockets
      • PostgreSQL backend for time-series data storage
      • React dashboard for visualization
      `,
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
      <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
        Technical Portfolio (Projects)
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="tilt-card bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/80 border border-white/5 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>

            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              {project.tag}
            </p>

            <p className="text-sm text-blue-400 mb-4">
              {project.tech}
            </p>

            <p className="text-gray-400 whitespace-pre-line leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                  Live Demo
                </a>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
                >
                  📹 Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects