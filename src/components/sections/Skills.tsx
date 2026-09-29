import { motion } from "motion/react";
import { Gauge } from "lucide-react";
import { learningItems, skillGroups } from "../../data/skills";

export function Skills() {
  return (
    <section className="content-section section-border" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <p className="eyebrow">03 / Capability</p>

        <h2>The tools and testing practices behind my work.</h2>
      </motion.div>

      <div className="skills-layout">
        <div className="skills-grid">
          {skillGroups.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.article
                className={`skill-card skill-${skill.accent} glass-panel`}
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3>{skill.title}</h3>

                <p>{skill.description}</p>

                <div className="skill-tags">
                  {skill.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          className="learning-panel glass-panel"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <div className="learning-heading">
            <span className="learning-icon">
              <Gauge size={20} />
            </span>

            <div>
              <p className="eyebrow">Next level</p>
              <h3>Currently learning</h3>
            </div>
          </div>

          <p className="learning-intro">
            I am expanding from manual validation into maintainable browser
            automation and modern delivery workflows.
          </p>

          <div className="learning-list">
            {learningItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="learning-item"
                  key={item.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <span className="learning-item-icon">
                    <Icon size={17} />
                  </span>

                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>

                  <span className="learning-arrow">↗</span>
                </motion.div>
              );
            })}
          </div>

          <div className="learning-progress">
            <div>
              <span>Automation journey</span>
              <strong>Building</strong>
            </div>

            <span className="progress-track">
              <span />
            </span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}