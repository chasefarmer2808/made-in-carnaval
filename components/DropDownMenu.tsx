import { useState } from "react";
import styles from "../styles/DropDownMenu.module.css";

interface DropDownMenuProps {
  items: string[];
  onSelect: (item: string) => void;
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({
  items,
  onSelect,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setActive((val) => !val)}>Language ^</button>
      <div className={`${styles["menu"]} ${!active && styles["menu-hidden"]}`}>
        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
          {items.map((item) => (
            <li key={item}>
              <button onClick={() => onSelect(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
