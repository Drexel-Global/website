import React from "react";
import styles from "./socials.module.scss";
import Link from "next/link";
import { socials } from "@/app/data/socials";
import { CldImage } from "next-cloudinary";

type socialsProps = {
  position: "static" | "relative" | "absolute" | "sticky" | "fixed";
  translateVal1: string;
  translateVal2: string;
};

export const Socials = ({
  position,
  translateVal1,
  translateVal2,
}: socialsProps) => {
  return (
    <div
      className={styles.container}
      style={{
        position: position,
        transform: `translate(${translateVal1}%, ${translateVal2}%)`,
      }}
    >
      <a href="tel:13055271186">+1-(305)-527-1186</a>
      <div className={styles.socialsContainer}>
        {socials.map((platform) => {
          return (
            <Link
              href={platform.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CldImage
                key={platform.id}
                className={styles.img}
                src={platform.src}
                height={50}
                width={50}
                alt={platform.alt}
                priority={true}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
