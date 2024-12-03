import style from "./searchBar.module.css";

export default function SearchBar() {
  const characters = [
    {
      ID: 1,
      Prénom: "Julien",
      Métier: "Médecin",
      Catégorie: "Services",
      Description:
        "Médecin aguerri, Julien parcourt les ruines de Paris pour soigner les survivants, toujours équipé de son sac de premiers secours.",
      Localisation: "Le Marais",
      Image: "",
      "Niveau de prix": "Élevé",
      "Item/service 1": "Consultation médicale",
      "Item/service 2": "Kit de premiers secours",
    },
    {
      ID: 6,
      Prénom: "Hugo",
      Métier: "Armurier",
      Catégorie: "Equipements",
      Description:
        "Ancien forgeron, Hugo fabrique et répare des armes pour aider les habitants à se défendre dans ce monde dangereux.",
      Localisation: "Le Marais",
      Image: "",
      "Niveau de prix": "Élevé",
      "Item/service 1": "Réparation d’armes",
      "Item/service 2": "Vente de munitions",
    },
    {
      ID: 7,
      Prénom: "Marion",
      Métier: "Restaurateur",
      Catégorie: "Alimentation",
      Description:
        "Marion prépare des repas chauds pour les survivants, transformant des ingrédients limités en plats délicieux.",
      Localisation: "Montmartre",
      Image: "",
      "Niveau de prix": "Moyen",
      "Item/service 1": "Repas chaud",
      "Item/service 2": "Boissons artisanales",
    },
    {
      ID: 19,
      Prénom: "Damien",
      Métier: "Tapissier",
      Catégorie: "Biens",
      Description:
        "Damien restaure et fabrique n'importe quoi à base de tissu, ramenant un peu de confort aux parisiens.",
      Localisation: "Le Marais",
      Image: "",
      "Niveau de prix": "Moyen",
      "Item/service 1": "Restauration de chaises",
      "Item/service 2": "Création de tapisseries",
    },
  ];

  return (
    <div className={style.searchBarSection}>
      <h2 className={style.searchLabel}>Search:</h2>
      <div className={style.searchBar}>
        <input className={style.searchInput} type="search" />
        <button className={style.searchButton} type="button">
          {" "}
        </button>
      </div>
    </div>
  );
}
