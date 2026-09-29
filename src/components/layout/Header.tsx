import { motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../common/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#case-studies" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]"),
    );

    if (!sections.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Shahid Shaikh home"
        >
          <span className="brand-photo">
            <img
            src="/images/shahid-profile.png"
            alt=""
            />
            </span>

          <span className="brand-text">
            <strong>Shahid Shaikh</strong>
            <small>QA Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a
            className="resume-button"
            href="/resume/Shahid_Shaikh_QA_Engineer_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            className="menu-button"
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Always mounted. Motion controls the opening and closing. */}
      <motion.nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -12,
        }}
        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="mobile-nav-inner">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -12,
                }}
                transition={{
                  duration: 0.22,
                  delay: isMenuOpen ? index * 0.04 : 0,
                  ease: "easeOut",
                }}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow">↗</span>
              </motion.a>
            );
          })}

          <motion.a
            className="mobile-resume"
            href="/resume/Shahid_Shaikh_QA_Engineer_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            initial={false}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 8,
            }}
            transition={{
              duration: 0.22,
              delay: isMenuOpen ? navItems.length * 0.04 : 0,
              ease: "easeOut",
            }}
          >
            <span>Open Resume</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>
        </div>
      </motion.nav>
    </header>
  );
}