import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/Présentation.module.css";
import CardProjects from "../commons/CardProjects/CardProjects";
import Technos from "./Technos";
import Clients from "./Clients";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/projects`)
      .then((res) => res.data)
      .then((data) => {
        setProjects(data);
        console.log("les projets", data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <div>
      <div>
        <div className={styles.heading}>
          <h2>Mes travaux récents</h2>
          <p>
            Voici différents projets que j' ai réalisé dernièrement seul ou en
            équipe à la Wild Code School de Nantes.
          </p>
        </div>
        {projects.map((project) => (
          <CardProjects key={project.idproject} project={project} />
        ))}
        <Clients />
        <Technos />
      </div>
    </div>
  );
}
