import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/Présentation.module.css";
import CardTechnos from "../commons/CardTechnos/CardTechnos";

export default function Technos() {
  const [technos, setTechnos] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/technos`)
      .then((res) => res.data)
      .then((data) => {
        setTechnos(data);
        console.log("technos", data);
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
    <div className={styles.container}>
      <div>
        {technos.map((techno) => (
          <CardTechnos key={techno.idtechno} admin={techno} />
        ))}
      </div>
    </div>
  );
}
