import Image from "next/image";

export interface ImageLinkProps {
  imgSrc: string;
  link: string;
  linkLabel: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({
  imgSrc,
  link,
  linkLabel,
}) => {
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
      <a target="_blank" rel="noreferrer" href={link}>
        {linkLabel}
      </a>
    </div>
  );
};
