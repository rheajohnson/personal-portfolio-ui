import React from "react";
import Logo from "./images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} className="logo" alt="Ryan Johnson | Developer" />
      <div className="name-container">
        <h3>Ryan Johnson</h3>
        <h4>Developer</h4>
      </div>
    </header>
  );
}
