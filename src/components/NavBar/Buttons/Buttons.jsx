import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

const Buttons = () => {
  const eventStore = {
    value: 100,
    currency: "USD",
  };
  ReactPixel.trackSingleCustom("Purchase", eventStore);

  // const eventFacebook = {
  //   value: "facebook",
  // };
  // ReactPixel.trackSingleCustom("Purchase", eventFacebook);

  // const eventInstagram = {
  //   value: "Instagram",
  // };
  // ReactPixel.trackSingleCustom("Purchase", eventInstagram);

  return (
    <>
      <div>
        <div className={styles.divMenu}>
          <Link
            to="https://tienda.estilombr.com.ar/"
            target="_blank"
            rel="noreferrer"
            className={styles.linkMenu}
          >
            <button
              className={styles.buttonNavBar}
              onClick={ReactPixel.trackSingleCustom()}
            >
              Tienda
            </button>
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100048890242534"
            target="_blank"
            rel="noreferrer"
            className={styles.linkMenu}
          >
            <button
              className={styles.buttonNavBar}
              onClick={ReactPixel.trackSingleCustom()}
            >
              Facebook
            </button>
          </Link>
          <Link
            to="https://www.instagram.com/estilo.mbr/"
            target="_blank"
            rel="noreferrer"
            className={styles.linkMenu}
          >
            <button
              className={styles.buttonNavBar}
              onClick={ReactPixel.trackSingleCustom()}
            >
              Instagram
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Buttons;
