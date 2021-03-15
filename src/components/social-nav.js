import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

export default function SocialNav() {
  return (
    <nav className="social-nav">
      <a
        href="https://www.linkedin.com/in/ryanjohnsondev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinOutlined />
      </a>
      <a
        href="https://github.com/rjohnson91"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubOutlined />
      </a>
    </nav>
  );
}
