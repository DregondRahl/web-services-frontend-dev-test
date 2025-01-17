import ListItem from "./ListItem";
import Error from "./Error"
import { Hero } from "../types";
import styles from "../styles/Heros.module.css";

type Props = {
  heros: Hero[];
  search: {
    term: boolean | string;
    tag: boolean | string;
    result: Hero[];
  };
  updateHeros: any;
};

const List = ({ heros, search, updateHeros }: Props) => {
  // Check if data is from search result
  const records: Hero[] = search.term || search.tag ? search.result : heros;

  return (
    <div className={styles.scroller} role="list" aria-label="Heros list">
      {records.map((hero) => (
        <ListItem hero={hero} key={hero.id} updateHeros={updateHeros} />
      ))}
      {(search.term || search.tag) && search.result.length < 1 ? <Error /> : ""}
    </div>
  );
};

export default List;
