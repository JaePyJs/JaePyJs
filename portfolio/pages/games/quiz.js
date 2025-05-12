import { useState } from 'react';
import styles from '../../styles/QuizGame.module.css';

const questions = [
  {
    q: 'What is the capital of the Philippines?',
    a: ['Manila', 'Cebu', 'Davao', 'Quezon City'],
    c: 0,
  },
  {
    q: 'Which language is used for web apps?',
    a: ['Python', 'Java', 'JavaScript', 'C++'],
    c: 2,
  },
  {
    q: 'Who created GitHub?',
    a: ['Microsoft', 'Linus Torvalds', 'Chris Wanstrath', 'Google'],
    c: 2,
  },
];

export default function QuizGame() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  function handleAnswer(idx) {
    if (questions[step].c === idx) setScore(score + 1);
    if (step + 1 < questions.length) setStep(step + 1);
    else setShow(true);
  }

  function restart() {
    setStep(0); setScore(0); setShow(false);
  }

  return (
    <div className={styles.quizGameContainer}>
      <h2>🧠 Quick Quiz</h2>
      {!show ? (
        <>
          <div className={styles.quizQ}>{questions[step].q}</div>
          <div className={styles.quizA}>
            {questions[step].a.map((a,i) => (
              <button key={i} onClick={() => handleAnswer(i)}>{a}</button>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.quizResult}>
          <div>Your Score: {score} / {questions.length}</div>
          <button onClick={restart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}
