import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./SectionFive.module.css";

const SectionFive = () => {
  const iconFacebook = () => {
    ReactPixel.trackCustom("Facebook Icon Two", {
      location: "Five Section",
      value: "Facebook Icon",
    });
  };
  const iconInstagram = () => {
    ReactPixel.trackCustom("Instagram Icon Two", {
      location: "Five Section",
      value: "Instagram Icon",
    });
  };

  return (
    <>
      <section className={styles.conatinerSection}>
        <div className={styles.divSection}>
          <div className={styles.divText}>
            <h2 className={styles.h2One}>
              Con <span>MBR</span> expresá
            </h2>
            <h2 className={styles.h2Two}>tu estilo y confianza</h2>
            <h2 className={styles.h2Three}>en cualquier ocasión.</h2>
          </div>
          <div className={styles.divSocialNet}>
            <p>Seguinos en las redes</p>
            <div className={styles.divLink}>
              <Link
                to="https://www.facebook.com/profile.php?id=100048890242534"
                target="_blank"
                rel="noreferer"
                className={styles.linkMenu}
                alt="icon-facebook"
                name="facebook-link"
              >
                <i className="fa-brands fa-square-facebook fa-2xl" onClick={iconFacebook} alt="icon-facebook"></i>
              </Link>
              <Link
                to="https://www.instagram.com/estilo.mbr/"
                target="_blank"
                rel="noreferer"
                className={styles.linkMenu}
                alt="icon-instagram"
                name="instagram-link"
              >
                <i className="fa-brands fa-instagram fa-2xl" onClick={iconInstagram} alt="icon-isntagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
