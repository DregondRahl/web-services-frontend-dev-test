import Link from "next/link";
import styles from "../styles/GameMode.module.css";

const GameMode = () => {
  return (
    <div className={styles.gameMode}>
      <Link href="/game" as="game">
        <a tabIndex={0}>Would you like to play a game?</a>
      </Link>
    </div>
  );
};

export default GameMode;
