import styles from "./ResetButton.module.css";
import dataArray from "./DataArray";
const ResetButton = ({ resetCount, setCookiesPerSecond, setUpgrades }) => {
  const resetEverything = () => {
    resetCount(0);
    setCookiesPerSecond(1);
    setUpgrades(dataArray);
  };

  return (
    <div>
      <button className={styles.reset} onClick={resetEverything}>
        Reset Game
      </button>
    </div>
  );
};

export default ResetButton;
