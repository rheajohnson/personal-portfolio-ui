import React from "react";
import SocialNav from "../components/SocialNav";

export default function Footer() {
  return (
    <footer>
      <span className="contact-statement">
        <h4>
          Have a project in mind?{" "}
          <span>
            <a className="email-link" href="asd" alt="sd">
              Get in touch!
            </a>
          </span>
        </h4>

        <SocialNav />
      </span>
      <p className="copyright"> © 2020 Ryan Johnson</p>
    </footer>
  );
}
