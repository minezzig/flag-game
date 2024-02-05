import styles from "./GameOver.module.css";

function GameOver({ score: { points }, newGame }) {
  const percentage = Math.floor((points / (points + 5)) * 100);

  return (
    <div className={styles.container}>
      <div className={styles.comment}>
        {percentage < 50
          ? "You need to study..."
          : percentage < 70
          ? "Almost there, keep playing!"
          : percentage < 90
          ? "You're doing great!"
          : "Incredible, world traveler!!!"}
      </div>
      <div className={styles.score}>
        {percentage}%
      </div>
      <div>You answered {`${points} out of ${points + 5}`} flags correctly!</div>

      <button className={styles.button} onClick={() => newGame()}>
        Try Again?
      </button>
    </div>
  );
}

export default GameOver;
