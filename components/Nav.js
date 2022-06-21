import Link from "next/link";
import styles from "../styles/nav.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>XL-Cheeet</h1>
      </div>
      <Link href="/cheetsheets/html">
        <a>HTML</a>
      </Link>
      <Link href="/cheetsheets/css">
        <a>CSS</a>
      </Link>
      <Link href="/cheetsheets/react">
        <a>React</a>
      </Link>
      <Link href="/cheetsheets/next">
        <a>Next</a>
      </Link>
      <Link href="/cheetsheets/typescript">
        <a>Typescript</a>
      </Link>
      <Link href="/cheetsheets/tailwind">
        <a>Tailwind CSS</a>
      </Link>
    </nav>
  );
};

export default NavBar;
