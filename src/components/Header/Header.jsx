import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../NavBar/NavBar";
import styles from "./Header.module.css";

const Header = () => {
  const handleExplorerClick = () => {
    fbq("track", "Purchase", {
      value: 100,
      currency: "USD",
    });
  };

  return (
    <>
      <header className={`${styles.section} ${styles.header}`} id="home">
        <Helmet>
          <script>
            {`
            <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '277120668505791');
            fbq('track', 'PageView');
            fbq('track', 'Purchase');
            </script>
            <script>
              function trackCompra() {
                fbq('track', 'Compra', {
                    value: 100.00, // El valor de la compra
                    currency: 'USD' // La moneda de la compra
                });
              }
            </script>
            <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=277120668505791&ev=PageView&noscript=1"
            /></noscript>
        `}
          </script>
        </Helmet>
        <div className={styles.divHeader}>
          <NavBar />
        </div>
        <div className={styles.divBottomHeader}>
          <h3>Somos estilo MBR</h3>
          <p>Encuentra tu borcegol ideal</p>
          <Link
            to="https://tienda.estilombr.com.ar/"
            target="_blank"
            rel="noreferer"
          >
            <button
              className={styles.buttonHeader}
              onClick={handleExplorerClick}
            >
              Explorar
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
