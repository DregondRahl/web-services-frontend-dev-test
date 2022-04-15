import type { NextPage } from "next";
import useSWR from "swr";

import List from "../components/List";

const Home: NextPage = () => {
  const { data, error } = useSWR(
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json"
  );

  if (error) return <>An error has occurred.</>;
  if (!data) return <>Loading...</>;

  return <List items={data} />;
};

export default Home;
