import { NextPage } from "next";
import styles from "../styles/Ceremony.module.css";

const Ceremony: NextPage = () => {
  return (
    <main className="page-wrapper">
      <div className={`${styles["banner-container"]} parallax-container`}>
        <div className="abs-center-container" style={{ margin: "16px" }}>
          <div className={`${styles["ceremony-content"]} abs-center-content`}>
            <h1>Ceremony and Reception</h1>
            <div className={styles["ceremony-content-grid"]}>
              <div>When:</div>
              <div>April 15, 2023</div>
              <div>Where:</div>
              <div>
                <span>Cais do Oriente</span>
                <br></br>
                <span>Rua Visonde de Itaborai, 8</span>
                <br></br>
                <span>Centro, Rip de Janeiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Ceremony;
