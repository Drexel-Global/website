import React from "react";
import styles from "./styles.module.scss";

export type RichTextNodeProps = {
  nodes:
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
};

// TO DO: Replace with strapi richText package.

const RichTextRenderer = ({ nodes }: RichTextNodeProps) => {
  let key: number = 0;
  return (
    <div className={styles.container}>
      {nodes && nodes.length > 0
        ? nodes.map((node) => {
            switch (node?.type) {
              case "heading":
                if (node?.level === 1)
                  return (
                    <h1 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h1>
                  );
                if (node?.level === 2)
                  return (
                    <h2 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h2>
                  );
                if (node?.level === 3)
                  return (
                    <h3 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h3>
                  );
                if (node?.level === 4)
                  return (
                    <h4 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h4>
                  );
                if (node?.level === 5)
                  return (
                    <h5 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h5>
                  );
                if (node?.level === 6)
                  return (
                    <h6 className={styles.heading} key={(key += 1)}>
                      {node?.children[0]?.text}
                    </h6>
                  );
              case "paragraph":
                return node?.children?.map((child: any) => {
                  if (
                    child?.type === "text" &&
                    !child?.bold &&
                    !child?.italic &&
                    !child?.underline &&
                    !child?.strikethrough
                  ) {
                    if (child?.text?.length === 0)
                      return <br key={(key += 1)} />;
                    if (child?.text?.length !== 0)
                      return (
                        <div className={styles.planTextContainer}>
                          <p className={styles.plainText} key={(key += 1)}>
                            {child?.text}
                          </p>
                        </div>
                      );
                  }

                  if (child?.type === "text" && child?.bold)
                    return (
                      <p
                        style={{ fontWeight: "bold" }}
                        className={styles.boldText}
                      >
                        {child?.text}
                      </p>
                    );
                  if (child?.type === "text" && child?.italic)
                    return (
                      <p
                        style={{ fontStyle: "italic" }}
                        className={styles.italic}
                      >
                        {child?.text}
                      </p>
                    );
                  if (child?.type === "text" && child?.underline)
                    return (
                      <p
                        style={{ textDecoration: "underline" }}
                        className={styles.underline}
                      >
                        {child?.text}
                      </p>
                    );
                  if (child?.type === "text" && child?.strikethrough)
                    return (
                      <p
                        style={{ textDecoration: "line-through" }}
                        className={styles.strikeThrough}
                      >
                        {child?.text}
                      </p>
                    );

                  if (child?.type === "link") {
                    return (
                      <a key={(key += 1)} href={child?.url}>
                        {child?.children[0]?.text}
                      </a>
                    );
                  }
                });
              case "quote":
                return (
                  <div
                    style={{
                      backgroundColor: "#0d3860",
                      padding: "1rem",
                      borderRadius: "1rem",
                      marginBottom: "3rem",
                    }}
                    className={styles.quoteBackground}
                  >
                    <p>&quot;{node?.children[0]?.text}&quot;</p>
                  </div>
                );
              case "list":
                if (node.format === "unordered") {
                  const unorderedList = (
                    <ul>
                      {node?.children.map((child: any) => {
                        return (
                          <li key={(key += 1)}>{child?.children[0].text}</li>
                        );
                      })}
                    </ul>
                  );
                  return unorderedList;
                }
                if (node.format === "ordered") {
                  const orderedList = (
                    <ol>
                      {node?.children.map((child: any) => {
                        return (
                          <li key={(key += 1)}>{child?.children[0].text}</li>
                        );
                      })}
                    </ol>
                  );
                  return orderedList;
                }

                return null;
              default:
                return null;
            }
          })
        : null}
    </div>
  );
};

export default RichTextRenderer;
