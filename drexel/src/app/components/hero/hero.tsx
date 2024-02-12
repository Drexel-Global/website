import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.scss";
import { heroImages } from "@/app/assets/heroImages/heroImages";
import { ScrollImage } from "../scrollImage/scrollImage";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <ScrollImage
        topProgression={[0, 0.5, 1]}
        topDefinition={["41%", "100%", "100%"]}
        leftProgression={[0, 0.5, 1]}
        leftDefinition={["4%", "-100%", "-100%"]}
        imageSource={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />

      <Image
        className={styles.money2}
        src={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <Image
        className={styles.money3}
        src={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <Image
        className={styles.money4}
        src={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <Image
        className={styles.money5}
        src={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <Image
        className={styles.money6}
        src={heroImages.money}
        width={150}
        height={150}
        alt="dollar"
      />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1>Drexel Financial Services</h1>
          <p>"Some Tag Line Here"</p>
          <Link href="/why-us">
            <button>Why Drexel</button>
          </Link>
        </div>
        <div className={styles.bullishContainer}>
          <Image
            src={heroImages.bullish}
            fill={true}
            alt="bullish stock market animation"
          />
        </div>
      </div>
    </div>
  );
};
