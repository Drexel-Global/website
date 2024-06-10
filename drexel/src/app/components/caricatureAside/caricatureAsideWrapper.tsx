import React, { useState, useEffect } from "react";
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
  let startPoint = 0;
  let endPoint = 0;
  const [innerHeight, setInnerHeight] = useState<number>();
  const [furthestNorthId, setFurthestNorthId] = useState<string | null>(null);

  useEffect(() => {
    if (window) {
      setInnerHeight(window.innerHeight);
    }
    const handleScroll = () => {
      // Initialize variables to keep track of the furthest north element
      let furthestTop = Number.POSITIVE_INFINITY;
      let furthestId = null;

      // Iterate through each service
      services.forEach((service) => {
        // Get the corresponding element by its ID
        const element = document.getElementById(service.scrollId || "");
        if (element) {
          // Get the bounding rectangle of the element
          const rect = element.getBoundingClientRect();

          // Check if the element is the furthest north
          if (rect.top < furthestTop && rect.top >= 0) {
            furthestTop = rect.top;
            furthestId = service.scrollId;
          }
        }
      });

      // Set the furthest north element's ID
      setFurthestNorthId(furthestId);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (innerHeight && innerHeight >= 2000) {
    startPoint = 0.91;
    endPoint = 0.98;
  }

  if (
    innerHeight &&
    innerHeight >= 1500 &&
    innerHeight &&
    innerHeight <= 1999
  ) {
    startPoint = 0.85;
    endPoint = 0.88;
  }
  if (
    innerHeight &&
    innerHeight >= 1000 &&
    innerHeight &&
    innerHeight <= 1499
  ) {
    startPoint = 0.77;
    endPoint = 0.8;
  }
  if (innerHeight && innerHeight >= 500 && innerHeight && innerHeight <= 999) {
    startPoint = 0.6;
    endPoint = 0.63;
  }

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, startPoint, endPoint],
    [0, 1, 1, 0]
  );

  let transitionEndPoint: number = 0.15;
  let topPosition: number = 300;

  if (innerHeight && innerHeight <= 1100) {
    transitionEndPoint = 0.1;
    topPosition = 50;
  }
  const top = useTransform(
    scrollYProgress,
    [0, transitionEndPoint],
    [topPosition, 0]
  );

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
        {/* <motion.p
          style={{ top, opacity }}
          className={styles.navLink}
          onClick={() => routeToIndex("investor")}
        >
          The Managing Director
        </motion.p> */}
        {services.map((service) => {
          return (
            <motion.p
              key={service.scrollId && parseInt(service.scrollId)}
              className={`${styles.navLink} ${
                furthestNorthId === service.scrollId ? styles.active : ""
              }`}
              style={{ top, opacity, textAlign: "center" }}
              onClick={() => {
                routeToIndex(
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
          onClick={() => routeToIndex("why-choose-us")}
        >
          Why Choose Us
        </motion.p>
      </motion.div>
      {children}
    </div>
  );
};
