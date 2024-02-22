import "./globals.scss";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

import { Nav } from "./components/navBar/nav";
import { Footer } from "./components/footer/footer";

export const metadata = {
  title: "Drexel Financial Services",
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
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
