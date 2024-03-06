"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import BallSpinner from "../loaders/ballSpinner";
import { performance } from "@/app/data/performance";

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
  const [portfolioId, setPortfolioId] = useState<number>(0);
  const [selectedPortfolio, setSelectedPortfolio] = useState(
    performance[portfolioId]
  );

  useEffect(() => {
    setSelectedPortfolio(performance[portfolioId]);
  }, [portfolioId]);

  const handlePortfolioSelected = (portfolioId: number) => {
    setPortfolioId(portfolioId);
  };

  const handleTabClick = (type: tabType) => {
    setCurrentTab(type);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  console.log(portfolioId);

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
          <div className={styles.performanceContainer}>
            <div className={styles.left}>
              <p
                className={portfolioId === 0 ? styles.active : ""}
                onClick={() => handlePortfolioSelected(0)}
              >
                Portfolio 1
              </p>
              <p
                className={portfolioId === 1 ? styles.active : ""}
                onClick={() => handlePortfolioSelected(1)}
              >
                Portfolio 2
              </p>
              <p
                className={portfolioId === 2 ? styles.active : ""}
                onClick={() => handlePortfolioSelected(2)}
              >
                Portfolio 3
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.timePeriodContainer}>
                <h3>Time Period:</h3>
                <p>{selectedPortfolio.timePeriod}</p>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.contentLeft}>
                  <div className={styles.nested}>
                    <p>Initial Value: </p>
                    <p className={styles.pos}>
                      {selectedPortfolio.initialValue}
                    </p>
                  </div>
                  <div className={styles.nested}>
                    <p>Ending Value: </p>
                    <p className={styles.pos}>
                      {selectedPortfolio.endingValue}
                    </p>
                  </div>
                  <div className={styles.nested}>
                    <p>Change In Value: </p>
                    <p className={styles.pos}>
                      {selectedPortfolio.valueChange}
                    </p>
                  </div>
                </div>
                <div className={styles.contentRight}>
                  <div className={styles.nested}>
                    <p>Deposit: </p>
                    <p className={styles.pos}>{selectedPortfolio.deposit}</p>
                  </div>
                  <div className={styles.nested}>
                    <p>Withdrawals: </p>
                    <p className={styles.neg}>{selectedPortfolio.withDrawal}</p>
                  </div>
                  <div className={styles.nested}>
                    <p>Net:</p>
                    <p className={styles.neg}>{selectedPortfolio.net}</p>
                  </div>
                </div>
              </div>
              <HeavyCtaButton type="contact" textContent="Let's Do Business" />
            </div>
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
            <HeavyCtaButton type="contact" textContent="Let's Do Business" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
