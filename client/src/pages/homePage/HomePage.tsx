import { useOutletContext } from "react-router-dom";
import data from "../../../../server/database/characters.json";
import type { charactersType } from "../../assets/lib/definitions";
import Carroussel from "../../components/carroussel/Carroussel";

export default function HomePage() {
  const characters = data as charactersType[];

  // recupérations des props d'outlet
  const cardValue: charactersType = useOutletContext();

  return (
    <>
      <h1>{cardValue ? cardValue.Firstname : []}</h1>
      <Carroussel characters={characters ? characters : []} />{" "}
    </>
  );
}
