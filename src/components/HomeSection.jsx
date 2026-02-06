export default function HomeSection() {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <p className="eyebrow">Product Designer • Frontend Engineer ・  Fullstack Developer</p>
        <h1>Hi, I’m Aidar. I craft delightful, high-converting digital experiences.</h1>
        <p className="lead">
          I help startups and growth teams turn complex ideas into fast, accessible, and
          beautiful products. From concept to launch, I focus on clarity, performance, and
          measurable impact.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="#portfolio">View work</a>
          <a className="ghost-btn" href="#contact">Book a discovery call</a>
        </div>
      </div>
      <div className="hero-card">
        <div className="status-pill">Available for select projects</div>
        <h2>Signature strengths</h2>
        <ul>
          <li>Design systems & UI libraries</li>
          <li>Product strategy & roadmap alignment</li>
          <li>Frontend performance tuning</li>
          <li>AI-assisted UX workflows</li>
        </ul>
      </div>
    </section>
  );
}
