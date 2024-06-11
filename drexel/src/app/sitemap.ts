import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    async function getData() {
        const currentEnvUrls: string =
          process.env.NEXT_PUBLIC_NODE_ENV === "development"
            ? "http://localhost:1337/api/blog-articles?populate=*"
            : `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-articles?populate=*`;
      
        const res = await fetch(currentEnvUrls);
      
        if (res.status !== 200) throw new Error("Failed to fetch data");
      
        return res.json();
      }

    const data = await getData();
    const blogs = data?.data;
    
    const postUrls = blogs.map((blog: any) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}blogs/${blog?.attributes?.slug}`,
        lastModified: new Date(blog?.attributes?.updatedAt)
    }))

  return [
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}blogs`,
        lastModified: new Date(),
    },
    ...postUrls
  ]
}
