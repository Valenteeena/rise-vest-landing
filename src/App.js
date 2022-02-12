import "./styles.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sponsors from "./Components/Sponsors";
import InvestmentInfo from "./Components/InvestmentInfo";
import Assets from "./Components/Assets";
import Goals from "./Components/Goals";
import Testimonial from "./Components/Testimonial";
import MoreInfo from "./Components/MoreInfo";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="App">
      <section className="nav-hero">
        <Header />
        <Hero />
      </section>
      <Sponsors />
      <InvestmentInfo />
      <Assets />
      <Goals />
      <Testimonial />
      <MoreInfo />
      <Footer />
    </main>
  );
}

export default App;
