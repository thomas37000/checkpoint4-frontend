
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <Link to="/admin">Admin</Link>
        <Link to="/présentation">Présentation</Link>
        <Link to="/projects">Projects</Link>
      </header>
    </>
  );
}