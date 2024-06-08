import React from "react";
import styles from "./styles.module.scss";

// components:
import BlogFilter from "../components/blogFilter/blogFilter";

async function getBlogs() {
  const currentEnvUrls: string =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? "http://localhost:1337/api/blog-articles?populate=*"
      : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/blog-articles?populate=*`;
  // revalidated every 5 minutes
  const res = await fetch(currentEnvUrls, { next: { revalidate: 300 } });
  const blogsArray = await res.json();

  if (res.status !== 200) throw new Error("Failed to fetch data");

  const blogs = blogsArray?.data.map((blog: any) => {
    console.log(
      "BEFORE CLENSE: ",
      blog?.attributes?.previewImage?.data?.attributes?.url
    );
    return {
      ...blog,
      attributes: {
        ...blog?.attributes,
        previewImage: blog?.attributes?.previewImage?.data?.attributes?.url,
      },
    };
  });

  return blogs;
}

export default async function Page() {
  const blogs = await getBlogs();
  console.log("IN PAGE: ", blogs);
  return (
    <div
      className={styles.container}
      style={{
        height: blogs?.length <= 4 ? "calc(100dvh - 22.5rem)" : "100dvh",
      }}
    >
      <div className={styles.headerContainer}>
        <h1>BLOGS</h1>
      </div>
      <>
        {blogs?.length === 0 ? (
          <h3>Blogs coming soon! Check back in a few days!</h3>
        ) : (
          <BlogFilter articles={blogs} />
        )}
      </>
    </div>
  );
}
