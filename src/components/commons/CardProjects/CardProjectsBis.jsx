import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./CardProjects.module.css";

class CardProjectsBis extends Component {

  render() {
    const { name, description, links, pictures } = this.props;
    return (
      <div className={styles.projects}>
        <div className={styles.contents}>
          <div className={styles.box}>
            <h2>{name}</h2>
            <img src={pictures} alt={name} />
            <p>{description}</p>
            <p>
              <a className={styles.disabled} href={links}>
                Link
              </a>
            </p>
          </div>
        </div>
        {/* <p>
            <a
              className={styles.disabled}
              href="https://github.com/WildCodeSchool/nts-js-202009-p3-wan"
            >
              GitHub
            </a>
          </p> */}
      </div>
    );
  }
}

CardProjectsBis.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};

export default CardProjectsBis;
