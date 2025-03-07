"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={
        pathName.startsWith(href)
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
