import React from "react";
import styles from "./caricatureAside.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const CaricatureAside = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0, 0.5, 1, 1]
  );
  const position = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["relative", "sticky", "sticky"]
  );

  return (
    <div className={styles.container}>
      <motion.h2
        className={styles.header}
        style={{ opacity, position, top: "100px" }}
      >
        Why You Should Work With Us?
      </motion.h2>
    </div>
  );
};
