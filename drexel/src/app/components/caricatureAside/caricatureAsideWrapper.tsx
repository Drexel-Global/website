import React from "react";
import styles from "./caricatureAsideWrapper.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const CaricatureAsideWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();

  const position = useTransform(
    scrollYProgress,
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [
      "relative",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
      "sticky",
    ]
  );

  return (
    <div className={styles.container}>
      <motion.h2 className={styles.header} style={{ position, top: "100px" }}>
        Our Services
      </motion.h2>
      {children}
    </div>
  );
};
