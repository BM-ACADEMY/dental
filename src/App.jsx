import About from "./components/About";
import Herosection from "./components/Herosection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Service/>
      <Herosection/>
    </>
  );
}
