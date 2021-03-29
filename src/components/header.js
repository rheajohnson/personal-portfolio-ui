import React, { useState, useEffect } from "react";
import Logo from "assets/logo.svg";
import MainNav from "components/main-nav";
import MobileNavButton from "components/mobile-nav-button";
import MobileNavMenu from "components/mobile-nav-menu";

export default function Header({ setActivePage, page }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          className="logo-container"
          onKeyDown={(e) => e.key === "Enter" && setActivePage(0)}
          onClick={() => setActivePage(0)}
          tabIndex={0}
        >
          <img src={Logo} alt="Ryan Johnson - Developer" />
          <div className="logo-container-signature">
            <h4>Ryan Johnson</h4>
            <p>Developer</p>
          </div>
        </div>
        <MainNav setActivePage={setActivePage} page={page} />
        <MobileNavButton setMobileMenuOpen={setMobileMenuOpen} />
        <MobileNavMenu
          setActivePage={setActivePage}
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />
      </header>
    </>
  );
}
