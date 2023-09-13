/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer id="contact" className={styles.footer}>
        <div className={styles.containerFooter}>
          {/* REDES */}
          <div className={styles.socialNetworks}>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-square-facebook fa-lg"></i>
              <a
                href="https://www.facebook.com/profile.php?id=100048890242534"
                target="_blank"
                rel="noreferer"
              >
                Facebook
              </a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-instagram fa-lg"></i>
              <a
                href="https://www.instagram.com/estilo.mbr/"
                target="_blank"
                rel="noreferer"
              >
                Instagram
              </a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              <a href="https://whatsapp.com/" target="_blank" rel="noreferer">
                WhatsApp
              </a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-regular fa-envelope fa-lg"></i>
              <p>contacto@estilombr.com.ar</p>
            </div>
          </div>

          {/* FOOTER BAR  */}
          <div className={styles.linksFooter}>
            <div className={styles.containerIcon}>
            <i className="fa-solid fa-house fa-lg"></i>
              <a href="#home">Inicio</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-solid fa-ring fa-lg"></i>
              <a href="#services">Accesorios</a>
            </div>
            <div className={styles.containerIcon}>
            <i className="fa-brands fa-shopify fa-lg"></i>
              <a href="#directDivision">Borcegos</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <a href="#clients">Tienda Online</a>
            </div>
          </div>
        </div>
        <div className={styles.containerCopyright}>
          <div className={styles.containerCopyLinks}>
            <p>
              <a href="#home" className={styles.copyLink}>
                Estilo MBR{" "}
              </a>
              <span>{String.fromCharCode(169)} 2023 | Desarrollado por</span>{" "}
              <Link
                to="https://facilitadora.com.ar"
                target="_blank"
                className={styles.copyLink}
              >
                Facilitadora
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
