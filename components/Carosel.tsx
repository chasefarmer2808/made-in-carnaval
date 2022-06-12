import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Carosel.module.css";

export interface CaroselItem {
  src: string;
  caption?: string;
}

interface CaroselProps {
  items: CaroselItem[];
  header?: string;
}

export const Carosel: React.FC<CaroselProps> = ({ items, header }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [displays, setDisplays] = useState(items.map(() => "none"));
  const [dotClasses, setDotClasses] = useState(items.map(() => ""));

  useEffect(() => {
    setDisplays(() => {
      const temp = items.map(() => "none");
      temp[currIndex] = "block";
      return temp;
    });
  }, [currIndex, items]);

  useEffect(() => {
    setDotClasses(() => {
      const temp = items.map(() => "");
      temp[currIndex] = "active";
      return temp;
    });
  }, [currIndex, items]);

  const prevImg = () => {
    let newIndex = currIndex - 1;

    if (newIndex === -1) {
      newIndex = items.length - 1;
    }

    setCurrIndex(newIndex);
  };

  const nextImg = () => {
    let newIndex = currIndex + 1;
    newIndex = newIndex % items.length;

    setCurrIndex(newIndex);
  };

  return (
    <div>
      {header && <h2>{header}</h2>}
      <div className={styles["carosel-container"]}>
        {items.map((item, index) => (
          <div
            key={item.src}
            className={`${styles["carosel-item"]} fade`}
            style={{
              display: displays[index],
              position: "relative",
              height: "inherit",
            }}
          >
            <div className={styles["item-number"]}>
              {index + 1} / {items.length}
            </div>
            <Image src={item.src} layout="fill" objectFit="cover" />
            {item.caption && (
              <div className={`${styles["item-caption"]} fade`}>
                {item.caption}
              </div>
            )}
            <button className={styles["prev"]} onClick={prevImg}>
              &#10094;
            </button>
            <button className={styles["next"]} onClick={nextImg}>
              &#10095;
            </button>
          </div>
        ))}
        <br />
        <div style={{ textAlign: "center" }}>
          {items.map((item, index) => (
            <span
              key={item.src}
              className={`${styles["dot"]} ${dotClasses[index]}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
