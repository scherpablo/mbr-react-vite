import { Link } from "react-router-dom";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <>
      <section className={styles.conatinerSection}>
        <div className={styles.divSection}>
          <div className={styles.divText}>
            <h2>Siempre es un buen</h2>
            <h2 className={styles.h2Two}>momento para usar</h2>
            <h2 className={styles.h2Three}>
              tus borcegos <span>MBR.</span>
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
              >
                <i className="fa-brands fa-square-facebook fa-2xl"></i>
              </Link>
              <Link
                to="https://www.instagram.com/estilo.mbr/"
                target="_blank"
                rel="noreferer"
                className={styles.linkMenu}
              >
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
