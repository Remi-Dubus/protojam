import styles from "./navBar.module.css";

export default function NavBar() {
  return (
    <section className={styles["navbar-container"]}>
      <img className={styles.logo} src="../src/assets/images/Logo.png" alt="Logo" />
      <div className={styles.column}>
        <h2>Vital Market</h2>
        <div>Rechercher</div>
      </div>
      <select className={styles["filtre-container"]}>
        <option value="" className="">
          Filtre
        </option>
      </select>
    </section>
  )
}
