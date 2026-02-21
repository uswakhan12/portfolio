# Uswa Khan - AI Research Portfolio

A modern, interactive portfolio showcasing AI research, projects, and professional experience. Built with React, Vite, and cutting-edge web technologies.


---

## 📋 Overview

This portfolio showcases:
- **Award-winning research** - Attentio (3rd Position at National AI Gala)
- **AI/ML Projects** - Deep learning systems, computer vision, LLMs
- **Professional Experience** - Backend and ML internships
- **Technical Skills** - Comprehensive tech stack across AI, ML, and full-stack development
- **Leadership Roles** - Community engagement and social impact initiatives

---

## ✨ Key Features

### 🎨 Modern UI/UX
- **Colorful gradient backgrounds** - Dynamic glow effects and ambient visuals
- **3D card interactions** - Tilt effects on hover with smooth animations
- **Responsive design** - Mobile-first approach with Tailwind CSS
- **Smooth animations** - Framer Motion for polished entrance effects
- **Dark theme** - Eye-comfortable color scheme optimized for portfolios

### 📱 Sections
1. **Hero** - Name, tags, intro, GitHub/LinkedIn links + Attentio award highlight
2. **Research** - Published papers and research projects (WiDS PSU 2026)
3. **Experience** - Professional internships with detailed achievements
4. **Projects** - 7+ portfolio projects with GitHub, demo links, and videos
5. **Skills** - Interactive categorized tech stack (7 categories)
6. **Achievements** - Awards and recognitions with visual badges
7. **Leadership** - Community roles and social impact
8. **Contact** - Direct email link for inquiries

### 🔧 Technical Highlights
- **Interactive 3D effects** - Tilt cards on hover
- **Staggered animations** - Sequence entrance effects
- **Color-coded categories** - Visual organization with gradient overlays
- **Fast performance** - Vite + React for optimal load times
- **SEO optimized** - Semantic HTML and accessibility features

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics (optional)

### Build & Deployment
- **ESLint** - Code quality
- **PostCSS** - CSS transformations
- **Node.js** - Runtime environment

### Styling
- **Tailwind CSS** - Responsive design
- **Custom CSS** - 3D effects and animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/uswa12/uswa-portfolio.git
cd uswa-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Main intro + Attentio award
│   ├── Research.jsx          # Published research papers
│   ├── Experience.jsx        # Professional internships
│   ├── Projects.jsx          # Portfolio projects with links
│   ├── Skills.jsx            # Interactive tech stack
│   ├── Achievements.jsx      # Awards and recognitions
│   ├── Leadership.jsx        # Community roles
│   ├── Contact.jsx           # Contact section
│   ├── Navbar.jsx            # Navigation menu
│   └── Footer.jsx            # Footer
├── assets/                   # Images & media
├── App.jsx                   # Main app component
├── App.css                   # Custom 3D & animation styles
├── index.css                 # Global styles with Tailwind
└── main.jsx                  # Entry point
```

---

## 📌 Key Projects

### 🏆 Attentio (Award Winner)
- **Position:** 3rd at National AI, Cybersecurity & Drone Swarm Gala
- **Tech:** YOLO, Deep Learning, Computer Vision
- **Focus:** Student engagement detection using real-time behavioral analysis

### 🤖 Multi-Modal Image Analysis
- **Tech:** YOLOv8, BLIP, PyTorch
- **Demo:** [Live App](https://multi-modal-image-analysis.streamlit.app)
- **Features:** Object detection + semantic captioning

### 🧠 AxonAI
- **Tech:** FastAPI, React, LLMs, ElevenLabs
- **Demo:** [Live App](https://axon-ai-gilt.vercel.app)
- **Features:** Multi-agent AI advisory system with voice synthesis

### 📊 Respiratory Illness Prediction
- **Tech:** Python, Streamlit, ML
- **Demo:** [Live App](https://respiratory-illness-risk-prediction-e8bdczqphmukmmitbcsxt3.streamlit.app)

---

## 404 Customization

### Adding New Projects
Edit `src/components/Projects.jsx`:

```jsx
{
  title: "Project Name",
  tag: "Individual/Team project",
  tech: "Technologies used",
  github: "GitHub URL",
  demo: "Live demo URL (optional)",
  video: "Demo video URL (optional)",
  description: `Project description...`
}
```

### Updating Skills
Edit `src/components/Skills.jsx` - categories are grouped with colors:
- **AI/ML** - Purple
- **Frameworks** - Blue
- **Models** - Cyan
- **Tools** - Green
- **Techniques** - Orange
- **Languages** - Yellow
- **Web/API** - Pink

### Modifying Colors & Styling
- Global colors: `tailwind.config.js`
- 3D card effects: `src/App.css` (`.tilt-card` class)
- Theme colors: Update color classes in component classes

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder
```

### Netlify
```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

---

## 📧 Contact

- **Email:** [uswaakhan03@gmail.com](mailto:uswaakhan03@gmail.com)
- **GitHub:** [@uswa12](https://github.com/uswa12)
- **LinkedIn:** [Uswa Khan](https://www.linkedin.com/in/uswa-khan-070b85260)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙌 Acknowledgments

- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Beautiful styling
- **React Three** - 3D graphics support
- **Vite** - Lightning-fast development experience

---

**Built with ❤️ by Uswa Khan**
