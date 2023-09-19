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
