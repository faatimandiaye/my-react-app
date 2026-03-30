import projet1 from "../assets/photo1.jpg"
 import projet2 from "../assets/photo2.jpg"
 import projet3 from "../assets/photo3.jpg"

function Projects() {

  const projects = [
  {
    id: 1,
    title: "Mini Market",
    description: "Application avec React et Laravel",
    image: projet1,
    github: "https://github.com/faatimandiaye/my-react-app.git",
    site: "#"
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Mon site portfolio moderne avec React",
    image: projet2,
    github: "https://github.com/faatimandiaye/my-react-app.git",
    site: "#"
  },
  {
    id: 3,
    title: "Gestion des tâches",
    description: "Application React",
    image: projet3,
    github: "#",
    site: "#"
  }
];

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank">Voir sur GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects