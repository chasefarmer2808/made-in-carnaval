import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import styles from "../styles/RSVP.module.css";

const RSVP: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <div className={`${styles["banner-container"]} parallax-container`}>
        <div className='abs-center-container' style={{ margin: "16px" }}>
          <div className='abs-center-content'>
            <h3>{t("rsvpIntro")}</h3>
            <a
              className='link-button'
              href='https://docs.google.com/forms/d/1zgR0WWdiu1pgyZjOMnMbNLiUgDu1vSvIDEInEwJ3a4A/edit'
              target='_blank'
              rel='noreferrer'
            >
              {t("rsvpLink")}
            </a>
          </div>
        </div>
      </div>
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

export default RSVP;
