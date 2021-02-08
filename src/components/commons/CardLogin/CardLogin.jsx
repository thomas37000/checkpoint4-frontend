import React from "react";
// import PropTypes from "prop-types";
import styles from "./CardLogin.module.css";

const CardLogin = () => {
  return (
    <div>
      <div className={styles.loginWrap}>
        <div className={styles.loginHtml}>
          <input id="tab-1" type="radio" name="tab" className={styles.signIn} checked />
          <label for="tab-1" className={styles.tab}>
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className={styles.signUp}/>
          <label for="tab-2" className={styles.tab}>
            Sign Up
          </label>
          <div className={styles.loginForm}>
            <div className={styles.signInHtml}>
              <div className={styles.group}>
                <label for="user" className={styles.label}>
                  Username
                </label>
                <input id="user" type="text" className={styles.input} />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                />
              </div>
              <div className={styles.group}>
                <input id="check" type="checkbox" className={styles.check} checked />
                <label for="check">
                  <span className={styles.icon}></span> Keep me Signed in
                </label>
              </div>
              <div className={styles.group}>
                <input type="submit" className={styles.button} value="Sign In" />
              </div>
              <div className={styles.hr}></div>
              <div className={styles.footLnk}>
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className={styles.signUpHtml}>
              <div className={styles.group}>
                <label for="user" className={styles.label}>
                  Username
                </label>
                <input id="user" type="text" className={styles.input} />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                />
              </div>
              <div className={styles.group}>
                <label for="pass" className={styles.label}>
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                />
              </div>
              <div className="group">
                <label for="pass" className={styles.label}>
                  Email Address
                </label>
                <input id="pass" type="text" className={styles.input} />
              </div>
              <div className={styles.group}>
                <input type="submit" className={styles.button} value="Sign Up" />
              </div>
              <div className={styles.hr}></div>
              <div className={styles.footLnk}>
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CardLogin.propTypes = {};

export default CardLogin;
