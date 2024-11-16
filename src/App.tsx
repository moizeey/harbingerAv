import { MenuProvider } from "./context/navContext";
import AboutP from "./pages/AboutP";
import ContactP from "./pages/ContactP";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F4F4F5] ">
      <MenuProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<AboutP />} />
            <Route path="/contact" element={<ContactP />} />
          </Routes>
        </Router>
      </MenuProvider>
    </div>
  );
}
export default App;
