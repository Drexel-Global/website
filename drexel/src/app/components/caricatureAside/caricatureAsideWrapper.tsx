import React from "react";
import styles from "./caricatureAsideWrapper.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { routeToIndex } from "@/app/utils/scrollTo";
import { services } from "@/app/data/services";

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
  const top = useTransform(scrollYProgress, [0, 0.15], [300, 0]);

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
        {services.map((service) => {
          return (
            <motion.a
              className={styles.navLink}
              style={{ top, opacity }}
              onClick={() =>
                routeToIndex(
                  typeof service.scrollId === "string" ? service.scrollId : ""
                )
              }
            >
              {service.serviceName}
            </motion.a>
          );
        })}
        <motion.a
          style={{ top, opacity }}
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
