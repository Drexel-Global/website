"use client";
import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { routeToIndex } from "@/app/utils/scrollTo";
import { motion, useScroll, useTransform } from "framer-motion";

export const Nav = () => {
  const { scrollYProgress } = useScroll();

  // fix logo size on iPhone 12 code here
  const responsiveSize: string =
    window && window.innerWidth <= 1025 ? "8rem" : "15rem";

  const responseLogoPosition: Array<string> =
    window && window.innerWidth <= 600 ? ["1rem", "2rem"] : ["1rem", "4rem"];

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

  return (
    <nav className={styles.container}>
      <div className={styles.logoSection}>
        <motion.div
          className={styles.logoContainer}
          style={{ width, height, top }}
        >
          <Image
            src="https://res.cloudinary.com/db09icibj/image/upload/v1707929283/drexel-finance-website/landing/xijigz1oqppfnjbdumgo.png"
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
            <Link href="about-me">About Me</Link>
          </li>
          <li>
            <Link href="why-us">Why Us</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
