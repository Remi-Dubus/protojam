import { useEffect, useState } from "react";
import type { charactersType } from "../../assets/lib/definitions";
import style from "./charactersDetails.module.css";

interface ModalProps {
  closeModal: (closeModal: boolean) => void;
}

function CharactersDetails({ closeModal }: ModalProps) {
  const [characters, setCharacters] = useState<charactersType[] | null>(null);

  const handleClick = () => {
    closeModal(false);
  };

  const handleKey = () => {
    closeModal(false);
  };

  useEffect(() => {
    const fetchCharacters = () => {
      fetch("http://localhost:3310/characters")
        .then((response) => response.json())
        .then((data: charactersType[]) => {
          setCharacters(data);
        });
    };

    fetchCharacters();
  }, []);

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKey}
      className={style.modalBackground}
    >
      <h1>Liste des Personnages</h1>
      <div>
        {characters?.map((character) => (
          <div key={character.ID}>
            <img src={character.Picture} alt={character.Firstname} />
            <h2>{character.Firstname}</h2>
            <p>Profession : {character.Profession}</p>
            <p>Catégorie : {character.Catégorie}</p>
            <p>Description : {character.Description}</p>
            <p>Localisation : {character.Localisation}</p>
            <p>Niveau de prix : {character.Price_level}</p>
            <ul>
              <li>Service 1 : {character.Itemservice_1}</li>
              <li>Service 2 : {character.Itemservice_2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharactersDetails;
