import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/SnakeGame.module.css';

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const grid = 20;
    let count = 0;
    let snake = [{ x: 160, y: 160 }];
    let dx = grid;
    let dy = 0;
    let apple = { x: 320, y: 320 };
    let maxCells = 4;
    let running = true;

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function reset() {
      snake = [{ x: 160, y: 160 }];
      dx = grid;
      dy = 0;
      apple = { x: getRandomInt(0, 25) * grid, y: getRandomInt(0, 25) * grid };
      maxCells = 4;
      setScore(0);
      setGameOver(false);
      running = true;
    }

    function loop() {
      if (!running) return;
      requestAnimationFrame(loop);
      if (++count < 4) return;
      count = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snake.unshift({ x: snake[0].x + dx, y: snake[0].y + dy });
      if (snake[0].x === apple.x && snake[0].y === apple.y) {
        maxCells++;
        setScore((s) => s + 1);
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
      if (snake[0].x < 0 || snake[0].x >= canvas.width || snake[0].y < 0 || snake[0].y >= canvas.height) {
        setGameOver(true); running = false; return;
      }
      for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
          setGameOver(true); running = false; return;
        }
      }
      if (snake.length > maxCells) snake.pop();
      ctx.fillStyle = '#F67280';
      snake.forEach(cell => ctx.fillRect(cell.x, cell.y, grid-2, grid-2));
      ctx.fillStyle = '#FFD6E0';
      ctx.fillRect(apple.x, apple.y, grid-2, grid-2);
    }

    document.onkeydown = (e) => {
      if (!running && e.key === 'Enter') reset();
      if (e.key === 'ArrowLeft' && dx === 0) { dx = -grid; dy = 0; }
      if (e.key === 'ArrowUp' && dy === 0) { dy = -grid; dx = 0; }
      if (e.key === 'ArrowRight' && dx === 0) { dx = grid; dy = 0; }
      if (e.key === 'ArrowDown' && dy === 0) { dy = grid; dx = 0; }
    };
    loop();
    return () => { running = false; document.onkeydown = null; };
  }, []);

  return (
    <div className={styles.snakeGameContainer}>
      <h2>🐍 Snake Game</h2>
      <canvas ref={canvasRef} width={500} height={500} className={styles.snakeCanvas}></canvas>
      <div className={styles.snakeScore}>Score: {score}</div>
      {gameOver && <div className={styles.snakeOver}>Game Over! Press Enter to restart.</div>}
    </div>
  );
}
