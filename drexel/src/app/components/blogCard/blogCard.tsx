import React from "react";
import Image from "next/image";
import styles from "./blogCard.module.scss";

type blogCardProps = {
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
}: blogCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={image} alt={alt} fill={true} />
      </div>
      <div className={styles.content}>
        <h4>{blogName}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
