import { NextPage } from "next";
import Image from "next/image";
import { Icon } from "../components/Icon";
import styles from "../styles/Guide.module.css";
import palacePic from "../public/palace.webp";
import savoyPic from "../public/savoy.webp";
import neighborhoodsPic from "../public/rio_neighborhoods.jpg";

const Guide: NextPage = () => {
  return (
    <main className='page-wrapper'>
      <section className='content-stripe-thin'>
        <h3>Hotel Accomodations</h3>
        <p>
          We have two hotel options for guests to choose from: Rio Othon Palace,
          and Savoy Othon. Both are located on the south end of the Copacabana
          Beach area. Othon Palace is located right on the beach, while Savoy
          Othon is a couple blocks up. Both hotels offer free breakfast, wifi, a
          gym and a kids play area. However,{" "}
          <b>
            only Rio Othon Palace offers beach views, rooms with balconies, and
            a pool.
          </b>
        </p>
        <p>
          See the links to the official websites below. We have group codes for
          each Hotel listed below as well. Please use the code when booking on
          their websites!
        </p>
        <div className={styles["hotel-listings"]}>
          <div style={{ textAlign: "center" }}>
            <h4>Rio Othon Palace</h4>
            <div
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <Image
                src={palacePic}
                fill={true}
                alt='Picture of Rio Othon Palace Hotel'
              />
            </div>
            <span style={{ display: "block" }}>
              <em>Group Code: 39405</em>
            </span>
            <span style={{ display: "block" }}>
              <a
                href='https://book.omnibees.com/hotelresults?c=1343&q=2042&hotel_folder=&NRooms=1&CheckIn=11042023&CheckOut=16042023&ad=1&ch=0&ag=&group_code=39405&lang=en-US&currencyId=16'
                target='_blank'
                rel='noreferrer'
                className='inline'
              >
                Official Link
                <Icon name='external-link' />
              </a>
            </span>
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>Savoy Othon</h4>
            <div
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <Image
                src={savoyPic}
                fill={true}
                alt='Picture of Rio Othon Savoy Hotel'
              />
            </div>
            <span style={{ display: "block" }}>
              <em>Group Code: 77175</em>
            </span>
            <span style={{ display: "block" }}>
              <a
                href='https://book.omnibees.com/hotelresults?c=1343&q=2043&hotel_folder=&NRooms=1&CheckIn=11042023&CheckOut=16042023&ad=1&ch=0&ag=&group_code=77175&lang=en-US&currencyId=16'
                target='_blank'
                rel='noreferrer'
                className='inline'
              >
                Official Link
                <Icon name='external-link' />
              </a>
            </span>
          </div>
        </div>
      </section>
      <section className='content-stripe-thin'>
        <h3>Traveling from the USA</h3>
        <p>
          Rio has two major airports: Galeao (GIG) and Santos Dumont (SDU). Fun
          fact: Most of the world believes that Santos Dumont was the first
          person to invent the airplane, not the Wright brothers. Most major
          airline companies have direct flights to Galeao from many cities in
          the US, such as Miami, Orlando, New York, Huston, etc. We like to use{" "}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.google.com/travel/flights'
          >
            Google Flights
          </a>{" "}
          to find the best route. You should be able to find round trip tickets
          for around $500 or less.
        </p>
      </section>
      <section className='content-stripe-thin'>
        <h3>Local Currency</h3>
        <p>
          It is best to use a travel credit card when you can, but it is also
          important to have some cash on hand. The currency in Brazil is the
          Real. Today, one US dollar is about 5 Reais (half a liter of beer in
          Rio). You can change your US cash either in the Rio airport or one of
          the many local currency exchange buisinesses. You can usually find a
          better rate ourside the airport.{" "}
        </p>
      </section>
      <section className='content-stripe-thin'>
        <h3>Do I Need to Rent a Car?</h3>
        <p>
          NO! GOD NO! PLEASE!!!! Traffic and parking are not great in Rio, so we
          do not recommend renting a car. Rio has a good public transportation
          service with buses and metro. Uber is also extremely available and
          easy to use.
        </p>
      </section>
      <section className='content-stripe-thin'>
        <h3>Where to Stay</h3>
        <p>
          While the party will be in the historical center of Rio, we recommend
          staying in the following tourist neighborhoods in Zona Sul (South
          Zone), as they are safe and offer many things to do:
        </p>
        <ul>
          <li>Copacabana/Leme (Great beach on the ocrean)</li>
          <li>
            Ipanema/Leblon (Next to Copacabana but a little more expensive;
            great beach on the ocean)
          </li>
          <li>
            Flamengo/Botafogo (Close to Copacabana and a little less expensive;
            beach on the bay where you do not swim).
          </li>
        </ul>
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
          <Image
            src={neighborhoodsPic}
            fill={true}
            style={{ objectFit: "contain" }}
            alt='Rio neighborhoods map'
          />
        </div>
      </section>
    </main>
  );
};

export default Guide;
