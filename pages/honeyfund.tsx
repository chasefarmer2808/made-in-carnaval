import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { FundItem } from "../components/FundItem";
import planePic from "../public/plane.png";
import tourPic from "../public/tour.png";
import dinnerPic from "../public/dinner.png";
import bedPic from "../public/bed.png";
import trainPic from "../public/train.png";
import beerPic from "../public/beer.png";
import { StaticImageData } from "next/image";

export interface Fund {
  img: StaticImageData;
  label: string;
  dollar: string;
  real: string;
}

const Honeyfund: NextPage = () => {
  const { t } = useTranslation("common");

  const funds: Fund[] = [
    {
      label: "Passagem aérea / Airplane ticket",
      dollar: "$200",
      real: "R$250",
      img: planePic,
    },
    {
      label: "Passeios / Tours",
      dollar: "$150",
      real: "R$200",
      img: tourPic,
    },
    {
      label: "Jantar romântico/Romantic dinner",
      dollar: "$100",
      real: "R$150",
      img: dinnerPic,
    },
    {
      label: "Hospedagem / Accomodation",
      dollar: "$100",
      real: "R$150",
      img: bedPic,
    },
    {
      label: "Transporte / Transport",
      dollar: "$50",
      real: "R$100",
      img: trainPic,
    },
    {
      label: "Cerveja e comidas / Beer and food",
      dollar: "$20",
      real: "R$50",
      img: beerPic,
    },
  ];
  return (
    <main className='page-wrapper'>
      <section className='content-stripe-thin'>
        <h3>{t("fundTitle")}</h3>
        <p>{t("fundIntro")}</p>
        <h3>Payment Methods</h3>
        <div className='payment-methods'>
          <div>
            <h3>Brazil</h3>
            <p>Pix nicole.guimaraesoc@gmail.com</p>
          </div>
          <div>
            <h3>US</h3>
            <p>Venmo @chase-farmer-6</p>
          </div>
        </div>
        <p style={{ textAlign: "center" }}>{t("fundNote")}</p>
      </section>
      <section className='content-stripe-thin'>
        <div className='item-grid'>
          {funds.map((fund) => (
            <FundItem key={fund.img.src} {...{ ...fund }} />
          ))}
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en-US" }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Honeyfund;
