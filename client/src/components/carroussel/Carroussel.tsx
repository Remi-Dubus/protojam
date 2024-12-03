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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.alignement}>
      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>ALIMENTATION</h2>
          <Slider {...settings}>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[0].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[0].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[0].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[1].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[1]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[3].Image} alt={data[3].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[3].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[3].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[3]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
          </Slider>
        </div>
      </div>

      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>EQUIPEMENTS</h2>
          <Slider {...settings}>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[0].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[0].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[0].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[1].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[1]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[3].Image} alt={data[3].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[3].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[3].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[3]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
          </Slider>
        </div>
      </div>

      <div className={styles.slidercontainer}>
        <div className={styles.contener}>
          <h2 className={styles.maintitle}>SERVICES</h2>
          <Slider {...settings}>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[0].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[0].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[0].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[1].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[1]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[3].Image} alt={data[3].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[3].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[3].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[3]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[0].Image} alt={data[1].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[1].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[1].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[0]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
            <figure className={styles.cards}>
              <img src={data[2].Image} alt={data[2].Image} />
              <figcaption>
                <h3 className={styles.title}>
                  <b>{data[2].Prénom}</b>
                </h3>
                <h3>
                  <b>Description: </b>
                  <em>{data[2].Description}</em>
                </h3>
                <h3>
                  <b>Prix: </b>
                  <em>{data[2]["Niveau de prix"]}</em>
                </h3>
              </figcaption>
            </figure>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carroussel;
