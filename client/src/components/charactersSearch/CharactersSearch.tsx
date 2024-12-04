import type { charactersType } from "../../assets/lib/definitions";
import style from "./charactersSearch.module.css";

function CharactersDetails({
  character,
}: { character: charactersType | null }) {
  return (
    <div className={style.description}>
      <h2>{character ? character.Firstname : ""}</h2>
      <p>Profession : {character ? character.Profession : ""}</p>
      <p>Catégorie : {character ? character.Catégorie : ""}</p>
      <p>Description : {character ? character.Description : ""}</p>
      <p>Localisation : {character ? character.Localisation : ""}</p>
      <p>Niveau de prix : {character ? character.Price_level : ""}</p>
      <ul>
        <li>Service 1 : {character ? character.Itemservice_1 : ""}</li>
        <li>Service 2 : {character ? character.Itemservice_2 : ""}</li>
      </ul>
    </div>
  );
}

export default CharactersDetails;
