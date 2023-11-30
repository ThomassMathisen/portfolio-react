import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div className="div">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Test2</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Contact</section>
    </div>
  );
}

export default App;
