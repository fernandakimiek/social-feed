import styles from "./index.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h2 className={styles.title}>Social Feed</h2>
    </header>
  );
}
