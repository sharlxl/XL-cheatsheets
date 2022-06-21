import styles from "../../styles/Cheetsheets.module.css";

const Cheetsheets = () => {
  return (
    <div>
      CheetSheet homepage
      <div className={styles.grid}>
        <a href="/cheetsheets/html" className={styles.card}>
          <h2>HTML &rarr;</h2>
        </a>

        <a href="#" className={styles.card}>
          <h2>CSS &rarr;</h2>
        </a>

        <a href="#" className={styles.card}>
          <h2>React.js &rarr;</h2>
        </a>

        <a href="#" className={styles.card}>
          <h2>Next.js &rarr;</h2>
        </a>
      </div>
    </div>
  );
};

export default Cheetsheets;
