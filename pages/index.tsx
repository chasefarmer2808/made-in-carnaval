import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface HomePageProps {
  daysToGo: number;
}

const WEDDING_DATE = new Date("2023-04-15");
const MILLIS_IN_A_DAY = 1000 * 60 * 60 * 24;

const Home: NextPage<HomePageProps> = ({ daysToGo }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Made In Rio</title>
      </Head>
      <main className={styles.main}>
        <div className={`parallax-container ${styles["banner-container"]}`}>
          <div className="abs-center-container">
            <div
              className="abs-center-content bold"
              style={{ fontSize: "36px" }}
            >
              Nicole & Chase
            </div>
            <div
              className="abs-center-content bold"
              style={{ paddingBottom: "0" }}
            >
              Rio de Janeiro, Brazil
            </div>
            <div className="abs-center-content bold">
              <div>{t("weddingDate")}</div>
              <div style={{ paddingTop: "8px" }}>
                {`${daysToGo} ${daysToGo === 1 ? t("dayToGo") : t("daysToGo")}`}
              </div>
            </div>
            <div className="abs-center-content">
              <a
                className="link-button"
                href="https://docs.google.com/forms/d/1zgR0WWdiu1pgyZjOMnMbNLiUgDu1vSvIDEInEwJ3a4A/edit"
                target="_blank"
                rel="noreferrer"
              >
                {t("rsvpLink")}
              </a>
            </div>
          </div>
        </div>
        <div className="content-stripe">
          <h3>{t("rioTitle")}</h3>
          <p>{t("rioContent1")}</p>
          <p>{t("rioContent2")}</p>
        </div>
        <div
          className={`parallax-container ${styles["couple-container"]}`}
        ></div>
        <div className="content-stripe">
          <h3>{t("guideTitle")}</h3>
          <p>{t("guideIntro")}</p>
          <div className="link-container">
            <Link className="link-button" href="/guide">
              Travel Guide
            </Link>
            <Link className="link-button" href="/things">
              Things To Do
            </Link>
            <Link className="link-button" href="/rsvp">
              {t("navRsvp")}
            </Link>
            <Link className="link-button" href="/honeyfund">
              {t("navFund")}
            </Link>
            <Link className="link-button" href="/gallery">
              {t("navGallery")}
            </Link>
            <Link className="link-button" href="/phrases">
              {t("navPhrases")}
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>Questions? Email us at</h3>
            <a className="inline" href="mailto:nicandchase@madeinrio2023.com">
              nicandchase@madeinrio2023.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en-US" }) => {
  return {
    props: {
      daysToGo: daysToGo(),
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 86400, // Once a day.
  };
};

const daysToGo = (): number => {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  return Math.floor(diff / MILLIS_IN_A_DAY);
};

export default Home;
