import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./SectionFive.module.css";

const SectionFive = () => {
  const iconFacebook = () => {
    ReactPixel.trackCustom("IconFacebookLink2", "IconFacebook2", {
      value: "IconFacebook2",
    });
  };
  const iconInstagram = () => {
    ReactPixel.trackCustom("IconInstagramLink2", "IconInstagram2", {
      value: "IconInstagram2",
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
              >
                <i className="fa-brands fa-square-facebook fa-2xl" onClick={iconFacebook} alt="icon-facebook"></i>
              </Link>
              <Link
                to="https://www.instagram.com/estilo.mbr/"
                target="_blank"
                rel="noreferer"
                className={styles.linkMenu}
                aly="icon-instagram"
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
