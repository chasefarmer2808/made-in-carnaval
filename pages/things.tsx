import { NextPage } from "next";
import { ImageLink, ImageLinkProps } from "../components/ImageLink";
import cristoPic from "../public/cristo.png";
import paoPic from "../public/pao.png";
import centerPic from "../public/center.png";
import styles from "../styles/Things.module.css";

const thingsData: ImageLinkProps[] = [
  {
    linkLabel: "Cristo Redentor",
    link: "https://visit.rio/en/que_fazer/christtheredeemer/",
    imgSrc: cristoPic,
    altText: "Crist the Redeamer",
  },
  {
    linkLabel: "Pão de Açúcar",
    link: "https://visit.rio/en/que_fazer/sugarloaf/",
    imgSrc: paoPic,
    altText: "Ride to Suger Loaf Mountain",
  },
  {
    linkLabel: "Center, Lapa, Santa Teresa",
    link: "https://freewalkertours.com/rio-de-janeiro/tours/free-walking-tour-downtown-and-lapa/",
    imgSrc: centerPic,
    altText: "Historic Santa Teresa",
  },
];

const Things: NextPage = () => {
  return (
    <main className='page-wrapper'>
      <section className='content-stripe-thin'>
        <h3>Famous Spots</h3>
        <div className='item-grid'>
          {thingsData.map((thing) => (
            <ImageLink key={thing.imgSrc.src} {...{ ...thing }} />
          ))}
        </div>
        <div className='col-center'>
          <p>
            Rio has so many things to do that it is impossible to list
            everything. Depending on your travel style, you can spend the day on
            the beach, bike through the city, hike, climb, party all night,
            visit museums, etc. Ask us if you have any questions, and do not be
            afraid to follow Rio&apos;s energy.
          </p>
        </div>
      </section>
      <div className={`${styles["garden-container"]} parallax-container-small`}>
        <div className='abs-center-container'>
          <a
            className='link-button'
            target='_blank'
            rel='noreferrer'
            href='https://visit.rio/en/welcome/'
          >
            Click Here to Explore More!
          </a>
        </div>
      </div>
      <section className='content-stripe-thin'>
        <h3>Rent a Bike!</h3>
        <p>
          <a>Bike Itau</a> is a public rental bike service. There are many
          stations around the city for a quick and cheap way to get around. We
          recommend riding along the beach on the Pramanade.
        </p>
      </section>
      <div
        className={`${styles["bike-container"]} parallax-container-small`}
      ></div>
      <section className='content-stripe-thin'>
        <h3>Food and Drink 🤤</h3>
        <p>
          Enjoy the food! Try things that you never had before. Such as:
          feijoada, coxinha, dadinho de tapioca, bolinho de bacalhau, pastel,
          picadinho, and much more. At the beach, you need to have a mate and
          biscoito globo. It is the favorite combination for cariocas. Wash it
          all down with a caipirinha, cerveja, or agua de coco!!!
        </p>
      </section>
      <div
        className='parallax-container-small'
        style={{ backgroundImage: "url(/food.jpg)" }}
      ></div>
    </main>
  );
};

export default Things;
