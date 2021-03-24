import React, { useState, useEffect } from "react";
import Header from "components/header";
import Work from "pages/work";
import About from "pages/about";
import Contact from "pages/contact";
import Footer from "components/footer";
import PageTransition from "components/page-transition";
import AppWrapper from "components/app-wrapper";
import scrollUp from "helper/scroll-up";

const App = () => {
  const [page, setPage] = useState(
    JSON.parse(sessionStorage.getItem("rj_page")) || 0
  );
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
    sessionStorage.setItem("rj_page", page);
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
    <AppWrapper>
      <Header setActivePage={setActivePage} page={page} />
      <main>{renderPage()}</main>
      <Footer setActivePage={setActivePage} page={page} />
      <PageTransition loading={loading} />
    </AppWrapper>
  );
};

export default App;
