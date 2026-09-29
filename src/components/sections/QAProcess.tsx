import { motion } from "motion/react";
import {
  Bug,
  CheckCircle2,
  FileSearch,
  FlaskConical,
  GitPullRequest,
  Rocket,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Requirement analysis",
    description: "Understand the feature, business rules and expected behaviour.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Scenario design",
    description: "Cover happy paths, risks, negative cases and edge conditions.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Test execution",
    description: "Validate the UI, API responses and source data together.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Defect reporting",
    description: "Document reproduction steps, evidence, impact and expected results.",
    icon: Bug,
  },
  {
    number: "05",
    title: "Retesting and regression",
    description: "Confirm fixes and ensure existing behaviour remains stable.",
    icon: GitPullRequest,
  },
  {
    number: "06",
    title: "Release validation",
    description: "Give the team confidence before the feature reaches users.",
    icon: Rocket,
  },
];

export function QAProcess() {
  return (
    <section className="content-section section-border" id="case-studies">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">05 / QA process</p>

        <h2>How I move from requirement to release.</h2>
      </motion.div>

      <div className="qa-process-grid">
        <div className="process-intro glass-panel">
          <span className="process-mark">
            <CheckCircle2 size={27} />
          </span>

          <p className="eyebrow">Quality loop</p>

          <h3>
            Find risks early.
            <span>Validate with evidence.</span>
          </h3>

          <p>
            My approach combines requirement understanding, structured test
            coverage and practical validation across UI, API and source data.
          </p>

          <div className="process-stat">
            <strong>30+</strong>
            <span>regression and change-validation cycles</span>
          </div>
        </div>

        <div className="process-list">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                className="process-row"
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{ x: 5 }}
              >
                <span className="process-number">{step.number}</span>

                <span className="process-icon">
                  <Icon size={17} />
                </span>

                <span className="process-copy">
                  <strong>{step.title}</strong>
                  <small>{step.description}</small>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}