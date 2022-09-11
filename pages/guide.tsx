import { NextPage } from "next";
import Image from "next/image";

const Guide: NextPage = () => {
  return (
    <main className="page-wrapper">
      <section className="content-stripe-thin">
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
      </section>
      <section className="content-stripe-thin">
        <h3>Traveling from the USA</h3>
        <p>
          Rio has two major airports: Galeao (GIG) and Santos Dumont (SDU). Fun
          fact: Most of the world believes that Santos Dumont was the first
          person to invent the airplane, not the Wright brothers. Most major
          airline companies have direct flights to Galeao from many cities in
          the US, such as Miami, Orlando, New York, Huston, etc. We like to use{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/travel/flights"
          >
            Google Flights
          </a>{" "}
          to find the best route. You should be able to find round trip tickets
          for around $500 or less.
        </p>
      </section>
      <section className="content-stripe-thin">
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
      <section className="content-stripe-thin">
        <h3>Do I Need to Rent a Car?</h3>
        <p>
          NO! GOD NO! PLEASE!!!! Traffic and parking are not great in Rio, so we
          do not recommend renting a car. Rio has a good public transportation
          service with buses and metro. Uber is also extremely available and
          easy to use.
        </p>
      </section>
      <section className="content-stripe-thin">
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
        <Image src="/rio_neighborhoods.jpg" width="800" height="500" />
      </section>
    </main>
  );
};

export default Guide;
