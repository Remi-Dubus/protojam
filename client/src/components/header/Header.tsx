import style from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={style.heroPic} />

      <div className={style.shortcutContainer}>
        <a href="#food">Alimentation</a>
        <a href="#biens">Biens</a>
        <a href="#serv">Services</a>
        <a href="#equip">Équipements</a>
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
