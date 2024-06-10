import React from "react";
import styles from "./styles.module.scss";
import type { Metadata } from "next";

// components:
import Picker from "@/app/component-picker/main";
import RelatedPosts from "@/app/component-picker/relatedPosts/relatedPosts";

// TO DO: UPDATE META DATA
export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const blogs = await getData(params.slug);
  const blog = blogs?.article?.data[0];
  if (!blog) return;

  return {
    title: `${blog?.attributes?.Title} | by: ${blog?.attributes?.author}`,
    description: blog?.attributes?.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    authors: { name: "Samuel Torres" },
    creator: "Samuel Torres",
    publisher: "Samuel Torres",
    // keywords: ['Next.js', 'React', 'JavaScript'],
    alternates: {
      canonical: `/blogs/${params?.slug}`,
    },
    openGraph: {
      title: `Samuel Torres: ${blog?.attributes?.Title}`,
      description: blog?.attributes?.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}blogs/${params?.slug}`,
      siteName: "Samuel Torres Portfolio",
      type: "article",
      locale: "en_US",
      images: [
        {
          url: blog?.attributes?.previewImage?.data?.attributes?.formats?.large
            ?.url,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Samuel Torres: ${blog?.attributes?.Title}`,
      description: blog?.attributes?.description,
      creator: "Samuel Torres",
      images: [
        {
          url: blog?.attributes?.previewImage?.data?.attributes?.formats?.large
            ?.url,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": 500,
      },
    },
  };
}

async function getData(slug: string) {
  const urls: Array<string> = [
    `${process.env.NEXT_PUBLIC_NODE_ENV === "development" ? "http://localhost:1337" : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}`}/api/blog-articles?filters[slug][$in][0]=${slug}&populate[section][populate]=*`,
    `${process.env.NEXT_PUBLIC_NODE_ENV === "development" ? "http://localhost:1337" : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}`}/api/blog-articles?populate=*&filters[slug][$in][0]=${slug}`,
    `${process.env.NEXT_PUBLIC_NODE_ENV === "development" ? "http://localhost:1337" : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}`}/api/blog-articles?populate=*`,
  ];

  const [res1, res2, res3] = await Promise.all(
    urls.map((url) => fetch(url, { next: { revalidate: 0 } }))
  );

  if (res1.status !== 200 || res2.status !== 200 || res3.status !== 200) {
    throw new Error("Failed to fetch data from one or both APIs");
  }

  const data1 = await res1.json();
  const data2 = await res2.json();
  const data3 = await res3.json();

  return {
    sections: data1,
    article: data2,
    articles: data3,
  };
}

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getData(params?.slug);
  console.log("DATA", blog?.sections.data[0]?.attributes?.section);
  return (
    <div className={styles.container}>
      {blog?.sections.data[0]?.attributes?.section.map(
        (section: {
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
                provider_metadata: {
                  public_id: string;
                  resource_type: string;
                };
              };
            };
          };
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
        }) => {
          console.log("LOOP: ", section);
          return (
            <Picker
              key={section?.id}
              section={section}
              categories={blog?.article?.data[0]?.attributes?.categories}
              article={blog?.article?.data[0]}
            />
          );
        }
      )}
      <div className={styles.relatedContainer}>
        <RelatedPosts
          currentCategory={
            blog?.article?.data[0]?.attributes?.categories?.data[0]?.attributes
              .text
          }
          articles={blog?.articles?.data}
        />
      </div>
    </div>
  );
}
