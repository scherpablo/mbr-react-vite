import { Link } from "react-router-dom";
import styles from "./SectionOne.module.css";

const SectionOne = () => {
  return (
    <>
      <section className={styles.conatinerSection}>
        <div className={styles.divSection}>
          <div className={styles.divText}>
            <h2>Siempre es un buen</h2>
            <h2>momento para usar</h2>
            <h2>tus borcegos <span>MBR.</span></h2>
          </div>
          <div className={styles.divSocialNet}>
            <p>Seguinos en las redes</p>
            <Link to="/tienda" className={styles.linkMenu}>
              <i
                className="fa-brands fa-square-facebook fa-xl"
              ></i>
              <i
                className="fa-brands fa-instagram fa-xl"
              ></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
