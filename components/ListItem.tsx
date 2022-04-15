import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Hero } from "../types";
import styles from "../styles/Card.module.css";

type Props = {
  data: Hero;
};

const ListItem = ({ data }: Props) => (
  <div className={styles.card}>
    <Image
      src={data.images.sm}
      alt={data.slug}
      width={160}
      height={240}
      className={styles.cardImage}
    />

    <div className={` ${styles.cardContent} ${styles["card-" + data.biography.alignment]}`}>
      <h2 className={styles.cardTitle}>
        <Link href="/heros/[id]" as={`/heros/${data.id}`}>
          <a>{data.name}</a>
        </Link>
      </h2>
      <div className={styles.cardData}>
        <ul>
          <li>Fullname: {data.biography.fullName ?? "N/A"}</li>
          <li>Race: {data.appearance.race ?? "N/A"}</li>
          <li>Alignment: {data.biography.alignment ?? "N/A"}</li>
          <li>Publisher: {data.biography.publisher ?? "N/A"}</li>
        </ul>
      </div>
    </div>
    <div className={styles.cardButton}>
      <button>+</button>
    </div>
  </div>
);

export default ListItem;
