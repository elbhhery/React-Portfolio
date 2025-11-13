import { Route, Routes } from "react-router-dom";
import { NavbarDemo } from "./pages/shared/NavbarDemo.tsx";
import { BackgroundRippleEffectDemo } from "./pages/services/services.tsx";
import { BackgroundLinesDemo } from "./pages/HomeBackground.tsx";
import "./App.css";
import Contact from "./pages/about/contact.tsx";
import About from "./pages/about/about.tsx";
import FAQ from "./pages/about/faq.tsx";

function App() {
  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route
          element={
            <>
              <BackgroundLinesDemo />
            </>
          }
          path="/"
        />

        <Route
          element={
            <>
              <BackgroundRippleEffectDemo />
            </>
          }
          path="/services/:slug"
        />
        <Route
          element={
            <>
              <Contact />
            </>
          }
          path="/contact"
        />
        <Route
          element={
            <>
              <About />
            </>
          }
          path="/about"
        />
        <Route
          element={
            <>
              <FAQ />
            </>
          }
          path="/faq"
        />
      </Routes>
    </>
  );
}

export default App;
