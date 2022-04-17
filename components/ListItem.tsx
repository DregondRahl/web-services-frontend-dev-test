import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useCollapse from "react-collapsed";

import { Hero } from "../types";
import styles from "../styles/Card.module.css";

type Props = {
  hero: Hero;
  updateHeros: any;
};

const ListItem = ({ hero, updateHeros }: Props) => {
  // Use collapase for power stats
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  // Set tag input
  const [tagInput, setTagInput] = useState("");

  // Add tag
  const setTag = (tag: string) => {
    if (tag === "") return;

    // Check if tag already exists
    const tags: string[] = hero.tags ? hero?.tags?.filter((t: string) => t !== tag) : [];

    // Push to temp array
    tags.push(tag);

    // Sync heros
    updateHeros({ ...hero, tags: [...tags] });

    // Clean up tag input
    setTagInput("");
  };

  // Remove tag
  const removeTag = (tag: string) => {
    // Sync heros
    updateHeros({ ...hero, tags: [...hero.tags.filter((t: string) => t !== tag)] });
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImageHolder}>
        <Image
          src={hero.images.lg}
          alt={hero.slug}
          width={200}
          height={240}
          className={styles.cardImage}
        />
      </div>
      <div className={`${styles.cardContent} ${styles["card-" + hero.biography.alignment]}`}>
        <h2 className={styles.cardTitle}>
          <Link href="/heros/[id]" as={`/heros/${hero.id}`}>
            <a>{hero.name}</a>
          </Link>
        </h2>
        <div className={styles.cardData}>
          <ul>
            <li>Fullname: {hero.biography.fullName ?? "N/A"}</li>
            <li>Race: {hero.appearance.race ?? "N/A"}</li>
            <li>Alignment: {hero.biography.alignment ?? "N/A"}</li>
            <li>Publisher: {hero.biography.publisher ?? "N/A"}</li>
          </ul>
          <section {...getCollapseProps()}>
            <h3>Powers: </h3>
            <ul>
              <li>Intelligence: {hero.powerstats.intelligence ?? 0}%</li>
              <li>Strength: {hero.powerstats.strength ?? 0}%</li>
              <li>Speed: {hero.powerstats.speed ?? 0}%</li>
              <li>Surability: {hero.powerstats.durability ?? 0}%</li>
              <li>Power: {hero.powerstats.power ?? 0}%</li>
              <li>Combat: {hero.powerstats.combat ?? 0}%</li>
            </ul>
            <section>
              <h4>Tags</h4>
              <div className={styles.cardAddTagButton}>
                <input
                  type="text"
                  name="tags"
                  placeholder="Add tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                />
                <button onClick={() => setTag(tagInput)}>Add Tag</button>
              </div>
              <div className={styles.cardTags}>
                {hero.tags?.map((tag: string) => (
                  <div className={styles.chip} key={`${hero.id}-${tag}`}>
                    {tag}
                    <span className={styles.chipRemove} onClick={(e) => removeTag(tag)}>
                      &times;
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
      <div className={styles.cardButton}>
        <button {...getToggleProps()}>{isExpanded ? "-" : "+"}</button>
      </div>
    </div>
  );
};

export default ListItem;
