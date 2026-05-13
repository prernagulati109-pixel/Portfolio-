import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-lg py-3 shadow-2xl" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-white">
          Prerna<span className="text-purple-500">.dev</span>
        </h1>

        <ul className="hidden lg:flex gap-1 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  active === item.id
                    ? "bg-purple-600/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
}

