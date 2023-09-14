/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => { 
  const handleExplorerClick = () => {
    fbq("track", "Purchase", {
      value: 100,
      currency: "USD",
    });
  };

  return (
    <>
      <header className={`${styles.section} ${styles.header}`} id="home">
        <Helmet>
          
        </Helmet>
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
            <button
              className={styles.buttonHeader}
              onClick={handleExplorerClick}
            >
              Explorar
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
