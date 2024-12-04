import Slider from "react-slick";
import styles from "./Carroussel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../../../server/database/characters.json";
import type { charactersType } from "../../assets/lib/definitions";

function Carroussel({
  characters,
  picture,
}: { characters: charactersType[]; picture: string[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const charactersFull: charactersType[] = data;

  return (
    <div className={styles.slidercontainer}>
      <div className={styles.contener}>
        <Slider {...settings}>
          {characters.map((c, i) => (
            <figure className={styles.cards} key={c.ID}>
              <img
                src={
                  characters.length === charactersFull.length ? picture[i] : ""
                }
                alt={c.Profession}
              />
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
  );
}

export default Carroussel;
