import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import BookAppointment from "./pages/bookappointments";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;