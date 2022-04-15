import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Hero } from "../types";

type Props = {
  data: Hero;
};

const ListItem = ({ data }: Props) => (
  <>
    <Image src={data.images.sm} alt={data.slug} width={160} height={240} />
    <h2>
      <Link href="/heros/[id]" as={`/heros/${data.id}`}>
        <a>{data.name}</a>
      </Link>
    </h2>
    <ul key={data.id}>
      <li>Fullname: {data.biography.fullName}</li>
      <li>Race: {data.appearance.race}</li>
      <li>Alignment: {data.biography.alignment}</li>
      <li>Publisher: {data.biography.publisher}</li>
    </ul>
  </>
);

export default ListItem;
