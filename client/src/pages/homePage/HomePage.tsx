import { useLoaderData, useOutletContext } from "react-router-dom";

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
import Mercenaire from "../../assets/images/mercenaire.jpg";
import Restaurateur from "../../assets/images/restaurateur.jpg";

import type { charactersType } from "../../assets/lib/definitions";
import Carroussel from "../../components/carroussel/Carroussel";

export default function HomePage() {
  const characters: charactersType[] = useLoaderData() as charactersType[];

  const pictureFood = [Restaurateur];
  const pictureEquip = [Mécanicien, Armurier];
  const pictureBiens = [Médecin, Marchand, Contrebandier, Ingénieur];
  const pictureServ = [
    Mercenaire,
    ChasseurdePrime,
    Aubergiste,
    Garde,
    Informaticien,
    Journaliste,
  ];

  // recupérations des props d'outlet
  const cardValue: charactersType = useOutletContext();

  return (
    <>
      <h1>{cardValue !== null ? cardValue.Firstname : []}</h1>
      <article>
        <Carroussel
          characters={characters ? characters : []}
          pictureFood={pictureFood}
          pictureEquip={pictureEquip}
          pictureServ={pictureServ}
          pictureBiens={pictureBiens}
        />
      </article>
    </>
  );
}
