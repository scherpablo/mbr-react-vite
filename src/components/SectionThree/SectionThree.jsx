import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./SectionThree.module.css";

const SectionThree = () => {
  const explorers = () => {
    ReactPixel.trackCustom("HeaderButtonExplorer", "Exploralos", {
      value: "Exploralos",
    });
  };

  return (
    <>
      <section className={styles.containerSection}>
        <div className={styles.divSection}>
          <div className={styles.divImgSection}>
            {/* <img src="img/sectionTwo/img3-sectionTwo.png" alt="" /> */}
          </div>
          <div className={styles.divTextSection}>
            <h2>Borcegos</h2>
            <p>
              {/* <span>Descubre la Elegancia y la Durabilidad:</span> En Estilo
              MBR, nuestros borcegos son una combinación perfecta de estilo y
              resistencia. Diseñados para resistir cualquier terreno mientras
              mantienen tu estilo intacto.<br></br>
              <br></br> */}
              <span>Pisa con Confianza:</span> Nuestra colección de borcegos te
              brinda la confianza que necesitas para enfrentar cualquier
              desafío. Ya sea en la ciudad o en la naturaleza, nuestros borcegos
              te llevarán allí con comodidad y estilo.
              {/* <br></br>
              <br></br> */}
              {/* <span>Descubre la Elegancia y la Durabilidad:</span> ¿Buscas un
              toque de sofisticación en tu vestuario diario? Nuestros borcegos
              no solo son funcionales, sino que también añaden un toque de
              elegancia a tu estilo único. Descubre cómo puedes destacar con
              Estilo MBR.<br></br>
              <br></br>
              <span>Hechos para Durar:</span> No comprometemos la calidad. Cada
              par de borcegos Estilo MBR está construido con los mejores
              materiales para asegurar que te acompañen durante años. Invierte
              en calidad, invierte en Estilo MBR. */}
            </p>
            <Link
              to="https://tienda.estilombr.com.ar/calzado/borcegos/"
              target="_blank"
              rel="noreferer"
            >
              <button onClick={explorers}>Exploralos</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
