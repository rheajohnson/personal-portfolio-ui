import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import NavList from "../components/NavList";
import MobileNavButton from "./MobileNavButton";
import MobileNavMenu from "./MobileNavMenu";

export default function Header({ setActive, active }) {
  const [menu, setMenu] = useState(false);

  const setMenuDelay = (state) => {
    setTimeout(() => setMenu(state), 0);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu]);

  return (
    <>
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
        <MobileNavButton setMenu={setMenu} menu={menu} />
        <MobileNavMenu
          setActive={setActive}
          setMenuDelay={setMenuDelay}
          setMenu={setMenu}
          menu={menu}
        />
      </header>
    </>
  );
}
