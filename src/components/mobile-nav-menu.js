import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Pdf from "assets/resume.pdf";

export default function MobileNavMenu({
  setActivePage,
  setMobileMenuOpen,
  mobileMenuOpen,
}) {
  const onResumeClick = () => {
    window.open(Pdf);
  };
  return (
    <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
      <ul>
        <div
          role="button"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={() => setMobileMenuOpen(false)}
          tabIndex={-1}
          className="mobile-nav-icon-close"
        >
          <CloseOutlined />
        </div>
        <li>
          <div
            onClick={() => {
              setActivePage(0);
              setMobileMenuOpen(false);
            }}
            onKeyDown={() => {
              setActivePage(0);
              setMobileMenuOpen(false);
            }}
            role="button"
            tabIndex={-1}
          >
            Work
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setActivePage(1);
              setMobileMenuOpen(false);
            }}
            onKeyDown={() => {
              setActivePage(1);
              setMobileMenuOpen(false);
            }}
            role="button"
            tabIndex={-1}
          >
            About
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setActivePage(2);
              setMobileMenuOpen(false);
            }}
            onKeyDown={() => {
              setActivePage(2);
              setMobileMenuOpen(false);
            }}
            role="button"
            tabIndex={-1}
          >
            Contact
          </div>
        </li>
        <li>
          <div
            className={`nav-item-link`}
            onClick={onResumeClick}
            onKeyDown={(e) => e.key === "Enter" && onResumeClick()}
            tabIndex={0}
            role="button"
          >
            Resume
          </div>
        </li>
      </ul>
    </nav>
  );
}
