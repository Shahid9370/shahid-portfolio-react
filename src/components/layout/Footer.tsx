import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href="#home">
            Shahid Shaikh
          </a>

          <p>QA Engineer · Software Testing · FinTech &amp; AI</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/shahidshaikh-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>

          <a href="mailto:shahidsrs93@gmail.com">
            Email <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Shahid Shaikh</span>
        <span>Designed with quality in mind.</span>
      </div>
    </footer>
  );
}