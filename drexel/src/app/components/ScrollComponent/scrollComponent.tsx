import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CldImage } from "next-cloudinary";

import styles from "./scrollComponent.module.scss";

type ScrollImageProps = {
  topProgression: Array<number> | null;
  topDefinition: Array<string> | null;
  leftProgression: Array<number> | null;
  leftDefinition: Array<string> | null;
  rightProgression: Array<number> | null;
  rightDefinition: Array<string> | null;
  imageSource: string | null;
  width: number | null;
  height: number | null;
  alt: string | null;
  text: string | null;
  position: "absolute" | "relative" | null;
  flexDirection: "row" | "row-reverse" | "column" | null;
  translateRightAmount: number | null;
  translateLeftAmount: number | null;
  scrollId: string | null | undefined;
  serviceName: string | null;
  isHero: boolean;
};

export const ScrollComponent = ({
  topProgression,
  topDefinition,
  leftProgression,
  leftDefinition,
  rightProgression,
  rightDefinition,
  imageSource,
  width,
  height,
  alt,
  text,
  position,
  flexDirection,
  translateLeftAmount,
  translateRightAmount,
  scrollId,
  serviceName,
  isHero,
}: ScrollImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    if (window) {
      setIsMobile(window && window.innerWidth <= 1025);
    }
  }, []);

  const flDirection: "row" | "row-reverse" | "column" | null = isMobile
    ? "column"
    : flexDirection;

  let top;
  let left;
  let right;

  if (topProgression && topDefinition)
    top = useTransform(scrollYProgress, topProgression, topDefinition);

  if (leftDefinition && leftProgression)
    left = useTransform(scrollYProgress, leftProgression, leftDefinition);

  if (rightDefinition && rightProgression)
    right = useTransform(scrollYProgress, rightProgression, rightDefinition);

  return (
    <div className={styles.container}>
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.headerContainer}
      >
        <h3>{serviceName}</h3>
      </motion.div>

      <motion.div
        className={styles.content}
        ref={text ? ref : null}
        // @ts-ignore
        style={
          position === "absolute"
            ? {
                position,
                top,
                left,
                right,
                zIndex: "1",
              }
            : {
                // height: "35dvh",
                flexDirection: flDirection,
              }
        }
      >
        <motion.div
          className={text ? styles.section : ""}
          id={scrollId ? scrollId : undefined}
          ref={text ? ref : null}
          style={
            text
              ? {
                  transform: isInView
                    ? "none"
                    : `translateX(${translateLeftAmount}px)`,
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }
              : {}
          }
        >
          {imageSource && width && height && alt && (
            <CldImage
              className={text === null ? styles.moneyImg : styles.img}
              src={imageSource}
              width={width}
              height={height}
              alt={alt}
              priority={isHero !== null && isHero}
            />
          )}
        </motion.div>
        {text && (
          <motion.div
            className={text ? styles.section : ""}
            style={{
              transform: isInView
                ? "none"
                : `translateX(${translateRightAmount}px)`,
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
            }}
          >
            <p className={styles.text}>{text}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
