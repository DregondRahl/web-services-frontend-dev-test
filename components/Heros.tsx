import { useEffect, useState } from "react";
import Search from "./Search";
import List from "./List";

import useStorage from "../utils/useStorage";
import { Hero } from "../types";

const Heros = () => {
  // Local storage
  const [localHeros, setLocalHeros] = useStorage("heros");

  // Set states
  const [heros, setHeros] = useState<Hero[]>();
  const [search, setSearch] = useState({ term: false, tag: false, result: [] });
  const [isLoading, setLoading] = useState(false);

  // Fetch Heros
  useEffect(() => {
    setLoading(true);
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setHeros(
          localHeros
            ? data.map((item: Hero, i: number) => Object.assign({}, item, localHeros[i]))
            : data
        );
        setLoading(false);
      });
  }, []);

  // Update heros localstorage
  useEffect(() => {
    setLocalHeros([...(heros ?? [])]);
  });

  if (isLoading) return <p>Loading...</p>;
  if (!heros) return <p>No heros data</p>;

  // Update heros
  const updateHeros = (hero: Hero) => {
    const records = heros.map((item: Hero) =>
      item.id === hero.id ? Object.assign({}, item, hero) : item
    );
    setHeros([...records]);
  };

  return (
    <>
      <Search heros={heros} setSearch={setSearch} />
      <List heros={heros} search={search} updateHeros={updateHeros} />
    </>
  );
};

export default Heros;
