import React from "react";
import "./caricatureAside.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const CaricatureAside = () => {
  const { scrollYProgress } = useScroll();

  return <div>caricatureAside</div>;
};
