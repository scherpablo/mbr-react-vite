import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const iconFacebook = () => {
    ReactPixel.trackCustom("IconFacebookLink3", "IconFacebook3", {
      value: "IconFacebook3",
    });
  };
  const iconInstagram = () => {
    ReactPixel.trackCustom("IconInstagramLink3", "IconInstagram3", {
      value: "IconInstagram3",
    });
  };
  const iconWhatsapp  = () => {
    ReactPixel.trackCustom("iconWhatsappLink", "iconWhatsapp", {
      value: "iconWhatsapp",
    });
  };

  return (
    <>
      <footer className={styles.containerFooter}>
        <div className={styles.divTopFooter}>
          <img src="img/navBar/logo-new.webp" alt="logo-footer" width="200" height="80" />
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
              to="https://www.facebook.com/profile.php?id=100048890242534"
              target="_blank"
              rel="noreferer"
              alt="icon-facebook"
            >
              <i className="fa-brands fa-square-facebook fa-lg" onClick={iconFacebook} alt="icon-facebook"></i>
            </Link>
            <Link
              to="https://www.instagram.com/estilo.mbr/"
              target="_blank"
              rel="noreferer"
              alt="icon-instagram"
            >
              <i className="fa-brands fa-instagram fa-lg" onClick={iconInstagram} alt="icon-instagram"></i>
            </Link>
            <Link to="https://whatsapp.com/" target="_blank" rel="noreferer" alt="icon-whatsapp">
              <i className="fa-brands fa-whatsapp fa-lg" onClick={iconWhatsapp} alt="icon-whatsapp"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
