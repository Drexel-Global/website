import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

import RichTextRenderer from "../richTextRenderer/richTextRenderer";

type mediaAndAsideProps = {
  section: {
    id: number;
    __component: string;
    is_flipped: boolean;
    orientation: string;
    text:
      | Array<{
          type: "heading";
          level: number;
          children: Array<{
            text: string;
            type: "text";
          }>;
        }>
      | Array<{
          type: "paragraph";
          children: Array<
            | {
                text: string;
                type: "text";
              }
            | {
                url: string;
                type: "link";
                children: Array<{
                  text: string;
                  type: "text";
                }>;
              }
          >;
        }>
      | Array<{
          type: "quote";
          children: Array<{
            text: string;
            type: string;
          }>;
        }>
      | Array<{
          type: "list";
          format: string;
          children: Array<{}>;
        }>;
    media: {
      data: {
        id: number;
        attributes: {
          url: string;
          formats: {
            large: {
              url: string;
            };
            small: {
              url: string;
            };
            medium: {
              url: string;
            };
          };
          provider_metadata: { public_id: string; resource_type: string };
        };
      };
    };
  };
};

const MediaAndAside = ({ section }: mediaAndAsideProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {section?.text?.length > 0 && (
          <RichTextRenderer nodes={section?.text} />
        )}
      </div>

      <div className={styles.mediaContainer}>
        {section?.media?.data?.attributes?.provider_metadata?.resource_type ===
          "video" && (
          <video width="640" height="480" controls preload="none">
            <source
              src={section?.media?.data?.attributes?.url}
              type="video/mp4"
            />
            <track
              src={section?.media?.data?.attributes?.url}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        )}
        {section?.media?.data?.attributes?.provider_metadata?.resource_type ===
          "image" && (
          <div className={styles.imgContainer}>
            <Image
              src={section?.media?.data?.attributes?.formats?.large?.url}
              fill={true}
              alt="aside"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaAndAside;
