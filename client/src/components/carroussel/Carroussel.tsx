import Slider from "react-slick";
import styles from "./Carroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { charactersType } from "../../assets/lib/definitions";

function Carroussel({ characters }: { characters: charactersType[] }) {
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
    <div className={styles.alignement}>
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>ALIMENTATION</h2>

          <Slider {...settings}>
            {alimentation.map((c) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={c.Picture} alt="{data[0].Image}" />
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
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>EQUIPEMENTS</h2>
          <Slider {...settings}>
            {equip.map((c) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={c.Picture} alt="{data[0].Image}" />
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
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>SERVICES</h2>
          <Slider {...settings}>
            {serv.map((c) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={c.Picture} alt="{data[0].Image}" />
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
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>BIENS</h2>
          <Slider {...settings}>
            {biens.map((c) => (
              <figure className={styles.cards} key={c.ID}>
                <img src={c.Picture} alt="{data[0].Image}" />
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
