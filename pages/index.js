import Navbar from "../components/UI/Navbar";
import Hero from "../elements/Home/Hero";
import HTMLHead from "../components/HTMLHead";
import About from "../elements/Home/About";
import Sectors from "../elements/Home/Sectors";
import Testimony from "../elements/Home/Testimony";
import Gallery from "../elements/Home/Gallery";
import Contact from "../elements/Home/Contact";
import Footer from "../elements/Home/Footer";


export default function Home() {

  return (
    <>
      <HTMLHead/>
      <Navbar/>
      <main className={"snap-y snap-center snap-proximity lg:pt-0 pt-10"}>
        <Hero/>
        <About/>
        <Sectors/>
        <Testimony/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </main>

    </>
  )
}
