import React, { useState, useEffect } from "react";
import axios from "axios";
// import styles from "../css/Présentation.module.css";
import CardFavourites from "../commons/CardFavourites/CardFavourites";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

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
    <div>
      <div>
        {favourites.map((favourite) => (
          <CardFavourites key={favourite.idfavourite} favourite={favourite} />
        ))}
      </div>
    </div>
  );
}
