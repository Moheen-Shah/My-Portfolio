import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Work from "./components/Work";

const STORAGE_KEY = "moin-portfolio-theme";

function getSavedTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? saved === "dark" : true;
  } catch {
    return true;
  }
}

export default function App() {
  const [darkMode, setDarkMode] = useState(getSavedTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, darkMode ? "dark" : "light");
    } catch {
      // Ignore storage errors, e.g. private mode or blocked storage.
    }
  }, [darkMode]);

  return (
    <div
      className={`portfolio-page ${darkMode ? "dark" : "light"}`}
      onPointerMove={(event) => {
        event.currentTarget.style.setProperty("--cursor-x", `${event.clientX}px`);
        event.currentTarget.style.setProperty("--cursor-y", `${event.clientY}px`);
      }}
    >
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((mode) => !mode)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
