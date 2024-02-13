import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import { heroImages } from "@/app/assets/heroImages/heroImages";
import { ScrollComponent } from "../ScrollComponent/scrollComponent";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const routeToIndex = () => {
    const element = document.getElementById("services");
    if (element) {
      const navbarHeight = 100;
      const offset = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const right = useTransform(
    scrollYProgress,
    [0, 0.4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [
      "0%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
    ]
  );

  const bottom = useTransform(
    scrollYProgress,
    [0, 0.4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [
      "0%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
      "-15%",
    ]
  );

  const left = useTransform(
    scrollYProgress,
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [
      "0%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
    ]
  );

  const top = useTransform(
    scrollYProgress,
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [
      "0%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
      "-1500%",
    ]
  );

  return (
    <motion.div
      className={styles.container}
      style={{ position: "relative", top, left }}
    >
      {/* LEFT SIDE MONEY SIGNS: */}
      <ScrollComponent
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "41%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
          "1500%",
        ]}
        leftProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        leftDefinition={[
          "4%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
          "-2500%",
        ]}
        rightDefinition={null}
        rightProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
      />
      <ScrollComponent
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "65%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
        ]}
        leftProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        leftDefinition={[
          "30%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
        ]}
        rightDefinition={null}
        rightProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
      />
      <ScrollComponent
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "25%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
        ]}
        leftProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        leftDefinition={[
          "15%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
        ]}
        rightDefinition={null}
        rightProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
      />
      {/* RIGHT SIDE MONEY SIGNS:  */}
      <ScrollComponent
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "40%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
          "-250%",
        ]}
        rightProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        rightDefinition={[
          "20%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
        ]}
        leftDefinition={null}
        leftProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
      />
      <ScrollComponent
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "70%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
          "1000%",
        ]}
        rightProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        rightDefinition={[
          "20%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
        ]}
        leftDefinition={null}
        leftProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
      />
      <ScrollComponent
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "20%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
          "-1000%",
        ]}
        rightProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        rightDefinition={[
          "30%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
          "-2000%",
        ]}
        leftDefinition={null}
        leftProgression={null}
        imageSource={heroImages.money}
        width={150}
        height={150}
      />
      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          style={{
            position: "relative",
            left,
            top,
          }}
        >
          <h1>Drexel Financial Services</h1>
          <p>"Some Tag Line Here"</p>

          <button onClick={() => routeToIndex()}>Our Services</button>
        </motion.div>
        <motion.div
          style={{
            position: "relative",
            right,
            bottom,
            width: "60rem",
            height: "60rem",
            zIndex: "2",
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
