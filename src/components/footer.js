import React from "react";
import SocialNav from "components/social-nav";

export default function Footer({ page, setActivePage }) {
  return (
    <footer className="page-footer">
      {page !== 2 && (
        <h3>
          Have a project in mind?{" "}
          <span
            role="button"
            className="page-footer-contact"
            onClick={() => setActivePage(2)}
            onKeyDown={(e) => e.key === "Enter" && setActivePage(2)}
            tabIndex={0}
          >
            Get in touch!
          </span>
        </h3>
      )}
      <SocialNav />
      <p className="copyright"> © 2020 Ryan Johnson</p>
    </footer>
  );
}
