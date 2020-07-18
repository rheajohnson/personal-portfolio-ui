import React from "react";
import SkillsAside from "./SkillsAside";

export default React.memo(function Skills({ desired, active, direction }) {
  const animation =
    (desired > active && "fadeOutUp") ||
    (desired < active && "fadeOutDown") ||
    (direction === "up" && "fadeInDown") ||
    (direction === "down" && "fadeInUp");

  return (
    <div className={`content animated ${animation}`}>
      <div className="main-content">
        <h2>Skills</h2>
        <p>
          I&apos;m experienced with a variety of tools and technologies,
          including: React, Node.js, Postgres, Python, PySpark, and Amazon Web
          Services. Prior to my career as a developer, I was a UX/UI designer
          for 3 years. This proves a valuable skill for me today, as I am able
          to confidently implement best-practice user experiences.
        </p>
        <button>View resume</button>
      </div>
      <div className="side-content">
        <SkillsAside />
      </div>
    </div>
  );
});
