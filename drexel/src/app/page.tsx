"use client";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { AboutMeTeaser } from "./components/aboutMeTeaser/aboutMeTeaser";
import { services } from "./data/services";
import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import BallSpinner from "./components/loaders/ballSpinner";

// components:
import { ScrollComponent } from "./components/ScrollComponent/scrollComponent";
import { CaricatureAsideWrapper } from "./components/caricatureAside/caricatureAsideWrapper";
// import { CtaButton } from "./components/ctaButton/ctaButton";
import { Review } from "./components/reviewComponent/review";
import BlogSection from "./components/blogSection/blogSection";

const HeavyCtaButton = dynamic(
  () => import("./components/ctaButton/ctaButton"),
  {
    ssr: false,
    loading: () => (
      <div>
        <BallSpinner />
      </div>
    ),
  }
);

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.blurred}>
      <div />
      <main className={styles.container}>
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: scrollYProgress, zIndex: 101 }}
        />
        <Hero />
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
            fill="#000000"
          />
        </svg>
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

        <div className={styles.whyUs} id="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className={styles.whyUsContent}>
            <div className={styles.whyUsSection}>
              <p>
                Welcome to Drexel Global Consulting, your trusted partner for
                comprehensive wealth management solutions. Led by Managing
                Director Izhar "Izzy" Shefer, Izzy brings 30 years of experience
                from working with Smith Barney, Prudential Securities, and
                Merrill Lynch and is skilled in crafting personalized investment
                strategies tailored to your goals and risk tolerance. With a
                keen understanding of institutional money management practices,
                Izzy offers competitive pricing without compromising on quality.
                Whether you're seeking expert guidance in wealth management,
                trust and estate planning, international accounts, or retirement
                solutions, Izzy is committed to delivering professional and
                reliable financial services to help you achieve your goals.
                Choose Drexel Global Consulting for expertise, affordability,
                and peace of mind on your journey to financial success.
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
          <Link className={styles.readMore} href="why-choose-us">
            <button className={styles.ctaBusiness}>Our Values</button>
          </Link>
          <HeavyCtaButton type="contact" textContent="Let's Do Business" />
          <div className={styles.reviewContainerDesktop}>
            <Review />
          </div>
          <div>
            <BlogSection />
          </div>
        </div>
      </main>
    </div>
  );
}
