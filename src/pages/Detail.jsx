import React from "react";
import { useParams, Link } from "react-router-dom";
import projet1 from "../assets/photo1.jpg";
import projet2 from "../assets/photo2.jpg";
import projet3 from "../assets/photo3.jpg";

// Base de données de projets
const projets_bd = [
  {
    id: 1,
    nom: "Mini Market",
    description: "Application avec React et Laravel",
    image: projet1,
    github: "https://github.com/faatimandiaye/my-react-app.git",
    site: "#",
    techno: "React, Laravel, CSS"
  },
  {
    id: 2,
    nom: "Portfolio",
    description: "Mon site portfolio moderne avec React",
    image: projet2,
    github: "https://github.com/faatimandiaye/my-react-app.git",
    site: "#",
    techno: "React, CSS"
  },
  {
    id: 3,
    nom: "Gestion des tâches",
    description: "Application React",
    image: projet3,
    github: "#",
    site: "#",
    techno: "React, CSS"
  }
];

const Detail = () => {
  const { id } = useParams();

  // Convertir id de l'URL en nombre pour comparer
  const le_projet = projets_bd.find((projet) => projet.id === parseInt(id));

  if (!le_projet) {
    return (
      <div className="detail">
        <p>Projet introuvable</p>
        <Link to="/">Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="detail">
      <h1 className="title">Détail du projet</h1>

      <div className="box_detail">
        {/* Image */}
        <div className="image_container">
          <img
            src={le_projet.image || "/default.png"}
            alt={le_projet.nom}
          />
        </div>

        {/* Infos */}
        <div className="info_container">
          <h2>{le_projet.nom}</h2>

          <p className="desc">
            {le_projet.description ||
              "Projet moderne développé avec les meilleures pratiques."}
          </p>

          <div className="links">
            <a
              href={le_projet.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a href={le_projet.site} target="_blank" rel="noopener noreferrer">
              Voir le site
            </a>
          </div>

          <div className="techno">
            <strong>Technologies :</strong>
            <p>{le_projet.techno}</p>
          </div>

          <Link to="/">← Retour aux projets</Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;