import About from "../../features/about";
import CTA from "../../features/cta";
import FAQ from "../../features/faq";
import Footer from "../../features/footer";
import Hero from "../../features/hero";
import Navbar from "../../features/navbar";
import Services from "../../features/ourServices/indext";
import TargetAudience from "../../features/targets";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TargetAudience />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
