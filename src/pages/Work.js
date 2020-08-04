import React from "react";
import Button from "../components/Button";
import app1 from "../assets/app1.jpg";

export default React.memo(function Work() {
  return (
    <div className="page-container">
      <div className="fold-content-container">
        <div className="fold-content">
          <h1>
            Hi. I&apos;m Ryan, a Full-Stack Developer passionate about
            technology and creating real-world solutions.
          </h1>
        </div>
      </div>
      <div className="work-divider">
        <h4>Featured work</h4>
      </div>
      <div className="work-item">
        <div className="work-visual">
          <img src={app1} className="work-mock-image" />
        </div>
        <div className="work-copy">
          <div className="work-copy-container">
            <h3>Meteorite App</h3>
            <p>
              Aenean commodo ligula eget dolor. Phasellus tempus. Aenean tellus
              metus, bibendum sed, posuere ac, mattis non, nunc. Praesent
              porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor,
              a pretium mi sem ut ipsum.
            </p>
            <div className="work-action-container">
              <Button label="demo" />
              <Button label="Source" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
