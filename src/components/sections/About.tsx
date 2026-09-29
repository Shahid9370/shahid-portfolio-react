import { motion } from "motion/react";
import {
  Bug,
  CheckCircle2,
  FileSearch,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

const focusItems = [
  {
    number: "01",
    title: "Understand the requirement",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Challenge the happy path",
    icon: Bug,
  },
  {
    number: "03",
    title: "Validate the data flow",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Report with useful evidence",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <section className="content-section section-border" id="about">
      <div className="section-layout">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">01 / Profile</p>

          <h2>
            Quality is not a final step. It is a way of thinking.
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="large-copy">
            I&apos;m a QA Engineer based in Pune, working across manual
            testing, API validation and data-quality verification for FinTech
            and AI-powered products.
          </p>

          <p>
            My strongest area is validating information that software extracts
            from real documents. I compare OCR and LLM-generated output against
            original bank statements field by field, then verify the same
            information through the UI and API.
          </p>

          <p>
            I enjoy understanding how a feature should work, identifying where
            it may fail, documenting the issue clearly and working with
            developers until the behaviour is reliable.
          </p>

          <div className="about-highlight">
            <CheckCircle2 size={20} />
            <span>
              My goal is simple: help teams release software users can trust.
            </span>
          </div>

          <div className="focus-list">
            {focusItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="focus-item"
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                >
                  <span className="focus-number">{item.number}</span>

                  <span className="focus-icon">
                    <Icon size={16} />
                  </span>

                  <span>{item.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}