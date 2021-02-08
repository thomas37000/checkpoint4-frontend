import React from "react";
import PropTypes from "prop-types";
import styles from "./CardAdminBis.module.css";

export default function CardAdminBis({ admin }) {
  return (
    <div>
      <div className={styles.FicheAdmin}>
        <div className={styles.divTitle}>
          <h1>
            {admin.firstname} {admin.lastname}
          </h1>
        </div>
        <div className={styles.divAdmin}>
          <img
            className={styles.logoAdmin}
            src={admin.pictures}
            alt={admin.firstname}
          />
          <div className={styles.divPresentation}>
            <h2>Full Stack Develloppeur</h2>
            <div className={styles.email}>
              <h3>{admin.email}</h3>
            </div>
            <h4 className={styles.presentation}>Présentation</h4>
            <p className={styles.textPresentation}>{admin.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardAdminBis.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};
