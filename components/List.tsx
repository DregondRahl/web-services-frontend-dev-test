import * as React from "react";
import ListItem from "./ListItem";
import { Hero } from "../types";
import styles from "../styles/Heros.module.css";

type Props = {
  items: Hero[];
};

const List = ({ items }: Props) => (
  <div className={styles.scroller}>
    {items.map((item) => (
      <ListItem data={item} key={item.id} />
    ))}
  </div>
);

export default List;
