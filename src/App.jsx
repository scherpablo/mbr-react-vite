import { Helmet } from "react-helmet";
import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
// import SectionFour from './components/SectionFour/SectionFour'
import SectionFive from "./components/SectionFive/SectionFive";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
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
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <SectionFour /> */}
      <SectionFive />
      <Footer />
    </>
  );
};

export default App;
