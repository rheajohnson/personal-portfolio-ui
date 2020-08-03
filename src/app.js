import React, { useState } from "react";
import Header from "./components/Header";
import Work from "./pages/Work";
import About from "./pages/about/About";
import SocialNav from "./components/SocialNav";

const App = () => {
  const [active, setActive] = useState(0);

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
