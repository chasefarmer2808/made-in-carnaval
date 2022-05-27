import styles from "../styles/ToggleSwitch.module.css";

interface ToggleSwitchProps {
  checked: boolean;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked }) => {
  return (
    <label className={styles["switch"]}>
      <input type="checkbox" defaultChecked={checked} />
      <span className={`${styles["slider"]} ${styles["round"]}`}></span>
    </label>
  );
};
