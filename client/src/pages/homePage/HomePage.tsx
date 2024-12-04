import { useOutletContext } from "react-router-dom";
import data from "../../../../server/database/characters.json";

import Armurier from "../../assets/images/armurier.jpg";
import Aubergiste from "../../assets/images/aubergiste.jpg";
import ChasseurdePrime from "../../assets/images/chasseur_prime.jpg";
import Contrebandier from "../../assets/images/contrebandier.jpg";
import Garde from "../../assets/images/garde.jpg";
import Informaticien from "../../assets/images/informaticien.jpg";
import Ingénieur from "../../assets/images/ingenieur.jpg";
import Journaliste from "../../assets/images/journaliste.jpg";
import Marchand from "../../assets/images/marchand.jpg";
import Mécanicien from "../../assets/images/mecanicien.jpg";
import Médecin from "../../assets/images/medecin.jpg";
import Restaurateur from "../../assets/images/medecin.jpg";
import Mercenaire from "../../assets/images/mercenaire.jpg";

import type { charactersType } from "../../assets/lib/definitions";
import Carroussel from "../../components/carroussel/Carroussel";

export default function HomePage() {
  const characters = data as charactersType[];
  const arrayOfpicture = [
    Médecin,
    Mécanicien,
    Mercenaire,
    ChasseurdePrime,
    Marchand,
    Armurier,
    Restaurateur,
    Aubergiste,
    Garde,
    Contrebandier,
    Ingénieur,
    Informaticien,
    Journaliste,
  ];

  // recupérations des props d'outlet
  const cardValue: charactersType = useOutletContext();

  return (
    <>
      <h1>{cardValue ? cardValue.Firstname : []}</h1>
      <Carroussel characters={characters} picture={arrayOfpicture} />
    </>
  );
}
