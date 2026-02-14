import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const sections = ["home", "about", "stack", "contact"];

export default function DesktopNavbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bg-white/90 top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-2xl px-6 py-3">
      <ul className="flex flex-wrap justify-center gap-5 md:gap-7">
        {sections.map((sec) => (
          <li key={sec}>
            <ScrollLink
              to={sec}
              smooth={true}
              offset={-80} // adjust for navbar height
              duration={500}
              className={`
                capitalize px-5 py-2 rounded-full text-sm font-medium cursor-pointer
                transition-all duration-300
                relative
                ${
                  activeSection === sec
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:scale-105"
                }
              `}
            >
              {sec}
              {/* Optional animated underline */}
              <span
                className={`
                  absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-orange-500 rounded-full transition-all duration-300
                  ${activeSection === sec ? "w-3/4" : "w-0"}
                `}
              />
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
