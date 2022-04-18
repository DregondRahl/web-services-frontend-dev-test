import { i18n } from "next-i18next";
import Link from "next/link";
import styles from "../styles/Language.module.css";

const Language = () => {
  return (
    <Link href="#" locale={i18n?.language == "en" ? "fr" : "en"} as={i18n?.language == "en" ? "fr" : "en"}>
      <a className={styles.langSwitch}>{i18n?.language == "en" ? "French?" : "English?"}</a>
    </Link>
  );
};

export default Language;
