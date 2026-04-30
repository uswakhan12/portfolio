function Navbar() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <nav className="fixed z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-white">Uswa Khan</h1>
        <div className="space-x-1 hidden md:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar