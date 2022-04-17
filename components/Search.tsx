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

  // Filters
  const [tagFilter, setTagFilter] = useState("");
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
      <div className={styles.searchBar} role="search">
        <input
          type="search"
          name="search"
          placeholder="Search by Name"
          onChange={(e) => setHeroFilter(e.target.value)}
          tabIndex={0}
          role="searchbox"
          contentEditable="true"
          aria-placeholder="Search by Name"
          aria-labelledby="search"
        />
      </div>
      <div className={styles.searchTags}>
        {tagList.map((tag: any) => (
          <div
            className={`${styles.chip} ${tagFilter === tag ? styles.chipSelected : ""}`}
            key={`'filter-${tag}`}
            onClick={() => setTagFilter(tagFilter === tag ? "" : tag)}
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " "
                ? setTagFilter(tagFilter === tag ? "" : tag)
                : false
            }
            tabIndex={0}
            aria-label={`Filter heros by ${tag} tag `}
            role="button"
            aria-pressed={tagFilter === tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
