import "./globals.scss";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

import { Nav } from "./components/navBar/nav";
import { Footer } from "./components/footer/footer";

export const metadata = {
  title: "Drexel Global Consulting Wealth Management",
  description:
    "A company offering Money Wealth Management, Trust and Estate Planning, Trust Accounts, International Accounts, Offshore Corporate Accounts, International Trust Accounts, Regular Accounts, Pension Accounts, & Financial Planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
