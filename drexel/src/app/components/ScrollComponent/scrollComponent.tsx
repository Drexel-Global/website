import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
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
  flexDirection: "row" | "row-reverse" | null;
  translateRightAmount: number | null;
  translateLeftAmount: number | null;
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
}: ScrollImageProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll();

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
    <motion.div
      className={styles.container}
      ref={text ? ref : null}
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
              height: "50dvh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: flexDirection || "row",
            }
      }
    >
      <motion.div
        ref={text ? ref : null}
        className={text ? styles.section : ""}
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
          <Image src={imageSource} width={width} height={height} alt={alt} />
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
  );
};
