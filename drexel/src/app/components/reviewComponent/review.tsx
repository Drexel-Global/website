import React from "react";
import styles from "./styles.module.scss";

export const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      <iframe
        className={styles.reviews}
        src="https://13ce60677e1d4f528853fb9ba88a9909.elf.site"
        width="100%"
        height="1000"
        // @ts-ignore
        frameborder="0"
      ></iframe>
    </div>
  );
};
