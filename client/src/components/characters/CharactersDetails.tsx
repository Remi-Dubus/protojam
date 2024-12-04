import { useEffect, useState } from "react";
import type { charactersType } from "../../types/charactersType";

function CharactersDetails() {
  const [characters, setCharacters] = useState<charactersType[] | null>(null);

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
    <div>
      <h1>Liste des Personnages</h1>
      <div>
        {characters?.map((character) => (
          <div key={character.ID}>
            <img src={character.Picture} alt={character.Firstname} />
            <h2>{character.Firstname}</h2>
            <p>Profession : {character.Profession}</p>
            <p>Catégorie : {character.Category}</p>
            <p>Description : {character.Description}</p>
            <p>Localisation : {character.Localisation}</p>
            <p>Niveau de prix : {character.Price_level}</p>
            <ul>
              <li>Service 1 : {character.Item_service_1}</li>
              <li>Service 2 : {character.Item_service_2}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharactersDetails;
