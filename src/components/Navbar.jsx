import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScroll = (sectionId) => () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
      return
    }

    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/">Aidar</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><button type="button" onClick={handleScroll('selfintroduction')}>About</button></li>
        <li><button type="button" onClick={handleScroll('prices')}>Services</button></li>
        <li><button type="button" onClick={handleScroll('contact')}>Contact</button></li>
      </ul>
      <a className="nav-cta" href="mailto:napaxiong@gmail.com">Let’s talk</a>
    </nav>
  );
}
