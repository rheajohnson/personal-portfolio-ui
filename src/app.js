import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Work from "./pages/Work";
import About from "./pages/about/About";
import SocialNav from "./components/SocialNav";

const App = () => {
  const [active, setActive] = useState(0);
  // just run the effect on pathname and/or search change
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [active]);

  return (
    <div className="App">
      <Header setActive={setActive} active={active} />
      {active === 0 && <Work active={active} />}
      {active === 1 && <About active={active} />}
      {active === 2 && <About active={active} />}
      <footer>
        <span className="contact-statement">
          <h4>
            Have a project in mind?{" "}
            <a className="email-link" href="asd" alt="sd">
              Get in touch!
            </a>
          </h4>

          <SocialNav />
        </span>
        <p className="copyright"> © 2020 Ryan Johnson</p>
      </footer>
    </div>
  );
};

export default App;
