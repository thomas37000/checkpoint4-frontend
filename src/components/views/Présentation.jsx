import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Button ,Collapse, CardBody, Card } from "reactstrap";
import CardAdmins from "../commons/CardAdmin/CardAdmin";
import Favourites from "./Favourite";
import styles from "../css/Présentation.module.css";

export default function Presentation() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/admin`)
      .then((res) => res.data)
      .then((data) => {
        setAdmins(data);
        console.log("admin", data);
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
        {admins.map((admin) => (
          <CardAdmins key={admin.idadmin} admin={admin} />
        ))}
        <Favourites />
      </div>
    </div>
  );
}
