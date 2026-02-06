const services = [
  {
    title: "Sprint kickoff",
    detail: "2-week intensive to align on goals, validate assumptions, and map the roadmap.",
    includes: ["Stakeholder workshop", "User research plan", "Experiment backlog"],
  },
  {
    title: "Design + build",
    detail: "End-to-end delivery from concept to production-ready interface.",
    includes: ["UI/UX design", "Design system starter", "React implementation"],
  },
  {
    title: "Growth partner",
    detail: "Ongoing product support for iteration, optimization, and experiment cycles.",
    includes: ["Monthly metrics review", "A/B test designs", "Performance tuning"],
  },
];

export default function PricesSection() {
  return (
    <section id="prices" className="section">
      <div className="section-header">
        <h2>Ways we can work together</h2>
        <p>Flexible engagements that scale with your team’s needs.</p>
      </div>
      <div className="grid three">
        {services.map((service) => (
          <article key={service.title} className="card highlight">
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
