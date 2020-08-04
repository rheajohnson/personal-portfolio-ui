import React from "react";

export default React.memo(function About() {
  return (
    <div className="page-container">
      <div className="about-content-container">
        <div className="about-content">
          <h1>A little about me.</h1>
          <p>
            I&apos;m a Full-Stack Developer based in Boise, Idaho. I’m obsessed
            with technology and enjoy creating applications that solve
            real-world problems. I’ve worked in a variety of roles with teams
            large and small to build awesome experiences. Outside of work, I
            enjoy reading, watching documentaries and learning new technologies.
          </p>

          <p>
            I always enjoy meeting new people and exploring opportunities. If
            you have a project that you want to get started, think you need my
            help with something, or just fancy saying hey — then email me at{" "}
            <a href="" alt="">
              rjohnsondev@protonmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
});
