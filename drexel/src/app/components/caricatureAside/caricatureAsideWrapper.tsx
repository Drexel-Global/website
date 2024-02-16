import React, { useState } from "react";
import styles from "./caricatureAsideWrapper.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { routeToIndex } from "@/app/utils/scrollTo";
import { services } from "@/app/data/services";

const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 0;

export const CaricatureAsideWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();
  let startPoint = 0;
  let endPoint = 0;
  const [currTab, setCurrTab] = useState("1");

  const assignCurrentTab = (tabClicked: string) => {
    setCurrTab(tabClicked);
  };
  console.log("AFTER SET OUTTER: ", currTab);

  if (viewportHeight >= 2000) {
    startPoint = 0.91;
    endPoint = 0.94;
  }

  if (viewportHeight >= 1500 && viewportHeight <= 1999) {
    startPoint = 0.85;
    endPoint = 0.88;
  }
  if (viewportHeight >= 1000 && viewportHeight <= 1499) {
    startPoint = 0.77;
    endPoint = 0.8;
  }
  if (viewportHeight >= 500 && viewportHeight <= 999) {
    startPoint = 0.6;
    endPoint = 0.63;
  }

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, startPoint, endPoint],
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
      <motion.div
        className={styles.pageNav}
        style={{ top, opacity, borderRight: "1px solid white" }}
      >
        {services.map((service) => {
          return (
            <motion.p
              key={service.scrollId && parseInt(service.scrollId)}
              className={`${styles.navLink} ${
                currTab === service.scrollId ? styles.active : ""
              }`}
              style={{ top, opacity, textAlign: "center" }}
              onClick={() => {
                routeToIndex(
                  typeof service.scrollId === "string" ? service.scrollId : ""
                );
                assignCurrentTab(
                  typeof service.scrollId === "string" ? service.scrollId : ""
                );
              }}
            >
              {service.serviceName}
            </motion.p>
          );
        })}
        <motion.p
          style={{ top, opacity }}
          className={styles.navLink}
          onClick={() => routeToIndex("investor")}
        >
          The Investor
        </motion.p>
      </motion.div>
      {children}
    </div>
  );
};
