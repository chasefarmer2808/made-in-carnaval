import { NextPage } from "next";
import { Carosel, CaroselItem } from "../components/Carosel";

const items: CaroselItem[] = [
  {
    src: "/gallery/gallery1.jpg",
  },
  {
    src: "/gallery/gallery2.jpg",
  },
  {
    src: "/gallery/gallery3.jpg",
  },
];

const Gallery: NextPage = () => {
  return (
    <main style={{ paddingTop: "50px" }}>
      <Carosel items={items} />
    </main>
  );
};

export default Gallery;
