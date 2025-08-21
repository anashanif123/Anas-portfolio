import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import WaveBackground from "./components/WaveBackground";
import ScrollProgress from "./components/ScrollProgress";
import ExperienceCard from "./components/ExperienceCard";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    console.log("HTML classes:", html.className);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      console.log("Theme toggled! New value:", !prev);
      return !prev;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <WaveBackground />
      <Navbar isDark={isDark} />
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <ExperienceCard />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
