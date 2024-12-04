import type { charactersType } from "../../assets/lib/definitions";
import SearchBar from "../searchBar/SearchBar";
import styles from "./navBar.module.css";

export default function NavBar({
  setCardValue,
}: {
  setCardValue: React.Dispatch<React.SetStateAction<charactersType | null>>;
}) {
  return (
    <section className={styles["navbar-container"]}>
      <img
        className={styles.logo}
        src="../src/assets/images/Logo.png"
        alt="Logo"
      />
      <div className={styles.column}>
        <SearchBar setCardValue={setCardValue} />
      </div>
      <select className={styles["filtre-container"]}>
        <option value="" className="">
          - Prix -
        </option>
        <option value="bas" className="">
          bas
        </option>
        <option value="moyen" className="">
          moyen
        </option>
        <option value="élevé" className="">
          élevé
        </option>
      </select>
    </section>
  );
}
