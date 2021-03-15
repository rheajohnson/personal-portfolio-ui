import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import MainNav from "./main-nav";
import MobileNavButton from "./mobile-nav-button";
import MobileNavMenu from "./mobile-nav-menu";

export default function Header({ setActivePage, page }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setMenuDelay = (state) => {
    setTimeout(() => setMobileMenuOpen(state), 0);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header>
        <div
          role="button"
          tabIndex={0}
          className="logo-container"
          onKeyDown={() => setActivePage(0)}
          onClick={() => setActivePage(0)}
        >
          <img src={Logo} alt="Ryan Johnson - Developer" />
          <div className="logo-container-signature">
            <h3>Ryan Johnson</h3>
            <h4>Developer</h4>
          </div>
        </div>
        <MainNav setActivePage={setActivePage} page={page} />
        <MobileNavButton
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
        <MobileNavMenu
          setActivePage={setActivePage}
          setMenuDelay={setMenuDelay}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
      </header>
    </>
  );
}
