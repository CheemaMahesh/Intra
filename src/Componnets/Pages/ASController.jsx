import React, { useState } from "react";
import SignIn from '../Auth/SignIn';
import SignUp from "../Auth/SignUp";
import styles from "./AsController.module.css";

export default function AsController() {
  const [AuthS, setAuthS] = useState(true);

  function AuthSHandler() {
    setAuthS(!AuthS);
  }

  return (
    <div className={styles.asControllerContainer}>
      {AuthS ? (
        <div className={styles.authComponent}>
          <SignIn />
          <button
            className={styles.authButton}
            onClick={AuthSHandler}
          >
            Don't Have an Account? Create One.
          </button>
        </div>
      ) : (
        <div className={styles.authComponent}>
          <SignUp />
          <button
            className={styles.authButton}
            onClick={AuthSHandler}
          >
            Already a User? Log In.
          </button>
        </div>
      )}
    </div>
  );
}
