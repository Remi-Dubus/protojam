import style from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={style.heroPic} />

      <div className={style.shortcutContainer}>
        <a href="?">Alimentation</a>
        <a href="?">Biens</a>
        <a href="?">Services</a>
        <a href="?">Équipements</a>
      </div>

      <div className={style.textContainer}>
        <h1>Vital Market</h1>
      </div>
      <div className={style.descContainer}>
        <p>
          Des médicaments, des vivres, de la protection ? Trouvez tout ce dont
          vous avez besoin sur Vital Market.
        </p>
      </div>
    </header>
  );
}

export default Header;
