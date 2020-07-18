import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function About() {
  useEffect(() => {
    var pathEls = document.querySelectorAll("path");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(2000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  });

  return (
    <div className="box">
      <div className="wave one"></div>
      <div className="wave two"></div>
      <div className="wave three"></div>
    </div>
  );
}
