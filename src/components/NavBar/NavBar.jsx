import { useState, useEffect } from "react";
import Buttons from "./Buttons/Buttons";
import styles from "./NavBar.module.css";

const NavBar = () => {
  // Estado para controlar el cambio de fondo
  const [isScrolled, setIsScrolled] = useState(false);

  // Función para manejar el scroll
  const handleScroll = () => {
    // Verificar que el ancho de la ventana sea mayor a 768px antes de cambiar el fondo
    if (window.innerWidth > 768) {
      if (window.scrollY > 380) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    } else {
      // Si el ancho es menor o igual a 768px, no cambies el fondo
      setIsScrolled(false);
    }
  };

  // Agregar un efecto de escucha para el scroll cuando se monte el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpieza del efecto cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.navContainer} ${
          isScrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.divContainer}>
          <div className={styles.divLogo}>
            <img src="img/navBar/logo-new.webp" alt="" />
          </div>
          <Buttons />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
