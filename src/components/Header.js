import React from "react";
import Logo from "../assets/logo.svg";
import NavList from "../components/NavList";
import MobileNav from "../components/MobileNav";

export default function Header({ setActive, active }) {
  return (
    <header className="header">
      <div
        role="button"
        tabIndex={0}
        className="brand-container"
        onKeyDown={() => setActive(0)}
        onClick={() => setActive(0)}
      >
        <img src={Logo} className="logo" alt="Ryan Johnson - Developer" />
        <div className="name-container">
          <h3>Ryan Johnson</h3>
          <h4>Developer</h4>
        </div>
      </div>
      <NavList setActive={setActive} active={active} />
      <MobileNav />
    </header>
  );
}
