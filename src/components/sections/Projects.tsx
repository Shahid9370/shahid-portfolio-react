import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../types/portfolio";

const filters: {
  label: string;
  value: ProjectCategory;
}[] = [
  { label: "All work", value: "all" },
  { label: "Manual QA", value: "manual" },
  { label: "API testing", value: "api" },
  { label: "Data validation", value: "data" },
  { label: "FinTech & AI", value: "fintech" },
  { label: "Automation", value: "automation" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section className="content-section section-border" id="projects">
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="eyebrow">04 / Work samples</p>

          <h2>
            Selected projects and practical QA work.
          </h2>
        </div>

        <p className="projects-intro">
          Filter the work by the testing capability it demonstrates.
        </p>
      </motion.div>

      <div
        className="project-filters"
        role="tablist"
        aria-label="Project filters"
      >
        <span className="filter-label">
          <Filter size={14} />
          Filter:
        </span>

        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              className={`filter-button ${isActive ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="empty-projects">
          No projects are available for this filter yet.
        </p>
      )}
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="project-card glass-panel"
      layout
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: -12 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
    >
      <div className="project-number">{project.number}</div>

      <div className="project-content">
        <p className="project-type">{project.type}</p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-metrics">
          {project.metrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>

        <div className="project-tools">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <details className="project-details">
          <summary>
            <span>View project details</span>
            <ChevronDown size={16} />
          </summary>

          <dl>
            <dt>Scope</dt>
            <dd>{project.details.scope}</dd>

            <dt>Approach</dt>
            <dd>{project.details.approach}</dd>

            <dt>Result</dt>
            <dd>{project.details.result}</dd>
          </dl>
        </details>

        <div className="project-footer">
          <span>QA case study</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.article>
  );
}