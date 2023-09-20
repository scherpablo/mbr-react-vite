// import ReactPixel from "react-facebook-pixel";
import { Link } from "react-router-dom";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  // const knowThem = () => {
  //   ReactPixel.trackCustom("Accesories Button", {
  //     location: "Sección Accesorios",
  //     value: "Conocelos",
  //   });
  // };

  return (
    <>
      <section className={styles.containerSection}>
        <div className={styles.divSection}>
          <div className={styles.divImgSection}>
            {/* <img src="/img/sectionTwo/img3-sectionTwo.png" alt="" /> */}
          </div>
          <div className={styles.divTextSection}>
            <h2>Accesorios</h2>
            <p>
              {/* <span>Completa tu Look:</span> Los detalles marcan la diferencia.
              Nuestra gama de accesorios complementará tus borcegos y tu estilo
              personal, añadiendo un toque de distinción a cada atuendo.
              <br></br>
              <br></br>
              <span>Estilo en Cada Detalle:</span> Desde cinturones hasta
              fajas, nuestros accesorios están diseñados pensando en
              la moda y la funcionalidad. Cada pieza es una declaración de
              estilo por sí misma.<br></br>
              <br></br>
              <span>Regalos Perfectos:</span> Ya sea para ti mismo o para
              alguien especial, nuestros accesorios son regalos ideales que
              expresan buen gusto y atención al detalle. Sorprende a tus seres
              queridos con un toque de elegancia.<br></br>
              <br></br> */}
              <span>Personaliza tu Estilo:</span> Los accesorios son la clave
              para personalizar tu estilo. Experimenta con diferentes
              combinaciones y encuentra el equilibrio perfecto entre moda y
              comodidad con Estilo MBR.
            </p>
            <Link
              to="https://tienda.estilombr.com.ar/accesorios/"
              target="_blank"
              rel="noreferer"
            >
              <button /*onClick={knowThem}*/>Conocelos</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
