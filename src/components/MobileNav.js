import React from "react";
// import { Link } from "react-scroll";

export default function MobileNav({ setMenu }) {
  return (
    <nav onClick={setMenu} className="nav-mobile-icon">
      <div
        id="nav-icon3"
        role="button"
        onClick={() => setMenu(true)}
        onKeyDown={() => setMenu(true)}
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
