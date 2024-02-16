import React from "react";
import styles from "./App.module.css";
import Timer from "./CookieTimer";
import ResetButton from "./ResetButton";
import { useState, useEffect } from "react";
import ClickCookie from "./CookieClickButton";
import Upgrades from "./Upgrades";
import dataArray from "./DataArray";

function App() {
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  );
  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    parseInt(localStorage.getItem("cookiesPerSecond")) || 1
  );

  useEffect(() => {
    localStorage.setItem("cookies", cookies.toString());
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());
  }, [cookies, cookiesPerSecond]);

  const [upgrades, setUpgrades] = useState(() => {
    const savedUpgrades = JSON.parse(localStorage.getItem("upgrades"));
    return savedUpgrades || dataArray;
  });

  useEffect(() => {
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
  }, [upgrades]);

  return (
    <>
      <div className={styles.outerDiv}>
        <div className={styles.columnOne}>
          <ClickCookie increaseCookies={setCookies} numOfCookies={cookies} />
        </div>
        <div className={styles.columnTwo}>
          <Timer
            count={cookies}
            setCount={setCookies}
            cookiesPerSecond={cookiesPerSecond}
          />
          <ResetButton
            resetCount={setCookies}
            setCookiesPerSecond={setCookiesPerSecond}
            setUpgrades={setUpgrades}
          />
        </div>
        <div className={styles.columnThreeS}>
          <Upgrades
            cookies={cookies}
            setCookies={setCookies}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
            upgrades={upgrades}
            setUpgrades={setUpgrades}
          />
        </div>
      </div>
    </>
  );
}

export default App;
