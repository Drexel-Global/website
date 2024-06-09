import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

// utils:
import dateUtils from "../../utils/dateUtils";

type ArticleHeroProps = {
  section: {
    id: number;
    __component: string;
    imageSource: {
      data: {
        id: string;
        attributes: {
          //   url: string;
          formats: {
            small: {
              url: string;
            };
            medium: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      };
      createdAt: string;
      updatedAt: string;
    };
  };
  categories: {
    data: Array<{
      id: number;
      attributes: {
        text: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }>;
  };
  title: string;
  publishDate: string;
  lastUpdate: string;
};

const ArticleHero = ({
  section,
  title,
  categories,
  publishDate,
  lastUpdate,
}: ArticleHeroProps) => {
  // TO DO: add author & search for other meta data that should be in article.
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={section?.imageSource?.data?.attributes?.formats?.medium.url}
          fill={true}
          alt="hero"
        />
      </div>
      <div className={styles.articleInfo}>
        {categories?.data?.map((cat, index) => {
          let color = "";
          if (cat?.attributes.text === "Technical") color = "red";
          if (cat?.attributes.text === "Opinion") color = "green";
          return (
            <div key={index} className={`${styles.catContainer}`}>
              <div
                style={{ backgroundColor: color }}
                className={styles.bullet}
              ></div>
              <p>{cat?.attributes.text}</p>
            </div>
          );
        })}
        <div className={`${styles.dates} ${styles.info}`}>
          <p>Published On: {dateUtils(publishDate)}</p>
        </div>
        <div className={`${styles.dates} ${styles.info}`}>
          <p>Last Updated On: {dateUtils(lastUpdate)}</p>
        </div>
      </div>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default ArticleHero;
