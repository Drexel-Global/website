import React from "react";
import styles from "./styles.module.scss";

// components:
// import MediaAndAside from "./mediaAndAside/mediaAndAside";
import ArticleHero from "./articleHero/articleHero";
import RichTextRenderer from "./richTextRenderer/richTextRenderer";
import { Socials } from "../components/socials/socials";
import dynamic from "next/dynamic";

// spinner:
import BallSpinner from "../components/loaders/ballSpinner";

// const HeavyContactForm = dynamic(() => import("./codeBlock/codeBlock"), {
//   ssr: false,
//   loading: () => (
//     <div className={styles.contactSpinnerContainer}>
//       <BallSpinner />
//     </div>
//   ),
// });

type pickerProps = {
  section: {
    id: number;
    __component: string;
    is_flipped: boolean;
    orientation: string;
    code: Array<{
      type: string;
      children: Array<{ text: string; type: string }>;
    }>;
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
        }>;
    imageSource: {
      data: {
        id: string;
        attributes: {
          formats: {
            small: {
              url: string;
            };
            medium: {
              url: string;
            };
            thumbnail: {
              url: string;
            };
          };
        };
      };
      createdAt: string;
      updatedAt: string;
    };
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
  categories: {
    data: Array<{
      id: number;
      attributes: {
        text: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }>;
  };
  article: {
    id: number;
    attributes: {
      Title: string;
      description: string;
      publishDate: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

const Picker = ({ section, article, categories }: pickerProps) => {
  if (section.__component === "plain-text.plain-text") {
    console.log("SECTION: ", section);
    return (
      <>
        <RichTextRenderer nodes={section?.text} />
      </>
    );
  }
  if (section.__component === "article-hero.article-hero") {
    return (
      <>
        <ArticleHero
          section={section}
          title={article?.attributes?.Title}
          categories={categories}
          publishDate={article?.attributes?.publishDate}
          lastUpdate={article?.attributes?.updatedAt}
        />
      </>
    );
  }
  if (section.__component === "socials.socials") {
    return (
      <>
        <Socials position="static" translateVal1="0" translateVal2="0" />
      </>
    );
  }
  if (section.__component === "code-block.code-block") {
    return <>{/* <HeavyContactForm section={section} /> */}</>;
  }
  if (section.__component === "content-aside.content-aside") {
    return <>{/* <MediaAndAside section={section} /> */}</>;
  }
  if (section.__component === "text.text") {
    return <>{/* <RichTextRenderer nodes={section?.text} /> */}</>;
  }

  return null;
};

export default Picker;
