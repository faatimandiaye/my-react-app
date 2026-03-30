import photo from "../assets/photo.jpg"
function About() {
  return (
    <section className="about">

      <div className="about-container">

      
        <div className="about-text">
          <img src={photo} alt="Fatimatou" className="about-img" />
          <h1>QUI SUIS-JE ?</h1>

          <h2>
            Je suis Fatimatou Ndiaye, apprenante en Développement Web et Mobile.
          </h2>

          <p>
            Je crée des projets avec React et Laravel.
            J’aime concevoir des interfaces simples, rapides et efficaces.
          </p>
        </div>

        
        <div className="skills">

          <div className="skill">
            <span>HTML ET CSS</span>
            <div className="progress">
              <div className="progress-bar html"></div>
            </div>
            <span>80%</span>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress">
              <div className="progress-bar react"></div>
            </div>
            <span>50%</span>
          </div>

          <div className="skill">
            <span>JAVASCRIPT</span>
            <div className="progress">
              <div className="progress-bar js"></div>
            </div>
            <span>10%</span>
          </div>

          <div className="skill">
            <span>Laravel</span>
            <div className="progress">
              <div className="progress-bar laravel"></div>
            </div>
            <span>75%</span>
          </div>

          <div className="skill">
            <span>PHP</span>
            <div className="progress">
              <div className="progress-bar php"></div>
            </div>
            <span>85%</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About