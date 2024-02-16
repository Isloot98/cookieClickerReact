import { useState, useEffect } from "react";
import styles from "./CookieTimer.module.css";

const Timer = ({ count, setCount, cookiesPerSecond }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + cookiesPerSecond);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cookiesPerSecond, setCount]);

  return (
    <div className={styles.wobblyH1}>
      <h1>Cookies: {count}</h1>
    </div>
  );
};

export default Timer;
