"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import styles from "./aboutMeTeaser.module.scss";

export const AboutMeTeaser = () => {
  return (
    <div className={styles.container} id="investor">
      {/* <div className={styles.circle} /> */}

      <h2>The Investor</h2>
      <div className={styles.contentSection}>
        <div className={styles.textSection}>
          <h3>Izhar Shefer</h3>
          <p>
            Izhar Shefer is the managing director of drexel global cosulting ,
            bringing with him 30 years of experience in wealth management. With
            a strong background in consulting, Izhar is dedicated to helping
            clients make savvy investment decisions.
          </p>
          <div className={styles.btnContainer}>
            <Link href="about-investor">
              <button className={styles.ctaBtn}>About Izhar Shefer</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <CldImage
            className={styles.investorImage}
            src="drexel-finance-website/landing/l8xmg7xrix94gd0fi62n"
            width={300}
            height={300}
            alt="the investor"
          />
        </div>
      </div>
    </div>
  );
};
