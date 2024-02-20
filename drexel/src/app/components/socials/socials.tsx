import React from "react";
import styles from "./socials.module.scss";
import { socials } from "@/app/data/socials";
import { CldImage } from "next-cloudinary";

export const Socials = () => {
  return (
    <div className={styles.container}>
      <a href="tel:13055271186">+1-(305)-527-1186</a>
      <div className={styles.socialsContainer}>
        {socials.map((platform) => {
          return (
            <CldImage
              key={platform.id}
              className={styles.img}
              src={platform.src}
              height={50}
              width={50}
              alt={platform.alt}
              priority={true}
            />
          );
        })}
      </div>
    </div>
  );
};
