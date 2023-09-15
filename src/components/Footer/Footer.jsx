import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.containerFooter}>
        <div className={styles.divTopFooter}>
          <img src="img/header/logo-new.png" alt="" />
          <div className={styles.divMenuFooter}>
            <a href="#home">
              <p>Inicio</p>
            </a>
            <Link
              to="https://tienda.estilombr.com.ar/accesorios/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
            >
              <p>Accesorios</p>
            </Link>
            <Link
              to="https://tienda.estilombr.com.ar/calzado/borcegos/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
            >
              <p>Borcegos</p>
            </Link>
            <Link
              to="https://tienda.estilombr.com.ar/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
            >
              <p>Tienda Online</p>
            </Link>
          </div>
        </div>
        <div className={styles.divBottomFooter}>
          <span>{String.fromCharCode(169)} 2023 | Estilo MBR</span>
          <div className={styles.iconsFooter}>
            <Link
              to="https://www.instagram.com/estilo.mbr/"
              target="_blank"
              rel="noreferer"
            >
              <i className="fa-brands fa-square-facebook fa-lg"></i>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100048890242534"
              target="_blank"
              rel="noreferer"
            >
              <i className="fa-brands fa-instagram fa-lg"></i>
            </Link>
            <Link to="https://whatsapp.com/" target="_blank" rel="noreferer">
              <i className="fa-brands fa-whatsapp fa-lg"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
