import { NextPage } from "next";
import { Carosel, CaroselItem } from "../components/Carosel";

const items: CaroselItem[] = [
  {
    src: "/gallery/mexico.jpg",
    caption: "Chichenitza, Mexico, 2020",
  },
  {
    src: "/gallery/baltimore_2020.jpg",
    caption: "Baltimore, 2020",
  },
  {
    src: "/gallery/dc.jpg",
    caption: "Washington DC, 2020",
  },
  {
    src: "/gallery/shanendoa.jpg",
    caption: "Shenandoah, Virginia, 2021",
  },
  {
    src: "/gallery/rio.jpg",
    caption: "Rio de Janeiro, Brazil, 2021",
  },
  {
    src: "/gallery/salvador.jpg",
    caption: "Salvador, Brazil, 2021",
  },
  {
    src: "/gallery/chapada.jpg",
    caption: "Chapada Diamantina, Brazil, 2021",
  },
  {
    src: "/gallery/palm_beach.jpg",
    caption: "Palm Beach, Florida, 2022",
  },
  {
    src: "/gallery/nyc.jpg",
    caption: "New York City, 2022",
  },
  {
    src: "/gallery/baltimore_2022.jpg",
    caption: "Baltimore, 2022",
  },
];

const Gallery: NextPage = () => {
  return (
    <main
      style={{
        height: "100vh",
        paddingTop: "10px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Carosel items={items} />
    </main>
  );
};

export default Gallery;
