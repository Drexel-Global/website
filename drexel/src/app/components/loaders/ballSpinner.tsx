import React from "react";
import styles from "./ballSpinner.module.scss";

const BallSpinner = () => {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BallSpinner;
