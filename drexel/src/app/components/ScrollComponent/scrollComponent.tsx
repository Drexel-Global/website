import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ScrollImageProps = {
  topProgression: Array<number>;
  topDefinition: Array<string>;
  leftProgression: Array<number>;
  leftDefinition: Array<string>;
  imageSource: string | null;
  width: number | null;
  height: number | null;
  alt: string | null;
};

export const ScrollComponent = ({
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
      {imageSource && width && height && alt && (
        <Image src={imageSource} width={width} height={height} alt={alt} />
      )}
    </motion.div>
  );
};
