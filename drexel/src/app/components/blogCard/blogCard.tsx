import React, { useRef } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "./blogsCard.module.scss";

type blogsProps = {
  id: number;
  image: string;
  description: string;
  blogName: string;
  alt: string;
};

export const BlogCard = ({
  id,
  image,
  description,
  blogName,
  alt,
}: blogsProps) => {
  return (
    <Link className={styles.container} href={`/blog/${id}`}>
      <div className={styles.imgContainer}>
        <CldImage
          className={styles.blogImg}
          src={image}
          alt={alt}
          fill={true}
        />
      </div>
      <div className={styles.content}>
        <h4>{blogName}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};
