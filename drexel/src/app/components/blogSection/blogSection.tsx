// "use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { BlogCard } from "../blogCard/blogCard";

const BlogSection = () => {
  const [blogs, setBlogs] = useState();
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  useEffect(() => {
    const currentEnvUrls: string =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? "http://localhost:1337/api/blog-articles?populate=*"
        : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blog-articles?populate=*`;
    axios
      .get(currentEnvUrls)
      .then((res) => {
        const blogs = res?.data?.data.map((blog: any) => {
          return {
            ...blog,
            attributes: {
              ...blog?.attributes,
              previewImage:
                blog?.attributes?.previewImage?.data?.attributes?.url,
            },
          };
        });

        setBlogs(blogs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSeeMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  if (!blogs) {
    return null;
  }

  return (
    <>
      <div className={styles.header}>
        <h3>Blogs</h3>
      </div>
      <div className={styles.blogContainer}>
        {blogs &&
          // @ts-ignore
          blogs.slice(0, visibleBlogs).map(
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
          )}
        {blogs &&
          visibleBlogs < // @ts-ignore
            blogs.length && (
            <div className={styles.seeMoreContainer}>
              <button className={styles.ctaBtn} onClick={handleSeeMore}>
                See More
              </button>
            </div>
          )}
      </div>
    </>
  );
};

export default BlogSection;
