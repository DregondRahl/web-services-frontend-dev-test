import { useTranslation } from "next-i18next";
import styles from "../styles/Error.module.css";

const Error = () => {
  // Load Language
  const { t } = useTranslation("common");
  return <div className={styles.error}>{t("no_results")}</div>;
};

export default Error;
