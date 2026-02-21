import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Achievements from "./components/Achievements"
import Leadership from "./components/Leadership"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Research from "./components/Research"

function App() {
  return (
    <div className="relative bg-gray-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-[-10%] h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-32 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <Navbar />
      <Hero />
      <Research />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

export default App