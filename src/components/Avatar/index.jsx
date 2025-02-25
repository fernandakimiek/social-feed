import styles from "./index.module.css";

export function Avatar({ hasBorder = true, urlImage }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={urlImage}
    />
  );
}
