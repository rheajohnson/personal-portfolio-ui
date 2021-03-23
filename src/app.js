import React, { useState, useEffect } from "react";
import Header from "components/header";
import Work from "pages/work";
import About from "pages/about";
import Contact from "pages/contact";
import Footer from "components/footer";
import PageTransition from "components/page-transition";
import OutlineAccessibilityWrapper from "components/outline-accessibility-wrapper";

import scrollUp from "helper/scroll-up";

const App = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      scrollUp();
      setLoading(false);
    }, 1200);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  const setActivePage = (page) => {
    setLoading(true);
    setTimeout(() => {
      setPage(page);
      setLoading(false);
      scrollUp();
    }, 1200);
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return <Work />;
      case 1:
        return <About />;
      case 2:
        return <Contact />;
      default:
        console.error("No case for page index: ", page);
    }
  };

  return (
    <OutlineAccessibilityWrapper>
      <div className="app">
        <Header setActivePage={setActivePage} page={page} />
        <main>{renderPage()}</main>
        <Footer />
        <PageTransition loading={loading} />
      </div>
    </OutlineAccessibilityWrapper>
  );
};

export default App;
