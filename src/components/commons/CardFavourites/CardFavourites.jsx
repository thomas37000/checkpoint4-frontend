import React from "react";
import PropTypes from "prop-types";
import styles from "./CardFavourite.module.css";

export default function CardFavourites({ favourite }) {

  return (
    <div className={styles.divCardFavourite}>
      <div className={styles.CardFavourite}>
        <div>
          <img
            className={styles.logoFavourite}
            src={favourite.pictures}
            alt={favourite.name}
          />
        </div>
        <div>
          <h3>{favourite.name}</h3>
        </div>
      </div>
    </div>
  );
}

CardFavourites.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};
