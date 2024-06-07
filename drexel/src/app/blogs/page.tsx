import React from "react";
import styles from "./styles.module.scss";

async function getBlogs() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/blog-articles?populate=*"
      : "https://strapi-bax7.onrender.com/api/blog-articles?populate=*";

  const res = await fetch(currentEnvUrls);
  const blogsArray = await res.json();

  if (res.status !== 200) throw new Error("Failed to fetch data");

  return blogsArray?.data;
}

export default async function Page() {
  const blogs = await getBlogs();
  console.log("IN PAGE: ", blogs);
  return <div className={styles.container}>Page</div>;
}
