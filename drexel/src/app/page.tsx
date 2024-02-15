"use client";
import React from "react";
import styles from "./page.module.scss";
import { motion, useScroll } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { AboutMeTeaser } from "./components/aboutMeTeaser/aboutMeTeaser";
import { services } from "./data/services";

// components:
import { ScrollComponent } from "./components/ScrollComponent/scrollComponent";
import { CaricatureAsideWrapper } from "./components/caricatureAside/caricatureAsideWrapper";
import { BlogCardList } from "./components/blogCard/blogCardList";

export default function Home() {
  const { scrollYProgress } = useScroll();

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
      <div className={styles.blogContainer}>
        <h2 className={styles.blogsHeader}>Insights</h2>
        <BlogCardList />
      </div>
    </main>
  );
}
