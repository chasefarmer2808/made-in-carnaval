import Image, { StaticImageData } from "next/image";

export interface ImageLinkProps {
  imgSrc: StaticImageData;
  link: string;
  linkLabel: string;
  altText: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({
  imgSrc,
  link,
  linkLabel,
  altText,
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
        <Image src={imgSrc} fill={true} alt={altText} />
      </div>
      <a target='_blank' rel='noreferrer' href={link}>
        {linkLabel}
      </a>
    </div>
  );
};
