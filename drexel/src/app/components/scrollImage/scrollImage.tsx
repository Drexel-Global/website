import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ScrollImageProps = {
  topProgression: Array<number>;
  topDefinition: Array<string>;
  leftProgression: Array<number>;
  leftDefinition: Array<string>;
  imageSource: string;
  width: number;
  height: number;
  alt: string;
};

export const ScrollImage = ({
  topProgression,
  topDefinition,
  leftProgression,
  leftDefinition,
  imageSource,
  width,
  height,
  alt,
}: ScrollImageProps) => {
  const { scrollYProgress } = useScroll();

  const top = useTransform(scrollYProgress, topProgression, topDefinition);
  const left = useTransform(scrollYProgress, leftProgression, leftDefinition);
  return (
    <motion.div
      style={{
        position: "absolute",
        top,
        left,
        zIndex: "1",
      }}
    >
      <Image src={imageSource} width={width} height={height} alt={alt} />
    </motion.div>
  );
};
