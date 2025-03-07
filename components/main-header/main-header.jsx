import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

import logo from "@/assets/logo.png";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <>
    <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Foodie App Logo" priority />
          {/* <img src={logo.src} alt="Foodie App Logo" /> */}
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
