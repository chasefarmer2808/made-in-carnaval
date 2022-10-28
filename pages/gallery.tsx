import { NextPage } from "next";
import { Carosel, CaroselItem } from "../components/Carosel";
import styles from "../styles/Gallery.module.css";
import mexicoPic from "../public/gallery/mexico.jpg";
import balt2020Pic from "../public/gallery/baltimore_2020.jpg";
import dcPic from "../public/gallery/dc.jpg";
import shanenPic from "../public/gallery/shanendoa.jpg";
import rioPic from "../public/gallery/rio.jpg";
import salvPic from "../public/gallery/salvador.jpg";
import chapPic from "../public/gallery/chapada.jpg";
import palmPic from "../public/gallery/palm_beach.jpg";
import nycPic from "../public/gallery/nyc.jpg";
import balt2022Pic from "../public/gallery/baltimore_2022.jpg";

const items: CaroselItem[] = [
  {
    img: mexicoPic,
    caption: "Chichenitza, Mexico, 2020",
  },
  {
    img: balt2020Pic,
    caption: "Baltimore, 2020",
  },
  {
    img: dcPic,
    caption: "Washington DC, 2020",
  },
  {
    img: shanenPic,
    caption: "Shenandoah, Virginia, 2021",
  },
  {
    img: rioPic,
    caption: "Rio de Janeiro, Brazil, 2021",
  },
  {
    img: salvPic,
    caption: "Salvador, Brazil, 2021",
  },
  {
    img: chapPic,
    caption: "Chapada Diamantina, Brazil, 2021",
  },
  {
    img: palmPic,
    caption: "Palm Beach, Florida, 2022",
  },
  {
    img: nycPic,
    caption: "New York City, 2022",
  },
  {
    img: balt2022Pic,
    caption: "Baltimore, 2022",
  },
];

const Gallery: NextPage = () => {
  return (
    <main
      className={styles["gallery-page"]}
      style={{
        height: "100vh",
        paddingTop: "10px",
        backgroundColor: "white",
      }}
    >
      <Carosel items={items} />
    </main>
  );
};

export default Gallery;
