"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { motion, useScroll, useInView } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { AboutMeTeaser } from "./components/aboutMeTeaser/aboutMeTeaser";
import { services } from "./data/services";
import { CldImage } from "next-cloudinary";

// components:
import { ScrollComponent } from "./components/ScrollComponent/scrollComponent";
import { CaricatureAsideWrapper } from "./components/caricatureAside/caricatureAsideWrapper";

// import { BlogCard } from "./components/blogCard/blogCard";
// import { blogs } from "@/app/data/blogs";

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
      <div className={styles.whyUs}>
        <h2>Why Choose Us?</h2>
        <div className={styles.whyUsContent}>
          <div className={styles.whyUsSection}>
            <p>
              Welcome to Drexel Global Consulting, your trusted partner for
              comprehensive wealth management solutions. Led by Managing
              Director Izhar Shefer, our team brings over 30 years of experience
              in crafting personalized investment strategies tailored to your
              goals and risk tolerance. With a keen understanding of
              institutional money management practices, we offer competitive
              pricing without compromising on quality. Whether you're seeking
              expert guidance in wealth management, trust and estate planning,
              international accounts, or retirement solutions, we are committed
              to delivering professional and reliable financial services to help
              you achieve your aspirations. Choose Drexel Global Consulting for
              expertise, affordability, and peace of mind on your journey to
              financial success.
            </p>
          </div>
          <div className={styles.whyUsSection}>
            <CldImage
              className={styles.whyUsImage}
              src="drexel-finance-website/landing/rw2k08gvwfybtx5xgzla"
              // fill={true}
              width={300}
              height={300}
              alt="the investor"
            />
          </div>
        </div>
        <button className={styles.ctaBusiness}>Let's Do Business</button>
      </div>
      {/* <div className={styles.blogContainer}>
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
          <Link href="/blogs">
            <button className={styles.ctaBtn}>See More Blogs</button>
          </Link>
        </div>
      </div> */}
    </main>
  );
}

// Photo by AlphaTradeZone: https://www.pexels.com/photo/fingers-on-ipad-with-graph-on-screen-5833772/
