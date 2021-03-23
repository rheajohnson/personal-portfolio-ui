import React from "react";
import { CloseOutlined } from "@ant-design/icons";

export default function MobileNavMenu({
  setActivePage,
  setMobileMenuOpen,
  mobileMenuOpen,
}) {
  return (
    <nav className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
      <ul>
        <div
          role="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onKeyDown={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            onKeyDown={() => setActivePage(0)}
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
            onKeyDown={() => setActivePage(1)}
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
            onKeyDown={() => setActivePage(2)}
            role="button"
            tabIndex={-1}
          >
            Contact
          </div>
        </li>
      </ul>
    </nav>
  );
}
