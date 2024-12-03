import SearchBar from "../searchBar/SearchBar";
import style from "./navBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.navBar}>
      <h2>Logo</h2>
      <SearchBar />
      <h2>BRGR</h2>
    </nav>
  );
}
