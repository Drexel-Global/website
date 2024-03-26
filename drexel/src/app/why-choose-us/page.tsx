"use client";
import React from "react";
import styles from "./styles.module.scss";
import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import BallSpinner from "../components/loaders/ballSpinner";

import { Socials } from "../components/socials/socials";
import { Review } from "../components/reviewComponent/review";

const HeavyCtaButton = dynamic(
  () => import("../components/ctaButton/ctaButton"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.spinnerContainer}>
        <BallSpinner />
      </div>
    ),
  }
);

const WhyUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImgContainer}>
        <CldImage
          className={styles.headerImg}
          src="drexel-finance-website/landing/usqnukoinfkjvvquim78"
          fill={true}
          alt="the investor"
        />
      </div>
      <div className={styles.section}>
        <Socials position="static" translateVal1="0" translateVal2="0" />
        <div className={styles.topReviewContainer}>
          <Review />
        </div>
        <h1>Why Choose Us?</h1>
        <p className={styles.paraOne}>
          Welcome to Drexel Global Consulting, your trusted partner for
          comprehensive wealth management solutions. Led by Managing Director
          Izhar Shefer, our team brings over 30 years of experience in crafting
          personalized investment strategies tailored to your goals and risk
          tolerance. With a keen understanding of institutional money management
          practices, we offer competitive pricing without compromising on
          quality. Whether you're seeking expert guidance in wealth management,
          trust and estate planning, international accounts, or retirement
          solutions, we are committed to delivering professional and reliable
          financial services to help you achieve your goals. Choose Drexel
          Global Consulting for expertise, affordability, and peace of mind on
          your journey to financial success.
        </p>
        <HeavyCtaButton type="contact" textContent="Let's Do Business" />
        <h2 className={styles.values}>Our Values</h2>
        <h2>Expertise</h2>
        <p className={styles.value}>
          Our team of seasoned professionals brings over three decades of
          collective experience in wealth management, ensuring that you receive
          informed and insightful guidance tailored to your specific needs and
          goals.
        </p>
        <h2>Personalization</h2>
        <p className={styles.value}>
          We believe in the power of personalized financial strategies. By
          understanding your unique circumstances and goals, we craft tailored
          solutions that align perfectly with your objectives and risk
          tolerance.
        </p>
        <h2>Affordability</h2>
        <p className={styles.value}>
          At Drexel Global Consulting, we pride ourselves on offering
          competitive pricing without compromising on the quality of our
          services. We strive to make expert financial guidance accessible to
          all, ensuring that you receive exceptional value for your investment.
        </p>
        <h2>Trustworthiness</h2>
        <p className={styles.value}>
          rust is the foundation of our relationship with clients. With a
          commitment to transparency, integrity, and professionalism, we strive
          to earn and maintain your trust every step of the way.
        </p>
        <h2>Results-driven</h2>
        <p className={styles.value}>
          We are dedicated to delivering tangible results that help you achieve
          your financial goals. Through diligent planning, strategic investment,
          and proactive management, we aim to maximize your wealth and secure
          your financial future.
        </p>
        <h2>Peace of mind</h2>
        <p className={styles.value}>
          Partnering with Drexel Global Consulting means enjoying peace of mind
          knowing that your financial affairs are in capable hands. With our
          expertise and dedication, you can confidently navigate the
          complexities of the financial landscape and focus on what matters most
          to you.
        </p>
        <HeavyCtaButton type="contact" textContent="Let's Do Business" />
        <div className={styles.reviewContainer}>
          <Review />
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
