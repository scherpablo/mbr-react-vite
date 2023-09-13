// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";

// const NavBar = () => {
//   // Estado para controlar el cambio de fondo
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Función para manejar el scroll
//   const handleScroll = () => {
//     if (window.scrollY > 380) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   // Agregar un efecto de escucha para el scroll cuando se monte el componente
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     // Limpieza del efecto cuando se desmonte el componente
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <nav className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""}`}>
//         <div className={styles.divContainer}>
//           <div className={styles.divLogo}>
//             <img src="img/header/logo-whiteLight.png" alt="" />
//           </div>
//           <div className={styles.divMenu}>
//             <Link
//               to="https://tienda.estilombr.com.ar/"
//               target="_blank"
//               rel="noreferrer"
//               className={styles.linkMenu}
//             >
//               <p className={styles.pMenu}>Tienda</p>
//             </Link>
//             <Link
//               to="https://www.facebook.com/profile.php?id=100048890242534/"
//               target="_blank"
//               rel="noreferrer"
//               className={styles.linkMenu}
//             >
//               <p className={styles.pMenu}>Facebook</p>
//             </Link>
//             <Link
//               to="https://www.instagram.com/estilo.mbr/"
//               target="_blank"
//               rel="noreferrer"
//               className={styles.linkMenu}
//             >
//               <p className={styles.pMenu}>Instagram</p>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default NavBar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <img src="img/header/logo-whiteLight.png" alt="" />
          </div>
          <div className={styles.divMenu}>
            <Link
              to="https://tienda.estilombr.com.ar/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkMenu}
            >
              <p className={styles.pMenu}>Tienda</p>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100048890242534/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkMenu}
            >
              <p className={styles.pMenu}>Facebook</p>
            </Link>
            <Link
              to="https://www.instagram.com/estilo.mbr/"
              target="_blank"
              rel="noreferrer"
              className={styles.linkMenu}
            >
              <p className={styles.pMenu}>Instagram</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
