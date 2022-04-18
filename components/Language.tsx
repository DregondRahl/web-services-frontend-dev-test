import { i18n } from "next-i18next";
import Link from "next/link";
import styles from "../styles/Language.module.css";

const Language = () => {
  return (
    <Link
      href="#"
      locale={i18n?.language == "en" ? "fr" : "en"}
      as={i18n?.language == "en" ? "fr" : "en"}
    >
      <a
        className={styles.langSwitch}
        aria-label={i18n?.language == "en" ? "Language english" : "Language french"}
        aria-labelledby="Language Switcher"
        tabIndex={0}
      >
        {i18n?.language == "en" ? "French?" : "English?"}
      </a>
    </Link>
  );
};

export default Language;
