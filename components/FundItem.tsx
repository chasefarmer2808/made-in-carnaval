import Image from "next/image";
import { Fund } from "../pages/honeyfund";

export const FundItem: React.FC<Fund> = ({ label, dollar, real, imgSrc }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4px",
      }}
    >
      <div style={{ position: "relative", width: "250px", height: "200px" }}>
        <Image src={imgSrc} layout="fill" objectPosition="contain" />
      </div>
      <div>{label}</div>
      <div>
        <span style={{ paddingRight: "12px" }}>{dollar}</span>
        <span style={{ paddingLeft: "12px" }}>{real}</span>
      </div>
    </div>
  );
};
