import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  ShieldCheck,
} from "lucide-react";
import type { Variants } from "motion/react";

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="availability-pill" variants={heroItem}>
            <span className="availability-dot" />
            Available for QA opportunities
          </motion.div>

          <motion.p className="hero-kicker" variants={heroItem}>
            Manual QA · API Testing · AI Validation
          </motion.p>

          <motion.h1 variants={heroItem}>
            I test products
            <span>before users do.</span>
          </motion.h1>

          <motion.p className="hero-description" variants={heroItem}>
            QA Engineer focused on FinTech and AI products. I validate
            workflows, APIs and extracted data so software is accurate,
            reliable and ready for real-world users.
          </motion.p>

          <motion.div className="hero-actions" variants={heroItem}>
            <a className="primary-button" href="#projects">
              Explore my work
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a className="secondary-button" href="#contact">
              Let&apos;s connect
            </a>
          </motion.div>

          <motion.div className="hero-metrics" variants={heroItem}>
            <div className="hero-metric">
              <strong>100+</strong>
              <span>Defects tracked</span>
            </div>

            <div className="hero-metric">
              <strong>50+</strong>
              <span>Test case sheets</span>
            </div>

            <div className="hero-metric">
              <strong>50–60</strong>
              <span>Formats validated</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
          
        >
          <motion.div
            className="hero-orbit hero-orbit-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              
            }}
          />

          <motion.div
            className="hero-orbit hero-orbit-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="qa-console glass-panel"
            whileHover={{
              y: -8,
              rotate: 0,
              transition: {
                duration: 0.35,
                ease: "easeOut",
              },
            }}
          >
            <div className="console-header">
              <div className="console-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="console-file">qa_validation.exe</span>
              <span className="console-live">LIVE</span>
            </div>

            <motion.div
              className="shield-icon"
              animate={{
                y: [0, -7, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ShieldCheck size={45} strokeWidth={1.5} />
            </motion.div>

            <p className="console-label">Quality assurance</p>

            <h2>
              Build confidence.
              <span>Ship better.</span>
            </h2>

            <div className="console-status">
              <span>
                <i />
                Validation system active
              </span>

              <strong>98.7%</strong>
            </div>

            <div
              className="console-chart"
              aria-label="Validation activity chart"
            >
              {[72, 92, 58, 83, 67, 95, 76, 100].map((height, index) => (
                <motion.span
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                  animate={{
                    scaleY: [0.82, 1, 0.9],
                    opacity: [0.65, 1, 0.8],
                  }}
                  transition={{
                    duration: 2.3,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="console-tags">
              <span>UI</span>
              <span>API</span>
              <span>DATA</span>
              <span>REGRESSION</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-chip chip-api"
            animate={{ y: [-5, 7, -5] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={16} aria-hidden="true" />
            Postman API checks
          </motion.div>

          <motion.div
            className="floating-chip chip-data"
            animate={{ y: [6, -6, 6] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Check size={16} aria-hidden="true" />
            Data validated
          </motion.div>

          <motion.div
            className="floating-chip chip-pdf"
            animate={{ y: [-4, 5, -4] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database size={16} aria-hidden="true" />
            OCR / LLM output
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className="scroll-cue"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <span>Scroll to explore</span>
        <ArrowDown size={15} aria-hidden="true" />
      </motion.a>
    </section>
  );
}