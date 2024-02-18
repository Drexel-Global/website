"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { motion, useScroll, useInView } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { AboutMeTeaser } from "./components/aboutMeTeaser/aboutMeTeaser";
import { services } from "./data/services";
import { blogs } from "@/app/data/blogs";

// components:
import { ScrollComponent } from "./components/ScrollComponent/scrollComponent";
import { CaricatureAsideWrapper } from "./components/caricatureAside/caricatureAsideWrapper";
import { BlogCard } from "./components/blogCard/blogCard";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [blogAmount, setBlogAmount] = useState<number>(6);

  useEffect(() => {
    if (window && window.innerWidth > 769 && window.innerWidth <= 1201) {
      setBlogAmount(4);
    }
    if (window && window.innerWidth <= 768) {
      setBlogAmount(2);
    }
  }, []);

  return (
    <main className={styles.container}>
      {/* <div className={styles.circle} /> */}
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress, zIndex: 101 }}
      />
      <Hero />
      <CaricatureAsideWrapper>
        {services.map((service) => {
          return (
            <ScrollComponent
              key={service.scrollId && parseInt(service.scrollId)}
              scrollId={service.scrollId}
              position={service.position}
              topProgression={service.topProgression}
              topDefinition={service.topDefinition}
              leftProgression={service.leftProgression}
              leftDefinition={service.leftDefinition}
              rightDefinition={service.rightDefinition}
              rightProgression={service.rightProgression}
              imageSource={service.imageSource}
              width={service.width}
              height={service.height}
              alt={service.alt}
              flexDirection={service.flexDirection}
              translateRightAmount={service.translateRightAmount}
              translateLeftAmount={service.translateLeftAmount}
              text={service.text}
              serviceName={service.serviceName}
              isHero={service.isHero}
            />
          );
        })}
      </CaricatureAsideWrapper>
      <AboutMeTeaser />
      <svg
        className={styles.svg}
        viewBox="0 0 500 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          width="100vw"
          className={styles.path}
          d="M0 100 Q125 150 250 100 T500 100 V0 H0 Z"
          // fill="#050a30"
          fill="#000000"
        />
      </svg>
      {/* code here: fix blog container size on iphone 12 */}
      <div className={styles.blogContainer}>
        <h2 className={styles.blogsHeader}>Insights</h2>
        <motion.div
          ref={ref}
          className={styles.blogWrapperContainer}
          style={{
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            opacity: isInView ? 1 : 0,
            position: "relative",
            top: isInView ? 0 : "-50px",
          }}
        >
          {blogs.map((blog) => {
            if (blog.id <= blogAmount)
              return <BlogCard key={blog.id} {...blog} />;
          })}
        </motion.div>
        <div className={styles.ctaContainer}>
          <Link href="/blog">
            <button className={styles.ctaBtn}>See More</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
