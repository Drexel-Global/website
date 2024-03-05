"use client";
import { CldImage } from "next-cloudinary";
import React from "react";
import styles from "./aboutMeTeaser.module.scss";
import dynamic from "next/dynamic";

import BallSpinner from "../loaders/ballSpinner";

const HeavyCtaButton = dynamic(() => import("../ctaButton/ctaButton"), {
  ssr: false,
  loading: () => (
    <div>
      <BallSpinner />
    </div>
  ),
});

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
            clients make savvy investment decisions. Our services include
            managing portfolios tailored to clients' objectives and risk
            tolerance. Izhar possesses expert knowledge in how institutions
            manage their own money, and he is committed to bringing this
            valuable insight to our clients. Trust us to provide comprehensive
            wealth management solutions backed by years of experience and a deep
            understanding of the industry." Please feel free to make any
            adjustments or additions to the response as per your requirements
          </p>
          <HeavyCtaButton type="performance" textContent="Past Performance" />
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
