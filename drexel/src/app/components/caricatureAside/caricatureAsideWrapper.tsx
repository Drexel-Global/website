import React from "react";
import styles from "./caricatureAsideWrapper.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { routeToIndex } from "@/app/utils/scrollTo";

export const CaricatureAsideWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75, 0.77],
    [0, 1, 1, 0]
  );
  const top = useTransform(scrollYProgress, [0, 0.2], [300, 0]);

  return (
    <div className={styles.container} id="services">
      <motion.h2
        className={styles.header}
        style={{
          zIndex: 10,
          top,
          opacity,
          paddingBottom: "1rem",
        }}
      >
        Our Services
      </motion.h2>
      <motion.div className={styles.pageNav} style={{ top, opacity }}>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("1")}>
          Service 1
        </motion.a>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("2")}>
          Service 2
        </motion.a>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("3")}>
          Service 3
        </motion.a>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("4")}>
          Service 4
        </motion.a>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("5")}>
          Service 5
        </motion.a>
        <motion.a className={styles.navLink} onClick={() => routeToIndex("6")}>
          Service 6
        </motion.a>
        <motion.a
          className={styles.navLink}
          onClick={() => routeToIndex("investor")}
        >
          The Investor
        </motion.a>
      </motion.div>
      {children}
    </div>
  );
};
