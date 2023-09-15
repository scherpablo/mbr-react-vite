import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

const Buttons = () => {
  
  ReactPixel.trackSingleCustom("Purchase", "Tienda");
  ReactPixel.trackSingleCustom("Purchase", "Facebook");
  ReactPixel.trackSingleCustom("trackSIngleCustom", "Instagram", "Link" );

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
              onClick={ReactPixel.trackSingleCustom("Purchase", "Tienda")}
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
              onClick={ReactPixel.trackSingleCustom("Purchase", "Facebook")}
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
              onClick={ReactPixel.trackSingleCustom("Purchase", "Instagram")}
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
