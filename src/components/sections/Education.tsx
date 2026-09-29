import { motion } from "motion/react";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const educationItems = [
  {
    period: "2023–2025",
    title: "Master of Computer Applications",
    institution: "Vishwakarma University, Pune",
    result: "CGPA 7.89",
  },
  {
    period: "2020–2023",
    title: "Bachelor of Computer Applications",
    institution: "KBC North Maharashtra University",
    result: "CGPA 9.10",
  },
  {
    period: "12th, Science",
    title: "Higher Secondary Education",
    institution: "KES's Pratap College, Amalner",
    result: "",
  },
];

const certifications = [
  "Software Testing / QA",
  "Agile Testing",
  "Python",
  "The Git & GitHub Bootcamp",
  "CSX Cybersecurity Fundamentals",
];

export function Education() {
  return (
    <section className="content-section section-border" id="education">
      <div className="education-layout">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">06 / Background</p>

          <h2>Continuous learning is part of the job.</h2>
        </motion.div>

        <div className="education-content">
          <div className="education-list">
            {educationItems.map((item, index) => (
              <motion.article
                className="education-item"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <span className="education-icon">
                  <GraduationCap size={18} />
                </span>

                <div>
                  <span className="education-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  {item.result && <strong>{item.result}</strong>}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="certifications-card glass-panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="certifications-heading">
              <span className="education-icon">
                <Award size={18} />
              </span>

              <div>
                <p className="eyebrow">Learning record</p>
                <h3>Certifications</h3>
              </div>
            </div>

            <div className="certification-list">
              {certifications.map((certification) => (
                <span key={certification}>
                  <BookOpen size={14} />
                  {certification}
                </span>
              ))}
            </div>

            <div className="publication">
              <span>Publication</span>
              <strong>Cyber Security for AI Systems: A Survey</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}