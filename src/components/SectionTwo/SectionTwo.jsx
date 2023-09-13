// import { Link } from "react-router-dom";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <>
      <section className={styles.containerSection}>
        <div className={styles.divSection}>
          <div className={styles.divImgSection}>
            <img src="img/sectionTwo/img3-sectionTwo.png" alt="" />
          </div>
          <div className={styles.divTextSection}>
            <h2>Accesorios</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, corporis esse aliquam sed, ullam recusandae ipsam totam porro nam repellendus quae? Voluptas soluta aspernatur aut dolore expedita blanditiis eligendi architecto harum consequuntur quo obcaecati velit optio, minus illo facilis exercitationem, neque reiciendis officia adipisci. Eius modi saepe aperiam rem assumenda?
            </p>
            <button>Conocelos</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
