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
              A simple app that provides data on meteors through the years. I
              used NodeJS with GraphQL to fetch data from a public API that
              provides meteorite information. React was for the frontend, along
              with the Ant Design UI library.
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
