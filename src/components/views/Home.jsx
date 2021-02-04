import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Home2.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Link to="/présentation">
          <h2 className={styles.title}>About Me</h2>
        </Link>
      </section>
      <section className={styles.section}>
      <Link to="/projects">
          <h2 className={styles.title}>Projects</h2>
        </Link>
      </section>
      <section className={styles.section}>
      <Link to="/contact">
          <h2 className={styles.title}>Contact Me</h2>
        </Link>
      </section>
      <section className={styles.section}></section>
    </div>
  );
}