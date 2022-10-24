import styles from "../styles/Footer.module.css";

export default function Footer(options) {
  return (
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; 2022
        <code>{"{AllisonDev/}"}</code>
      </p>
    </footer>
  );
}
