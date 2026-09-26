# Uswa Khan Portfolio

A professional portfolio website for AI research, projects, and experience. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Live Site

- [https://uswa-portfolio-rouge.vercel.app/](https://uswa-portfolio-rouge.vercel.app/)

## Overview

This portfolio includes:

- Resume-aligned profile and experience content
- Research and publication highlights
- Curated project cards with icon-based links
- Technical skills, achievements, and leadership sections
- Responsive design with polished dark UI

## Current Sections

- `Hero` (intro + icon actions for GitHub, LinkedIn, Email, Phone)
- `About`
- `Research`
- `Experience`
- `Projects`
- `Skills`
- `Achievements`
- `Leadership`
- `Contact`

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- ESLint

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/
    About.jsx
    Achievements.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Leadership.jsx
    Navbar.jsx
    Projects.jsx
    Research.jsx
    Skills.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Updating Project Links

Edit `src/components/Projects.jsx`.

Each project uses these link fields:

- `github` -> GitHub icon
- `live` -> external/live icon
- `demo` -> video icon

If you want to hide one icon for a specific project, remove that field from the object (or keep it empty).

Example:

```jsx
{
  title: "Project Name",
  tag: "Category",
  tech: "Tech stack",
  github: "https://github.com/...",
  live: "https://your-live-link.com",
  demo: "https://your-video-link.com",
  description: "Project summary."
}
```

## Deployment

You can deploy the built `dist/` folder on:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## Contact

- Email: [uswaakhan03@gmail.com](mailto:uswaakhan03@gmail.com)
- GitHub: [github.com/uswakhan12](https://github.com/uswakhan12)
- LinkedIn: [linkedin.com/in/uswa-khan-070b85260](https://www.linkedin.com/in/uswa-khan-070b85260/)

