import "./App.css";
import About from "./components/about";
import CTA from "./components/cta";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/ourServices/indext";
import TargetAudience from "./components/targets";
import Providers from "./providers";
// import axios from "axios";

function App() {
  return (
    <Providers>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TargetAudience />
      <FAQ />
      <CTA />
      <Footer />
    </Providers>
  );
}

export default App;
