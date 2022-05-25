import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { FundItem } from "../components/FundItem";

export interface Fund {
  imgSrc: string;
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
      imgSrc: "/plane.png",
    },
    {
      label: "Passeios / Tours",
      dollar: "$150",
      real: "R$200",
      imgSrc: "/tour.png",
    },
    {
      label: "Jantar romântico/Romantic dinner",
      dollar: "$100",
      real: "R$150",
      imgSrc: "/dinner.png",
    },
    {
      label: "Hospedagem / Accomodation",
      dollar: "$100",
      real: "R$150",
      imgSrc: "/bed.png",
    },
    {
      label: "Transporte / Transport",
      dollar: "$50",
      real: "R$100",
      imgSrc: "/train.png",
    },
    {
      label: "Cerveja e comidas / Beer and food",
      dollar: "$20",
      real: "R$50",
      imgSrc: "/beer.png",
    },
  ];
  return (
    <main>
      <section className="content-stripe-thin">
        <h3>{t("fundTitle")}</h3>
        <p style={{ paddingBottom: "16px" }}>{t("fundIntro")}</p>
        <div className="item-grid">
          {funds.map((fund) => (
            <FundItem key={fund.imgSrc} {...{ ...fund }} />
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
