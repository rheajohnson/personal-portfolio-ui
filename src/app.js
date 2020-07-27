import React, { useState, useEffect } from "react";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Skills from "./skills";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineGitlab,
  AiOutlineMail,
} from "react-icons/ai";
import debounce from "./debounce";
import NavList from "./nav-list";
import Particles from "react-particles-js";

const App = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [active, setActive] = useState(0);
  const [desired, setDesired] = useState(0);
  const [navActive, setNavActive] = useState(true);
  const [direction, setDirection] = useState(null);

  const particleConfig = {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      size: {
        value: 1,
        random: true,
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      line_linked: {
        opacity: 0.1,
      },
      move: {
        speed: 1.5,
      },
    },
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollUp = e.deltaY < 0;
      if (scrollUp) {
        setScrollDirection("up");
      } else if (!scrollUp) {
        setScrollDirection("down");
      }
    };
    window.addEventListener("wheel", debounce(handleScroll, 50), {
      passive: false,
    });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollDirection === "up" && active > 0 && navActive) {
      setDesired(active - 1);
    }
    if (scrollDirection === "down" && active < 2 && navActive) {
      setDesired(active + 1);
    }
    setScrollDirection(null);
  }, [scrollDirection, active, navActive]);

  useEffect(
    (desiredRef = desired) => {
      if (desiredRef > active) setDirection("down");
      if (active > desiredRef) setDirection("up");
      if (desiredRef !== active && navActive) {
        setActive(desiredRef);
      }
    },
    [active, navActive]
  );

  useEffect(() => {
    setNavActive(false);
    const timer = setTimeout(() => {
      setNavActive(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [desired]);

  return (
    <div className="App">
      <Particles className="particles-js" params={particleConfig} />
      <Header />
      <NavList setDesired={setDesired} desired={desired} />
      <div className="content">
        {active === 0 && (
          <About desired={desired} active={active} direction={direction} />
        )}
        {active === 1 && (
          <Skills desired={desired} active={active} direction={direction} />
        )}
        {active === 2 && (
          <Contact desired={desired} active={active} direction={direction} />
        )}
      </div>
      <div className="social-nav">
        <a
          href="https://github.com/rjohnson91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href="https://github.com/rjohnson91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub />
        </a>
        <a
          href="https://github.com/rjohnson91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGitlab />
        </a>
        <a
          href="https://github.com/rjohnson91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>
      </div>
      {active !== 2 && navActive === true && <div className="mouse"></div>}
    </div>
  );
};

export default App;
