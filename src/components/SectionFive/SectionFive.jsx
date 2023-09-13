import { Link } from "react-router-dom";
import styles from "./SectionFive.module.css";

const SectionFive = () => {
  return (
    <>
      <section className={styles.conatinerSection}>
        <div className={styles.divSection}>
          <div className={styles.divText}>
            <h2 className={styles.h2One}>Con <span>MBR</span> expresa</h2>
            <h2 className={styles.h2Two}>tu estilo y confianza</h2>
            <h2 className={styles.h2Three}>
              en cualquier ocasión.
            </h2>
          </div>
          <div className={styles.divSocialNet}>
            <p>Seguinos en las redes</p>
            <Link
              to="https://www.facebook.com/profile.php?id=100048890242534"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
            >
              <i className="fa-brands fa-square-facebook fa-xl"></i>
            </Link>
            <Link
              to="https://www.instagram.com/estilo.mbr/"
              target="_blank"
              rel="noreferer"
              className={styles.linkMenu}
            >
              <i className="fa-brands fa-instagram fa-xl"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFive;
