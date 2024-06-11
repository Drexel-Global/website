import "./globals.scss";
import { Outfit } from "next/font/google";
import type { Viewport } from "next";

const inter = Outfit({ subsets: ["latin"] });

import { Nav } from "./components/navBar/nav";
import { Footer } from "./components/footer/footer";

export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "Drexel Global Consulting Wealth Management by: Izhar Shefer",
    template:
      "%s | Drexel Global Consulting Wealth Management by: Izhar Shefer",
  },
  description:
    "Welcome to Drexel Global Consulting, your trusted partner for comprehensive wealth management solutions. Led by Managing Director Izhar Shefer, our team brings over 30 years of experience in crafting personalized investment strategies tailored to your goals and risk tolerance.",
  openGraph: {
    title: "Drexel Global Consulting Wealth Management by: Izhar Shefer",
    description:
      "Welcome to Drexel Global Consulting, your trusted partner for comprehensive wealth management solutions. Led by Managing Director Izhar Shefer, our team brings over 30 years of experience in crafting personalized investment strategies tailored to your goals and risk tolerance.",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Drexel Global Consulting Wealth Management by: Izhar Shefer",
    images: [
      {
        url: "https://res.cloudinary.com/db09icibj/image/upload/v1718139107/drexel-finance-website/landing/dchrtnkjmrup5uvnlqk8.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#050a30",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db09icibj/image/upload/v1708646861/drexel-finance-website/landing/gt5auctopfbx3ml9mtwx.png"
        />
        <meta property="og:image:alt" content="hero of webpage landing" />
        <meta
          property="og:description"
          content="Welcome to Drexel Global Consulting, your trusted partner for
          comprehensive wealth management solutions. Led by Managing Director
          Izhar Shefer, our team brings over 30 years of experience in crafting
          personalized investment strategies tailored to your goals and risk
          tolerance."
        />
      </head> */}
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
