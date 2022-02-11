import "./styles.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Sponsors from "./Components/Sponsors";

function App() {
  return (
    <main className="App">
      <section className="nav-hero">
        <Header />
        <Hero />
      </section>
      <Sponsors />
    </main>
  );
}

export default App;
