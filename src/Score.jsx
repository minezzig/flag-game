import styles from "./Score.module.css";

function Score({ score: { points, lives }, MAX_LIVES }) {
  const full = "★";
  const empty = "☆";

  return (
    <div className={styles.container}>
      <div>{points} point{points !== 1 && "s"}</div>
      <div>
        {full.repeat(lives)}
        {empty.repeat(MAX_LIVES - lives)}
      </div>
    </div>
  );
}

export default Score;
