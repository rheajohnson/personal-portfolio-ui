import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Work from "./pages/Work";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    scrollUp();
  }, [active]);

  useEffect(() => {
    setTimeout(() => {
      scrollUp();
      setLoading(false);
    }, 1200);
  }, []);

  const scrollUp = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    return active === 0 ? (
      <Work active={active} />
    ) : active === 1 ? (
      <About active={active} />
    ) : (
      <About active={active} />
    );
  };

  const setActiveDelay = (page) => {
    setLoading(true);
    setTimeout(() => {
      setActive(page);
      setLoading(false);
      scrollUp();
    }, 1200);
  };

  return (
    <>
      <div classNameName="App">
        <Header setActive={setActiveDelay} active={active} />
        {renderPage()}
        <Footer />
      </div>
      <div className={`page-transition ${loading ? "loading" : ""}`} />
    </>
  );
};

export default App;
