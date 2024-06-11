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
  alt: string;
  categories: {
    data: Array<{
      id: number;
      attributes: {
        text: string;
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
  alt,
}: blogsProps) => {
  return (
    <Link className={styles.container} href={`/blogs/${slug}`}>
      <div className={styles.imgContainer}>
        <CldImage
          className={styles.blogImg}
          src={previewImage}
          // TO DO: fix alt
          alt={alt}
          fill={true}
        />
      </div>
      <div className={styles.content}>
        {categories?.data?.map((cat) => {
          let color = "";
          if (cat?.attributes.text === "Technical") color = "red";
          if (cat?.attributes.text === "Opinion") color = "green";
          if (cat?.attributes.text === "Advice") color = "yellow";
          return (
            <div key={id} className={styles.catContainer}>
              <div
                style={{ backgroundColor: color }}
                className={styles.bullet}
              ></div>
              <p>{cat?.attributes?.text}</p>
            </div>
          );
        })}
        <p className={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};
