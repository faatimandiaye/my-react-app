import { NavLink } from "react-router-dom"
import About from "./About"       
import Projects from "./Projects"
import Contact from "./Contact"
import photo from "../assets/photo.jpg"

function Accueil() {
  return (
    <>
      <section className="hero" id="home">
        <img src={photo} alt="Fatimatou" className="fatima-img" />
        <h1>Bonjour, je suis <span>Fatimatou Ndiaye</span></h1>
        <p className="subtitle">Développeuse Web & Mobile</p>
        <div className="hero-buttons">
          <NavLink to="/projects" className="btn">Voir mes projets</NavLink>
          <NavLink to="/contact" className="btn-outline">Mes contacter</NavLink>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default Accueil