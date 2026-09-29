import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { experienceItems } from "../../data/experience";

export function Experience() {
  return (
    <section className="content-section section-border" id="experience">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">02 / Career</p>

        <h2>
          Experience that connects product behaviour with user trust.
        </h2>
      </motion.div>

      <div className="experience-timeline">
        {experienceItems.map((item, index) => (
          <motion.article
            className={`experience-item ${item.featured ? "featured" : ""}`}
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
          >
            <div className="experience-date">
              <span>{item.label}</span>

              {item.dates.map((date) => (
                <strong key={date}>{date}</strong>
              ))}

              <small>{item.location}</small>
            </div>

            <div className="experience-card glass-panel">
              <div className="experience-topline">
                <span className="experience-label">
                  {item.featured ? "Currently working here" : item.label}
                </span>

                <span className="experience-number">{item.number}</span>
              </div>

              <h3>
                {item.title}
                <span>{item.company}</span>
              </h3>

              <p className="experience-description">{item.description}</p>

              <ul className="experience-list">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>

              <div className="experience-tools">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              {item.featured && (
                <div className="experience-note">
                  <ArrowUpRight size={16} />
                  <span>Focused on product quality and data accuracy</span>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}