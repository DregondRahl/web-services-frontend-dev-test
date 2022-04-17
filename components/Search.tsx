import { useEffect, useState } from "react";
import { Hero } from "../types";
import styles from "../styles/Search.module.css";

type Props = {
  heros: Hero[];
  setSearch: any;
};

const Search = ({ heros, setSearch }: Props) => {
  // Tags
  const tagList = ["love", "hate"];

  // Filters Tags
  const [tagFilter, setTagFilter] = useState("");

  // Filters Heros
  const [heroFilter, setHeroFilter] = useState("");

  // Filters
  useEffect(() => {
    const search = {
      term: heroFilter === "" ? false : heroFilter,
      tag: tagFilter === "" ? false : tagFilter,
      result: heros.filter((hero: Hero) => {
        // Filter tag and term
        if (tagFilter !== "" && heroFilter !== "") {
          return (
            hero.name.toLowerCase().includes(heroFilter.toLowerCase()) &&
            hero?.tags?.includes(tagFilter)
          );
        }
        // Filter tag only
        if (tagFilter !== "") {
          return hero.tags && hero.tags.includes(tagFilter);
        }
        // Filter term only
        return hero.name.toLowerCase().includes(heroFilter.toLowerCase());
      }),
    };
    // Set heros
    setSearch(search);
  }, [heroFilter, tagFilter, heros, setSearch]);

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          name="search"
          placeholder="Search by Name"
          onChange={(e) => setHeroFilter(e.target.value)}
        />
      </div>
      <div className={styles.searchTags}>
        {tagList.map((tag: any) => (
          <div
            className={`${styles.chip} ${tagFilter === tag ? styles.chipSelected : ""}`}
            key={`'filter-${tag}`}
            onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
          >
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
