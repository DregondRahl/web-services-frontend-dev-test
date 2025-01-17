import type { NextPage } from "next";
import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Heros from "../components/Heros";
import styles from "../styles/Heros.module.css";
import GameMode from "../components/GameMode";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage = () => {
  // Load Language
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Heros console application" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} tabIndex={0} aria-label="Heros main console">
        <div className={styles.grid}>
          <div className={styles.paper}>
            <Heros />
          </div>
        </div>
        <GameMode />
      </main>
    </>
  );
};

export default Home;
