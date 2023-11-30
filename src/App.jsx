import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="div">
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Test3</section>
      <section>Test2</section>
      <section>Portfolio</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
