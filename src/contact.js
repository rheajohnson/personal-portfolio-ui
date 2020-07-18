import React from "react";
import ContactForm from "./ContactForm.js";

export default React.memo(function About({ desired, active, direction }) {
  const animation =
    (desired > active && "fadeOutUp") ||
    (desired < active && "fadeOutDown") ||
    (direction === "up" && "fadeInDown") ||
    (direction === "down" && "fadeInUp");

  return (
    <div className={`content animated ${animation}`}>
      <div className="main-content">
        <h2>Contact</h2>
        <p>
          I'm currently available for new opportunities. If you have a project
          that you want to get started, think you need my help with something,
          or just fancy saying hey — then get in touch!
        </p>
        <p>
          Use the form or email me directly at:{" "}
          <a href="">rjohnsondev@protonmail.com</a>
        </p>
      </div>
      <div className="side-content">
        <ContactForm />
      </div>
    </div>
  );
});
