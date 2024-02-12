import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoSection}>
        <h2>Logo Here</h2>
      </div>
      <div className={styles.linkSection}>
        <ul>
          <li>
            <Link href="about-us">About Us</Link>
          </li>
          <li>
            <Link href="why-us">Why Us</Link>
          </li>
          <li>
            <Link href="services">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
