"use client";
import React from "react";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import Link from "next/link";

// components:
import { BlogCard } from "../../components/blogCard/blogCard";

type currentCategory = string;
type articlesType = Array<{
  id: number;
  attributes: {
    Title: string;
    description: string;
    updatedAt: string;
    publishedAt: string;
    alt: string;
    previewImage: {
      data: {
        attributes: {
          formats: {
            medium: {
              url: string;
            };
          };
        };
      };
    };
    categories: {
      data: Array<{
        id: number;
        attributes: {
          text: string;
        };
      }>;
    };
    slug: string;
  };
}>;

type relatedPostProps = {
  articles: articlesType;
  currentCategory: currentCategory;
};

const RelatedPosts = ({ articles, currentCategory }: relatedPostProps) => {
  const current = useParams();

  const generateRandomArticles = (
    articles: articlesType,
    currentCategory: currentCategory
  ): articlesType => {
    const filteredArticles = articles.filter(
      (article) =>
        article.attributes.slug !== current?.slug &&
        article.attributes.categories.data.some(
          (category) => category.attributes.text === currentCategory
        )
    );
    const shuffled = filteredArticles.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const recommendedArticles = generateRandomArticles(articles, currentCategory);
  // TO DO: Related posts needs to be fixed to enable less than 3 reccommendations to be shown.
  return (
    <div className={styles.container}>
      <div>
        <h1>Related Posts:</h1>
      </div>
      <div className={styles.articleContainer}>
        {recommendedArticles.length === 0 && (
          <div className={styles.emptyListConatiner}>
            <h3>
              {`There are no more ${currentCategory} articles available. But, there are other blogs! Fell free to check those out here!`}
            </h3>
            <Link href="/blogs">
              <button className={styles.ctaBtn}>View Blogs</button>
            </Link>
          </div>
        )}
        {recommendedArticles?.map((articles) => {
          return (
            <BlogCard
              key={articles?.id}
              id={articles?.id}
              title={articles?.attributes?.Title}
              description={articles?.attributes?.description}
              previewImage={
                articles?.attributes?.previewImage?.data?.attributes?.formats
                  ?.medium?.url
              }
              categories={articles?.attributes?.categories}
              slug={articles?.attributes?.slug}
              alt={articles?.attributes?.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
