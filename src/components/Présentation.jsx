import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button ,Collapse, CardBody, Card } from "reactstrap";

import styles from "./Présentation.module.css";

export default function Presentation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.fade}>
      {/* <Button
        color="success"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        Présentation
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody> */}
            <div className={styles.description}>
              <h1>Thomas Chalanson</h1>
              <h2>Full Stack Develloppeur</h2>
              <p>Un code propre pour Eslint</p>
              <div id="modal">
                <img
                  src="https://ca.slack-edge.com/T6SG2QGG2-UT3DWAVJR-e53b347578a4-512"
                  alt="desktop"
                  className={styles.avatar}
                />
              </div>

              <figure className={styles.desktop}></figure>

              <div className={styles.descriptionBG}>
                <p>
                  Web Développeur Junior en Javascript / React actuellement
                  étudiant à la Wild Code School de Nantes, j'apprends mon futur
                  métier à coder proprement avec " esLint " et ce secteur me
                  passionne car il faut constamment apprendre et ne pas se
                  reposer sur ses lauriers. A la recherche d'un stage dès le
                  mois de février 2021 dans une Start Up comme une Grande
                  Entreprise où je pourrais m' épanouir avec d'autres Dev et
                  toute l'équipe. A côté de ça j'ai créé un label de Techno où
                  je produis des Artistes / vends les Vinyles du label et j'ai
                  un chien Border Collie qui me permet de me ressourcer tous les
                  jours dans la Nature chose hyper importante quand on travaille
                  toute la journée en face d'un écran à taper du code A bientôt
                  j'espère.
                </p>
              </div>
            </div>
          {/* </CardBody>
        </Card>
      </Collapse> */}
    </div>
  );
}