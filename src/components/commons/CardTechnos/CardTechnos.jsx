import React from "react";
import PropTypes from "prop-types";
import styles from "./CardTechno.module.css";

export default function CardTechnos(techno) {
  return (
    <div className={styles.divCardAdmin}>
      <div className={styles.CardAdmin}>
        <div>
          <img
            className={styles.logoAdmin}
            src={techno.logo}
            alt={techno.name}
          />
        </div>
        <div>
          <h2>{techno.name}</h2>
        </div>
      </div>
    </div>
  );
}

CardTechnos.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};