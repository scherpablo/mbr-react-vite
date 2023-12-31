// import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  // const explorer = () => {
  //   ReactPixel.trackCustom("Button Explorer", "Botón Explorar", {
  //     location: "Header",
  //     value: "Explorar",
  //   });
  // };

  return (
    <>
      <header className={`${styles.section} ${styles.header}`} id="home">
        <div className={styles.divHeader}>
          <NavBar />
        </div>
        <div className={styles.divBottomHeader}>
          <h3>Somos estilo MBR</h3>
          <p>Encuentra tu borcegol ideal</p>
          <Link
            to="https://tienda.estilombr.com.ar/"
            target="_blank"
            rel="noreferer"
          >
            <button className={styles.buttonHeader} /*onClick={explorer}*/>
              Explorar
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
