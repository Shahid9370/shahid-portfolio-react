import { motion } from "motion/react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`shared-section-heading heading-${align}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>

      {description && <p className="heading-description">{description}</p>}
    </motion.div>
  );
}