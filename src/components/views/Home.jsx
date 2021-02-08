/* eslint-disable no-unused-vars */
import React from "react";
import ScrollMagic from "scrollmagic";
import { Link } from "react-router-dom";
import styles from "../css/Home.module.css";
import "../css/home.css";

export default function Home() {
  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    triggerElement: ".box1",
    reverse: false,
  })

    .setClassToggle(".box1", "fade-in")
    .addIndicators({
      name: "INDICATIONS",
      indent: 200,
      colorStart: "#fff",
    })
    .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".box2",
    reverse: false,
  })

    .setClassToggle(".box2", "fade-in")
    .addIndicators({
      name: "INDICATIONS",
      indent: 200,
      colorStart: "#fff",
    })
    .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".box3",
    reverse: false,
  })

    .setClassToggle(".box3", "fade-in")
    .addIndicators({
      name: "INDICATIONS",
      indent: 200,
      colorStart: "#fff",
    })
    .addTo(controller);

  return (
    <>
      <section>
        <div className={styles.img1}>
          <div class="box box1">
            <h2>Full Stack Developpeur.</h2>
            <Link to="/présentation">
              <button className={styles.learn}>About Me</button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.img2}>
          <div class="box box2">
            <h2>Mes Travaux récents.</h2>

            <div className={styles.text}>
              Voici différents projets que j' ai réalisé dernièrement seul ou en
              équipe à la Wild Code School de Nantes.
            </div>
            <Link to="/projects">
              <button className={styles.learn}>Wiew More</button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.img3}>
          <div class="box box3">
          <div className={styles.text}>
              Page en Construction
            </div>
            <Link to="/contact">
              <button className={styles.learn}>Contact Me</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
