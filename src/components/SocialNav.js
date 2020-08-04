import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function SocialNav() {
  return (
    <div className="social-nav">
      <a
        href="https://www.linkedin.com/in/ryanjohnsondev"
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
    </div>
  );
}
