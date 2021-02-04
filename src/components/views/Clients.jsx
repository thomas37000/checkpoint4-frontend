import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import axios from "axios";
import styles from "../css/Présentation.module.css";
import CardClients from "../commons/CardClients/CardClients";

export default function Clients(props) {
  const [clients, setClients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/clients`)
      .then((res) => res.data)
      .then((data) => {
        setClients(data);
        console.log("mes clients", data);
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
    <>
      <Button color="link" className={styles.btn} onClick={toggle} style={{ marginBottom: "1rem" }}>
        <h2 className={styles.h2}>mes clients</h2>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {clients.map((clients) => (
              <CardClients
                key={clients.idclients}
                clients={clients}
              />
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
