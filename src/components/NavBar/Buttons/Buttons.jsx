// import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./Buttons.module.css";

const Buttons = () => {
  
  // const store = () => {
  //   ReactPixel.trackCustom("Button Store", {
  //     location: "NavBar",
  //     value: "Tienda",
  //   })
  // };
  // const facebook = () => {
  //   ReactPixel.trackCustom("Button Facebook", {
  //     location: "NavBar",
  //     value: "Facebook",
  //   })
  // };
  // const instagram = () => {
  //   ReactPixel.trackCustom("Button Instagram", {
  //     location: "NavBar",
  //     value: "Instagram",
  //   });
  // }

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
              /*onClick={store}*/
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
              /*onClick={facebook}*/
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
              /*onClick={instagram}*/
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
