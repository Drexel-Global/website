"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./nav.module.scss";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { routeToIndex } from "@/app/utils/scrollTo";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import BallSpinner from "../ctaButton/ctaButton";

const HeavyCtaButton = dynamic(() => import("../ctaButton/ctaButton"), {
  ssr: false,
  loading: () => (
    <div>
      <BallSpinner />
    </div>
  ),
});

export const Nav = () => {
  const currPath = usePathname();
  const { scrollYProgress } = useScroll();
  const [responseLogoPosition, setResponseLogoPosition] = useState<
    Array<string>
  >(["1rem", "4rem"]);
  const [responsiveSize, setResponsiveSize] = useState<string>("15rem");
  const [ctaElement, setCtaElement] = useState<HTMLElement>();

  useEffect(() => {
    if (window && window.innerWidth > 481 && window.innerWidth <= 1025) {
      setResponseLogoPosition(["1rem", "2rem"]);
      setResponsiveSize("8rem");
    }
    if (window && window.innerWidth <= 481) {
      setResponseLogoPosition(["1rem", "1rem"]);
      setResponsiveSize("5rem");
    }
  }, []);

  const width = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["5rem", responsiveSize]
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["5rem", responsiveSize]
  );

  const top = useTransform(scrollYProgress, [0, 0.1], responseLogoPosition);

  const toggleModal = () => {
    ctaElement?.click();
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoSection}>
        <motion.div
          className={styles.logoContainer}
          style={{
            width: currPath === "/" ? width : "5rem",
            height: currPath === "/" ? height : "5rem",
            top: currPath === "/" ? top : "1rem",
          }}
        >
          <CldImage
            src="drexel-finance-website/landing/xijigz1oqppfnjbdumgo"
            fill={true}
            className={styles.logo}
            id="logo"
            onClick={() => routeToIndex("logo")}
            alt="company logo"
          />
        </motion.div>
      </div>
      <div className={styles.linkSection}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* <li>
            <Link href="blogs">Our Insights</Link>
          </li> */}
          <li>
            <Link href="why-choose-us">Why Choose Us</Link>
          </li>
          <div className={styles.btnContainer}>
            <HeavyCtaButton />
          </div>
        </ul>
      </div>
    </nav>
  );
};
