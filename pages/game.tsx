import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { Hero } from "../types";

import Loader from "../components/Loader";
import Error from "../components/Error";

import styles from "../styles/Game.module.css";


const Game: NextPage = () => {
  // Set states
  const [rescueHeros, setRescueHeros] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [countHeros, setCountHeros] = useState<number>(0);
  const [cards, setCards] = useState<Hero[]>([]);
  const [isLoading, setLoading] = useState(false);

  // Set router instance
  const router = useRouter();

  // Fetch Heros
  useEffect(() => {
    setLoading(true);
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        randomCards(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (!cards) return <Error />;

  const randomCards = (heros: Hero[]) => {
    const randomHeros = heros.sort(() => 0.5 - Math.random()).slice(0, 18);
    setCountHeros(randomHeros.filter((hero) => hero.biography.alignment !== "bad").length);
    setCards(randomHeros);
  };

  // Lets see who you rescued!
  const rescue = (hero: Hero) => {
    // Set card as flipped
    setFlippedCards([...flippedCards, hero.id]);

    // Check if you let a baddy out
    if (hero.biography.alignment === "bad") {
      const timer = setTimeout(() => {
        alert(hero.name + ": BOOM! you lose HAHAHAHA!");
        router.reload();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Check if all heros are rescused
    if (countHeros - (rescueHeros.length + 1) === 0) {
      if (confirm("Congratulation! you have saved all the heros!... Let's play again?")) {
        router.reload();
      }
    }

    // Add hero to rescue list
    setRescueHeros([...rescueHeros, hero.id].filter((v, i, a) => a.indexOf(v) === i));
  };

  return (
    <>
      <h1 className={styles.gameTitle}>Save the Saviors!</h1>
      <div className={styles.gameDetails}>
        <p>
          The Riddler has stolen Zatanna&apos;s magic cards and imprisoned the heros and villians in
          them. It&apos;s upto you to rescue the heros by flipping the right cards, pick a villian
          and he blows up the deck with everyone trapped in it!
        </p>
      </div>
      <div className={styles.gameGrid}>
        {cards.map((card: Hero) => (
          <article
            key={card.id}
            onClick={() => rescue(card)}
            className={flippedCards.includes(card.id) ? styles.gameCardFlip : ""}
          >
            <div className={styles.gameCard}>
              <div className={styles.gameCardBack}>?</div>
              <div
                className={`${styles.gameCardFront} ${
                  card.biography.alignment === "bad" ? styles.gameBad : styles.gameGood
                }`}
              >
                <Image
                  src={card.images.md}
                  alt={card.slug}
                  width={100}
                  height={120}
                  layout="responsive"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.gameSaved}>
        Heros Saved {rescueHeros.length}/{countHeros}
      </div>
      <div className={styles.gameEscape}>
        <Link href="/" as="/">
          <a>Escape!</a>
        </Link>
      </div>
    </>
  );
};

export default Game;
