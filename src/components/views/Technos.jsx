import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import axios from "axios";
import styles from "../css/Présentation.module.css";
import CardTechnos from "../commons/CardTechnos/CardTechnos";

export default function Technos(props) {
  const [technos, setTechnos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
    // <div className={styles.container}>
    <>
      <Button
        color="link"
        className={styles.btn}
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        <h2 className={styles.h2}>les Technos projets</h2>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {technos.map((techno) => (
              <CardTechnos key={techno.idtechno} techno={techno} />
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
