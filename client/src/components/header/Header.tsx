import hero from "../../assets/images/hero-picture.jpg";
import style from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={style.heroPic}>
        <img src={hero} alt="Centre commercial" />
      </div>

      <div className={style.textContainer}>
        <h1>Vital Market</h1>
        <p>Recherchez vous </p>
      </div>
    </header>
  );
}

export default Header;
