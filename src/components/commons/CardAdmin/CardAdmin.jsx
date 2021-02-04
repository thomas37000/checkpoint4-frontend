import React from "react";
import PropTypes from "prop-types";
import styles from "./CardAdmin.module.css";

export default function CardAdmin({ admin }) {
  return (
    <div className={styles.divCardAdmin}>
      <div className={styles.CardAdmin}>
        <div>
          <div className={styles.description}>
            <h1>
              {admin.firstname} {admin.lastname}
            </h1>
            <h2>Full Stack Develloppeur</h2>
            <h4>{admin.email}</h4>
            <img
              className={styles.logoAdmin}
              src={admin.pictures}
              alt={admin.firstname}
            />
          </div>
          <figure className={styles.desktop}></figure>

          <h4>{admin.date}</h4>
          <div className={styles.descriptionBG}>
            <p>{admin.description}</p>
          </div>
        </div>
      </div>
      {/* <Button
        color="success"
        onClick={toggle}
        style={{ marginBottom: "1rem" }}
      >
        Présentation
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody> 
        </CardBody>
        </Card>
      </Collapse> */}
    </div>
  );
}

CardAdmin.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};
