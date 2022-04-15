import * as React from "react";
import styles from "../styles/Search.module.css";

const Search = () => (
  <div className={styles.searchBar}>
    <input type="text" name="search" placeholder="Search by Name" />
  </div>
);

export default Search;
