export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div>
        <h2>Let’s build something remarkable</h2>
        <p>
          Have a project in mind? I’d love to hear about your product, timeline, and goals.
          Let’s schedule a quick call and see if we’re a fit.
        </p>
      </div>
      <div className="contact-card">
        <div>
          <h3>Start a conversation</h3>
          <p>Response time within 24 hours.</p>
        </div>
        <a className="primary-btn" href="mailto:hello@aidarkarim.dev">hello@aidarkarim.dev</a>
        <div className="contact-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer">Behance</a>
          <a href="https://www.github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
