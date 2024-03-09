import React, { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import { heroImages } from "@/app/assets/heroImages/heroImages";
import { motion, useScroll, useTransform } from "framer-motion";
// import { routeToIndex } from "@/app/utils/scrollTo";
import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import BallSpinner from "../loaders/ballSpinner";

// components:
import { Socials } from "../socials/socials";

const HeavyCtaButton = dynamic(() => import("../ctaButton/ctaButton"), {
  ssr: false,
  loading: () => (
    <div>
      <BallSpinner />
    </div>
  ),
});

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const [innerWidth, setInnerWidth] = useState<number>();

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
      <div className={styles.content}>
        <motion.div
          className={styles.textContainer}
          style={{
            left,
            top,
          }}
        >
          <h1>Drexel Global Consulting Wealth Management</h1>

          <h3 className={styles.headlineMobile}>
            Unlocking your financial potential starts by partnering with
          </h3>
          <h3 className={styles.drexel}>Drexel!</h3>

          <p className={styles.headlineTabAndUp}>
            Unlocking your financial potential starts by partnering with Drexel
            Financial Services. With our unwavering commitment to your success,
            we offer more than just financial services – we offer a pathway to
            your aspirations. Our team of seasoned experts provides tailored
            solutions designed to maximize your wealth and secure your financial
            future. At Drexel Financial Services, we prioritize transparency,
            integrity, and trust, ensuring that every decision is made with your
            best interests at heart. Experience the difference of personalized
            attention and strategic guidance that sets us apart. Trust in us to
            navigate the complexities of finance while you focus on what truly
            matters – achieving your dreams.
          </p>

          <HeavyCtaButton type="contact" textContent="Let's Do Business" />
          <HeavyCtaButton type="performance" textContent="Past Performance" />
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

          <iframe
            className={styles.reviews}
            src="https://afb93a38dca34e9389f3aea070402c25.elf.site"
            width="100%"
            height="1000"
            // @ts-ignore
            frameborder="0"
          ></iframe>
        </motion.div>
      </div>
      <div>
        <Socials position="absolute" translateVal2="-50" translateVal1="-50" />
      </div>
    </motion.div>
  );
};
