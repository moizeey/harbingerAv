import About from "../components/About";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="">
      <Landing />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
