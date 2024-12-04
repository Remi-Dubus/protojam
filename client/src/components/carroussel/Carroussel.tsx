import Slider from "react-slick";
import styles from "./Carroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { charactersType } from "../../assets/lib/definitions";

function Carroussel({
  characters,
  pictureFood,
  pictureEquip,
  pictureServ,
  pictureBiens,
}: {
  characters: charactersType[];
  pictureFood: string[];
  pictureEquip: string[];
  pictureServ: string[];
  pictureBiens: string[];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const alimentation = characters.filter((alim) =>
    alim.Catégorie.includes("Alimentation"),
  );
  const biens = characters.filter((bien) => bien.Catégorie.includes("Biens"));
  const serv = characters.filter((service) =>
    service.Catégorie.includes("Services"),
  );
  const equip = characters.filter((equipement) =>
    equipement.Catégorie.includes("Equipements"),
  );
  return (
    <div className={styles.alignement} id="food">
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>ALIMENTATION</h2>

          <Slider {...settings}>
            {alimentation.map((c, i) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={pictureFood[i]} alt={c.Profession} />
                <figcaption id={`${c.ID}`}>
                  <h3 className={styles.title}>{c.Firstname}</h3>
                  <h3>
                    <em>{c.Catégorie}</em>
                  </h3>
                  <h3>
                    <em>{c.Description}</em>{" "}
                  </h3>
                  <h3>
                    <em>Prix : {c.Price_level}</em>{" "}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.slidercontainer} id="equip">
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>EQUIPEMENTS</h2>
          <Slider {...settings}>
            {equip.map((c, i) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={pictureEquip[i]} alt={c.Profession} />
                <figcaption id={`${c.ID}`}>
                  <h3 className={styles.title}>{c.Firstname}</h3>
                  <h3>
                    <em>{c.Catégorie}</em>
                  </h3>
                  <h3>
                    <em>{c.Description}</em>{" "}
                  </h3>
                  <h3>
                    <em>Prix : {c.Price_level}</em>{" "}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.slidercontainer} id="serv">
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>SERVICES</h2>
          <Slider {...settings}>
            {serv.map((c, i) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={pictureServ[i]} alt={c.Profession} />
                <figcaption id={`${c.ID}`}>
                  <h3 className={styles.title}>{c.Firstname}</h3>
                  <h3>
                    <em>{c.Catégorie}</em>
                  </h3>
                  <h3>
                    <em>{c.Description}</em>{" "}
                  </h3>
                  <h3>
                    <em>Prix : {c.Price_level}</em>{" "}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.slidercontainer} id="biens">
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>BIENS</h2>
          <Slider {...settings}>
            {biens.map((c, i) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={pictureBiens[i]} alt={c.Profession} />
                <figcaption id={`${c.ID}`}>
                  <h3 className={styles.title}>{c.Firstname}</h3>
                  <h3>
                    <em>{c.Catégorie}</em>
                  </h3>
                  <h3>
                    <em>{c.Description}</em>{" "}
                  </h3>
                  <h3>
                    <em>Prix : {c.Price_level}</em>{" "}
                  </h3>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carroussel;
