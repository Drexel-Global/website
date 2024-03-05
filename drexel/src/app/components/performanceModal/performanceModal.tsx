"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BallSpinner from "../loaders/ballSpinner";

type tabType = "performance" | "style";

type modalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

const HeavyCtaButton = dynamic(() => import("../ctaButton/ctaButton"), {
  ssr: false,
  loading: () => (
    <div>
      <BallSpinner />
    </div>
  ),
});

export const PerformanceModal = ({
  isModalOpen,
  setIsModalOpen,
}: modalProps) => {
  const [currentTab, setCurrentTab] = useState<tabType>("performance");

  const handleTabClick = (type: tabType) => {
    setCurrentTab(type);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, top: "40%" }}
      whileInView={{ opacity: 1, top: "50%" }}
    >
      <CldImage
        onClick={toggleModal}
        className={styles.closeBtn}
        src="drexel-finance-website/landing/e5xv3xlnwtzcwzpgmaxe"
        width={50}
        height={50}
        alt="close icon"
        sizes="(max-width: 1201px) 100vw"
      />
      <div className={styles.navigator}>
        <p
          className={`${currentTab === "performance" ? styles.active : ""}`}
          onClick={() => handleTabClick("performance")}
        >
          Past Performance
        </p>
        <p
          className={`${currentTab === "style" ? styles.active : ""}`}
          onClick={() => handleTabClick("style")}
        >
          Trading Style
        </p>
      </div>
      <div>
        {currentTab === "performance" ? (
          <div>
            <h1>Past Performance</h1>
          </div>
        ) : (
          <div className={styles.tradindStyle}>
            <h1>Trading Style</h1>
            <p className={styles.text}>
              implementation of a spread strategy for investing from within the
              SP500 basket. The key differentiator in this approach is the
              utilization of lower-priced stocks or indexes.
              <br />
              <br />
              The primary advantage of this strategy lies in the adjusted strike
              prices of the selected stocks and indexes, which would be lower
              compared to prevailing market values. Consequently, this
              adjustment would lead to a reduced collateral requirement,
              potentially optimizing our investment position.
              <br />
              <br />
              Specifically, we are looking at premium levels of approximately
              from $1.25 to 75 cents, coupled with an eventual increase to 5-6
              contacts on each stock position . The finer details of this
              approach would certainly benefit from a comprehensive review, and
              I am keen to connect with you at your earliest convenience to
              delve into this strategy in greater depth.
            </p>
            {/* <HeavyCtaButton type="contact" textContent="Let's Do Business" /> */}
          </div>
        )}
      </div>
    </motion.div>
  );
};
