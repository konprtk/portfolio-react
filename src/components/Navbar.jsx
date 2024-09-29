import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="text-textColor bg-bgColor p-6 flex font-ubuntu justify-between items-center top-0 sticky z-50">
      <div className="font-bold text-2xl pl-28">Prat!k.</div>
      <div className="flex space-x-9 pr-32">
        <a
          href="#home"
          className={`text-lg cursor-pointer ${
            activeSection === "home" ? "text-mainColor" : "hover:text-mainColor"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-lg cursor-pointer ${
            activeSection === "about"
              ? "text-mainColor"
              : "hover:text-mainColor"
          }`}
        >
          About
        </a>
        <a
          href="#education"
          className={`text-lg cursor-pointer ${
            activeSection === "education"
              ? "text-mainColor"
              : "hover:text-mainColor"
          }`}
        >
          Education
        </a>
        <a
          href="#skills"
          className={`text-lg cursor-pointer ${
            activeSection === "skills"
              ? "text-mainColor"
              : "hover:text-mainColor"
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`text-lg cursor-pointer ${
            activeSection === "projects"
              ? "text-mainColor"
              : "hover:text-mainColor"
          }`}
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
