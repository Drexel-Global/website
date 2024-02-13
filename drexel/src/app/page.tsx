"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { motion, useScroll } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { CaricatureAsideWrapper } from "./components/caricatureAside/caricatureAsideWrapper";
import { ScrollComponent } from "./components/ScrollComponent/scrollComponent";
import { heroImages } from "./assets/heroImages/heroImages";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main className={styles.container}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <CaricatureAsideWrapper>
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row-reverse"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row-reverse"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
        <ScrollComponent
          position={null}
          topProgression={null}
          topDefinition={null}
          leftProgression={null}
          leftDefinition={null}
          rightDefinition={null}
          rightProgression={null}
          imageSource={heroImages.money}
          width={150}
          height={150}
          alt="dollar"
          flexDirection="row-reverse"
          translateRightAmount={400}
          translateLeftAmount={-400}
          text="You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page."
        />
      </CaricatureAsideWrapper>
    </main>
  );
}
