import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>Made In Rio</title>
      </Head>
      <main className={styles.main}>
        <div
          className="parallax-container"
          style={{ backgroundImage: "url(/banner.jpg)" }}
        >
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
            <div className="abs-center-content bold">April 15, 2023</div>
          </div>
        </div>
        <div className="content-stripe">
          <h3>{t("rioTitle")}</h3>
          <p>{t("rioContent1")}</p>
          <p>{t("rioContent2")}</p>
        </div>
        <div
          className="parallax-container"
          style={{ backgroundImage: "url(/couple2.jpg)" }}
        ></div>
        <div className="content-stripe">
          <h3>{t("guideTitle")}</h3>
          <p>{t("guideIntro")}</p>
          <div className="link-container">
            <Link href="/guide">
              <a className="link-button">Travel Guide</a>
            </Link>
            <Link href="/things">
              <a className="link-button">Things To Do</a>
            </Link>
            <Link href="/rsvp">
              <a className="link-button">{t("navRsvp")}</a>
            </Link>
            <Link href="/honeyfund">
              <a className="link-button">{t("navFund")}</a>
            </Link>
            <Link href="/gallery">
              <a className="link-button">{t("navGallery")}</a>
            </Link>
            <Link href="/phrases">
              <a className="link-button">{t("navPhrases")}</a>
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
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
