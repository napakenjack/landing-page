const skills = [
  "Product discovery workshops",
  "User research & journey mapping",
  "Design systems & component libraries",
  "Frontend architecture (React, Vite)",
  "Animation & micro-interactions",
  "Accessibility-first delivery",
];

export default function SelfIntroductionSection() {
  return (
    <section id="selfintroduction" className="section split">
      <div>
        <div className="section-header">
          <h2>About me</h2>
          <p>
            I’m a multidisciplinary designer who loves bridging strategy, design, and engineering.
            My work blends product thinking with clean execution to help teams ship faster.
          </p>
        </div>
        <div className="experience">
          <div>
            <h4>Now</h4>
            <p>Freelance product partner for SaaS, fintech, and AI startups.</p>
          </div>
          <div>
            <h4>Previously</h4>
            <p>Led experience design at a global health tech company.</p>
          </div>
          <div>
            <h4>Focus</h4>
            <p>Design systems, go-to-market launches, and growth experiments.</p>
          </div>
        </div>
      </div>
      <div className="skill-card">
        <h3>Core capabilities</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
