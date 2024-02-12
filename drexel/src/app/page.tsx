"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { motion, useScroll } from "framer-motion";
import { Hero } from "./components/hero/hero";
import { CaricatureAside } from "./components/caricatureAside/caricatureAside";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main className={styles.container}>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <Hero />
      <CaricatureAside />
    </main>
  );
}
