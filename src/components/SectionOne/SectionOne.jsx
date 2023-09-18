import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  const iconFacebook = () => {
    ReactPixel.trackCustom("IconFacebookLink1", "IconFacebook1", {
      value: "IconFacebook1",
    });
  };
  const iconInstagram = () => {
    ReactPixel.trackCustom("IconInstagramLink1", "IconInstagram1", {
      value: "IconInstagram1",
    });
  };

  return (
    <>
      <section className={styles.conatinerSection}>
        <div className={styles.divSection}>
          <div className={styles.divText}>
            <h2>Siempre es buen</h2>
            <h2 className={styles.h2Two}>momento para usar</h2>
            <h2 className={styles.h2Three}>
              <span>MBR.</span>
            </h2>
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
                <i className="fa-brands fa-instagram fa-2xl" onClick={iconInstagram} alt="icon-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
