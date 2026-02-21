function Navbar() {
  const navItems = [
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Leadership", href: "#leadership" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Uswa Khan</h1>
        <div className="space-x-1 hidden md:flex">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition duration-200 text-sm font-medium"
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