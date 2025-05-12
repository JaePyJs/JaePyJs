import Head from 'next/head';
import styles from '../styles/Snake.module.css';

export default function Snake() {
  return (
    <div className={styles.snakeContainer}>
      <Head>
        <title>Contribution Snake | JaePyJs Portfolio</title>
      </Head>
      <h1 className={styles.snakeTitle}>🐍 GitHub Contribution Snake</h1>
      <div className={styles.snakeBox}>
        <img
          src="https://github.com/JaePyJs/JaePyJs/raw/output/github-contribution-grid-snake.svg"
          alt="GitHub Contribution Snake Animation"
          className={styles.snakeImg}
        />
      </div>
      <p className={styles.snakeNote}>
        This animation updates automatically with my latest GitHub contributions!
      </p>
    </div>
  );
}
