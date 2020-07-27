import React from "react";
import SkillsAside from "./SkillsAside";
import axios from "axios";

export default React.memo(function Skills({ desired, active, direction }) {
  const animation =
    (desired > active && "fadeOutUp") ||
    (desired < active && "fadeOutDown") ||
    (direction === "up" && "fadeInDown") ||
    (direction === "down" && "fadeInUp");

  const getResume = async () => {
    console.log(1);
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/file?key=resume.jpg`
    );
    console.log(2);

    var image = new Image();
    image.src =
      "data:image/jpg;base64," +
      _arrayBufferToBase64(JSON.parse(response.data.body).Body.data);

    var w = window.open("");
    w.document.write(image.outerHTML);
  };

  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

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
        <button onClick={() => getResume()}>View resume</button>
      </div>
      <div className="side-content">
        <SkillsAside />
      </div>
    </div>
  );
});
