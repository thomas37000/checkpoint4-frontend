import React from "react";
import PropTypes from "prop-types";
import styles from "./CardProjects.module.css";

export default function CardProjects(projects) {
  return (
    <div className={styles.projects}>
      <div className={styles.contents}>
        <div className={styles.box}>
          <h2>{projects.name}</h2>
          <img src={projects.pictures} alt={projects.name} />
          <p>{projects.description}</p>
          <p>
            <a className={styles.disabled} href={projects.links}>
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


CardProjects.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
};
