import React from "react";
import PropTypes from "prop-types";
import styles from "./CardFavourite.module.css";

export default function CardFavourites({ favourite }) {
  return (
    <div className={styles.divCardAdmin}>
      <div className={styles.CardAdmin}>
        <div>
          <img
            className={styles.logoAdmin}
            src={favourite.pictures}
            alt={favourite.name}
          />
        </div>
        <div>
          <h2>{favourite.name}</h2>
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

CardFavourites.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};

