import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Herosection from "./components/Herosection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Service from "./components/Service";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Service/>
      <Herosection/>
      <Review/>
      <Gallery/>
      <Footer/>
    </>
  );
}
