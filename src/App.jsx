import { Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import BookAppointment from "./pages/bookappointments";

// Only one project detail page right now: Promo NXT
import PromoNxt from "./pages/promonxt";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <main>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookappointment" element={<BookAppointment />} />

          {/* Project detail: PROMO NXT */}
          <Route path="/projects/promo-nxt" element={<PromoNxt />} />

          {/* Fallback 404 */}
          <Route
            path="*"
            element={
              <div style={{ padding: "40px", textAlign: "center" }}>
                <h1>404 – Page Not Found</h1>
                <p>The page you&apos;re looking for doesn&apos;t exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;