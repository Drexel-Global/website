import React, { useRef } from "react";
import { BlogCard } from "./blogCard";
import styles from "./blogsCardList.module.scss";
import { motion, useInView } from "framer-motion";

const blogs: Array<{
  id: number;
  image: string;
  description: string;
  blogName: string;
  alt: string;
}> = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 1",
    alt: "something",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 2",
    alt: "something",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 3",
    alt: "something",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 4",
    alt: "something",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 5",
    alt: "something",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 6",
    alt: "something",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 7",
    alt: "something",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 8",
    alt: "something",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 9",
    alt: "something",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/db09icibj/image/upload/v1707763881/drexel-finance-website/landing/b392sqnl2r715zmxvmh4.jpg",
    description: "This is a discription of this blog",
    blogName: "Blog 10",
    alt: "something",
  },
];

export const BlogCardList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={styles.container}
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
        position: "relative",
        top: isInView ? 0 : "-50px",
      }}
    >
      {blogs.map((blog) => {
        let blogAmount = 6;
        if (window && window.innerWidth <= 1110) {
          blogAmount = 4;
        }
        if (blog.id <= blogAmount) return <BlogCard key={blog.id} {...blog} />;
      })}
    </motion.div>
  );
};
