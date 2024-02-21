"use client";
import React from "react";
import styles from "./styles.module.scss";
import { CldImage } from "next-cloudinary";

const WhyUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImgContainer}>
        <CldImage
          className={styles.headerImg}
          src="drexel-finance-website/landing/rqhvqlo4aqfmumad9swi"
          fill={true}
          alt="the investor"
        />
      </div>
      <div className={styles.section}>Section</div>
    </div>
  );
};

export default WhyUsPage;
