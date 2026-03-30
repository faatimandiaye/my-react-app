import React from "react";
import { useParams } from "react-router-dom";
import { projets_bd } from "../data/projects_bd";
 


const Detail = () => {
  const { id } = useParams()

  const le_projet = projets_bd.find((projet) => projet.id == id)

  if (!le_projet) {
    return <p>Projet introuvable</p>
  }

  return (
    <div className="detail">
      <h1 className="title">Détail du projet</h1>

      <div className="box_detail">
        
        {/* Image */}
        <div className="image_container">
          <img src={le_projet.image} alt={le_projet.nom} />
        </div>

        {/* Infos */}
        <div className="info_container">
          <h2>{le_projet.nom}</h2>

          <p className="desc">
            {le_projet.description || "Projet moderne développé avec les meilleures pratiques."}
          </p>

          <div className="links">
            <a href={le_projet.github} target="_blank">GitHub</a>
            <a href={le_projet.site} target="_blank">Voir le site</a>
          </div>

          <div className="techno">
            <strong>Technologies :</strong>
            <p>{le_projet.techno}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detail