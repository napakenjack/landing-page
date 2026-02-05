const projects = [
  {
    title: "Fintech onboarding redesign",
    description:
      "Reduced drop-off by 38% with a new onboarding flow, friction audit, and guided tutorials.",
    tags: ["UX Audit", "React", "Analytics"],
  },
  {
    title: "Health platform design system",
    description:
      "Built a scalable component library with 60+ tokens and accessibility checks baked in.",
    tags: ["Design System", "Storybook", "WCAG"],
  },
  {
    title: "AI workflow dashboard",
    description:
      "Visualized AI automations and surfaced actionable insights for operations teams.",
    tags: ["Product Strategy", "Data Viz", "Figma"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section">
      <div className="section-header">
        <h2>Selected work</h2>
        <p>
          A snapshot of projects where I partnered with ambitious teams to deliver measurable
          outcomes.
        </p>
      </div>
      <div className="grid three">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
