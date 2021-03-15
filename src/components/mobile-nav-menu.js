import React from "react";
import { CloseOutlined } from "@ant-design/icons";

export default function MobileNavMenu({
  setActivePage,
  setMenuDelay,
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
          tabIndex={0}
          className="mobile-nav-icon-close"
        >
          <CloseOutlined />
        </div>
        <li>
          <div
            onClick={() => {
              setActivePage(0);
              setMenuDelay(false);
            }}
            onKeyDown={() => setActivePage(0)}
            role="button"
            tabIndex={0}
          >
            Work
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setActivePage(1);
              setMenuDelay(false);
            }}
            onKeyDown={() => setActivePage(2)}
            role="button"
            tabIndex={0}
          >
            About
          </div>
        </li>
      </ul>
    </nav>
  );
}
