import Slider from "react-slick";
import styles from "./Carroussel.module.css";
import datas from "./datas.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carroussel() {
  const data = datas;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slidercontainer}>
      <div className={styles.contener}>
        <Slider {...settings}>
          <figure className={styles.cards}>
            <img src={data[0].Image} alt="{data[0].Image}" />
            <figcaption>
              <h3>{data[0].Prénom}</h3>
              <h3>{data[0].Catégorie}</h3>
              <h3>{data[0].Description} </h3>
              <h3>{data[0]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
          <figure className={styles.cards}>
            <img src={data[1].Image} alt="{data[1].Image}" />
            <figcaption>
              <h3>{data[1].Prénom}</h3>
              <h3>{data[1].Catégorie}</h3>
              <h3>{data[1].Description} </h3>
              <h3>{data[1]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
          <figure className={styles.cards}>
            <img src={data[2].Image} alt="{data[2].Image}" />
            <figcaption>
              <h3>{data[2].Prénom}</h3>
              <h3>{data[2].Catégorie}</h3>
              <h3>{data[2].Description} </h3>
              <h3>{data[2]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
          <figure className={styles.cards}>
            <img src={data[3].Image} alt="{data[3].Image}" />
            <figcaption>
              <h3>{data[3].Prénom}</h3>
              <h3>{data[3].Catégorie}</h3>
              <h3>{data[3].Description} </h3>
              <h3>{data[3]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
          <figure className={styles.cards}>
            <h1>{data[0].Image}</h1>
            <figcaption>
              <h3>{data[0].Prénom}</h3>
              <h3>{data[0].Catégorie}</h3>
              <h3>{data[0].Description} </h3>
              <h3>{data[0]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
          <figure className={styles.cards}>
            <img src={data[2].Image} alt="{data[2].Image}" />
            <figcaption>
              <h3>{data[2].Prénom}</h3>
              <h3>{data[2].Catégorie}</h3>
              <h3>{data[2].Description} </h3>
              <h3>{data[2]["Niveau de prix"]} </h3>
            </figcaption>
          </figure>
        </Slider>
      </div>
    </div>
  );
}

export default Carroussel;
