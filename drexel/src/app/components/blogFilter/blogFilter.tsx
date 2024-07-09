"use client";
import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";

// components:
import { BlogCard } from "../blogCard/blogCard";

type BlogFilterProps = {
  articles: Array<{
    id: number;
    attributes: {
      title: string;
      description: string;
      updatedAt: string;
      publishedAt: string;
      previewImage: string;
      alt: string;
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
};

// TO DO: Add services as categories. Add to Strapi as category as well.
const categories = [
  "None",
  "Portfolio Strategy",
  "Opinion",
  "Trusts",
  "Advice",
  "International Account",
];

const BlogFilter = ({ articles }: BlogFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState("None");

  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };
  // TO DO: Style category selector.
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        {/* TO DO: Style select box. */}
        <p>Category:</p>
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option className={styles.option} key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.blogContainer}>
        {articles.map(
          (articles: {
            id: number;
            attributes: {
              title: string;
              description: string;
              updatedAt: string;
              publishedAt: string;
              previewImage: string;
              alt: string;
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
          }) => {
            if (selectedCategory === "None") {
              return (
                <BlogCard
                  key={articles?.id}
                  id={articles?.id}
                  title={articles?.attributes?.title}
                  description={articles?.attributes?.description}
                  previewImage={articles?.attributes?.previewImage}
                  categories={articles?.attributes?.categories}
                  slug={articles?.attributes?.slug}
                  alt={articles?.attributes?.alt}
                />
              );
            } else {
              if (
                selectedCategory ===
                articles?.attributes?.categories?.data[0]?.attributes?.text
              ) {
                return (
                  <BlogCard
                    key={articles?.id}
                    id={articles?.id}
                    title={articles?.attributes?.title}
                    description={articles?.attributes?.description}
                    previewImage={articles?.attributes?.previewImage}
                    categories={articles?.attributes?.categories}
                    slug={articles?.attributes?.slug}
                    alt={articles?.attributes?.alt}
                  />
                );
              }
            }
          }
        )}
      </div>
    </div>
  );
};

export default BlogFilter;
