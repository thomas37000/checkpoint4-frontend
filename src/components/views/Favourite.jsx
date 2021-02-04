import React, { useState, useEffect } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import axios from "axios";
import styles from "../css/Présentation.module.css";
import CardFavourites from "../commons/CardFavourites/CardFavourites";

export default function Favourites(props) {
  const [favourites, setFavourites] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/favourite`)
      .then((res) => res.data)
      .then((data) => {
        setFavourites(data);
        console.log("mes favoris", data);
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
        <h2 className={styles.h2}>mes Hobbies</h2>
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {favourites.map((favourite) => (
              <CardFavourites
                key={favourite.idfavourite}
                favourite={favourite}
              />
            ))}
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
