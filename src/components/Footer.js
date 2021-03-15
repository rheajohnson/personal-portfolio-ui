import React from "react";
import SocialNav from "./social-nav";

export default function Footer() {
  return (
    <footer>
      <span>
        <h3>
          Have a project in mind?{" "}
          <a
            className="email-link"
            href="mailto:rjohnsondev@protonmail.com"
            alt="get-in-touch"
          >
            Get in touch!
          </a>
        </h3>
      </span>
      <SocialNav />
      <p className="copyright"> © 2020 Ryan Johnson</p>
    </footer>
  );
}
