import styles from "./CookieButton.module.css";

const ClickCookie = ({ numOfCookies, increaseCookies }) => {
  return (
    <button
      className={styles.cookie}
      onClick={() => increaseCookies(numOfCookies + 1)}
    >
      <img src="https://www.svgrepo.com/show/396073/cookie.svg" />
    </button>
  );
};

export default ClickCookie;
