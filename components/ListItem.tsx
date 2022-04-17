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
    <div
      className={styles.card}
      role="listitem"
      arira-label={hero.name}
      arira-labelby={`${hero.name}'s profile`}
    >
      <div className={styles.cardImageHolder}>
        <Image
          src={hero.images.lg}
          alt={hero.slug}
          width={200}
          height={240}
          className={styles.cardImage}
          tabIndex={0}
          role="img"
          aria-label={`${hero.name ?? "Hero"} Image`}
        />
      </div>
      <div className={`${styles.cardContent} ${styles[hero.biography.alignment + "Alignment"]}`}>
        <h2 className={styles.cardTitle}>
          <Link href="/heros/[id]" as={`/heros/${hero.id}`}>
            <a>{hero.name}</a>
          </Link>
        </h2>
        <div className={styles.cardData}>
          <ul role="list" aria-label={`${hero.name}'s Biography`} tabIndex={0}>
            <li>Fullname: {hero.biography.fullName ?? "N/A"}</li>
            <li>Race: {hero.appearance.race ?? "N/A"}</li>
            <li>Alignment: {hero.biography.alignment ?? "N/A"}</li>
            <li>Publisher: {hero.biography.publisher ?? "N/A"}</li>
          </ul>
          <section
            {...getCollapseProps()}
            aria-label={`${hero.name}'s expanded details`}
            tabIndex={0}
          >
            <h3>Powers: </h3>
            <ul role="list" aria-label={`${hero.name}'s Powers`} tabIndex={0}>
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
                <button
                  onClick={() => setTag(tagInput)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? setTag(tagInput) : false)}
                >
                  Add Tag
                </button>
              </div>
              <div
                className={styles.cardTags}
                role="list"
                aria-label="Hero tags list"
                aria-labelledby="Hero tags list"
                tabIndex={0}
              >
                {hero.tags?.map((tag: string) => (
                  <div
                    className={styles.chip}
                    key={`${hero.id}-${tag}`}
                    role="listitem"
                    aria-label={tag}
                    tabIndex={0}
                  >
                    {tag}
                    <span
                      className={styles.chipRemove}
                      onClick={(e) => removeTag(tag)}
                      onKeyDown={(e) =>
                        e.key === "Enter" || e.key === " " ? removeTag(tag) : false
                      }
                      aria-label={`Remove tag ${tag}`}
                      aria-labelledby={`Remove tag ${tag}`}
                      tabIndex={0}
                    >
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
        <button
          {...getToggleProps()}
          role="button"
          arira-label={isExpanded ? "Collpase hero details" : "Expand hero details"}
          arira-labelby="Expand or collpase profile details"
        >
          {isExpanded ? "-" : "+"}
        </button>
      </div>
    </div>
  );
};

export default ListItem;
