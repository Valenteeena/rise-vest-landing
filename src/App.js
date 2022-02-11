import "./styles.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sponsors from "./Components/Sponsors";
import InvestmentInfo from "./Components/InvestmentInfo";
import Assets from "./Components/Assets";

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
    </main>
  );
}

export default App;
