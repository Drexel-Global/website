"use client";
import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { routeToIndex } from "@/app/utils/scrollTo";

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <Image
            src="https://res.cloudinary.com/db09icibj/image/upload/v1707929283/drexel-finance-website/landing/xijigz1oqppfnjbdumgo.png"
            fill={true}
            className={styles.logo}
            id="logo"
            onClick={() => routeToIndex("logo")}
            alt="company logo"
          />
        </div>
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
