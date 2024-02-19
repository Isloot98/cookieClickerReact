import styles from "./Upgrades.module.css";
import { useEffect } from "react";

const Upgrades = ({
  cookiesPerSecond,
  setCookiesPerSecond,
  cookies,
  setCookies,
  upgrades,
  setUpgrades,
}) => {
  console.log(upgrades);

  const buyUpgrades = (upgrade) => {
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost);
      setCookiesPerSecond(cookiesPerSecond + upgrade.increase);
      setUpgrades((prevData) => {
        return prevData.map((prevUpgrade) => {
          if (prevUpgrade.id === upgrade.id) {
            return { ...prevUpgrade, quantity: upgrade.quantity + 1 };
          }
          return prevUpgrade;
        });
      });
    } else {
      alert("Not enough cookies to buy this upgrade!");
    }
  };

  useEffect(() => {
    console.log(upgrades);
  }, [upgrades]);
  return (
    <div className={styles.upgrades}>
      <h1 className={styles.wobblyH1}>Upgrades</h1>
      <div className={styles.upgradesContainer}>
        {upgrades.map((upgrade) => (
          <div className={styles.upgrade} key={upgrade.id}>
            <img src={upgrade.imgUrl} />
            <button
              className={styles.upgradeButton}
              onClick={() => buyUpgrades(upgrade)}
            >
              Buy {upgrade.type}
            </button>
            <br></br>
            <span>Cost: {upgrade.cost}</span>
            <span>{upgrade.quantity}</span>
            <p>increase cookies by {upgrade.increase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upgrades;
