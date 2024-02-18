"use client";
import React from "react";
import styles from "./blogIndex.module.scss";
import { blogs } from "../data/blogs";
//  components:
import { BlogCard } from "../components/blogCard/blogCard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1>OUR INSIGHTS</h1>
      <div className={styles.contentContainer}>
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} {...blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogPage;
