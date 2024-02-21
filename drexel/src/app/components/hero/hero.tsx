import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import {
  heroImages,
  // getImageUrlWithWidth,
} from "@/app/assets/heroImages/heroImages";
import { ScrollComponent } from "../ScrollComponent/scrollComponent";
import { motion, useScroll, useTransform } from "framer-motion";
import { routeToIndex } from "@/app/utils/scrollTo";
import { CldImage } from "next-cloudinary";

// components:
import { Socials } from "../socials/socials";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [innerWidth, setInnerWidth] = useState<number>();
  // const [desiredWidth, setDesiredWidth] = useState<number>(500);

  // const desiredWidth = 500;
  // const sanitizedUrl = getImageUrlWithWidth(heroImages.bullish, desiredWidth);
  // console.log(sanitizedUrl);

  useEffect(() => {
    if (window) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

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

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 4]);

  return (
    <motion.div
      className={styles.container}
      style={{ position: "relative", top, left, opacity }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "calc(100dvh - 70px)",
          position: "absolute",
          scale,
          top: 0,
        }}
      >
        <CldImage
          className={styles.heroImg}
          src={heroImages.background}
          fill={true}
          alt="tall buildings in financial district"
          priority={true}
          sizes="(max-width: 1201px) 100vw"
        />
      </motion.div>
      {/* LEFT SIDE MONEY SIGNS: */}
      {/* <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
      />
      <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "61%",
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
      />
      <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
        alt="dollar"
        translateRightAmount={null}
        translateLeftAmount={null}
        position="absolute"
        text={null}
        flexDirection={null}
        topProgression={[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
        topDefinition={[
          "75%",
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
      /> */}
      {/* RIGHT SIDE MONEY SIGNS:  */}
      {/* <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
      />
      <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
      />
      <ScrollComponent
        isHero={true}
        serviceName={null}
        scrollId={null}
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
        imageSource={heroImages.money2}
        width={innerWidth && innerWidth <= 1201 ? 75 : 150}
        height={innerWidth && innerWidth <= 1201 ? 75 : 150}
      /> */}
      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          style={{
            left,
            top,
          }}
        >
          <h1>Drexel Global Consulting Wealth Management</h1>
          <p>
            Unlocking your financial potential starts with partnering with
            Drexel Financial Services. With our unwavering commitment to your
            success, we offer more than just financial services – we offer a
            pathway to your aspirations. Our team of seasoned experts provides
            tailored solutions designed to maximize your wealth and secure your
            financial future. At Drexel Financial Services, we prioritize
            transparency, integrity, and trust, ensuring that every decision is
            made with your best interests at heart. Experience the difference of
            personalized attention and strategic guidance that sets us apart.
            Trust in us to navigate the complexities of finance while you focus
            on what truly matters – achieving your dreams.
          </p>

          <button onClick={() => routeToIndex("services")}>Our Services</button>
        </motion.div>

        <motion.div
          className={styles.imgWrapper}
          style={{
            right,
            bottom,
            transform:
              innerWidth && innerWidth <= 1201 ? "translateX(-50%)" : "none",
            zIndex: "2",
            objectFit: "cover",
          }}
        >
          <CldImage
            className={styles.img}
            src={heroImages.bullish}
            width={600}
            height={600}
            alt="bullish stock market animation"
          />
        </motion.div>
      </div>
      <div>
        <Socials />
      </div>
    </motion.div>
  );
};
