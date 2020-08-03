import React from "react";
import Logo from "../assets/logo.svg";
import NavList from "../components/NavList";
import MobileNav from "../components/MobileNav";

export default function Header({ setActive, active }) {
  return (
    <header className="header">
      <div className="brand-container">
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
