import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { Icon } from "../components/Icon";
import styles from "../styles/Ceremony.module.css";

const Ceremony: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <main>
      <div className={`${styles["banner-container"]} parallax-container`}>
        <div className="abs-center-container" style={{ margin: "16px" }}>
          <div className={`${styles["ceremony-content"]} abs-center-content`}>
            <h1>{t("ceremonyPageTitle")}</h1>
            <div className={styles["ceremony-content-grid"]}>
              <div className={styles["ceremony-content-label"]}>
                {t("when")}:
              </div>
              <div>April 15, 2023</div>
              <div className={styles["ceremony-content-label"]}>
                {t("where")}:
              </div>
              <div>
                <span>Cais do Oriente</span>
                <br></br>
                <span>Rua Visonde de Itaborai, 8</span>
                <br></br>
                <span>Centro, Rio de Janeiro</span>
                <br></br>
                <div>
                  <a
                    className="inline"
                    style={{ marginRight: "8px" }}
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.google.com/maps/place/Cais+do+Oriente/@-22.9013405,-43.1755447,15z/data=!4m5!3m4!1s0x0:0x66b71b30656c1ee5!8m2!3d-22.9013405!4d-43.1755447"
                  >
                    {t("map")} <Icon name="external-link" />
                  </a>
                  <a
                    className="inline"
                    rel="noreferrer"
                    target="_blank"
                    href="https://caisdooriente-rj.com.br/"
                  >
                    {t("website")} <Icon name="external-link" />
                  </a>
                </div>
              </div>
              <div className={styles["ceremony-content-label"]}>
                {t("details")}:
              </div>
              <div>{t("detailsInfo")}</div>
              <div className={styles["ceremony-content-label"]}>
                {t("attire")}:
              </div>
              <div>{t("attireInfo")}</div>
            </div>
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

export default Ceremony;
