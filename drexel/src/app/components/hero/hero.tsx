import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.scss";
import { heroImages } from "@/app/assets/heroImages/heroImages";
import { ScrollComponent } from "../ScrollComponent/scrollComponent";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0, 0]);

  const right = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "-15%", "-15%"]
  );

  const bottom = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "-15%", "-15%"]
  );

  const left = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "-15%", "-15%"]
  );

  const top = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["0%", "-15%", "-15%"]
  );

  return (
    <motion.div
      className={styles.container}
      style={{ position: "relative", opacity, top, left }}
    >
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["41%", "100%", "100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["4%", "-100%", "-100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["30%", "-100%", "-100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["70%", "100%", "100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["65%", "100%", "100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["30%", "-100%", "-100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["70%", "100%", "100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["60%", "100%", "100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["25%", "-100%", "-100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["15%", "-100%", "-100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <ScrollComponent
        topProgression={[0, 0.5, 1]}
        topDefinition={["20%", "-100%", "-100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["50%", "100%", "100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          style={{
            position: "relative",
            left,
            top,
            opacity,
          }}
        >
          <h1>Drexel Financial Services</h1>
          <p>"Some Tag Line Here"</p>
          <Link href="/why-us">
            <button>Why Drexel</button>
          </Link>
        </motion.div>
        <motion.div
          style={{
            position: "relative",
            right,
            bottom,
            width: "50%",
            height: "50%",
            opacity,
          }}
        >
          <Image
            src={heroImages.bullish}
            fill={true}
            alt="bullish stock market animation"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
