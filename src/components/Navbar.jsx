import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/" end activeclassname="active">Home</a></li>
        <li><a href="/projects" activeclassname="active">Projects</a></li>
        <li><a href="/self-introduction" activeclassname="active">Self-Introduction</a></li>
        <li><a href="/prices" activeclassname="active">Prices</a></li>
        <li><a href="/contact" activeclassname="active">Contact</a></li>
      </ul>
    </nav>
  );
}
