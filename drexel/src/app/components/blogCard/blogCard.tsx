import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "./blogsCard.module.scss";

type blogsProps = {
  id: number;
  title: string;
  description: string;
  previewImage: string;
  slug: string;
  categories: {
    data: Array<{
      id: number;
      attributes: {
        Name: string;
      };
    }>;
  };
};

export const BlogCard = ({
  id,
  title,
  description,
  previewImage,
  slug,
  categories,
}: blogsProps) => {
  return (
    <Link className={styles.container} href={`/blogs/${slug}`}>
      <div className={styles.imgContainer}>
        <CldImage
          className={styles.blogImg}
          src={previewImage}
          // TO DO: fix alt
          alt=""
          fill={true}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
