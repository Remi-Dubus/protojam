import { useState } from "react";
import data from "../../../../server/database/characters.json";
import type { charactersType } from "../../assets/lib/definitions";
import style from "./searchBar.module.css";

export default function SearchBar({
  setCardValue,
}: {
  setCardValue: React.Dispatch<React.SetStateAction<charactersType | null>>;
}) {
  // recupétation des données
  const characters = data;
  // gestion de l'état
  const [value, setValue] = useState("");

  // permet d'afficher les touches entrée par l'utilisateur et remplacer les caractères interdits
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.replace(/[^\.a-zA-Z0-9-:&()éèÉÈ']/g, ""));
  };

  // permet au click de déplacer la suggestion dans la champ de saisis
  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  // permet de valider la recherche
  const onClickSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    onSearch(value);

    // transformation de l'entrée de l'utilisateur
    const JobSearchCase = value.toLowerCase().replace(/\s/g, "");

    // comparaison de l'entrée de l'utilisateur avec la base de donnée
    const foundJob = characters.find(
      (j) => j.Profession.toLowerCase().replace(/\s/g, "") === JobSearchCase,
    );
    // redirection
    foundJob ? setCardValue(foundJob) : alert("not found");
  };

  // style des suggestions
  const dropDownStyle = value !== "" ? style.dropDown : style.dropDownNone;

  // filtre l'api afin de comparer l'entrée utilisateur
  const jobFilter = characters.filter((j) => {
    const searchTerm = value.toLowerCase().replace(/\s/g, "");
    const JobName = j.Profession.toLowerCase().replace(/\s/g, "");

    // renvoie la comparaison si il y a une recherche, si un metier est selectionné la suggestion disparait
    return (
      searchTerm && JobName.startsWith(searchTerm) && JobName !== searchTerm
    );
  });

  return (
    <div className={style.searchBarSection}>
      <h2 className={style.searchLabel}>Search:</h2>
      <div className={style.searchBar}>
        <input
          className={style.searchInput}
          type="search"
          placeholder="What is your emergency?"
          value={value}
          onChange={onChange}
        />
        <button
          className={style.searchButton}
          type="button"
          onClick={onClickSearch}
        >
          {" "}
        </button>
      </div>
      <section className={dropDownStyle}>
        {value.length > 40 && (
          <p className={style.error}>Too much characters.</p>
        )}
        {jobFilter.map((c) => (
          <button
            type="button"
            key={c.ID}
            className={style.dropDownRow}
            onClick={() => onSearch(c.Profession)}
          >
            {c.Profession}
          </button>
        ))}
      </section>
    </div>
  );
}
