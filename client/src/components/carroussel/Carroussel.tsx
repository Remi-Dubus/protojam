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

  return (
    <div className={styles.alignement}>
    <div className={styles.slidercontainer}>
      <div className={styles.contener}>
      <h2 className={styles.maintitle}>ALIMENTATION</h2>
        <Slider {...settings}>
          {characters.map((c) => (
            <figure className={styles.cards} key={c.ID}>
              <img src={c.Picture} alt="{data[0].Image}" />
              <figcaption id={`${c.ID}`}>
                <h3>{c.Firstname}</h3>
                <h3>{c.Catégorie}</h3>
                <h3>{c.Description} </h3>
                <h3>{c.Price_level} </h3>
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
          {characters.map((c) => (
            <figure className={styles.cards} key={c.ID}>
              <img src={c.Picture} alt="{data[0].Image}" />
              <figcaption id={`${c.ID}`}>
                <h3>{c.Firstname}</h3>
                <h3>{c.Catégorie}</h3>
                <h3>{c.Description} </h3>
                <h3>{c.Price_level} </h3>
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
          {characters.map((c) => (
            <figure className={styles.cards} key={c.ID}>
              <img src={c.Picture} alt="{data[0].Image}" />
              <figcaption id={`${c.ID}`}>
                <h3>{c.Firstname}</h3>
                <h3>{c.Catégorie}</h3>
                <h3>{c.Description} </h3>
                <h3>{c.Price_level} </h3>
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
