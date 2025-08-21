import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
    <div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-white"
              >
                Muhammad Anas
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/80"
              >
                MERN Stack Developer
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <ScrollProgress />
          <WaveBackground />
          <Navbar isDark={isDark} />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

          <main>
            <Hero />
            <About />

            <ExperienceCard/>
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
