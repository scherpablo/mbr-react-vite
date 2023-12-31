// import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const facebook = "https://www.facebook.com/profile.php?id=100048890242534"
const instagram = "https://www.instagram.com/estilo.mbr/"

const Footer = () => {
  // const iconFacebook = () => {
  //   ReactPixel.trackCustom("Facebook Icon Three", {
  //     location: "Footer",
  //     value: "Facebook Icon",
  //   });
  // };
  // const iconInstagram = () => {
  //   ReactPixel.trackCustom("Instagram Icon Three", {
  //     location: "Footer",
  //     value: "Instagram Icon",
  //   });
  // };

  return (
    <>
      <footer className={styles.containerFooter}>
        <div className={styles.divTopFooter}>
          <img src="img/navBar/logo-mbr-svg.svg" alt="logo-footer" width="200" height="80" />
          <div className={styles.divMenuFooter}>
            <a href="#home">
              <p>Inicio</p>
            </a>
            <Link
              to="https://tienda.estilombr.com.ar/accesorios/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
              name="accesorios-link"
            >
              <p>Accesorios</p>
            </Link>
            <Link
              to="https://tienda.estilombr.com.ar/calzado/borcegos/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
              name="borcegos-link"
            >
              <p>Borcegos</p>
            </Link>
            <Link
              to="https://tienda.estilombr.com.ar/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
              name="tienda-online-link"
            >
              <p>Tienda Online</p>
            </Link>
          </div>
        </div>
        <div className={styles.divBottomFooter}>
          <div className={styles.iconsFooter}>
            <Link
              to={facebook}
              target="_blank"
              rel="noreferer"
              alt="icon-facebook"
              name="facebook-link"
            >
              <i className="fa-brands fa-square-facebook fa-lg" /*onClick={iconFacebook}*/ alt="icon-facebook"></i>
            </Link>
            <Link
              to={instagram}
              target="_blank"
              rel="noreferer"
              alt="icon-instagram"
              name="instagram-link"
            >
              <i className="fa-brands fa-instagram fa-lg" /*onClick={iconInstagram}*/ alt="icon-instagram"></i>
            </Link>
          </div>
          <p className={styles.mail}>contaco@estilombr.com.ar</p>
          <span>{String.fromCharCode(169)} 2023 Estilo MBR | Desarrollado por <Link to="https://facilitadora.com.ar/" target="_blank" rel="noreferer" className={styles.linkFacilitadora}>Facilitadora</Link></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
