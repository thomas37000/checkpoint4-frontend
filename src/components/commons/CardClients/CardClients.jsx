import React from "react";
import PropTypes from "prop-types";
import styles from "./CardClients.module.css";

export default function CardClients({ clients }) {

  return (
    <div className={styles.divCardClients}>
      <div className={styles.CardClients}>
        <div>
          <img
            className={styles.logoClients}
            src={clients.logo}
            alt={clients.name}
          />
        </div>
        <div>
          <h3>{clients.name}</h3>
        </div>
      </div>
    </div>
  );
}

CardClients.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};
