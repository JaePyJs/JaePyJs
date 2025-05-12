import Head from 'next/head';
import styles from '../styles/Games.module.css';
import Link from 'next/link';

export default function Games() {
  return (
    <div className={styles.gamesContainer}>
      <Head>
        <title>Games & Quizzes | JaePyJs Portfolio</title>
      </Head>
      <h1 className={styles.gamesTitle}>🎮 Mini Games & Quizzes</h1>
      <div className={styles.gamesList}>
        <Link href="/games/snake"><a className={styles.gameCard}>🐍 Play Snake</a></Link>
        <Link href="/games/quiz"><a className={styles.gameCard}>🧠 Take a Quiz</a></Link>
      </div>
      <p className={styles.gamesNote}>More interactive games and quizzes coming soon!</p>
    </div>
  );
}
