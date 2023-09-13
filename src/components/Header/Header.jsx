import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={`${styles.section} ${styles.header}`} id="home">
        <div className={styles.divHeader}>
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
