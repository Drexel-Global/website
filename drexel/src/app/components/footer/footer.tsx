"use client";
import React from "react";
import { Socials } from "../socials/socials";
import Link from "next/link";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialsContainer}>
        <Socials position="static" translateVal1="0" translateVal2="0" />
      </div>
      <div className={styles.directory}>
        <Link href="/">Home</Link>
        {/* <Link href="/blogs">Insights</Link> */}
        <Link href="/why-choose-us">Why Choose Us</Link>
        <Link href="/attribution">Attribution</Link>
      </div>
      <div className={styles.copyright}>
        <p>
          © 2024 Drexel Global Consulting Wealth Management. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
