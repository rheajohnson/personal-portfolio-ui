import React from "react";
import Particles from "react-particles-js";
import deer from "./images/deer.svg";
export default React.memo(function About({ desired, active, direction }) {
  const animation =
    (desired > active && "fadeOutUp") ||
    (desired < active && "fadeOutDown") ||
    (direction === "up" && "fadeInDown") ||
    (direction === "down" && "fadeInUp");
  const particleConfig = {
    fps_limit: 28,
    particles: {
      number: {
        value: 200,
        density: {
          enable: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 30,
        opacity: 0.4,
      },
      move: {
        speed: 1,
      },
      opacity: {
        anim: {
          enable: true,
          opacity_min: 0.05,
          speed: 2,
          sync: false,
        },
        value: 0.4,
      },
    },
    polygon: {
      enable: true,
      scale: 0.5,
      type: "inline",
      move: {
        radius: 10,
      },
      url: deer,
      inline: {
        arrangement: "equidistant",
      },
      draw: {
        enable: true,
        stroke: {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
    retina_detect: true,
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          size: 6,
          distance: 40,
        },
      },
    },
  };
  return (
    <div className={`content animated ${animation}`}>
      <div className="main-content">
        <h2>About</h2>
        <p>
          I’m a web developer based in Boise, Idaho. I have a passion for
          learning and building things. I started my journey in 2016 as a UX/UI
          designer. Since then, I’ve worked with teams large and small to build
          awesome experiences.
        </p>
      </div>
      <div className="side-content">
        <Particles className="here" params={particleConfig} />
      </div>
    </div>
  );
});
