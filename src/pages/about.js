import React from "react";
import profile from "../assets/profile.png";

export default React.memo(function About() {
  return (
    <section className="about">
      <div className="about-content-image">
        <img src={profile} alt="profile" />
      </div>
      <div className="about-content-copy">
        <section className="sub-header">
          <h2>A little about me</h2>
        </section>
        <p>
          I&apos;m a full-stack developer based in Boise, Idaho. I&apos;ve
          always had an interest for technology and the problems it can solve.
          I’ve had a variety of roles in tech design and development, working
          with teams large and small to build awesome experiences. Outside of
          work, I enjoy reading, running, and playing role-playing games.
        </p>
        <p>
          I enjoy meeting new people and exploring opportunities. If you have a
          project that you want to get started, think you need my help with
          something, or just fancy saying hey — then don&apos;t hesitate to
          email me at{" "}
          <a href="mailto:rjohnsondev@protonmail.com" alt="get-in-touch">
            rjohnsondev@protonmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
});
