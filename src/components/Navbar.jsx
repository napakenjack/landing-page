export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Aidar Karim</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#selfintroduction">About</a></li>
        <li><a href="#prices">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="nav-cta" href="mailto:hello@aidarkarim.dev">Let’s talk</a>
    </nav>
  );
}
